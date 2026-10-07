'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import styles from './Header.module.css';
import LanguageSwitcher from './LanguageSwitcher';
import ProcedureIcon from './ProcedureIcon';

export default function Header() {
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const locale = useLocale();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image src="/logo-dark.png" alt={`${t('title')} Logo`} width={200} height={44} priority style={{ objectFit: 'contain' }} />
        </Link>

        <div className={styles.headerRight}>
          <div className={styles.headerSwitcher}>
            <LanguageSwitcher />
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            className={`${styles.menuButton} ${isMenuOpen ? styles.menuActive : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          {/* Yabancı dillerde "Ana Sayfa" yerine Yurt Dışı Hastalar sayfası (ana sayfaya logodan gidilir) */}
          {locale === 'tr' ? (
            <Link href="/" className={styles.navLink} onClick={closeMenu}>{t('home')}</Link>
          ) : (
            <Link href="/international-patients" className={styles.navLink} onClick={closeMenu}>{t('international')}</Link>
          )}
          <Link href="/hakkimda" className={styles.navLink} onClick={closeMenu}>{t('about')}</Link>
          <Link href="/rinoplasti" className={styles.navLink} onClick={closeMenu} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <ProcedureIcon name="rhinoplasty" size={18} />
            {t('rhinoplasty')}
          </Link>
          <Link href="/medikal-islemler" className={styles.navLink} onClick={closeMenu} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <ProcedureIcon name="medical" size={18} />
            {t('medical')}
          </Link>
          <Link href="/cerrahi-islemler" className={styles.navLink} onClick={closeMenu} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <ProcedureIcon name="surgical" size={18} />
            {t('surgical')}
          </Link>
          <Link href="/blog" className={styles.navLink} onClick={closeMenu}>{t('blog')}</Link>
          <Link href="/iletisim" className={styles.navLink} onClick={closeMenu}>{t('contact')}</Link>
          
          <div className={styles.mobileCta}>
            <Link href="/iletisim" className="btn btn-primary" onClick={closeMenu}>
              {t('book')}
            </Link>
          </div>
        </nav>

        <div className={styles.cta}>
          <Link
            href="/iletisim"
            className="btn btn-primary"
          >
            {t('book')}
          </Link>
        </div>
      </div>
    </header>
  );
}
