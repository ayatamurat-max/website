import { Metadata } from 'next';
import { buildMetadata } from '@/i18n/metadata';
import DoktorTakvimiWidget from '../../components/DoktorTakvimiWidget';
import { useLocale, useTranslations } from 'next-intl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'contact', '/iletisim');
}

export default function Iletisim() {
  const t = useTranslations('Contact');
  const locale = useLocale();

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '80vh' }}>
      <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-tag">{t('tag')}</span>
          <h1>{t('title')}</h1>
          <p style={{ color: 'var(--color-text-light)', marginTop: '1rem' }}>
            {t('desc')}
          </p>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', flexShrink: 0, fontWeight: 'bold' }}>📍</div>
            <div style={{ width: '100%' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>{t('addressTitle')}</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6', marginBottom: '1.5rem' }}>{t('addressDesc')}</p>
              
              <div style={{ width: '100%', height: '300px', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1rem' }}>
                <iframe 
                  src="https://maps.google.com/maps?q=41.73361,27.224279&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
              </div>
              <a 
                href="https://www.google.com/maps/place/Op.Dr.+Murat+Ayata+Muayenehanesi/@41.73361,27.224279,17z/data=!3m1!4b1!4m6!3m5!1s0x40a75342c3d8a013:0xd7343c6ed8e3e709!8m2!3d41.73361!4d27.224279!16s%2Fg%2F11flz426qc!18m1!1e1?entry=ttu" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ display: 'inline-block', color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid var(--color-accent)', paddingBottom: '0.2rem' }}
              >
                {t('getDirections')} &rarr;
              </a>
            </div>
          </div>

          {/* WhatsApp ve telefon: tüm dillerde görünür */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', flexShrink: 0, fontWeight: 'bold' }}>💬</div>
            <div style={{ width: '100%' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>{t('whatsappTitle')}</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6', marginBottom: '1rem' }}>{t('whatsappDesc')}</p>
              <p style={{ marginBottom: '1.25rem' }}>
                <strong>{t('phoneLabel')}:</strong>{' '}
                <a href="tel:+905553332120" style={{ color: 'var(--color-primary)', fontWeight: 'bold', textDecoration: 'none' }}>+90 555 333 21 20</a>
              </p>
              <a href="https://wa.me/905553332120" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                {t('whatsappCta')}
              </a>
            </div>
          </div>

          {/* Doktor Takvimi yalnızca Türkçe sürümde: Türkiye'deki hastalar için */}
          {locale === 'tr' && (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--color-primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', flexShrink: 0, fontWeight: 'bold' }}>📅</div>
            <div style={{ width: '100%' }}>
              <h3 style={{ marginBottom: '0.5rem' }}>{t('onlineBookTitle')}</h3>
              <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6', marginBottom: '1rem' }}>
                {t('onlineBookDesc')}
              </p>
              <DoktorTakvimiWidget />
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
