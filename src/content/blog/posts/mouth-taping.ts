import type { Post } from '../types';

// Kaynak: Scriptler/3. hafta/1. gurup reels scriptleri.pages (1. Gece ağzı bantlamak)
const post: Post = {
  slug: 'mouth-taping-sleep',
  date: '2026-10-16',
  cover: '/blog/mouth-taping.svg',
  shareImage: '/blog/mouth-taping.jpg',
  procedure: { href: '/septoplasti', icon: 'septoplasty' },
  translations: {
    tr: {
      title: 'Gece ağzı bantlamak: Burundan nefes almanın kısa yolu mu?',
      description:
        'Gece ağzı bantlamak son zamanlarda popüler. Ama burundan rahat nefes alamıyorsanız önce bunun nedenine bakmak gerekiyor. Bilimsel veriler ne söylüyor?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'Gece ağzını bantlamak son zamanlarda bayağı popüler. Mantık şu: ağız kapanınca burundan nefes alınacak ve daha iyi uyunacak.' },
        { type: 'p', text: 'Burundan nefes almak tabii ki önemli. Ama önce şu soruyu sormak gerekiyor: Burnunuz neden açık değil?' },
        { type: 'h2', text: 'Ağız açık uyumanın arkasında ne olabilir?' },
        {
          type: 'ul',
          items: [
            'Septum deviasyonu (burun orta bölmesinde eğrilik)',
            'Konkaların (burun etlerinin) büyük olması',
            'Alerjik rinit',
            'Uykuda solunumla ilgili başka bir problem',
          ],
        },
        { type: 'h2', text: 'Bilimsel veriler ne söylüyor?' },
        { type: 'p', text: '2025\'te yayımlanan bir sistematik derlemede ağız bantlamayla ilgili 10 çalışma ve toplam 213 kişi değerlendirilmiş. Bazı küçük çalışmalarda fayda görülmüş; ama çalışmaların çoğu burun tıkanıklığı olan hastaları zaten dışlamış.' },
        { type: 'p', text: 'Yani elimizde herkese "gece ağzınızı bantlayın" diyebileceğimiz bir veri yok.' },
        { type: 'callout', text: 'Ağzınız açık uyuyorsanız, ağzınızı kapatmak sebebi ortadan kaldırmıyor. Önce neden burundan rahat nefes alamadığınızı bulmak gerekiyor.' },
      ],
    },
    en: {
      title: 'Mouth taping at night: a shortcut to nasal breathing?',
      description:
        'Taping your mouth shut at night has become popular. But if you cannot breathe comfortably through your nose, the first step is to find out why. What does the evidence say?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'Taping your mouth at night has become quite popular lately. The idea is simple: with the mouth closed, you breathe through your nose and sleep better.' },
        { type: 'p', text: 'Breathing through the nose is of course important. But the first question should be: why isn\'t your nose open?' },
        { type: 'h2', text: 'What may be behind mouth breathing at night?' },
        {
          type: 'ul',
          items: [
            'A deviated septum (a bend in the wall dividing the nose)',
            'Enlarged turbinates',
            'Allergic rhinitis',
            'Another breathing problem during sleep',
          ],
        },
        { type: 'h2', text: 'What does the evidence say?' },
        { type: 'p', text: 'A systematic review published in 2025 looked at 10 studies on mouth taping, with 213 people in total. Some small studies showed a benefit, but most of them had already excluded patients with nasal obstruction.' },
        { type: 'p', text: 'In other words, there is no evidence that would allow us to tell everyone to "tape your mouth at night".' },
        { type: 'callout', text: 'If you sleep with your mouth open, closing it does not remove the cause. The first step is to find out why you cannot breathe comfortably through your nose.' },
      ],
    },
  },
};

export default post;
