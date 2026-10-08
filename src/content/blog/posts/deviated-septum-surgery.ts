import type { Post } from '../types';

// Kaynak: Scriptler/çekimi bitenler/Septum dev insta.pages
const post: Post = {
  slug: 'does-a-deviated-septum-need-surgery',
  date: '2026-10-08',
  cover: '/blog/deviated-septum.svg',
  shareImage: '/blog/deviated-septum.jpg',
  procedure: { href: '/septoplasti', icon: 'septoplasty' },
  translations: {
    tr: {
      title: 'Burnumda eğrilik var: Ameliyat olmam gerekir mi?',
      description:
        'Septum deviasyonu her zaman ameliyat gerektirmez. Asıl önemli olan eğriliğin nefesinizi gerçekten etkileyip etkilemediği. Muayenede nelere bakıyoruz?',
      readMinutes: 4,
      body: [
        {
          type: 'p',
          text: 'Burnunuzda eğrilik olması, her zaman ameliyat olmanız gerektiği anlamına gelmez. Septum deviasyonu dediğimiz burun içi eğrilik çok yaygındır ve bazı insanlarda hiçbir ciddi şikâyete yol açmaz.',
        },
        { type: 'h2', text: 'Asıl soru: Eğrilik nefesinizi etkiliyor mu?' },
        {
          type: 'p',
          text: 'Karar verirken eğriliğin kendisinden çok, yol açtığı şikâyetlere bakıyoruz:',
        },
        {
          type: 'ul',
          items: [
            'Sürekli veya tekrarlayan burun tıkanıklığı',
            'Uyurken ağızdan nefes alma',
            'Horlama',
            'Egzersiz sırasında nefes almakta zorlanma',
          ],
        },
        { type: 'h2', text: 'Kulakla da ilişkili olabilir' },
        {
          type: 'p',
          text: 'Burun tıkanıklığına eşlik eden problemler bazen Östaki tüpünün, yani orta kulağı burnun arkasına bağlayan kanalın çalışmasını da etkileyebilir. Bu durumda kulakta dolgunluk ve basınç hissi, kulakların sık sık tıkanması ya da orta kulakla ilgili tekrarlayan sorunlar görülebilir.',
        },
        {
          type: 'p',
          text: 'Ama burada önemli olan, bütün bunların gerçekten burundaki eğrilikle ilişkili olup olmadığını muayenede değerlendirmektir.',
        },
        { type: 'h2', text: 'Muayenede yalnızca eğriliğe bakmıyoruz' },
        {
          type: 'ul',
          items: [
            'Burun etlerinin (konkaların) büyüklüğünü',
            'Alerji olup olmadığını',
            'Hava yolunu daraltan başka bir neden bulunup bulunmadığını',
          ],
        },
        {
          type: 'callout',
          text: 'Yani sadece “Burnumda eğrilik var” demek, ameliyat kararı vermek için yeterli değil. Filmi değil, hastayı tedavi ediyoruz.',
        },
        {
          type: 'p',
          text: 'Eğrilik gerçekten şikâyetlerinizin nedeniyse septoplasti ile burun içinden, dışarıda iz bırakmadan düzeltilebilir. Ameliyat genel anestezi altında yaklaşık bir saat sürer ve günübirliktir. Burun şeklinde de değişiklik istiyorsanız rinoplastiyle aynı ameliyatta planlanabilir.',
        },
      ],
    },
    en: {
      title: 'I have a deviated septum: do I need surgery?',
      description:
        'A deviated septum does not always need an operation. What matters is whether it really affects your breathing. Here is what an ENT surgeon looks at during the examination.',
      readMinutes: 4,
      body: [
        {
          type: 'p',
          text: 'Having a bend inside your nose does not automatically mean you need surgery. A deviated septum is very common, and in many people it causes no significant symptoms at all.',
        },
        { type: 'h2', text: 'The real question: does it affect your breathing?' },
        {
          type: 'ul',
          items: [
            'Persistent or recurrent nasal blockage',
            'Mouth breathing during sleep',
            'Snoring',
            'Difficulty breathing during exercise',
          ],
        },
        { type: 'h2', text: 'It can also affect the ears' },
        {
          type: 'p',
          text: 'Problems that come with nasal obstruction can sometimes affect the Eustachian tube, the channel that connects the middle ear to the back of the nose. This can cause a feeling of fullness or pressure in the ears, frequently blocked ears, or recurrent middle-ear problems. The key is to confirm during the examination whether these symptoms are really related to the septum.',
        },
        { type: 'h2', text: 'The examination looks beyond the septum' },
        {
          type: 'ul',
          items: [
            'The size of the turbinates',
            'Whether there is an allergy',
            'Any other cause narrowing the airway',
          ],
        },
        {
          type: 'callout',
          text: 'Saying “I have a deviated septum” is not enough to decide on surgery. We treat the patient, not the scan.',
        },
        {
          type: 'p',
          text: 'When the deviation really is the cause of your symptoms, septoplasty corrects it through the nostrils, with no visible scars. In my practice it takes about one hour under general anaesthesia as a day-case procedure, and it can be combined with rhinoplasty if you would also like a change in shape.',
        },
      ],
    },
  },
};

export default post;
