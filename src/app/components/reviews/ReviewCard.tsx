'use client';
import { useState } from 'react';
import type { DisplayReview } from '@/content/reviews';
import type { CardLabels } from './labels';
import Stars from './Stars';
import styles from './Reviews.module.css';

const LONG = 320;

export default function ReviewCard({ review, labels, dateLabel, locale }: { review: DisplayReview; labels: CardLabels; dateLabel: string; locale: string }) {
  const [expanded, setExpanded] = useState(false);
  const [showOriginal, setShowOriginal] = useState(false);
  const text = showOriginal && review.original ? review.original.text : review.text;
  const lang = showOriginal && review.original ? review.original.lang : locale;
  const isLong = text.length > LONG;

  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <Stars rating={review.rating} label={labels.stars[review.rating] ?? ''} />
        <span className={styles.sourceTag}>{review.source === 'google' ? 'Google' : 'Doktor Takvimi'}</span>
      </div>

      <p lang={lang} className={`${styles.quote} ${isLong && !expanded ? styles.clamped : ''}`}>{text}</p>
      {isLong && (
        <button type="button" className={styles.textBtn} onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
          {expanded ? labels.readLess : labels.readMore}
        </button>
      )}

      {review.original && (
        <div className={styles.translation}>
          <span>{labels.translatedFrom[review.original.lang] ?? ''}</span>
          <button type="button" className={styles.textBtn} onClick={() => setShowOriginal((v) => !v)} aria-pressed={showOriginal}>
            {showOriginal ? labels.hideOriginal : labels.showOriginal}
          </button>
        </div>
      )}

      <div className={styles.cardFoot}>
        <span className={styles.author}>{review.author}</span>
        <span className={styles.meta}>
          {labels.reviewOn[review.source]}
          {dateLabel ? ` · ${dateLabel}` : ''}
        </span>
      </div>
    </article>
  );
}
