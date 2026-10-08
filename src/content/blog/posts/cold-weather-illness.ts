import type { Post } from '../types';

// Kaynak: Scriptler/2.hafta/Soğuk hasta edermi reels.pages
const post: Post = {
  slug: 'does-cold-weather-make-you-sick',
  date: '2026-10-08',
  cover: '/blog/cold-weather.svg',
  shareImage: '/blog/cold-weather.jpg',
  translations: {
    tr: {
      title: 'Soğuk hava insanı hasta eder mi? Burnunuzun savunması',
      description:
        'Grip ya da nezle olmak için önce bir virüsle karşılaşmanız gerekir. Ama soğuk hava tamamen masum değil: burnunuzdaki doğal savunmayı zayıflatabilir.',
      readMinutes: 3,
      body: [
        {
          type: 'p',
          text: '“Soğuk hava insanı hasta etmez.” Bu cümleyi son günlerde oldukça sık duyuyoruz ve aslında temelde doğru. Grip ya da nezle olmak için önce bir virüsle karşılaşmanız gerekir. Yani sadece soğukta kaldınız diye yoktan bir enfeksiyon oluşmaz.',
        },
        {
          type: 'p',
          text: 'Ama soğuk havanın hiçbir etkisi yok demek de tam doğru değil. Çünkü burnumuz virüslere karşı ilk savunma hatlarımızdan biridir.',
        },
        { type: 'h2', text: 'Soğuk, burnun savunmasını nasıl etkiler?' },
        {
          type: 'ul',
          items: [
            'Soluduğumuz soğuk hava burun içindeki sıcaklığı düşürdüğünde, burun hücrelerinin virüslere karşı oluşturduğu doğal savunma yanıtı zayıflayabilir. Çalışmalarda, virüsü yakalayıp etkisizleştirmeye yardımcı olan bazı savunma mekanizmalarının soğukta daha az çalıştığı gösterilmiştir.',
            'Bazı solunum yolu virüsleri, özellikle rinovirüsler, burundaki daha düşük sıcaklıklarda daha rahat çoğalabilir.',
            'Soğuk hava genellikle kuru havadır; bu da burundaki mukus ve silyaların oluşturduğu temizleme sistemini olumsuz etkileyebilir.',
            'Kışın daha fazla kapalı ortamda bulunur ve birbirimizle daha yakın temas ederiz.',
          ],
        },
        {
          type: 'callout',
          text: 'Soğuk sizi doğrudan hasta etmiyor; ama burnunuzdaki savunmayı biraz zayıflatıp virüsün işini kolaylaştırabiliyor.',
        },
        { type: 'h2', text: 'Kısacası' },
        {
          type: 'p',
          text: '“Üşüdüm, o yüzden grip oldum” tam olarak doğru değil; virüs olmadan enfeksiyon olmaz. Ama soğuk hava da tamamen masum değil. Kış aylarında burnunuzu soğuktan korumak, kapalı ortamları havalandırmak ve el hijyenine dikkat etmek bu yüzden işe yarar.',
        },
      ],
    },
    en: {
      title: 'Does cold weather make you sick? How your nose defends you',
      description:
        'You need to meet a virus to catch a cold or the flu. But cold weather is not completely innocent: it can weaken the natural defences inside your nose.',
      readMinutes: 3,
      body: [
        {
          type: 'p',
          text: '“Cold weather doesn’t make you sick.” You hear this a lot, and it is basically true: to catch a cold or the flu, you first need to meet a virus. Being cold does not create an infection out of nothing.',
        },
        {
          type: 'p',
          text: 'But saying cold weather has no effect at all is not quite right either, because the nose is one of our first lines of defence against viruses.',
        },
        { type: 'h2', text: 'How cold affects the nose’s defences' },
        {
          type: 'ul',
          items: [
            'When cold air lowers the temperature inside the nose, the natural antiviral response of nasal cells can weaken. Studies have shown that some defence mechanisms that help trap and neutralise viruses work less well in the cold.',
            'Some respiratory viruses, especially rhinoviruses, multiply more easily at the lower temperatures found in the nose.',
            'Cold air is usually dry air, which can impair the cleaning system formed by mucus and the tiny hairs (cilia) lining the nose.',
            'In winter we spend more time indoors, in closer contact with each other.',
          ],
        },
        {
          type: 'callout',
          text: 'Cold does not make you sick directly, but it can weaken your nose’s defences and make the virus’s job easier.',
        },
        { type: 'h2', text: 'In short' },
        {
          type: 'p',
          text: '“I got cold, so I caught the flu” is not quite accurate — without a virus there is no infection. But cold weather is not entirely innocent either. Keeping your nose warm, airing indoor spaces and good hand hygiene all help during the winter months.',
        },
      ],
    },
  },
};

export default post;
