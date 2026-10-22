import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Welches Wasser sollten Sie für die Nasenspülung verwenden?',
  description:
    'Wasser, das man trinken kann, ist nicht immer sicher für die Nase. Welches Wasser eignet sich für eine Nasenspülung, wann ist Leitungswasser in Ordnung, und wie wird richtig gespült?',
  readMinutes: 4,
  body: [
    { type: 'p', text: 'Wasser, das Sie trinken können, ist nicht immer sicher für Ihre Nase. Wenn Sie Ihre Nase spülen, ist das verwendete Wasser mindestens so wichtig wie die Spülung selbst.' },
    { type: 'h2', text: 'Was ist eine Nasenspülung und wozu dient sie?' },
    { type: 'p', text: 'Bei einer Nasenspülung wird das Innere der Nasenhöhle mit einer Salzlösung gespült. Das kann mit einer Flasche, einer Quetschflasche zur Nasenspülung oder einem kleinen Gefäß, der sogenannten „Neti-Kanne“, geschehen. Sie hilft, überschüssigen Schleim, Krusten und Allergene wie Staub und Pollen aus der Nase zu entfernen.' },
    { type: 'p', text: 'Deshalb empfehlen wir sie häufig bei:' },
    {
      type: 'ul',
      items: [
        'Allergischer Rhinitis',
        'Akuter oder chronischer Sinusitis',
        'Verstopfter und laufender Nase bei einer Erkältung',
        'Zur Reinhaltung der Nase nach Nasen- und Nasennebenhöhlenoperationen',
      ],
    },
    { type: 'h2', text: 'Warum Trinkwasser nicht ausreicht' },
    { type: 'p', text: 'Manche Mikroorganismen, die im Trinkwasser vorkommen können, verursachen keine Probleme, wenn sie den Magen passieren, denn die Magensäure macht die meisten von ihnen unschädlich. Wird das Wasser jedoch über die Nase zugeführt, fehlt dieser Schutz; es kommt direkt mit der Schleimhaut von Nase und Nasennebenhöhlen in Kontakt.' },
    { type: 'p', text: 'Deshalb verwenden wir Leitungswasser für die Nasenspülung nicht direkt. Schwere Infektionen in diesem Zusammenhang sind sehr selten, aber es wurden Fälle berichtet. Ein Teil dieser Fälle wurde durch eine Amöbe (Naegleria fowleri) verursacht, die in bestimmten Süßwasser- und Leitungswasserquellen vorkommen und das Gehirn erreichen kann. Dass es selten ist, macht die Vorsichtsmaßnahme nicht überflüssig – und die Vorsichtsmaßnahme ist sehr einfach.' },
    { type: 'h2', text: 'Welches Wasser können Sie verwenden?' },
    {
      type: 'ul',
      items: [
        'Destilliertes Wasser: Wasser, das in Apotheken und Geschäften mit der Aufschrift „destilliert“ verkauft wird.',
        'Steriles Wasser: Wasser, auf dessen Verpackung angegeben ist, dass es steril ist.',
        'Abgekochtes Leitungswasser: Wenn Leitungswasser verwendet wird, sollte es zuerst gründlich abgekocht und dann auf lauwarm abgekühlt werden. Bewahren Sie es in einem sauberen, verschlossenen Gefäß auf und lassen Sie es nicht lange stehen.',
        'Fertige Lösungen: gebrauchsfertige sterile Kochsalzlösung oder Meerwassersprays aus der Apotheke.',
      ],
    },
    { type: 'p', text: 'Eines möchte ich noch hinzufügen: Als Trinkwasser verkauftes Flaschenwasser ist nicht immer steril. Wenn auf dem Etikett nicht „destilliert“ oder „steril“ steht, ist es besser, auch dieses vor der Verwendung abzukochen und abkühlen zu lassen.' },
    { type: 'h2', text: 'Wie sollte die Lösung zubereitet werden?' },
    { type: 'p', text: 'Für die Nasenspülung verwendet man eine Salzlösung, kein reines Wasser. Reines Wasser verursacht Brennen und Beschwerden in der Nase. Am praktischsten ist es, abgemessene Salzbeutel aus der Apotheke mit geeignetem Wasser zu mischen oder eine fertige Lösung zu verwenden. Zu Hause nach Augenmaß bestimmte Salzmengen können die Nase reizen.' },
    { type: 'h2', text: 'So spülen Sie Ihre Nase' },
    {
      type: 'steps',
      items: [
        { title: 'Vorbereitung', text: 'Waschen Sie sich die Hände. Achten Sie darauf, dass die Lösung lauwarm ist; zu heißes oder zu kaltes Wasser ist unangenehm.' },
        { title: 'Haltung', text: 'Beugen Sie sich über das Waschbecken nach vorn und drehen Sie den Kopf leicht zur Seite. Atmen Sie während der Spülung durch den Mund.' },
        { title: 'Spülen', text: 'Geben Sie die Lösung langsam in das obere Nasenloch. Das Wasser fließt aus dem anderen Nasenloch oder manchmal aus dem Mund wieder heraus. Wechseln Sie dann die Seite.' },
        { title: 'Abschluss', text: 'Schnäuzen Sie sich sanft, eine Seite nach der anderen. Kräftiges Schnäuzen kann Wasser in Richtung der Ohren drücken.' },
      ],
    },
    { type: 'h2', text: 'Vergessen Sie die Flasche nicht' },
    { type: 'p', text: 'Auch die Flasche oder das Spülgerät, das Sie verwenden, muss sauber gehalten werden. Spülen Sie es nach jeder Anwendung mit geeignetem Wasser aus und lassen Sie es trocknen, ersetzen Sie es in den vom Hersteller empfohlenen Abständen und teilen Sie es nicht mit anderen. Sauberes Wasser aus einem verschmutzten Gerät verfehlt den Zweck.' },
    { type: 'callout', text: 'Die Nasenspülung ist eine sehr einfache Anwendung – aber beim Wasser, das wir hineingeben, sollten wir ein wenig aufpassen.' },
    { type: 'h2', text: 'Wann sollten Sie einen Arzt aufsuchen?' },
    {
      type: 'ul',
      items: [
        'Wenn während oder nach der Spülung Ohrenschmerzen oder ein Druckgefühl im Ohr auftreten',
        'Wenn eine Seite Ihrer Nase vollständig verstopft ist und kein Wasser durchfließt',
        'Wenn Sie an der Nase oder den Nasennebenhöhlen operiert wurden (spülen Sie genau so, wie Ihr Arzt es Ihnen erklärt hat)',
        'Wenn Sie Fieber, Gesichtsschmerzen oder übel riechenden oder blutigen Ausfluss haben',
      ],
    },
    { type: 'h2', text: 'Häufig gestellte Fragen' },
    { type: 'p', text: 'Wie lange kann ich abgekochtes Wasser aufbewahren? Es kann kurze Zeit in einem sauberen, verschlossenen Gefäß aufbewahrt werden. Statt es lange stehen zu lassen, empfehle ich Ihnen, nur so viel zuzubereiten, wie Sie brauchen.' },
    { type: 'p', text: 'Warum brennt meine Nase beim Spülen? Meist stimmt die Salzkonzentration der Lösung nicht, oder das Wasser ist zu heiß oder zu kalt. Mit einem fertigen Salzbeutel und lauwarmem Wasser lässt das Brennen meist nach.' },
    { type: 'p', text: 'Wie oft sollte ich meine Nase spülen? Das hängt davon ab, warum Sie spülen. Bei Allergien, Sinusitis oder nach einer Operation halten Sie sich an die Häufigkeit, die Ihr Arzt empfiehlt.' },
  ],
};

export default t;
