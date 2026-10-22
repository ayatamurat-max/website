import type { Post } from '../types';
import ru from '../i18n/face-taping/ru';
import de from '../i18n/face-taping/de';
import fr from '../i18n/face-taping/fr';
import bg from '../i18n/face-taping/bg';

// Kaynak: Scriptler/3. hafta/2. gurup.pages (4. Face taping — Gua sha — Face yoga)
const post: Post = {
  slug: 'face-taping-gua-sha-face-yoga',
  date: '2026-10-16',
  cover: '/blog/face-taping.svg',
  shareImage: '/blog/face-taping.jpg',
  procedure: { href: '/ameliyatsiz-yuz-genclestirme', icon: 'rejuvenation' },
  translations: {
    ru,
    de,
    fr,
    bg,
    tr: {
      title: 'Yüz bantlama, gua sha, yüz yogası: Aynadaki değişiklik kalıcı mı?',
      description:
        'Sosyal medyada yüzü şekillendirmek için geniş bir repertuvar oluştu. Yüz bantlama, gua sha ve yüz yogası ne yapar, ne yapamaz; kalıcı bir değişiklik için ne gerekir?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'Sosyal medyada yüzü şekillendirmek için bayağı geniş bir repertuvarımız oluştu: yüz bantlama (face taping), gua sha, yüz yogası (face yoga)... Bunların hepsini aynı sepete koymamak lazım. Her birinin ne yaptığına ayrı ayrı bakmak gerekiyor.' },
        { type: 'h2', text: 'Sabah aynada gördüğümüz değişiklik nereden geliyor?' },
        { type: 'p', text: 'Yüzün sabahları daha şiş görünmesi çok sık bir durum. Gece boyunca yatar pozisyonda kalmak, tuzlu yemekler, az uyku ya da alkol, yüzde ödem, yani dokular arasında sıvı birikmesi yapabilir. Bu ödem gün içinde, hareket ettikçe kendiliğinden azalır. Sosyal medyada gösterilen "önce ve sonra" değişikliklerin önemli bir kısmı bu ödemle ilgili.' },
        { type: 'h2', text: 'Gua sha ve masaj' },
        { type: 'p', text: 'Gua sha, düz kenarlı bir taş ya da benzeri bir aletle cildin üzerinden belli yönlerde kaydırılarak yapılan, kökeni geleneksel Çin uygulamalarına dayanan bir masaj yöntemi. Gua sha veya masaj sonrası ödem biraz azalabilir. Yüzünüz kısa süreliğine daha ince ve daha belirgin görünebilir.' },
        { type: 'p', text: 'Soğuk uygulamada da benzer bir geçici etki görebiliyoruz. Soğuk, damarları geçici olarak daraltarak şişliği azaltır. Ama bu, yüzün anatomisinin değiştiği anlamına gelmiyor. Etki, ödem geri geldiğinde kaybolur.' },
        { type: 'h2', text: 'Yüz bantlama' },
        { type: 'p', text: 'Yüz bantlama, cilde, özellikle alın ve göz çevresine özel bantlar yapıştırılarak o bölgedeki mimiklerin kısıtlanması fikrine dayanıyor. Yüz bantlamanın uzun vadede kırışıklıkları önlediğini gösteren güçlü bir kanıt yok. Bantın çıkarılması, özellikle hassas göz çevresinde ciltte tahriş ve kızarıklık yapabilir.' },
        { type: 'h2', text: 'Yüz yogası' },
        { type: 'p', text: 'Yüz yogası, yüz kaslarına yönelik düzenli egzersizlerden oluşuyor. Yüz yogası için veriler oldukça sınırlı. Üstelik yüz kaslarını sürekli çalıştırmanın mimik çizgileri üzerinde nasıl bir etkisi olacağı da ayrı bir tartışma. Çünkü mimik çizgileri zaten büyük ölçüde aynı kasların tekrar tekrar kasılmasıyla oluşuyor.' },
        { type: 'h2', text: 'Kalıcı bir değişiklik için ne değişmeli?' },
        { type: 'p', text: 'Yüzün yaşlanması tek bir katmanda olmuyor. Şu değişikliklerin bir araya gelmesiyle oluşuyor:' },
        {
          type: 'ul',
          items: [
            'Cilt kalitesi: Kolajen ve elastik liflerin azalmasıyla cildin incelmesi ve esnekliğini kaybetmesi',
            'Hacim kaybı: Yüzdeki yağ dokusunun azalması ve yer değiştirmesi',
            'Destek yapılarında gevşeme ve sarkma',
            'Kemik yapısında yaşla birlikte olan değişiklikler',
          ],
        },
        { type: 'p', text: 'Bu değişiklikler masajla, bantla ya da egzersizle geri döndürülebilecek şeyler değil. Kalıcı bir şekillendirme isteniyorsa, hangi katmanda bir sorun olduğu muayene ile belirlenip ona yönelik yöntemler konuşulmalı.' },
        { type: 'h2', text: 'Bu yöntemler zararlı mı?' },
        { type: 'p', text: 'Nazik uygulandığında çoğu kişi için düşük riskli yöntemler. Kendinizi iyi hissettiriyorsa, rahatlatıyorsa uygulamanızda bir sakınca yok. Ancak şunlara dikkat etmek gerekiyor:' },
        {
          type: 'ul',
          items: [
            'Çok bastırarak yapılan gua sha morarma ve ciltte kızarıklık yapabilir.',
            'Aktif akne, egzama ya da tahriş olmuş bir ciltte bu uygulamalar durumu kötüleştirebilir.',
            'Kullanılan taş ya da aletin temiz tutulması gerekir.',
            'Bantların sık ve sert çıkarılması cildi tahriş edebilir.',
          ],
        },
        { type: 'callout', text: 'Sabah aynada gördüğünüz değişiklik gerçek olabilir; ama geçici bir ödem değişikliğiyle kalıcı bir yüz şekillendirmeyi birbirine karıştırmamak lazım.' },
        { type: 'h2', text: 'Sık sorulan sorular' },
        { type: 'p', text: 'Gua sha yüzü inceltir mi? Ödemi azaltarak kısa süreliğine daha ince bir görünüm sağlayabilir. Ama yağ dokusunu ya da yüzün kemik yapısını değiştirmez.' },
        { type: 'p', text: 'Yüz yogası kırışıklıkları giderir mi? Bunu gösteren güçlü bir veri yok. Mimik kaslarının sürekli çalıştırılmasının mimik çizgilerini nasıl etkileyeceği de net değil.' },
        { type: 'p', text: 'Bu yöntemleri bırakırsam yüzüm eskisinden kötü olur mu? Hayır. Etkileri büyük ölçüde geçici olduğu için bıraktığınızda yüzünüz kendi doğal haline döner.' },
      ],
    },
    en: {
      title: 'Face taping, gua sha, face yoga: is the change in the mirror permanent?',
      description:
        'Social media has built up a wide repertoire for shaping the face. What can face taping, gua sha and face yoga do, what can they not do, and what does a lasting change require?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'Social media has given us quite a wide repertoire for shaping the face: face taping, gua sha, face yoga... They should not all be lumped together. We need to look at what each of them does separately.' },
        { type: 'h2', text: 'Where does the change we see in the mirror in the morning come from?' },
        { type: 'p', text: 'It is very common for the face to look puffier in the morning. Lying down all night, salty food, too little sleep or alcohol can cause oedema in the face, meaning fluid collecting between tissues. This swelling decreases on its own during the day as we move around. A large part of the "before and after" changes shown on social media are related to this swelling.' },
        { type: 'h2', text: 'Gua sha and massage' },
        { type: 'p', text: 'Gua sha is a massage method rooted in traditional Chinese practice, in which a flat-edged stone or similar tool is glided over the skin in certain directions. After gua sha or massage, swelling may decrease a little. Your face may look slimmer and more defined for a short while.' },
        { type: 'p', text: 'We can see a similar temporary effect with cold application. Cold reduces swelling by temporarily narrowing blood vessels. But this does not mean the anatomy of the face has changed. The effect disappears when the swelling comes back.' },
        { type: 'h2', text: 'Face taping' },
        { type: 'p', text: 'Face taping is based on the idea of restricting expressions by sticking special tapes onto the skin, especially on the forehead and around the eyes. There is no strong evidence that face taping prevents wrinkles in the long term. Removing the tape can irritate and redden the skin, especially in the delicate area around the eyes.' },
        { type: 'h2', text: 'Face yoga' },
        { type: 'p', text: 'Face yoga consists of regular exercises for the facial muscles. The data on face yoga is quite limited. And what effect constantly working the facial muscles might have on expression lines is a separate discussion, because expression lines are largely formed by the same muscles contracting again and again.' },
        { type: 'h2', text: 'What needs to change for a lasting result?' },
        { type: 'p', text: 'Facial ageing does not happen in a single layer. It results from a combination of changes:' },
        {
          type: 'ul',
          items: [
            'Skin quality: thinning and loss of elasticity as collagen and elastic fibres decrease',
            'Volume loss: reduction and shifting of the fat in the face',
            'Loosening and sagging of the support structures',
            'Age-related changes in bone structure',
          ],
        },
        { type: 'p', text: 'These changes cannot be reversed with massage, tape or exercise. If lasting reshaping is the goal, the layer where the problem lies should be identified through an examination and suitable methods discussed.' },
        { type: 'h2', text: 'Are these methods harmful?' },
        { type: 'p', text: 'When done gently, they are low-risk for most people. If they make you feel good or relaxed, there is nothing wrong with using them. But a few things need attention:' },
        {
          type: 'ul',
          items: [
            'Gua sha done with too much pressure can cause bruising and redness.',
            'On skin with active acne, eczema or irritation, these practices can make things worse.',
            'The stone or tool you use needs to be kept clean.',
            'Frequent, rough removal of tapes can irritate the skin.',
          ],
        },
        { type: 'callout', text: 'The change you see in the mirror in the morning may be real, but a temporary change in swelling should not be confused with permanent facial reshaping.' },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'p', text: 'Does gua sha slim the face? By reducing swelling it can make the face look slimmer for a short time. But it does not change fat tissue or the bone structure of the face.' },
        { type: 'p', text: 'Does face yoga get rid of wrinkles? There is no strong evidence for this. It is also unclear how constantly exercising the expression muscles affects expression lines.' },
        { type: 'p', text: 'If I stop using these methods, will my face look worse than before? No. Because their effects are largely temporary, your face simply returns to its natural state when you stop.' },
      ],
    },
  },
};

export default post;
