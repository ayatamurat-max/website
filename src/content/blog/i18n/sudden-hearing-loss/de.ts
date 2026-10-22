import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Hörsturz: Wenn sich Ihr Ohr wie mit Watte verstopft anfühlt, warten Sie nicht',
  description:
    'Wenn Sie eines Morgens aufwachen und sich ein Ohr anfühlt, als wäre es mit Watte verstopft, gehen Sie nicht immer von Ohrenschmalz aus. Was ist ein Hörsturz, wie erkennt man ihn und warum ist die Zeit so wichtig?',
  readMinutes: 4,
  body: [
    { type: 'p', text: 'Sie wachen eines Morgens auf, und eines Ihrer Ohren fühlt sich an, als wäre es mit Watte verstopft. Gehen Sie nicht immer von Ohrenschmalz aus, denn ein Hörsturz fühlt sich manchmal genau so an.' },
    { type: 'h2', text: 'Was ist ein Hörsturz?' },
    { type: 'p', text: 'Ein Hörsturz ist eine deutliche Verschlechterung des Hörvermögens, meist auf einem Ohr, die sich innerhalb von Stunden oder wenigen Tagen entwickelt. Manche Patienten bemerken ihn beim Aufwachen, andere, wenn Stimmen am Telefon auf diesem Ohr gedämpft klingen.' },
    { type: 'h2', text: 'Es beginnt nicht immer mit „Ich höre plötzlich nichts mehr“' },
    { type: 'p', text: 'Patienten kommen nicht immer mit den Worten, ihr Gehör sei plötzlich weg. Oft beschreiben sie vielmehr ein Gefühl der Verstopfung. Folgende Symptome können auftreten:' },
    {
      type: 'ul',
      items: [
        'Ein Völle- oder Druckgefühl im Ohr',
        'Ein verstopftes Ohr, Geräusche scheinen „von weit weg“ zu kommen',
        'Manchmal Klingeln oder Rauschen im Ohr (Tinnitus)',
        'Sogar Schwindel und Gleichgewichtsstörungen',
      ],
    },
    { type: 'p', text: 'Diese Symptome können mit Ohrenschmalz, einem verstopften Ohr nach einem Flug oder einer Verstopfung durch eine Erkältung verwechselt werden. Genau hier beginnt das Problem: Man wartet ab, weil man denkt, es geht schon vorbei.' },
    { type: 'h2', text: 'Der erste Schritt: die Ursache finden' },
    { type: 'p', text: 'Wir unterteilen Hörverluste grob in zwei Gruppen, und die Behandlung richtet sich ganz danach, um welche es sich handelt:' },
    {
      type: 'steps',
      items: [
        { title: 'Schallleitungsschwerhörigkeit', text: 'Etwas verhindert, dass der Schall über das äußere Ohr und das Mittelohr zum Innenohr gelangt. Beispiele sind ein Ohrenschmalzpfropf, Flüssigkeit im Mittelohr oder ein Loch im Trommelfell. Die meisten Ursachen lassen sich bei der Untersuchung erkennen.' },
        { title: 'Schallempfindungsschwerhörigkeit', text: 'Das Problem liegt im Innenohr oder im Hörnerv. Von außen kann das Ohr völlig normal aussehen. Diese Gruppe beschäftigt uns beim Hörsturz am meisten, und hier zählt die Zeit.' },
      ],
    },
    { type: 'h2', text: 'Was sind die Ursachen?' },
    { type: 'p', text: 'Bei einem großen Teil der plötzlichen Schallempfindungsschwerhörigkeiten wird keine eindeutige Ursache gefunden. Virusinfektionen und Durchblutungsstörungen des Innenohrs gehören zu den vermuteten Ursachen. Selten kann sich auch ein gutartiger Tumor am Hörnerv auf ähnliche Weise zeigen. Deshalb veranlassen wir bei Bedarf eine weiterführende Abklärung mit einer MRT.' },
    { type: 'h2', text: 'Warum die Zeit wichtig ist' },
    { type: 'p', text: 'Aktuelle Leitlinien betonen ausdrücklich, dass ein Hörtest so früh wie möglich durchgeführt und eine Behandlung, falls sie in Betracht kommt, früh begonnen werden sollte. Besonders wichtig sind die ersten 72 Stunden.' },
    { type: 'h2', text: 'Was geschieht bei der Untersuchung?' },
    {
      type: 'ul',
      items: [
        'Ohruntersuchung: um Ohrenschmalz, Flüssigkeit im Mittelohr oder ein Problem am Trommelfell festzustellen oder auszuschließen.',
        'Stimmgabeltests: geben einen ersten Hinweis darauf, ob es sich um eine Schallleitungs- oder eine Schallempfindungsschwerhörigkeit handelt.',
        'Audiometrie (Hörtest): zeigt Art und Ausmaß des Hörverlusts.',
        'Tympanometrie: beurteilt das Mittelohr und das Trommelfell.',
        'Bildgebung bei Bedarf: Zur Beurteilung des Hörnervs und der Innenohrregion kann eine MRT angeordnet werden.',
      ],
    },
    { type: 'h2', text: 'Behandlung' },
    { type: 'p', text: 'Ist die Ursache eine Schallleitungsstörung, etwa ein Ohrenschmalzpfropf, verbessert sich das Gehör meist sofort nach dessen Entfernung. Beim plötzlichen Schallempfindungshörverlust ist eine der in den Leitlinien genannten Möglichkeiten die Behandlung mit Kortikosteroiden, die als Tabletten eingenommen oder hinter das Trommelfell injiziert werden. Welche Behandlung geeignet ist, wird anhand des allgemeinen Gesundheitszustands des Patienten und der Testergebnisse entschieden.' },
    { type: 'h2', text: 'Was Sie nicht tun sollten' },
    {
      type: 'ul',
      items: [
        'Mit einem Wattestäbchen im Ohr herumstochern, weil Sie Ohrenschmalz vermuten',
        'Ohne Untersuchung Tropfen ins Ohr geben',
        'Ein paar Tage abwarten, ob es von selbst wieder aufgeht',
      ],
    },
    { type: 'callout', text: 'Wenn Sie auf einem Ohr eine deutliche Hörverschlechterung bemerken, die sich innerhalb von Stunden oder wenigen Tagen entwickelt, ist es besser, sie ohne Verzögerung abklären zu lassen, statt zu denken: „Ich warte ab, das geht schon wieder auf.“' },
    { type: 'h2', text: 'Häufig gestellte Fragen' },
    { type: 'p', text: 'Geht ein Hörsturz von selbst weg? Bei manchen Patienten kann sich das Gehör von selbst erholen. Wir können aber nicht vorhersagen, bei wem das der Fall sein wird. Deshalb ist eine frühe Abklärung besser als Abwarten.' },
    { type: 'p', text: 'Ist es wichtig, wenn ich nur ein Ohrgeräusch habe? Ein neu aufgetretenes, einseitiges Ohrgeräusch sollte immer abgeklärt werden, besonders wenn es mit dem Gefühl einhergeht, schlechter zu hören.' },
    { type: 'p', text: 'Zu welchem Arzt sollte ich gehen? Ein Hals-Nasen-Ohren-Facharzt ist die richtige Wahl. Wenn Sie keinen erreichen, gehen Sie in die Notaufnahme und erklären Sie, dass Ihr Hörverlust neu aufgetreten ist.' },
    { type: 'p', text: 'Kann es auf beiden Ohren auftreten? Ja, aber das ist seltener. Auch dann sollte die Abklärung nicht hinausgezögert werden.' },
  ],
};

export default t;
