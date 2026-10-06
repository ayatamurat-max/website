import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { buildMetadata } from '@/i18n/metadata';
import ProcedureIcon from '../../components/ProcedureIcon';
import styles from './rinoplasti.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'rhino', '/rinoplasti');
}

const WHATSAPP_NUMBER = '905553332120';

export default function Rinoplasti() {
  const t = useTranslations('Rhinoplasty');
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t('waMessage'))}`;

  const stats = [
    { value: '15+', label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: '7', label: t('stat3Label') },
  ];
  const approach = [1, 2, 3].map((n) => ({ title: t(`a${n}Title`), desc: t(`a${n}Desc`) }));
  const techniques = [1, 2, 3].map((n) => ({ title: t(`t${n}Title`), desc: t(`t${n}Desc`) }));
  const journey = [1, 2, 3, 4, 5, 6].map((n) => ({ title: t(`j${n}Title`), desc: t(`j${n}Desc`) }));
  const info = [1, 2, 3, 4].map((n) => ({ title: t(`i${n}Title`), desc: t(`i${n}Desc`) }));
  const faq = [1, 2, 3, 4, 5, 6].map((n) => ({ q: t(`f${n}Q`), a: t(`f${n}A`) }));

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
              <a href="#journey" className={`btn ${styles.btnGhost}`}>
                {t('ctaSecondary')}
              </a>
            </div>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.heroRing}>
              <ProcedureIcon name="rhinoplasty" size={150} strokeWidth={0.6} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className={styles.statsBand}>
        <div className={`container ${styles.stats}`}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-tag">{t('approachTag')}</span>
            <h2>{t('approachTitle')}</h2>
          </div>
          <div className={styles.grid3}>
            {approach.map((a, i) => (
              <article key={a.title} className={styles.card}>
                <span className={styles.cardIndex}>0{i + 1}</span>
                <h3>{a.title}</h3>
                <p>{a.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section className={`${styles.section} ${styles.dark}`}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-tag">{t('techTag')}</span>
            <h2>{t('techTitle')}</h2>
            <p className={styles.sectionDesc}>{t('techDesc')}</p>
          </div>
          <div className={styles.grid3}>
            {techniques.map((tech) => (
              <article key={tech.title} className={styles.techCard}>
                <h3>{tech.title}</h3>
                <p>{tech.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-tag">{t('journeyTag')}</span>
            <h2>{t('journeyTitle')}</h2>
          </div>
          <ol className={styles.timeline}>
            {journey.map((j, i) => (
              <li key={j.title} className={styles.step}>
                <span className={styles.stepNum}>{i + 1}</span>
                <div>
                  <h3>{j.title}</h3>
                  <p>{j.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Practical info */}
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
