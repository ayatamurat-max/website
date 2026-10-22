import type { Post } from '../types';
import ru from '../i18n/preventative-botox/ru';
import de from '../i18n/preventative-botox/de';
import fr from '../i18n/preventative-botox/fr';
import bg from '../i18n/preventative-botox/bg';

// Kaynak: Scriptler/3. hafta/2. gurup.pages (3. Preventative Botox)
const post: Post = {
  slug: 'preventative-botox-age',
  date: '2026-10-16',
  cover: '/blog/preventative-botox.svg',
  shareImage: '/blog/preventative-botox.jpg',
  procedure: { href: '/botoks', icon: 'medical' },
  translations: {
    ru,
    de,
    fr,
    bg,
    tr: {
      title: 'Botoksa kaç yaşında başlanmalı? "Önleyici botoks" hakkında',
      description:
        'Botoksa başlamak için belirlenmiş bir yaş yok. "Önleyici botoks" yaklaşımının mantığı nedir, kimde anlamlı olabilir, kimde gereksizdir?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'Botoksa başlamak için belirlenmiş bir yaş yok. "25\'ten sonra başlanmalı", "30\'u geçmeden yaptırmak lazım" gibi sözler sık duyuluyor ama bunlar tıbbi sınırlar değil.' },
        { type: 'h2', text: 'Önce iki tür çizgiyi ayıralım' },
        {
          type: 'ul',
          items: [
            'Dinamik çizgiler: Sadece mimik yaparken, örneğin kaşları kaldırdığınızda ya da gülümsediğinizde ortaya çıkan, yüz dinlenirken kaybolan çizgiler.',
            'Statik çizgiler: Yüz tamamen dinlenirken, hiçbir mimik yapmazken de görünen, cilde yerleşmiş çizgiler.',
          ],
        },
        { type: 'p', text: 'Yıllar içinde, sık tekrarlanan mimiklerin oluşturduğu dinamik çizgiler zamanla statik hale gelebiliyor. Önleyici botoks tartışmasının özü de bu geçiş.' },
        { type: 'h2', text: 'Botulinum toksin nasıl çalışır?' },
        { type: 'p', text: 'Botulinum toksin, uygulandığı kasa giden sinir uyarısını geçici olarak azaltır. Kas daha az kasıldığı için o kasın oluşturduğu mimik çizgisi de yumuşar. Etkisi kalıcı değildir; zamanla azalır ve kas eski hareketine döner.' },
        { type: 'h2', text: 'Önleyici botoksun mantığı' },
        { type: 'p', text: '"Preventative Botox", yani önleyici botoks denilen yaklaşımın mantığı şu: Bazı çizgiler, aynı mimik hareketinin yıllarca tekrarlanmasıyla zaman içinde cilde yerleşiyor. Botulinum toksin de o kasın hareketini geçici olarak azaltıyor.' },
        { type: 'p', text: 'Dolayısıyla çok güçlü mimikleri olan ve çizgileri artık istirahatte de kalmaya başlayan bir hastada erken uygulamanın bir mantığı olabilir. Örneğin kaşlarını çok sık çatan ve kaş arasında dinlenirken de belirgin bir çizgi oluşmaya başlayan genç bir hasta bu gruba girebilir.' },
        { type: 'h2', text: 'Ama herkes için değil' },
        { type: 'p', text: 'Bu, 20\'li yaşlara gelen herkesin botoks yaptırması gerekiyor demek değil. Çünkü yüz yaşlanmasını sadece mimikler belirlemiyor:' },
        {
          type: 'ul',
          items: [
            'Genetik: Cildin yapısı ve yaşlanma hızı büyük ölçüde ailesel özelliklerle ilişkili.',
            'Güneş: Güneş ışığı, cildin kolajen yapısını bozan en önemli dış etkenlerden biri.',
            'Cilt yapısı: Cildin kalınlığı, nem durumu ve esnekliği kişiden kişiye değişir.',
            'Hacim kaybı: Yaşla birlikte yüzdeki yağ dokusu ve destek yapılarında azalma olur; bu, botoksun etkilediği bir şey değildir.',
            'Ve daha birçok faktör: Sigara, uyku düzeni ve genel sağlık durumu da cildi etkiler.',
          ],
        },
        { type: 'p', text: 'Bu yüzden genç yaşta cildi korumanın en temel adımları, botokstan önce, düzenli güneş koruması ve sigaradan uzak durmaktır.' },
        { type: 'h2', text: 'Değerlendirmede neye bakıyoruz?' },
        {
          type: 'steps',
          items: [
            { title: 'Mimik analizi', text: 'Hangi kasların ne kadar güçlü çalıştığına, hangi bölgede çizgi oluştuğuna bakılır.' },
            { title: 'Dinlenme hali', text: 'Çizgilerin yüz dinlenirken de görünüp görünmediği değerlendirilir.' },
            { title: 'Beklenti', text: 'Hastanın ne istediği, doğal mimiklerini ne ölçüde korumak istediği konuşulur. Amaç yüzü dondurmak değil, gereken yerde mimiği yumuşatmaktır.' },
          ],
        },
        { type: 'h2', text: 'Kimlerde uygulanmamalı?' },
        { type: 'p', text: 'Gebelik ve emzirme döneminde, bazı kas ve sinir hastalıklarında ve uygulama bölgesinde aktif bir enfeksiyon varsa botulinum toksin uygulanmaz. Kullandığınız ilaçları ve geçirdiğiniz hastalıkları uygulama öncesinde mutlaka belirtmelisiniz.' },
        { type: 'callout', text: 'Yaşa bakıp "Botoksa başlamanın zamanı geldi" demektense, yüzün ne yaptığına bakmayı daha anlamlı buluyorum.' },
        { type: 'h2', text: 'Sık sorulan sorular' },
        { type: 'p', text: 'Erken başlarsam bağımlılık yapar mı? Hayır, botulinum toksin fiziksel bir bağımlılık yapmaz. Uygulamayı bıraktığınızda etkisi zamanla geçer ve kas eski hareketine döner.' },
        { type: 'p', text: 'Botoksu bırakırsam kırışıklıklarım daha da artar mı? Hayır. Etki geçtiğinde yüz, uygulama öncesindeki mimik haline döner; bırakmak çizgileri öncekinden daha kötü hale getirmez.' },
        { type: 'p', text: 'Botoks ile dolgu aynı şey mi? Değil. Botoks kasın hareketini azaltarak mimik çizgilerine etki eder; dolgu ise hacim kaybını ya da belirli bölgeleri desteklemek için kullanılır. İkisinin kullanım amacı farklıdır.' },
        { type: 'p', text: 'Önleyici botoks için doğru yaş hangisi? Belirli bir doğru yaş yok. Karar, takvimdeki yaşa göre değil, yüzünüzün mimik özelliklerine ve çizgilerin durumuna göre verilir.' },
      ],
    },
    en: {
      title: 'At what age should you start Botox? About "preventative Botox"',
      description:
        'There is no set age to start Botox. What is the logic behind "preventative Botox", for whom might it make sense, and for whom is it unnecessary?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'There is no set age to start Botox. Sayings like "you should start after 25" or "you need it before you turn 30" are often heard, but they are not medical limits.' },
        { type: 'h2', text: 'First, let\'s separate two types of lines' },
        {
          type: 'ul',
          items: [
            'Dynamic lines: lines that appear only when you make an expression, for example when you raise your eyebrows or smile, and disappear when the face is at rest.',
            'Static lines: lines that are visible even when the face is completely relaxed, without any expression; lines that have become etched into the skin.',
          ],
        },
        { type: 'p', text: 'Over the years, dynamic lines formed by frequently repeated expressions can gradually become static. This transition is the core of the preventative Botox discussion.' },
        { type: 'h2', text: 'How does botulinum toxin work?' },
        { type: 'p', text: 'Botulinum toxin temporarily reduces the nerve signal reaching the muscle it is injected into. Because the muscle contracts less, the expression line it creates softens. The effect is not permanent; it fades over time and the muscle returns to its previous movement.' },
        { type: 'h2', text: 'The logic of preventative Botox' },
        { type: 'p', text: 'The idea behind what is called "preventative Botox" is this: some lines become etched into the skin over time as the same facial expression is repeated for years. Botulinum toxin temporarily reduces the movement of that muscle.' },
        { type: 'p', text: 'So in a patient with very strong facial expressions whose lines are starting to remain even at rest, early treatment may make sense. For example, a young patient who frowns very often and is beginning to show a clear line between the eyebrows even at rest might fall into this group.' },
        { type: 'h2', text: 'But not for everyone' },
        { type: 'p', text: 'This does not mean everyone who reaches their twenties needs Botox, because facial ageing is not determined by expressions alone:' },
        {
          type: 'ul',
          items: [
            'Genetics: skin structure and the pace of ageing are largely linked to family traits.',
            'Sun exposure: sunlight is one of the most important external factors that damage the skin\'s collagen.',
            'Skin type: skin thickness, hydration and elasticity vary from person to person.',
            'Volume loss: with age, the fat and support structures of the face diminish; this is not something Botox affects.',
            'And many other factors: smoking, sleep and general health also affect the skin.',
          ],
        },
        { type: 'p', text: 'That is why, at a young age, the most basic steps for protecting the skin, before Botox, are regular sun protection and avoiding smoking.' },
        { type: 'h2', text: 'What do we look at in the assessment?' },
        {
          type: 'steps',
          items: [
            { title: 'Expression analysis', text: 'We look at which muscles work how strongly and in which areas lines are forming.' },
            { title: 'The face at rest', text: 'We assess whether the lines are also visible when the face is relaxed.' },
            { title: 'Expectations', text: 'We discuss what the patient wants and how much of their natural expression they want to keep. The aim is not to freeze the face but to soften expression where needed.' },
          ],
        },
        { type: 'h2', text: 'Who should not have it?' },
        { type: 'p', text: 'Botulinum toxin is not given during pregnancy or breastfeeding, in certain muscle and nerve disorders, or if there is an active infection at the injection site. You should always mention the medicines you take and any illnesses you have had before treatment.' },
        { type: 'callout', text: 'Rather than looking at someone\'s age and saying "it is time to start Botox", I find it more meaningful to look at what the face is doing.' },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'p', text: 'If I start early, will I become dependent on it? No, botulinum toxin does not cause physical dependence. When you stop, the effect wears off over time and the muscle returns to its previous movement.' },
        { type: 'p', text: 'If I stop Botox, will my wrinkles get worse? No. When the effect wears off, the face returns to how its expressions were before treatment; stopping does not make the lines worse than before.' },
        { type: 'p', text: 'Are Botox and fillers the same thing? No. Botox works on expression lines by reducing muscle movement, while fillers are used to address volume loss or support specific areas. They are used for different purposes.' },
        { type: 'p', text: 'What is the right age for preventative Botox? There is no single right age. The decision is based not on your age on the calendar but on your facial expressions and the state of your lines.' },
      ],
    },
  },
};

export default post;
