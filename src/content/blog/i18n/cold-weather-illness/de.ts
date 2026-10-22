import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Macht kaltes Wetter krank? Wie Ihre Nase Sie schützt',
  description:
    'Um sich eine Erkältung oder Grippe einzufangen, müssen Sie zuerst mit einem Virus in Kontakt kommen. Doch kaltes Wetter ist nicht völlig unschuldig: Es kann die natürliche Abwehr in Ihrer Nase schwächen.',
  readMinutes: 3,
  body: [
    {
      type: 'p',
      text: '„Kaltes Wetter macht nicht krank.“ Diesen Satz hört man oft, und im Grunde stimmt er: Um sich eine Erkältung oder Grippe einzufangen, müssen Sie zuerst mit einem Virus in Kontakt kommen. Nur weil Ihnen kalt ist, entsteht keine Infektion aus dem Nichts.',
    },
    {
      type: 'p',
      text: 'Zu sagen, kaltes Wetter habe überhaupt keine Wirkung, ist aber auch nicht ganz richtig – denn die Nase ist eine unserer ersten Verteidigungslinien gegen Viren.',
    },
    { type: 'h2', text: 'Wie Kälte die Abwehr der Nase beeinflusst' },
    {
      type: 'ul',
      items: [
        'Wenn kalte Atemluft die Temperatur in der Nase senkt, kann die natürliche antivirale Abwehrreaktion der Nasenzellen schwächer werden. Studien haben gezeigt, dass einige Abwehrmechanismen, die helfen, Viren abzufangen und unschädlich zu machen, bei Kälte weniger gut funktionieren.',
        'Manche Atemwegsviren, insbesondere Rhinoviren, vermehren sich bei den niedrigeren Temperaturen in der Nase leichter.',
        'Kalte Luft ist meist trockene Luft, was das Reinigungssystem aus Schleim und den feinen Flimmerhärchen (Zilien) der Nasenschleimhaut beeinträchtigen kann.',
        'Im Winter halten wir uns mehr in geschlossenen Räumen auf und haben engeren Kontakt zueinander.',
      ],
    },
    {
      type: 'callout',
      text: 'Kälte macht Sie nicht direkt krank, aber sie kann die Abwehr Ihrer Nase etwas schwächen und dem Virus die Arbeit erleichtern.',
    },
    { type: 'h2', text: 'Kurz gesagt' },
    {
      type: 'p',
      text: '„Mir war kalt, deshalb habe ich die Grippe bekommen“ stimmt so nicht ganz – ohne Virus keine Infektion. Aber kaltes Wetter ist auch nicht völlig unschuldig. Deshalb hilft es in den Wintermonaten, die Nase vor Kälte zu schützen, geschlossene Räume zu lüften und auf Handhygiene zu achten.',
    },
  ],
};

export default t;
