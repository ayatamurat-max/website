import type { Post } from '../types';

// Kaynak: Scriptler/ceza rinoplastiyi nasıl doğurdu youtube.pages
const post: Post = {
  slug: 'history-of-rhinoplasty',
  date: '2026-10-08',
  cover: '/blog/history-of-rhinoplasty.svg',
  shareImage: '/blog/history-of-rhinoplasty.jpg',
  procedure: { href: '/rinoplasti', icon: 'rhinoplasty' },
  translations: {
    tr: {
      title: 'Bir ceza, modern rinoplastiyi nasıl doğurdu? Burun estetiğinin 3000 yıllık hikâyesi',
      description:
        'Antik Mısır’dan Sushruta’ya, kolunu burnuna diken Tagliacozzi’nin hastalarından modern rinoplastiye: burun cerrahisinin şaşırtıcı tarihi ve bugün hâlâ geçerli prensipleri.',
      readMinutes: 9,
      body: [
        {
          type: 'p',
          text: 'Size biraz farklı bir burun estetiği hikâyesi anlatacağım. Bu hikâye ameliyathanelerde başlamıyor. İnsanların daha güzel görünmek istemesiyle de başlamıyor. Tam tersine, bir insanı çirkinleştirmek için başlıyor. Çünkü yaklaşık üç bin yıl önce, dünyanın bazı bölgelerinde bir insanı cezalandırmanın en ağır yollarından biri burnunu kesmekti.',
        },
        {
          type: 'p',
          text: 'Düşünün: Cezanız hiç bitmiyor. İnsanlarla konuşurken, sokağa çıktığınızda, aynaya her baktığınızda ceza devam ediyor. Ve belki de tarihin ilk plastik cerrahi ameliyatlarından biri, tam olarak bu insanların yüzünü yeniden yapmaya çalışırken ortaya çıkıyor.',
        },
        { type: 'h2', text: 'Antik Mısır: önce güzellik değil, onarım' },
        {
          type: 'p',
          text: 'Burun cerrahisiyle ilgili en eski yazılı izleri Antik Mısır’da görüyoruz. Edwin Smith Papirüsü adlı tıbbi metinde, MÖ 3000–2500’lere uzanan bilgiler içinde yüz yaralanmaları, burun kırıkları ve bunların nasıl ele alınacağı anlatılıyor. Elbette burada bugünkü anlamıyla estetikten söz etmiyoruz; problem çok daha temel: Burun kırılmış, yer değiştirmiş. Nasıl eski hâline yaklaştırabiliriz?',
        },
        {
          type: 'p',
          text: 'Aslında cerrahide bugün hâlâ yaptığımız ilk şey de bu: Neresi bozulmuş? Neyi düzeltebilirim? Neyi korumalıyım? Aletler değişiyor, ama düşünme biçiminin bazı kısımları pek değişmiyor.',
        },
        { type: 'h2', text: 'Neden özellikle burun?' },
        {
          type: 'p',
          text: 'Vücuttaki birçok yarayı kıyafetle kapatabilirsiniz; ama yüzünüzün ortasında burnunuz yoksa onu gizlemek çok zor. Bu yüzden burun amputasyonu tarih boyunca yalnızca fiziksel bir ceza değil, bir damgalama yöntemi olarak da kullanılmış. Özellikle Antik Hindistan’da bunun, burun onarımına duyulan ihtiyacı ciddi biçimde artırdığı düşünülüyor.',
        },
        { type: 'h2', text: 'Sushruta ve bir yaprak' },
        {
          type: 'p',
          text: 'Burada cerrahi tarihinin en meşhur isimlerinden biri çıkıyor karşımıza: yaklaşık 2500–3000 yıl önce Hindistan’da yaşadığı düşünülen Sushruta. Adıyla anılan Sushruta Samhita, tıp tarihinin en eski cerrahi metinlerinden biri ve içinde çok ilginç bir burun onarımı tarifi var.',
        },
        {
          type: 'p',
          text: 'Bugün eksik bölgeyi ölçmek için fotoğraf çeker, bilgisayarda çalışırız. O dönemde ne kullanıyorlar? Bir yaprak. Yaprağı eksik bölgenin üzerine koyup şeklini belirliyorlar, sonra bu ölçüye göre yanaktan bir deri parçası hazırlıyorlar. En önemli ayrıntı şu: Deriyi tamamen kesip almıyorlar, bir tarafını bağlı bırakıyorlar. Çünkü o bağlantı dokunun kan dolaşımını sürdürüyor.',
        },
        {
          type: 'callout',
          text: 'Bugün cerrahide “flep” dediğimiz şeyin temel mantığı bu: Dokuyu bir yerden başka bir yere taşıyorsunuz, ama kanlanmasını sağlayan bağlantıyı koruyorsunuz. Mikroorganizmaları, antibiyotiği, modern anesteziyi bilmeden, sadece gözlemle bulunmuş bir prensip.',
        },
        {
          type: 'p',
          text: 'Küçük ama önemli bir düzeltme: İnternette sıkça “Sushruta alın derisiyle burun yaptı” diye okursunuz. Bu biraz fazla basitleştirilmiş bir anlatım. Klasik tarifteki erken yöntem daha çok yanak flebi; bugün “Hint yöntemi” ile özdeşleşen alın flebi sonraki dönemlerde gelişiyor. Ve bu prensip o kadar iyi ki, büyük burun kayıplarında alın flebi bugün hâlâ çok değerli bir yöntem.',
        },
        { type: 'h2', text: 'İtalya: kolunuzu burnunuza dikelim' },
        {
          type: 'p',
          text: '1400’lü yıllarda İtalya’da burun onarımıyla uğraşan cerrah aileleri ortaya çıkıyor; en bilineni Branca ailesi. Yüzden deri alınınca deriyi alınan bölgede de iz ve bozukluk kalabildiği fark ediliyor. Antonio Branca’nın çözümü: deriyi koldan almak.',
        },
        {
          type: 'p',
          text: 'Koldan hazırlanan deri bir kısmı kola bağlı kalacak şekilde buruna dikiliyor. Yani hasta bir süre kolu başının yanında sabitlenmiş hâlde yaşıyor. Yeni doku burundan yeterince beslenmeye başlayınca koldaki bağlantı kesiliyor ve burun şekillendiriliyor. Görüntüsü bir işkence düzeneğini andırsa da cerrahi prensip son derece mantıklı ve bugün hâlâ geçerli.',
        },
        {
          type: 'p',
          text: 'O dönemin bir başka ilginç tarafı: İyi bir burun yapabilen cerrah ailesi için teknik aynı zamanda ticari bir sırdı. Bilgi babadan oğula aktarılıyor, yaygınlaşması çok yavaş oluyordu. 1460’ta benzer bir yöntemi yazan Heinrich von Pfalzpaint’in el yazması kaybolup yüzyıllar sonra yeniden bulunmuş. Cerrahide yazmanın ve paylaşmanın neden önemli olduğuna güzel bir örnek.',
        },
        { type: 'h2', text: 'Tagliacozzi: yöntemi bir kitaba dönüştürmek' },
        {
          type: 'p',
          text: 'Bologna’da çalışan Gaspare Tagliacozzi kol flebini bulan kişi değil; ama yöntemi sistematik hâle getiriyor, aşamalarını çiziyor, sonuçlarını kaydediyor ve 1597’de “De Curtorum Chirurgia per Insitionem” adlı kitabını yayımlıyor. Bu eser, plastik cerrahiye adanmış ilk kapsamlı kitaplardan biri kabul ediliyor.',
        },
        {
          type: 'p',
          text: 'Bugün hastalar bana “Hocam, atel bir hafta mı kalacak?” diye soruyor. Tagliacozzi’nin çizimlerinden birkaçını muayenehaneye assam, bir haftalık atel süresine yönelik şikâyetlerin ciddi şekilde azalacağını düşünüyorum.',
        },
        { type: 'h2', text: 'Hindistan’dan Londra’ya: 1794’ün “sosyal medyası”' },
        {
          type: 'p',
          text: 'Tagliacozzi’den sonra Avrupa’da burun onarımı yaklaşık iki yüzyıl geri plana düşüyor. Sonra hikâye başladığı yere, Hindistan’a dönüyor. 1790’larda İngiliz ordusu için çalışan Cowasjee adlı bir arabacı esir düşüyor, burnu kesiliyor. Yerel bir cerrah ona alından aldığı, kaşların arasından bağlantısı korunan bir flep ile yeni bir burun yapıyor.',
        },
        {
          type: 'p',
          text: 'Bu ameliyat 1794’te Londra’daki Gentleman’s Magazine’de yayımlanıyor ve doğru kişi tarafından okunuyor: Joseph Constantine Carpue. Carpue yöntemi titizlikle inceliyor ve 1814’te İngiltere’de alın flebiyle başarılı bir burun onarımı yapıyor. İlk ameliyatlarından biri yaklaşık 15 dakika sürüyor; kulağa kısa geliyor, ta ki modern anestezinin henüz olmadığını hatırlayana kadar.',
        },
        { type: 'h2', text: 'Soru değişiyor: burnu olan birinin burnunu değiştirebilir miyiz?' },
        {
          type: 'p',
          text: 'Yaklaşık 2500 yıl boyunca burun cerrahisinin sorusu şuydu: “Olmayan burnu nasıl yaparız?” 19. yüzyılın sonlarında soru değişiyor ve gerçek anlamda modern rinoplastiye giriyoruz. 1887’de Amerikalı KBB hekimi John Orlando Roe, burun içinden, dışarıda kesi olmadan yaptığı estetik bir burun ameliyatını yayımlıyor. Bu yüzden birçok kaynakta “estetik rinoplastinin babası” olarak anılıyor.',
        },
        {
          type: 'p',
          text: 'Berlin’de çalışan Jacques Joseph’in hikâyesi ise burunla değil, kulakla başlıyor: kepçe kulakları yüzünden okulda alay edilen bir çocuğa yaptığı estetik ameliyatla. Joseph çok önemli bir şeyi erken fark ediyor: Fiziksel olarak sağlıklı olmak, insanın görünüşüyle ilgili hiçbir sorun yaşamadığı anlamına gelmiyor. 1898’de rinoplasti tekniklerini yayımlıyor, özel aletler tasarlıyor. Bugün ameliyathanede piezo cihazlarının yanında hâlâ “Joseph elevatörü” kullanıyoruz.',
        },
        { type: 'h2', text: 'Savaş ve modern yüz cerrahisi' },
        {
          type: 'p',
          text: 'Birinci Dünya Savaşı’nda siperlerde gövdesi korunan askerlerin yüzleri açıkta kalıyor ve daha önce görülmemiş sayıda ağır yüz yaralanması ortaya çıkıyor. Bu hastaları tedavi eden cerrahların en önemlilerinden biri, erken eğitimi kulak burun boğaz alanında olan Harold Gillies. Bu yoğun deneyim flep ve greft tekniklerini, kıkırdak ve kemik kullanımını hızla geliştiriyor. Modern rinoplasti biraz da bu iki dünyanın, onarım ve estetiğin, birleşmesi.',
        },
        { type: 'h2', text: '“Fazlaysa çıkar”dan “neyi koruyacağım?”a' },
        {
          type: 'p',
          text: '20. yüzyılın büyük bölümünde rinoplasti ağırlıklı olarak bir küçültme ameliyatıydı: Kemer varsa al, uç büyükse kıkırdak çıkar. Ama zamanla fark edildi ki burundaki her yapı fazlalık değil. Bazıları burnu taşıyor, bazıları hava yolunu açık tutuyor. Gereğinden fazla çıkarılan bir kıkırdak, ilk yıl güzel görünen burnun birkaç yıl sonra desteğini kaybetmesine yol açabiliyor; gereğinden fazla daraltılan bir bölge nefesi bozabiliyor.',
        },
        {
          type: 'p',
          text: 'Bugün sıkça duyduğunuz preservation (koruyucu) rinoplasti fikri de, ilginç bir şekilde, tamamen yeni değil; benzer yaklaşımlar 19. yüzyıl sonu ve 20. yüzyıl başında da tarif edilmiş, sonra unutulup yeniden keşfedilmiş. Yine de her burun için tek ve üstün bir yöntem yok; doğru teknik, o burnun anatomisine göre seçiliyor.',
        },
        { type: 'h2', text: 'Üç bin yılda gerçekten ne değişti?' },
        {
          type: 'p',
          text: 'Sushruta’nın elinde bir yaprak vardı. Bugün biz bir iki milimetrenin yüz ifadesini nasıl değiştireceğini konuşuyoruz. Teknoloji açısından inanılmaz bir fark var; ama cerrahın kafasındaki bazı sorular hâlâ çok benzer: Bu dokunun kanlanmasını nasıl koruyacağım? Neyi çıkarabilirim, neye dokunmamalıyım? Bu burun iyi nefes alacak mı? Ve en sonunda: Bu burun gerçekten bu insanın yüzüne aitmiş gibi görünecek mi?',
        },
        {
          type: 'p',
          text: 'Burun estetiğinin tarihi aslında bir güzellik tarihi değil. Bir insanın yüzünden alınan bir parçayı ona geri verme çabasıyla başlıyor ve üç bin yıl sonra “Bu insan için en doğru burun hangisi?” sorusuna kadar geliyor. Muhtemelen yüz yıl sonra cerrahlar da bizim bugünkü tekniklerimize bakıp “Gerçekten bunu mu yapıyorlarmış?” diyecekler; tıpkı bizim Tagliacozzi’nin hastalarına baktığımız gibi.',
        },
      ],
    },
    en: {
      title: 'How a punishment gave birth to modern rhinoplasty: a 3,000-year story',
      description:
        'From ancient Egypt and Sushruta to Tagliacozzi’s patients with their arms stitched to their noses, the surprising history of nose surgery, and the principles that still guide it today.',
      readMinutes: 8,
      body: [
        {
          type: 'p',
          text: 'This is a slightly different story about nose surgery. It does not begin in an operating room, and it does not begin with people wanting to look more beautiful. It begins with the opposite: an attempt to disfigure. Around three thousand years ago, in some parts of the world, cutting off someone’s nose was one of the harshest punishments.',
        },
        {
          type: 'p',
          text: 'Imagine a sentence that never ends: every conversation, every walk in the street, every look in the mirror. Some of the earliest plastic surgery in history appears precisely in the effort to rebuild these people’s faces.',
        },
        { type: 'h2', text: 'Ancient Egypt: repair before beauty' },
        {
          type: 'p',
          text: 'The earliest written traces of nasal surgery come from ancient Egypt. The Edwin Smith Papyrus, with knowledge reaching back to around 3000–2500 BC, describes facial injuries, broken noses and how to manage them. This is not aesthetics; the problem is basic. The nose is broken and displaced. How can we bring it closer to its original state? It is still the first question a surgeon asks today: what is damaged, what can I correct, what must I protect?',
        },
        { type: 'h2', text: 'Sushruta and a leaf' },
        {
          type: 'p',
          text: 'In ancient India, where nose amputation was used as a visible, stigmatising punishment, the need for reconstruction grew. Here we meet one of the most famous names in surgical history: Sushruta, thought to have lived around 2,500–3,000 years ago. The Sushruta Samhita contains a remarkable description of nasal reconstruction.',
        },
        {
          type: 'p',
          text: 'Today we measure a defect with photographs and software. Then, they used a leaf. The leaf was placed over the missing area to define its shape, and a piece of skin was prepared from the cheek. Crucially, the skin was not cut free: one side stayed attached to keep its blood supply.',
        },
        {
          type: 'callout',
          text: 'This is the basic logic of what surgeons now call a “flap”: moving tissue from one place to another while preserving the connection that keeps it alive, discovered through observation alone, without antibiotics or modern anaesthesia.',
        },
        {
          type: 'p',
          text: 'A small correction to a common story: Sushruta is often said to have used forehead skin. The classic early description is closer to a cheek flap; the forehead flap now known as the “Indian method” developed later. The principle was so good that the forehead flap is still a valuable technique for large nasal defects today.',
        },
        { type: 'h2', text: 'Italy: stitching the arm to the nose' },
        {
          type: 'p',
          text: 'In 15th-century Italy, surgical families such as the Brancas worked on nasal reconstruction. Taking skin from the face left scars at the donor site, so Antonio Branca is said to have taken it from the arm instead. The skin stayed attached to the arm and was stitched to the nose, so the patient lived for a while with the arm fixed beside the head, until the new tissue took and the connection was cut. It looks like a torture device, but the surgical principle is sound and still used today.',
        },
        {
          type: 'p',
          text: 'In 1597, Gaspare Tagliacozzi of Bologna systematised the method in “De Curtorum Chirurgia per Insitionem”, one of the first comprehensive books devoted to plastic surgery. Patients sometimes ask me whether the splint really needs to stay for a week. If I hung a few of Tagliacozzi’s drawings in my clinic, I suspect the complaints would stop.',
        },
        { type: 'h2', text: 'From India to London' },
        {
          type: 'p',
          text: 'In the 1790s, a man named Cowasjee, whose nose had been cut off as a prisoner of war, was treated in India with a forehead flap kept attached between the eyebrows. The operation was published in London’s Gentleman’s Magazine in 1794 and read by Joseph Constantine Carpue, who performed a successful forehead-flap reconstruction in England in 1814 — reportedly in about 15 minutes, which sounds quick until you remember there was no modern anaesthesia.',
        },
        { type: 'h2', text: 'A new question: can we change a nose that exists?' },
        {
          type: 'p',
          text: 'For about 2,500 years the question had been “how do we build a missing nose?” At the end of the 19th century it changed. In 1887, American ENT surgeon John Orlando Roe published an aesthetic nose operation performed from inside the nose, without external incisions, and is often called the father of aesthetic rhinoplasty. In Berlin, Jacques Joseph recognised that being physically healthy does not mean being free of distress about one’s appearance, published his rhinoplasty techniques in 1898 and designed instruments still used today, alongside modern piezo devices.',
        },
        { type: 'h2', text: 'War, reconstruction and modern rhinoplasty' },
        {
          type: 'p',
          text: 'The First World War produced severe facial injuries on an unprecedented scale. Harold Gillies, whose early training was in ENT, was among the surgeons who advanced flaps, grafts and the use of cartilage and bone. Modern rhinoplasty is, in part, the meeting of these two worlds: reconstruction and aesthetics.',
        },
        { type: 'h2', text: 'From “remove the excess” to “what should I preserve?”' },
        {
          type: 'p',
          text: 'For much of the 20th century, rhinoplasty was mainly a reduction operation. Over time it became clear that not every structure is excess: some support the nose, some keep the airway open. Removing too much cartilage can make a nose that looks good in the first year lose support years later; narrowing too much can harm breathing. Preservation rhinoplasty, popular today, revives ideas first described over a century ago — yet there is still no single best technique for every nose; the method is chosen for each anatomy.',
        },
        { type: 'h2', text: 'What has really changed in 3,000 years?' },
        {
          type: 'p',
          text: 'Sushruta had a leaf; today we discuss how one or two millimetres change a face. The technology is incomparable, but some questions in the surgeon’s mind are the same: how do I preserve blood supply, what can I remove and what must I leave, will this nose breathe well — and will it truly look like it belongs to this person’s face?',
        },
        {
          type: 'p',
          text: 'The history of rhinoplasty is not really a history of beauty. It begins with the effort to give back what was taken from someone’s face, and arrives, three thousand years later, at the question: what is the right nose for this person?',
        },
      ],
    },
  },
};

export default post;
