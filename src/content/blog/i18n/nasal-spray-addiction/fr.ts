import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Dépendance au spray nasal : « Docteur, je n’arrive pas à m’en passer »',
  description:
    'Les sprays décongestionnants qui dégagent rapidement le nez peuvent l’obstruer davantage lorsqu’ils sont utilisés trop longtemps. Qu’est-ce que la rhinite médicamenteuse, quels sprays ne sont pas en cause, et quelle est la vraie question à se poser ?',
  readMinutes: 6,
  body: [
    {
      type: 'p',
      text: 'Récemment, un patient s’est assis dans mon cabinet et, avant même que je commence l’examen, il a sorti un spray nasal de sa poche et l’a posé sur le bureau. « Docteur, je n’arrive pas à m’en passer. » Quand je lui ai demandé depuis combien de temps il l’utilisait, il a réfléchi un instant : « Environ trois ans. »',
    },
    {
      type: 'p',
      text: 'Tout avait commencé très simplement. Il avait le nez bouché, il avait acheté un spray en pharmacie, l’avait utilisé une fois et s’était senti soulagé en quelques minutes. Il l’a de nouveau utilisé la nuit, puis le lendemain… Au bout d’un moment, il se sentait mal à l’aise chaque fois qu’il l’oubliait à la maison. Alors il en a acheté un autre : un à la maison, un dans la voiture, un au travail.',
    },
    {
      type: 'p',
      text: 'Voici la question intéressante : était-il vraiment incapable de respirer sans le spray, ou le spray lui-même était-il devenu l’une des raisons pour lesquelles il ne pouvait plus respirer ?',
    },
    { type: 'h2', text: 'Ce que fait le spray à l’intérieur de votre nez' },
    {
      type: 'p',
      text: 'À l’intérieur du nez se trouvent des structures appelées cornets. Ils ne sont pas inutiles : ils réchauffent, humidifient et aident à filtrer l’air que nous respirons, et ils contiennent un riche réseau de vaisseaux sanguins.',
    },
    {
      type: 'p',
      text: 'Lorsque vous utilisez un spray décongestionnant à action rapide, par exemple à base d’oxymétazoline ou de xylométazoline, ces vaisseaux se contractent, les cornets diminuent de volume, le passage de l’air s’élargit et, en quelques minutes, vous respirez. Votre cerveau apprend vite le schéma : nez bouché, spray, soulagement.',
    },
    { type: 'h2', text: 'Là où le problème commence' },
    {
      type: 'p',
      text: 'Lorsque ces médicaments sont utilisés plus longtemps que prévu, le nez peut se boucher de nouveau dès que l’effet s’estompe. C’est ce qu’on appelle la congestion de rebond. Vous pulvérisez à nouveau, le nez se dégage, puis il se bouche encore. Bientôt, deux fois par jour ne suffisent plus ; trois, quatre, cinq fois…',
    },
    {
      type: 'callout',
      text: 'À un moment donné, la question devient confuse : utilisez-vous le spray parce que votre nez est bouché, ou votre nez est-il bouché parce que vous utilisez le spray ? La rhinite médicamenteuse, c’est exactement ce cercle vicieux.',
    },
    { type: 'h2', text: 'Tous les sprays nasaux ne provoquent pas cela' },
    {
      type: 'ul',
      items: [
        'Les sprays d’eau saline et d’eau de mer ne font pas partie de ce groupe.',
        'Les sprays nasaux à base de corticoïdes utilisés pour traiter les allergies ne font pas partie de ce groupe.',
        'Le problème, c’est l’utilisation prolongée et incontrôlée des sprays décongestionnants qui dégagent le nez en quelques minutes.',
      ],
    },
    {
      type: 'p',
      text: 'Nous voyons parfois le problème inverse : un patient à qui l’on a prescrit un spray corticoïde pour ses allergies ne l’utilise jamais, parce qu’il a entendu dire que « les sprays nasaux rendent dépendant ». Il évite le médicament dont il a besoin parce qu’il le confond avec un tout autre groupe de médicaments.',
    },
    { type: 'h2', text: 'La vraie question : pourquoi votre nez est-il bouché ?' },
    {
      type: 'p',
      text: 'Se contenter de dire à un patient d’arrêter le spray, c’est passer à côté de la moitié de l’histoire. Ce que je veux vraiment savoir, c’est pourquoi il a eu besoin de ce spray au départ. Il peut s’agir d’une déviation de la cloison nasale (septum), de cornets hypertrophiés, d’une rhinite allergique, d’une sinusite chronique, de polypes nasaux, ou de plusieurs de ces causes à la fois.',
    },
    { type: 'h2', text: 'Comment le traitement est planifié' },
    {
      type: 'steps',
      items: [
        { title: 'Briser le cercle', text: 'L’utilisation du décongestionnant est arrêtée de manière contrôlée ; lorsque c’est indiqué, des sprays corticoïdes et des lavages au sérum salé peuvent aider.' },
        { title: 'Trouver la cause', text: 'Le problème sous-jacent – septum, cornets, allergie, polypes – est recherché.' },
        { title: 'Chirurgie si nécessaire', text: 'Tous les patients n’ont pas besoin d’une opération, mais un problème structurel important est également évalué.' },
      ],
    },
    {
      type: 'p',
      text: 'Si vous ne deviez retenir qu’une phrase de cet article, que ce soit celle-ci : vous avez peut-être commencé à utiliser le spray parce que votre nez était bouché, mais au bout d’un moment, votre nez peut aussi être bouché à cause du spray. Si votre spray est devenu un élément permanent de votre sac, de votre voiture ou de votre table de chevet, la première question n’est pas « Comment l’arrêter ? » mais « Pourquoi mon nez est-il toujours bouché ? »',
    },
  ],
};

export default t;
