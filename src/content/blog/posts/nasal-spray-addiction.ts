import type { Post } from '../types';

// Kaynak: Scriptler/çekimi bitenler/rinitis medikamentoza script.pages (+ insta)
const post: Post = {
  slug: 'nasal-spray-addiction',
  date: '2026-10-08',
  cover: '/blog/nasal-spray-addiction.svg',
  shareImage: '/blog/nasal-spray-addiction.jpg',
  procedure: { href: '/septoplasti', icon: 'septoplasty' },
  translations: {
    tr: {
      title: 'Burun spreyi bağımlılığı: “Hocam, bunu bırakamıyorum”',
      description:
        'Burnu hızla açan spreyler uzun süre kullanıldığında burnu yeniden tıkayabilir. Rinitis medikamentoza nedir, hangi spreyler bu gruba girmez ve asıl sorulması gereken soru ne?',
      readMinutes: 6,
      body: [
        {
          type: 'p',
          text: 'Geçenlerde muayenehaneye bir hastam geldi. Daha muayeneye başlamadan cebinden bir burun spreyi çıkarıp masaya koydu ve “Hocam, bunu bırakamıyorum” dedi. Ne kadar zamandır kullandığını sorduğumda biraz düşündü: “Herhalde üç yıldır.”',
        },
        {
          type: 'p',
          text: 'Her şey çok basit başlamıştı. Burnu tıkanmış, eczaneden bir sprey almış, bir kez sıkmış ve birkaç dakika sonra rahatlamış. Gece bir daha sıkmış, ertesi gün yine… Bir süre sonra sprey evde unutulduğunda huzursuz olmaya başlamış. Sonra bir tane daha almış: biri evde, biri arabada, biri işyerinde.',
        },
        {
          type: 'p',
          text: 'Burada sorulması gereken ilginç bir soru var: Gerçekten sprey olmadan mı nefes alamıyordu, yoksa nefes alamamasının nedenlerinden biri artık spreyin kendisi miydi?',
        },
        { type: 'h2', text: 'Sprey burnunuzda ne yapıyor?' },
        {
          type: 'p',
          text: 'Burnumuzun içinde konka dediğimiz, halk arasında “burun eti” olarak bilinen yapılar var. Bunlar gereksiz yapılar değil: aldığımız havayı ısıtıyor, nemlendiriyor, filtrelemeye yardımcı oluyor ve içlerinde oldukça zengin bir damar ağı bulunuyor.',
        },
        {
          type: 'p',
          text: 'Oksimetazolin veya ksilometazolin içeren hızlı etkili dekonjestan bir sprey sıktığınızda bu damarlar büzülür, konka küçülür, burun pasajı genişler ve birkaç dakika içinde rahat nefes alırsınız. Beyniniz de doğal olarak şunu öğrenir: Burnum tıkandı, spreyi sıktım, rahatladım.',
        },
        { type: 'h2', text: 'Sorun nerede başlıyor?' },
        {
          type: 'p',
          text: 'Bu ilaçlar gereğinden uzun süre kullanıldığında, etkileri geçince burun yeniden tıkanabilir. Buna geri tepme (rebound) tıkanıklığı diyoruz. Siz tekrar sıkarsınız, burun açılır, sonra yine tıkanır. Bir süre sonra sabah ve akşam yetmemeye başlar; günde üç, dört, beş kez…',
        },
        {
          type: 'callout',
          text: 'Bir noktada şu sorunun cevabı karışır: Spreyi burnunuz tıkandığı için mi kullanıyorsunuz, yoksa burnunuz spreyi kullandığınız için mi tıkanıyor? Rinitis medikamentoza tam olarak bu kısır döngüdür.',
        },
        { type: 'h2', text: 'Her burun spreyi bağımlılık yapmaz' },
        {
          type: 'p',
          text: 'Bu ayrım çok önemli. Doktorunun verdiği bir spreyi kullanan birinin şimdi “Eyvah, ben de sprey kullanıyorum” diye düşünmesine gerek yok.',
        },
        {
          type: 'ul',
          items: [
            'Deniz suyu ve tuzlu su spreyleri bu gruba girmez.',
            'Alerji tedavisinde kullanılan kortizonlu burun spreyleri bu gruba girmez.',
            'Sorun, burnu birkaç dakika içinde açan dekonjestan spreylerin uzun süre ve kontrolsüz kullanılmasıdır.',
          ],
        },
        {
          type: 'p',
          text: 'Bazen tam tersini de görüyoruz: Alerji için kortizonlu sprey verilen bir hasta, “burun spreyleri bağımlılık yapıyormuş” diye düşünüp ilacını hiç kullanmıyor. Yani kullanması gereken ilacı başka bir ilaç grubuyla karıştırıyor.',
        },
        { type: 'h2', text: 'Asıl soru: Burnunuz neden tıkanıyor?' },
        {
          type: 'p',
          text: 'Bence hikâyenin en önemli kısmı burası. Bir insan neden üç yıl boyunca burun açıcı sprey kullanır? Hastaya sadece “Bu spreyi bırak” demek hikâyenin yarısını kaçırmak olur. Asıl merak ettiğim şey, onun üç yıl önce bu spreye neden ihtiyaç duyduğudur.',
        },
        {
          type: 'ul',
          items: [
            'Septum eğriliği olabilir.',
            'Konkalar büyük olabilir.',
            'Alerjik rinit, kronik sinüzit veya polip olabilir.',
            'Ya da bunların birkaçı bir arada olabilir.',
          ],
        },
        { type: 'h2', text: 'Tedavi nasıl planlanır?' },
        {
          type: 'p',
          text: 'Spreyi bırakınca burun bir süre daha da tıkanabilir ve hasta “Gördün mü, ben bu ilaç olmadan gerçekten nefes alamıyorum” diye düşünür. Oysa yaşadığı şey, kırmaya çalıştığımız döngünün bir parçası olabilir. Bu yüzden tedaviyi hastaya göre planlıyoruz:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Döngüyü kırmak', text: 'Dekonjestan sprey kullanımını kontrollü şekilde sonlandırıyoruz; uygun hastalarda kortizonlu spreyler ve tuzlu suyla burun yıkama gibi tedavilerden yararlanıyoruz.' },
            { title: 'Nedeni bulmak', text: 'Septum eğriliği, konka büyüklüğü, alerji veya polip gibi altta yatan problemi araştırıyoruz.' },
            { title: 'Gerekirse cerrahi', text: 'Her hastanın ameliyat olması gerekmez; ancak ciddi bir yapısal problem varsa onu da değerlendiriyoruz.' },
          ],
        },
        {
          type: 'p',
          text: 'Bu yazıdan aklınızda tek bir cümle kalacaksa şu olsun: Burnunuz tıkandığı için sprey kullanmaya başlamış olabilirsiniz, ama bir süre sonra burnunuz kullandığınız sprey yüzünden de tıkanıyor olabilir. Eğer spreyiniz çantanızın, arabanızın veya komodininizin vazgeçilmez bir parçası hâline geldiyse, soru “Bu spreyi nasıl bırakırım?” değil, önce “Burnum neden sürekli tıkanıyor?” olmalı.',
        },
      ],
    },
    en: {
      title: 'Nasal spray addiction: “Doctor, I can’t stop using it”',
      description:
        'Decongestant sprays that open the nose quickly can make it more blocked when used for too long. What is rhinitis medicamentosa, which sprays are not the problem, and what is the real question to ask?',
      readMinutes: 6,
      body: [
        {
          type: 'p',
          text: 'Recently a patient sat down in my clinic and, before I had even started the examination, took a nasal spray out of his pocket and put it on the desk. “Doctor, I can’t stop using this.” When I asked how long he had been using it, he thought for a moment: “About three years.”',
        },
        {
          type: 'p',
          text: 'It had started very simply. His nose was blocked, he bought a spray at the pharmacy, used it once and felt relief within minutes. He used it again at night, then the next day… After a while he felt uneasy whenever he left it at home. So he bought another: one at home, one in the car, one at work.',
        },
        {
          type: 'p',
          text: 'Here is the interesting question: was he really unable to breathe without the spray, or had the spray itself become one of the reasons he could not breathe?',
        },
        { type: 'h2', text: 'What the spray does inside your nose' },
        {
          type: 'p',
          text: 'Inside the nose are structures called turbinates. They are not useless: they warm, humidify and help filter the air we breathe, and they contain a rich network of blood vessels.',
        },
        {
          type: 'p',
          text: 'When you use a fast-acting decongestant spray, such as one containing oxymetazoline or xylometazoline, these vessels constrict, the turbinates shrink, the airway widens and within minutes you can breathe. Your brain quickly learns the pattern: blocked nose, spray, relief.',
        },
        { type: 'h2', text: 'Where the problem begins' },
        {
          type: 'p',
          text: 'When these medicines are used for longer than intended, the nose can become blocked again as soon as the effect wears off. This is called rebound congestion. You spray again, the nose opens, then it blocks again. Soon twice a day is not enough; three, four, five times…',
        },
        {
          type: 'callout',
          text: 'At some point the question gets confusing: are you using the spray because your nose is blocked, or is your nose blocked because you are using the spray? Rhinitis medicamentosa is exactly this vicious circle.',
        },
        { type: 'h2', text: 'Not every nasal spray causes this' },
        {
          type: 'ul',
          items: [
            'Saline and sea-water sprays are not in this group.',
            'Steroid nasal sprays used to treat allergies are not in this group.',
            'The problem is the prolonged, uncontrolled use of decongestant sprays that open the nose within minutes.',
          ],
        },
        {
          type: 'p',
          text: 'Sometimes we see the opposite problem: a patient prescribed a steroid spray for allergies never uses it because they have heard that “nasal sprays are addictive”. They avoid the medicine they need because they confuse it with a different group of drugs.',
        },
        { type: 'h2', text: 'The real question: why is your nose blocked?' },
        {
          type: 'p',
          text: 'Simply telling a patient to stop the spray misses half of the story. What I really want to know is why they needed the spray in the first place. It may be a deviated septum, enlarged turbinates, allergic rhinitis, chronic sinusitis, nasal polyps, or several of these together.',
        },
        { type: 'h2', text: 'How treatment is planned' },
        {
          type: 'steps',
          items: [
            { title: 'Break the cycle', text: 'Decongestant use is stopped in a controlled way; where appropriate, steroid sprays and saline rinses can help.' },
            { title: 'Find the cause', text: 'The underlying problem — septum, turbinates, allergy, polyps — is investigated.' },
            { title: 'Surgery if needed', text: 'Not every patient needs an operation, but a significant structural problem is also evaluated.' },
          ],
        },
        {
          type: 'p',
          text: 'If you remember one sentence from this article, let it be this: you may have started using the spray because your nose was blocked, but after a while your nose may also be blocked because of the spray. If your spray has become a permanent fixture in your bag, car or bedside table, the first question is not “How do I stop it?” but “Why is my nose always blocked?”',
        },
      ],
    },
  },
};

export default post;
