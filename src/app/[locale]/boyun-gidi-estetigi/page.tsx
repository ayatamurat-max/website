import type { Metadata } from 'next';
import { buildMetadata } from '@/i18n/metadata';
import ProcedurePage, { type ProcedureConfig } from '../../components/ProcedurePage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'neck', '/boyun-gidi-estetigi');
}

const config: ProcedureConfig = {
  key: 'neck',
  icon: 'neck',
  related: [
    { key: 'blepharoplasty', icon: 'eyelid', href: '/goz-kapagi-estetigi' },
    { key: 'filler', icon: 'filler', href: '/dermal-dolgu' },
    { key: 'rejuvenation', icon: 'rejuvenation', href: '/ameliyatsiz-yuz-genclestirme' },
  ],
};

export default function Page() {
  return <ProcedurePage config={config} />;
}
