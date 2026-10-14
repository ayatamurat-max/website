import type { Post } from '../types';

// Kaynak: Scriptler/2.hafta/Ceza_rinoplasti_senaryo_v2.pages (aynı metin: 2.hafta/rinoplasti youtube yeni.pages)
// İlk sürüm: Scriptler/2.hafta/ceza rinoplastiyi nasıl doğurdu youtube.pages
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
        'Sushruta’nın yaprağından kolu burnuna dikilmiş hastalara, Roe ve Joseph’ten bugünkü koruyucu yaklaşıma: burun cerrahisinin tarihini üç soru üzerinden anlatıyorum.',
      readMinutes: 10,
      body: [
        {
          type: 'p',
          text: 'Size biraz farklı bir burun estetiği hikâyesi anlatacağım. Bu hikâye ameliyathanelerde başlamıyor, Instagram’da hiç başlamıyor; hatta insanların daha güzel görünmek istemesiyle de başlamıyor. Tam tersine, bir insanı çirkinleştirme amacıyla başlıyor. Çünkü yaklaşık üç bin yıl önce, dünyanın bazı bölgelerinde bir insanı cezalandırmanın en ağır yollarından biri burnunu kesmekti.',
        },
        {
          type: 'p',
          text: 'Düşünün: Bu ceza bitmiyor. Ömür boyu yüzünüzün tam ortasında taşıyorsunuz. İnsanlarla konuşurken, sokağa çıktığınızda, aynaya her baktığınızda ceza devam ediyor. Ve tarihin ilk plastik cerrahi ameliyatlarından biri, bu insanların yüzünü düzeltmeye çalışırken ortaya çıkıyor. O zaman ne anestezi var, ne antibiyotik, ne de steril bir ameliyathane. Ama ortada bir problem var ve birileri bu probleme çözüm arıyor.',
        },
        {
          type: 'p',
          text: 'Hindistan’dan İtalya’ya, kolu burnuna dikilmiş hastalardan bugünkü rinoplastiye uzanan garip bir yolculuk bu. Ve başlangıcında estetik yok; bir ceza var.',
        },
        { type: 'h2', text: 'Burun cerrahisinin tarihi, üç sorunun tarihi' },
        {
          type: 'p',
          text: 'Bu hikâyeyi üç soru üzerinden anlatmak istiyorum, çünkü burun cerrahisinin tarihi aslında üç sorunun tarihi:',
        },
        {
          type: 'steps',
          items: [
            { title: 'Olmayan burnu nasıl yaparız?', text: 'Yaklaşık iki bin beş yüz yıl süren soru.' },
            { title: 'Olan burnu değiştirebilir miyiz?', text: 'Yüz küsur yıl önce sorulmaya başlanıyor.' },
            { title: 'Neyi değiştireceğiz, neyi koruyacağız?', text: 'Cevabını bugün hâlâ aradığımız soru.' },
          ],
        },
        { type: 'h2', text: '1. soru: Olmayan burnu nasıl yaparız?' },
        {
          type: 'p',
          text: 'Önce neden burun, onu söyleyeyim. Cezanın amacı sadece can yakmak değil, herkesin görmesi. Vücudumuzdaki birçok yarayı kapatabiliriz, ama yüzün ortasındaki bir eksikliği saklamanın yolu yok. Yani burun kesmek ceza olduğu kadar bir damgalama yöntemi. Böyle olunca bir ihtiyaç doğuyor: Birileri burun kesiyor, birileri de “bunu nasıl düzelteceğiz?” diye uğraşıyor.',
        },
        { type: 'h2', text: 'Sushruta ve bir yaprak' },
        {
          type: 'p',
          text: 'Burada karşımıza Sushruta çıkıyor. Tam olarak ne zaman yaşadığı tartışmalı, kaynaklara göre birkaç yüzyıl oynuyor; ama günümüzden aşağı yukarı iki bin beş yüz yıl önce Hindistan’da çalışan bir cerrah. Adıyla anılan kitapta burun onarımının tarifi var.',
        },
        {
          type: 'p',
          text: 'Hastanın burnunun bir kısmı yok. Önce eksik bölgenin büyüklüğünü ölçmek lazım. Biz bugün fotoğraf çekiyoruz, cetvelle ölçüyoruz; onlar bir yaprak kullanıyor. Yaprağı eksik bölgenin üzerine koyup kalıbını çıkarıyorlar, sonra o kalıba göre yanaktan bir deri parçası hazırlıyorlar. Ama deriyi tamamen kesip almıyorlar, bir ucunu yerinde bırakıyorlar. Bu çok önemli bir ayrıntı, çünkü derinin kanlanması o bağlantıdan devam ediyor. Sonra deriyi çevirip burundaki eksik yere getiriyorlar.',
        },
        {
          type: 'callout',
          text: 'Bizim bugün “flep” dediğimiz şey bu: Bir dokuyu, kanlanmasını sağlayan bağlantıyı koparmadan komşu bir bölgeye taşımak. O dönemde kan dolaşımı da mikrop da bilinmiyor; ama gözlem yapmışlar: Tamamen koparırsam bu doku yaşamıyor, bir bağlantı bırakırsam yaşıyor. Cerrahi biraz böyle bir şeydir; bir şeyin neden işe yaradığını bilmeden çok önce işe yaradığını görürsün.',
        },
        {
          type: 'p',
          text: 'Bir de şunu düzelteyim, çünkü ben de eskiden böyle anlatıyordum: Çoğu yerde Sushruta’nın alından deri çevirdiği yazar. Aslında ilk tarif yanaktan; alından çevirme sonraki yüzyıllarda gelişiyor. O yöntemi de biz bugün hâlâ kullanıyoruz. Burun kanseri nedeniyle burnun büyük kısmını almak zorunda kaldığımız hastalarda yaptığımız onarım neredeyse aynısı.',
        },
        { type: 'h2', text: 'İtalya: koldan buruna' },
        {
          type: 'p',
          text: 'Yaklaşık iki bin yıl ileri gidelim: 1400’lü yıllar, İtalya. Burada burun kesme cezası yok, ama savaş var, düello var; burnunu kaybeden insan yine çok. Bu işle uğraşan cerrah aileleri ortaya çıkıyor, en bilineni Branca ailesi.',
        },
        {
          type: 'p',
          text: 'Bu aileler bir sorunu fark ediyor: Yüzden deri alıp burun yapıyorsun, ama bu sefer deriyi aldığın yerde iz kalıyor. Yani bir yeri düzeltirken başka bir yeri bozuyorsun. Çözüm olarak deriyi koldan almaya karar veriyorlar. Mantık yine aynı, deri koparılmayacak. Koldan hazırlanan deri, bir ucu kolda kalacak şekilde buruna dikiliyor. Böyle olunca hasta kolunu indiremiyor; kol başın yanına sabitleniyor ve hasta haftalarca öyle bekliyor. Deri burundan beslenmeye başlayınca ikinci bir ameliyatla koldaki bağlantı kesiliyor.',
        },
        {
          type: 'p',
          text: 'Görüntü pek iç açıcı değil, kabul ediyorum. Ama prensip gayet mantıklı ve bugün de geçerli: Dokuyu getir, kanlanmasını koru, yeni yerine tutunmasını bekle, sonra bağlantıyı ayır. Biz sadece hastayı haftalarca kolu havada bekletmemeye çalışıyoruz; o konuda bir ilerleme kaydettik diyebiliriz.',
        },
        { type: 'h2', text: 'Sırdan kitaba: Tagliacozzi' },
        {
          type: 'p',
          text: 'Bu dönemin ilginç bir tarafı daha var: Bu aileler yöntemi sır olarak saklıyor, çünkü bu onların ekmek kapısı. Bilgi babadan oğula geçiyor. Bugün bir yöntem bulduğumuzda yayınlıyoruz, kongrede anlatıyoruz, başka biri eksiğini görüp düzeltiyor; yöntem öyle gelişiyor. O zaman kongre yok, dergi yok, “beş dakikada kol flebi” videosu hiç yok. İyi bir fikir ortaya çıkıyor, ama yayılması yüz yıldan uzun sürüyor.',
        },
        {
          type: 'p',
          text: 'Bunu değiştiren kişi Bologna’da bir anatomi hocası: Gaspare Tagliacozzi. Yöntemi o bulmuyor; ama ameliyatı basamak basamak yazıyor, çizimlerini yaptırıyor ve 1597’de kitap olarak yayımlıyor. Yani yaptığı şey, bugün bizim makale yazmak dediğimiz şey. Plastik cerrahinin ilk kitaplarından biri bu. Sonra ne oluyor? Hiçbir şey. Yaklaşık iki yüz yıl bu konu Avrupa’da unutuluyor.',
        },
        { type: 'h2', text: 'Hindistan’dan Londra’ya: tek bir dergi yazısı' },
        {
          type: 'p',
          text: 'Hikâye tekrar Hindistan’a dönüyor ve bu sefer hastanın adını biliyoruz: Cowasjee. İngiliz ordusunda öküz arabası sürücüsü. 1790’larda savaşta esir düşüyor; burnunu ve bir elini kesip serbest bırakıyorlar. Bir yıl kadar burunsuz yaşıyor, sonra yerel bir cerrah alnından çevirdiği deriyle ona yeni bir burun yapıyor.',
        },
        {
          type: 'p',
          text: 'Bu ameliyatı gören İngilizler çok etkileniyor ve 1794’te Londra’da bir dergide çizimiyle birlikte yayımlıyorlar. O dergiyi okuyanlardan biri Joseph Carpue adında bir cerrah. İlk gördüğü hastada hemen denemiyor; yöntemi inceliyor, hazırlanıyor ve 1814’te İngiltere’de alın flebiyle ilk burnu yapıyor. Ameliyat on beş dakika kadar sürmüş. Kulağa kısa geliyor, ama anestezi henüz yok; hasta için o on beş dakika pek kısa geçmemiştir.',
        },
        {
          type: 'p',
          text: 'Yani Hindistan’da yüzyıllardır yapılan bir ameliyatın Avrupa’ya ulaşması tek bir dergi yazısıyla oluyor. Branca ailesinin sakladığı şeyle Tagliacozzi’nin yazdığı şey arasındaki fark tam olarak bu.',
        },
        { type: 'h2', text: '2. soru: Olan burnu değiştirebilir miyiz?' },
        {
          type: 'p',
          text: 'Buraya kadar anlattığım bütün ameliyatlar kaybedilmiş bir burnu yerine koymak için; estetik diye bir şey yok. 19. yüzyılın sonunda soru değişiyor: Burnu yerinde olan, nefes alan, ama burnunun görüntüsünden memnun olmayan birinin burnunu değiştirebilir miyiz?',
        },
        {
          type: 'p',
          text: 'Bu bizim için bambaşka bir problem. Çünkü onarımda hedef belli: Eksik olanı yerine koyuyorsun. Burada ise önce şuna karar vermek lazım: Güzel burun nedir? Hemen arkasından daha zoru geliyor: Kime göre güzel? Bu soruya bugün de kesin bir cevabımız yok.',
        },
        {
          type: 'p',
          text: 'Bilinen ilk estetik burun ameliyatını 1887’de Amerika’da bir kulak burun boğaz doktoru, John Orlando Roe yayımlıyor. Ameliyatı burnun içinden yapıyor, yani dışarıda hiç iz bırakmadan. Birkaç yıl sonra burun kemerini de içeriden küçültmeyi tarif ediyor. Bugün kapalı teknik dediğimiz şeyin başlangıcı bu.',
        },
        { type: 'h2', text: 'Jacques Joseph: kulakla başlayan bir burun hikâyesi' },
        {
          type: 'p',
          text: 'Ama bu işi asıl sisteme oturtan kişi Berlin’de: Jacques Joseph. Aslında bir ortopedi asistanı ve hikâyesi burunla değil, kulakla başlıyor. Kepçe kulakları yüzünden okulda alay edilen bir çocuk var. Joseph bir yöntem bulup kulakları geriye yatırıyor. Sonuç çok iyi; bunu bir toplantıda sunuyor ve büyük ilgi görüyor.',
        },
        {
          type: 'p',
          text: 'Hocası ise bundan hiç hoşlanmıyor ve Joseph’i klinikten kovuyor. Hasta olmayan bir çocuğu sırf görüntüsü için ameliyat etmek o dönemde kabul gören bir şey değil. Joseph de kendi muayenehanesini açıyor ve iki yıl sonra, 1898’de ilk burun küçültme ameliyatını yayımlıyor. Bir hocanın asistanına farkında olmadan yaptığı en büyük iyiliklerden biri olabilir.',
        },
        {
          type: 'p',
          text: 'Joseph sonraki otuz yıl boyunca ameliyatı basamaklara ayırıyor, kendi aletlerini tasarlıyor. O aletlerin bir kısmını biz hâlâ kullanıyoruz. Ameliyathanede bir tarafta piezo dediğimiz, kemiği titreşimle kesen cihaz duruyor; öbür tarafta yüz yıl önce yaşamış bir adamın adını taşıyan el aleti. Cerrahide bir şey işe yarıyorsa eski diye atılmaz. Joseph’in asıl fark ettiği şey de şu: Bir insanın sağlıklı olması, görüntüsüyle ilgili bir derdi olmadığı anlamına gelmiyor.',
        },
        { type: 'h2', text: 'Savaş: hikâye birinci soruya dönüyor' },
        {
          type: 'p',
          text: 'Bu arada araya savaş giriyor ve hikâye bir süreliğine birinci soruya geri dönüyor. Birinci Dünya Savaşı’nda askerlerin gövdesi siperde korunuyor, ama başı açıkta. O güne kadar görülmemiş sayıda yüz yaralanması oluyor; burnunu, çenesini kaybetmiş ama hayatta kalmış çok sayıda insan var.',
        },
        {
          type: 'p',
          text: 'Bu hastalarla uğraşan cerrahların başında Harold Gillies geliyor; ilk eğitimi de kulak burun boğaz. O kadar çok hasta görülünce flepler, kıkırdak ve kemik nakilleri çok hızlı gelişiyor. Yani onarım cerrahisiyle estetik cerrahi bu dönemde aynı ellerde buluşuyor. Bugünkü rinoplasti bu ikisinin birleşimi.',
        },
        { type: 'h2', text: '3. soru: Neyi değiştireceğiz, neyi koruyacağız?' },
        {
          type: 'p',
          text: '20. yüzyılın büyük kısmında burun estetiğinin mantığı basit: Fazlaysa çıkar. Burun büyükse küçült, kemer varsa al, uç genişse kıkırdak çıkar. Doğru hastada bunların bir kısmını hâlâ yapıyoruz. Ama yıllar geçtikçe bir şey görülüyor: Burundaki her yapı fazlalık değil. Bazısı burnu taşıyor, bazısı hava yolunu açık tutuyor.',
        },
        {
          type: 'ul',
          items: [
            'Kıkırdağı gereğinden fazla çıkarırsanız, ilk yıl çok güzel duran burun birkaç yıl sonra desteğini kaybedebiliyor.',
            'Burnu gereğinden fazla daraltırsanız görüntü düzeliyor, ama hasta nefes alamıyor. Nefes alamayan bir burna da güzel demek zor.',
          ],
        },
        {
          type: 'p',
          text: 'O yüzden soru değişti. Artık “bu burundan ne çıkaracağım?” diye değil, “neyi değiştireceğim, neyi koruyacağım, neyi destekleyeceğim?” diye bakıyoruz.',
        },
        {
          type: 'p',
          text: 'Son yıllarda çok konuşulan koruyucu rinoplasti de bunun devamı: burun sırtının doğal yapısını bozmadan şekil vermeye çalışmak. İşin ilginç tarafı, bu fikir de yeni değil. Benzer yöntemler yüz yıl önce tarif edilmiş, sonra unutulmuş, şimdi daha iyi anatomi bilgisiyle geri dönüyor. Bu, her burna uyan tek yöntem olduğu anlamına gelmiyor; hangi hastada daha iyi olduğu hâlâ tartışılıyor.',
        },
        { type: 'h2', text: 'Bir yapraktan bugüne: sorular pek değişmedi' },
        {
          type: 'p',
          text: 'En başa dönelim. Sushruta’nın karşısında burnu kesilmiş bir insan var, elinde de bir yaprak. Bugün bizim elimizde üç boyutlu görüntüleme var, piezo var, güvenli anestezi var ve ameliyatta bir iki milimetreyi konuşuyoruz. Ama sorduğumuz sorular çok değişmedi:',
        },
        {
          type: 'ul',
          items: [
            'Bu dokunun kanlanmasını nasıl koruyacağım?',
            'Neye dokunmamam lazım?',
            'Bu burun nefes alacak mı?',
            'Ve bu burun, bu insanın yüzüne ait gibi duracak mı?',
          ],
        },
        {
          type: 'p',
          text: 'Yani burun estetiğinin tarihi aslında bir güzellik tarihi değil. Büyük kısmında mesele, bir insana yüzünü geri vermek; estetik işin içine son yüz yılda giriyor. Muhtemelen yüz yıl sonraki cerrahlar da bizim bugünkü ameliyat fotoğraflarımıza bakıp “Gerçekten böyle mi yapıyorlarmış?” diyecek; tıpkı bizim Tagliacozzi’nin çizimlerine baktığımız gibi.',
        },
      ],
    },
    en: {
      title: 'How a punishment gave birth to modern rhinoplasty: a 3,000-year story',
      description:
        'From Sushruta’s leaf to patients with their arms stitched to their noses, from Roe and Joseph to today’s preservation approach: the history of nose surgery told through three questions.',
      readMinutes: 10,
      body: [
        {
          type: 'p',
          text: 'This is a slightly different story about nose surgery. It does not begin in an operating room, it certainly does not begin on Instagram, and it does not even begin with people wanting to look better. It begins with the opposite: an attempt to disfigure. Around three thousand years ago, in some parts of the world, cutting off someone’s nose was one of the harshest punishments.',
        },
        {
          type: 'p',
          text: 'Imagine a sentence that never ends. You carry it for life, in the middle of your face: in every conversation, every walk down the street, every look in the mirror. And one of the first plastic surgery operations in history appears in the effort to repair these people’s faces. There is no anaesthesia, no antibiotics, no sterile operating room. But there is a problem, and someone is looking for a solution.',
        },
        {
          type: 'p',
          text: 'It is a strange journey, from India to Italy, from patients with their arms stitched to their noses to modern rhinoplasty. And at its beginning there is no aesthetics, only a punishment.',
        },
        { type: 'h2', text: 'The history of three questions' },
        {
          type: 'p',
          text: 'I want to tell this story through three questions, because the history of nose surgery is really the history of three questions:',
        },
        {
          type: 'steps',
          items: [
            { title: 'How do we build a nose that is missing?', text: 'A question that lasted about two and a half thousand years.' },
            { title: 'Can we change a nose that exists?', text: 'First asked a little over a hundred years ago.' },
            { title: 'What do we change, and what do we preserve?', text: 'The question we are still answering today.' },
          ],
        },
        { type: 'h2', text: 'Question 1: How do we build a missing nose?' },
        {
          type: 'p',
          text: 'First, why the nose? The aim of the punishment was not only pain, but visibility. We can cover many wounds on the body, but there is no way to hide something missing from the centre of the face. Cutting off a nose was as much a way of branding someone as of punishing them. And so a need arose: some people were cutting noses off, and others were trying to work out how to repair them.',
        },
        { type: 'h2', text: 'Sushruta and a leaf' },
        {
          type: 'p',
          text: 'This is where we meet Sushruta. Exactly when he lived is debated, and the sources vary by a few centuries, but he was a surgeon working in India roughly two and a half thousand years ago. The book that bears his name contains a description of nasal reconstruction.',
        },
        {
          type: 'p',
          text: 'Part of the patient’s nose is missing. First you need to measure the defect. Today we take photographs and measure with a ruler; they used a leaf. They placed the leaf over the missing area to make a template, then prepared a piece of skin from the cheek to match it. But they did not cut the skin free: they left one end attached. This is a crucial detail, because the skin’s blood supply continued through that connection. Then they turned the skin and brought it to the defect on the nose.',
        },
        {
          type: 'callout',
          text: 'This is what we now call a “flap”: moving tissue to a neighbouring area without cutting the connection that keeps it supplied with blood. Nobody knew about blood circulation or germs at the time, but they had observed it: cut the tissue free and it dies; leave a connection and it lives. Surgery is often like that; you see that something works long before you know why.',
        },
        {
          type: 'p',
          text: 'Let me correct one thing, because I used to tell it this way too: you will often read that Sushruta turned down skin from the forehead. In fact the first description uses the cheek; the forehead technique developed in later centuries. We still use that method today: the reconstruction we perform for patients who lose most of their nose to skin cancer is almost the same.',
        },
        { type: 'h2', text: 'Italy: from the arm to the nose' },
        {
          type: 'p',
          text: 'Let us move about two thousand years forward, to 15th-century Italy. There is no nose-cutting punishment here, but there are wars and duels, and plenty of people still lose their noses. Families of surgeons take up this work, the best known being the Branca family.',
        },
        {
          type: 'p',
          text: 'They noticed a problem: if you take skin from the face to build a nose, you leave a scar where you took it. You fix one place and damage another. Their solution was to take the skin from the arm. The logic was the same: the skin must not be cut free. So the skin prepared on the arm was stitched to the nose with one end still attached to the arm. The patient could not lower the arm; it was fixed beside the head, and the patient waited like that for weeks. Once the skin began to draw its blood supply from the nose, a second operation cut the connection to the arm.',
        },
        {
          type: 'p',
          text: 'I admit the picture is not pleasant. But the principle is entirely logical and still valid today: bring the tissue, protect its blood supply, wait for it to take, then divide the connection. We simply try not to keep patients with their arm in the air for weeks. On that front, I think we can say we have made some progress.',
        },
        { type: 'h2', text: 'From secret to book: Tagliacozzi' },
        {
          type: 'p',
          text: 'There is another interesting side to this period. These families kept the method secret, because it was their livelihood, and the knowledge passed from father to son. Today, when we develop a technique, we publish it and present it at congresses; someone else sees what is missing and improves it, and that is how methods evolve. Back then there were no congresses, no journals, and certainly no “arm flap in five minutes” videos. A good idea appeared, but it took more than a century to spread.',
        },
        {
          type: 'p',
          text: 'The person who changed this was an anatomy professor in Bologna, Gaspare Tagliacozzi. He did not invent the method, but he wrote the operation down step by step, had it illustrated, and published it as a book in 1597. In other words, he did what we would now call writing a paper. It is one of the first books of plastic surgery. And then? Nothing. For about two hundred years the subject was forgotten in Europe.',
        },
        { type: 'h2', text: 'From India to London: a single magazine article' },
        {
          type: 'p',
          text: 'The story returns to India, and this time we know the patient’s name: Cowasjee, a bullock-cart driver with the British army. In the 1790s he was taken prisoner; his captors cut off his nose and one hand and released him. He lived without a nose for about a year, until a local surgeon built him a new one with skin turned down from his forehead.',
        },
        {
          type: 'p',
          text: 'The British who saw the operation were deeply impressed, and in 1794 it was published, with an illustration, in a London magazine. One of its readers was a surgeon named Joseph Carpue. He did not try it on the first patient he saw; he studied the method, prepared, and in 1814 performed his first forehead-flap nose in England. The operation reportedly took about fifteen minutes. That sounds short, but there was no anaesthesia yet; those fifteen minutes cannot have felt short to the patient.',
        },
        {
          type: 'p',
          text: 'So an operation performed in India for centuries reached Europe through a single magazine article. That is exactly the difference between what the Branca family kept secret and what Tagliacozzi wrote down.',
        },
        { type: 'h2', text: 'Question 2: Can we change a nose that exists?' },
        {
          type: 'p',
          text: 'Every operation I have described so far was about replacing a nose that had been lost; aesthetics did not come into it. At the end of the 19th century the question changed: can we change the nose of someone whose nose is intact and breathes, but who is unhappy with how it looks?',
        },
        {
          type: 'p',
          text: 'For us this is a completely different problem. In reconstruction the goal is clear: you replace what is missing. Here you first have to decide what a beautiful nose is, and right after that comes the harder question: beautiful according to whom? We still have no definitive answer.',
        },
        {
          type: 'p',
          text: 'The first known aesthetic nose operation was published in 1887 in the United States by an ear, nose and throat doctor, John Orlando Roe. He operated from inside the nose, leaving no external scar. A few years later he also described reducing a nasal hump from the inside. This is the beginning of what we now call the closed technique.',
        },
        { type: 'h2', text: 'Jacques Joseph: a nose story that starts with ears' },
        {
          type: 'p',
          text: 'But the person who truly systematised this work was in Berlin: Jacques Joseph. He was actually an orthopaedic assistant, and his story starts not with a nose but with ears. A boy was being teased at school because of his prominent ears. Joseph devised a method and set the ears back. The result was very good; he presented it at a meeting and it attracted great interest.',
        },
        {
          type: 'p',
          text: 'His professor, however, did not like this at all and dismissed Joseph from the clinic. Operating on a child who was not ill, purely for appearance, was not accepted at the time. So Joseph opened his own practice, and two years later, in 1898, published his first nose reduction operation. It may be one of the greatest favours a professor ever unknowingly did for an assistant.',
        },
        {
          type: 'p',
          text: 'Over the next thirty years Joseph broke the operation down into steps and designed his own instruments, some of which we still use. In the operating room, on one side there is a piezo device that cuts bone by vibration; on the other, a hand instrument bearing the name of a man who lived a hundred years ago. In surgery, if something works, it is not thrown away for being old. And Joseph’s real insight was this: being healthy does not mean having no concerns about one’s appearance.',
        },
        { type: 'h2', text: 'War: the story returns to the first question' },
        {
          type: 'p',
          text: 'Then war intervened, and for a while the story went back to the first question. In the First World War soldiers’ bodies were protected in the trenches, but their heads were exposed. Facial injuries occurred on an unprecedented scale; many people survived having lost a nose or a jaw.',
        },
        {
          type: 'p',
          text: 'Foremost among the surgeons treating them was Harold Gillies, whose first training was also in ear, nose and throat surgery. With so many patients, flaps and cartilage and bone grafts developed very quickly. In this period reconstructive and aesthetic surgery came together in the same hands. Today’s rhinoplasty is the combination of the two.',
        },
        { type: 'h2', text: 'Question 3: What do we change, and what do we preserve?' },
        {
          type: 'p',
          text: 'For most of the 20th century the logic of nose surgery was simple: if there is too much, remove it. If the nose is big, make it smaller; if there is a hump, take it off; if the tip is wide, remove cartilage. In the right patient we still do some of this. But over the years something became clear: not every structure in the nose is excess. Some support the nose; some keep the airway open.',
        },
        {
          type: 'ul',
          items: [
            'Remove more cartilage than necessary, and a nose that looks great in the first year can lose its support a few years later.',
            'Narrow the nose more than necessary, and the appearance improves but the patient cannot breathe. It is hard to call a nose that cannot breathe beautiful.',
          ],
        },
        {
          type: 'p',
          text: 'That is why the question has changed. We no longer ask “what shall I remove from this nose?” but “what shall I change, what shall I preserve, and what shall I support?”',
        },
        {
          type: 'p',
          text: 'Preservation rhinoplasty, much discussed in recent years, is a continuation of this: shaping the nose without disrupting the natural structure of the nasal bridge. Interestingly, this idea is not new either. Similar methods were described a hundred years ago, then forgotten, and are now returning with better anatomical knowledge. That does not mean it is the one method for every nose; which patients it suits best is still debated.',
        },
        { type: 'h2', text: 'From a leaf to today: the questions have barely changed' },
        {
          type: 'p',
          text: 'Let us go back to the beginning. In front of Sushruta is a person whose nose has been cut off, and in his hand, a leaf. Today we have 3D imaging, piezo instruments and safe anaesthesia, and in surgery we talk about one or two millimetres. But the questions we ask have not changed much:',
        },
        {
          type: 'ul',
          items: [
            'How do I protect this tissue’s blood supply?',
            'What must I not touch?',
            'Will this nose breathe?',
            'And will this nose look like it belongs to this person’s face?',
          ],
        },
        {
          type: 'p',
          text: 'So the history of rhinoplasty is not really a history of beauty. For most of it, the point was to give someone their face back; aesthetics entered only in the last hundred years. Surgeons a hundred years from now will probably look at our operation photos and say, “Did they really do it like that?”, just as we look at Tagliacozzi’s drawings.',
        },
      ],
    },
  },
};

export default post;
