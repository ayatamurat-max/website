import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/i18n/metadata';
import { CLINIC } from '@/lib/clinic';
import { breadcrumbJsonLd } from '@/lib/schema';
import { consentLocales, consentPdfName, consentPdfUrl, getConsent, type RiskItem } from '@/content/consent';
import ConsentActions from '../../../../components/ConsentActions';
import JsonLd from '../../../../components/JsonLd';
import { md } from '../../../../components/Md';
import styles from '../../belgeler.module.css';

type Params = { params: Promise<{ locale: string; slug: string }> };

const LANG_NAMES: Record<string, string> = {
  tr: 'Türkçe', en: 'English', ru: 'Русский', de: 'Deutsch', fr: 'Français', bg: 'Български',
};

const pagePath = (locale: string, slug: string) =>
  `${locale === routing.defaultLocale ? '' : `/${locale}`}/belgeler/onam-formlari/${slug}`;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const data = getConsent(locale, slug);
  if (!data) return {};
  const t = await getTranslations({ locale, namespace: 'Meta' });
  const languages: Record<string, string> = {};
  for (const l of consentLocales(slug)) languages[l] = pagePath(l, slug);
  languages['x-default'] = pagePath(routing.defaultLocale, slug);
  const title = t('consentFormTitle', { title: data.form.title });
  const description = t('consentFormDesc', { title: data.form.title });
  return {
    title,
    description,
    alternates: { canonical: pagePath(locale, slug), languages },
    openGraph: { title, description, url: pagePath(locale, slug), siteName: 'Murat Ayata', locale, type: 'article', images: ['/images/hero-bg.jpg'] },
  };
}

const Ps = ({ items }: { items?: string[] }) => <>{items?.map((p) => <p key={p}>{md(p)}</p>)}</>;
const Ul = ({ items, className }: { items?: string[]; className?: string }) =>
  items && items.length > 0 ? <ul className={className}>{items.map((i) => <li key={i}>{md(i)}</li>)}</ul> : null;

const WarnIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" />
  </svg>
);

