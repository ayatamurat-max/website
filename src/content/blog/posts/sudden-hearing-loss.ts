import type { Post } from '../types';

// Kaynak: Scriptler/3. hafta/1. gurup reels scriptleri.pages (3. Ani işitme kaybı)
const post: Post = {
  slug: 'sudden-hearing-loss',
  date: '2026-10-16',
  cover: '/blog/sudden-hearing-loss.svg',
  shareImage: '/blog/sudden-hearing-loss.jpg',
  translations: {
    tr: {
      title: 'Ani işitme kaybı: Kulağınız pamukla tıkanmış gibiyse beklemeyin',
      description:
        'Bir sabah bir kulağınız pamukla tıkanmış gibi uyandıysanız bunu her zaman kulak kiri sanmayın. Ani işitme kaybında zaman neden önemli?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'Bir sabah uyandınız ve bir kulağınız pamukla tıkanmış gibi. Bunu her zaman kulak kiri sanmayın; çünkü ani işitme kaybı bazen tam olarak böyle hissediliyor.' },
        { type: 'h2', text: 'Her zaman "birden duyamıyorum" diye başlamıyor' },
        { type: 'p', text: 'Hasta her zaman "birden işitmem gitti" diye gelmiyor. Şu belirtiler görülebiliyor:' },
        {
          type: 'ul',
          items: [
            'Kulakta dolgunluk ya da tıkanıklık hissi',
            'Bazen çınlama',
            'Hatta baş dönmesi',
          ],
        },
        { type: 'h2', text: 'İlk yapılması gereken: nedeni bulmak' },
        {
          type: 'steps',
          items: [
            { title: 'İletim sorunu mu?', text: 'Kulak kiri gibi, sesin iletilmesini engelleyen bir problem olabilir.' },
            { title: 'İç kulak kaynaklı mı?', text: 'Ya da iç kulaktan kaynaklanan, sensörinöral bir işitme kaybı olabilir. Bu ikinci durumda zaman önemli.' },
          ],
        },
        { type: 'h2', text: 'Zaman neden önemli?' },
        { type: 'p', text: 'Güncel kılavuzlar, işitme testinin mümkün olduğu kadar erken yapılmasını ve tedavi düşünülüyorsa erken dönemde başlanmasını özellikle vurguluyor. Özellikle ilk 72 saat çok önemli.' },
        { type: 'callout', text: 'Bir kulağınızda saatler ya da birkaç gün içinde gelişen belirgin bir işitme azalması varsa, "biraz bekleyeyim, açılır" demek yerine gecikmeden değerlendirilmesi daha doğru.' },
      ],
    },
    en: {
      title: 'Sudden hearing loss: if your ear feels blocked with cotton, don\'t wait',
      description:
        'If you wake up one morning with one ear feeling as if it were plugged with cotton, don\'t always assume it is earwax. Why does time matter in sudden hearing loss?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'You wake up one morning and one of your ears feels as if it were plugged with cotton. Don\'t always assume it is earwax, because sudden hearing loss sometimes feels exactly like this.' },
        { type: 'h2', text: 'It doesn\'t always start with "I suddenly can\'t hear"' },
        { type: 'p', text: 'Patients don\'t always come in saying their hearing suddenly went. These symptoms may also be present:' },
        {
          type: 'ul',
          items: [
            'A feeling of fullness or blockage in the ear',
            'Sometimes ringing in the ear (tinnitus)',
            'Even dizziness',
          ],
        },
        { type: 'h2', text: 'The first step: finding the cause' },
        {
          type: 'steps',
          items: [
            { title: 'Is it a conduction problem?', text: 'Something like earwax may be blocking sound from being transmitted.' },
            { title: 'Does it come from the inner ear?', text: 'Or it may be a sensorineural hearing loss originating in the inner ear. In this second case, time matters.' },
          ],
        },
        { type: 'h2', text: 'Why time matters' },
        { type: 'p', text: 'Current guidelines specifically stress that a hearing test should be done as early as possible and that, if treatment is considered, it should be started early. The first 72 hours are especially important.' },
        { type: 'callout', text: 'If you notice a clear drop in hearing in one ear that develops over hours or a few days, it is better to have it assessed without delay rather than thinking "I\'ll wait, it will clear up".' },
      ],
    },
  },
};

export default post;
