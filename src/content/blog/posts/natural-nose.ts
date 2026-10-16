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
        'Rinoplastide beklenti, mümkün olduğunca küçük ve kalkık bir burundan yüzle uyumlu, doğal bir sonuca doğru kayıyor. "Doğal burun" ne demek?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'İyi yapılmış bir rinoplastinin ilk bakışta fark edilmemesi bence kötü bir şey değil. Rinoplastide beklenti de giderek bu tarafa kayıyor.' },
        { type: 'p', text: 'Amerikan Yüz Plastik Cerrahisi Akademisi, 2026\'daki bu eğilimi "Natural Nose Era", yani "doğal burun dönemi" diye tanımlıyor. Yani trend artık mümkün olduğu kadar küçük, mümkün olduğu kadar kalkık bir burun yapmak değil.' },
        { type: 'h2', text: 'Burun tek başına değerlendirilmez' },
        {
          type: 'ul',
          items: [
            'Alınla ilişkisi',
            'Çeneyle ilişkisi',
            'Yüz hatlarıyla uyumu',
            'Ve tabii nefes alma fonksiyonu',
          ],
        },
        { type: 'p', text: 'Aynı burun şekli bir yüzde çok doğal durabilirken, başka bir yüzde ameliyat olduğu hemen belli olabilir.' },
        { type: 'h2', text: 'Kime göre doğal?' },
        { type: 'p', text: 'O yüzden hasta bana "Doğal bir burun istiyorum" dediğinde şunu düşünmek lazım: Kime göre doğal?' },
        { type: 'callout', text: 'Bence iyi bir rinoplasti, yüzü başka birine benzetmekten çok burnu o yüzün içine daha doğru yerleştirmektir.' },
      ],
    },
    en: {
      title: 'The "natural nose" era: natural for whom?',
      description:
        'Expectations in rhinoplasty are shifting away from the smallest, most upturned nose possible towards a natural result in harmony with the face. What does a "natural nose" mean?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'I don\'t think it is a bad thing if a well-done rhinoplasty is not noticed at first glance. Expectations in rhinoplasty are increasingly moving in this direction too.' },
        { type: 'p', text: 'The American Academy of Facial Plastic and Reconstructive Surgery describes this 2026 trend as the "Natural Nose Era". In other words, the trend is no longer to make the nose as small and as upturned as possible.' },
        { type: 'h2', text: 'The nose is not assessed on its own' },
        {
          type: 'ul',
          items: [
            'Its relationship with the forehead',
            'Its relationship with the chin',
            'Its harmony with the facial features',
            'And, of course, breathing function',
          ],
        },
        { type: 'p', text: 'The same nose shape can look completely natural on one face, while on another face it may be obvious straight away that it has been operated on.' },
        { type: 'h2', text: 'Natural for whom?' },
        { type: 'p', text: 'So when a patient tells me "I want a natural nose", the question to ask is: natural for whom?' },
        { type: 'callout', text: 'To me, a good rhinoplasty is less about making a face resemble someone else and more about placing the nose correctly within that face.' },
      ],
    },
  },
};

export default post;
