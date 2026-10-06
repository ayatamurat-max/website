import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  // Türkçe "/" altında kalır, diğer diller /en, /de, /ru ... önekini alır
  localePrefix: 'as-needed'
});
