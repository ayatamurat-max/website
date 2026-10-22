// Aydınlatılmış onam formları: metinler tools/onam/content/*.yaml dosyalarından
// `python3 tools/onam/publish.py` ile üretilir (PDF'ler public/belgeler/onam altına).
import index from './index.json';
import { RAW } from './data.generated';

export type RiskItem = { name: string; text: string };

export type ConsentForm = {
  code: string;
  type: 'surgical' | 'office';
  aesthetic: boolean;
  title: string;
  alt_name?: string;
  about: string[];
  procedure_intro?: string[];
  procedure_steps?: string[];
  procedure_notes?: string[];
  anesthesia: string;
  duration: string;
  stay: string;
  benefits: string[];
  success?: string[];
  alternatives: string[];
  no_treatment: string[];
  before: string[];
  recovery: { when: string; what: string }[];
  risks: { expected: string[]; common?: RiskItem[]; uncommon?: RiskItem[]; rare?: RiskItem[] };
  emergency: string[];
  lifestyle?: string[];
  declarations_extra?: string[];
};

export type ConsentCommon = {
  meta: { date: string; rev: string };
  clinic: Record<string, string>;
  labels: Record<string, string>;
  sections: Record<string, string>;
  intro: string[];
  refusal_right: string[];
  before_common: string[];
  risk_intro: string[];
  risk_tiers: Record<'expected' | 'common' | 'uncommon' | 'rare' | 'general', string>;
  general_risks_surgical: string[];
  general_risks_office: string[];
  risk_outro: string[];
  emergency_call: string;
  lifestyle_common: string[];
  intraop: string[];
  photo_intro: string[];
  photo_options: string[];
  kvkk: string[];
  declarations: string[];
  declarations_aesthetic: string[];
  decision_options: string[];
  minor_text: string[];
  final_note: string;
};

type IndexEntry = {
  code: string;
  type: 'surgical' | 'office';
  aesthetic: boolean;
  titles: Record<string, string>;
  pdf: Record<string, { pages: number; kb: number }>;
};

const INDEX = index as unknown as { date: string; forms: Record<string, IndexEntry> };
const DATA = RAW as unknown as Record<string, { common: ConsentCommon; forms: Record<string, ConsentForm> }>;

export const CONSENT_SLUGS = Object.keys(INDEX.forms);

/** Formun sitede yayınlandığı diller (metni ve PDF'i olanlar) */
export function consentLocales(slug: string): string[] {
  const e = INDEX.forms[slug];
  if (!e) return [];
  return Object.keys(DATA).filter((l) => DATA[l].forms[slug] && e.pdf[l]);
}

/** Liste için: o dildeki başlık, tür ve PDF bilgisi */
export function consentList(locale: string) {
  return CONSENT_SLUGS.filter((s) => consentLocales(s).includes(locale)).map((slug) => {
    const e = INDEX.forms[slug];
    return { slug, code: e.code, type: e.type, title: e.titles[locale], pdf: e.pdf[locale] };
  });
}

export function getConsent(locale: string, slug: string) {
  const lang = DATA[locale];
  const form = lang?.forms[slug];
  const pdf = INDEX.forms[slug]?.pdf[locale];
  if (!lang || !form || !pdf) return null;
  return { form, common: lang.common, pdf };
}

export function consentTitle(locale: string, slug: string): string | undefined {
  return INDEX.forms[slug]?.titles[locale];
}

export const consentPdfUrl = (locale: string, slug: string) => `/belgeler/onam/${locale}/${slug}.pdf`;

/** İndirilen dosyanın adı, ör. "Onam-Formu-rinoplasti-TR.pdf" */
export const consentPdfName = (locale: string, slug: string) =>
  `${locale === 'tr' ? 'Onam-Formu' : 'Informed-Consent'}-${slug}-${locale.toUpperCase()}.pdf`;
