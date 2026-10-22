import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Ich habe eine verkrümmte Nasenscheidewand: Brauche ich eine Operation?',
  description:
    'Eine Septumdeviation muss nicht immer operiert werden. Entscheidend ist, ob sie Ihre Atmung wirklich beeinträchtigt. Darauf achtet ein HNO-Chirurg bei der Untersuchung.',
  readMinutes: 4,
  body: [
    {
      type: 'p',
      text: 'Eine Verkrümmung im Inneren Ihrer Nase bedeutet nicht automatisch, dass Sie operiert werden müssen. Eine Septumdeviation ist sehr häufig und verursacht bei vielen Menschen überhaupt keine nennenswerten Beschwerden.',
    },
    { type: 'h2', text: 'Die eigentliche Frage: Beeinträchtigt sie Ihre Atmung?' },
    {
      type: 'ul',
      items: [
        'Anhaltende oder wiederkehrende Nasenatmungsbehinderung',
        'Mundatmung im Schlaf',
        'Schnarchen',
        'Atembeschwerden bei körperlicher Belastung',
      ],
    },
    { type: 'h2', text: 'Auch die Ohren können betroffen sein' },
    {
      type: 'p',
      text: 'Probleme, die mit einer behinderten Nasenatmung einhergehen, können manchmal die Ohrtrompete (Eustachische Röhre) beeinträchtigen, also den Kanal, der das Mittelohr mit dem hinteren Teil der Nase verbindet. Das kann ein Völle- oder Druckgefühl in den Ohren, häufig verschlossene Ohren oder wiederkehrende Mittelohrprobleme verursachen. Entscheidend ist, bei der Untersuchung abzuklären, ob diese Beschwerden tatsächlich mit dem Septum zusammenhängen.',
    },
    { type: 'h2', text: 'Die Untersuchung geht über das Septum hinaus' },
    {
      type: 'ul',
      items: [
        'Die Größe der Nasenmuscheln',
        'Ob eine Allergie vorliegt',
        'Jede andere Ursache, die den Atemweg verengt',
      ],
    },
    {
      type: 'callout',
      text: 'Die Aussage „Ich habe eine verkrümmte Nasenscheidewand“ reicht nicht aus, um über eine Operation zu entscheiden. Wir behandeln den Patienten, nicht das Bild.',
    },
    {
      type: 'p',
      text: 'Wenn die Verkrümmung tatsächlich die Ursache Ihrer Beschwerden ist, korrigiert die Septumplastik sie durch die Nasenlöcher, ohne sichtbare Narben. In meiner Praxis dauert der Eingriff in Vollnarkose etwa eine Stunde und erfolgt ambulant; er kann mit einer Rhinoplastik kombiniert werden, wenn Sie sich auch eine Veränderung der Form wünschen.',
    },
  ],
};

export default t;
