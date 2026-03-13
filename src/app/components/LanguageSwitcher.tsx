'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './LanguageSwitcher.module.css';

const LANGUAGES = [
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'bg', label: 'Български', flag: '🇧🇬' }
];

export default function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = LANGUAGES.find(lang => lang.code === currentLocale) || LANGUAGES[0];

  const handleLanguageChange = (locale: string) => {
    setIsOpen(false);
    
    // Determine the new path
    // Remove the current locale prefix if it exists in the pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    
    // next-intl middleware handles 'as-needed' prefixes, 
    // but we can manually navigate to the locale prefixed route which the middleware evaluates.
    const newPath = `/${locale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    
    // Provide a hard refresh to ensure layout and intl context re-mounts correctly
    window.location.href = newPath;
  };

  return (
    <div className={styles.switcherContainer}>
      <button 
        className={styles.switcherBtn} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Dil Seçimi"
      >
        <span className={styles.flag}>{currentLang.flag}</span>
        <span className={styles.code}>{currentLang.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.dropdownItem} ${currentLocale === lang.code ? styles.active : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <span className={styles.flag}>{lang.flag}</span>
              <span className={styles.label}>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
