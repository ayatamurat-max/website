import type { PostTranslation } from '../../types';

const t: PostTranslation = {
  title: 'Abhängigkeit von Nasenspray: „Herr Doktor, ich komme nicht davon los“',
  description:
    'Abschwellende Nasensprays, die die Nase schnell frei machen, können sie bei zu langer Anwendung noch stärker verstopfen. Was ist Rhinitis medicamentosa, welche Sprays sind nicht das Problem, und welche Frage sollte man eigentlich stellen?',
  readMinutes: 6,
  body: [
    {
      type: 'p',
      text: 'Vor Kurzem setzte sich ein Patient in meiner Praxis hin und holte, noch bevor ich mit der Untersuchung begonnen hatte, ein Nasenspray aus der Tasche und legte es auf den Tisch. „Herr Doktor, ich komme davon nicht los.“ Als ich ihn fragte, wie lange er es schon benutze, überlegte er kurz: „Etwa drei Jahre.“',
    },
    {
      type: 'p',
      text: 'Angefangen hatte alles ganz einfach. Seine Nase war verstopft, er kaufte in der Apotheke ein Spray, sprühte einmal und spürte innerhalb weniger Minuten Erleichterung. In der Nacht sprühte er erneut, dann am nächsten Tag … Nach einer Weile wurde er unruhig, sobald er das Spray zu Hause vergessen hatte. Also kaufte er ein weiteres: eines zu Hause, eines im Auto, eines bei der Arbeit.',
    },
    {
      type: 'p',
      text: 'Hier stellt sich eine interessante Frage: Konnte er ohne das Spray wirklich nicht atmen, oder war das Spray selbst inzwischen einer der Gründe, warum er nicht atmen konnte?',
    },
    { type: 'h2', text: 'Was das Spray in Ihrer Nase bewirkt' },
    {
      type: 'p',
      text: 'Im Inneren der Nase befinden sich Strukturen, die man Nasenmuscheln (Turbinaten) nennt. Sie sind keineswegs überflüssig: Sie erwärmen und befeuchten die Atemluft, helfen beim Filtern und enthalten ein reiches Netz von Blutgefäßen.',
    },
    {
      type: 'p',
      text: 'Wenn Sie ein schnell wirkendes abschwellendes Spray verwenden, etwa mit Oxymetazolin oder Xylometazolin, ziehen sich diese Gefäße zusammen, die Nasenmuscheln schwellen ab, der Atemweg wird weiter, und innerhalb von Minuten können Sie wieder atmen. Ihr Gehirn lernt das Muster schnell: verstopfte Nase, Spray, Erleichterung.',
    },
    { type: 'h2', text: 'Wo das Problem beginnt' },
    {
      type: 'p',
      text: 'Werden diese Medikamente länger als vorgesehen angewendet, kann die Nase wieder zuschwellen, sobald die Wirkung nachlässt. Man spricht von einer Rebound-Schwellung. Sie sprühen erneut, die Nase wird frei, dann ist sie wieder verstopft. Bald reicht zweimal am Tag nicht mehr aus; dreimal, viermal, fünfmal …',
    },
    {
      type: 'callout',
      text: 'Irgendwann wird die Frage verwirrend: Verwenden Sie das Spray, weil Ihre Nase verstopft ist, oder ist Ihre Nase verstopft, weil Sie das Spray verwenden? Genau dieser Teufelskreis ist die Rhinitis medicamentosa.',
    },
    { type: 'h2', text: 'Nicht jedes Nasenspray führt dazu' },
    {
      type: 'ul',
      items: [
        'Kochsalz- und Meerwassersprays gehören nicht zu dieser Gruppe.',
        'Kortisonhaltige Nasensprays zur Behandlung von Allergien gehören nicht zu dieser Gruppe.',
        'Das Problem ist die lange, unkontrollierte Anwendung abschwellender Sprays, die die Nase innerhalb von Minuten frei machen.',
      ],
    },
    {
      type: 'p',
      text: 'Manchmal sehen wir das umgekehrte Problem: Ein Patient, dem gegen seine Allergie ein Kortisonspray verordnet wurde, wendet es nie an, weil er gehört hat, dass „Nasensprays abhängig machen“. Er meidet das Medikament, das er braucht, weil er es mit einer ganz anderen Wirkstoffgruppe verwechselt.',
    },
    { type: 'h2', text: 'Die eigentliche Frage: Warum ist Ihre Nase verstopft?' },
    {
      type: 'p',
      text: 'Einem Patienten einfach zu sagen, er solle das Spray absetzen, erfasst nur die halbe Geschichte. Was ich wirklich wissen möchte, ist, warum er das Spray überhaupt gebraucht hat. Dahinter kann eine Nasenscheidewandverkrümmung (Septumdeviation) stecken, vergrößerte Nasenmuscheln, eine allergische Rhinitis, eine chronische Sinusitis, Nasenpolypen oder mehreres davon gleichzeitig.',
    },
    { type: 'h2', text: 'Wie die Behandlung geplant wird' },
    {
      type: 'steps',
      items: [
        { title: 'Den Kreislauf durchbrechen', text: 'Die Anwendung des abschwellenden Sprays wird kontrolliert beendet; wo es sinnvoll ist, können Kortisonsprays und Nasenspülungen mit Kochsalzlösung helfen.' },
        { title: 'Die Ursache finden', text: 'Das zugrunde liegende Problem – Septum, Nasenmuscheln, Allergie, Polypen – wird untersucht.' },
        { title: 'Operation, falls nötig', text: 'Nicht jeder Patient braucht eine Operation, aber ein bedeutsames strukturelles Problem wird ebenfalls beurteilt.' },
      ],
    },
    {
      type: 'p',
      text: 'Wenn Sie sich nur einen Satz aus diesem Artikel merken, dann diesen: Vielleicht haben Sie mit dem Spray angefangen, weil Ihre Nase verstopft war, doch nach einer Weile kann Ihre Nase auch wegen des Sprays verstopft sein. Wenn Ihr Spray zum festen Inventar in Ihrer Tasche, im Auto oder auf dem Nachttisch geworden ist, lautet die erste Frage nicht „Wie komme ich davon los?“, sondern „Warum ist meine Nase ständig verstopft?“',
    },
  ],
};

export default t;
