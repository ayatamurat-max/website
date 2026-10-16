import type { Post } from '../types';

// Kaynak: Scriptler/3. hafta/1. gurup reels scriptleri.pages (2. Burun yıkarken hangi suyu kullanmalıyız?)
const post: Post = {
  slug: 'which-water-for-nasal-rinse',
  date: '2026-10-16',
  cover: '/blog/nasal-rinse-water.svg',
  shareImage: '/blog/nasal-rinse-water.jpg',
  translations: {
    tr: {
      title: 'Burun yıkarken hangi suyu kullanmalıyız?',
      description:
        'İçebildiğiniz bir suyu burnunuza vermek her zaman güvenli değil. Burun yıkamasında hangi su kullanılmalı, musluk suyu ne zaman uygun olur?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'İçebildiğiniz bir suyu burnunuza vermek her zaman güvenli değil. Burun yıkaması yapıyorsanız kullandığınız su önemli.' },
        { type: 'h2', text: 'İçme suyu neden yeterli değil?' },
        { type: 'p', text: 'İçme suyunda bulunabilen bazı mikroorganizmalar mideden geçtiğinde sorun yaratmayabilir; ama burundan verildiğinde aynı şey geçerli değil. Bu nedenle burun yıkamada musluktan aldığınız suyu doğrudan kullanmıyoruz.' },
        { type: 'h2', text: 'Hangi su kullanılabilir?' },
        {
          type: 'ul',
          items: [
            'Distile su',
            'Steril su',
            'Musluk suyu kullanılacaksa: önce kaynatılmış, sonra soğutulmuş su',
          ],
        },
        { type: 'p', text: 'Bununla ilişkili ciddi enfeksiyonlar çok nadir, ama bildirilmiş vakalar var.' },
        { type: 'h2', text: 'Şişeyi de unutmayın' },
        { type: 'p', text: 'Kullandığınız şişeyi veya yıkama cihazını da temiz tutmak gerekiyor.' },
        { type: 'callout', text: 'Burun yıkaması oldukça basit bir uygulama; ama içine koyduğumuz su konusunda biraz dikkat etmek lazım.' },
      ],
    },
    en: {
      title: 'Which water should you use for nasal rinsing?',
      description:
        'Water that is safe to drink is not always safe to put into your nose. Which water should you use for a nasal rinse, and when is tap water acceptable?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'Water that you can drink is not always safe to put into your nose. If you rinse your nose, the water you use matters.' },
        { type: 'h2', text: 'Why drinking water is not enough' },
        { type: 'p', text: 'Some microorganisms that can be found in drinking water may cause no problems when they pass through the stomach, but the same is not true when they are introduced through the nose. That is why we do not use tap water directly for nasal rinsing.' },
        { type: 'h2', text: 'Which water can you use?' },
        {
          type: 'ul',
          items: [
            'Distilled water',
            'Sterile water',
            'If tap water is used: water that has been boiled first and then cooled',
          ],
        },
        { type: 'p', text: 'Serious infections linked to this are very rare, but cases have been reported.' },
        { type: 'h2', text: 'Don\'t forget the bottle' },
        { type: 'p', text: 'The bottle or rinsing device you use also needs to be kept clean.' },
        { type: 'callout', text: 'Nasal rinsing is a very simple practice, but we need to be a little careful about the water we put in it.' },
      ],
    },
  },
};

export default post;
