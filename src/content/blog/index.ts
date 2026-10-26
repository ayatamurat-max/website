import type { Post, PostTranslation } from './types';
import rhinoplastyRecovery from './posts/rhinoplasty-recovery';
import septoplastyVsRhinoplasty from './posts/septoplasty-vs-rhinoplasty';
import planningRhinoplastyTurkiye from './posts/planning-rhinoplasty-turkiye';
import historyOfRhinoplasty from './posts/history-of-rhinoplasty';
import nasalSprayAddiction from './posts/nasal-spray-addiction';
import deviatedSeptum from './posts/deviated-septum-surgery';
import botoxFacts from './posts/botox-facts';
import earwax from './posts/earwax';
import coldWeather from './posts/cold-weather-illness';
import mouthTaping from './posts/mouth-taping';
import nasalRinseWater from './posts/nasal-rinse-water';
import suddenHearingLoss from './posts/sudden-hearing-loss';
import nasalCycle from './posts/nasal-cycle';
import aiFace from './posts/ai-face';
import naturalNose from './posts/natural-nose';
import preventativeBotox from './posts/preventative-botox';
import faceTaping from './posts/face-taping';
import noseFiller from './posts/nose-filler';
import fillerNotAlwaysAnswer from './posts/filler-not-always-answer';
import rhinoplastyConsultation from './posts/rhinoplasty-consultation';
import rhinoplastyAbroadAftercare from './posts/rhinoplasty-abroad-aftercare';
import cyclamenSinusitis from './posts/cyclamen-sinusitis';

// Yeni yazıyı buraya ekleyin.
const ALL: Post[] = [
  cyclamenSinusitis,
  noseFiller,
  fillerNotAlwaysAnswer,
  rhinoplastyConsultation,
  rhinoplastyAbroadAftercare,
  mouthTaping,
  nasalRinseWater,
  suddenHearingLoss,
  nasalCycle,
  aiFace,
  naturalNose,
  preventativeBotox,
  faceTaping,
  historyOfRhinoplasty,
  nasalSprayAddiction,
  deviatedSeptum,
  botoxFacts,
  coldWeather,
  earwax,
  planningRhinoplastyTurkiye,
  septoplastyVsRhinoplasty,
  rhinoplastyRecovery,
];

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
