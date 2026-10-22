import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Septoplastie ou rhinoplastie ? Comprendre la différence',
  description:
    'L’une améliore la respiration, l’autre modifie la forme du nez, et parfois les deux sont nécessaires. Un chirurgien ORL explique ce qui distingue la septoplastie de la rhinoplastie.',
  readMinutes: 5,
  body: [
    {
      type: 'p',
      text: 'Les patients emploient souvent les mots septoplastie et rhinoplastie comme s’ils désignaient la même chose. Ces interventions sont liées, et elles sont parfois réalisées ensemble, mais leurs objectifs sont différents. Comprendre cette différence vous aide à poser les bonnes questions sur votre propre nez.',
    },
    { type: 'h2', text: 'La septoplastie : pour la respiration' },
    {
      type: 'p',
      text: 'La cloison nasale, ou septum, est la paroi de cartilage et d’os qui sépare l’intérieur du nez en deux côtés. Lorsqu’elle est déviée, elle peut rétrécir l’une ou les deux voies respiratoires. La septoplastie redresse la cloison en passant par les narines. Elle ne modifie pas l’aspect extérieur de votre nez et ne laisse aucune cicatrice visible.',
    },
    {
      type: 'ul',
      items: [
        'Objectif : améliorer le passage de l’air dans le nez.',
        'Signes typiques : nez bouché d’un côté ou des deux, respiration par la bouche, ronflement ou mauvais sommeil.',
        'Dans mon cabinet : anesthésie générale, environ une heure, en ambulatoire. Les mèches sont généralement retirées vers le 3e jour, et les patients internationaux prévoient habituellement un séjour de 3 à 4 jours.',
      ],
    },
    { type: 'h2', text: 'La rhinoplastie : pour la forme, et la fonction' },
    {
      type: 'p',
      text: 'La rhinoplastie modifie la forme extérieure du nez : l’arête, la pointe, la largeur ou le profil dans son ensemble. En tant que chirurgien ORL, je ne planifie jamais la forme de manière isolée. Réduire un nez ou modifier sa structure influence aussi la façon dont l’air y circule ; c’est pourquoi la respiration est évaluée dans chaque projet de rhinoplastie.',
    },
    {
      type: 'ul',
      items: [
        'Objectif : une forme naturelle, en harmonie avec votre visage, sans compromettre la respiration.',
        'Dans mon cabinet : le plus souvent la technique ouverte avec des instruments piézoélectriques, et la technique fermée dans certains cas sélectionnés.',
        'Les patients internationaux prévoient généralement un séjour de 7 jours, jusqu’au retrait de l’attelle.',
      ],
    },
    { type: 'h2', text: 'Quand les deux sont nécessaires : la septorhinoplastie' },
    {
      type: 'p',
      text: 'Beaucoup de patients qui souhaitent modifier la forme de leur nez ont aussi une déviation de la cloison, parfois sans le savoir. Dans ces cas, les deux peuvent être corrigées en une seule opération, appelée septorhinoplastie. Cela signifie une seule anesthésie, une seule période de récupération et un seul voyage.',
    },
    {
      type: 'callout',
      text: 'Une bonne question à poser à tout chirurgien : « Allez-vous évaluer ma respiration en plus de la forme de mon nez ? »',
    },
    { type: 'h2', text: 'Comment savoir de quelle intervention vous avez besoin' },
    {
      type: 'steps',
      items: [
        { title: 'Décrivez ce qui vous gêne', text: 'S’agit-il surtout de la respiration, surtout de l’apparence, ou des deux ?' },
        { title: 'Faites un examen complet', text: 'La cloison, les cornets, les valves nasales et la structure extérieure du nez sont évalués ensemble.' },
        { title: 'Convenez d’un plan', text: 'Ce n’est qu’à ce moment-là que l’intervention adaptée, ou la combinaison adaptée, est choisie.' },
      ],
    },
    {
      type: 'p',
      text: 'Si vous ne savez pas quelle intervention vous convient, une consultation vidéo en ligne est un bon point de départ. Nous pouvons parler de vos symptômes et de vos objectifs avant toute décision.',
    },
  ],
};

export default t;
