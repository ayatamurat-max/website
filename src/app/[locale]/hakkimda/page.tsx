import { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { buildMetadata } from '@/i18n/metadata';
import styles from './hakkimda.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'about', '/hakkimda');
}

const WHATSAPP_URL = 'https://wa.me/905553332120';

const TIMELINE_KEYS = ['born', 'school', 'medicine', 'residency', 'state', 'private', 'clinic'] as const;
const MEMBERSHIP_KEYS = ['m1', 'm2', 'm3', 'm4'] as const;

export default function Hakkimda() {
  const t = useTranslations('AboutMe');
  const name = useTranslations('Header')('title');

  return (
    <div className={styles.page}>
      <div className="container">
        <header className={`${styles.intro} animate-fade-in`}>
          <span className="section-tag">{t('tag')}</span>
          <h1>{t('title')}</h1>
          <p className={styles.lead}>{t('lead')}</p>
          <div className={styles.ctaRow}>
            <Link href="/iletisim" className="btn btn-primary">{t('ctaBook')}</Link>
            <a href={WHATSAPP_URL} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              {t('ctaWhatsapp')}
            </a>
          </div>
        </header>

        <div className={styles.layout}>
          <aside className={styles.aside}>
            <div>
              <div className={styles.portrait}>
                <Image src="/images/portrait.jpg" alt={name} fill priority style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 420px, 360px" />
              </div>
              <div className={styles.nameCard}>
                <strong>{name}</strong>
                <span>{t('specialty')}</span>
              </div>
            </div>

            <div className={styles.timelineBox}>
              <div className={styles.timelineTitle}>{t('timelineTitle')}</div>
              <ol className={styles.timeline}>
                {TIMELINE_KEYS.map((k) => (
                  <li key={k} className={k === 'clinic' ? styles.current : undefined}>
                    <span className={styles.when}>{t(`tl.${k}.when`)}</span>
                    <span className={styles.what}>{t(`tl.${k}.what`)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className={styles.story}>
            <span className="section-tag">{t('storyTag')}</span>
            <h2>{t('storyTitle')}</h2>
            <p>{t('bio1')}</p>
            <p>{t('bio2')}</p>
            <p>{t('bio3')}</p>
            <p>{t('bio4')}</p>

            <blockquote className={styles.quote}>
              <p>{t('quote1')}</p>
              <p>{t('quote2')}</p>
            </blockquote>

            <p>{t('bio5')}</p>

            <h3 className={styles.subTitle}>{t('membershipsTitle')}</h3>
            <ul className={styles.memberships}>
              {MEMBERSHIP_KEYS.map((k) => (
                <li key={k}>{t(`memberships.${k}`)}</li>
              ))}
            </ul>

            <p className={styles.family}>{t('family')}</p>
          </article>
        </div>
      </div>

      <section className={styles.certificate}>
        <div className={`container ${styles.certInner}`}>
          <div>
            <span className="section-tag">{t('certTag')}</span>
            <h2>{t('certTitle')}</h2>
            <p>{t('certDesc')}</p>
            <Link href="/international-patients" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
              {t('certCta')}
            </Link>
          </div>
          <div className={styles.certImage}>
            <Image src="/images/health-tourism-certificate.jpg" alt={t('certTitle')} fill style={{ objectFit: 'contain' }} sizes="(max-width: 900px) 380px, 420px" />
          </div>
        </div>
      </section>

      <section className={styles.closing}>
        <div className="container">
          <h2>{t('closingTitle')}</h2>
          <p>{t('closingDesc')}</p>
          <div className={styles.ctaRow}>
            <Link href="/iletisim" className="btn btn-primary">{t('ctaBook')}</Link>
            <a href={WHATSAPP_URL} className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }} target="_blank" rel="noopener noreferrer">
              {t('ctaWhatsapp')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
