import type { Metadata } from 'next';
import { buildMetadata } from '@/i18n/metadata';
import ProcedurePage, { type ProcedureConfig } from '../../components/ProcedurePage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'botox', '/botoks');
}

const config: ProcedureConfig = {
  key: 'botox',
  icon: 'medical',
  related: [
    { key: 'filler', icon: 'filler', href: '/dermal-dolgu' },
    { key: 'meso', icon: 'meso', href: '/mezoterapi-prp' },
    { key: 'rejuvenation', icon: 'rejuvenation', href: '/ameliyatsiz-yuz-genclestirme' },
  ],
};

export default function Page() {
  return <ProcedurePage config={config} />;
}
