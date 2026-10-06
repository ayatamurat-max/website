'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { CONSENT_KEY } from './MetaPixel';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const t = useTranslations('Consent');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_KEY);
    } catch {
      stored = null;
    }
    if (stored !== 'granted' && stored !== 'denied') setVisible(true);
  }, []);

  const choose = (value: 'granted' | 'denied') => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* depolama kapalıysa yalnızca bu oturum için geçerli */
    }
    if (value === 'granted') window.fbq?.('consent', 'grant');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label={t('accept')}>
      <p className={styles.text}>{t('text')}</p>
      <div className={styles.actions}>
        <button type="button" className={styles.decline} onClick={() => choose('denied')}>
          {t('decline')}
        </button>
        <button type="button" className={styles.accept} onClick={() => choose('granted')}>
          {t('accept')}
        </button>
      </div>
    </div>
  );
}
