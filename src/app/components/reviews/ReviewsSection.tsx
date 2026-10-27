import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getFeatured, getSummary, reviewsAllowed } from '@/content/reviews';
import ReviewCard from './ReviewCard';
import ReviewsTrack from './ReviewsTrack';
import Stars from './Stars';
import { cardLabels, formatMonth } from './labels';
import styles from './Reviews.module.css';

/**
 * "Hastalarımız ne diyor" bölümü: öne çıkan yorumlar, yatay kaydırmalı.
 * tag verilirse önce o işlemle ilgili yorumlar gösterilir.
 * Türkçe sayfalarda hiçbir şey çizmez (sağlık tanıtım mevzuatı).
 */
export default async function ReviewsSection({ tag, soft = false }: { tag?: string; soft?: boolean }) {
  const locale = await getLocale();
  if (!reviewsAllowed(locale)) return null;
  const reviews = getFeatured(locale, tag);
  if (reviews.length === 0) return null;
  const t = await getTranslations('Reviews');
  const labels = cardLabels(t);
  const summary = getSummary(locale);
  const score = summary ? new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(summary.rating) : '';

  return (
    <section className={`${styles.section} ${soft ? styles.sectionSoft : ''}`} aria-labelledby={`reviews-${tag ?? 'all'}`}>
      <div className="container">
        <ReviewsTrack
          prevLabel={t('prev')}
          nextLabel={t('next')}
          head={
            <>
              <span className="section-tag">{t('tag')}</span>
              <h2 id={`reviews-${tag ?? 'all'}`}>{t('title')}</h2>
              {summary ? (
                <p className={styles.headSummary}>
                  <Stars rating={summary.rating} size={16} label={t('stars', { rating: score })} />
                  <strong>{score}</strong>
                  <span>{t('stripReviews', { count: summary.count })} · Google · Doktor Takvimi</span>
                </p>
              ) : (
                <p className={styles.headSub}>{t('subtitle')}</p>
              )}
            </>
          }
        >
          {reviews.map((r) => (
            <ReviewCard key={r.id} review={r} labels={labels} dateLabel={formatMonth(r.date, locale)} locale={locale} />
          ))}
        </ReviewsTrack>
        <div className={styles.foot}>
          <p className={styles.disclaimer}>{t('disclaimer')}</p>
          <Link href="/reviews" className="btn btn-outline">
            {t('seeAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
