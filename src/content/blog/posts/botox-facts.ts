import type { Post } from '../types';

// Kaynak: Scriptler/çekimi bitenler/Botoks insta.pages + Scriptler/2.hafta/botoks çinko reels.pages
const post: Post = {
  slug: 'botox-myths-zinc-magnesium',
  date: '2026-10-08',
  cover: '/blog/botox-facts.svg',
  shareImage: '/blog/botox-facts.jpg',
  procedure: { href: '/botoks', icon: 'medical' },
  translations: {
    tr: {
      title: 'Botoks hakkında doğru bilinen yanlışlar: dolgu mu, çinko, magnezyum',
      description:
        'Botoks dolgu değildir, yüzü şişirmez. Çinko botoksun etkisini uzatır mı, magnezyum azaltır mı? Hastalarımın en sık sorduğu soruların kısa ve net cevapları.',
      readMinutes: 4,
      body: [
        {
          type: 'p',
          text: 'Botoks, estetik amaçlı en sık kullanılan uygulamalardan biri. Ama hakkında çok fazla yanlış bilgi var. Hastalarımın en sık sorduğu soruları bir araya topladım.',
        },
        { type: 'h2', text: 'Botoks bir dolgu değildir' },
        {
          type: 'p',
          text: 'Botoks yüzü şişirmez, hacim vermez. Temel etkisi, uygulandığı bölgedeki kasların hareketini geçici olarak azaltmaktır. Bu yüzden özellikle alın çizgileri, kaş arasındaki çizgiler ve göz çevresindeki kaz ayakları gibi mimiklerle belirginleşen çizgilerde kullanılır.',
        },
        {
          type: 'p',
          text: 'Amaç yüzü tamamen hareketsiz hâle getirmek değil; mimik kaslarının aşırı hareketini azaltarak daha dinlenmiş bir görünüm sağlamaktır. Doğru kişide, doğru endikasyonla uygulandığında oldukça doğal sonuçlar elde edilebilir.',
        },
        { type: 'h2', text: 'Etkisi kalıcı değildir' },
        {
          type: 'p',
          text: 'Etki genellikle birkaç gün içinde ortaya çıkmaya başlar ve zamanla azalır. Botoks yalnızca estetik amaçla da kullanılmaz; aşırı terleme ve diş sıkma gibi bazı durumlarda da tedavi seçeneklerinden biridir.',
        },
        { type: 'h2', text: '“Hocam, çinko kullanırsam botoksum daha uzun sürer mi?”' },
        {
          type: 'p',
          text: 'Bu sorunun bilimsel bir dayanağı var. Çinko, botulinum toksinin sinir ucunda etki göstermesinde rol oynayan minerallerden biri. Bunu araştıran birkaç küçük çalışma da var; bazılarında botoks öncesi çinko kullanan kişilerde etkinin daha uzun sürdüğü gösterilmiş, hatta bir çalışmada yaklaşık yüzde 30’a varan bir artış bildirilmiş.',
        },
        {
          type: 'callout',
          text: 'Ama buradan “botokstan önce herkes çinko kullansın” sonucunu çıkaramıyoruz. Çalışmalar küçük, hasta sayıları az ve sonuçlar henüz yeterince güçlü değil.',
        },
        { type: 'h2', text: '“Magnezyum kullanıyorum, botoksun etkisini azaltır mı?”' },
        {
          type: 'p',
          text: 'Magnezyumun botoksun etkisini azalttığı ya da daha çabuk geçirdiği iddiasını destekleyen güvenilir bir klinik kanıt şu anda yok. Doktorunuzun önerdiği bir magnezyum takviyesini “botoksumun etkisi azalır” diye bırakmanıza gerek yok.',
        },
        { type: 'h2', text: 'Kısacası' },
        {
          type: 'ul',
          items: [
            'Botoks yüzü dolduran değil, kas hareketlerini geçici olarak azaltan bir uygulamadır.',
            'Çinko için ilginç veriler var, ama henüz standart bir öneri değil.',
            'Magnezyumun botoksu etkilediğine dair güvenilir kanıt yok.',
            'Takviye kullanmaya başlamadan veya bırakmadan önce doktorunuza danışın.',
          ],
        },
      ],
    },
    en: {
      title: 'Botox myths: is it a filler, and do zinc or magnesium matter?',
      description:
        'Botox is not a filler and does not add volume. Does zinc make it last longer, and does magnesium make it wear off faster? Short, clear answers to the questions my patients ask most.',
      readMinutes: 4,
      body: [
        {
          type: 'p',
          text: 'Botox is one of the most common aesthetic treatments, and also one of the most misunderstood. Here are the questions my patients ask most often.',
        },
        { type: 'h2', text: 'Botox is not a filler' },
        {
          type: 'p',
          text: 'Botox does not plump the face or add volume. It temporarily reduces the movement of the muscles where it is injected. That is why it is used for expression lines such as forehead lines, frown lines and crow’s feet. The aim is not a frozen face but a more rested look, with natural expressions preserved.',
        },
        { type: 'h2', text: 'The effect is temporary' },
        {
          type: 'p',
          text: 'The effect usually starts within a few days and gradually wears off. Botox is also used for medical reasons, such as excessive sweating and teeth grinding.',
        },
        { type: 'h2', text: '“If I take zinc, will my botox last longer?”' },
        {
          type: 'p',
          text: 'There is a scientific basis for this question. Zinc is one of the minerals involved in how botulinum toxin works at the nerve ending. A few small studies have looked at this, and some reported a longer effect in people who took zinc before treatment — one study reported an increase of around 30%.',
        },
        {
          type: 'callout',
          text: 'But we cannot conclude that everyone should take zinc before botox. The studies are small, the number of patients is low and the evidence is not yet strong enough.',
        },
        { type: 'h2', text: '“I take magnesium. Will it reduce the effect?”' },
        {
          type: 'p',
          text: 'There is currently no reliable clinical evidence that magnesium reduces the effect of botox or makes it wear off faster. There is no need to stop a magnesium supplement your doctor recommended for this reason.',
        },
        { type: 'h2', text: 'In short' },
        {
          type: 'ul',
          items: [
            'Botox temporarily relaxes muscles; it does not fill the face.',
            'Zinc shows interesting early data, but it is not a standard recommendation.',
            'There is no reliable evidence that magnesium affects botox.',
            'Talk to your doctor before starting or stopping any supplement.',
          ],
        },
      ],
    },
  },
};

export default post;
