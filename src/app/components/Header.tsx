'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import styles from './Header.module.css';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image src="/logo-dark.png" alt={`${t('title')} Logo`} width={200} height={44} priority style={{ objectFit: 'contain' }} />
        </Link>

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

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <Link href="/" className={styles.navLink} onClick={closeMenu}>{t('home')}</Link>
          <Link href="/hakkimda" className={styles.navLink} onClick={closeMenu}>{t('about')}</Link>
          <Link href="/medikal-islemler" className={styles.navLink} onClick={closeMenu} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Image src="/images/medical-icon-dark.svg" alt="" width={18} height={18} />
            {t('medical')}
          </Link>
          <Link href="/cerrahi-islemler" className={styles.navLink} onClick={closeMenu} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Image src="/images/surgical-icon-dark.svg" alt="" width={18} height={18} />
            {t('surgical')}
          </Link>
          <Link href="/iletisim" className={styles.navLink} onClick={closeMenu}>{t('contact')}</Link>
          
          <div className={styles.mobileCta}>
            <LanguageSwitcher />
            <Link href="/iletisim" className="btn btn-primary" onClick={closeMenu}>
              {t('book')}
            </Link>
          </div>
        </nav>

        <div className={styles.cta}>
          <LanguageSwitcher />
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
