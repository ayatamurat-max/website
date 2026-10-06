import type { Metadata } from 'next';
import { buildMetadata } from '@/i18n/metadata';
import ProcedurePage, { type ProcedureConfig } from '../../components/ProcedurePage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'septoplasty', '/septoplasti');
}

const config: ProcedureConfig = {
  key: 'septoplasty',
  icon: 'septoplasty',
  related: [
    { key: 'rhinoplasty', icon: 'rhinoplasty', href: '/rinoplasti' },
    { key: 'otoplasty', icon: 'otoplasty', href: '/kepce-kulak' },
    { key: 'blepharoplasty', icon: 'eyelid', href: '/goz-kapagi-estetigi' },
  ],
};

export default function Page() {
  return <ProcedurePage config={config} />;
}
