import type { getTranslations } from 'next-intl/server';

type T = Awaited<ReturnType<typeof getTranslations<'Reviews'>>>;

export type CardLabels = {
  readMore: string;
  readLess: string;
  showOriginal: string;
  hideOriginal: string;
  translatedFrom: Record<string, string>;
  reviewOn: Record<string, string>;
  stars: Record<number, string>;
};

/** Kartlarda kullanılan metinleri sunucuda hazırlar (istemci bileşenine düz metin olarak geçer). */
export function cardLabels(t: T): CardLabels {
  const langs = ['tr', 'en', 'ru', 'de', 'fr', 'bg'];
  return {
    readMore: t('readMore'),
    readLess: t('readLess'),
    showOriginal: t('showOriginal'),
    hideOriginal: t('hideOriginal'),
    translatedFrom: Object.fromEntries(langs.map((l) => [l, t('translatedFrom', { lang: t(`lang.${l}`) })])),
    reviewOn: {
      google: t('reviewOn', { source: 'Google' }),
      doktortakvimi: t('reviewOn', { source: 'Doktor Takvimi' }),
    },
    stars: Object.fromEntries([1, 2, 3, 4, 5].map((n) => [n, t('stars', { rating: n })])),
  };
}

export function formatMonth(date: string, locale: string) {
  if (!date) return '';
  const d = new Date(`${date}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return '';
  return new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(d);
}
