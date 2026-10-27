import { getLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getSummary, reviewsAllowed } from '@/content/reviews';
import Stars from './Stars';
import styles from './Reviews.module.css';

/** Kompakt puan rozeti: açık zemin (iletişim) ya da hero üzerinde. Türkçede görünmez. */
export default async function ReviewsBadge({ variant = 'light' }: { variant?: 'light' | 'hero' }) {
  const locale = await getLocale();
  if (!reviewsAllowed(locale)) return null;
  const summary = getSummary(locale);
  if (!summary) return null;
  const t = await getTranslations('Reviews');
  const score = new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(summary.rating);

  return (
    <Link href="/reviews" className={variant === 'hero' ? styles.heroRating : styles.badge}>
      <Stars rating={summary.rating} size={14} label={t('stars', { rating: score })} />
      <strong>{score}</strong>
      <span>{t('stripReviews', { count: summary.count })}</span>
    </Link>
  );
}
