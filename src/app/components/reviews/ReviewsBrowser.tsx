'use client';
import { useMemo, useState } from 'react';
import type { DisplayReview, ReviewSource } from '@/content/reviews';
import type { CardLabels } from './labels';
import ReviewCard from './ReviewCard';
import styles from './Reviews.module.css';

type Props = {
  reviews: (DisplayReview & { dateLabel: string })[];
  labels: CardLabels;
  locale: string;
  text: { all: string; source: string; procedure: string; empty: string };
  tagNames: Record<string, string>;
};

// Tüm yorumlar: kaynağa ve işleme göre filtrelenebilir liste
export default function ReviewsBrowser({ reviews, labels, locale, text, tagNames }: Props) {
  const [source, setSource] = useState<ReviewSource | 'all'>('all');
  const [tag, setTag] = useState<string>('all');

  const sources = useMemo(() => Array.from(new Set(reviews.map((r) => r.source))), [reviews]);
  const tags = useMemo(() => {
    const count = new Map<string, number>();
    for (const r of reviews) for (const t of r.tags) count.set(t, (count.get(t) ?? 0) + 1);
    return [...count.entries()].filter(([t]) => tagNames[t]).sort((a, b) => b[1] - a[1]).map(([t]) => t);
  }, [reviews, tagNames]);

  const shown = reviews.filter((r) => (source === 'all' || r.source === source) && (tag === 'all' || r.tags.includes(tag)));

  return (
    <>
      {(sources.length > 1 || tags.length > 0) && (
        <div className={styles.filters}>
          {sources.length > 1 && (
            <div className={styles.filterGroup} role="group" aria-label={text.source}>
              <span className={styles.filterLabel}>{text.source}</span>
              {(['all', ...sources] as const).map((s) => (
                <button key={s} type="button" className={`${styles.chip} ${source === s ? styles.chipActive : ''}`} aria-pressed={source === s} onClick={() => setSource(s)}>
                  {s === 'all' ? text.all : s === 'google' ? 'Google' : 'Doktor Takvimi'}
                </button>
              ))}
            </div>
          )}
          {tags.length > 0 && (
            <div className={styles.filterGroup} role="group" aria-label={text.procedure}>
              <span className={styles.filterLabel}>{text.procedure}</span>
              {['all', ...tags].map((t) => (
                <button key={t} type="button" className={`${styles.chip} ${tag === t ? styles.chipActive : ''}`} aria-pressed={tag === t} onClick={() => setTag(t)}>
                  {t === 'all' ? text.all : tagNames[t]}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      {shown.length === 0 ? (
        <p className={styles.empty}>{text.empty}</p>
      ) : (
        <div className={styles.grid}>
          {shown.map((r) => (
            <ReviewCard key={r.id} review={r} labels={labels} dateLabel={r.dateLabel} locale={locale} />
          ))}
        </div>
      )}
    </>
  );
}
