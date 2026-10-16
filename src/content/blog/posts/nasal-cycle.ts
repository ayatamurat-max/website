import type { Post } from '../types';

// Kaynak: Scriptler/3. hafta/1. gurup reels scriptleri.pages (4. Burnum neden sırayla tıkanıyor?)
const post: Post = {
  slug: 'why-one-nostril-gets-blocked',
  date: '2026-10-16',
  cover: '/blog/nasal-cycle.svg',
  shareImage: '/blog/nasal-cycle.jpg',
  procedure: { href: '/septoplasti', icon: 'septoplasty' },
  translations: {
    tr: {
      title: 'Burnum neden sırayla tıkanıyor? Nazal siklus',
      description:
        'Bir burun deliğinizin birkaç saat daha kapalı olması her zaman hastalık değil. Burnun doğal döngüsü olan nazal siklus nedir, ne zaman başka bir nedenden şüphelenmek gerekir?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'Bir burun deliğinizin birkaç saat daha kapalı olması her zaman hastalık değil. Bunun bir adı var: nazal siklus, yani burnumuzun doğal döngüsü.' },
        { type: 'h2', text: 'Nasıl oluyor?' },
        { type: 'p', text: 'Burnumuzda konka dediğimiz, halk arasında burun eti denen yapılar var. Bunların içinde çok zengin bir damar ağı bulunuyor.' },
        {
          type: 'steps',
          items: [
            { title: 'Bir taraf şişer', text: 'Günün belli dönemlerinde bir taraftaki konkalar biraz şişiyor ve o taraftan geçen hava azalıyor.' },
            { title: 'Diğer taraf açılır', text: 'Aynı sırada diğer taraf biraz daha açılıyor.' },
            { title: 'Yer değiştirirler', text: 'Bir süre sonra da iki taraf yer değiştiriyor.' },
          ],
        },
        { type: 'p', text: 'Bu süreç büyük ölçüde otonom sinir sistemi tarafından kontrol ediliyor ve sağlıklı insanlarda da görülüyor. Hatta yan yattığınızda altta kalan tarafta tıkanıklığı daha fazla hissedebilirsiniz.' },
        { type: 'h2', text: 'Neden var?' },
        { type: 'p', text: 'Nazal siklusun tam olarak neden var olduğunu bilmiyoruz. Ama bir görüşe göre, bir taraf daha fazla hava geçirirken diğer tarafın mukozası nemini koruyor ve temizleme işine devam ediyor. Koku algısına katkısı olabileceğine dair teoriler de var.' },
        { type: 'h2', text: 'Ne zaman sadece nazal siklus değildir?' },
        {
          type: 'ul',
          items: [
            'Tıkanıklık sürekli aynı taraftaysa',
            'Çok belirginse',
            'Gün boyunca sizi rahatsız ediyorsa',
          ],
        },
        { type: 'callout', text: 'Bu durumlarda tıkanıklığı sadece nazal siklus deyip geçmiyoruz; septum deviasyonu, konka büyümesi, alerji ya da başka bir nedeni araştırmak gerekir.' },
      ],
    },
    en: {
      title: 'Why does one side of my nose get blocked, then the other? The nasal cycle',
      description:
        'One nostril being more blocked for a few hours is not always a disease. What is the nasal cycle, and when should another cause be suspected?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'One of your nostrils being more blocked for a few hours is not always a sign of disease. It has a name: the nasal cycle, the natural rhythm of the nose.' },
        { type: 'h2', text: 'How does it work?' },
        { type: 'p', text: 'Inside the nose there are structures called turbinates. They contain a very rich network of blood vessels.' },
        {
          type: 'steps',
          items: [
            { title: 'One side swells', text: 'At certain times of the day the turbinates on one side swell slightly and less air passes through that side.' },
            { title: 'The other side opens', text: 'At the same time the other side opens up a little more.' },
            { title: 'They switch', text: 'After a while, the two sides swap roles.' },
          ],
        },
        { type: 'p', text: 'This process is largely controlled by the autonomic nervous system and is seen in healthy people too. When you lie on your side, you may even feel more blockage on the lower side.' },
        { type: 'h2', text: 'Why does it exist?' },
        { type: 'p', text: 'We don\'t know exactly why the nasal cycle exists. According to one view, while one side carries more air, the lining of the other side keeps its moisture and continues its cleaning work. There are also theories that it may contribute to the sense of smell.' },
        { type: 'h2', text: 'When is it not just the nasal cycle?' },
        {
          type: 'ul',
          items: [
            'The blockage is always on the same side',
            'It is very pronounced',
            'It bothers you throughout the day',
          ],
        },
        { type: 'callout', text: 'In these cases we don\'t simply put it down to the nasal cycle; a deviated septum, enlarged turbinates, allergy or another cause should be investigated.' },
      ],
    },
  },
};

export default post;
