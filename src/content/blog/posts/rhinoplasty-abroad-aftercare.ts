import type { Post } from '../types';

// Kaynak: Scriptler/22 EKim Perşembe/22 ekim ingilizce.pages (1. eve döndükten sonra, 6. ne kadar kalmalı, 7. tek başına gelmek, 8. Bulgaristan sınırına yakınlık)
const post: Post = {
  slug: 'rhinoplasty-abroad-stay-travel-follow-up',
  date: '2026-10-22',
  cover: '/blog/rhinoplasty-abroad-aftercare.webp',
  shareImage: '/blog/rhinoplasty-abroad-aftercare.jpg',
  procedure: { href: '/international-patients', icon: 'rhinoplasty' },
  translations: {
    tr: {
      title: 'Yurt dışından rinoplasti: Ne kadar kalmalı, yalnız gelinir mi, eve dönünce ne olur?',
      description:
        'Rinoplasti için Kırklareli’ye gelen yurt dışı hastalar için pratik bir rehber: kalış süresi, atellerin çıkarılması, yalnız seyahat, ülkenize döndükten sonraki takip ve sınıra yakın olmanın önemi.',
      readMinutes: 5,
      body: [
        { type: 'p', text: 'Rinoplasti için başka bir ülkeye gelmeyi düşünüyorsanız, çoğu zaman ilk planlanan şey ameliyat günü olur. Oysa sonucu ve sizin rahatınızı en çok etkileyen şeylerden biri, ameliyattan sonraki günler ve haftalar. Yurt dışından gelen hastalar için takip, ameliyatın bir parçasıdır. Bu yazıda en sık sorulan sorulara cevap vermek istiyorum.' },
        { type: 'h2', text: 'Rinoplastiden sonra ne kadar kalmalısınız?' },
        { type: 'p', text: 'Dönüş uçuşunuzu ameliyatın ertesi gününe almayın. Yurt dışından gelen hastalarımdan genellikle Kırklareli’de yaklaşık altı-yedi gün kalmalarını istiyorum. Nedeni basit: İlk birkaç gün, burnun nasıl iyileştiğini görmek, burnun içini kontrol etmek ve erken dikkat gerektiren bir şey varsa ilgilenmek istediğim dönemdir.' },
        {
          type: 'steps',
          items: [
            { title: 'İlk günler', text: 'Dinlenme ve yakın takip. Şişlik ve morluk bu dönemde en belirgin hâldedir; başınızı yüksekte tutmak ve burnu korumak önemlidir.' },
            { title: 'Yaklaşık 3–5. gün', text: 'Burnun içindeki silikon ateller genellikle bu dönemde çıkarılır.' },
            { title: 'Yaklaşık 6–7. gün', text: 'Dış atel çıkarılır ve son kontrol yapılır. Her şey beklendiği gibiyse genellikle ülkenize dönebilirsiniz.' },
          ],
        },
        { type: 'p', text: 'Yani ameliyatınızı planlarken yalnızca ameliyat gününü değil, iyileşme sürecini de planlayın. Atel çıktıktan sonra da şişlik bir süre devam eder ve burnun son şeklinin oturması aylar sürebilir; bu normaldir.' },
        { type: 'h2', text: 'Rinoplasti için yalnız gelebilir misiniz?' },
        { type: 'p', text: 'Bazı yurt dışı hastalar rinoplasti için yalnız seyahat ediyor. Ama yalnız gelmek, plansız gelmek demek değil. Yola çıkmadan önce şunları bilmeniz gerekir:' },
        {
          type: 'ul',
          items: [
            'Hastaneden nasıl ayrılacağınız ve nereye gideceğiniz.',
            'Nerede kalacağınız ve kalacağınız yerin hastaneye uzaklığı.',
            'İlaçlarınızı nasıl alacağınız.',
            'Yardıma ihtiyacınız olursa kime ulaşabileceğiniz.',
          ],
        },
        { type: 'p', text: 'Ameliyattan sonraki ilk gün, bunların hepsini çözmeye çalışılacak gün değil. Bu yüzden seyahatten önce süreci birlikte gözden geçiriyoruz: nerede kalacağınızı, sizi ne zaman göreceğimi ve ilk haftada neler olacağını. Yalnız seyahat ediyor olabilirsiniz; ama iyileşmenin tamamını tek başınıza yönetiyormuş gibi hissetmemelisiniz.' },
        { type: 'p', text: 'Pratik bir öneri: Önden düğmeli veya fermuarlı, başınızdan geçirmeniz gerekmeyen kıyafetler, yüksekte uyumak için ek bir yastık ve kolay hazırlanan yiyecekler ilk günleri epey kolaylaştırır.' },
        { type: 'h2', text: 'Eve döndükten sonra ne olur?' },
        { type: 'p', text: 'Rinoplastiniz sınırı geçtiğinizde bitmiyor. Kırklareli’den ayrılmadan önce burnunuzu muayene ediyor, iyileşmenizi kontrol ediyor ve her şeyin planlandığı gibi gittiğinden emin oluyorum. Eve döndükten sonra da iletişimde kalıyoruz.' },
        { type: 'p', text: 'Kontrollerinizde bana fotoğraf veya video gönderiyorsunuz ve iyileşmenizi kişisel olarak değerlendiriyorum. Bir şey doğru görünmüyorsa ya da bir konuda endişeleniyorsanız tahmin etmek zorunda değilsiniz; bana ulaşabilirsiniz. Yüz yüze muayene gerekiyorsa, bir sonraki adımın ne olacağına birlikte karar veriyoruz.' },
        { type: 'p', text: 'Genel olarak şu durumlarda beklemeden iletişime geçmeniz gerekir: durmayan veya giderek artan burun kanaması, ateş, giderek artan ağrı, tek tarafta belirgin ve artan şişlik ya da kızarıklık, burnunuza darbe almanız. Bunlar her zaman ciddi bir sorun anlamına gelmez, ama değerlendirilmeleri gerekir.' },
        { type: 'callout', text: 'Benim için rinoplasti yalnızca ameliyat günü değil; sürecin tamamı.' },
        { type: 'h2', text: 'Bulgaristan sınırına yakın olmak neden önemli?' },
        { type: 'p', text: 'Bulgaristan sınırına yakın olmak, ameliyattan sonra ameliyattan önce olduğundan daha da önemli. Kliniğim Kırklareli’de, sınıra bir saatten kısa mesafede. Bulgaristan’dan gelen hastalar için bu, uçak yerine arabayla yolculuk yapmak anlamına gelebilir.' },
        { type: 'p', text: 'Ama asıl avantaj sonra ortaya çıkıyor. Ek bir muayene gerekirse, iyileşmenizi yüz yüze görmek istersem ya da siz sadece geri gelmeyi daha rahat hissederseniz, mesafe yönetilebilir. Rinoplasti takibi atel çıktığında bitmiyor. Bu yüzden nerede ameliyat olacağınızı seçerken, cerrahınıza olan uzaklığın sonrasında da önemli olabileceğini unutmayın.' },
        { type: 'h2', text: 'Seyahat öncesi kontrol listesi' },
        {
          type: 'ul',
          items: [
            'Dönüş tarihinizi atellerin çıkarılmasından sonraya planlayın.',
            'Kalacağınız yeri ve hastaneye ulaşımı önceden netleştirin.',
            'Kullandığınız ilaçları ve sağlık geçmişinizi önceden paylaşın.',
            'Ameliyattan sonra kiminle, hangi kanaldan iletişim kuracağınızı öğrenin.',
            'Döndükten sonraki kontrol zamanlarını ve nasıl fotoğraf göndereceğinizi konuşun.',
          ],
        },
        { type: 'h2', text: 'Sık sorulan sorular' },
        { type: 'p', text: 'Ameliyattan birkaç gün sonra uçabilir miyim? İlk günler burnun en yakından izlenmesi gereken dönem. Bu yüzden dönüşü, ateller çıkarılıp son kontrol yapıldıktan sonraya, yani genellikle altıncı-yedinci güne planlamanızı öneriyorum.' },
        { type: 'p', text: 'Yanımda refakatçi olması şart mı? Şart değil; bazı hastalar yalnız geliyor. Önemli olan konaklama, ulaşım, ilaçlar ve iletişim konusunda önceden net bir plan olması.' },
        { type: 'p', text: 'Ülkeme döndükten sonra bir sorun olursa ne yapacağım? Bana fotoğraf veya videoyla ulaşabilirsiniz; durumu değerlendirir, yüz yüze muayene gerekiyorsa sonraki adıma birlikte karar veririz.' },
      ],
    },
    en: {
      title: 'Rhinoplasty abroad: how long to stay, travelling alone, and what happens after you go home',
      description:
        'A practical guide for international patients coming to Kırklareli for rhinoplasty: how long to stay, when the splints come out, travelling alone, follow-up after you return home and why distance from the border matters.',
      readMinutes: 5,
      body: [
        { type: 'p', text: 'If you are thinking of travelling to another country for rhinoplasty, the first thing most people plan is the operation day. But one of the things that most affects the result – and your comfort – is the days and weeks after surgery. For international patients, follow-up is part of the surgery. In this article I want to answer the questions I am asked most often.' },
        { type: 'h2', text: 'How long should you stay after rhinoplasty?' },
        { type: 'p', text: 'Don’t book your return flight for the day after rhinoplasty. For my international patients, I usually ask them to stay in Kırklareli for about six to seven days. The reason is simple: the first few days are when I want to see how the nose is healing, check the inside of the nose and deal with anything that needs attention early.' },
        {
          type: 'steps',
          items: [
            { title: 'The first days', text: 'Rest and close follow-up. Swelling and bruising are at their most visible; keeping your head raised and protecting the nose are important.' },
            { title: 'Around day 3–5', text: 'The internal silicone splints usually come out during this period.' },
            { title: 'Around day 6–7', text: 'The external splint comes off and a final check is done. If everything looks as expected, you can usually travel home.' },
          ],
        },
        { type: 'p', text: 'So when you plan your surgery, don’t only plan the operation day. Plan the recovery too. Swelling continues for a while after the splint comes off, and it can take months for the final shape to settle – that is normal.' },
        { type: 'h2', text: 'Can you come alone for rhinoplasty?' },
        { type: 'p', text: 'Some international patients do travel alone for rhinoplasty. But coming alone doesn’t mean coming without a plan. Before you travel, you need to know:' },
        {
          type: 'ul',
          items: [
            'How you’ll get from the hospital, and where to.',
            'Where you’ll stay, and how far it is from the hospital.',
            'How you’ll get your medication.',
            'Who you can contact if you need help.',
          ],
        },
        { type: 'p', text: 'The first day after surgery is not the day to figure all of this out. So before you travel, we go through the process together: where you’ll stay, when I’ll see you, and what happens during the first week. You may be travelling alone, but you shouldn’t feel like you’re managing the whole recovery alone.' },
        { type: 'p', text: 'A practical tip: clothes that button or zip at the front so you don’t have to pull them over your head, an extra pillow to sleep with your head raised, and easy-to-prepare food make the first days much easier.' },
        { type: 'h2', text: 'What happens after you go home?' },
        { type: 'p', text: 'Your rhinoplasty doesn’t end when you cross the border. Before you leave Kırklareli, I examine your nose, check your healing and make sure everything is going as planned. After you go home, we stay in contact.' },
        { type: 'p', text: 'At your follow-ups, you send me photos or videos, and I review your healing personally. If something doesn’t look right, or you’re worried about something, you don’t have to guess – you can contact me. And if an in-person examination is needed, we decide together what the next step should be.' },
        { type: 'p', text: 'In general, get in touch without waiting if you have: nosebleeding that doesn’t stop or keeps increasing, a fever, pain that keeps getting worse, marked and increasing swelling or redness on one side, or a knock to your nose. These don’t always mean a serious problem, but they need to be assessed.' },
        { type: 'callout', text: 'For me, rhinoplasty isn’t just the day of surgery. It’s the whole process.' },
        { type: 'h2', text: 'Why being close to the Bulgarian border matters' },
        { type: 'p', text: 'Being close to the Bulgarian border matters even more after surgery than before it. My clinic is in Kırklareli, less than an hour from the border. For patients from Bulgaria, that can mean travelling by car instead of taking a flight.' },
        { type: 'p', text: 'But the bigger advantage comes later. If you need an extra examination, if I want to see your healing in person, or if you simply feel more comfortable coming back, the distance is manageable. Rhinoplasty follow-up doesn’t end when the splint comes off. So when you choose where to have surgery, remember that distance from your surgeon can matter afterwards, too.' },
        { type: 'h2', text: 'Pre-travel checklist' },
        {
          type: 'ul',
          items: [
            'Plan your return date for after the splints come out.',
            'Confirm where you’ll stay and how you’ll get to the hospital in advance.',
            'Share your medicines and medical history beforehand.',
            'Find out who you’ll contact after surgery, and how.',
            'Discuss your follow-up schedule after you return and how to send photos.',
          ],
        },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'p', text: 'Can I fly a few days after surgery? The first days are when the nose needs the closest follow-up. That’s why I recommend planning your return for after the splints are removed and the final check is done – usually around day six or seven.' },
        { type: 'p', text: 'Do I need someone to come with me? No; some patients come alone. What matters is having a clear plan in advance for accommodation, transport, medication and communication.' },
        { type: 'p', text: 'What do I do if there is a problem after I return home? You can contact me with photos or videos; I assess the situation, and if an in-person examination is needed, we decide on the next step together.' },
      ],
    },
  },
};

export default post;
