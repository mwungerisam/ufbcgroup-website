import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Chatbot from "./components/Chatbot";
import GoogleAnalytics from "./components/Analytics";
import { Suspense } from "react";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ufbcgroup.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'UNIQUE FORM BUSINESS COMPANY Ltd | Rwanda',
    template: '%s | UNIQUE FORM BUSINESS COMPANY Ltd'
  },
  description: 'Leading multi-sectoral company in Rwanda offering professional services in construction, real estate, logistics, and business consulting. Your trusted partner for quality and innovation.',
  keywords: ['Rwanda business', 'construction', 'real estate', 'logistics', 'business consulting', 'UFBC', 'Kigali'],
  authors: [{ name: 'UNIQUE FORM BUSINESS COMPANY Ltd' }],
  creator: 'UFBC',
  publisher: 'UNIQUE FORM BUSINESS COMPANY Ltd',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_RW',
    url: SITE_URL,
    siteName: 'UNIQUE FORM BUSINESS COMPANY Ltd',
    title: 'UNIQUE FORM BUSINESS COMPANY Ltd | Rwanda',
    description: 'Leading multi-sectoral company in Rwanda offering professional services in construction, real estate, logistics, and business consulting.',
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'UNIQUE FORM BUSINESS COMPANY Ltd',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UNIQUE FORM BUSINESS COMPANY Ltd',
    description: 'Your trusted partner for quality and innovation in Rwanda',
    images: [`${SITE_URL}/images/og-image.jpg`],
    creator: '@UFBC_Rwanda',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <>
            <Suspense fallback={null}>
              <GoogleAnalytics />
            </Suspense>
            {/* Google Tag Manager */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
