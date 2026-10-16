import type { Post } from '../types';

// Kaynak: Scriptler/3. hafta/2. gurup.pages (3. Preventative Botox)
const post: Post = {
  slug: 'preventative-botox-age',
  date: '2026-10-16',
  cover: '/blog/preventative-botox.svg',
  shareImage: '/blog/preventative-botox.jpg',
  procedure: { href: '/botoks', icon: 'medical' },
  translations: {
    tr: {
      title: 'Botoksa kaç yaşında başlanmalı? "Önleyici botoks" hakkında',
      description:
        'Botoksa başlamak için belirlenmiş bir yaş yok. "Önleyici botoks" yaklaşımının mantığı nedir, kimde anlamlı olabilir?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'Botoksa başlamak için belirlenmiş bir yaş yok. "25\'ten sonra başlanmalı", "30\'u geçmeden yaptırmak lazım" gibi sözler tıbbi sınırlar değil.' },
        { type: 'h2', text: 'Önleyici botoksun mantığı' },
        { type: 'p', text: '"Preventative Botox", yani önleyici botoks denilen yaklaşımın mantığı şu: Bazı çizgiler, aynı mimik hareketinin yıllarca tekrarlanmasıyla zaman içinde cilde yerleşiyor. Botulinum toksin de o kasın hareketini geçici olarak azaltıyor.' },
        { type: 'p', text: 'Dolayısıyla çok güçlü mimikleri olan ve çizgileri artık istirahatte de kalmaya başlayan bir hastada erken uygulamanın bir mantığı olabilir.' },
        { type: 'h2', text: 'Ama herkes için değil' },
        { type: 'p', text: 'Bu, 20\'li yaşlara gelen herkesin botoks yaptırması gerekiyor demek değil. Çünkü yüz yaşlanmasını sadece mimikler belirlemiyor:' },
        {
          type: 'ul',
          items: [
            'Genetik',
            'Güneş',
            'Cilt yapısı',
            'Hacim kaybı',
            'Ve daha birçok faktör',
          ],
        },
        { type: 'callout', text: 'Yaşa bakıp "Botoksa başlamanın zamanı geldi" demektense, yüzün ne yaptığına bakmayı daha anlamlı buluyorum.' },
      ],
    },
    en: {
      title: 'At what age should you start Botox? About "preventative Botox"',
      description:
        'There is no set age to start Botox. What is the logic behind "preventative Botox", and for whom might it make sense?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'There is no set age to start Botox. Sayings like "you should start after 25" or "you need it before you turn 30" are not medical limits.' },
        { type: 'h2', text: 'The logic of preventative Botox' },
        { type: 'p', text: 'The idea behind what is called "preventative Botox" is this: some lines become etched into the skin over time as the same facial expression is repeated for years. Botulinum toxin temporarily reduces the movement of that muscle.' },
        { type: 'p', text: 'So in a patient with very strong facial expressions whose lines are starting to remain even at rest, early treatment may make sense.' },
        { type: 'h2', text: 'But not for everyone' },
        { type: 'p', text: 'This does not mean everyone who reaches their twenties needs Botox, because facial ageing is not determined by expressions alone:' },
        {
          type: 'ul',
          items: [
            'Genetics',
            'Sun exposure',
            'Skin type',
            'Volume loss',
            'And many other factors',
          ],
        },
        { type: 'callout', text: 'Rather than looking at someone\'s age and saying "it is time to start Botox", I find it more meaningful to look at what the face is doing.' },
      ],
    },
  },
};

export default post;
