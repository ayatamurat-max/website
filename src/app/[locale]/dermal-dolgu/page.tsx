import type { Metadata } from 'next';
import { buildMetadata } from '@/i18n/metadata';
import ProcedurePage, { type ProcedureConfig } from '../../components/ProcedurePage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'filler', '/dermal-dolgu');
}

const config: ProcedureConfig = {
  key: 'filler',
  icon: 'filler',
  related: [
    { key: 'botox', icon: 'medical', href: '/botoks' },
    { key: 'rejuvenation', icon: 'rejuvenation', href: '/ameliyatsiz-yuz-genclestirme' },
    { key: 'rhinoplasty', icon: 'rhinoplasty', href: '/rinoplasti' },
  ],
};

export default function Page() {
  return <ProcedurePage config={config} />;
}
