import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Quelle eau utiliser pour un lavage de nez ?',
  description:
    'Une eau que l’on peut boire n’est pas toujours sans risque pour le nez. Quelle eau utiliser pour un lavage de nez, quand l’eau du robinet convient-elle, et comment bien faire le lavage ?',
  readMinutes: 4,
  body: [
    { type: 'p', text: 'Une eau que vous pouvez boire n’est pas toujours sans risque pour votre nez. Si vous faites des lavages de nez, l’eau que vous utilisez compte au moins autant que le lavage lui-même.' },
    { type: 'h2', text: 'Qu’est-ce qu’un lavage de nez et à quoi sert-il ?' },
    { type: 'p', text: 'Le lavage de nez consiste à rincer l’intérieur des fosses nasales avec une solution salée. Il peut se faire avec un flacon, un dispositif de lavage à presser ou un petit récipient appelé « lota » (neti pot). Il aide à éliminer l’excès de mucus, les croûtes et les allergènes comme la poussière et le pollen à l’intérieur du nez.' },
    { type: 'p', text: 'C’est pourquoi nous le recommandons souvent en cas de :' },
    {
      type: 'ul',
      items: [
        'Rhinite allergique',
        'Sinusite aiguë ou chronique',
        'Nez bouché et écoulement nasal lors d’un rhume',
        'Après une chirurgie du nez ou des sinus, pour garder le nez propre',
      ],
    },
    { type: 'h2', text: 'Pourquoi l’eau potable ne suffit pas' },
    { type: 'p', text: 'Certains micro-organismes que l’on peut trouver dans l’eau potable ne posent pas de problème lorsqu’ils passent par l’estomac, car l’acide gastrique en neutralise la plupart. Mais lorsque l’eau est introduite par le nez, cette protection n’existe pas ; elle entre directement en contact avec la muqueuse du nez et des sinus.' },
    { type: 'p', text: 'C’est pourquoi nous n’utilisons pas directement l’eau du robinet pour le lavage de nez. Les infections graves liées à cette pratique sont très rares, mais des cas ont été rapportés. Une partie de ces cas était due à une amibe (Naegleria fowleri) que l’on peut trouver dans certaines sources d’eau douce et d’eau du robinet et qui peut atteindre le cerveau. Le fait que ce soit rare ne rend pas la précaution inutile, et cette précaution est très simple.' },
    { type: 'h2', text: 'Quelle eau pouvez-vous utiliser ?' },
    {
      type: 'ul',
      items: [
        'Eau distillée : eau vendue en pharmacie et en magasin avec la mention « distillée ».',
        'Eau stérile : eau dont l’emballage indique qu’elle est stérile.',
        'Eau du robinet bouillie : si vous utilisez l’eau du robinet, elle doit d’abord être bien bouillie, puis refroidie jusqu’à être tiède. Conservez-la dans un récipient propre et fermé, et ne la gardez pas longtemps.',
        'Solutions prêtes à l’emploi : sérum physiologique stérile ou sprays d’eau de mer vendus prêts à l’emploi en pharmacie.',
      ],
    },
    { type: 'p', text: 'J’ajouterais ceci : l’eau en bouteille vendue pour être bue n’est pas toujours stérile. Si l’étiquette n’indique pas « distillée » ou « stérile », il vaut mieux la faire bouillir et la laisser refroidir avant usage, elle aussi.' },
    { type: 'h2', text: 'Comment préparer la solution ?' },
    { type: 'p', text: 'Le lavage de nez se fait avec une solution salée, et non avec de l’eau pure. L’eau pure provoque une sensation de brûlure et un inconfort dans le nez. Le plus pratique est de mélanger des sachets de sel prédosés vendus en pharmacie avec une eau adaptée, ou d’utiliser une solution prête à l’emploi. Les quantités de sel estimées à l’œil à la maison peuvent irriter le nez.' },
    { type: 'h2', text: 'Comment faire un lavage de nez' },
    {
      type: 'steps',
      items: [
        { title: 'Préparation', text: 'Lavez-vous les mains. Assurez-vous que la solution est tiède ; une eau trop chaude ou trop froide est inconfortable.' },
        { title: 'Position', text: 'Penchez-vous en avant au-dessus du lavabo et tournez légèrement la tête sur le côté. Respirez par la bouche pendant le lavage.' },
        { title: 'Lavage', text: 'Introduisez lentement la solution dans la narine du haut. L’eau ressortira par l’autre narine, ou parfois par la bouche. Changez ensuite de côté.' },
        { title: 'Fin', text: 'Mouchez-vous doucement, une narine après l’autre. Se moucher fort peut pousser l’eau vers les oreilles.' },
      ],
    },
    { type: 'h2', text: 'N’oubliez pas le flacon' },
    { type: 'p', text: 'Le flacon ou le dispositif de lavage que vous utilisez doit lui aussi rester propre. Rincez-le avec une eau adaptée après chaque utilisation et laissez-le sécher, remplacez-le aussi souvent que le fabricant le recommande, et ne le partagez pas avec d’autres personnes. Une eau propre administrée avec un dispositif sale n’a plus aucun intérêt.' },
    { type: 'callout', text: 'Le lavage de nez est un geste très simple, mais il faut faire un peu attention à l’eau que l’on y met.' },
    { type: 'h2', text: 'Quand consulter un médecin ?' },
    {
      type: 'ul',
      items: [
        'Si vous ressentez une douleur à l’oreille ou une sensation d’oreille pleine pendant ou après le lavage',
        'Si un côté de votre nez est complètement bouché et que l’eau ne passe pas',
        'Si vous avez été opéré du nez ou des sinus (faites le lavage exactement comme votre médecin vous l’a indiqué)',
        'Si vous avez de la fièvre, des douleurs au visage ou un écoulement malodorant ou sanglant',
      ],
    },
    { type: 'h2', text: 'Questions fréquentes' },
    { type: 'p', text: 'Combien de temps puis-je conserver l’eau bouillie ? Elle peut être conservée peu de temps dans un récipient propre et fermé. Plutôt que de la garder longtemps, je vous conseille de n’en préparer que la quantité dont vous avez besoin.' },
    { type: 'p', text: 'Pourquoi mon nez brûle-t-il pendant le lavage ? Le plus souvent, la concentration en sel de la solution n’est pas adaptée, ou l’eau est trop chaude ou trop froide. Avec un sachet de sel prédosé et de l’eau tiède, la brûlure diminue généralement.' },
    { type: 'p', text: 'À quelle fréquence dois-je me laver le nez ? Cela dépend de la raison pour laquelle vous le faites. En cas d’allergie, de sinusite ou après une opération, suivez la fréquence recommandée par votre médecin.' },
  ],
};

export default t;
