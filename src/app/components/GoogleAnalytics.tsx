'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { CONSENT_KEY } from './MetaPixel';

export const GA_MEASUREMENT_ID = 'G-H7PD9W0JYR';
export const CONSENT_EVENT = 'cookie-consent-change';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Google Analytics 4.
 * - Betik yalnızca ziyaretçi çerez bandında "Kabul et" dediğinde yüklenir (GDPR / KVKK).
 * - Sayfa geçişleri GA4'ün "gelişmiş ölçüm" özelliğiyle (tarayıcı geçmişi değişiklikleri) otomatik sayılır.
 * - WhatsApp ve telefon tıklamaları "contact" olayı olarak gönderilir.
 */
export default function GoogleAnalytics() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const read = () => {
      try {
        setGranted(localStorage.getItem(CONSENT_KEY) === 'granted');
      } catch {
        setGranted(false);
      }
    };
    read();
    window.addEventListener(CONSENT_EVENT, read);
    return () => window.removeEventListener(CONSENT_EVENT, read);
  }, []);

  useEffect(() => {
    if (!granted) return;
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.includes('wa.me/')) {
        window.gtag?.('event', 'contact', { method: 'whatsapp', page_path: window.location.pathname });
      } else if (href.startsWith('tel:')) {
        window.gtag?.('event', 'contact', { method: 'phone', page_path: window.location.pathname });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [granted]);

  if (!granted) return null;

  return (
    <>
      <Script
        id="ga4-lib"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;
gtag('js',new Date());
gtag('config','${GA_MEASUREMENT_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
