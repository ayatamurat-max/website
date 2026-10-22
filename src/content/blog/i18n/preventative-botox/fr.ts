import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'À quel âge commencer le Botox ? À propos du « Botox préventif »',
  description:
    'Il n’existe pas d’âge défini pour commencer le Botox. Quelle est la logique du « Botox préventif », pour qui peut-il avoir du sens et pour qui est-il inutile ?',
  readMinutes: 4,
  body: [
    { type: 'p', text: 'Il n’existe pas d’âge défini pour commencer le Botox. On entend souvent des phrases comme « il faut commencer après 25 ans » ou « il faut le faire avant 30 ans », mais ce ne sont pas des limites médicales.' },
    { type: 'h2', text: 'Distinguons d’abord deux types de rides' },
    {
      type: 'ul',
      items: [
        'Rides dynamiques : des rides qui n’apparaissent que lorsque vous faites une expression, par exemple quand vous haussez les sourcils ou souriez, et qui disparaissent lorsque le visage est au repos.',
        'Rides statiques : des rides visibles même lorsque le visage est complètement détendu, sans aucune expression ; des rides qui se sont inscrites dans la peau.',
      ],
    },
    { type: 'p', text: 'Au fil des années, les rides dynamiques formées par des expressions fréquemment répétées peuvent peu à peu devenir statiques. C’est cette transition qui est au cœur du débat sur le Botox préventif.' },
    { type: 'h2', text: 'Comment agit la toxine botulique ?' },
    { type: 'p', text: 'La toxine botulique diminue temporairement le signal nerveux qui atteint le muscle dans lequel elle est injectée. Comme le muscle se contracte moins, la ride d’expression qu’il crée s’adoucit. L’effet n’est pas permanent : il s’estompe avec le temps et le muscle retrouve son mouvement antérieur.' },
    { type: 'h2', text: 'La logique du Botox préventif' },
    { type: 'p', text: 'L’idée derrière ce que l’on appelle le « Botox préventif » est la suivante : certaines rides s’inscrivent dans la peau avec le temps, parce que la même expression du visage est répétée pendant des années. La toxine botulique diminue temporairement le mouvement de ce muscle.' },
    { type: 'p', text: 'Ainsi, chez un patient aux expressions très marquées dont les rides commencent à persister même au repos, un traitement précoce peut avoir du sens. Par exemple, un jeune patient qui fronce très souvent les sourcils et chez qui une ride nette commence à apparaître entre les sourcils même au repos peut entrer dans ce groupe.' },
    { type: 'h2', text: 'Mais pas pour tout le monde' },
    { type: 'p', text: 'Cela ne signifie pas que toute personne qui atteint la vingtaine doit faire du Botox, car le vieillissement du visage n’est pas déterminé uniquement par les expressions :' },
    {
      type: 'ul',
      items: [
        'Génétique : la structure de la peau et la vitesse du vieillissement sont en grande partie liées aux caractéristiques familiales.',
        'Soleil : la lumière du soleil est l’un des principaux facteurs externes qui altèrent le collagène de la peau.',
        'Type de peau : l’épaisseur, l’hydratation et l’élasticité de la peau varient d’une personne à l’autre.',
        'Perte de volume : avec l’âge, le tissu graisseux et les structures de soutien du visage diminuent ; le Botox n’a pas d’effet sur cela.',
        'Et bien d’autres facteurs : le tabac, le sommeil et l’état de santé général influencent aussi la peau.',
      ],
    },
    { type: 'p', text: 'C’est pourquoi, à un jeune âge, les gestes les plus essentiels pour protéger la peau, avant le Botox, sont une protection solaire régulière et l’absence de tabac.' },
    { type: 'h2', text: 'Qu’évaluons-nous lors de la consultation ?' },
    {
      type: 'steps',
      items: [
        { title: 'Analyse des expressions', text: 'Nous regardons quels muscles travaillent et avec quelle force, et dans quelles zones des rides se forment.' },
        { title: 'Le visage au repos', text: 'Nous évaluons si les rides sont également visibles lorsque le visage est détendu.' },
        { title: 'Les attentes', text: 'Nous discutons de ce que souhaite le patient et de la part de ses expressions naturelles qu’il veut préserver. Le but n’est pas de figer le visage, mais d’adoucir l’expression là où c’est nécessaire.' },
      ],
    },
    { type: 'h2', text: 'Qui ne doit pas en recevoir ?' },
    { type: 'p', text: 'La toxine botulique n’est pas administrée pendant la grossesse et l’allaitement, dans certaines maladies musculaires et nerveuses, ni en cas d’infection active au site d’injection. Vous devez toujours signaler avant le traitement les médicaments que vous prenez et les maladies que vous avez eues.' },
    { type: 'callout', text: 'Plutôt que de regarder l’âge de quelqu’un et de dire « il est temps de commencer le Botox », je trouve plus pertinent de regarder ce que fait le visage.' },
    { type: 'h2', text: 'Questions fréquentes' },
    { type: 'p', text: 'Si je commence tôt, vais-je devenir dépendant(e) ? Non, la toxine botulique n’entraîne pas de dépendance physique. Lorsque vous arrêtez, l’effet s’estompe avec le temps et le muscle retrouve son mouvement antérieur.' },
    { type: 'p', text: 'Si j’arrête le Botox, mes rides vont-elles s’aggraver ? Non. Lorsque l’effet s’estompe, le visage retrouve les expressions qu’il avait avant le traitement ; arrêter ne rend pas les rides pires qu’avant.' },
    { type: 'p', text: 'Le Botox et les fillers, est-ce la même chose ? Non. Le Botox agit sur les rides d’expression en réduisant le mouvement musculaire, tandis que les fillers servent à compenser une perte de volume ou à soutenir certaines zones. Leurs finalités sont différentes.' },
    { type: 'p', text: 'Quel est le bon âge pour le Botox préventif ? Il n’y a pas d’âge idéal unique. La décision ne se prend pas selon l’âge du calendrier, mais selon les caractéristiques d’expression de votre visage et l’état de vos rides.' },
  ],
};

export default t;
