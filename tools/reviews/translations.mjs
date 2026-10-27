#!/usr/bin/env node
/**
 * API anahtarı olmadan çeviri: çeviriyi Claude sohbeti / zamanlanmış görev yapar,
 * bu araç sadece listeler ve dosyaya işler.
 *
 *   node tools/reviews/translations.mjs pending
 *       Çevirisi eksik yorumları JSON olarak yazdırır: [{ id, text }]
 *
 *   node tools/reviews/translations.mjs apply ceviriler.json
 *       ceviriler.json: { "<id>": { "lang": "tr", "tags": ["rhinoplasty"],
 *                                   "en": "...", "ru": "...", "de": "...", "fr": "...", "bg": "..." } }
 *       Çevirileri reviews.json'a işler. Güncelleme betiği bu çevirileri korur
 *       (özgün metin değişmedikçe yeniden çevirmez).
 */
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const FILE = path.join(ROOT, 'src/content/reviews/reviews.json');
const LANGS = ['en', 'ru', 'de', 'fr', 'bg'];
const TAGS = ['rhinoplasty', 'septoplasty', 'otoplasty', 'blepharoplasty', 'neck', 'botox', 'filler', 'meso', 'rejuvenation', 'ent'];
// update-reviews.mjs ile aynı özet: özgün metin değişmedikçe çeviri korunur
const sha = (s) => createHash('sha256').update(s).digest('hex').slice(0, 16);

const data = JSON.parse(await readFile(FILE, 'utf8'));
const [cmd, arg] = process.argv.slice(2);
const isPending = (r) => !r.hash || !LANGS.every((l) => r.text?.[l]);

if (cmd === 'pending') {
  const list = data.reviews.filter(isPending).map((r) => ({ id: r.id, text: r.text[r.lang] }));
  console.log(JSON.stringify(list, null, 2));
} else if (cmd === 'apply' && arg) {
  const input = JSON.parse(await readFile(path.resolve(arg), 'utf8'));
  let n = 0;
  for (const r of data.reviews) {
    const t = input[r.id];
    if (!t) continue;
    if (!LANGS.every((l) => typeof t[l] === 'string' && t[l].trim())) {
      console.error(`Atlandı (eksik dil): ${r.id}`);
      continue;
    }
    const original = r.text[r.lang];
    const lang = String(t.lang || r.lang).toLowerCase().slice(0, 2);
    r.lang = lang;
    r.tags = (t.tags || []).filter((x) => TAGS.includes(x));
    r.text = { ...Object.fromEntries(LANGS.map((l) => [l, t[l].trim()])), [lang]: original };
    r.hash = sha(original);
    n++;
  }
  if (n) {
    data.updatedAt = new Date().toISOString().slice(0, 10);
    await writeFile(FILE, JSON.stringify(data, null, 2) + '\n');
  }
  console.log(`${n} yorumun çevirisi işlendi.`);
} else {
  console.error('Kullanım: translations.mjs pending | apply <dosya.json>');
  process.exit(1);
}
