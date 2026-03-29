'use client';

import { useTranslations } from 'next-intl';
import styles from './MobileQuickActions.module.css';

export default function MobileQuickActions() {
  const t = useTranslations('Contact');
  
  const phoneNumber = '+905553332120';
  const whatsappNumber = '905553332120';
  const email = 'info@muratayata.com';
  const mapsUrl = 'https://www.google.com/maps/place/Op.Dr.+Murat+Ayata+Muayenehanesi/@41.73361,27.224279,17z';

  return (
    <div className={styles.quickActions}>
      <a href={`tel:${phoneNumber}`} className={styles.actionItem}>
        <span className={styles.icon}>📞</span>
        <span className={styles.label}>{t('mobileCall')}</span>
      </a>
      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className={styles.actionItem}>
        <span className={styles.icon}>💬</span>
        <span className={styles.label}>{t('mobileWhatsapp')}</span>
      </a>
      <a href={`mailto:${email}`} className={styles.actionItem}>
        <span className={styles.icon}>✉️</span>
        <span className={styles.label}>{t('mobileEmail')}</span>
      </a>
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.actionItem}>
        <span className={styles.icon}>📍</span>
        <span className={styles.label}>{t('mobileLocation')}</span>
      </a>
    </div>
  );
}
