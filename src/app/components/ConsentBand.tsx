import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { consentList, consentPdfName, consentPdfUrl } from '@/content/consent';
import styles from '../[locale]/belgeler/belgeler.module.css';

/** İşlem sayfalarının altında: o işlemin onam form(lar)ına oku / indir / yazdır bağlantısı */
export default function ConsentBand({ slugs }: { slugs: string[] }) {
  const locale = useLocale();
  const t = useTranslations('Documents');
  const forms = consentList(locale).filter((f) => slugs.includes(f.slug));
  if (forms.length === 0) return null;

  return (
    <section className={styles.procBand}>
      <div className={`container ${styles.procBandInner}`}>
        <div>
          <span className="section-tag">{t('procedureConsentTag')}</span>
          <h2>{t('procedureConsentTitle')}</h2>
          <p>{t('procedureConsentDesc')}</p>
        </div>
        <div className={styles.procForms}>
          {forms.map((f) => (
            <div key={f.slug} className={styles.procForm}>
              <Link href={`/belgeler/onam-formlari/${f.slug}`}>{f.title}</Link>
              <Link href={`/belgeler/onam-formlari/${f.slug}`} className={styles.smallLink}>{t('read')} →</Link>
              <a href={consentPdfUrl(locale, f.slug)} download={consentPdfName(locale, f.slug)} className={styles.smallLink}>↓ PDF</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