export default async function ConsentFormPage({ params }: Params) {
  const { locale, slug } = await params;
  const data = getConsent(locale, slug);
  if (!data) notFound();
  const { form: f, common: c, pdf } = data;
  const t = await getTranslations({ locale, namespace: 'Documents' });
  const tNav = await getTranslations({ locale, namespace: 'Header' });
  const S = c.sections;
  const L = c.labels;
  const surgical = f.type === 'surgical';
  const pdfUrl = consentPdfUrl(locale, slug);
  const pdfName = consentPdfName(locale, slug);
  const pdfMeta = `PDF · ${t('pages', { count: pdf.pages })} · ${pdf.kb} KB`;

  const declarations = [...c.declarations, ...(f.declarations_extra ?? []), ...(f.aesthetic ? c.declarations_aesthetic : [])];

  const tierList = (items: RiskItem[]) => (
    <ul>
      {items.map((r) => (
        <li key={r.name}><span className={styles.riskName}>{md(r.name)}</span>: {md(r.text)}</li>
      ))}
    </ul>
  );

  // Bölümler: PDF'teki sırayla. Yalnızca kâğıt formda doldurulan alanlar (hasta bilgileri, imzalar) sitede gösterilmez.
  const blocks: { id: string; title: string; body: ReactNode }[] = [
    { id: 'durum', title: S.about, body: <Ps items={f.about} /> },
    {
      id: 'islem',
      title: S.procedure,
      body: (
        <>
          <Ps items={f.procedure_intro} />
          {f.procedure_steps && <ol className={styles.steps}>{f.procedure_steps.map((s) => <li key={s}>{md(s)}</li>)}</ol>}
          <Ps items={f.procedure_notes} />
          <div className={styles.facts}>
            {[[L.anesthesia, f.anesthesia], [L.duration, f.duration], [L.stay, f.stay]].map(([k, v]) => (
              <div key={k} className={styles.fact}>
                <span className={styles.factLabel}>{k}</span>
                <span className={styles.factValue}>{md(v)}</span>
              </div>
            ))}
          </div>
        </>
      ),
    },
    { id: 'faydalar', title: S.benefits, body: <><Ul items={f.benefits} /><Ps items={f.success} /></> },
    { id: 'alternatifler', title: S.alternatives, body: <Ul items={f.alternatives} /> },
    { id: 'yapilmazsa', title: S.no_treatment, body: <><Ps items={f.no_treatment} /><Ps items={c.refusal_right} /></> },
    { id: 'hazirlik', title: S.before, body: <Ul items={[...f.before, ...c.before_common]} /> },
    {
      id: 'iyilesme',
      title: S.recovery,
      body: (
        <ol className={styles.recovery}>
          {f.recovery.map((r) => (
            <li key={r.when}><span className={styles.when}>{md(r.when)}</span>{md(r.what)}</li>
          ))}
        </ol>
      ),
    },
    {
      id: 'riskler',
      title: S.risks,
      body: (
        <>
          <Ps items={c.risk_intro} />
          <div className={`${styles.tier} ${styles.tier_expected}`}>
            <div className={styles.tierTitle}>{md(c.risk_tiers.expected)}</div>
            <Ul items={f.risks.expected} />
          </div>
          {(['common', 'uncommon', 'rare'] as const).map((k) =>
            f.risks[k]?.length ? (
              <div key={k} className={`${styles.tier} ${styles[`tier_${k}`]}`}>
                <div className={styles.tierTitle}>{md(c.risk_tiers[k])}</div>
                {tierList(f.risks[k]!)}
              </div>
            ) : null
          )}
          <div className={`${styles.tier} ${styles.tier_general}`}>
            <div className={styles.tierTitle}>{md(c.risk_tiers.general)}</div>
            <Ul items={surgical ? c.general_risks_surgical : c.general_risks_office} />
          </div>
          <Ps items={c.risk_outro} />
        </>
      ),
    },
    {
      id: 'acil',
      title: S.emergency,
      body: (
        <div className={styles.redbox}>
          <Ul items={f.emergency} />
          <p className={styles.emcall}>{md(c.emergency_call)}</p>
        </div>
      ),
    },
    { id: 'oneriler', title: S.lifestyle, body: <Ul items={[...(f.lifestyle ?? []), ...c.lifestyle_common]} /> },
    ...(surgical ? [{ id: 'beklenmeyen', title: S.intraop, body: <Ps items={c.intraop} /> }] : []),
    {
      id: 'fotograf',
      title: S.photo,
      body: (
        <>
          <Ps items={c.photo_intro} />
          <Ul items={c.photo_options} className={styles.declarations} />
          <Ps items={c.kvkk} />
          <p><Link href="/gizlilik-politikasi" style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>{t('privacyCardTitle')} →</Link></p>
        </>
      ),
    },
    {
      id: 'beyan',
      title: S.declaration,
      body: (
        <>
          <p>{t('declarationsIntro')}</p>
          <Ul items={declarations} className={styles.declarations} />
          <p className={styles.subhead}>{t('decisionIntro')}</p>
          <Ul items={c.decision_options} className={styles.declarations} />
          <p className={styles.subhead}>{t('minorTitle')}</p>
          <Ps items={c.minor_text} />
        </>
      ),
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: `${f.title}: ${L.doc_title}`,
    inLanguage: locale,
    url: `${SITE_URL}${pagePath(locale, slug)}`,
    audience: { '@type': 'Patient' },
    publisher: { '@type': 'MedicalClinic', name: CLINIC.name, url: SITE_URL },
  };

  const otherLangs = consentLocales(slug).filter((l) => l !== locale);

  return (
    <>
      <JsonLd data={jsonLd} />
      <JsonLd
        data={breadcrumbJsonLd(locale, [
          { name: tNav('home'), path: '/' },
          { name: tNav('documents'), path: '/belgeler' },
          { name: tNav('consentForms'), path: '/belgeler/onam-formlari' },
          { name: f.title, path: `/belgeler/onam-formlari/${slug}` },
        ])}
      />

      <section className={styles.hero}>
        <div className="container">
          <Link href="/belgeler/onam-formlari" className={styles.back}>{t('backToList')}</Link>
          <br />
          <span className="section-tag">{L.doc_title}</span>
          <h1>{f.title}</h1>
          {f.alt_name && <p className={styles.altName}>{md(f.alt_name)}</p>}
          <p className={styles.issued}>
            {t('issued', { date: c.meta.date, rev: c.meta.rev })} · {L.doc_no}: ONM-{f.code}-{locale.toUpperCase()}
          </p>
          <ConsentActions pdfUrl={pdfUrl} fileName={pdfName} downloadLabel={t('downloadPdf')} printLabel={t('print')} meta={pdfMeta} />
        </div>
      </section>

      <div className={`container ${styles.body}`}>
        <div className={styles.layout}>
          <nav className={styles.toc} aria-label={t('onThisPage')}>
            <div className={styles.tocTitle}>{t('onThisPage')}</div>
            <ol>
              {blocks.map((b) => (
                <li key={b.id}><a href={`#${b.id}`}>{b.title}</a></li>
              ))}
            </ol>
          </nav>

          <article className={styles.doc} lang={locale}>
            <div className={styles.notice}>
              <WarnIcon />
              <div>
                <strong>{t('noticeTitle')}</strong>
                <p>{t('noticeText')}</p>
              </div>
            </div>

            <div className={styles.intro}><Ps items={c.intro} /></div>

            {blocks.map((b, i) => (
              <div key={b.id} id={b.id} className={styles.block}>
                <h2><span className={styles.num}>{i + 1}</span>{b.title}</h2>
                {b.body}
              </div>
            ))}

            <p className={styles.finalNote}>{md(c.final_note)}</p>

            <div className={styles.bottomBar}>
              <h2>{f.title}: {L.doc_title}</h2>
              <ConsentActions pdfUrl={pdfUrl} fileName={pdfName} downloadLabel={t('downloadPdf')} printLabel={t('print')} meta={pdfMeta} compact />
              {otherLangs.length > 0 && (
                <div className={styles.langs}>
                  <span>{t('otherLanguages')}:</span>
                  {otherLangs.map((l) => (
                    <Link key={l} href={`/belgeler/onam-formlari/${slug}`} locale={l} hrefLang={l}>{LANG_NAMES[l]}</Link>
                  ))}
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
