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
        'Gece ağzı bantlamak son zamanlarda popüler. Ama burundan rahat nefes alamıyorsanız önce bunun nedenine bakmak gerekiyor. Bilimsel veriler ne söylüyor, kimler için riskli olabilir?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'Gece ağzını bantlamak son zamanlarda bayağı popüler. Sosyal medyada "mouth taping" adıyla paylaşılan bu uygulamanın mantığı şu: ağız bir bantla kapatılınca kişi uykuda burundan nefes almaya mecbur kalacak ve daha iyi uyuyacak.' },
        { type: 'p', text: 'Burundan nefes almak tabii ki önemli. Ama bence asıl sorulması gereken soru başka: Burnunuz neden açık değil? Ağzınızın açık kalması çoğu zaman bir alışkanlık değil, burnunuzdan yeterince hava geçmediğinin işaretidir.' },
        { type: 'h2', text: 'Burundan nefes almak neden önemli?' },
        { type: 'p', text: 'Burun, solunum yolunun sadece bir girişi değil; havayı akciğerlere hazırlayan bir organ. İçeri çektiğimiz havayı ısıtır, nemlendirir ve içindeki toz ile partiküllerin önemli bir kısmını tutar. Ağızdan nefes alındığında bu hazırlık aşaması atlanır.' },
        { type: 'p', text: 'Bu yüzden gece boyunca ağızdan nefes alan kişiler sabah sık olarak şunları fark eder:' },
        {
          type: 'ul',
          items: [
            'Ağız ve boğazda kuruluk, bazen yanma hissi',
            'Horlama',
            'Yastıkta salya izi',
            'Dinlenmeden uyanmış gibi hissetme, gün içinde yorgunluk',
          ],
        },
        { type: 'h2', text: 'Ağız açık uyumanın arkasında ne olabilir?' },
        { type: 'p', text: 'Ağzı bantlamadan önce, burnun neden yeterince hava geçirmediğine bakmak gerekiyor. En sık karşılaştığımız nedenler şunlar:' },
        {
          type: 'ul',
          items: [
            'Septum deviasyonu: Burnu ikiye ayıran orta bölmenin eğri olması, bir ya da iki taraftaki hava yolunu daraltabilir.',
            'Konka büyümesi: Halk arasında burun eti denen yapıların büyümesi, özellikle gece ve yatar pozisyonda tıkanıklığı artırabilir.',
            'Alerjik rinit: Burun içindeki mukozanın alerjik şişmesi; hapşırık, burun akıntısı ve kaşıntıyla birlikte olabilir.',
            'Kronik sinüzit ve burun polipleri: Uzun süren tıkanıklık, koku azalması ve geniz akıntısıyla kendini gösterebilir.',
            'Çocuklarda geniz eti ve bademcik büyümesi: Ağzı açık uyuyan, horlayan çocuklarda mutlaka akla gelmesi gereken bir neden.',
            'Uykuda solunumla ilgili başka bir problem: Örneğin uyku apnesi; yüksek sesli horlama, nefes durmaları ve gündüz uykululuğu ile birlikte olabilir.',
          ],
        },
        { type: 'h2', text: 'Bilimsel veriler ne söylüyor?' },
        { type: 'p', text: '2025\'te yayımlanan bir sistematik derlemede ağız bantlamayla ilgili 10 çalışma ve toplam 213 kişi değerlendirilmiş. Bazı küçük çalışmalarda fayda görülmüş; ama çalışmaların çoğu burun tıkanıklığı olan hastaları zaten dışlamış.' },
        { type: 'p', text: 'Bu önemli bir ayrıntı. Çünkü ağzını bantlamayı en çok düşünen kişiler, tam da burnu tıkalı olduğu için ağzı açık uyuyanlar. Yani elimizde herkese "gece ağzınızı bantlayın" diyebileceğimiz bir veri yok.' },
        { type: 'h2', text: 'Ağız bantlamanın olası riskleri' },
        {
          type: 'ul',
          items: [
            'Burnu yeterince açık olmayan birinde ağzı kapatmak, gece boyunca nefes almayı zorlaştırabilir.',
            'Uyku apnesi olan birinde horlamayı azaltıp asıl sorunu gözden kaçırmaya neden olabilir; teşhis gecikebilir.',
            'Bantın yapıştığı dudak ve çevresindeki ciltte tahriş olabilir.',
            'Bulantı, kusma ya da gece aniden burnun tıkanması gibi durumlarda ağzın kapalı olması rahatsız edici ve güvensiz olabilir.',
          ],
        },
        { type: 'callout', text: 'Ağzınız açık uyuyorsanız, ağzınızı kapatmak sebebi ortadan kaldırmıyor. Önce neden burundan rahat nefes alamadığınızı bulmak gerekiyor.' },
        { type: 'h2', text: 'Muayenede neye bakıyoruz?' },
        {
          type: 'steps',
          items: [
            { title: 'Şikâyetin hikâyesi', text: 'Tıkanıklık tek taraflı mı, iki taraflı mı; sürekli mi, mevsimsel mi; horlama, nefes durması, gündüz uykululuğu var mı?' },
            { title: 'Burun içi muayenesi', text: 'Septum, konkalar ve burun içindeki mukoza değerlendirilir. Gerekirse ince bir kamerayla (endoskopi) burnun arka bölümlerine ve geniz bölgesine bakılır.' },
            { title: 'Ek testler', text: 'Alerji şüphesi varsa alerji testleri, sinüzit şüphesi varsa görüntüleme, uyku apnesi şüphesi varsa uyku testi istenebilir.' },
          ],
        },
        { type: 'h2', text: 'Tedavi nedene göre değişiyor' },
        { type: 'p', text: 'Alerjik rinitte alerjenden korunma ve uygun burun spreyleri, yapısal bir darlıkta septoplasti ya da konkaların küçültülmesi, uyku apnesinde ise uyku hekimliğiyle birlikte planlanan bir tedavi gündeme gelebilir. Burun rahatladığında çoğu kişi ağzını bantlamaya gerek kalmadan burundan nefes almaya başlar.' },
        { type: 'h2', text: 'Sık sorulan sorular' },
        { type: 'p', text: 'Burnum tamamen açık, yine de ağzımı bantlayabilir miyim? Bunun herkes için faydalı olduğunu gösteren yeterli veri yok. Denemeyi düşünüyorsanız önce burun ve uyku açısından bir değerlendirme yaptırmanızı öneririm; özellikle yüksek sesle horluyor ya da uykuda nefesinizin durduğu söyleniyorsa ağız bandı kullanmayın.' },
        { type: 'p', text: 'Ağız bandı horlamayı keser mi? Bazı kişilerde horlama azalabilir. Ama horlamanın nedeni burundaki bir darlık ya da uyku apnesiyse, bant sorunu çözmez, sadece üstünü örter.' },
        { type: 'p', text: 'Çocuğumun ağzı açık uyuyor, bant işe yarar mı? Çocuklarda ağız bandı kullanılmamalı. Ağzı açık uyuyan ve horlayan bir çocukta geniz eti ve bademcikler başta olmak üzere nedenin bir KBB muayenesiyle araştırılması gerekir.' },
      ],
    },
    en: {
      title: 'Mouth taping at night: a shortcut to nasal breathing?',
      description:
        'Taping your mouth shut at night has become popular. But if you cannot breathe comfortably through your nose, the first step is to find out why. What does the evidence say, and who may be at risk?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'Taping your mouth at night has become quite popular lately. The idea behind "mouth taping", widely shared on social media, is that with the mouth taped shut you are forced to breathe through your nose during sleep and therefore sleep better.' },
        { type: 'p', text: 'Breathing through the nose is of course important. But I think the real question is a different one: why isn\'t your nose open? A mouth that stays open at night is usually not a habit, but a sign that not enough air is getting through the nose.' },
        { type: 'h2', text: 'Why does nasal breathing matter?' },
        { type: 'p', text: 'The nose is not just an entrance to the airway; it is an organ that prepares air for the lungs. It warms and humidifies the air we breathe in and traps a large part of the dust and particles in it. When we breathe through the mouth, this preparation step is skipped.' },
        { type: 'p', text: 'That is why people who breathe through their mouth all night often notice the following in the morning:' },
        {
          type: 'ul',
          items: [
            'A dry mouth and throat, sometimes a burning feeling',
            'Snoring',
            'Drool marks on the pillow',
            'Waking up unrefreshed and feeling tired during the day',
          ],
        },
        { type: 'h2', text: 'What may be behind mouth breathing at night?' },
        { type: 'p', text: 'Before taping the mouth, we need to look at why the nose is not letting enough air through. The most common causes are:' },
        {
          type: 'ul',
          items: [
            'Deviated septum: a bend in the wall dividing the nose can narrow the airway on one or both sides.',
            'Enlarged turbinates: swelling of these structures inside the nose can increase blockage, especially at night and when lying down.',
            'Allergic rhinitis: allergic swelling of the nasal lining, often with sneezing, a runny nose and itching.',
            'Chronic sinusitis and nasal polyps: these can cause long-lasting blockage, a reduced sense of smell and post-nasal drip.',
            'Enlarged adenoids and tonsils in children: something that must always be considered in a child who snores and sleeps with the mouth open.',
            'Another breathing problem during sleep: for example sleep apnoea, which may come with loud snoring, pauses in breathing and daytime sleepiness.',
          ],
        },
        { type: 'h2', text: 'What does the evidence say?' },
        { type: 'p', text: 'A systematic review published in 2025 looked at 10 studies on mouth taping, with 213 people in total. Some small studies showed a benefit, but most of them had already excluded patients with nasal obstruction.' },
        { type: 'p', text: 'This is an important detail, because the people most likely to consider mouth taping are precisely those who sleep with their mouth open because their nose is blocked. In other words, there is no evidence that would allow us to tell everyone to "tape your mouth at night".' },
        { type: 'h2', text: 'Possible risks of mouth taping' },
        {
          type: 'ul',
          items: [
            'In someone whose nose is not open enough, closing the mouth can make breathing harder throughout the night.',
            'In someone with sleep apnoea, it may reduce snoring while hiding the real problem, delaying diagnosis.',
            'The skin on and around the lips where the tape sticks can become irritated.',
            'If you feel sick, vomit or your nose suddenly blocks during the night, having the mouth taped shut can be uncomfortable and unsafe.',
          ],
        },
        { type: 'callout', text: 'If you sleep with your mouth open, closing it does not remove the cause. The first step is to find out why you cannot breathe comfortably through your nose.' },
        { type: 'h2', text: 'What do we look at during the examination?' },
        {
          type: 'steps',
          items: [
            { title: 'Your history', text: 'Is the blockage on one side or both, constant or seasonal? Is there snoring, pauses in breathing or daytime sleepiness?' },
            { title: 'Examination of the nose', text: 'The septum, turbinates and nasal lining are assessed. If needed, a thin camera (endoscopy) is used to look at the back of the nose and the area behind it.' },
            { title: 'Further tests', text: 'Allergy tests may be requested if allergy is suspected, imaging if sinusitis is suspected, and a sleep study if sleep apnoea is suspected.' },
          ],
        },
        { type: 'h2', text: 'Treatment depends on the cause' },
        { type: 'p', text: 'Allergic rhinitis may be managed with allergen avoidance and suitable nasal sprays, a structural narrowing with septoplasty or turbinate reduction, and sleep apnoea with a treatment planned together with a sleep specialist. Once the nose opens up, most people start breathing through it without any need for tape.' },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'p', text: 'My nose is completely clear. Can I still tape my mouth? There is not enough evidence that it benefits everyone. If you are thinking of trying it, I recommend having your nose and sleep assessed first. In particular, do not use mouth tape if you snore loudly or have been told that you stop breathing during sleep.' },
        { type: 'p', text: 'Does mouth tape stop snoring? Snoring may decrease in some people. But if the cause of snoring is a narrowing in the nose or sleep apnoea, the tape does not solve the problem; it only covers it up.' },
        { type: 'p', text: 'My child sleeps with their mouth open. Would tape help? Mouth tape should not be used in children. In a child who snores and sleeps with the mouth open, the cause, especially the adenoids and tonsils, should be investigated with an ENT examination.' },
      ],
    },
  },
};

export default post;
