'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export const META_PIXEL_ID = '1824211318759483';
export const CONSENT_KEY = 'cookie-consent';

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Meta Pixel.
 * - Ziyaretçi çerez onayı verene kadar veri gönderilmez (GDPR / KVKK).
 * - Her sayfa geçişinde PageView, WhatsApp ve telefon tıklamalarında "Contact" olayı gönderilir.
 */
export default function MetaPixel() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  // Sayfa geçişlerinde PageView (ilk sayfa görüntülemesini temel kod gönderir)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.fbq?.('track', 'PageView');
  }, [pathname]);

  // WhatsApp ve telefon tıklamalarını dönüşüm olarak ölç
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest?.('a');
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (href.includes('wa.me/')) {
        window.fbq?.('track', 'Contact', { method: 'whatsapp', page: window.location.pathname });
      } else if (href.startsWith('tel:')) {
        window.fbq?.('track', 'Contact', { method: 'phone', page: window.location.pathname });
      }
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
var consent=null;try{consent=localStorage.getItem('${CONSENT_KEY}')}catch(e){}
if(consent!=='granted'){fbq('consent','revoke');}
fbq('init','${META_PIXEL_ID}');
fbq('track','PageView');`}
    </Script>
  );
}
