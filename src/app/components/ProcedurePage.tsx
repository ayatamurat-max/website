import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { CLINIC } from '@/lib/clinic';
import ProcedureIcon, { type ProcedureIconName } from './ProcedureIcon';
// Rinoplasti sayfasıyla aynı görsel dil
import styles from '../[locale]/rinoplasti/rinoplasti.module.css';

export type ProcedureConfig = {
  /** messages içindeki anahtar: Procedures.<key> */
  key: string;
  icon: ProcedureIconName;
  /** İlgili diğer işlemler (alt kısımda gösterilir) */
  related: { key: string; icon: ProcedureIconName; href: string }[];
};

/** "prefix1", "prefix2"... anahtarlarını sırayla, olduğu kadar toplar */
function collect(t: ReturnType<typeof useTranslations>, prefix: string, suffixes: string[], max = 8) {
  const items: Record<string, string>[] = [];
  for (let i = 1; i <= max; i++) {
    if (!t.has(`${prefix}${i}${suffixes[0]}`)) break;
    const item: Record<string, string> = {};
    for (const s of suffixes) item[s || 'text'] = t(`${prefix}${i}${s}`);
    items.push(item);
  }
  return items;
}

export default function ProcedurePage({ config }: { config: ProcedureConfig }) {
  const t = useTranslations(`Procedures.${config.key}`);
  const c = useTranslations('ProcedureCommon');
  const tAll = useTranslations('Procedures');
  const tRhino = useTranslations('Rhinoplasty');
  const waUrl = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(t('waMessage'))}`;

  const facts = collect(t, 'fact', ['Label', 'Value']);
  const who = collect(t, 'who', ['']);
  const approach = collect(t, 'a', ['Title', 'Desc']);
  const journey = collect(t, 'j', ['Title', 'Desc']);
  const faq = collect(t, 'f', ['Q', 'A']);

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
                {c('ctaPrimary')}
              </a>
              <a href="#journey" className={`btn ${styles.btnGhost}`}>
                {c('ctaSecondary')}
              </a>
            </div>
          </div>
          <div className={styles.heroArt} aria-hidden="true">
            <div className={styles.heroRing}>
              <ProcedureIcon name={config.icon} size={150} strokeWidth={0.6} />
            </div>
          </div>
        </div>
      </section>

      {/* Kısa bilgiler */}
      {facts.length > 0 && (
        <section className={styles.statsBand}>
          <div className={`container ${styles.stats} ${facts.length >= 4 ? styles.stats4 : ''}`}>
            {facts.map((f) => (
              <div key={f.Label} className={styles.stat}>
                <span className={styles.statLabel}>{f.Label}</span>
                <span className={styles.statValue} style={{ fontSize: '1.35rem' }}>{f.Value}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Nedir / kimler için */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-tag">{c('aboutTag')}</span>
            <h2>{t('whatTitle')}</h2>
            <p style={{ marginTop: '1rem', color: 'var(--color-text-light)', lineHeight: 1.75 }}>{t('whatDesc')}</p>
          </div>
          {who.length > 0 && (
            <div style={{ maxWidth: 760, margin: '0 auto' }}>
              <h3 style={{ textAlign: 'center', marginBottom: '1.25rem', fontSize: '1.2rem' }}>{c('whoTitle')}</h3>
              <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem', listStyle: 'none', padding: 0 }}>
                {who.map((w) => (
                  <li key={w.text} style={{ padding: '1rem 1.25rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-accent)', borderRadius: 'var(--radius-md)', color: 'var(--color-text-light)', lineHeight: 1.6 }}>
                    {w.text}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Yaklaşım */}
      {approach.length > 0 && (
        <section className={`${styles.section} ${styles.dark}`}>
          <div className="container">
            <div className={styles.sectionHead}>
              <span className="section-tag">{c('approachTag')}</span>
              <h2>{t('approachTitle')}</h2>
            </div>
            <div className={styles.grid3}>
              {approach.map((a) => (
                <article key={a.Title} className={styles.techCard}>
                  <h3>{a.Title}</h3>
                  <p>{a.Desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Süreç */}
      <section id="journey" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="section-tag">{c('journeyTag')}</span>
            <h2>{c('journeyTitle')}</h2>
          </div>
          <ol className={styles.timeline}>
            {journey.map((j, i) => (
              <li key={j.Title} className={styles.step}>
                <span className={styles.stepNum}>{i + 1}</span>
                <div>
                  <h3>{j.Title}</h3>
                  <p>{j.Desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* SSS */}
      <section className={`${styles.section} ${styles.soft}`}>
        <div className={`container ${styles.faqWrap}`}>
          <div className={styles.sectionHead}>
            <span className="section-tag">{c('faqTag')}</span>
            <h2>{c('faqTitle')}</h2>
          </div>
          <div className={styles.faq}>
            {faq.map((f) => (
              <details key={f.Q} className={styles.faqItem}>
                <summary>{f.Q}</summary>
                <p>{f.A}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* İlgili işlemler */}
      {config.related.length > 0 && (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHead}>
              <h2>{c('relatedTitle')}</h2>
            </div>
            <div className={styles.grid3}>
              {config.related.map((r) => (
                <Link key={r.key} href={r.href} className={styles.card} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ color: 'var(--color-accent)', flexShrink: 0 }}>
                    <ProcedureIcon name={r.icon} size={34} strokeWidth={1.2} />
                  </span>
                  <span>
                    <strong style={{ display: 'block', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)', fontSize: '1.05rem' }}>{r.key === 'rhinoplasty' ? tRhino('tag') : tAll(`${r.key}.tag`)}</strong>
                    <span style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>{c('learnMore')}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Kapanış */}
      <section className={styles.finalCta}>
        <div className={`container ${styles.finalInner}`}>
          <h2>{c('finalTitle')}</h2>
          <p>{c('finalDesc')}</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {c('ctaPrimary')}
          </a>
        </div>
      </section>
    </>
  );
}
