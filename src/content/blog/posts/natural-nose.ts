import type { Post } from '../types';

// Kaynak: Scriptler/3. hafta/2. gurup.pages (2. "Natural nose" dönemi)
const post: Post = {
  slug: 'natural-nose-era',
  date: '2026-10-16',
  cover: '/blog/natural-nose.svg',
  shareImage: '/blog/natural-nose.jpg',
  procedure: { href: '/rinoplasti', icon: 'rhinoplasty' },
  translations: {
    tr: {
      title: '"Doğal burun" dönemi: Kime göre doğal?',
      description:
        'Rinoplastide beklenti, mümkün olduğunca küçük ve kalkık bir burundan yüzle uyumlu, doğal bir sonuca doğru kayıyor. "Doğal burun" ne demek, burun yüzün geri kalanıyla nasıl değerlendirilir?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'İyi yapılmış bir rinoplastinin ilk bakışta fark edilmemesi bence kötü bir şey değil. Rinoplastide beklenti de giderek bu tarafa kayıyor.' },
        { type: 'p', text: 'Amerikan Yüz Plastik Cerrahisi Akademisi, 2026\'daki bu eğilimi "Natural Nose Era", yani "doğal burun dönemi" diye tanımlıyor. Yani trend artık mümkün olduğu kadar küçük, mümkün olduğu kadar kalkık bir burun yapmak değil.' },
        { type: 'h2', text: 'Eskiden ne isteniyordu, şimdi ne değişti?' },
        { type: 'p', text: 'Bir dönem estetik burun denince akla çok küçük, ucu belirgin şekilde yukarı kalkık, birbirine benzeyen burunlar geliyordu. Bu burunların önemli bir kısmı uzaktan bile "ameliyatlı" görünüyordu. Üstelik burnu aşırı küçültmek, burnun iç destek yapılarını zayıflatıp nefes almayı da olumsuz etkileyebiliyor.' },
        { type: 'p', text: 'Bugün hastaların ve cerrahların büyük kısmı başka bir şey arıyor: Kişinin yüzüne ait gibi duran, dikkati kendine çekmeyen ve iyi nefes alan bir burun.' },
        { type: 'h2', text: 'Burun tek başına değerlendirilmez' },
        { type: 'p', text: 'Burun, yüzün tam ortasında duruyor ve çevresindeki her yapıyla bir ilişki içinde. Değerlendirirken şunlara bakıyoruz:' },
        {
          type: 'ul',
          items: [
            'Alınla ilişkisi: Alından burun kökü ve burun sırtına geçiş, profilin ilk izlenimini belirler.',
            'Çeneyle ilişkisi: Geride duran bir çene burnu olduğundan büyük gösterebilir; bazen profildeki dengesizliğin kaynağı burun değil çenedir.',
            'Dudaklarla ilişkisi: Burun ucu ile üst dudak arasındaki açı, burnun ne kadar kalkık ya da düşük göründüğünü belirler.',
            'Yüz hatlarıyla uyumu: Yüzün genişliği, elmacık kemikleri, göz aralığı burnun hangi genişlikte dengeli duracağını etkiler.',
            'Ve tabii nefes alma fonksiyonu: Septum, konkalar ve burun kanatlarının desteği iyi bir sonucun ayrılmaz parçasıdır.',
          ],
        },
        { type: 'h2', text: 'Aynı burun her yüzde aynı durmaz' },
        { type: 'p', text: 'Aynı burun şekli bir yüzde çok doğal durabilirken, başka bir yüzde ameliyat olduğu hemen belli olabilir. Yüzün oranları, cinsiyete özgü hatlar, kişinin etnik ve ailesel özellikleri ve cilt kalınlığı, hangi burnun o yüzde "doğal" görüneceğini değiştirir. İnce ciltli birinde mümkün olan keskin bir detay, kalın ciltli birinde aynı şekilde görünmeyebilir.' },
        { type: 'h2', text: 'Kime göre doğal?' },
        { type: 'p', text: 'O yüzden hasta bana "Doğal bir burun istiyorum" dediğinde şunu düşünmek lazım: Kime göre doğal? Doğal burun, her hastada aynı ölçülerde bir burun değil. Bazı hastalar için doğallık, kemerin tamamen alınmaması ve burnun karakterinin korunması anlamına gelir. Bazıları için ise belirgin bir değişiklik isteyip yine de "ameliyatlı" görünmemek anlamına gelir.' },
        { type: 'h2', text: 'Konsültasyonda beklentinizi nasıl anlatabilirsiniz?' },
        {
          type: 'steps',
          items: [
            { title: 'Sizi rahatsız eden noktayı söyleyin', text: 'Kemer mi, burun ucunun düşüklüğü mü, genişlik mi, yoksa yüzden bakıldığında eğrilik mi?' },
            { title: 'Korumak istediklerinizi de söyleyin', text: 'Burnunuzun beğendiğiniz ya da sizi "siz" yapan özellikleri olabilir. Bunları bilmek, planı yaparken en az değişiklik istenen noktalar kadar önemlidir.' },
            { title: 'Nefes şikâyetlerinizi atlamayın', text: 'Tıkanıklık, horlama, sık sinüzit gibi şikâyetler, planın fonksiyonel kısmını belirler.' },
          ],
        },
        { type: 'callout', text: 'Bence iyi bir rinoplasti, yüzü başka birine benzetmekten çok burnu o yüzün içine daha doğru yerleştirmektir.' },
        { type: 'h2', text: 'Sık sorulan sorular' },
        { type: 'p', text: 'Doğal burun, az değişiklik demek mi? Her zaman değil. Bazen belirgin bir değişiklik gerekir; önemli olan, sonucun yüzle uyumlu olması ve dikkati kendine çekmemesidir.' },
        { type: 'p', text: 'Ameliyattan hemen sonra burun doğal görünür mü? İlk haftalarda şişlik nedeniyle burun olduğundan farklı görünür. Ödem zamanla azalır ve son şeklin oturması aylar sürebilir. Bu yüzden ilk dönemde görünüme göre karar vermemek gerekir.' },
        { type: 'p', text: 'Doğal görünüm için kemerin bir kısmı bırakılabilir mi? Bazı hastalarda, özellikle profilin karakterini korumak isteyenlerde bu bir seçenek olabilir. Bu karar yüz yapısına ve hastanın isteğine göre birlikte verilir.' },
      ],
    },
    en: {
      title: 'The "natural nose" era: natural for whom?',
      description:
        'Expectations in rhinoplasty are shifting away from the smallest, most upturned nose possible towards a natural result in harmony with the face. What does a "natural nose" mean, and how is the nose assessed together with the rest of the face?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'I don\'t think it is a bad thing if a well-done rhinoplasty is not noticed at first glance. Expectations in rhinoplasty are increasingly moving in this direction too.' },
        { type: 'p', text: 'The American Academy of Facial Plastic and Reconstructive Surgery describes this 2026 trend as the "Natural Nose Era". In other words, the trend is no longer to make the nose as small and as upturned as possible.' },
        { type: 'h2', text: 'What did people want before, and what has changed?' },
        { type: 'p', text: 'For a time, a cosmetic nose meant a very small nose with a clearly upturned tip, and many of these noses looked alike. A good number of them looked "operated on" even from a distance. Moreover, reducing a nose too much can weaken its internal support structures and also affect breathing.' },
        { type: 'p', text: 'Today most patients and surgeons are looking for something else: a nose that looks as if it belongs to the person\'s face, does not draw attention to itself and breathes well.' },
        { type: 'h2', text: 'The nose is not assessed on its own' },
        { type: 'p', text: 'The nose sits right in the middle of the face and relates to every structure around it. When assessing it, we look at:' },
        {
          type: 'ul',
          items: [
            'Its relationship with the forehead: the transition from the forehead to the root and bridge of the nose shapes the first impression of the profile.',
            'Its relationship with the chin: a receding chin can make the nose look bigger than it is; sometimes the imbalance in the profile comes from the chin rather than the nose.',
            'Its relationship with the lips: the angle between the nasal tip and the upper lip determines how upturned or drooping the nose looks.',
            'Its harmony with the facial features: the width of the face, the cheekbones and the distance between the eyes affect what nasal width will look balanced.',
            'And, of course, breathing function: the septum, turbinates and support of the nasal sidewalls are an inseparable part of a good result.',
          ],
        },
        { type: 'h2', text: 'The same nose does not look the same on every face' },
        { type: 'p', text: 'The same nose shape can look completely natural on one face, while on another face it may be obvious straight away that it has been operated on. Facial proportions, gender-typical features, a person\'s ethnic and family characteristics, and skin thickness all change which nose will look "natural" on that face. A sharp detail that is possible in someone with thin skin may not look the same in someone with thick skin.' },
        { type: 'h2', text: 'Natural for whom?' },
        { type: 'p', text: 'So when a patient tells me "I want a natural nose", the question to ask is: natural for whom? A natural nose is not a nose with the same measurements for every patient. For some patients, natural means not removing the hump completely and preserving the character of the nose. For others, it means wanting a clear change while still not looking "operated on".' },
        { type: 'h2', text: 'How can you explain your expectations in the consultation?' },
        {
          type: 'steps',
          items: [
            { title: 'Say what bothers you', text: 'Is it the hump, a drooping tip, the width, or a crookedness seen from the front?' },
            { title: 'Say what you want to keep', text: 'There may be features of your nose that you like or that make you "you". Knowing these is just as important for planning as the points you want changed.' },
            { title: 'Don\'t skip breathing complaints', text: 'Complaints such as blockage, snoring or frequent sinusitis shape the functional part of the plan.' },
          ],
        },
        { type: 'callout', text: 'To me, a good rhinoplasty is less about making a face resemble someone else and more about placing the nose correctly within that face.' },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'p', text: 'Does a natural nose mean minimal change? Not always. Sometimes a clear change is needed; what matters is that the result is in harmony with the face and does not draw attention to itself.' },
        { type: 'p', text: 'Does the nose look natural straight after surgery? In the first weeks the nose looks different because of swelling. The swelling decreases over time, and it can take months for the final shape to settle. That is why decisions should not be made based on the early appearance.' },
        { type: 'p', text: 'Can part of the hump be left for a more natural look? For some patients, especially those who want to preserve the character of their profile, this can be an option. The decision is made together, based on the facial structure and the patient\'s wishes.' },
      ],
    },
  },
};

export default post;
