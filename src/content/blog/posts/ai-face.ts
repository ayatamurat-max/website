import type { Post } from '../types';

// Kaynak: Scriptler/3. hafta/2. gurup.pages (1. AI face)
const post: Post = {
  slug: 'ai-face-rhinoplasty-consultation',
  date: '2026-10-16',
  cover: '/blog/ai-face.svg',
  shareImage: '/blog/ai-face.jpg',
  procedure: { href: '/rinoplasti', icon: 'rhinoplasty' },
  translations: {
    tr: {
      title: 'Yapay zekâ ile hazırlanan "ideal yüz": Hedef mi, cerrahi plan mı?',
      description:
        'Hastalar artık konsültasyona yapay zekâ ile değiştirilmiş kendi fotoğraflarıyla geliyor. Bu görüntüler ne işe yarar, neyi bilemez?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'Artık hastalar bazen başka birinin fotoğrafını değil, yapay zekânın hazırladığı kendi yüzlerini getiriyor. Yakın zamanda İngiltere\'de yayımlanan bir ankette, estetik cerrahların yüzde 15\'i yapay zekâ ile değiştirilmiş kendi fotoğrafıyla konsültasyona gelen hastalar gördüğünü söylüyor.' },
        { type: 'h2', text: 'Başkasının fotoğrafından farkı ne?' },
        { type: 'p', text: 'Bence burada önemli bir fark var. Başkasının fotoğrafına baktığınızda onun başka bir yüz olduğunu biliyorsunuz. Yapay zekâ ise size "Bu sensin, sadece biraz değiştirilmiş halin" hissi veriyor.' },
        { type: 'h2', text: 'Yapay zekânın bilmedikleri' },
        {
          type: 'ul',
          items: [
            'Cilt kalınlığınız',
            'Kıkırdak yapınız',
            'Kemik anatominiz',
            'İyileşme süreciniz',
          ],
        },
        { type: 'p', text: 'Mesela ekranda burnu istediğiniz kadar küçültebilirsiniz. Cerrahide ise o burnun hem yüzle uyumlu olması hem de nefes almaya devam etmesi gerekiyor.' },
        { type: 'h2', text: 'Peki bu görüntüler işe yaramaz mı?' },
        { type: 'p', text: 'Ben bu görüntülere karşı değilim. Hatta hastanın ne istediğini anlamak için faydalı bile olabilirler.' },
        { type: 'callout', text: 'Yapay zekâ görüntüleri bir hedef gösterebilir; ama cerrahi planın kendisi olamaz.' },
      ],
    },
    en: {
      title: 'The AI-generated "ideal face": a goal or a surgical plan?',
      description:
        'Patients now come to consultations with AI-edited photos of their own faces. What are these images useful for, and what can they not know?',
      readMinutes: 3,
      body: [
        { type: 'p', text: 'These days patients sometimes bring not a photo of someone else, but an AI-generated version of their own face. In a survey published recently in the UK, 15 percent of aesthetic surgeons said they had seen patients come to consultations with AI-edited photos of themselves.' },
        { type: 'h2', text: 'How is it different from someone else\'s photo?' },
        { type: 'p', text: 'I think there is an important difference here. When you look at someone else\'s photo, you know it is a different face. AI, on the other hand, gives you the feeling that "this is you, just slightly altered".' },
        { type: 'h2', text: 'What AI does not know' },
        {
          type: 'ul',
          items: [
            'Your skin thickness',
            'Your cartilage structure',
            'Your bone anatomy',
            'How you heal',
          ],
        },
        { type: 'p', text: 'On a screen, for example, you can make the nose as small as you like. In surgery, that nose has to be in harmony with the face and still let you breathe.' },
        { type: 'h2', text: 'So are these images useless?' },
        { type: 'p', text: 'I am not against these images. They can even be helpful in understanding what the patient wants.' },
        { type: 'callout', text: 'AI images can show a goal, but they cannot be the surgical plan itself.' },
      ],
    },
  },
};

export default post;
