import type { Post } from '../types';

// Kaynak: Scriptler/22 EKim Perşembe/22 ekim ingilizce.pages (2. referans burun, 3. doğal burun, 4. önce nefes, 5. tek görüşmede karar vermek zorunda değilsiniz)
const post: Post = {
  slug: 'rhinoplasty-consultation-reference-photos-breathing',
  date: '2026-10-22',
  cover: '/blog/rhinoplasty-consultation.webp',
  shareImage: '/blog/rhinoplasty-consultation.jpg',
  procedure: { href: '/rinoplasti', icon: 'rhinoplasty' },
  translations: {
    tr: {
      title: 'Rinoplasti konsültasyonu: Referans fotoğraf, nefes ve acele etmemek',
      description:
        'Hayalinizdeki burnun fotoğrafı neden birebir kopyalanamaz, şekilden önce neden nefese bakılır ve rinoplasti kararını neden tek bir görüşmede vermek zorunda değilsiniz?',
      readMinutes: 5,
      body: [
        { type: 'p', text: 'Rinoplasti konsültasyonuna gelen hastaların çoğu, telefonunda beğendiği burunların fotoğraflarıyla geliyor. Bu çok doğal. Ama konsültasyonun amacı bir fotoğrafı kopyalamak değil; sizin yüzünüze, burnunuza ve nefesinize uyan bir plan yapmak. Bu yazıda konsültasyonda neyi neden konuştuğumuzu anlatmak istiyorum.' },
        { type: 'h2', text: 'Referans burnu neden söz veremem?' },
        { type: 'p', text: 'Bana hayalinizdeki burnu gösterebilirsiniz, ama onu kopyalayacağıma söz vermem. Referans fotoğraflar işe yarar: Neyi beğendiğinizi ve neyi beğenmediğinizi anlamama yardımcı olurlar. Ama her burun farklı bir anatomiyle başlar:' },
        {
          type: 'ul',
          items: [
            'Cilt kalınlığı: Kalın ciltte ince ve keskin detaylar aynı netlikte görünmeyebilir; ince ciltte ise alttaki her ayrıntı daha belirgin olur.',
            'Kıkırdak yapısı: Burun ucunu ve kanatlarını oluşturan kıkırdakların gücü, şekli ve simetrisi kişiden kişiye değişir.',
            'Kemik yapısı: Burun kemiklerinin genişliği ve uzunluğu, burun sırtının nasıl şekillenebileceğini belirler.',
            'Yüz oranları: Aynı burun farklı bir alın, çene ve yüz genişliğiyle bambaşka görünür.',
          ],
        },
        { type: 'p', text: 'Bir şey daha var: Burnunuzun hâlâ nefes alması gerekiyor. Bu yüzden başka bir yüzdeki burnu alıp sizin yüzünüze yerleştiremem. Yapabileceğim şey, aradığınız sonucu anlamak ve gerçekten sizin anatominize uyan bir şey planlamak. Referans fotoğraf konuşmayı başlatabilir; ama ameliyata karar vermemeli.' },
        { type: 'h2', text: 'Doğal burun ameliyatlı görünmemeli' },
        { type: 'p', text: 'İyi bir rinoplastinin her zaman rinoplasti gibi görünmesi gerekmez. Benim için doğal; küçük, kusursuz derecede düz ya da her yüzde aynı burun demek değil. Doğal, burnun o yüze ait olması demek.' },
        { type: 'p', text: 'Alın önemlidir. Çene önemlidir. Yüzün genişliği önemlidir. Hatta kişinin gülümseme biçimi bile önemlidir; çünkü gülümserken burun ucu ve üst dudak birlikte hareket eder. Bu yüzden aynı burun bir kişide çok güzel, bir başkasında tamamen yanlış görünebilir.' },
        { type: 'p', text: 'Hastalar bana sık sık “Doğal bir burun istiyorum” diyor. Benim sorum hep aynı: Kime göre doğal? Amaç size başka birinin burnunu vermek değil; burnunuzu size daha iyi uydurmak.' },
        { type: 'h2', text: 'Şekilden önce neden nefese bakıyorum?' },
        { type: 'p', text: 'Burnunuzun nasıl görünmesi gerektiğini planlamadan önce nasıl nefes aldığını bilmek istiyorum. Çünkü rinoplasti yalnızca dışarıyla ilgili değil. Burnun içinde özellikle üç yapıya bakıyorum:' },
        {
          type: 'steps',
          items: [
            { title: 'Septum', text: 'Burnu sağ ve sol olarak ikiye ayıran kemik-kıkırdak duvar. Eğri olduğunda bir ya da iki taraf daralabilir; ayrıca burun ucuna destek veren önemli bir yapıdır.' },
            { title: 'Konkalar', text: 'Burnun yan duvarlarındaki, havayı ısıtıp nemlendiren yapılar. Büyüdüklerinde, özellikle alerjisi olan kişilerde, tıkanıklığa neden olabilirler.' },
            { title: 'Nazal valv', text: 'Burnun hava yolunun en dar bölgesi. Bu bölgenin destek yapıları zayıfsa, nefes alırken burun kanatları içe doğru çökebilir.' },
          ],
        },
        { type: 'p', text: 'Bazen sorununun yalnızca estetik olduğunu düşünen bir hasta gelir ve muayenede fonksiyonel bir problem de buluruz. Bu, ameliyat planı için önemlidir. Çünkü hava akımını düşünmeden bir burnu küçültmek, bambaşka bir sorun yaratabilir. Benim için görünüm ve nefes iki ayrı ameliyat değil; aynı burnun iki parçası.' },
        { type: 'p', text: 'Bu yüzden konsültasyonda burun tıkanıklığı, horlama, ağızdan nefes alma, sık sinüzit veya burun spreyi kullanımı gibi şikâyetleri mutlaka soruyorum. Siz önemsemeseniz bile bunları söylemeniz planı değiştirebilir.' },
        { type: 'h2', text: 'Tek bir görüşmede karar vermek zorunda değilsiniz' },
        { type: 'p', text: 'Rinoplasti on dakikada karar verilecek bir şey değil. Tek bir konsültasyondan sonra cerrah seçmek zorunda da değilsiniz. Soru sorun. Farklı yaklaşımlara bakın. Gerekiyorsa ikinci bir görüş alın. Konsültasyondan çıkarken şunları anlamış olmalısınız:' },
        {
          type: 'ul',
          items: [
            'Gerçekçi olarak nelerin değişebileceğini, nelerin muhtemelen değişemeyeceğini ve nedenini.',
            'Ameliyatın nasıl planlandığını; nefes alma ile ilgili bir sorun varsa bunun planda nasıl ele alınacağını.',
            'Ameliyattan sonraki takibin nasıl işlediğini.',
            'Ameliyattan sonra kiminle konuşacağınızı.',
          ],
        },
        { type: 'p', text: 'Bir konsültasyondan, girdiğinizden daha fazla kafa karışıklığıyla çıkıyorsanız, muhtemelen daha fazla bilgiye ihtiyacınız vardır.' },
        { type: 'callout', text: 'Bu sizin yüzünüz ve sizin kararınız. Doğru kararı vermek için kendinize yeterince zaman tanıyın.' },
        { type: 'h2', text: 'Konsültasyona hazırlanırken' },
        {
          type: 'ul',
          items: [
            'Beğendiğiniz fotoğrafları getirin, ama her birinde neyi beğendiğinizi söyleyebilecek şekilde düşünün: burun sırtı mı, burun ucu mu, genişlik mi?',
            'Kendi burnunuzda korumak istediğiniz özellikleri de not edin.',
            'Nefes şikâyetlerinizi, alerjinizi, geçirdiğiniz burun travmalarını veya ameliyatları ve kullandığınız ilaçları paylaşın.',
            'Sormak istediğiniz soruları önceden yazın; görüşmede unutmak çok kolaydır.',
          ],
        },
        { type: 'h2', text: 'Sık sorulan sorular' },
        { type: 'p', text: 'Referans fotoğraf getirmem yanlış mı? Hayır, aksine faydalıdır. Fotoğraflar neyi sevdiğinizi anlatmanın kolay bir yolu. Sadece ameliyatın hedefi o fotoğraf değil, sizin anatominize uyan bir sonuç olmalı.' },
        { type: 'p', text: 'Nefes almada bir sorunum yok, yine de iç muayene gerekli mi? Evet. Bazı fonksiyonel problemler belirgin şikâyet vermeyebilir; burnun dış şekli değiştirilirken iç yapıların da dikkate alınması gerekir.' },
        { type: 'p', text: 'İkinci görüş almak cerrahı rahatsız eder mi? Etmemeli. Rinoplasti önemli bir karar; farklı yaklaşımları dinlemek ve emin olmak sizin hakkınız.' },
      ],
    },
    en: {
      title: 'Your rhinoplasty consultation: reference photos, breathing and taking your time',
      description:
        'Why can’t the photo of your dream nose simply be copied, why is breathing checked before shape, and why don’t you have to decide on rhinoplasty after one consultation?',
      readMinutes: 5,
      body: [
        { type: 'p', text: 'Most patients come to a rhinoplasty consultation with photos of noses they like on their phone. That is completely natural. But the aim of a consultation is not to copy a photo; it is to make a plan that fits your face, your nose and your breathing. In this article I want to explain what we talk about in a consultation, and why.' },
        { type: 'h2', text: 'Why I don’t promise your reference nose' },
        { type: 'p', text: 'You can show me your dream nose, but I won’t promise to copy it. Reference photos are useful: they help me understand what you like and what you don’t. But every nose starts with a different anatomy:' },
        {
          type: 'ul',
          items: [
            'Skin thickness: fine, sharp details may not show as clearly under thick skin, while thin skin makes every detail underneath more visible.',
            'Cartilage: the strength, shape and symmetry of the cartilages that form the tip and the nostrils vary from person to person.',
            'Bone structure: the width and length of the nasal bones determine how the bridge can be shaped.',
            'Facial proportions: the same nose looks completely different with a different forehead, chin and facial width.',
          ],
        },
        { type: 'p', text: 'And there’s one more thing: your nose still has to breathe. So I can’t simply take a nose from another face and place it on yours. What I can do is understand the result you’re looking for, and plan something that actually fits your anatomy. A reference photo can start the conversation. It shouldn’t decide the surgery.' },
        { type: 'h2', text: 'A natural nose should not look operated' },
        { type: 'p', text: 'A good rhinoplasty doesn’t always need to look like a rhinoplasty. For me, natural doesn’t mean small, or perfectly straight, or the same nose on every face. It means the nose belongs to the face.' },
        { type: 'p', text: 'The forehead matters. The chin matters. The width of the face matters. Even the way the person smiles matters, because the tip of the nose and the upper lip move together when you smile. That’s why the same nose can look beautiful on one person and completely wrong on another.' },
        { type: 'p', text: 'Patients often tell me, “I want a natural nose.” And my question is always: natural for whom? The goal isn’t to give you somebody else’s nose. It’s to make your nose fit you better.' },
        { type: 'h2', text: 'Why I check breathing before shape' },
        { type: 'p', text: 'Before I plan how your nose should look, I want to know how it breathes. Rhinoplasty isn’t only about the outside. Inside the nose, I look in particular at three structures:' },
        {
          type: 'steps',
          items: [
            { title: 'The septum', text: 'The wall of bone and cartilage that divides the nose into right and left sides. When it is deviated, one or both sides can narrow; it is also an important support for the nasal tip.' },
            { title: 'The turbinates', text: 'Structures on the side walls of the nose that warm and humidify the air. When they are enlarged, especially in people with allergies, they can cause blockage.' },
            { title: 'The nasal valve', text: 'The narrowest part of the nasal airway. If the support structures here are weak, the sides of the nose can collapse inwards when you breathe in.' },
          ],
        },
        { type: 'p', text: 'Sometimes a patient comes in thinking the problem is only cosmetic, and we find a functional problem as well. That matters for the surgical plan, because making a nose smaller without thinking about airflow can create a completely different problem. For me, appearance and breathing are not two separate surgeries. They are two parts of the same nose.' },
        { type: 'p', text: 'That’s why in a consultation I always ask about complaints such as nasal blockage, snoring, mouth breathing, frequent sinusitis or using nasal sprays. Even if they don’t seem important to you, mentioning them can change the plan.' },
        { type: 'h2', text: 'You don’t have to decide after one consultation' },
        { type: 'p', text: 'Rhinoplasty is not something you need to decide in ten minutes. And you don’t have to choose a surgeon after one consultation. Ask questions. Look at different approaches. Get a second opinion if you need one. By the time you leave a consultation, you should understand:' },
        {
          type: 'ul',
          items: [
            'What can realistically be changed, what probably can’t, and why.',
            'How the surgery is planned, and how any breathing problem will be addressed in the plan.',
            'How the follow-up works.',
            'Who you’ll be speaking to afterwards.',
          ],
        },
        { type: 'p', text: 'If you leave a consultation with more confusion than you had before, you probably need more information.' },
        { type: 'callout', text: 'This is your face, and your decision. Take enough time to make the right one.' },
        { type: 'h2', text: 'Preparing for your consultation' },
        {
          type: 'ul',
          items: [
            'Bring photos you like, but think about what exactly you like in each one: the bridge, the tip, the width?',
            'Also note the features of your own nose you would like to keep.',
            'Share any breathing complaints, allergies, previous nasal injuries or operations, and the medicines you take.',
            'Write down your questions in advance; it is very easy to forget them during the appointment.',
          ],
        },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'p', text: 'Is it wrong to bring reference photos? No – it helps. Photos are an easy way to show what you like. The goal of the surgery, however, should be a result that fits your anatomy, not the photo itself.' },
        { type: 'p', text: 'I have no breathing problems – do I still need an internal examination? Yes. Some functional problems don’t cause obvious symptoms, and the internal structures need to be considered whenever the outside shape of the nose is changed.' },
        { type: 'p', text: 'Will a second opinion offend the surgeon? It shouldn’t. Rhinoplasty is an important decision; hearing different approaches and feeling sure is your right.' },
      ],
    },
  },
};

export default post;
