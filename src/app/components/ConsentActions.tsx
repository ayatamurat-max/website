'use client';

import { useCallback } from 'react';
import styles from '../[locale]/belgeler/belgeler.module.css';

type Props = {
  pdfUrl: string;
  fileName: string;
  downloadLabel: string;
  printLabel: string;
  meta?: string;
  compact?: boolean;
};

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
  </svg>
);

const PrintIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9V3h12v6" /><rect x="3" y="9" width="18" height="8" rx="2" /><path d="M6 14h12v7H6z" />
  </svg>
);

/**
 * PDF indir / yazdır düğmeleri.
 * Masaüstünde PDF gizli bir çerçevede açılıp doğrudan yazdırma penceresi gösterilir;
 * telefon ve tabletlerde (ve bunun mümkün olmadığı tarayıcılarda) PDF yeni sekmede açılır,
 * oradan paylaş/yazdır ile yazdırılır.
 */
export default function ConsentActions({ pdfUrl, fileName, downloadLabel, printLabel, meta, compact }: Props) {
  const print = useCallback(() => {
    const ua = navigator.userAgent;
    const mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua));
    // Safari, çerçeve içindeki PDF'i güvenilir biçimde yazdıramıyor
    const safari = /Safari/.test(ua) && !/Chrome|Chromium|Edg|Android/.test(ua);
    if (mobile || safari) {
      window.open(pdfUrl, '_blank', 'noopener');
      return;
    }
    document.getElementById('consent-print-frame')?.remove();
    const frame = document.createElement('iframe');
    frame.id = 'consent-print-frame';
    frame.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;';
    frame.src = pdfUrl;
    frame.onload = () => {
      setTimeout(() => {
        try {
          frame.contentWindow?.focus();
          frame.contentWindow?.print();
        } catch {
          window.open(pdfUrl, '_blank', 'noopener');
        }
      }, 300);
    };
    document.body.appendChild(frame);
  }, [pdfUrl]);

  return (
    <div className={`${styles.actions} ${compact ? styles.actionsCompact : ''}`}>
      <a href={pdfUrl} download={fileName} className={`btn btn-primary ${styles.actionBtn}`}>
        <DownloadIcon />
        {downloadLabel}
      </a>
      <button type="button" onClick={print} className={`btn ${styles.actionBtn} ${styles.btnGhost}`}>
        <PrintIcon />
        {printLabel}
      </button>
      {meta && <span className={styles.actionMeta}>{meta}</span>}
    </div>
  );
}
