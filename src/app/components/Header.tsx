'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import styles from './Header.module.css';
import LanguageSwitcher from './LanguageSwitcher';

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
          <Image src="/logo.svg" alt={`${t('title')} Logo`} width={150} height={69} priority unoptimized style={{ objectFit: 'contain' }} />
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
          <Link href="/rinoplasti" className={styles.navLink} onClick={closeMenu}>{t('rhinoplasty')}</Link>
          <Link href="/medikal-islemler" className={styles.navLink} onClick={closeMenu}>{t('medical')}</Link>
          <Link href="/cerrahi-islemler" className={styles.navLink} onClick={closeMenu}>{t('surgical')}</Link>
          <Link href="/blog" className={styles.navLink} onClick={closeMenu}>{t('blog')}</Link>
          {/* Belgeler: alt menüye yeni belge türleri eklenebilir */}
          <div className={styles.navGroup}>
            <Link href="/belgeler" className={`${styles.navLink} ${styles.navParent}`} onClick={closeMenu}>
              {t('documents')}
              <svg className={styles.caret} width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </Link>
            <div className={styles.dropdown}>
              <Link href="/belgeler/onam-formlari" className={styles.dropdownLink} onClick={closeMenu}>{t('consentForms')}</Link>
            </div>
          </div>
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
