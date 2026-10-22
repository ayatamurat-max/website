import type { Post } from '../types';
import ru from '../i18n/filler-not-always-answer/ru';
import de from '../i18n/filler-not-always-answer/de';
import fr from '../i18n/filler-not-always-answer/fr';
import bg from '../i18n/filler-not-always-answer/bg';

// Kaynak: Scriptler/22 EKim Perşembe/22 ekim medikal est.pages (4 senaryo: daha fazla dolgu, çene hattı dolgusu mu masseter botoksu mu, dudak dolgusu, bazen cevap dolgusuzluk)
const post: Post = {
  slug: 'more-filler-is-not-always-the-answer',
  date: '2026-10-22',
  cover: '/blog/filler-not-always-answer.webp',
  shareImage: '/blog/filler-not-always-answer.jpg',
  procedure: { href: '/dermal-dolgu', icon: 'filler' },
  translations: {
    ru,
    de,
    fr,
    bg,
    tr: {
      title: 'Daha fazla dolgu her zaman çözüm değil: Tedavi soruna göre seçilir',
      description:
        'Yorgun görünen bir yüz, geniş bir alt yüz ya da ince dudaklar her zaman daha fazla dolgu gerektirmez. Dolgu, masseter botoksu ve cilt kalitesi tedavileri arasındaki farkı ve doğru seçimin nasıl yapıldığını anlatıyorum.',
      readMinutes: 5,
      body: [
        { type: 'p', text: 'Yüzünüz yorgun görünüyorsa, daha fazla dolgu her zaman çözüm değildir. Çünkü yüzün yaşlanması yalnızca hacim kaybından ibaret değil. Cilt değişir, dokular değişir, yüzün desteklenme biçimi değişir.' },
        { type: 'p', text: 'Her sorunu yalnızca hacim ekleyerek çözmeye çalışırsak, bir noktadan sonra yüz daha dolgun görünmeye başlayabilir, ama mutlaka daha iyi görünmez. Bu yazıda dolgunun ne zaman doğru seçim olduğunu, ne zaman başka bir yöntemin ya da hiçbir işlemin daha doğru olabileceğini anlatmak istiyorum.' },
        { type: 'h2', text: 'Yüz neden yaşlanır? Hacim hikâyenin yalnızca bir parçası' },
        { type: 'p', text: 'Yaşla birlikte yüzde birkaç değişiklik aynı anda olur ve her biri farklı bir görünüme yol açar:' },
        {
          type: 'ul',
          items: [
            'Cilt: Kolajen ve elastik lifler azalır, cilt incelir, esnekliği ve parlaklığı azalır; ince çizgiler ve doku bozuklukları belirginleşir.',
            'Yağ dokusu: Yüzdeki yağ bölmelerinin bir kısmı hacim kaybeder, bir kısmı aşağı doğru yer değiştirir. Bu da bazı bölgelerde çökme, bazı bölgelerde ağırlaşma hissi verir.',
            'Destek yapıları: Yumuşak dokuları yerinde tutan bağ dokusu gevşer; kemik yapıda da yıllar içinde değişiklik olur.',
            'Kas hareketleri: Tekrarlayan mimikler belirli bölgelerde kırışıklıkları derinleştirir.',
          ],
        },
        { type: 'p', text: 'Bu tabloda dolgu, yalnızca hacim kaybının olduğu yerde işe yarar. Cilt kalitesi, gevşeklik veya kas kaynaklı kırışıklık söz konusuysa, dolgu bu sorunları tek başına düzeltmez. Bazen dolgu tam olarak ihtiyacınız olan şeydir; bazen cilt kalitesine daha çok ilgi gerekir; bazen de sorun dolgunun düzeltemeyeceği bir şeydir. Tedavi sorunu takip etmeli, tersi değil.' },
        { type: 'h2', text: 'Çene hattı dolgusu mu, masseter botoksu mu?' },
        { type: 'p', text: 'Geniş görünen bir alt yüz her zaman dolgu gerektirmez; her zaman botoks da gerektirmez. Ne yapılacağı, çenenin neden öyle göründüğüne bağlıdır.' },
        {
          type: 'steps',
          items: [
            { title: 'Masseter kası büyükse', text: 'Çiğneme kası olan masseter, diş sıkma ve gıcırdatma gibi alışkanlıklarla ya da yapısal olarak belirgin olabilir. Bu durumda botoks kasın aktivitesini azaltır ve zamanla kas kütlesini de azaltabilir. Etki kademeli olarak ortaya çıkar ve kalıcı değildir.' },
            { title: 'Çene hattında tanım veya öne çıkıklık eksikse', text: 'Sorun çene hattının belirsizliği ya da çene ucunun geride durmasıysa, dolgu daha uygun bir seçenek olabilir.' },
            { title: 'Sorun cilt gevşekliğiyse', text: 'Gevşeyen doku çene hattını bulanıklaştırıyorsa, ne dolgu ne de botoks beklediğiniz sonucu verebilir. Bu durumda başka yaklaşımları konuşmak gerekir.' },
          ],
        },
        { type: 'p', text: 'Önemli bir not: Botoks çene kemiğinizi değiştirmez. Kemik yapısından kaynaklanan bir genişlik, kas gevşetilerek daraltılamaz. Aynı şikâyet, farklı anatomi, farklı tedavi. Bu yüzden işlemi seçmeden önce nedene bakıyorum.' },
        { type: 'h2', text: 'Dudak dolgusu doğal dudağınızı silmemeli' },
        { type: 'p', text: 'İyi bir dudak dolgusu, zaten sahip olduğunuz dudağı silmemeli. Çünkü dudak dolgusu yalnızca hacimle ilgili değil. Değerlendirmede şunlara bakılır:' },
        {
          type: 'ul',
          items: [
            'Dudak sınırı: Dudağın kırmızı kısmı ile cilt arasındaki çizginin netliği.',
            'Kupid yayı: Üst dudağın ortasındaki karakteristik kavis.',
            'Öne çıkıklık: Dudağın yandan bakıldığında ne kadar öne çıktığı.',
            'Üst ve alt dudak ilişkisi: İki dudağın birbirine oranı ve dengesi.',
          ],
        },
        { type: 'p', text: 'Aynı miktarda dolgu alan iki hasta tamamen farklı görünebilir, çünkü daha başlamadan anatomileri farklıydı. Bu yüzden amaç her dudağı aynı göstermek olmamalı. Bazen daha fazla hacim gerekir, bazen daha belirgin bir sınır. Bazen de çok az miktar yeterlidir. Doğal dudak dolgusu, zaten size ait olanı güzelleştirmeli.' },
        { type: 'h2', text: 'Bazen doğru cevap: Hiç dolgu yapmamak' },
        { type: 'p', text: 'Bazen en doğru dolgu tedavisi, hiç dolgu yapmamaktır. Çünkü her estetik kaygı hacim eksikliğinden kaynaklanmaz:' },
        {
          type: 'ul',
          items: [
            'Sorun cilt kalitesiyse, hacim eklemek bunu çözmeyebilir.',
            'Dokular gevşemişse, giderek artan miktarda dolgu yüzü yalnızca daha ağır gösterebilir.',
            'Kişinin oranları zaten iyiyse, eklenecek bir şey olmayabilir.',
          ],
        },
        { type: 'p', text: 'Bu, dolgunun kötü olduğu anlamına gelmiyor. Dolgunun bir görevi var ve doğru nedenle kullanıldığında en iyi şekilde çalışıyor.' },
        { type: 'callout', text: 'Benim için soru “Nereye dolgu yapabiliriz?” değil. Soru şu: “Bu yüzün gerçekten buna ihtiyacı var mı?”' },
        { type: 'h2', text: 'Muayenede neye bakıyorum?' },
        { type: 'p', text: 'Dolgu ya da botoks kararı vermeden önce yüzü bir bütün olarak değerlendiriyorum: yüzün oranları, cilt kalınlığı ve kalitesi, dokuların ne kadar desteklendiği, mimik hareketleri ve kas yapısı, iki tarafın simetrisi. Hastanın sizi rahatsız eden noktayı nasıl tarif ettiği de en az muayene kadar önemli. “Yorgun görünüyorum” cümlesinin arkasında göz altı çökmesi de, cilt kalitesi de, kaş pozisyonu da olabilir.' },
        { type: 'h2', text: 'Sık yapılan yanlışlar' },
        {
          type: 'ul',
          items: [
            'Her seansta biraz daha eklemek: Zamanla oranlar bozulabilir ve yüz ağırlaşabilir.',
            'Başkasının fotoğrafındaki sonucu hedeflemek: Başlangıç anatomisi farklı olan iki kişide aynı işlem aynı sonucu vermez.',
            'Tek bir bölgeye odaklanmak: Bir bölgeyi düzeltirken yüzün geri kalanıyla dengenin bozulması.',
            'İşlemi sorundan önce seçmek: “Dudak dolgusu istiyorum” yerine “Dudaklarımda şunu beğenmiyorum” diye başlamak daha doğru bir plan sağlar.',
          ],
        },
        { type: 'h2', text: 'Sık sorulan sorular' },
        { type: 'p', text: 'Masseter botoksu yüzümü kalıcı olarak inceltir mi? Hayır. Botoks kasın aktivitesini geçici olarak azaltır; etki zamanla kaybolur. Ayrıca kemik yapısını değiştirmez.' },
        { type: 'p', text: 'Yorgun görünüyorum, dolgu yeterli olur mu? Bu, yorgunluğun nedenine bağlı. Hacim kaybı varsa dolgu işe yarayabilir; sorun cilt kalitesi veya gevşeklikse dolgu tek başına yeterli olmayabilir.' },
        { type: 'p', text: 'Doğal bir dudak dolgusu için ne kadar dolgu gerekir? Bunun tek bir cevabı yok. Bazen çok az miktar yeterlidir; önemli olan dudağın sınırını, kavsini ve iki dudak arasındaki dengeyi korumaktır.' },
        { type: 'p', text: 'Muayene sonunda hiçbir işlem önerilmezse? Bu da bir sonuçtur. Oranlarınız iyiyse veya sorun dolgunun çözebileceği bir şey değilse, hiçbir şey yapmamak en doğru karar olabilir.' },
      ],
    },
    en: {
      title: 'More filler is not always the answer: treatment should follow the problem',
      description:
        'A tired-looking face, a wide lower face or thin lips don’t always need more filler. I explain the difference between filler, masseter Botox and skin-quality treatments, and how the right choice is made.',
      readMinutes: 5,
      body: [
        { type: 'p', text: 'If your face looks tired, adding more filler is not always the answer. Facial ageing is not just about losing volume. The skin changes, the tissues change, and the way the face is supported changes.' },
        { type: 'p', text: 'If we treat every problem simply by adding volume, at some point the face may start looking fuller – but not necessarily better. In this article I want to explain when filler is the right choice, and when another method, or no treatment at all, may be better.' },
        { type: 'h2', text: 'Why does the face age? Volume is only part of the story' },
        { type: 'p', text: 'With age, several changes happen in the face at the same time, and each one creates a different look:' },
        {
          type: 'ul',
          items: [
            'Skin: collagen and elastic fibres decrease, the skin becomes thinner and loses elasticity and glow; fine lines and texture problems become more visible.',
            'Fat: some of the facial fat compartments lose volume and some shift downwards. This gives a hollow look in some areas and a heavier look in others.',
            'Support structures: the connective tissue that holds the soft tissues in place loosens, and the bone structure also changes over the years.',
            'Muscle movement: repeated expressions deepen wrinkles in certain areas.',
          ],
        },
        { type: 'p', text: 'In this picture, filler only helps where there is volume loss. If the issue is skin quality, laxity or wrinkles caused by muscle movement, filler alone won’t correct it. Sometimes filler is exactly what you need; sometimes skin quality needs more attention; and sometimes the problem is something filler cannot correct. The treatment should follow the problem – not the other way around.' },
        { type: 'h2', text: 'Jawline filler or masseter Botox?' },
        { type: 'p', text: 'A wide lower face doesn’t always need filler – and it doesn’t always need Botox either. It depends on why the jaw looks the way it does.' },
        {
          type: 'steps',
          items: [
            { title: 'If the masseter muscle is large', text: 'The masseter, a chewing muscle, can be prominent because of habits such as clenching or grinding, or simply by build. In that case Botox reduces the muscle’s activity and can gradually reduce its bulk. The effect appears gradually and is not permanent.' },
            { title: 'If the jawline lacks definition or projection', text: 'If the problem is a poorly defined jawline or a chin that sits back, filler may be a better option.' },
            { title: 'If the problem is skin laxity', text: 'If loose tissue is blurring the jawline, neither filler nor Botox may give you the result you’re expecting. Other approaches need to be discussed.' },
          ],
        },
        { type: 'p', text: 'An important note: Botox does not change your jawbone. Width that comes from the bone cannot be narrowed by relaxing a muscle. Same complaint, different anatomy, different treatment. That’s why I look at the cause before choosing the procedure.' },
        { type: 'h2', text: 'Lip filler should not erase your natural lip' },
        { type: 'p', text: 'A good lip filler shouldn’t erase the lip you already have. Lip filler is not just about volume. The assessment looks at:' },
        {
          type: 'ul',
          items: [
            'The border: how defined the line is between the red part of the lip and the skin.',
            'The Cupid’s bow: the characteristic curve in the middle of the upper lip.',
            'Projection: how far the lip comes forward when seen from the side.',
            'The relationship between the upper and lower lip: their proportion and balance.',
          ],
        },
        { type: 'p', text: 'Two patients can receive the same amount of filler and look completely different, because their anatomy was different before we even started. So the goal shouldn’t be to make every lip look the same. Sometimes we need more volume, sometimes we need definition – and sometimes very little is enough. Natural lip filler should enhance what is already yours.' },
        { type: 'h2', text: 'Sometimes the right answer is no filler' },
        { type: 'p', text: 'Sometimes the right filler treatment is no filler at all, because not every aesthetic concern comes from a lack of volume:' },
        {
          type: 'ul',
          items: [
            'If the problem is skin quality, adding volume may not solve it.',
            'If the tissues have become lax, adding more and more filler may simply make the face heavier.',
            'If someone already has good proportions, there may be nothing we need to add.',
          ],
        },
        { type: 'p', text: 'That doesn’t mean filler is bad. It means filler has a job – and it works best when we use it for the right reason.' },
        { type: 'callout', text: 'For me, the question is not “Where can we put filler?” It’s “Does this face actually need it?”' },
        { type: 'h2', text: 'What do I look at during the examination?' },
        { type: 'p', text: 'Before deciding on filler or Botox, I assess the face as a whole: its proportions, skin thickness and quality, how well the tissues are supported, facial expressions and muscle structure, and symmetry between the two sides. How you describe what bothers you is just as important as the examination. Behind “I look tired” there may be hollowing under the eyes, skin quality or the position of the eyebrows.' },
        { type: 'h2', text: 'Common mistakes' },
        {
          type: 'ul',
          items: [
            'Adding a little more at every session: over time, proportions can be lost and the face can look heavy.',
            'Aiming for a result from someone else’s photo: the same treatment does not give the same result in two people with different starting anatomy.',
            'Focusing on one area: correcting one area while losing balance with the rest of the face.',
            'Choosing the procedure before the problem: starting with “This is what I don’t like about my lips” leads to a better plan than “I want lip filler”.',
          ],
        },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'p', text: 'Will masseter Botox slim my face permanently? No. Botox temporarily reduces the muscle’s activity, and the effect wears off over time. It also does not change the bone structure.' },
        { type: 'p', text: 'I look tired – will filler be enough? It depends on the cause. If there is volume loss, filler can help; if the problem is skin quality or laxity, filler alone may not be enough.' },
        { type: 'p', text: 'How much filler is needed for natural-looking lips? There is no single answer. Sometimes a very small amount is enough; what matters is preserving the border, the curve and the balance between the two lips.' },
        { type: 'p', text: 'What if no treatment is recommended after the consultation? That is a result too. If your proportions are good, or the problem isn’t one filler can solve, doing nothing may be the right decision.' },
      ],
    },
  },
};

export default post;
