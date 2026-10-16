import type { Post } from '../types';

// Kaynak: Scriptler/3. hafta/2. gurup.pages (4. Face taping — Gua sha — Face yoga)
const post: Post = {
  slug: 'face-taping-gua-sha-face-yoga',
  date: '2026-10-16',
  cover: '/blog/face-taping.svg',
  shareImage: '/blog/face-taping.jpg',
  procedure: { href: '/ameliyatsiz-yuz-genclestirme', icon: 'rejuvenation' },
  translations: {
    tr: {
      title: 'Yüz bantlama, gua sha, yüz yogası: Aynadaki değişiklik kalıcı mı?',
      description:
        'Sosyal medyada yüzü şekillendirmek için geniş bir repertuvar oluştu. Yüz bantlama, gua sha ve yüz yogası ne yapar, ne yapamaz?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'Sosyal medyada yüzü şekillendirmek için bayağı geniş bir repertuvarımız oluştu: yüz bantlama (face taping), gua sha, yüz yogası (face yoga)... Bunların hepsini aynı sepete koymamak lazım.' },
        { type: 'h2', text: 'Gua sha ve masaj' },
        { type: 'p', text: 'Gua sha veya masaj sonrası ödem biraz azalabilir. Yüzünüz kısa süreliğine daha ince ve daha belirgin görünebilir. Soğuk uygulamada da benzer bir geçici etki görebiliyoruz. Ama bu, yüzün anatomisinin değiştiği anlamına gelmiyor.' },
        { type: 'h2', text: 'Yüz bantlama' },
        { type: 'p', text: 'Yüz bantlamanın uzun vadede kırışıklıkları önlediğini gösteren güçlü bir kanıt yok.' },
        { type: 'h2', text: 'Yüz yogası' },
        { type: 'p', text: 'Yüz yogası için veriler oldukça sınırlı. Üstelik yüz kaslarını sürekli çalıştırmanın mimik çizgileri üzerinde nasıl bir etkisi olacağı da ayrı bir tartışma.' },
        { type: 'callout', text: 'Sabah aynada gördüğünüz değişiklik gerçek olabilir; ama geçici bir ödem değişikliğiyle kalıcı bir yüz şekillendirmeyi birbirine karıştırmamak lazım.' },
      ],
    },
    en: {
      title: 'Face taping, gua sha, face yoga: is the change in the mirror permanent?',
      description:
        'Social media has built up a wide repertoire for shaping the face. What can face taping, gua sha and face yoga do, and what can they not do?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'Social media has given us quite a wide repertoire for shaping the face: face taping, gua sha, face yoga... They should not all be lumped together.' },
        { type: 'h2', text: 'Gua sha and massage' },
        { type: 'p', text: 'After gua sha or massage, swelling may decrease a little. Your face may look slimmer and more defined for a short while. We can see a similar temporary effect with cold application. But this does not mean the anatomy of the face has changed.' },
        { type: 'h2', text: 'Face taping' },
        { type: 'p', text: 'There is no strong evidence that face taping prevents wrinkles in the long term.' },
        { type: 'h2', text: 'Face yoga' },
        { type: 'p', text: 'The data on face yoga is quite limited. And what effect constantly working the facial muscles might have on expression lines is a separate discussion.' },
        { type: 'callout', text: 'The change you see in the mirror in the morning may be real, but a temporary change in swelling should not be confused with permanent facial reshaping.' },
      ],
    },
  },
};

export default post;
