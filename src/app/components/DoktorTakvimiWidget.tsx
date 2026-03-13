'use client';
import Script from 'next/script';

export default function DoktorTakvimiWidget() {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '2rem 0', minHeight: '500px' }}>
      <a 
        id="zl-url" 
        className="zl-url" 
        href="https://www.doktortakvimi.com/murat-ayata/kulak-burun-bogaz/kirklareli" 
        rel="nofollow" 
        data-zlw-doctor="murat-ayata" 
        data-zlw-type="big_with_calendar" 
        data-zlw-opinion="false" 
        data-zlw-hide-branding="true" 
        data-zlw-saas-only="false" 
        data-zlw-a11y-title="Doktor randevu widgeti"
      >
        Randevu al
      </a>
      <Script 
        id="zl-widget-s"
        src="https://platform.docplanner.com/js/widget.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
