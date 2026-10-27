// Hasta yorumları (Google + Doktor Takvimi).
// Veri: reviews.json — tools/reviews/update-reviews.mjs ile her gün otomatik güncellenir.
//
// ÖNEMLİ: Türkiye'deki sağlık tanıtım mevzuatı gereği yorumlar Türkçe sayfalarda
// hiçbir şekilde gösterilmez. Uluslararası sağlık turizmi tanıtımı kapsamında yalnızca
// yabancı dil sayfalarında (en, ru, de, fr, bg) yer alır.
import data from './reviews.json';
import settings from './settings.json';

export type ReviewSource = 'google' | 'doktortakvimi';

export type Review = {
  id: string;
  source: ReviewSource;
  author: string;
  rating: number | null;
  date: string;
  lang: string;
  tags: string[];
  text: Record<string, string>;
};

export type DisplayReview = {
  id: string;
  source: ReviewSource;
  author: string;
  rating: number;
  date: string;
  tags: string[];
  /** Sayfanın dilindeki metin */
  text: string;
  /** Yorum çeviriyse özgün metin ve dili */
  original?: { text: string; lang: string };
};

const HIDDEN = settings.hidden as string[];
const REVIEWS = (data.reviews as Review[]).filter((r) => !HIDDEN.includes(r.id));

/** Yorumlar bu dilde gösterilebilir mi? Türkçe: asla. */
export function reviewsAllowed(locale: string) {
  return locale !== 'tr';
}

/** Sayfa diline uygun yorumlar. Çevirisi henüz hazır olmayanlar atlanır (yabancı sayfada Türkçe metin çıkmaz). */
export function getReviews(locale: string, opts: { tag?: string; minRating?: number; limit?: number } = {}): DisplayReview[] {
  if (!reviewsAllowed(locale)) return [];
  const out: DisplayReview[] = [];
  for (const r of REVIEWS) {
    const text = r.text[locale];
    if (!text || !r.rating) continue;
    if (opts.minRating && r.rating < opts.minRating) continue;
    if (opts.tag && !r.tags.includes(opts.tag)) continue;
    out.push({
      id: r.id,
      source: r.source,
      author: r.author,
      rating: r.rating,
      date: r.date,
      tags: r.tags,
      text,
      original: r.lang !== locale && r.text[r.lang] ? { text: r.text[r.lang], lang: r.lang } : undefined,
    });
  }
  return opts.limit ? out.slice(0, opts.limit) : out;
}

/** Öne çıkan yorumlar: önce ilgili işlem, yeterli değilse genel. */
export function getFeatured(locale: string, tag?: string, limit = 8): DisplayReview[] {
  const min = settings.featuredMinRating;
  // Kısa ve orta uzunluktaki yorumlar kartlarda daha iyi okunur: onları öne al
  const byReadability = (list: DisplayReview[]) =>
    [...list].sort((a, b) => Number(a.text.length > 600) - Number(b.text.length > 600));
  if (tag) {
    const tagged = getReviews(locale, { tag, minRating: min });
    if (tagged.length >= 2) return byReadability(tagged).slice(0, limit);
  }
  return byReadability(getReviews(locale, { minRating: min })).slice(0, limit);
}

export type SourceSummary = { source: ReviewSource; rating: number; count: number; url: string };

export function getSummary(locale: string): { rating: number; count: number; sources: SourceSummary[] } | null {
  if (!reviewsAllowed(locale)) return null;
  const sources: SourceSummary[] = [];
  for (const source of ['google', 'doktortakvimi'] as const) {
    const s = data.sources[source] as { rating: number | null; count: number | null };
    if (s?.rating && s?.count) sources.push({ source, rating: s.rating, count: s.count, url: settings.links[source] });
  }
  if (sources.length === 0) return null;
  const count = sources.reduce((n, s) => n + s.count, 0);
  const rating = Math.round((sources.reduce((n, s) => n + s.rating * s.count, 0) / count) * 10) / 10;
  return { rating, count, sources };
}

export const SOURCE_NAME: Record<ReviewSource, string> = {
  google: 'Google',
  doktortakvimi: 'Doktor Takvimi',
};
