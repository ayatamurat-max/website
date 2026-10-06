import type { Metadata } from 'next';
import { buildMetadata } from '@/i18n/metadata';
import ProcedurePage, { type ProcedureConfig } from '../../components/ProcedurePage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'otoplasty', '/kepce-kulak');
}

const config: ProcedureConfig = {
  key: 'otoplasty',
  icon: 'otoplasty',
  related: [
    { key: 'rhinoplasty', icon: 'rhinoplasty', href: '/rinoplasti' },
    { key: 'blepharoplasty', icon: 'eyelid', href: '/goz-kapagi-estetigi' },
    { key: 'neck', icon: 'neck', href: '/boyun-gidi-estetigi' },
  ],
};

export default function Page() {
  return <ProcedurePage config={config} />;
}
