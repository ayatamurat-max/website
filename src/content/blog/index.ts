import type { Post, PostTranslation } from './types';
import rhinoplastyRecovery from './posts/rhinoplasty-recovery';
import septoplastyVsRhinoplasty from './posts/septoplasty-vs-rhinoplasty';
import planningRhinoplastyTurkiye from './posts/planning-rhinoplasty-turkiye';

// Yeni yazıyı buraya ekleyin.
const ALL: Post[] = [planningRhinoplastyTurkiye, septoplastyVsRhinoplasty, rhinoplastyRecovery];

/** Yeniden eskiye sıralı */
export const posts: Post[] = [...ALL].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

/** İstenen dildeki çeviri; yoksa İngilizce. */
export function getTranslation(post: Post, locale: string): { t: PostTranslation; lang: string; isFallback: boolean } {
  const tr = post.translations[locale as keyof Post['translations']];
  if (tr) return { t: tr, lang: locale, isFallback: false };
  return { t: post.translations.en, lang: 'en', isFallback: locale !== 'en' };
}

export function availableLocales(post: Post): string[] {
  return Object.keys(post.translations);
}

export type { Post, PostTranslation, Block } from './types';
