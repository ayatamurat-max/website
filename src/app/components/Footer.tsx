import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslations('Footer');
  const tNav = useTranslations('Header');
  
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
            <a href="https://twitter.com/muratayataMD" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Twitter">
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
            <li>
              <Link href="/medikal-islemler" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Image src="/images/medical-icon.svg" alt="" width={16} height={16} />
                {tNav('medical')}
              </Link>
            </li>
            <li>
              <Link href="/cerrahi-islemler" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Image src="/images/surgical-icon.svg" alt="" width={16} height={16} />
                {tNav('surgical')}
              </Link>
            </li>
            <li><Link href="/iletisim">{tNav('contact')}</Link></li>
          </ul>
        </div>
        
        <div className={styles.contact}>
          <h3 className={styles.title}>{t('contactTitle')}</h3>
          <ul className={styles.list}>
            <li><strong>Adres:</strong> {t('address')}</li>
            <li><strong>Email:</strong> <a href="mailto:info@muratayata.com" className={styles.accentLink}>info@muratayata.com</a></li>
            <li>
              <a href="https://www.doktortakvimi.com/murat-ayata/kulak-burun-bogaz/kirklareli" target="_blank" rel="noopener noreferrer" className={styles.accentLink}>
                {tNav('book')}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomContainer}`}>
          <p>&copy; {year} {tNav('title')}. {t('rights')}</p>
          <p style={{ marginTop: '0.5rem', opacity: 0.6, fontSize: '0.8rem' }}>
            {t('lastUpdated')}: {year}/{new Date().getMonth() + 1 < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1}
          </p>
        </div>
      </div>
    </footer>
  );
}
