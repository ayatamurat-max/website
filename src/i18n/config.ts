export const locales = ['tr', 'en', 'ru', 'de', 'fr', 'bg'] as const;
export const defaultLocale = 'tr' as const;

export type AppLocale = typeof locales[number];
