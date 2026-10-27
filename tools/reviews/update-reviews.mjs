#!/usr/bin/env node
/**
 * Hasta yorumlarını günceller: src/content/reviews/reviews.json
 *
 * Kaynaklar
 *  - Google: Google Business Profile API (profil sahibinin kendi yorumları).
 *    Gerekli ortam değişkenleri: GBP_CLIENT_ID, GBP_CLIENT_SECRET, GBP_REFRESH_TOKEN,
 *    GBP_ACCOUNT_ID, GBP_LOCATION_ID. Yoksa Google adımı atlanır, mevcut veri korunur.
 *  - Doktor Takvimi: herkese açık API olmadığı için src/content/reviews/doktortakvimi.json
 *    dosyasına elle eklenen yorumlar.
 *
 * Çeviri: Her yorum yalnızca bir kez (ya da metni değişince) Claude API ile
 * en/ru/de/fr/bg dillerine çevrilir ve işlem etiketleri atanır. ANTHROPIC_API_KEY gerekir;
 * yoksa yorum çevrilmeden kaydedilir ve sitede, çevirisi olan dillerde görünmez.
 *
 * Türkçe sayfalarda yorumlar hiçbir zaman gösterilmez (tanıtım mevzuatı); bu dosya
 * yalnızca yabancı dil sayfalarını besler.
 *
 * Çalıştırma: node tools/reviews/update-reviews.mjs
 */
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const DIR = path.join(ROOT, 'src/content/reviews');
const OUT = path.join(DIR, 'reviews.json');

const TARGET_LANGS = ['en', 'ru', 'de', 'fr', 'bg'];
const TAGS = ['rhinoplasty', 'septoplasty', 'otoplasty', 'blepharoplasty', 'neck', 'botox', 'filler', 'meso', 'rejuvenation', 'ent'];
const MODEL = process.env.REVIEWS_MODEL || 'claude-haiku-5-5';
const STAR = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5 };

const readJson = async (f) => JSON.parse(await readFile(path.join(DIR, f), 'utf8'));
const sha = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16);

/** "Ayşe Yılmaz" → "Ayşe Y."; tek kelimelik adlar olduğu gibi kalır. */
function shortName(name) {
  const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[parts.length - 1][0].toLocaleUpperCase('tr')}.`;
}

/** Google, çevirdiği yorumlara "(Translated by Google) ... (Original) ..." ekler: yalnızca özgün metni al. */
function originalGoogleText(comment) {
  const c = String(comment || '');
  const i = c.indexOf('(Original)');
  if (i >= 0) return c.slice(i + '(Original)'.length).trim();
  return c.replace(/\(Translated by Google\)[\s\S]*$/, '').trim();
}

async function fetchGoogle() {
  const e = process.env;
  const need = ['GBP_CLIENT_ID', 'GBP_CLIENT_SECRET', 'GBP_REFRESH_TOKEN', 'GBP_ACCOUNT_ID', 'GBP_LOCATION_ID'];
  if (need.some((k) => !e[k])) {
    console.log('Google: kimlik bilgileri tanımlı değil, atlanıyor.');
    return null;
  }
  const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: e.GBP_CLIENT_ID,
      client_secret: e.GBP_CLIENT_SECRET,
      refresh_token: e.GBP_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  if (!tokenRes.ok) throw new Error(`Google token hatası: ${tokenRes.status} ${await tokenRes.text()}`);
  const { access_token } = await tokenRes.json();

  const base = `https://mybusiness.googleapis.com/v4/accounts/${e.GBP_ACCOUNT_ID}/locations/${e.GBP_LOCATION_ID}/reviews`;
  const reviews = [];
  let pageToken = '';
  let rating = null;
  let count = null;
  do {
    const url = `${base}?pageSize=50${pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : ''}`;
    const res = await fetch(url, { headers: { authorization: `Bearer ${access_token}` } });
    if (!res.ok) throw new Error(`Google yorum hatası: ${res.status} ${await res.text()}`);
    const data = await res.json();
    rating = data.averageRating ?? rating;
    count = data.totalReviewCount ?? count;
    for (const r of data.reviews || []) {
      const text = originalGoogleText(r.comment);
      if (!text) continue; // yalnızca yıldız verilmiş yorumlar puana dahil, listede gösterilmez
      reviews.push({
        id: `g-${r.reviewId}`,
        source: 'google',
        author: shortName(r.reviewer?.displayName),
        rating: STAR[r.starRating] || null,
        date: (r.createTime || '').slice(0, 10),
        original: text,
      });
    }
    pageToken = data.nextPageToken || '';
  } while (pageToken);

  console.log(`Google: ${reviews.length} yazılı yorum, puan ${rating}, toplam ${count}.`);
  return { rating: rating ? Math.round(rating * 10) / 10 : null, count, reviews };
}

