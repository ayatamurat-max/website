import type { Metadata } from 'next';
import { buildMetadata } from '@/i18n/metadata';
import { CLINIC } from '@/lib/clinic';
import ConsentReset from '../../components/ConsentReset';
import styles from './privacy.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'privacy', '/gizlilik-politikasi');
}

const UPDATED_TR = '9 Ekim 2026';
const UPDATED_EN = '9 October 2026';

function Turkish() {
  return (
    <article className={styles.doc}>
      <span className="section-tag">KVKK</span>
      <h1>KVKK Aydınlatma Metni ve Çerez Politikası</h1>
      <p className={styles.updated}>Son güncelleme: {UPDATED_TR}</p>

      <h2>1. Veri sorumlusu</h2>
      <p>
        6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) kapsamında veri sorumlusu, Op. Dr. Murat Ayata’dır ({CLINIC.name}).
      </p>
      <ul>
        <li><strong>Adres:</strong> {CLINIC.addressLine}</li>
        <li><strong>E-posta:</strong> <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a></li>
        <li><strong>Telefon:</strong> <a href={`tel:${CLINIC.phoneTel}`}>{CLINIC.phoneDisplay}</a></li>
      </ul>

      <h2>2. İşlenen kişisel veriler</h2>
      <ul>
        <li><strong>Kimlik ve iletişim bilgileri:</strong> WhatsApp, telefon veya e-posta ile bize ulaştığınızda paylaştığınız ad, telefon numarası ve e-posta adresi.</li>
        <li><strong>Sağlık verileri:</strong> Ön değerlendirme ve görüntülü görüşme sırasında paylaştığınız şikâyetler, fotoğraflar ve tıbbi bilgiler.</li>
        <li><strong>Site kullanım verileri:</strong> Yalnızca çerezlere onay vermeniz hâlinde; IP adresi, tarayıcı bilgisi, ziyaret edilen sayfalar ve sitedeki tıklamalar.</li>
      </ul>

      <h2>3. İşleme amaçları</h2>
      <ul>
        <li>Talep ve sorularınızı yanıtlamak, ön görüşme ve randevu planlamak,</li>
        <li>Tıbbi değerlendirme, teşhis, tedavi ve takip hizmetlerini yürütmek,</li>
        <li>Yasal yükümlülükleri yerine getirmek,</li>
        <li>İnternet sitesinin güvenli çalışmasını sağlamak,</li>
        <li>Onay vermeniz hâlinde reklamlarımızın etkinliğini ölçmek.</li>
      </ul>

      <h2>4. Hukuki sebepler</h2>
      <p>
        Kişisel verileriniz KVKK’nın 5. maddesinde yer alan bir sözleşmenin kurulması veya ifası, hukuki yükümlülüğün yerine getirilmesi ve meşru menfaat
        hukuki sebeplerine dayanılarak işlenir. Sağlık verileriniz, KVKK’nın 6. maddesi uyarınca sır saklama yükümlülüğü altındaki kişilerce tıbbi teşhis, tedavi
        ve bakım hizmetlerinin yürütülmesi amacıyla veya açık rızanıza dayanılarak işlenir. Reklam ölçümüne yönelik çerezler yalnızca açık rızanızla kullanılır.
      </p>

      <h2>5. Verilerin aktarılması</h2>
      <p>Kişisel verileriniz, yukarıdaki amaçlarla sınırlı olarak şu alıcılarla paylaşılabilir:</p>
      <ul>
        <li>Ameliyatların yapıldığı Lüleburgaz Özel Medikent Hastanesi,</li>
        <li>Meta Platforms (WhatsApp üzerinden iletişim; onay vermeniz hâlinde Meta Pixel),</li>
        <li>Vercel Inc. (internet sitesinin barındırılması), Google (harita hizmeti), Doktor Takvimi (online randevu),</li>
        <li>Talep edilmesi hâlinde yetkili kamu kurum ve kuruluşları.</li>
      </ul>
      <p>
        Bu hizmet sağlayıcıların bir kısmının sunucuları yurt dışında bulunduğundan, verileriniz KVKK’nın 9. maddesine uygun olarak yurt dışına aktarılabilir.
      </p>

      <h2>6. Saklama süresi</h2>
      <p>
        Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta (özellikle sağlık kayıtlarına ilişkin düzenlemelerde) öngörülen süreler
        kadar saklanır; bu sürelerin sonunda silinir, yok edilir veya anonim hâle getirilir.
      </p>

      <h2>7. Haklarınız</h2>
      <p>KVKK’nın 11. maddesi uyarınca;</p>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme ve işlenmişse bilgi talep etme,</li>
        <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
        <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
        <li>Eksik veya yanlış işlenmişse düzeltilmesini, şartları oluştuğunda silinmesini veya yok edilmesini isteme ve bu işlemlerin aktarılan üçüncü kişilere bildirilmesini talep etme,</li>
        <li>Münhasıran otomatik sistemlerle analiz edilmesi sonucu aleyhinize bir sonucun ortaya çıkmasına itiraz etme,</li>
        <li>Kanuna aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
      </ul>
      <p>haklarına sahipsiniz.</p>

      <h2>8. Başvuru</h2>
      <p>
        Haklarınıza ilişkin taleplerinizi <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a> adresine veya yukarıdaki posta adresine yazılı olarak iletebilirsiniz.
        Başvurunuz en geç 30 gün içinde sonuçlandırılır.
      </p>

      <h2 id="cerezler">9. Çerez politikası</h2>
      <p>Sitemizde iki tür çerez ve benzeri teknoloji kullanılır:</p>
      <ul>
        <li><strong>Zorunlu:</strong> Dil tercihinizi ve çerez tercihinizi hatırlamak için. Bunlar sitenin çalışması için gereklidir.</li>
        <li><strong>Anonim ziyaret istatistikleri (Vercel Web Analytics):</strong> Hangi sayfaların ne kadar ziyaret edildiğini ölçmek için kullanılır. Çerez kullanmaz, sizi tanımlamaz ve veriler toplu (anonim) olarak raporlanır.</li>
        <li><strong>Reklam ve ölçüm (Meta Pixel):</strong> Reklamlarımızın kaç kişiye ulaştığını ve kaç kişinin bizimle iletişime geçtiğini ölçmek için. Yalnızca çerez bandında “Kabul et” seçeneğini işaretlemeniz hâlinde çalışır.</li>
      </ul>
      <p>Tercihinizi istediğiniz zaman değiştirebilirsiniz:</p>
      <ConsentReset label="Çerez tercihlerimi değiştir" />
    </article>
  );
}

