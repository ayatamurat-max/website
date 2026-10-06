import type { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { buildMetadata } from '@/i18n/metadata';
import { Link } from '@/i18n/navigation';
import ProcedureIcon, { type ProcedureIconName } from '../../components/ProcedureIcon';
// Rinoplasti sayfasıyla aynı görsel dil
import styles from '../rinoplasti/rinoplasti.module.css';
import own from './international.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'inter', '/international-patients');
}

const WHATSAPP_NUMBER = '905553332120';

export default function InternationalPatients() {
  const t = useTranslations('International');
  const tRhino = useTranslations('Rhinoplasty');
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('waMessage'))}`;

  const why = [1, 2, 3, 4].map((n) => ({ title: t(`w${n}Title`), desc: t(`w${n}Desc`) }));
  const steps = [1, 2, 3, 4].map((n) => ({ title: t(`s${n}Title`), desc: t(`s${n}Desc`) }));
  const info = [1, 2, 3, 4].map((n) => ({ title: t(`p${n}Title`), desc: t(`p${n}Desc`) }));
  const faq = [1, 2, 3, 4, 5].map((n) => ({ q: t(`f${n}Q`), a: t(`f${n}A`) }));
  const treatments: { icon: ProcedureIconName; title: string; desc: string; href: string }[] = [
    { icon: 'rhinoplasty', title: t('treatRhino'), desc: t('treatRhinoDesc'), href: '/rinoplasti' },
    { icon: 'surgical', title: t('treatOther'), desc: t('treatOtherDesc'), href: '/cerrahi-islemler' },
  ];

  return (
    <>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <span className="section-tag">{t('tag')}</span>
            <h1 className={styles.heroTitle}>{t('title')}</h1>
            <p className={styles.heroIntro}>{t('intro')}</p>
            <div className={styles.heroActions}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {t('ctaPrimary')}
              </a>
              <a href="#steps" className={`btn ${styles.btnGhost}`}>
                {t('ctaSecondary')}
              </a>
            </div>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.heroRing}>
              <svg viewBox="0 0 24 24" width={150} height={150} fill="none" stroke="currentColor" strokeWidth={0.6} strokeLinecap="round" strokeLinejoin="round">
                {/* Küre: uluslararası hastalar */}
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12 H21" />
                <path d="M12 3 C9.5 5.5 8.5 8.6 8.5 12 C8.5 15.4 9.5 18.5 12 21" />
                <path d="M12 3 C14.5 5.5 15.5 8.6 15.5 12 C15.5 15.4 14.5 18.5 12 21" />
                <path d="M4.6 7.5 H19.4" />
                <path d="M4.6 16.5 H19.4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-tag">{t('whyTag')}</span>
            <h2>{t('whyTitle')}</h2>
          </div>
          <div className={styles.grid4}>
            {why.map((w, i) => (
              <article key={w.title} className={styles.card}>
                <span className={styles.cardIndex}>0{i + 1}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className={`${styles.section} ${styles.dark}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-tag">{t('stepsTag')}</span>
            <h2>{t('stepsTitle')}</h2>
          </div>
          <ol className={own.steps}>
            {steps.map((s, i) => (
              <li key={s.title} className={own.stepCard}>
                <span className={own.stepNum}>{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Treatments */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-tag">{t('treatTag')}</span>
            <h2>{t('treatTitle')}</h2>
          </div>
          <div className={own.treatments}>
            {treatments.map((tr) => (
              <Link key={tr.title} href={tr.href} className={own.treatCard}>
                <span className={own.treatIcon}>
                  <ProcedureIcon name={tr.icon} size={34} strokeWidth={1.2} />
                </span>
                <div>
                  <h3>{tr.title}</h3>
                  <p>{tr.desc}</p>
                  <span className={own.more}>{tRhino('learnMore')}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practical info + certificate */}
      <section className={`${styles.section} ${styles.soft}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-tag">{t('infoTag')}</span>
            <h2>{t('infoTitle')}</h2>
          </div>
          <div className={styles.grid4}>
            {info.map((item) => (
              <article key={item.title} className={styles.infoCard}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>

          <div className={own.cert}>
            <Image
              src="/images/health-tourism-certificate.jpg"
              alt={t('certTitle')}
              width={420}
              height={294}
              className={own.certImage}
            />
            <div>
              <h3>{t('certTitle')}</h3>
              <p>{t('certDesc')}</p>
              <Image src="/images/health-turkiye-logo.png" alt="Health Türkiye" width={140} height={78} className={own.certLogo} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={`container ${styles.faqWrap}`}>
          <div className={styles.sectionHead}>
            <span className="section-tag">{t('faqTag')}</span>
            <h2>{t('faqTitle')}</h2>
          </div>
          <div className={styles.faq}>
            {faq.map((f) => (
              <details key={f.q} className={styles.faqItem}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={`container ${styles.finalInner}`}>
          <h2>{t('finalTitle')}</h2>
          <p>{t('finalDesc')}</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {t('ctaPrimary')}
          </a>
        </div>
      </section>
    </>
  );
}
