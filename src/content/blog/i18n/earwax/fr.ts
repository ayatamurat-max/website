import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Faut-il nettoyer le cérumen ? Ce qu’il faut savoir sur les cotons-tiges',
  description:
    'Le cérumen n’est pas de la saleté, mais une sécrétion protectrice. Les cotons-tiges l’enfoncent souvent plus profondément au lieu de l’enlever. Quand faut-il vraiment retirer le cérumen ?',
  readMinutes: 3,
  body: [
    {
      type: 'p',
      text: 'La « cire d’oreille » n’est pas vraiment une saleté qu’il faut nettoyer. Son nom médical est le cérumen, et il s’agit d’une sécrétion protectrice produite par l’oreille elle-même.',
    },
    { type: 'h2', text: 'À quoi sert le cérumen' },
    {
      type: 'ul',
      items: [
        'Il maintient la peau du conduit auditif hydratée.',
        'Il retient la poussière et les particules étrangères.',
        'Il contribue à la défense naturelle contre les microbes.',
      ],
    },
    { type: 'h2', text: 'Votre oreille se nettoie toute seule' },
    {
      type: 'p',
      text: 'La peau du conduit auditif migre lentement vers l’extérieur, aidée par les mouvements de la mâchoire, et le cérumen est ainsi évacué progressivement de lui-même.',
    },
    { type: 'h2', text: 'Pourquoi les cotons-tiges peuvent poser problème' },
    {
      type: 'p',
      text: 'Nous pensons souvent nettoyer nos oreilles avec un coton-tige, mais la plupart du temps, nous enfonçons le cérumen plus profondément au lieu de l’enlever. Parfois, le conduit se bouche complètement et l’audition peut diminuer.',
    },
    {
      type: 'callout',
      text: 'Introduire chaque jour un coton-tige dans une oreille saine, ce n’est pas la nettoyer. C’est parfois la cause même du problème.',
    },
    { type: 'h2', text: 'Quand faut-il retirer le cérumen ?' },
    {
      type: 'p',
      text: 'Tout cérumen visible n’a pas besoin d’être retiré. S’il provoque un bouchon, une baisse de l’audition ou d’autres symptômes, il est retiré lors d’un examen avec une méthode adaptée. Essuyer l’oreille externe avec une serviette après la douche suffit généralement.',
    },
  ],
};

export default t;