async function loadDoktortakvimi() {
  const d = await readJson('doktortakvimi.json');
  const reviews = (d.reviews || [])
    .filter((r) => r && r.text && String(r.text).trim())
    .map((r) => ({
      id: r.id ? `dt-${String(r.id).replace(/^dt-/, '')}` : `dt-${sha(`${r.date}|${r.author}|${r.text}`)}`,
      source: 'doktortakvimi',
      author: shortName(r.author),
      rating: Number(r.rating) || null,
      date: String(r.date || '').slice(0, 10),
      original: String(r.text).trim(),
    }));
  console.log(`Doktor Takvimi: ${reviews.length} yorum (elle eklenen).`);
  return { rating: d.rating ?? null, count: d.count ?? null, reviews };
}

async function translate(text) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;
  const prompt = `You translate patient reviews for the website of a Turkish ENT and facial plastic surgeon (Op. Dr. Murat Ayata, Kırklareli).

Review:
"""
${text}
"""

Return ONLY a JSON object with these keys:
- "lang": ISO 639-1 code of the review's original language
- "tags": array of procedures the review clearly mentions, chosen only from ${JSON.stringify(TAGS)} ("ent" = ear, nose, throat, sinus, hearing or other non-aesthetic ENT care). Empty array if none is clearly mentioned.
- ${TARGET_LANGS.map((l) => `"${l}"`).join(', ')}: faithful translations into English, Russian, German, French and Bulgarian.

Translation rules: keep the reviewer's meaning, tone and level of enthusiasm exactly; do not add, soften, embellish or omit anything; no medical claims that are not in the original; keep names as written; natural, fluent phrasing a native speaker would write. If the original is already in one of those languages, return it unchanged for that key.`;

  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': key,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ model: MODEL, max_tokens: 4000, messages: [{ role: 'user', content: prompt }] }),
    });
    if (res.ok) {
      const data = await res.json();
      const out = (data.content || []).map((c) => c.text || '').join('');
      const json = out.slice(out.indexOf('{'), out.lastIndexOf('}') + 1);
      try {
        const parsed = JSON.parse(json);
        if (TARGET_LANGS.every((l) => typeof parsed[l] === 'string' && parsed[l].trim())) {
          return {
            lang: String(parsed.lang || 'tr').toLowerCase().slice(0, 2),
            tags: (parsed.tags || []).filter((t) => TAGS.includes(t)),
            text: Object.fromEntries(TARGET_LANGS.map((l) => [l, parsed[l].trim()])),
          };
        }
      } catch { /* yeniden dene */ }
    } else if (res.status < 500 && res.status !== 429) {
      throw new Error(`Çeviri hatası: ${res.status} ${await res.text()}`);
    }
    await new Promise((r) => setTimeout(r, attempt * 3000));
  }
  console.warn('Çeviri başarısız, yorum bir sonraki çalışmada tekrar denenecek.');
  return null;
}

async function main() {
  const existing = await readJson('reviews.json');
  const byId = new Map((existing.reviews || []).map((r) => [r.id, r]));

  let google = null;
  try {
    google = await fetchGoogle();
  } catch (err) {
    console.error(String(err));
    console.log('Google verisi alınamadı, mevcut Google yorumları korunuyor.');
  }
  const dt = await loadDoktortakvimi();

  const incoming = [
    ...(google ? google.reviews : (existing.reviews || []).filter((r) => r.source === 'google').map((r) => ({ ...r, original: r.text?.[r.lang] ?? r.original }))),
    ...dt.reviews,
  ];

  const result = [];
  let translated = 0;
  for (const r of incoming) {
    const hash = sha(r.original);
    const prev = byId.get(r.id);
    if (prev && prev.hash === hash && prev.text && TARGET_LANGS.every((l) => prev.text[l])) {
      result.push({ ...prev, author: r.author, rating: r.rating, date: r.date });
      continue;
    }
    const tr = await translate(r.original);
    if (tr) translated++;
    const lang = tr?.lang || prev?.lang || 'tr';
    result.push({
      id: r.id,
      source: r.source,
      author: r.author,
      rating: r.rating,
      date: r.date,
      lang,
      tags: tr?.tags ?? prev?.tags ?? [],
      hash: tr ? hash : prev?.hash ?? null,
      text: { [lang]: r.original, ...(tr ? tr.text : {}), [lang]: r.original },
    });
  }

  result.sort((a, b) => (b.date || '').localeCompare(a.date || ''));

  const next = {
    updatedAt: existing.updatedAt,
    sources: {
      google: google ? { rating: google.rating, count: google.count } : existing.sources?.google ?? { rating: null, count: null },
      doktortakvimi: { rating: dt.rating, count: dt.count },
    },
    reviews: result,
  };

  const changed = JSON.stringify({ ...next, updatedAt: null }) !== JSON.stringify({ ...existing, updatedAt: null });
  if (!changed) {
    console.log('Değişiklik yok.');
    return;
  }
  next.updatedAt = new Date().toISOString().slice(0, 10);
  await writeFile(OUT, JSON.stringify(next, null, 2) + '\n');
  console.log(`Kaydedildi: ${result.length} yorum, ${translated} yeni çeviri.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