function English() {
  return (
    <article className={styles.doc}>
      <span className="section-tag">Privacy</span>
      <h1>Privacy Policy</h1>
      <p className={styles.updated}>Last updated: {UPDATED_EN}</p>

      <h2>1. Data controller</h2>
      <p>The data controller is Op. Dr. Murat Ayata ({CLINIC.name}).</p>
      <ul>
        <li><strong>Address:</strong> {CLINIC.addressLine}</li>
        <li><strong>Email:</strong> <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a></li>
        <li><strong>Phone:</strong> <a href={`tel:${CLINIC.phoneTel}`}>{CLINIC.phoneDisplay}</a></li>
      </ul>

      <h2>2. Data we process</h2>
      <ul>
        <li><strong>Identity and contact details:</strong> your name, phone number and email address when you contact us via WhatsApp, phone or email.</li>
        <li><strong>Health data:</strong> concerns, photos and medical information you share during the preliminary assessment and video consultation.</li>
        <li><strong>Website usage data:</strong> only if you accept cookies; IP address, browser information, pages visited and clicks on the website.</li>
      </ul>

      <h2>3. Why we process your data</h2>
      <ul>
        <li>To answer your questions and plan your consultation and appointments,</li>
        <li>To provide medical assessment, diagnosis, treatment and follow-up,</li>
        <li>To comply with our legal obligations,</li>
        <li>To keep the website secure and working,</li>
        <li>If you consent, to measure the effectiveness of our advertising.</li>
      </ul>

      <h2>4. Legal bases</h2>
      <p>
        We process your data to take steps at your request before providing care and to provide that care, to comply with legal obligations, and on the basis
        of our legitimate interests. Health data is processed by persons bound by medical confidentiality for the purposes of medical diagnosis and treatment,
        or with your explicit consent. Advertising cookies are used only with your consent. Our processing is governed by Turkish Law No. 6698 on the
        Protection of Personal Data (KVKK).
      </p>

      <h2>5. Who we share data with</h2>
      <ul>
        <li>Lüleburgaz Özel Medikent Hospital, where surgeries are performed,</li>
        <li>Meta Platforms (communication via WhatsApp; Meta Pixel only if you consent),</li>
        <li>Vercel Inc. (website hosting), Google (maps), Doktor Takvimi (online booking in Türkiye),</li>
        <li>Competent public authorities, where legally required.</li>
      </ul>
      <p>Some of these providers process data outside Türkiye; such transfers are made in accordance with applicable law.</p>

      <h2>6. How long we keep data</h2>
      <p>
        We keep your data for as long as necessary for the purposes above and for the periods required by law, in particular for medical records. After that,
        it is deleted, destroyed or anonymised.
      </p>

      <h2>7. Your rights</h2>
      <p>
        You may request information about whether and how your data is processed, ask for it to be corrected or deleted, learn who it has been shared with,
        object to decisions made solely by automated means, and claim compensation for damage caused by unlawful processing. Where you have given consent, you
        may withdraw it at any time. You also have the right to lodge a complaint with the Turkish Personal Data Protection Authority or, if you live in the
        EU/EEA, with your local data protection authority.
      </p>

      <h2>8. Contact</h2>
      <p>
        Send your requests to <a href={`mailto:${CLINIC.email}`}>{CLINIC.email}</a> or to the postal address above. We respond within 30 days at the latest.
      </p>

      <h2 id="cookies">9. Cookies</h2>
      <ul>
        <li><strong>Necessary:</strong> to remember your language and cookie preferences. These are required for the website to work.</li>
        <li><strong>Anonymous visit statistics (Vercel Web Analytics):</strong> to measure how often pages are visited. It does not use cookies, does not identify you and reports data only in aggregate.</li>
        <li><strong>Advertising and measurement (Meta Pixel):</strong> to measure how many people our ads reach and how many contact us. Used only if you select “Accept” in the cookie banner.</li>
      </ul>
      <p>You can change your choice at any time:</p>
      <ConsentReset label="Change my cookie preferences" />
    </article>
  );
}

export default async function PrivacyPolicy({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <div className="container">{locale === 'tr' ? <Turkish /> : <English />}</div>;
}
