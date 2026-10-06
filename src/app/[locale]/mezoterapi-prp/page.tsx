import type { Metadata } from 'next';
import { buildMetadata } from '@/i18n/metadata';
import ProcedurePage, { type ProcedureConfig } from '../../components/ProcedurePage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'meso', '/mezoterapi-prp');
}

const config: ProcedureConfig = {
  key: 'meso',
  icon: 'meso',
  related: [
    { key: 'botox', icon: 'medical', href: '/botoks' },
    { key: 'filler', icon: 'filler', href: '/dermal-dolgu' },
    { key: 'rejuvenation', icon: 'rejuvenation', href: '/ameliyatsiz-yuz-genclestirme' },
  ],
};

export default function Page() {
  return <ProcedurePage config={config} />;
}
