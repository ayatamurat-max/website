import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Das KI-generierte „ideale Gesicht“: Ziel oder Operationsplan?',
  description:
    'Patientinnen und Patienten kommen heute mit KI-bearbeiteten Fotos ihres eigenen Gesichts zur Beratung. Wofür sind diese Bilder nützlich, was können sie nicht wissen und wie sollten sie in der Beratung genutzt werden?',
  readMinutes: 4,
  body: [
    { type: 'p', text: 'Heute bringen Patienten manchmal nicht mehr das Foto eines anderen Menschen mit, sondern eine von künstlicher Intelligenz erstellte Version ihres eigenen Gesichts. In einer kürzlich in Großbritannien veröffentlichten Umfrage gaben 15 Prozent der ästhetischen Chirurgen an, Patienten erlebt zu haben, die mit KI-bearbeiteten Fotos von sich selbst zur Beratung kamen.' },
    { type: 'p', text: 'Dieser Trend ist sehr verständlich. In wenigen Sekunden sehen Sie eine Version Ihres eigenen Gesichts mit einer „schöneren Nase“ oder einer „markanteren Kinnlinie“. Es ist jedoch wichtig, klar zu unterscheiden, was diese Bilder uns sagen können und was nicht.' },
    { type: 'h2', text: 'Worin unterscheidet es sich vom Foto eines anderen Menschen?' },
    { type: 'p', text: 'Ich denke, hier gibt es einen wichtigen Unterschied. Wenn Sie das Foto eines anderen Menschen betrachten, wissen Sie, dass es ein anderes Gesicht ist. Sie können mehr oder weniger abschätzen, dass dessen Nase in Ihrem Gesicht nicht genauso aussehen würde. Die KI dagegen vermittelt Ihnen das Gefühl: „Das bist du, nur ein wenig verändert.“ Dadurch wirkt das Bild viel überzeugender und die Erwartung wird viel konkreter.' },
    { type: 'h2', text: 'Was die KI nicht weiß' },
    { type: 'p', text: 'Ein Foto zeigt nur die Oberfläche des Gesichts. In der Chirurgie arbeiten wir jedoch mit allem, was unter dieser Oberfläche liegt. Die KI weiß nichts über:' },
    {
      type: 'ul',
      items: [
        'Ihre Hautdicke: Dicke Haut überdeckt die feinen Details darunter; eine auf dem Bildschirm scharf gezeichnete Nasenspitze wirkt bei jemandem mit dicker Haut möglicherweise nicht genauso scharf. Dünne Haut hingegen lässt jede darunterliegende Unregelmäßigkeit sichtbar werden.',
        'Ihre Knorpelstruktur: Die Knorpel bestimmen Form und Stabilität der Nase. Wie stark sie verkleinert oder umgeformt werden kann, hängt von der Festigkeit dieses Gerüsts ab.',
        'Ihre Knochenanatomie: Die Struktur der Nasenbeine und die Gesamtproportionen des Gesichtsschädels beeinflussen das Ergebnis direkt.',
        'Ihren Heilungsverlauf: Wie lange die Schwellung anhält und wie das Gewebe heilt, ist von Mensch zu Mensch verschieden und lässt sich von keiner Software berechnen.',
      ],
    },
    { type: 'h2', text: 'Auf dem Bildschirm ist alles möglich, in der Chirurgie muss die Nase auch atmen' },
    { type: 'p', text: 'Auf dem Bildschirm können Sie die Nase zum Beispiel so stark verkleinern, wie Sie möchten. In der Chirurgie muss diese Nase jedoch sowohl zum Gesicht passen als auch weiterhin die Atmung ermöglichen. Werden die inneren Strukturen der Nase zu stark geschwächt oder verengt, lässt eine Nase, die von außen schön aussieht, innen möglicherweise nicht genug Luft durch. Deshalb werden bei der Rhinoplastik Form und Funktion immer gemeinsam geplant.' },
    { type: 'h2', text: 'Auch das Foto selbst kann täuschen' },
    { type: 'p', text: 'Auch das Foto, das Sie der KI geben, spiegelt die Wirklichkeit möglicherweise nicht vollständig wider. Aus der Nähe aufgenommene Fotos mit der Frontkamera können die Nase wegen des Weitwinkelobjektivs größer erscheinen lassen, als sie ist. Licht, Winkel und Filter verändern das Bild ebenfalls. Das heißt: Sowohl der Ausgangspunkt als auch das Zielbild können von Ihrem tatsächlichen Gesicht abweichen.' },
    { type: 'h2', text: 'Sind diese Bilder also nutzlos?' },
    { type: 'p', text: 'Ich bin nicht gegen diese Bilder. Sie können sogar hilfreich sein, um zu verstehen, was sich der Patient wünscht. Beschreibungen wie „natürlicher“ oder „etwas stupsiger“ bedeuten nicht für jeden dasselbe. Ein Bild kann die Vorstellung im Kopf des Patienten konkret machen und das Gespräch erleichtern.' },
    {
      type: 'steps',
      items: [
        { title: 'Bringen Sie die Bilder mit', text: 'Es spricht nichts dagegen, die von Ihnen erstellten Bilder zur Beratung mitzubringen.' },
        { title: 'Sagen Sie, was Ihnen gefällt', text: 'Wichtiger als das Bild als Ganzes ist, was Sie daran besonders anspricht: der Höcker am Nasenrücken, die Ausrichtung der Nasenspitze, die Breite?' },
        { title: 'Untersuchung und Beurteilung', text: 'Haut, Knorpel, Knochenstruktur und die inneren Strukturen der Nase werden untersucht, und es wird geprüft, ob ein Atemproblem besteht.' },
        { title: 'Ein realistischer Plan', text: 'Gemeinsam besprechen wir, was mit Ihrer Anatomie möglich ist und was zu Ihrem Gesicht passt.' },
      ],
    },
    { type: 'callout', text: 'KI-Bilder können ein Ziel aufzeigen, aber sie können nicht der Operationsplan selbst sein.' },
    { type: 'h2', text: 'Häufig gestellte Fragen' },
    { type: 'p', text: 'Sieht das Ergebnis nach der Operation genauso aus wie das KI-Bild? Kein Bild, ob mit KI oder mit einer Computersimulation erstellt, ist eine Garantie für das Ergebnis. Es sind lediglich Hilfsmittel, die das Gespräch erleichtern.' },
    { type: 'p', text: 'Ist es besser, ein Foto der Nase eines anderen Menschen mitzubringen? Beides kann eine Vorstellung vermitteln. Entscheidend ist, dass das Bild als Ziel betrachtet und der Plan für Ihr Gesicht erstellt wird.' },
    { type: 'p', text: 'Kann ich mehr als ein Bild mitbringen? Selbstverständlich. Zu sehen, was Ihnen an verschiedenen Bildern gemeinsam gefällt, macht es oft noch leichter, Ihre Erwartungen zu verstehen.' },
  ],
};

export default t;
