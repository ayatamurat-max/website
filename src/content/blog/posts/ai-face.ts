import type { Post } from '../types';
import ru from '../i18n/ai-face/ru';
import de from '../i18n/ai-face/de';
import fr from '../i18n/ai-face/fr';
import bg from '../i18n/ai-face/bg';

// Kaynak: Scriptler/3. hafta/2. gurup.pages (1. AI face)
const post: Post = {
  slug: 'ai-face-rhinoplasty-consultation',
  date: '2026-10-16',
  cover: '/blog/ai-face.svg',
  shareImage: '/blog/ai-face.jpg',
  procedure: { href: '/rinoplasti', icon: 'rhinoplasty' },
  translations: {
    ru,
    de,
    fr,
    bg,
    tr: {
      title: 'Yapay zekâ ile hazırlanan "ideal yüz": Hedef mi, cerrahi plan mı?',
      description:
        'Hastalar artık konsültasyona yapay zekâ ile değiştirilmiş kendi fotoğraflarıyla geliyor. Bu görüntüler ne işe yarar, neyi bilemez ve konsültasyonda nasıl kullanılmalı?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'Artık hastalar bazen başka birinin fotoğrafını değil, yapay zekânın hazırladığı kendi yüzlerini getiriyor. Yakın zamanda İngiltere\'de yayımlanan bir ankette, estetik cerrahların yüzde 15\'i yapay zekâ ile değiştirilmiş kendi fotoğrafıyla konsültasyona gelen hastalar gördüğünü söylüyor.' },
        { type: 'p', text: 'Bu çok anlaşılır bir eğilim. Birkaç saniyede, kendi yüzünüzün "daha düzgün burunlu", "daha belirgin çeneli" bir halini görebiliyorsunuz. Ama bu görüntülerin ne söylediğini ve ne söyleyemediğini iyi ayırmak gerekiyor.' },
        { type: 'h2', text: 'Başkasının fotoğrafından farkı ne?' },
        { type: 'p', text: 'Bence burada önemli bir fark var. Başkasının fotoğrafına baktığınızda onun başka bir yüz olduğunu biliyorsunuz. Onun burnunun sizin yüzünüzde aynı durmayacağını az çok tahmin edersiniz. Yapay zekâ ise size "Bu sensin, sadece biraz değiştirilmiş halin" hissi veriyor. Bu da görüntüyü çok daha ikna edici, beklentiyi de çok daha somut hale getiriyor.' },
        { type: 'h2', text: 'Yapay zekânın bilmedikleri' },
        { type: 'p', text: 'Bir fotoğraf, yüzün sadece yüzeyini gösterir. Cerrahide ise yüzeyin altındaki her şeyle çalışırız. Yapay zekâ bunları bilmiyor:' },
        {
          type: 'ul',
          items: [
            'Cilt kalınlığınız: Kalın bir cilt, altındaki ince detayları örter; ekrandaki keskin bir burun ucu, kalın ciltli birinde aynı keskinlikte görünmeyebilir. İnce bir cilt ise alttaki her düzensizliği belli eder.',
            'Kıkırdak yapınız: Burnun şeklini ve desteğini kıkırdaklar belirler. Ne kadar küçültülebileceği, ne kadar şekillendirilebileceği bu yapının gücüne bağlıdır.',
            'Kemik anatominiz: Burun kemiklerinin yapısı, yüz iskeletinin genel oranları sonucu doğrudan etkiler.',
            'İyileşme süreciniz: Ödemin ne kadar süreceği, dokuların nasıl iyileşeceği kişiden kişiye değişir ve bir yazılımın hesaplayabileceği bir şey değildir.',
          ],
        },
        { type: 'h2', text: 'Ekranda her şey mümkün, cerrahide burnun nefes alması da gerekiyor' },
        { type: 'p', text: 'Mesela ekranda burnu istediğiniz kadar küçültebilirsiniz. Cerrahide ise o burnun hem yüzle uyumlu olması hem de nefes almaya devam etmesi gerekiyor. Burnun iç yapıları aşırı zayıflatıldığında ya da daraltıldığında, dışarıdan güzel görünen bir burun içeriden yeterince hava geçirmeyebilir. Bu yüzden rinoplastide şekil ve fonksiyon her zaman birlikte planlanır.' },
        { type: 'h2', text: 'Fotoğrafın kendisi de yanıltabilir' },
        { type: 'p', text: 'Yapay zekâya verdiğiniz fotoğraf da gerçeği tam yansıtmayabilir. Yakından çekilen ön kamera fotoğrafları, geniş açılı mercek nedeniyle burnu olduğundan daha büyük gösterebilir. Işık, açı ve filtreler de görüntüyü değiştirir. Yani hem başlangıç noktası hem de hedef görüntü, gerçek yüzden farklı olabilir.' },
        { type: 'h2', text: 'Peki bu görüntüler işe yaramaz mı?' },
        { type: 'p', text: 'Ben bu görüntülere karşı değilim. Hatta hastanın ne istediğini anlamak için faydalı bile olabilirler. "Daha doğal" ya da "biraz daha kalkık" gibi tarifler herkes için aynı anlama gelmiyor. Bir görüntü, hastanın kafasındaki fikri somutlaştırıp konuşmayı kolaylaştırabilir.' },
        {
          type: 'steps',
          items: [
            { title: 'Görüntüyü getirin', text: 'Hazırladığınız görüntüleri konsültasyona getirmenizde bir sakınca yok.' },
            { title: 'Neyi beğendiğinizi anlatın', text: 'Görüntünün tamamından çok, sizi özellikle etkileyen noktayı söylemeniz önemli: burun sırtındaki kemer mi, burun ucunun yönü mü, genişlik mi?' },
            { title: 'Muayene ve değerlendirme', text: 'Cilt, kıkırdak, kemik yapısı ve burnun iç yapıları muayene edilir; nefes almayla ilgili bir sorun olup olmadığına bakılır.' },
            { title: 'Gerçekçi plan', text: 'Sizin anatominizde nelerin mümkün olduğu, neyin yüzünüzle uyumlu olacağı birlikte konuşulur.' },
          ],
        },
        { type: 'callout', text: 'Yapay zekâ görüntüleri bir hedef gösterebilir; ama cerrahi planın kendisi olamaz.' },
        { type: 'h2', text: 'Sık sorulan sorular' },
        { type: 'p', text: 'Ameliyat sonrası görüntü yapay zekâdakiyle aynı olur mu? Hiçbir görüntü, ister yapay zekâyla ister bilgisayar simülasyonuyla hazırlanmış olsun, sonucun garantisi değildir. Bunlar yalnızca konuşmayı kolaylaştıran araçlardır.' },
        { type: 'p', text: 'Başkasının burnunun fotoğrafını getirmek daha mı iyi? İkisi de bir fikir verebilir. Önemli olan, getirilen görüntünün bir hedef olarak değerlendirilmesi ve planın sizin yüzünüze göre yapılması.' },
        { type: 'p', text: 'Birden fazla görüntü getirebilir miyim? Elbette. Farklı görüntülerde neyi ortak olarak beğendiğinizi görmek, beklentinizi anlamayı çoğu zaman daha da kolaylaştırır.' },
      ],
    },
    en: {
      title: 'The AI-generated "ideal face": a goal or a surgical plan?',
      description:
        'Patients now come to consultations with AI-edited photos of their own faces. What are these images useful for, what can they not know, and how should they be used in a consultation?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'These days patients sometimes bring not a photo of someone else, but an AI-generated version of their own face. In a survey published recently in the UK, 15 percent of aesthetic surgeons said they had seen patients come to consultations with AI-edited photos of themselves.' },
        { type: 'p', text: 'It is a very understandable trend. In a few seconds you can see a version of your own face with a "neater nose" or a "more defined jaw". But it is important to separate what these images can tell us from what they cannot.' },
        { type: 'h2', text: 'How is it different from someone else\'s photo?' },
        { type: 'p', text: 'I think there is an important difference here. When you look at someone else\'s photo, you know it is a different face. You can more or less guess that their nose would not look the same on your face. AI, on the other hand, gives you the feeling that "this is you, just slightly altered". That makes the image much more convincing, and the expectation much more concrete.' },
        { type: 'h2', text: 'What AI does not know' },
        { type: 'p', text: 'A photo shows only the surface of the face. In surgery, we work with everything beneath that surface. AI does not know:' },
        {
          type: 'ul',
          items: [
            'Your skin thickness: thick skin hides the fine details beneath it, so a sharp nasal tip on screen may not look as sharp on someone with thick skin. Thin skin, on the other hand, shows every irregularity underneath.',
            'Your cartilage structure: cartilage determines the shape and support of the nose. How much it can be reduced or reshaped depends on the strength of this framework.',
            'Your bone anatomy: the structure of the nasal bones and the overall proportions of the facial skeleton directly affect the result.',
            'How you heal: how long swelling lasts and how tissues heal varies from person to person, and is not something software can calculate.',
          ],
        },
        { type: 'h2', text: 'Anything is possible on a screen; in surgery the nose also has to breathe' },
        { type: 'p', text: 'On a screen, for example, you can make the nose as small as you like. In surgery, that nose has to be in harmony with the face and still let you breathe. If the internal structures of the nose are weakened or narrowed too much, a nose that looks good from the outside may not let enough air through on the inside. That is why shape and function are always planned together in rhinoplasty.' },
        { type: 'h2', text: 'The photo itself can be misleading' },
        { type: 'p', text: 'The photo you give to the AI may not fully reflect reality either. Close-up front-camera photos can make the nose look larger than it is because of the wide-angle lens. Lighting, angle and filters also change the image. In other words, both the starting point and the target image may differ from your real face.' },
        { type: 'h2', text: 'So are these images useless?' },
        { type: 'p', text: 'I am not against these images. They can even be helpful in understanding what the patient wants. Descriptions such as "more natural" or "slightly more upturned" do not mean the same thing to everyone. An image can make the idea in the patient\'s mind concrete and make the conversation easier.' },
        {
          type: 'steps',
          items: [
            { title: 'Bring the images', text: 'There is nothing wrong with bringing the images you have prepared to your consultation.' },
            { title: 'Explain what you like', text: 'Rather than the image as a whole, it helps to say what in particular appeals to you: the hump on the bridge, the direction of the tip, the width?' },
            { title: 'Examination and assessment', text: 'Your skin, cartilage, bone structure and the internal structures of the nose are examined, and any breathing problem is checked.' },
            { title: 'A realistic plan', text: 'What is possible with your anatomy and what will suit your face is discussed together.' },
          ],
        },
        { type: 'callout', text: 'AI images can show a goal, but they cannot be the surgical plan itself.' },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'p', text: 'Will the result look the same as the AI image? No image, whether made with AI or with computer simulation, is a guarantee of the result. They are only tools that make the conversation easier.' },
        { type: 'p', text: 'Is it better to bring a photo of someone else\'s nose? Both can give an idea. What matters is that the image is treated as a goal and that the plan is made for your face.' },
        { type: 'p', text: 'Can I bring more than one image? Of course. Seeing what you like in common across different images often makes it even easier to understand your expectations.' },
      ],
    },
  },
};

export default post;
