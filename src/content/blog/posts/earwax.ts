import type { Post } from '../types';

// Kaynak: Scriptler/2.hafta/buşon reels.pages
const post: Post = {
  slug: 'earwax-cotton-swabs',
  date: '2026-10-08',
  cover: '/blog/earwax.svg',
  shareImage: '/blog/earwax.jpg',
  translations: {
    tr: {
      title: 'Kulak kiri temizlenmeli mi? Pamuklu çubuk hakkında bilmeniz gerekenler',
      description:
        'Kulak kiri (serumen) temizlenmesi gereken bir kir değil, koruyucu bir salgıdır. Pamuklu çubuk çoğu zaman kiri çıkarmaz, daha da içeri iter. Ne zaman temizlenmesi gerekir?',
      readMinutes: 3,
      body: [
        {
          type: 'p',
          text: 'Kulak kiri aslında temizlenmesi gereken bir kir değil. Tıbbi adıyla serumen, kulağın kendi ürettiği koruyucu bir salgıdır.',
        },
        { type: 'h2', text: 'Kulak kirinin görevleri' },
        {
          type: 'ul',
          items: [
            'Kulak kanalının cildini nemli tutar.',
            'Toz ve yabancı maddeleri yakalar.',
            'Mikroplara karşı doğal savunmaya katkı sağlar.',
          ],
        },
        { type: 'h2', text: 'Kulak kendini temizler' },
        {
          type: 'p',
          text: 'Kulak kanalındaki cilt yavaş yavaş dışarı doğru hareket eder. Çene hareketlerimiz de buna yardımcı olur ve serumen zamanla kendiliğinden dışarı taşınır.',
        },
        { type: 'h2', text: 'Pamuklu çubuk neden sorun olabilir?' },
        {
          type: 'p',
          text: 'Pamuklu çubuğu içeri sokup kulağımızı temizlediğimizi düşünürüz. Oysa çoğu zaman yaptığımız şey kiri çıkarmak değil, daha da içeri itmektir. Bazen öyle bir noktaya gelir ki kulak kanalı tamamen tıkanır ve işitme azalabilir. Buna halk arasında buşon diyoruz.',
        },
        {
          type: 'callout',
          text: 'Sağlıklı bir kulağın içine her gün pamuklu çubuk sokmak temizlik değil. Bazen sorunun kendisi olabiliyor.',
        },
        { type: 'h2', text: 'Ne zaman temizlenmeli?' },
        {
          type: 'p',
          text: 'Kulağın içinde gördüğünüz her serumenin temizlenmesi gerekmez. Tıkanıklık, işitme azalması ya da başka bir şikâyete yol açıyorsa, o zaman muayenede uygun yöntemle temizliyoruz. Kulak dışında kalan kısmı ise duş sonrası bir havluyla silmek genellikle yeterlidir.',
        },
      ],
    },
    en: {
      title: 'Should you clean your earwax? What to know about cotton swabs',
      description:
        'Earwax is not dirt but a protective secretion. Cotton swabs often push it deeper instead of removing it. When does earwax actually need to be removed?',
      readMinutes: 3,
      body: [
        {
          type: 'p',
          text: 'Earwax is not really dirt that needs cleaning. Its medical name is cerumen, and it is a protective secretion produced by the ear itself.',
        },
        { type: 'h2', text: 'What earwax does' },
        {
          type: 'ul',
          items: [
            'It keeps the skin of the ear canal moisturised.',
            'It traps dust and foreign particles.',
            'It contributes to the natural defence against germs.',
          ],
        },
        { type: 'h2', text: 'Your ear cleans itself' },
        {
          type: 'p',
          text: 'The skin of the ear canal slowly migrates outwards, helped by jaw movements, and earwax is gradually carried out on its own.',
        },
        { type: 'h2', text: 'Why cotton swabs can be a problem' },
        {
          type: 'p',
          text: 'We often think we are cleaning our ears with a cotton swab, but most of the time we are pushing the wax deeper rather than removing it. Sometimes the canal becomes completely blocked and hearing can be reduced.',
        },
        {
          type: 'callout',
          text: 'Putting a cotton swab into a healthy ear every day is not cleaning. Sometimes it is the cause of the problem.',
        },
        { type: 'h2', text: 'When should earwax be removed?' },
        {
          type: 'p',
          text: 'Not every bit of earwax you see needs to be removed. If it causes blockage, reduced hearing or other symptoms, it is removed during an examination with an appropriate method. Wiping the outer ear with a towel after a shower is usually enough.',
        },
      ],
    },
  },
};

export default post;
