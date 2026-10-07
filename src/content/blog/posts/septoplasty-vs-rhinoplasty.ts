import type { Post } from '../types';

const post: Post = {
  slug: 'septoplasty-vs-rhinoplasty',
  date: '2026-10-07',
  cover: '/blog/septoplasty-vs-rhinoplasty.svg',
  shareImage: '/blog/septoplasty-vs-rhinoplasty.jpg',
  procedure: { href: '/septoplasti', icon: 'septoplasty' },
  translations: {
    en: {
      title: 'Septoplasty or rhinoplasty? Understanding the difference',
      description:
        'One improves breathing, the other changes the shape of the nose, and sometimes both are needed. An ENT surgeon explains how septoplasty and rhinoplasty differ.',
      readMinutes: 5,
      body: [
        {
          type: 'p',
          text: 'Patients often use the words septoplasty and rhinoplasty as if they meant the same thing. They are related, and they are sometimes performed together, but they have different goals. Understanding the difference helps you ask the right questions about your own nose.',
        },
        { type: 'h2', text: 'Septoplasty: for breathing' },
        {
          type: 'p',
          text: 'The septum is the wall of cartilage and bone that divides the inside of the nose into two sides. When it is bent, it can narrow one or both airways. Septoplasty straightens the septum through the nostrils. It does not change how your nose looks from the outside, and there are no visible scars.',
        },
        {
          type: 'ul',
          items: [
            'Goal: to improve airflow through the nose.',
            'Typical signs: a blocked nose on one or both sides, mouth breathing, snoring or poor sleep.',
            'In my practice: general anaesthesia, about one hour, a day-case procedure. The packing is usually removed around day 3, and international patients usually need a 3 to 4 day stay.',
          ],
        },
        { type: 'h2', text: 'Rhinoplasty: for shape, and function' },
        {
          type: 'p',
          text: 'Rhinoplasty changes the outer shape of the nose: the bridge, the tip, the width or the overall profile. As an ENT surgeon, I never plan the shape in isolation. Making a nose smaller or changing its structure also affects how air moves through it, so breathing is evaluated as part of every rhinoplasty plan.',
        },
        {
          type: 'ul',
          items: [
            'Goal: a natural shape in harmony with your face, without compromising breathing.',
            'In my practice: mostly the open technique with piezo instruments, and the closed technique in selected cases.',
            'International patients usually plan a 7-day stay, when the splint is removed.',
          ],
        },
        { type: 'h2', text: 'When both are needed: septorhinoplasty' },
        {
          type: 'p',
          text: 'Many patients who want a change in shape also have a deviated septum, sometimes without being aware of it. In these cases, both can be corrected in a single operation, called septorhinoplasty. This means one anaesthesia, one recovery period and one trip.',
        },
        {
          type: 'callout',
          text: 'A good question to ask any surgeon: “Will you evaluate my breathing as well as the shape of my nose?”',
        },
        { type: 'h2', text: 'How to know which one you need' },
        {
          type: 'steps',
          items: [
            { title: 'Describe your concerns', text: 'Is it mainly breathing, mainly appearance, or both?' },
            { title: 'Have a full examination', text: 'The septum, turbinates, nasal valves and the outer structure of the nose are assessed together.' },
            { title: 'Agree on a plan', text: 'Only then is the right procedure, or combination, chosen.' },
          ],
        },
        {
          type: 'p',
          text: 'If you are unsure which procedure is right for you, an online video consultation is a good place to start. We can talk through your symptoms and goals before any decision is made.',
        },
      ],
    },
    tr: {
      title: 'Septoplasti mi, rinoplasti mi? Aradaki fark',
      description:
        'Biri nefesi düzeltir, diğeri burnun şeklini değiştirir; bazen ikisi birden gerekir. Bir KBB uzmanı septoplasti ile rinoplasti arasındaki farkı anlatıyor.',
      readMinutes: 5,
      body: [
        {
          type: 'p',
          text: 'Hastalar septoplasti ve rinoplasti kelimelerini çoğu zaman aynı anlamda kullanır. Birbiriyle ilişkilidirler ve bazen birlikte yapılırlar, ama hedefleri farklıdır. Farkı bilmek, kendi burnunuz için doğru soruları sormanıza yardımcı olur.',
        },
        { type: 'h2', text: 'Septoplasti: nefes için' },
        {
          type: 'p',
          text: 'Septum, burnun içini iki tarafa ayıran kıkırdak ve kemikten oluşan duvardır. Eğri olduğunda bir veya iki hava yolunu daraltabilir. Septoplasti, septumu burun deliklerinden girerek düzeltir. Burnun dışarıdan görünüşünü değiştirmez ve görünür iz bırakmaz.',
        },
        {
          type: 'ul',
          items: [
            'Amaç: burundan hava akışını iyileştirmek.',
            'Sık görülen belirtiler: bir veya iki tarafta burun tıkanıklığı, ağızdan nefes alma, horlama veya kötü uyku.',
            'Uygulamamda: genel anestezi, yaklaşık bir saat, günübirlik. Tampon genellikle 3. gün alınır; yurt dışından gelen hastalar için 3–4 gün kalış genellikle yeterlidir.',
          ],
        },
        { type: 'h2', text: 'Rinoplasti: şekil ve fonksiyon için' },
        {
          type: 'p',
          text: 'Rinoplasti burnun dış şeklini değiştirir: burun sırtı, burun ucu, genişlik veya genel profil. Bir KBB uzmanı olarak şekli hiçbir zaman tek başına planlamam. Burnu küçültmek veya yapısını değiştirmek havanın burundan nasıl geçtiğini de etkiler; bu yüzden her rinoplasti planında nefes de değerlendirilir.',
        },
        {
          type: 'ul',
          items: [
            'Amaç: nefesten ödün vermeden, yüzünüzle uyumlu doğal bir şekil.',
            'Uygulamamda: çoğunlukla açık teknik ve piezo aletler, seçilmiş vakalarda kapalı teknik.',
            'Yurt dışından gelen hastalar genellikle atelin çıkarıldığı 7. güne kadar kalır.',
          ],
        },
        { type: 'h2', text: 'İkisi birden gerektiğinde: septorinoplasti' },
        {
          type: 'p',
          text: 'Şekil değişikliği isteyen pek çok hastada, bazen farkında olmadan, septum eğriliği de bulunur. Bu durumda ikisi tek ameliyatta düzeltilebilir; buna septorinoplasti denir. Yani tek anestezi, tek iyileşme süreci ve tek seyahat.',
        },
        {
          type: 'callout',
          text: 'Her cerraha sorulabilecek iyi bir soru: “Burnumun şeklinin yanında nefesimi de değerlendirecek misiniz?”',
        },
        { type: 'h2', text: 'Hangisine ihtiyacınız olduğunu nasıl anlarsınız?' },
        {
          type: 'steps',
          items: [
            { title: 'Şikâyetinizi anlatın', text: 'Asıl sorun nefes mi, görünüm mü, yoksa ikisi birden mi?' },
            { title: 'Tam bir muayene olun', text: 'Septum, konkalar, burun valvleri ve burnun dış yapısı birlikte değerlendirilir.' },
            { title: 'Plan üzerinde anlaşın', text: 'Doğru işlem ya da kombinasyon ancak bundan sonra seçilir.' },
          ],
        },
        {
          type: 'p',
          text: 'Hangi işlemin size uygun olduğundan emin değilseniz, online görüntülü ön görüşme iyi bir başlangıçtır. Herhangi bir karar vermeden önce şikâyetlerinizi ve beklentilerinizi birlikte konuşabiliriz.',
        },
      ],
    },
  },
};

export default post;
