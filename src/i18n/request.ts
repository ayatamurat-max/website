import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['tr', 'en', 'ru', 'de', 'fr', 'bg'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    locale = 'tr';
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
