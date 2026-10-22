import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildMetadata } from '@/i18n/metadata';
import { Link } from '@/i18n/navigation';
import { consentList } from '@/content/consent';
import styles from './belgeler.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'documents', '/belgeler');
}

const DocIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6M9 17h4" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

/** Belgeler bölümü: yeni belge türleri buraya kart olarak eklenir */
export default async function DocumentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Documents' });
  const count = consentList(locale).length;

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <span className="section-tag">{t('hubTag')}</span>
          <h1>{t('hubTitle')}</h1>
          <p className={styles.heroIntro}>{t('hubIntro')}</p>
        </div>
      </section>

      <div className={`container ${styles.body}`}>
        <div className={styles.hubGrid}>
          <Link href="/belgeler/onam-formlari" className={styles.hubCard}>
            <span className={styles.hubIcon}><DocIcon /></span>
            <h2>{t('consentCardTitle')}</h2>
            <p>{t('consentCardDesc')}</p>
            <span className={styles.hubFoot}>
              <span>{t('formsCount', { count })}</span>
              <strong>{t('open')}</strong>
            </span>
          </Link>

          <Link href="/gizlilik-politikasi" className={`${styles.hubCard} ${styles.muted}`}>
            <span className={styles.hubIcon} style={{ color: 'var(--color-accent)' }}><ShieldIcon /></span>
            <h2>{t('privacyCardTitle')}</h2>
            <p>{t('privacyCardDesc')}</p>
            <span className={styles.hubFoot}>
              <span>KVKK</span>
              <strong>{t('open')}</strong>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
