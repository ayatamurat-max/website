import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Pourquoi mon nez se bouche-t-il d’un côté, puis de l’autre ? Le cycle nasal',
  description:
    'Avoir une narine plus bouchée pendant quelques heures n’est pas toujours une maladie. Qu’est-ce que le cycle nasal, pourquoi se produit-il et quand faut-il suspecter une autre cause ?',
  readMinutes: 4,
  body: [
    { type: 'p', text: 'Avoir l’une de vos narines plus bouchée pendant quelques heures n’est pas toujours le signe d’une maladie. Ce phénomène porte un nom : le cycle nasal, le rythme naturel du nez.' },
    { type: 'p', text: 'Il y a une phrase que nous entendons souvent en consultation : « Un côté de mon nez se bouche, puis l’autre. » Les patients viennent généralement en pensant qu’il s’agit d’un problème. En réalité, dans une certaine mesure, c’est le fonctionnement normal d’un nez en bonne santé.' },
    { type: 'h2', text: 'Les cornets : les structures « réglables » à l’intérieur du nez' },
    { type: 'p', text: 'Sur les parois latérales internes du nez se trouvent des structures appelées cornets. Ils contiennent un réseau très riche de vaisseaux sanguins. Lorsque ces vaisseaux se remplissent de sang, le cornet gonfle ; lorsqu’ils se vident, il se rétracte. Le nez peut ainsi régler la quantité d’air qui le traverse, presque comme une vanne.' },
    { type: 'h2', text: 'Comment fonctionne le cycle nasal ?' },
    {
      type: 'steps',
      items: [
        { title: 'Un côté gonfle', text: 'À certains moments de la journée, les cornets d’un côté gonflent légèrement et moins d’air passe de ce côté.' },
        { title: 'L’autre côté s’ouvre', text: 'Au même moment, l’autre côté s’ouvre un peu plus.' },
        { title: 'Ils alternent', text: 'Au bout d’un certain temps, les deux côtés échangent leurs rôles, et le cycle se poursuit ainsi.' },
      ],
    },
    { type: 'p', text: 'Ce processus est en grande partie contrôlé par le système nerveux autonome, c’est-à-dire la partie du système nerveux que nous ne contrôlons pas volontairement, et on l’observe aussi chez les personnes en bonne santé.' },
    { type: 'h2', text: 'Pourquoi ne le remarquons-nous généralement pas ?' },
    { type: 'p', text: 'Comme un côté s’ouvre pendant que l’autre se rétrécit, la quantité totale d’air qui traverse le nez varie généralement peu. C’est pourquoi la plupart des gens ne remarquent jamais le cycle nasal. On a tendance à le remarquer :' },
    {
      type: 'ul',
      items: [
        'Pendant un rhume ou une allergie, lorsque la muqueuse est déjà gonflée',
        'Chez les personnes dont la cloison nasale est déviée d’un côté, lorsque le cycle atteint le côté le plus étroit',
        'La nuit, en position allongée et en essayant de s’endormir, lorsque nous prêtons davantage attention à notre nez',
      ],
    },
    { type: 'h2', text: 'Pourquoi le côté inférieur se bouche-t-il lorsque l’on dort sur le côté ?' },
    { type: 'p', text: 'Lorsque vous êtes allongé sur le côté, vous pouvez ressentir davantage d’obstruction du côté qui se trouve en bas. Il s’agit en grande partie d’une réponse du réseau vasculaire des cornets à la position du corps. Si vous vous tournez de l’autre côté, vous remarquerez peut-être au bout d’un moment que l’obstruction change elle aussi de côté.' },
    { type: 'h2', text: 'Pourquoi le cycle nasal existe-t-il ?' },
    { type: 'p', text: 'Nous ne savons pas exactement pourquoi le cycle nasal existe. Selon une hypothèse, pendant qu’un côté fait passer davantage d’air, la muqueuse de l’autre côté préserve son humidité et poursuit son travail de nettoyage. D’autres théories suggèrent qu’il pourrait contribuer à l’odorat.' },
    { type: 'h2', text: 'Quand ne s’agit-il pas seulement du cycle nasal ?' },
    { type: 'p', text: 'Le cycle nasal alterne entre les deux côtés et ne vous gêne généralement pas. Il faut en revanche suspecter une autre cause si :' },
    {
      type: 'ul',
      items: [
        'L’obstruction est toujours du même côté',
        'Elle est très marquée et rend la respiration difficile',
        'Elle vous gêne tout au long de la journée ou perturbe votre sommeil',
        'Elle s’accompagne d’un écoulement unilatéral sanglant ou malodorant, d’une perte de l’odorat ou de douleurs faciales',
      ],
    },
    { type: 'callout', text: 'Dans ces cas, nous ne mettons pas simplement l’obstruction sur le compte du cycle nasal ; il faut rechercher une déviation de la cloison nasale, une hypertrophie des cornets, une allergie ou une autre cause.' },
    { type: 'h2', text: 'Qu’examinons-nous lors de la consultation ?' },
    { type: 'p', text: 'En examinant l’intérieur du nez, nous vérifions si la cloison nasale est droite, quelle est la taille des cornets et dans quel état se trouve la muqueuse. Si nécessaire, nous évaluons les parties plus profondes du nez à l’aide d’une fine caméra (endoscopie). Parfois, nous regardons à nouveau après avoir pulvérisé un décongestionnant qui rétracte temporairement les cornets ; cela permet de distinguer si l’obstruction provient d’un tissu capable de gonfler ou d’un rétrécissement structurel comme la cloison nasale.' },
    { type: 'h2', text: 'Un traitement est-il nécessaire ?' },
    { type: 'p', text: 'Le cycle nasal en lui-même n’est pas une maladie et ne nécessite pas de traitement. Le traitement est planifié en fonction d’une éventuelle cause sous-jacente de l’obstruction : des médicaments et des sprays nasaux adaptés en cas d’allergie, ou des options comme la septoplastie ou la réduction des cornets en cas de problème structurel.' },
    { type: 'p', text: 'Je voudrais ajouter ici une mise en garde : l’utilisation prolongée de sprays décongestionnants vendus sans ordonnance pour déboucher le nez peut, avec le temps, rendre le nez dépendant de ces sprays et aggraver l’obstruction.' },
    { type: 'h2', text: 'Questions fréquentes' },
    { type: 'p', text: 'Est-il utile de se coucher sur l’autre côté lorsqu’un côté est bouché ? Souvent, oui. Comme le côté inférieur a tendance à se boucher davantage lorsque l’on est allongé sur le côté, se tourner de manière à placer le côté bouché vers le haut peut soulager.' },
    { type: 'p', text: 'Les enfants ont-ils aussi un cycle nasal ? Oui. Mais si un enfant présente une obstruction et un écoulement constants d’un seul côté, il doit être examiné à la recherche de causes comme un corps étranger dans le nez.' },
    { type: 'p', text: 'Le cycle nasal peut-il s’arrêter complètement ? Dans un nez normal, le cycle se poursuit. Si c’est toujours le même côté qui est bouché, cela peut être le signe d’un autre problème plutôt que du cycle.' },
  ],
};

export default t;
