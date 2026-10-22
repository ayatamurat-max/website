import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Le « visage idéal » créé par l’IA : un objectif ou un plan chirurgical ?',
  description:
    'Les patients arrivent désormais en consultation avec des photos de leur propre visage retouchées par l’IA. À quoi servent ces images, que ne peuvent-elles pas savoir et comment les utiliser en consultation ?',
  readMinutes: 4,
  body: [
    { type: 'p', text: 'Aujourd’hui, les patients n’apportent parfois plus la photo de quelqu’un d’autre, mais une version de leur propre visage générée par l’intelligence artificielle. Dans une enquête publiée récemment au Royaume-Uni, 15 % des chirurgiens esthétiques déclarent avoir reçu en consultation des patients venus avec des photos d’eux-mêmes retouchées par l’IA.' },
    { type: 'p', text: 'C’est une tendance tout à fait compréhensible. En quelques secondes, vous pouvez voir une version de votre propre visage avec un « nez plus harmonieux » ou une « mâchoire plus marquée ». Mais il est important de bien distinguer ce que ces images peuvent nous dire et ce qu’elles ne peuvent pas nous dire.' },
    { type: 'h2', text: 'Quelle différence avec la photo de quelqu’un d’autre ?' },
    { type: 'p', text: 'Je pense qu’il y a là une différence importante. Lorsque vous regardez la photo de quelqu’un d’autre, vous savez qu’il s’agit d’un autre visage. Vous devinez plus ou moins que son nez ne rendrait pas de la même façon sur votre visage. L’IA, en revanche, vous donne le sentiment que « c’est vous, juste un peu modifié ». L’image devient alors beaucoup plus convaincante, et l’attente beaucoup plus concrète.' },
    { type: 'h2', text: 'Ce que l’IA ne sait pas' },
    { type: 'p', text: 'Une photo ne montre que la surface du visage. En chirurgie, nous travaillons avec tout ce qui se trouve sous cette surface. L’IA ne connaît pas :' },
    {
      type: 'ul',
      items: [
        'L’épaisseur de votre peau : une peau épaisse masque les détails fins qui se trouvent dessous ; une pointe du nez bien définie à l’écran peut ne pas paraître aussi fine chez une personne à la peau épaisse. Une peau fine, à l’inverse, laisse voir la moindre irrégularité sous-jacente.',
        'La structure de vos cartilages : ce sont les cartilages qui déterminent la forme et le soutien du nez. La possibilité de le réduire ou de le remodeler dépend de la solidité de cette charpente.',
        'Votre anatomie osseuse : la structure des os propres du nez et les proportions générales du squelette facial influencent directement le résultat.',
        'Votre cicatrisation : la durée de l’œdème et la façon dont les tissus cicatrisent varient d’une personne à l’autre, et aucun logiciel ne peut le calculer.',
      ],
    },
    { type: 'h2', text: 'À l’écran, tout est possible ; en chirurgie, le nez doit aussi respirer' },
    { type: 'p', text: 'À l’écran, par exemple, vous pouvez réduire le nez autant que vous le souhaitez. En chirurgie, ce nez doit à la fois s’harmoniser avec le visage et continuer à vous permettre de respirer. Si les structures internes du nez sont trop affaiblies ou trop rétrécies, un nez qui paraît beau de l’extérieur peut ne pas laisser passer suffisamment d’air à l’intérieur. C’est pourquoi, en rhinoplastie, la forme et la fonction sont toujours planifiées ensemble.' },
    { type: 'h2', text: 'La photo elle-même peut être trompeuse' },
    { type: 'p', text: 'La photo que vous donnez à l’IA peut elle aussi ne pas refléter entièrement la réalité. Les photos prises de près avec la caméra frontale peuvent faire paraître le nez plus grand qu’il ne l’est, en raison de l’objectif grand angle. La lumière, l’angle et les filtres modifient également l’image. Autrement dit, le point de départ comme l’image cible peuvent différer de votre visage réel.' },
    { type: 'h2', text: 'Ces images sont-elles donc inutiles ?' },
    { type: 'p', text: 'Je ne suis pas contre ces images. Elles peuvent même être utiles pour comprendre ce que souhaite le patient. Des descriptions comme « plus naturel » ou « un peu plus retroussé » n’ont pas le même sens pour tout le monde. Une image peut rendre concrète l’idée que le patient a en tête et faciliter la conversation.' },
    {
      type: 'steps',
      items: [
        { title: 'Apportez les images', text: 'Il n’y a aucun inconvénient à apporter en consultation les images que vous avez préparées.' },
        { title: 'Expliquez ce qui vous plaît', text: 'Plutôt que l’image dans son ensemble, il est important de dire ce qui vous attire en particulier : la bosse sur l’arête du nez, l’orientation de la pointe, la largeur ?' },
        { title: 'Examen et évaluation', text: 'La peau, les cartilages, la structure osseuse et les structures internes du nez sont examinés, et l’on vérifie s’il existe un problème respiratoire.' },
        { title: 'Un plan réaliste', text: 'Nous discutons ensemble de ce qui est possible avec votre anatomie et de ce qui s’harmonisera avec votre visage.' },
      ],
    },
    { type: 'callout', text: 'Les images générées par l’IA peuvent montrer un objectif, mais elles ne peuvent pas constituer le plan chirurgical lui-même.' },
    { type: 'h2', text: 'Questions fréquentes' },
    { type: 'p', text: 'Le résultat après l’opération sera-t-il identique à l’image de l’IA ? Aucune image, qu’elle soit réalisée par l’IA ou par simulation informatique, ne garantit le résultat. Ce ne sont que des outils qui facilitent la conversation.' },
    { type: 'p', text: 'Vaut-il mieux apporter la photo du nez de quelqu’un d’autre ? Les deux peuvent donner une idée. L’essentiel est que l’image soit considérée comme un objectif et que le plan soit établi en fonction de votre visage.' },
    { type: 'p', text: 'Puis-je apporter plusieurs images ? Bien sûr. Voir ce que vous aimez en commun sur différentes images permet souvent de comprendre encore plus facilement vos attentes.' },
  ],
};

export default t;
