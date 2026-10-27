import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { getReviews, getSummary, reviewsAllowed, SOURCE_NAME } from '@/content/reviews';
import data from '@/content/reviews/reviews.json';
import ReviewsBrowser from '../../components/reviews/ReviewsBrowser';
import Stars from '../../components/reviews/Stars';
import { cardLabels, formatMonth } from '../../components/reviews/labels';
import styles from '../../components/reviews/Reviews.module.css';

// Hasta yorumları sayfası — YALNIZCA yabancı dillerde vardır.
// Türkçe adres (/reviews) 404 döner; Türkçe sayfalardan bu sayfaya bağlantı verilmez.
const FOREIGN = routing.locales.filter((l) => reviewsAllowed(l));
const path = (l: string) => `/${l}/reviews`;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!reviewsAllowed(locale)) return {};
  const t = await getTranslations({ locale, namespace: 'Reviews' });
  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
    alternates: {
      canonical: path(locale),
      languages: { ...Object.fromEntries(FOREIGN.map((l) => [l, path(l)])), 'x-default': path('en') },
    },
    openGraph: { title: t('metaTitle'), description: t('metaDesc'), url: path(locale), siteName: 'Murat Ayata', locale, type: 'website', images: ['/images/hero-bg.jpg'] },
  };
}

export default async function ReviewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!reviewsAllowed(locale)) notFound();
  const t = await getTranslations({ locale, namespace: 'Reviews' });
  const summary = getSummary(locale);
  const reviews = getReviews(locale).map((r) => ({ ...r, dateLabel: formatMonth(r.date, locale) }));
  const fmt = new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const tagNames = Object.fromEntries(['rhinoplasty', 'septoplasty', 'otoplasty', 'blepharoplasty', 'neck', 'botox', 'filler', 'meso', 'rejuvenation', 'ent'].map((k) => [k, t(`tags.${k}`)]));
  const updated = data.updatedAt ? new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(new Date(`${data.updatedAt}T12:00:00Z`)) : null;

  return (
    <>
      <section className={styles.pageHero}>
        <div className="container">
          <span className="section-tag">{t('tag')}</span>
          <h1>{t('pageTitle')}</h1>
          <p className={styles.pageIntro}>{t('pageIntro')}</p>
          {summary && (
            <div className={styles.pageScores}>
              {summary.sources.map((s) => (
                <div key={s.source} className={styles.scoreCard}>
                  <span className={styles.scoreValue}>{fmt.format(s.rating)}</span>
                  <Stars rating={s.rating} size={16} label={t('stars', { rating: fmt.format(s.rating) })} />
                  <span className={styles.scoreLabel}>
                    {SOURCE_NAME[s.source]} · {t('stripReviews', { count: s.count })}
                  </span>
                  {s.url && (
                    <a href={s.url} target="_blank" rel="noopener noreferrer nofollow">
                      {t('readOn', { source: SOURCE_NAME[s.source] })} ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <ReviewsBrowser
            reviews={reviews}
            labels={cardLabels(t)}
            locale={locale}
            tagNames={tagNames}
            text={{ all: t('filterAll'), source: t('filterSource'), procedure: t('filterProcedure'), empty: t('empty') }}
          />
          <div className={styles.foot}>
            <p className={styles.disclaimer}>
              {t('disclaimer')}
              {updated ? ` ${t('updated', { date: updated })}.` : ''}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
