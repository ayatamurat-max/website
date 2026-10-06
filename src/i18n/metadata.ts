import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { routing } from './routing';

export const SITE_URL = 'https://www.muratayata.com';

export type MetaPage = 'home' | 'about' | 'surgical' | 'medical' | 'contact';

function localizedPath(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? '' : `/${locale}`;
  if (path === '/') return prefix || '/';
  return `${prefix}${path}`;
}

/**
 * Her dil için ayrı başlık/açıklama, canonical adres ve hreflang alternatifleri üretir.
 */
export async function buildMetadata(locale: string, page: MetaPage, path: string): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Meta' });
  const title = t(`${page}Title`);
  const description = t(`${page}Desc`);

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = localizedPath(l, path);
  }
  languages['x-default'] = localizedPath(routing.defaultLocale, path);

  return {
    title,
    description,
    alternates: {
      canonical: localizedPath(locale, path),
      languages
    },
    openGraph: {
      title,
      description,
      url: localizedPath(locale, path),
      siteName: 'Murat Ayata',
      locale,
      type: 'website',
      images: ['/images/hero-bg.jpg']
    }
  };
}
