import type { Metadata } from "next";
import "../globals.css";

import { SITE_URL } from "@/i18n/metadata";

// Sayfa başlık ve açıklamaları her sayfada dile göre üretilir (src/i18n/metadata.ts)
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Google Search Console doğrulaması: Vercel'de NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
  // ortam değişkenine Search Console'un verdiği kodu yazın. Boşsa etiket basılmaz.
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileQuickActions from '../components/MobileQuickActions';
import MetaPixel from '../components/MetaPixel';
import CookieConsent from '../components/CookieConsent';
import JsonLd from '../components/JsonLd';
import { physicianJsonLd } from '@/lib/schema';
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
        <JsonLd data={physicianJsonLd(locale)} />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <MobileQuickActions />
          <CookieConsent />
          <MetaPixel />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
