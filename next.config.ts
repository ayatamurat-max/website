import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/**
 * Eski WordPress sitesinden kalan adresler.
 * Google bu adresleri hâlâ tanıyor (Search Console, Ekim 2026); kalıcı (308/301) yönlendirmeyle
 * hem ziyaretçiyi doğru sayfaya götürür hem de eski sitenin arama birikimini yeni sayfalara aktarır.
 */
const legacyRedirects: { source: string; destination: string }[] = [
  // İçeriği yeni sitede karşılığı olan sayfalar
  { source: '/gidi-estetigi', destination: '/boyun-gidi-estetigi' },
  { source: '/kepce-kulak-estetigi-otoplasty', destination: '/kepce-kulak' },
  { source: '/revizyon-burun-estetigi', destination: '/rinoplasti' },

  // Eski blog arşivleri → blog
  { source: '/category/:path*', destination: '/blog' },
  { source: '/tag/:path*', destination: '/blog' },
  { source: '/author/:path*', destination: '/blog' },
  { source: '/:year(\\d{4})/:path*', destination: '/blog' },

  // Eski temanın örnek/demo sayfaları → ana sayfa
  ...[
    '/gallery',
    '/portfolio',
    '/portfolio/:path*',
    '/portfolio-grid',
    '/portfolio-grid-:n',
    '/portfolio-category/:path*',
    '/portfolio-tag/:path*',
    '/team',
    '/team/:path*',
    '/services-single',
    '/elements',
    '/footer/:path*',
    '/cart',
    '/sample-page',
    '/landing',
    '/typography',
    '/coming-soon',
    '/home-:n',
    '/2-columns',
    '/2-columns-sidebar',
    '/grid-4-columns',
  ].map((source) => ({ source, destination: '/' })),
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyRedirects.map((r) => ({ ...r, permanent: true }));
  },
};

export default withNextIntl(nextConfig);
