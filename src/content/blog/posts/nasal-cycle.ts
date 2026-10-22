import type { Post } from '../types';
import ru from '../i18n/nasal-cycle/ru';
import de from '../i18n/nasal-cycle/de';
import fr from '../i18n/nasal-cycle/fr';
import bg from '../i18n/nasal-cycle/bg';

// Kaynak: Scriptler/3. hafta/1. gurup reels scriptleri.pages (4. Burnum neden sırayla tıkanıyor?)
const post: Post = {
  slug: 'why-one-nostril-gets-blocked',
  date: '2026-10-16',
  cover: '/blog/nasal-cycle.svg',
  shareImage: '/blog/nasal-cycle.jpg',
  procedure: { href: '/septoplasti', icon: 'septoplasty' },
  translations: {
    ru,
    de,
    fr,
    bg,
    tr: {
      title: 'Burnum neden sırayla tıkanıyor? Nazal siklus',
      description:
        'Bir burun deliğinizin birkaç saat daha kapalı olması her zaman hastalık değil. Burnun doğal döngüsü olan nazal siklus nedir, neden olur ve ne zaman başka bir nedenden şüphelenmek gerekir?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'Bir burun deliğinizin birkaç saat daha kapalı olması her zaman hastalık değil. Bunun bir adı var: nazal siklus, yani burnumuzun doğal döngüsü.' },
        { type: 'p', text: 'Muayenede sık duyduğumuz bir cümle var: "Burnumun bir tarafı tıkanıyor, sonra diğer tarafı." Çoğu zaman hastalar bunun bir sorun olduğunu düşünerek geliyor. Oysa belli bir ölçüde bu, sağlıklı bir burnun normal çalışma şekli.' },
        { type: 'h2', text: 'Konkalar: Burnun içindeki "ayarlanabilir" yapılar' },
        { type: 'p', text: 'Burnumuzun iç yan duvarlarında konka dediğimiz, halk arasında burun eti denen yapılar var. Bunların içinde çok zengin bir damar ağı bulunuyor. Bu damarlar kanla dolduğunda konka şişiyor, boşaldığında küçülüyor. Böylece burun, içinden geçen havanın miktarını adeta bir vana gibi ayarlayabiliyor.' },
        { type: 'h2', text: 'Nazal siklus nasıl oluyor?' },
        {
          type: 'steps',
          items: [
            { title: 'Bir taraf şişer', text: 'Günün belli dönemlerinde bir taraftaki konkalar biraz şişiyor ve o taraftan geçen hava azalıyor.' },
            { title: 'Diğer taraf açılır', text: 'Aynı sırada diğer taraf biraz daha açılıyor.' },
            { title: 'Yer değiştirirler', text: 'Bir süre sonra da iki taraf yer değiştiriyor ve döngü böyle devam ediyor.' },
          ],
        },
        { type: 'p', text: 'Bu süreç büyük ölçüde otonom sinir sistemi, yani bizim isteğimizle kontrol etmediğimiz sinir sistemi tarafından yönetiliyor ve sağlıklı insanlarda da görülüyor.' },
        { type: 'h2', text: 'Neden çoğu zaman fark etmiyoruz?' },
        { type: 'p', text: 'Bir taraf daralırken diğer taraf açıldığı için, burundan geçen toplam hava miktarı genellikle fazla değişmiyor. Bu yüzden çoğu insan nazal siklusu hiç fark etmiyor. Fark edildiği durumlar ise genellikle şunlar:' },
        {
          type: 'ul',
          items: [
            'Soğuk algınlığı ya da alerji sırasında, mukoza zaten şişkinken',
            'Septumu bir tarafa eğri olan kişilerde, döngü dar tarafa geldiğinde',
            'Gece yatarken ve uykuya dalmaya çalışırken, burna daha çok dikkat ettiğimizde',
          ],
        },
        { type: 'h2', text: 'Yan yatınca neden alttaki taraf tıkanıyor?' },
        { type: 'p', text: 'Yan yattığınızda altta kalan tarafta tıkanıklığı daha fazla hissedebilirsiniz. Bu da büyük ölçüde konkalardaki damar ağının pozisyona verdiği bir yanıt. Diğer tarafa döndüğünüzde bir süre sonra tıkanıklığın da yer değiştirdiğini fark edebilirsiniz.' },
        { type: 'h2', text: 'Nazal siklus neden var?' },
        { type: 'p', text: 'Nazal siklusun tam olarak neden var olduğunu bilmiyoruz. Ama bir görüşe göre, bir taraf daha fazla hava geçirirken diğer tarafın mukozası nemini koruyor ve temizleme işine devam ediyor. Koku algısına katkısı olabileceğine dair teoriler de var.' },
        { type: 'h2', text: 'Ne zaman sadece nazal siklus değildir?' },
        { type: 'p', text: 'Nazal siklus, iki taraf arasında gidip gelen ve sizi genellikle rahatsız etmeyen bir durumdur. Şu durumlarda ise başka bir nedenden şüphelenmek gerekir:' },
        {
          type: 'ul',
          items: [
            'Tıkanıklık sürekli aynı taraftaysa',
            'Çok belirginse ve nefes almanızı zorlaştırıyorsa',
            'Gün boyunca sizi rahatsız ediyor, uykunuzu bozuyorsa',
            'Tek taraflı kanlı ya da kötü kokulu akıntı, koku kaybı veya yüzde ağrı eşlik ediyorsa',
          ],
        },
        { type: 'callout', text: 'Bu durumlarda tıkanıklığı sadece nazal siklus deyip geçmiyoruz; septum deviasyonu, konka büyümesi, alerji ya da başka bir nedeni araştırmak gerekir.' },
        { type: 'h2', text: 'Muayenede neye bakıyoruz?' },
        { type: 'p', text: 'Burun içini muayene ederek septumun düz olup olmadığına, konkaların büyüklüğüne ve mukozanın durumuna bakıyoruz. Gerekirse ince bir kamerayla (endoskopi) burnun daha derin bölümlerini değerlendiriyoruz. Bazen konkaları geçici olarak küçülten bir sprey sıktıktan sonra tekrar bakıyoruz; böylece tıkanıklığın şişebilen dokudan mı, yoksa septum gibi yapısal bir darlıktan mı kaynaklandığını ayırt edebiliyoruz.' },
        { type: 'h2', text: 'Tedavi gerekir mi?' },
        { type: 'p', text: 'Nazal siklusun kendisi bir hastalık değil, tedavi gerektirmez. Tedavi, tıkanıklığın altında yatan bir neden varsa ona yönelik planlanır: alerjide uygun ilaçlar ve sprey tedavileri, yapısal bir sorunda septoplasti ya da konka küçültme gibi seçenekler gündeme gelebilir.' },
        { type: 'p', text: 'Burada bir uyarı eklemek isterim: Tıkanıklığı açmak için eczaneden alınan dekonjestan (burun açıcı) spreylerin uzun süre kullanılması, zamanla burnun bu spreylere bağımlı hale gelmesine ve tıkanıklığın artmasına yol açabilir.' },
        { type: 'h2', text: 'Sık sorulan sorular' },
        { type: 'p', text: 'Bir taraf tıkanınca diğer tarafa yatmak işe yarar mı? Çoğu zaman evet. Yan yattığınızda altta kalan taraf daha çok tıkanma eğiliminde olduğu için, tıkalı tarafı üste getirmek rahatlatabilir.' },
        { type: 'p', text: 'Çocuklarda da nazal siklus olur mu? Evet, çocuklarda da görülür. Ama çocukta sürekli tek taraflı tıkanıklık ve akıntı varsa, burna kaçmış bir yabancı cisim gibi nedenler açısından muayene edilmesi gerekir.' },
        { type: 'p', text: 'Nazal siklus tamamen durabilir mi? Normal bir burunda döngü devam eder. Sürekli aynı tarafın kapalı olması döngünün değil, başka bir sorunun işareti olabilir.' },
      ],
    },
    en: {
      title: 'Why does one side of my nose get blocked, then the other? The nasal cycle',
      description:
        'One nostril being more blocked for a few hours is not always a disease. What is the nasal cycle, why does it happen and when should another cause be suspected?',
      readMinutes: 4,
      body: [
        { type: 'p', text: 'One of your nostrils being more blocked for a few hours is not always a sign of disease. It has a name: the nasal cycle, the natural rhythm of the nose.' },
        { type: 'p', text: 'There is a sentence we often hear in clinic: "One side of my nose gets blocked, then the other." Patients usually come in thinking this is a problem. In fact, to a certain extent, it is how a healthy nose normally works.' },
        { type: 'h2', text: 'Turbinates: the "adjustable" structures inside the nose' },
        { type: 'p', text: 'On the inner side walls of the nose there are structures called turbinates. They contain a very rich network of blood vessels. When these vessels fill with blood the turbinate swells, and when they empty it shrinks. In this way the nose can adjust the amount of air passing through it, almost like a valve.' },
        { type: 'h2', text: 'How does the nasal cycle work?' },
        {
          type: 'steps',
          items: [
            { title: 'One side swells', text: 'At certain times of the day the turbinates on one side swell slightly and less air passes through that side.' },
            { title: 'The other side opens', text: 'At the same time the other side opens up a little more.' },
            { title: 'They switch', text: 'After a while, the two sides swap roles, and the cycle continues.' },
          ],
        },
        { type: 'p', text: 'This process is largely controlled by the autonomic nervous system, the part of the nervous system we do not consciously control, and it is seen in healthy people too.' },
        { type: 'h2', text: 'Why don\'t we usually notice it?' },
        { type: 'p', text: 'Because one side opens as the other narrows, the total amount of air passing through the nose usually does not change much. That is why most people never notice the nasal cycle. It tends to be noticed:' },
        {
          type: 'ul',
          items: [
            'During a cold or allergy, when the lining is already swollen',
            'In people with a septum deviated to one side, when the cycle reaches the narrower side',
            'At night when lying down and trying to fall asleep, when we pay more attention to the nose',
          ],
        },
        { type: 'h2', text: 'Why does the lower side block when you lie on your side?' },
        { type: 'p', text: 'When you lie on your side, you may feel more blockage on the lower side. This is largely a response of the blood vessel network in the turbinates to body position. If you turn to the other side, you may notice after a while that the blockage switches sides too.' },
        { type: 'h2', text: 'Why does the nasal cycle exist?' },
        { type: 'p', text: 'We don\'t know exactly why the nasal cycle exists. According to one view, while one side carries more air, the lining of the other side keeps its moisture and continues its cleaning work. There are also theories that it may contribute to the sense of smell.' },
        { type: 'h2', text: 'When is it not just the nasal cycle?' },
        { type: 'p', text: 'The nasal cycle alternates between the two sides and usually does not bother you. Another cause should be suspected if:' },
        {
          type: 'ul',
          items: [
            'The blockage is always on the same side',
            'It is very pronounced and makes breathing difficult',
            'It bothers you throughout the day or disturbs your sleep',
            'It comes with one-sided bloody or foul-smelling discharge, loss of smell or facial pain',
          ],
        },
        { type: 'callout', text: 'In these cases we don\'t simply put it down to the nasal cycle; a deviated septum, enlarged turbinates, allergy or another cause should be investigated.' },
        { type: 'h2', text: 'What do we look at during the examination?' },
        { type: 'p', text: 'By examining the inside of the nose, we check whether the septum is straight, how large the turbinates are and what condition the lining is in. If needed, a thin camera (endoscopy) is used to assess the deeper parts of the nose. Sometimes we look again after spraying a decongestant that temporarily shrinks the turbinates; this helps distinguish whether the blockage comes from swelling tissue or from a structural narrowing such as the septum.' },
        { type: 'h2', text: 'Is treatment needed?' },
        { type: 'p', text: 'The nasal cycle itself is not a disease and does not need treatment. Treatment is planned for any underlying cause of the blockage: suitable medication and nasal sprays for allergy, or options such as septoplasty or turbinate reduction for a structural problem.' },
        { type: 'p', text: 'I would like to add a warning here: long-term use of over-the-counter decongestant sprays to clear a blocked nose can, over time, make the nose dependent on them and make the blockage worse.' },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'p', text: 'Does lying on the other side help when one side is blocked? Often, yes. Because the lower side tends to block more when you lie on your side, turning so that the blocked side is on top can bring relief.' },
        { type: 'p', text: 'Do children have a nasal cycle too? Yes. But if a child has constant one-sided blockage and discharge, they should be examined for causes such as a foreign object in the nose.' },
        { type: 'p', text: 'Can the nasal cycle stop completely? In a normal nose the cycle continues. If the same side is always blocked, that may be a sign of another problem rather than the cycle.' },
      ],
    },
  },
};

export default post;
