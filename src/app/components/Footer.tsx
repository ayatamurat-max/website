import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import styles from './Footer.module.css';
import ProcedureIcon from './ProcedureIcon';

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations('Footer');
  const tNav = useTranslations('Header');
  const tContact = useTranslations('Contact');
  const locale = useLocale();
  // Türkiye'deki hastalar Doktor Takvimi'nden, yurt dışındaki hastalar WhatsApp'tan randevu alır
  const bookingUrl = locale === 'tr'
    ? 'https://www.doktortakvimi.com/murat-ayata/kulak-burun-bogaz/kirklareli'
    : 'https://wa.me/905553332120';
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brand}>
          <Image src="/logo-white.webp" alt={`${tNav('title')} Logo`} width={250} height={55} style={{ objectFit: 'contain', marginBottom: '1rem' }} />
          <p className={styles.description}>
            {t('description')}
          </p>
          <div className={styles.social}>
            <a href="https://www.facebook.com/drmuratayata" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
              <Image src="/images/facebook-icon.svg" alt="" width={20} height={20} />
            </a>
            <a href="https://www.instagram.com/op.dr.muratayata/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
              <Image src="/images/instagram-icon.svg" alt="" width={20} height={20} />
            </a>
            <a href="https://x.com/muratayataMD" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="X">
              <Image src="/images/twitter-icon.svg" alt="" width={20} height={20} />
            </a>
            <a href="https://www.linkedin.com/in/murat-ayata-08203212b/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
              <Image src="/images/linkedin-icon.svg" alt="" width={20} height={20} />
            </a>
          </div>
        </div>
        
        <div className={styles.links}>
          <h3 className={styles.title}>{t('menuTitle')}</h3>
          <ul className={styles.list}>
            <li><Link href="/">{tNav('home')}</Link></li>
            <li><Link href="/hakkimda">{tNav('about')}</Link></li>
            <li><Link href="/international-patients">{tNav('international')}</Link></li>
            <li>
              <Link href="/rinoplasti" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <ProcedureIcon name="rhinoplasty" size={16} />
                {tNav('rhinoplasty')}
              </Link>
            </li>
            <li>
              <Link href="/medikal-islemler" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <ProcedureIcon name="medical" size={16} />
                {tNav('medical')}
              </Link>
            </li>
            <li>
              <Link href="/cerrahi-islemler" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <ProcedureIcon name="surgical" size={16} />
                {tNav('surgical')}
              </Link>
            </li>
            <li><Link href="/blog">{tNav('blog')}</Link></li>
            <li><Link href="/iletisim">{tNav('contact')}</Link></li>
          </ul>
        </div>
        
        <div className={styles.contact}>
          <h3 className={styles.title}>{t('contactTitle')}</h3>
          <ul className={styles.list}>
            <li><strong>{t('addressLabel')}:</strong> {t('address')}</li>
            <li><strong>{tContact('phoneLabel')}:</strong> <a href="tel:+905553332120" className={styles.accentLink}>+90 555 333 21 20</a></li>
            <li><strong>{t('email')}:</strong> <a href="mailto:info@muratayata.com" className={styles.accentLink}>info@muratayata.com</a></li>
            <li>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={styles.accentLink}>
                {tNav('book')}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {year} {tNav('title')}. {t('rights')} · <Link href="/gizlilik-politikasi" className={styles.accentLink}>{t('privacy')}</Link></p>
          <p style={{ marginTop: '0.5rem', opacity: 0.6, fontSize: '0.8rem' }}>
            {t('lastUpdated')}: {year}/{new Date().getMonth() + 1 < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1}
          </p>
        </div>
      </div>
    </footer>
  );
}
