import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildMetadata } from '@/i18n/metadata';
import { Link } from '@/i18n/navigation';
import { consentList, consentPdfName, consentPdfUrl } from '@/content/consent';
import { breadcrumbJsonLd } from '@/lib/schema';
import JsonLd from '../../../components/JsonLd';
import styles from '../belgeler.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'consent', '/belgeler/onam-formlari');
}

const InfoIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" />
  </svg>
);

export default async function ConsentListPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Documents' });
  const tNav = await getTranslations({ locale, namespace: 'Header' });
  const forms = consentList(locale);

  const groups = [
    { title: t('groupSurgical'), items: forms.filter((f) => f.type === 'surgical') },
    { title: t('groupOffice'), items: forms.filter((f) => f.type === 'office') },
  ].filter((g) => g.items.length > 0);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: tNav('home'), path: '/' },
          { name: tNav('documents'), path: '/belgeler' },
          { name: tNav('consentForms'), path: '/belgeler/onam-formlari' },
        ])}
      />
      <section className={styles.hero}>
        <div className="container">
          <Link href="/belgeler" className={styles.back}>← {tNav('documents')}</Link>
          <br />
          <span className="section-tag">{t('consentTag')}</span>
          <h1>{t('consentTitle')}</h1>
          <p className={styles.heroIntro}>{t('consentIntro')}</p>
        </div>
      </section>

      <div className={`container ${styles.body}`}>
        <div className={styles.notice}>
          <InfoIcon />
          <div>
            <strong>{t('noticeTitle')}</strong>
            <p>{t('noticeText')}</p>
          </div>
        </div>

        {groups.map((g) => (
          <div key={g.title} className={styles.group}>
            <h2 className={styles.groupTitle}>{g.title}</h2>
            <div className={styles.formGrid}>
              {g.items.map((f) => (
                <article key={f.slug} className={styles.formCard}>
                  <div className={styles.formCardHead}>
                    <span className={styles.code}>{f.code}</span>
                    <div>
                      <Link href={`/belgeler/onam-formlari/${f.slug}`} className={styles.formCardTitle}>{f.title}</Link>
                      <span className={styles.formCardMeta}>PDF · {t('pages', { count: f.pdf.pages })}</span>
                    </div>
                  </div>
                  <div className={styles.formCardLinks}>
                    <Link href={`/belgeler/onam-formlari/${f.slug}`}>{t('read')} →</Link>
                    <a href={consentPdfUrl(locale, f.slug)} download={consentPdfName(locale, f.slug)}>↓ {t('downloadPdf')}</a>
                    <a href={consentPdfUrl(locale, f.slug)} target="_blank" rel="noopener">{t('print')}</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
