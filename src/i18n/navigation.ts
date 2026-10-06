import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// Dil önekini koruyan Link: İngilizce sayfadaki "/hakkimda" linki otomatik olarak "/en/hakkimda" olur.
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
