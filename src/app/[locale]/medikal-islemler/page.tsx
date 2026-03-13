import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medikal İşlemler | Opr. Dr. Murat Ayata',
  description: 'Kırklareli medikal estetik işlemleri. Ameliyatsız yüz gençleştirme, botoks ve dolgu uygulamaları.',
};

import { useTranslations } from 'next-intl';

export default function MedikalIslemler() {
  const t = useTranslations('Medical');

  const treatments = [
    { title: t('treatments.t1_title'), desc: t('treatments.t1_desc') },
    { title: t('treatments.t2_title'), desc: t('treatments.t2_desc') },
    { title: t('treatments.t3_title'), desc: t('treatments.t3_desc') },
    { title: t('treatments.t4_title'), desc: t('treatments.t4_desc') }
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
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{tr.title}</h3>
              <p style={{ color: 'var(--color-text-light)' }}>{tr.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
