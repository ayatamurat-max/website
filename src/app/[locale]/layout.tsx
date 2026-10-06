import type { Metadata } from "next";
import "../globals.css";

import { SITE_URL } from "@/i18n/metadata";

// Sayfa başlık ve açıklamaları her sayfada dile göre üretilir (src/i18n/metadata.ts)
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileQuickActions from '../components/MobileQuickActions';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n/config';

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <MobileQuickActions />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
