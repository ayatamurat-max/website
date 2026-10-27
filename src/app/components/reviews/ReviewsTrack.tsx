'use client';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import styles from './Reviews.module.css';

// Yatay kaydırmalı kart şeridi; masaüstünde ileri/geri düğmeleri
export default function ReviewsTrack({ children, head, prevLabel, nextLabel }: { children: ReactNode; head: ReactNode; prevLabel: string; nextLabel: string }) {
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

  const go = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.9, behavior: 'smooth' });

  return (
    <>
      <div className={styles.head}>
        <div>{head}</div>
        {!(edge.start && edge.end) && (
          <div className={styles.nav}>
            <button type="button" className={styles.navBtn} onClick={() => go(-1)} disabled={edge.start} aria-label={prevLabel}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button type="button" className={styles.navBtn} onClick={() => go(1)} disabled={edge.end} aria-label={nextLabel}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
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
