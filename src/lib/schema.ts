// Google için yapılandırılmış veri (JSON-LD) üreticileri.
// Physician: tüm sayfalarda (layout). FAQPage ve BreadcrumbList: işlem sayfalarında.
import { SITE_URL } from '@/i18n/metadata';
import { routing } from '@/i18n/routing';
import { CLINIC } from './clinic';

export const SOCIAL_LINKS = [
  'https://www.facebook.com/drmuratayata',
  'https://www.instagram.com/op.dr.muratayata/',
  'https://x.com/muratayataMD',
  'https://www.linkedin.com/in/murat-ayata-08203212b/',
  'https://www.doktortakvimi.com/murat-ayata/kulak-burun-bogaz/kirklareli',
];

export function absoluteUrl(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  return `${SITE_URL}${prefix}${path === '/' ? '' : path}` || SITE_URL;
}

/** Hekim + muayenehane bilgisi. Yerel aramada (Kırklareli KBB vb.) Google bunu kullanır. */
export function physicianJsonLd(locale: string) {
  const isTr = locale === 'tr';
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE_URL}/#physician`,
    name: isTr ? 'Op. Dr. Murat Ayata' : 'Murat Ayata, MD',
    url: absoluteUrl(locale, '/'),
    image: `${SITE_URL}/images/hero-bg.jpg`,
    telephone: CLINIC.phoneTel,
    email: CLINIC.email,
    medicalSpecialty: 'Otolaryngologic',
    description: isTr
      ? 'Kulak Burun Boğaz ve Baş Boyun Cerrahisi Uzmanı. Rinoplasti, septoplasti, kepçe kulak, göz kapağı estetiği ve medikal estetik uygulamaları.'
      : 'ENT and Head & Neck Surgeon. Rhinoplasty, septoplasty, otoplasty, eyelid surgery and non-surgical facial aesthetics.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Karacaibrahim Mahallesi, Dereüstü Sokak No:11/30, Saranta İş Merkezi',
      addressLocality: 'Kırklareli',
      addressRegion: 'Kırklareli',
      postalCode: '39100',
      addressCountry: 'TR',
    },
    areaServed: ['Kırklareli', 'Lüleburgaz', 'Edirne', 'Tekirdağ', 'Türkiye'],
    availableLanguage: ['tr', 'en'],
    sameAs: SOCIAL_LINKS,
    worksFor: {
      '@type': 'MedicalClinic',
      '@id': `${SITE_URL}/#clinic`,
      name: CLINIC.name,
      telephone: CLINIC.phoneTel,
      url: SITE_URL,
    },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(locale: string, items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(locale, it.path),
    })),
  };
}
