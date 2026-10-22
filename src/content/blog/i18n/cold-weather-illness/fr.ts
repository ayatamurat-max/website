import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Le froid rend-il malade ? Comment votre nez vous défend',
  description:
    'Pour attraper un rhume ou la grippe, il faut d’abord rencontrer un virus. Mais le froid n’est pas totalement innocent : il peut affaiblir les défenses naturelles de votre nez.',
  readMinutes: 3,
  body: [
    {
      type: 'p',
      text: '« Le froid ne rend pas malade. » On entend souvent cette phrase, et elle est vraie sur le fond : pour attraper un rhume ou la grippe, il faut d’abord rencontrer un virus. Avoir froid ne crée pas une infection à partir de rien.',
    },
    {
      type: 'p',
      text: 'Mais dire que le froid n’a aucun effet n’est pas tout à fait exact non plus, car le nez est l’une de nos premières lignes de défense contre les virus.',
    },
    { type: 'h2', text: 'Comment le froid agit sur les défenses du nez' },
    {
      type: 'ul',
      items: [
        'Lorsque l’air froid que nous respirons abaisse la température à l’intérieur du nez, la réponse antivirale naturelle des cellules nasales peut s’affaiblir. Des études ont montré que certains mécanismes de défense, qui aident à piéger et à neutraliser les virus, fonctionnent moins bien au froid.',
        'Certains virus respiratoires, en particulier les rhinovirus, se multiplient plus facilement aux températures plus basses que l’on trouve dans le nez.',
        'L’air froid est généralement un air sec, ce qui peut altérer le système de nettoyage formé par le mucus et les cils microscopiques qui tapissent le nez.',
        'En hiver, nous passons plus de temps à l’intérieur, en contact plus étroit les uns avec les autres.',
      ],
    },
    {
      type: 'callout',
      text: 'Le froid ne vous rend pas malade directement, mais il peut affaiblir un peu les défenses de votre nez et faciliter la tâche du virus.',
    },
    { type: 'h2', text: 'En bref' },
    {
      type: 'p',
      text: '« J’ai eu froid, donc j’ai attrapé la grippe » n’est pas tout à fait exact – sans virus, pas d’infection. Mais le froid n’est pas totalement innocent non plus. C’est pourquoi, pendant les mois d’hiver, protéger votre nez du froid, aérer les espaces intérieurs et veiller à l’hygiène des mains sont utiles.',
    },
  ],
};

export default t;
