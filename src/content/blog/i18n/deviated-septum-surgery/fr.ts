import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'J’ai une déviation de la cloison nasale : dois-je me faire opérer ?',
  description:
    'Une déviation de la cloison nasale ne nécessite pas toujours une opération. Ce qui compte, c’est de savoir si elle affecte réellement votre respiration. Voici ce qu’un chirurgien ORL examine lors de la consultation.',
  readMinutes: 4,
  body: [
    {
      type: 'p',
      text: 'Avoir une courbure à l’intérieur du nez ne signifie pas automatiquement que vous devez être opéré. La déviation de la cloison nasale (septum) est très fréquente et, chez beaucoup de personnes, elle ne provoque aucun symptôme significatif.',
    },
    { type: 'h2', text: 'La vraie question : affecte-t-elle votre respiration ?' },
    {
      type: 'ul',
      items: [
        'Obstruction nasale persistante ou récidivante',
        'Respiration buccale pendant le sommeil',
        'Ronflement',
        'Difficulté à respirer pendant l’effort',
      ],
    },
    { type: 'h2', text: 'Elle peut aussi affecter les oreilles' },
    {
      type: 'p',
      text: 'Les problèmes qui accompagnent l’obstruction nasale peuvent parfois affecter la trompe d’Eustache, le canal qui relie l’oreille moyenne à l’arrière du nez. Cela peut provoquer une sensation de plénitude ou de pression dans les oreilles, des oreilles fréquemment bouchées ou des problèmes récidivants de l’oreille moyenne. L’essentiel est de vérifier lors de l’examen si ces symptômes sont réellement liés au septum.',
    },
    { type: 'h2', text: 'L’examen va au-delà du septum' },
    {
      type: 'ul',
      items: [
        'La taille des cornets',
        'La présence éventuelle d’une allergie',
        'Toute autre cause qui rétrécit les voies respiratoires',
      ],
    },
    {
      type: 'callout',
      text: 'Dire « J’ai une déviation de la cloison » ne suffit pas pour décider d’une opération. Nous soignons le patient, pas l’imagerie.',
    },
    {
      type: 'p',
      text: 'Lorsque la déviation est réellement la cause de vos symptômes, la septoplastie la corrige par les narines, sans cicatrice visible. Dans ma pratique, l’intervention dure environ une heure sous anesthésie générale, en ambulatoire, et elle peut être associée à une rhinoplastie si vous souhaitez également modifier la forme du nez.',
    },
  ],
};

export default t;
