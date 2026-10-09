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
import MetaPixel from '../components/MetaPixel';
import CookieConsent from '../components/CookieConsent';
import Script from 'next/script';
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
          <CookieConsent />
          <MetaPixel />
          {/* Vercel Web Analytics: çerezsiz ziyaretçi istatistikleri (vercel.com > proje > Analytics) */}
          <Script id="vercel-analytics-queue" strategy="afterInteractive">
            {`window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`}
          </Script>
          <Script id="vercel-analytics" src="/_vercel/insights/script.js" strategy="afterInteractive" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
