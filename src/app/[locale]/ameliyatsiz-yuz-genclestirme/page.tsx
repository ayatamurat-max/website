import type { Metadata } from 'next';
import { buildMetadata } from '@/i18n/metadata';
import ProcedurePage, { type ProcedureConfig } from '../../components/ProcedurePage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'rejuvenation', '/ameliyatsiz-yuz-genclestirme');
}

const config: ProcedureConfig = {
  key: 'rejuvenation',
  icon: 'rejuvenation',
  related: [
    { key: 'botox', icon: 'medical', href: '/botoks' },
    { key: 'filler', icon: 'filler', href: '/dermal-dolgu' },
    { key: 'neck', icon: 'neck', href: '/boyun-gidi-estetigi' },
  ],
};

export default function Page() {
  return <ProcedurePage config={config} />;
}
