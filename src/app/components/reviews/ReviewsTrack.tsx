'use client';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './Reviews.module.css';

const Arrow = ({ dir }: { dir: 1 | -1 }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
    <path d={dir === 1 ? 'M9 6l6 6-6 6' : 'M15 18l-6-6 6-6'} />
  </svg>
);

/**
 * Yatay kaydırmalı kart şeridi (dokunmatikte kaydırma, masaüstünde ileri/geri düğmeleri).
 * overlay: tam genişlik şerit, düğmeler kartların iki yanında (hero altındaki vitrin).
 */
export default function ReviewsTrack({ children, head, prevLabel, nextLabel, overlay = false }: { children: ReactNode; head?: ReactNode; prevLabel: string; nextLabel: string; overlay?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 4, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4 });
  }, []);

  useEffect(() => {
    update();
    const el = ref.current;
    if (!el) return;
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const go = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: 'smooth' });
  const scrollable = !(edge.start && edge.end);

  if (overlay) {
    return (
      <div className={styles.stage}>
        <div ref={ref} className={`${styles.track} ${styles.trackWide}`}>
          {children}
        </div>
        {scrollable && (
          <>
            <button type="button" className={`${styles.navBtn} ${styles.navFloat} ${styles.navPrev}`} onClick={() => go(-1)} disabled={edge.start} aria-label={prevLabel}>
              <Arrow dir={-1} />
            </button>
            <button type="button" className={`${styles.navBtn} ${styles.navFloat} ${styles.navNext}`} onClick={() => go(1)} disabled={edge.end} aria-label={nextLabel}>
              <Arrow dir={1} />
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <div className={styles.head}>
        <div>{head}</div>
        {scrollable && (
          <div className={styles.nav}>
            <button type="button" className={styles.navBtn} onClick={() => go(-1)} disabled={edge.start} aria-label={prevLabel}>
              <Arrow dir={-1} />
            </button>
            <button type="button" className={styles.navBtn} onClick={() => go(1)} disabled={edge.end} aria-label={nextLabel}>
              <Arrow dir={1} />
            </button>
          </div>
        )}
      </div>
      <div ref={ref} className={styles.track}>
        {children}
      </div>
    </>
  );
}
