import styles from './Reviews.module.css';

// Beşlik yıldız göstergesi (dekoratif; erişilebilir metin label ile verilir)
export default function Stars({ rating, size = 16, label, className = '' }: { rating: number; size?: number; label: string; className?: string }) {
  const full = Math.round(rating);
  return (
    <span className={`${styles.stars} ${className}`} role="img" aria-label={label}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" aria-hidden="true" className={i > full ? styles.starEmpty : undefined}>
          <path fill="currentColor" d="M10 1.6l2.47 5.3 5.8.68-4.28 3.98 1.13 5.73L10 14.4l-5.12 2.89 1.13-5.73L1.73 7.58l5.8-.68z" />
        </svg>
      ))}
    </span>
  );
}
