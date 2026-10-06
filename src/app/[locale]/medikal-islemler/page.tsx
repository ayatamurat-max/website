import { Metadata } from 'next';
import { buildMetadata } from '@/i18n/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'medical', '/medikal-islemler');
}

import { useTranslations } from 'next-intl';
import ProcedureIcon from '../../components/ProcedureIcon';
import { Link } from '@/i18n/navigation';

export default function MedikalIslemler() {
  const t = useTranslations('Medical');
  const tRhino = useTranslations('Rhinoplasty');

  const treatments = [
    { icon: 'medical' as const, title: t('treatments.t1_title'), desc: t('treatments.t1_desc'), href: '/botoks' },
    { icon: 'filler' as const, title: t('treatments.t2_title'), desc: t('treatments.t2_desc'), href: '/dermal-dolgu' },
    { icon: 'meso' as const, title: t('treatments.t3_title'), desc: t('treatments.t3_desc'), href: '/mezoterapi-prp' },
    { icon: 'rejuvenation' as const, title: t('treatments.t4_title'), desc: t('treatments.t4_desc'), href: '/ameliyatsiz-yuz-genclestirme' }
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
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {treatments.map((tr, i) => (
            <div key={i} style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-secondary)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'rgba(0,180,216,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-secondary)', marginBottom: '1.25rem' }}>
                <ProcedureIcon name={tr.icon} size={28} strokeWidth={1.3} />
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{tr.title}</h3>
              <p style={{ color: 'var(--color-text-light)' }}>{tr.desc}</p>
              <Link href={tr.href} style={{ display: 'inline-block', marginTop: '1rem', color: 'var(--color-secondary)', fontWeight: 600 }}>
                {tRhino('learnMore')}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
