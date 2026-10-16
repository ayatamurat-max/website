import type { Post } from '../types';

// Kaynak: Scriptler/3. hafta/1. gurup reels scriptleri.pages (3. Ani işitme kaybı)
const post: Post = {
  slug: 'sudden-hearing-loss',
  date: '2026-10-16',
  cover: '/blog/sudden-hearing-loss.svg',
  shareImage: '/blog/sudden-hearing-loss.jpg',
  translations: {
    tr: {
      title: 'Ani işitme kaybı: Kulağınız pamukla tıkanmış gibiyse beklemeyin',
      description:
        'Bir sabah bir kulağınız pamukla tıkanmış gibi uyandıysanız bunu her zaman kulak kiri sanmayın. Ani işitme kaybı nedir, nasıl anlaşılır ve zaman neden bu kadar önemli?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'Bir sabah uyandınız ve bir kulağınız pamukla tıkanmış gibi. Bunu her zaman kulak kiri sanmayın; çünkü ani işitme kaybı bazen tam olarak böyle hissediliyor.' },
        { type: 'h2', text: 'Ani işitme kaybı nedir?' },
        { type: 'p', text: 'Ani işitme kaybı, genellikle tek kulakta, saatler ya da birkaç gün içinde gelişen belirgin bir işitme azalmasıdır. Kimi hasta bunu sabah uyandığında fark eder, kimi telefonla konuşurken sesi o kulakta daha boğuk duyduğunda.' },
        { type: 'h2', text: 'Her zaman "birden duyamıyorum" diye başlamıyor' },
        { type: 'p', text: 'Hasta her zaman "birden işitmem gitti" diye gelmiyor. Çoğu zaman tarif edilen şey bir tıkanıklık hissi. Şu belirtiler görülebiliyor:' },
        {
          type: 'ul',
          items: [
            'Kulakta dolgunluk ya da basınç hissi',
            'Tıkanıklık, sesin "uzaktan geliyormuş" gibi duyulması',
            'Bazen kulakta çınlama ya da uğultu',
            'Hatta baş dönmesi ve dengesizlik',
          ],
        },
        { type: 'p', text: 'Bu belirtiler kulak kiri, uçak yolculuğu sonrası kulak tıkanması ya da soğuk algınlığına bağlı tıkanıklıkla karışabiliyor. Sorun da burada başlıyor: Kişi "nasılsa geçer" diye bekliyor.' },
        { type: 'h2', text: 'İlk yapılması gereken: nedeni bulmak' },
        { type: 'p', text: 'İşitme kaybını kabaca iki gruba ayırıyoruz ve tedavi tamamen buna göre şekilleniyor:' },
        {
          type: 'steps',
          items: [
            { title: 'İletim tipi işitme kaybı', text: 'Sesin dış kulak ve orta kulaktan iç kulağa iletilmesini engelleyen bir sorun vardır. Kulak kiri tıkacı (buşon), orta kulakta sıvı birikmesi ya da kulak zarı delinmesi bunlara örnektir. Çoğu muayenede görülebilir.' },
            { title: 'Sensörinöral işitme kaybı', text: 'Sorun iç kulakta ya da işitme sinirindedir. Dışarıdan bakıldığında kulak tamamen normal görünebilir. Ani işitme kaybında asıl önemsediğimiz grup budur ve bu durumda zaman önemlidir.' },
          ],
        },
        { type: 'h2', text: 'Neden olur?' },
        { type: 'p', text: 'Sensörinöral tipteki ani işitme kayıplarının önemli bir bölümünde belirgin bir neden bulunamıyor. Virüs enfeksiyonları ve iç kulağın kan dolaşımıyla ilgili sorunlar üzerinde duruluyor. Nadiren işitme sinirindeki iyi huylu bir tümör de benzer bir tabloyla ortaya çıkabiliyor. Bu yüzden gerekli görüldüğünde MR ile ileri değerlendirme yapıyoruz.' },
        { type: 'h2', text: 'Zaman neden önemli?' },
        { type: 'p', text: 'Güncel kılavuzlar, işitme testinin mümkün olduğu kadar erken yapılmasını ve tedavi düşünülüyorsa erken dönemde başlanmasını özellikle vurguluyor. Özellikle ilk 72 saat çok önemli.' },
        { type: 'h2', text: 'Muayenede neler yapılır?' },
        {
          type: 'ul',
          items: [
            'Kulak muayenesi: Kulak kiri, orta kulak sıvısı ya da kulak zarında bir sorun olup olmadığına bakılır.',
            'Diyapazon testleri: Kaybın iletim tipi mi, sensörinöral mi olduğu hakkında ilk ipucunu verir.',
            'Odyometri (işitme testi): Kaybın tipini ve derecesini ortaya koyar.',
            'Timpanometri: Orta kulak ve kulak zarının durumunu değerlendirir.',
            'Gerekirse görüntüleme: İşitme siniri ve iç kulak bölgesini değerlendirmek için MR istenebilir.',
          ],
        },
        { type: 'h2', text: 'Tedavi' },
        { type: 'p', text: 'Neden iletim tipi bir sorunsa, örneğin buşon, temizlendiğinde işitme çoğu zaman hemen düzelir. Sensörinöral ani işitme kaybında ise kılavuzlarda yer alan seçeneklerden biri kortikosteroid tedavisidir; ağızdan ya da kulak zarının arkasına uygulanabilir. Hangi tedavinin uygun olduğuna hastanın genel sağlık durumu ve test sonuçlarına göre karar verilir.' },
        { type: 'h2', text: 'Bu durumda yapmamanız gerekenler' },
        {
          type: 'ul',
          items: [
            'Kulak kiri olduğunu düşünüp pamuklu çubukla kulağı kurcalamak',
            'Muayene olmadan kulağa damla damlatmak',
            'Birkaç gün "kendiliğinden açılır mı" diye beklemek',
          ],
        },
        { type: 'callout', text: 'Bir kulağınızda saatler ya da birkaç gün içinde gelişen belirgin bir işitme azalması varsa, "biraz bekleyeyim, açılır" demek yerine gecikmeden değerlendirilmesi daha doğru.' },
        { type: 'h2', text: 'Sık sorulan sorular' },
        { type: 'p', text: 'Ani işitme kaybı kendiliğinden geçer mi? Bazı hastalarda işitme kendiliğinden düzelebiliyor. Ama kimde düzeleceğini önceden bilemiyoruz. Bu yüzden beklemek yerine erken değerlendirme yapmak daha doğru.' },
        { type: 'p', text: 'Sadece çınlama varsa da önemli mi? Yeni başlayan, tek taraflı bir çınlama, özellikle işitmede azalma hissiyle birlikteyse mutlaka değerlendirilmeli.' },
        { type: 'p', text: 'Hangi doktora gitmeliyim? Kulak burun boğaz uzmanına başvurmak en doğrusu. Ulaşamıyorsanız acil servise başvurup işitme kaybınızın yeni başladığını belirtin.' },
        { type: 'p', text: 'İki kulakta birden olabilir mi? Olabilir, ama daha nadirdir. Böyle bir durumda da değerlendirme geciktirilmemeli.' },
      ],
    },
    en: {
      title: 'Sudden hearing loss: if your ear feels blocked with cotton, don\'t wait',
      description:
        'If you wake up one morning with one ear feeling as if it were plugged with cotton, don\'t always assume it is earwax. What is sudden hearing loss, how is it recognised and why does time matter so much?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'You wake up one morning and one of your ears feels as if it were plugged with cotton. Don\'t always assume it is earwax, because sudden hearing loss sometimes feels exactly like this.' },
        { type: 'h2', text: 'What is sudden hearing loss?' },
        { type: 'p', text: 'Sudden hearing loss is a clear drop in hearing, usually in one ear, that develops over hours or a few days. Some patients notice it when they wake up, others when voices on the phone sound muffled in that ear.' },
        { type: 'h2', text: 'It doesn\'t always start with "I suddenly can\'t hear"' },
        { type: 'p', text: 'Patients don\'t always come in saying their hearing suddenly went. What they often describe is a feeling of blockage. These symptoms may be present:' },
        {
          type: 'ul',
          items: [
            'A feeling of fullness or pressure in the ear',
            'Blockage, with sounds seeming to come "from far away"',
            'Sometimes ringing or buzzing in the ear (tinnitus)',
            'Even dizziness and imbalance',
          ],
        },
        { type: 'p', text: 'These symptoms can be confused with earwax, a blocked ear after a flight, or blockage due to a cold. This is where the problem starts: the person waits, thinking it will pass.' },
        { type: 'h2', text: 'The first step: finding the cause' },
        { type: 'p', text: 'We broadly divide hearing loss into two groups, and treatment depends entirely on which one it is:' },
        {
          type: 'steps',
          items: [
            { title: 'Conductive hearing loss', text: 'Something is preventing sound from travelling through the outer and middle ear to the inner ear. An earwax plug, fluid in the middle ear or a perforated eardrum are examples. Most can be seen during an examination.' },
            { title: 'Sensorineural hearing loss', text: 'The problem lies in the inner ear or the hearing nerve. From the outside, the ear can look completely normal. This is the group we are most concerned about in sudden hearing loss, and here time matters.' },
          ],
        },
        { type: 'h2', text: 'What causes it?' },
        { type: 'p', text: 'In a large proportion of sudden sensorineural hearing loss cases, no clear cause is found. Viral infections and problems with blood flow to the inner ear are among the suspected causes. Rarely, a benign tumour on the hearing nerve can present in a similar way, which is why we arrange further assessment with an MRI scan when needed.' },
        { type: 'h2', text: 'Why time matters' },
        { type: 'p', text: 'Current guidelines specifically stress that a hearing test should be done as early as possible and that, if treatment is considered, it should be started early. The first 72 hours are especially important.' },
        { type: 'h2', text: 'What happens during the examination?' },
        {
          type: 'ul',
          items: [
            'Ear examination: to check for earwax, fluid in the middle ear or a problem with the eardrum.',
            'Tuning fork tests: give the first clue as to whether the loss is conductive or sensorineural.',
            'Audiometry (hearing test): shows the type and degree of hearing loss.',
            'Tympanometry: assesses the middle ear and the eardrum.',
            'Imaging if needed: an MRI may be requested to assess the hearing nerve and inner ear region.',
          ],
        },
        { type: 'h2', text: 'Treatment' },
        { type: 'p', text: 'If the cause is conductive, such as an earwax plug, hearing usually improves as soon as it is removed. For sudden sensorineural hearing loss, one of the options in the guidelines is corticosteroid treatment, given by mouth or injected behind the eardrum. Which treatment is appropriate is decided according to the patient\'s general health and test results.' },
        { type: 'h2', text: 'What not to do' },
        {
          type: 'ul',
          items: [
            'Poking around in the ear with a cotton swab, assuming it is earwax',
            'Putting drops in the ear without an examination',
            'Waiting a few days to see whether it clears up on its own',
          ],
        },
        { type: 'callout', text: 'If you notice a clear drop in hearing in one ear that develops over hours or a few days, it is better to have it assessed without delay rather than thinking "I\'ll wait, it will clear up".' },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'p', text: 'Does sudden hearing loss go away on its own? In some patients hearing can recover on its own. But we cannot predict in advance who will recover. That is why early assessment is better than waiting.' },
        { type: 'p', text: 'Is it important if I only have ringing in the ear? New, one-sided ringing should always be assessed, especially if it comes with a feeling of reduced hearing.' },
        { type: 'p', text: 'Which doctor should I see? An ear, nose and throat specialist is the right choice. If you cannot reach one, go to an emergency department and explain that your hearing loss is new.' },
        { type: 'p', text: 'Can it happen in both ears? It can, but it is rarer. In that case, too, assessment should not be delayed.' },
      ],
    },
  },
};

export default post;
