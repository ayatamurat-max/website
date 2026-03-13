import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hakkımda | Opr. Dr. Murat Ayata',
  description: 'Opr. Dr. Murat Ayata kimdir? Kulak Burun Boğaz hastalıkları ve yüz estetiği uzmanlığı hakkında detaylı bilgi.',
};

import { useTranslations } from 'next-intl';

export default function Hakkimda() {
  const t = useTranslations('AboutMe');

  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px', minHeight: '80vh' }}>
      <div className="animate-fade-in" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-tag">{t('tag')}</span>
          <h1>{t('title')}</h1>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
               <Image src="/images/portrait.png" alt="Opr. Dr. Murat Ayata Portre" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
               <Image src="/images/surgery.png" alt="Opr. Dr. Murat Ayata Cerrahi" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>

          <div style={{ padding: '2.5rem', backgroundColor: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>Opr. Dr. Murat Ayata</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              {t('bio1')}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              {t('bio2')}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
              {t('bio3')}
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', fontStyle: 'italic', fontWeight: '500', color: 'var(--color-secondary)' }}>
              {t('bio4')}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
