import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/i18n/metadata';
import { posts, availableLocales } from '@/content/blog';

// Google'a sitedeki tüm sayfaları bildirir: /sitemap.xml
const PAGES = [
  '', '/hakkimda', '/international-patients', '/rinoplasti', '/septoplasti', '/kepce-kulak',
  '/goz-kapagi-estetigi', '/boyun-gidi-estetigi', '/cerrahi-islemler', '/medikal-islemler',
  '/botoks', '/dermal-dolgu', '/mezoterapi-prp', '/ameliyatsiz-yuz-genclestirme',
  '/blog', '/iletisim', '/gizlilik-politikasi',
];

const url = (locale: string, path: string) =>
  `${SITE_URL}${locale === routing.defaultLocale ? '' : `/${locale}`}${path}` || SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of PAGES) {
    const languages = Object.fromEntries(routing.locales.map((l) => [l, url(l, path)]));
    for (const locale of routing.locales) {
      entries.push({ url: url(locale, path), alternates: { languages } });
    }
  }

  for (const post of posts) {
    const locales = availableLocales(post);
    const path = `/blog/${post.slug}`;
    const languages = Object.fromEntries(locales.map((l) => [l, url(l, path)]));
    for (const locale of locales) {
      entries.push({ url: url(locale, path), lastModified: post.date, alternates: { languages } });
    }
  }

  return entries;
}
