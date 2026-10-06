import { Metadata } from 'next';
import { buildMetadata } from '@/i18n/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'surgical', '/cerrahi-islemler');
}

import { useTranslations } from 'next-intl';
import ProcedureIcon from '../../components/ProcedureIcon';

export default function CerrahiIslemler() {
  const t = useTranslations('Surgical');

  const surgeries = [
    { icon: 'rhinoplasty' as const, title: t('surgeries.s1_title'), desc: t('surgeries.s1_desc') },
    { icon: 'septoplasty' as const, title: t('surgeries.s2_title'), desc: t('surgeries.s2_desc') },
    { icon: 'otoplasty' as const, title: t('surgeries.s3_title'), desc: t('surgeries.s3_desc') },
    { icon: 'eyelid' as const, title: t('surgeries.s4_title'), desc: t('surgeries.s4_desc') },
    { icon: 'neck' as const, title: t('surgeries.s5_title'), desc: t('surgeries.s5_desc') }
  ];

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '80vh' }}>
      <div className="animate-fade-in" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <span className="section-tag">{t('tag')}</span>
          <h1>{t('title')}</h1>
          <p style={{ color: 'var(--color-text-light)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
            {t('desc')}
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {surgeries.map((s, i) => (
            <div key={i} style={{ padding: '2.5rem', backgroundColor: 'var(--color-primary-light)', color: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', border: '1px solid rgba(229,169,60,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)', marginBottom: '1.25rem' }}>
                <ProcedureIcon name={s.icon} size={30} strokeWidth={1.3} />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.4rem', color: 'var(--color-accent)' }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
