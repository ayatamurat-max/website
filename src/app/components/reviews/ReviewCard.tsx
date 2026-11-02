'use client';
import { useState } from 'react';
import type { DisplayReview } from '@/content/reviews';
import type { CardLabels } from './labels';
import Stars from './Stars';
import styles from './Reviews.module.css';

const LONG = 260;

export default function ReviewCard({ review, labels, dateLabel, locale }: { review: DisplayReview; labels: CardLabels; dateLabel: string; locale: string }) {
  const [expanded, setExpanded] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);
  const text = showOriginal && review.original ? review.original.text : review.text;
  const lang = showOriginal && review.original ? review.original.lang : locale;
  const isLong = text.length > LONG;

  const initial = (review.author.trim()[0] ?? '?').toLocaleUpperCase(locale);
  const source = review.source === 'google' ? 'Google' : 'Doktor Takvimi';

  return (
    <article className={styles.card}>
      <header className={styles.cardTop}>
        <span className={styles.avatar} aria-hidden="true">{initial}</span>
        <div className={styles.who}>
          <span className={styles.author}>{review.author}</span>
          <span className={styles.meta}>
            <Stars rating={review.rating} size={13} label={labels.stars[review.rating] ?? ''} />
            {dateLabel && <span>{dateLabel}</span>}
          </span>
        </div>
      </header>

      <p lang={lang} className={`${styles.quote} ${isLong && !expanded ? styles.clamped : ''}`}>“{text}”</p>
      {isLong && (
        <button type="button" className={styles.textBtn} onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
          {expanded ? labels.readLess : labels.readMore}
        </button>
      )}

      <footer className={styles.translation}>
        <span className={styles.sourceTag} title={labels.reviewOn[review.source]}>{source}</span>
        {review.original && (
          <>
            <span>{labels.translatedFrom[review.original.lang] ?? ''}</span>
            <button type="button" className={styles.textBtn} onClick={() => setShowOriginal((v) => !v)} aria-pressed={showOriginal}>
              {showOriginal ? labels.hideOriginal : labels.showOriginal}
            </button>
          </>
        )}
      </footer>
    </article>
  );
}
