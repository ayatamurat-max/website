'use client';

import { CONSENT_KEY } from './MetaPixel';

export default function ConsentReset({ label }: { label: string }) {
  const reset = () => {
    try {
      localStorage.removeItem(CONSENT_KEY);
    } catch {
      /* depolama kapalı */
    }
    window.fbq?.('consent', 'revoke');
    window.location.reload();
  };

  return (
    <button type="button" className="btn btn-outline" onClick={reset}>
      {label}
    </button>
  );
}
