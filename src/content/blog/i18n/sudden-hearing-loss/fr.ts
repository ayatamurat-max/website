import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Surdité brusque : si votre oreille semble bouchée par du coton, n’attendez pas',
  description:
    'Si vous vous réveillez un matin avec une oreille qui semble bouchée par du coton, ne pensez pas toujours à un bouchon de cérumen. Qu’est-ce que la surdité brusque, comment la reconnaître et pourquoi le temps compte-t-il autant ?',
  readMinutes: 4,
  body: [
    { type: 'p', text: 'Vous vous réveillez un matin et l’une de vos oreilles semble bouchée par du coton. Ne pensez pas toujours à un bouchon de cérumen, car une surdité brusque donne parfois exactement cette sensation.' },
    { type: 'h2', text: 'Qu’est-ce que la surdité brusque ?' },
    { type: 'p', text: 'La surdité brusque est une baisse nette de l’audition, généralement d’une seule oreille, qui s’installe en quelques heures ou quelques jours. Certains patients la remarquent au réveil, d’autres lorsque les voix au téléphone leur paraissent étouffées de ce côté.' },
    { type: 'h2', text: 'Cela ne commence pas toujours par « Je n’entends soudain plus rien »' },
    { type: 'p', text: 'Les patients ne viennent pas toujours en disant qu’ils ont soudain perdu l’audition. Ce qu’ils décrivent souvent, c’est une sensation d’oreille bouchée. Ces symptômes peuvent être présents :' },
    {
      type: 'ul',
      items: [
        'Une sensation d’oreille pleine ou de pression dans l’oreille',
        'Une oreille bouchée, avec des sons qui semblent venir « de loin »',
        'Parfois des sifflements ou des bourdonnements dans l’oreille (acouphènes)',
        'Voire des vertiges et des troubles de l’équilibre',
      ],
    },
    { type: 'p', text: 'Ces symptômes peuvent être confondus avec un bouchon de cérumen, une oreille bouchée après un vol en avion ou une obstruction due à un rhume. C’est là que le problème commence : on attend en se disant que cela va passer.' },
    { type: 'h2', text: 'Première étape : trouver la cause' },
    { type: 'p', text: 'Nous divisons schématiquement les pertes auditives en deux groupes, et le traitement dépend entièrement du groupe concerné :' },
    {
      type: 'steps',
      items: [
        { title: 'Surdité de transmission', text: 'Quelque chose empêche le son de passer de l’oreille externe et de l’oreille moyenne jusqu’à l’oreille interne. Un bouchon de cérumen, du liquide dans l’oreille moyenne ou une perforation du tympan en sont des exemples. La plupart sont visibles lors de l’examen.' },
        { title: 'Surdité de perception (neurosensorielle)', text: 'Le problème se situe dans l’oreille interne ou le nerf auditif. Vue de l’extérieur, l’oreille peut paraître tout à fait normale. C’est le groupe qui nous préoccupe le plus en cas de surdité brusque, et ici le temps compte.' },
      ],
    },
    { type: 'h2', text: 'Quelles en sont les causes ?' },
    { type: 'p', text: 'Dans une grande partie des surdités brusques de perception, aucune cause claire n’est trouvée. Les infections virales et les troubles de la circulation sanguine de l’oreille interne font partie des causes suspectées. Rarement, une tumeur bénigne du nerf auditif peut se manifester de façon similaire ; c’est pourquoi nous prévoyons, si nécessaire, un bilan complémentaire par IRM.' },
    { type: 'h2', text: 'Pourquoi le temps compte' },
    { type: 'p', text: 'Les recommandations actuelles insistent particulièrement sur la nécessité de réaliser un test auditif le plus tôt possible et, si un traitement est envisagé, de le commencer tôt. Les 72 premières heures sont particulièrement importantes.' },
    { type: 'h2', text: 'Que se passe-t-il pendant l’examen ?' },
    {
      type: 'ul',
      items: [
        'Examen de l’oreille : pour rechercher un bouchon de cérumen, du liquide dans l’oreille moyenne ou un problème au niveau du tympan.',
        'Tests au diapason : donnent un premier indice sur le caractère transmissionnel ou neurosensoriel de la perte.',
        'Audiométrie (test auditif) : montre le type et le degré de la perte auditive.',
        'Tympanométrie : évalue l’oreille moyenne et le tympan.',
        'Imagerie si nécessaire : une IRM peut être demandée pour évaluer le nerf auditif et la région de l’oreille interne.',
      ],
    },
    { type: 'h2', text: 'Traitement' },
    { type: 'p', text: 'Si la cause est une surdité de transmission, comme un bouchon de cérumen, l’audition s’améliore généralement dès qu’il est retiré. Pour la surdité brusque de perception, l’une des options prévues par les recommandations est un traitement par corticoïdes, pris par voie orale ou injecté derrière le tympan. Le traitement adapté est choisi en fonction de l’état de santé général du patient et des résultats des examens.' },
    { type: 'h2', text: 'Ce qu’il ne faut pas faire' },
    {
      type: 'ul',
      items: [
        'Fouiller dans l’oreille avec un coton-tige en pensant qu’il s’agit de cérumen',
        'Mettre des gouttes dans l’oreille sans examen préalable',
        'Attendre quelques jours pour voir si cela se débouche tout seul',
      ],
    },
    { type: 'callout', text: 'Si vous remarquez une baisse nette de l’audition d’une oreille qui s’installe en quelques heures ou quelques jours, mieux vaut la faire évaluer sans tarder plutôt que de vous dire « J’attends, ça va se déboucher ».' },
    { type: 'h2', text: 'Questions fréquentes' },
    { type: 'p', text: 'La surdité brusque disparaît-elle d’elle-même ? Chez certains patients, l’audition peut récupérer spontanément. Mais nous ne pouvons pas prévoir à l’avance qui récupérera. C’est pourquoi une évaluation précoce vaut mieux que l’attente.' },
    { type: 'p', text: 'Est-ce important si j’ai seulement des acouphènes ? Des acouphènes récents et d’un seul côté doivent toujours être évalués, surtout s’ils s’accompagnent d’une impression de baisse de l’audition.' },
    { type: 'p', text: 'Quel médecin dois-je consulter ? Un spécialiste ORL est le bon choix. Si vous ne pouvez pas en joindre un, rendez-vous aux urgences et expliquez que votre perte auditive est récente.' },
    { type: 'p', text: 'Cela peut-il toucher les deux oreilles ? Oui, mais c’est plus rare. Dans ce cas également, l’évaluation ne doit pas être retardée.' },
  ],
};

export default t;
