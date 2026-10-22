import type { Post } from '../types';
import ru from '../i18n/nasal-rinse-water/ru';
import de from '../i18n/nasal-rinse-water/de';
import fr from '../i18n/nasal-rinse-water/fr';
import bg from '../i18n/nasal-rinse-water/bg';

// Kaynak: Scriptler/3. hafta/1. gurup reels scriptleri.pages (2. Burun yıkarken hangi suyu kullanmalıyız?)
const post: Post = {
  slug: 'which-water-for-nasal-rinse',
  date: '2026-10-16',
  cover: '/blog/nasal-rinse-water.svg',
  shareImage: '/blog/nasal-rinse-water.jpg',
  translations: {
    ru,
    de,
    fr,
    bg,
    tr: {
      title: 'Burun yıkarken hangi suyu kullanmalıyız?',
      description:
        'İçebildiğiniz bir suyu burnunuza vermek her zaman güvenli değil. Burun yıkamasında hangi su kullanılmalı, musluk suyu ne zaman uygun olur, yıkama doğru nasıl yapılır?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'İçebildiğiniz bir suyu burnunuza vermek her zaman güvenli değil. Burun yıkaması yapıyorsanız, kullandığınız su en az yıkamanın kendisi kadar önemli.' },
        { type: 'h2', text: 'Burun yıkaması nedir, ne işe yarar?' },
        { type: 'p', text: 'Burun yıkaması, tuzlu bir solüsyonla burun boşluğunun içinin yıkanmasıdır. Bir şişe, sıkılabilir bir yıkama aparatı ya da "neti pot" denen küçük bir kapla yapılabilir. Burun içindeki fazla mukusu, kabukları, toz ve polen gibi alerjenleri uzaklaştırmaya yardımcı olur.' },
        { type: 'p', text: 'Bu yüzden sık olarak şu durumlarda öneriyoruz:' },
        {
          type: 'ul',
          items: [
            'Alerjik rinit',
            'Akut ya da kronik sinüzit',
            'Soğuk algınlığı sırasında burun tıkanıklığı ve akıntısı',
            'Burun ve sinüs ameliyatlarından sonra, burnun temiz tutulması için',
          ],
        },
        { type: 'h2', text: 'İçme suyu neden yeterli değil?' },
        { type: 'p', text: 'İçme suyunda bulunabilen bazı mikroorganizmalar mideden geçtiğinde sorun yaratmayabilir. Çünkü mide asidi bunların büyük bölümünü etkisiz hale getirir. Ama burundan verildiğinde aynı koruma yok; su doğrudan burun ve sinüslerin mukozasıyla temas ediyor.' },
        { type: 'p', text: 'Bu nedenle burun yıkamada musluktan aldığınız suyu doğrudan kullanmıyoruz. Bununla ilişkili ciddi enfeksiyonlar çok nadir, ama bildirilmiş vakalar var. Bu vakaların bir kısmı, bazı tatlı su ve musluk suyu kaynaklarında bulunabilen ve beyne ulaşabilen bir amipten (Naegleria fowleri) kaynaklanıyor. Nadir olması, önlemi gereksiz kılmıyor; önlem de oldukça basit.' },
        { type: 'h2', text: 'Hangi su kullanılabilir?' },
        {
          type: 'ul',
          items: [
            'Distile su: Eczane ve marketlerde "distile" ibaresiyle satılan su.',
            'Steril su: Ambalajında steril olduğu belirtilen su.',
            'Kaynatılmış musluk suyu: Musluk suyu kullanılacaksa önce iyice kaynatılmalı, sonra ılık hale gelene kadar soğutulmalı. Temiz ve kapalı bir kapta saklanmalı; uzun süre bekletilmemeli.',
            'Hazır solüsyonlar: Eczanelerde satılan, kullanıma hazır steril serum fizyolojik ya da deniz suyu spreyleri.',
          ],
        },
        { type: 'p', text: 'Şunu da eklemek isterim: İçme amaçlı satılan şişe suyu her zaman steril değildir. Ambalajında distile ya da steril yazmıyorsa, onu da kaynatıp soğutarak kullanmak daha doğru.' },
        { type: 'h2', text: 'Solüsyonu nasıl hazırlamalı?' },
        { type: 'p', text: 'Burun yıkamasında sade su değil, tuzlu bir solüsyon kullanılır. Sade su burun içinde yanma ve rahatsızlık yapar. En pratik yol, eczanelerde satılan ve ölçüsü ayarlanmış hazır tuz paketlerini uygun suyla karıştırmak ya da hazır solüsyon kullanmaktır. Evde gözle karar verilen tuz oranları burnu tahriş edebilir.' },
        { type: 'h2', text: 'Burun yıkaması nasıl yapılır?' },
        {
          type: 'steps',
          items: [
            { title: 'Hazırlık', text: 'Ellerinizi yıkayın. Solüsyonun ılık olduğundan emin olun; çok sıcak ya da çok soğuk su rahatsızlık verir.' },
            { title: 'Pozisyon', text: 'Lavabonun üzerine öne doğru eğilin ve başınızı hafifçe yana çevirin. Yıkama sırasında ağzınızdan nefes alın.' },
            { title: 'Uygulama', text: 'Solüsyonu üstte kalan burun deliğinden yavaşça verin. Su, diğer burun deliğinden ya da bazen ağızdan dışarı akacaktır. Sonra diğer tarafa geçin.' },
            { title: 'Bitiriş', text: 'Burnunuzu her iki taraf açıkken, nazikçe ve tek tek sümkürün. Kuvvetli sümkürmek suyu kulağa doğru itebilir.' },
          ],
        },
        { type: 'h2', text: 'Şişeyi de unutmayın' },
        { type: 'p', text: 'Kullandığınız şişeyi veya yıkama cihazını da temiz tutmak gerekiyor. Her kullanımdan sonra uygun suyla yıkayıp kurumaya bırakın, üreticinin önerdiği aralıklarla yenileyin ve başkalarıyla paylaşmayın. Temiz su kirli bir aparatla verildiğinde önlemin anlamı kalmaz.' },
        { type: 'callout', text: 'Burun yıkaması oldukça basit bir uygulama; ama içine koyduğumuz su konusunda biraz dikkat etmek lazım.' },
        { type: 'h2', text: 'Ne zaman doktora danışmalı?' },
        {
          type: 'ul',
          items: [
            'Yıkama sırasında ya da sonrasında kulak ağrısı veya kulakta dolgunluk oluyorsa',
            'Burnunuzun bir tarafı tamamen tıkalıysa ve su geçmiyorsa',
            'Burun veya sinüs ameliyatı olduysanız (yıkamayı doktorunuzun tarif ettiği şekilde yapın)',
            'Ateş, yüzde ağrı, kötü kokulu ya da kanlı akıntı gibi belirtiler varsa',
          ],
        },
        { type: 'h2', text: 'Sık sorulan sorular' },
        { type: 'p', text: 'Kaynatılmış suyu ne kadar bekletebilirim? Temiz, kapalı bir kapta kısa süre saklanabilir. Uzun süre bekletmek yerine ihtiyacınız kadar hazırlamanızı öneririm.' },
        { type: 'p', text: 'Yıkama yaparken burnum yanıyor, neden? Genellikle solüsyonun tuz oranı uygun değildir, ya da su çok sıcak veya çok soğuktur. Hazır tuz paketi ve ılık su kullandığınızda bu yanma çoğu zaman azalır.' },
        { type: 'p', text: 'Ne sıklıkla burun yıkamalıyım? Bu, yıkamayı hangi amaçla yaptığınıza göre değişir. Alerji, sinüzit ya da ameliyat sonrası dönemde doktorunuzun önerdiği sıklığa uyun.' },
      ],
    },
    en: {
      title: 'Which water should you use for nasal rinsing?',
      description:
        'Water that is safe to drink is not always safe to put into your nose. Which water should you use for a nasal rinse, when is tap water acceptable, and how should a rinse be done?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'Water that you can drink is not always safe to put into your nose. If you rinse your nose, the water you use is at least as important as the rinse itself.' },
        { type: 'h2', text: 'What is a nasal rinse and what does it do?' },
        { type: 'p', text: 'A nasal rinse is washing the inside of the nasal cavity with a salt solution. It can be done with a bottle, a squeeze-type rinsing device or a small container called a "neti pot". It helps remove excess mucus, crusts and allergens such as dust and pollen from inside the nose.' },
        { type: 'p', text: 'That is why we often recommend it for:' },
        {
          type: 'ul',
          items: [
            'Allergic rhinitis',
            'Acute or chronic sinusitis',
            'Nasal blockage and discharge during a cold',
            'Keeping the nose clean after nasal and sinus surgery',
          ],
        },
        { type: 'h2', text: 'Why drinking water is not enough' },
        { type: 'p', text: 'Some microorganisms that can be found in drinking water may cause no problems when they pass through the stomach, because stomach acid inactivates most of them. But there is no such protection when water is introduced through the nose; it comes into direct contact with the lining of the nose and sinuses.' },
        { type: 'p', text: 'That is why we do not use tap water directly for nasal rinsing. Serious infections linked to this are very rare, but cases have been reported. Some of these cases were caused by an amoeba (Naegleria fowleri) that can be found in certain freshwater and tap water sources and can reach the brain. Being rare does not make the precaution unnecessary, and the precaution is very simple.' },
        { type: 'h2', text: 'Which water can you use?' },
        {
          type: 'ul',
          items: [
            'Distilled water: water sold in pharmacies and shops labelled as "distilled".',
            'Sterile water: water whose packaging states that it is sterile.',
            'Boiled tap water: if tap water is used, it should first be boiled thoroughly and then cooled until lukewarm. Store it in a clean, closed container and do not keep it for long.',
            'Ready-made solutions: sterile saline or seawater sprays sold ready to use in pharmacies.',
          ],
        },
        { type: 'p', text: 'I would also add this: bottled water sold for drinking is not always sterile. If the label does not say distilled or sterile, it is better to boil and cool it before use as well.' },
        { type: 'h2', text: 'How should the solution be prepared?' },
        { type: 'p', text: 'A nasal rinse uses a salt solution, not plain water. Plain water causes burning and discomfort inside the nose. The most practical option is to mix ready-measured salt sachets sold in pharmacies with suitable water, or to use a ready-made solution. Salt amounts guessed by eye at home can irritate the nose.' },
        { type: 'h2', text: 'How to rinse your nose' },
        {
          type: 'steps',
          items: [
            { title: 'Preparation', text: 'Wash your hands. Make sure the solution is lukewarm; water that is too hot or too cold is uncomfortable.' },
            { title: 'Position', text: 'Lean forward over the sink and turn your head slightly to one side. Breathe through your mouth during the rinse.' },
            { title: 'Rinsing', text: 'Slowly pour or squeeze the solution into the upper nostril. The water will flow out of the other nostril, or sometimes the mouth. Then switch sides.' },
            { title: 'Finishing', text: 'Blow your nose gently, one side at a time. Blowing hard can push water towards the ears.' },
          ],
        },
        { type: 'h2', text: 'Don\'t forget the bottle' },
        { type: 'p', text: 'The bottle or rinsing device you use also needs to be kept clean. Wash it with suitable water after every use and let it dry, replace it as often as the manufacturer recommends, and do not share it with others. Clean water delivered through a dirty device defeats the purpose.' },
        { type: 'callout', text: 'Nasal rinsing is a very simple practice, but we need to be a little careful about the water we put in it.' },
        { type: 'h2', text: 'When should you see a doctor?' },
        {
          type: 'ul',
          items: [
            'If you get ear pain or a feeling of fullness in the ear during or after rinsing',
            'If one side of your nose is completely blocked and water does not pass through',
            'If you have had nasal or sinus surgery (rinse exactly as your doctor has instructed)',
            'If you have a fever, facial pain, or foul-smelling or bloody discharge',
          ],
        },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'p', text: 'How long can I keep boiled water? It can be stored for a short time in a clean, closed container. Rather than keeping it for long, I recommend preparing only as much as you need.' },
        { type: 'p', text: 'Why does my nose burn when I rinse? Usually the salt concentration of the solution is not right, or the water is too hot or too cold. Using a ready-made salt sachet and lukewarm water usually reduces the burning.' },
        { type: 'p', text: 'How often should I rinse my nose? It depends on why you are rinsing. For allergies, sinusitis or after surgery, follow the frequency your doctor recommends.' },
      ],
    },
  },
};

export default post;
