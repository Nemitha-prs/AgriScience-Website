import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { OrganizationStructuredData } from "@/components/StructuredData";
import { ErrorBoundary } from "@/components/ErrorBoundary";
// Import env validation (runs on server startup)
import "@/lib/env-validation";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-heading',
  display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://agriscience.lk';

export const metadata: Metadata = {
  title: "AgriScience Internationals (pvt) LTD - Premium Agricultural Products | Sri Lanka",
  description: "6 years of excellence in importing premium agricultural products from China, India & Egypt. Serving 400+ customers across Sri Lanka with fertilizers, PGR, fruit protection bags, PPE, and surfactants.",
  keywords: "agricultural products, fertilizers, plant growth regulators, fruit protection bags, PPE, surfactants, Sri Lanka, import, agriculture, farming, crops, NPK, organic fertilizer",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "AgriScience Internationals (pvt) LTD - Premium Agricultural Products",
    description: "6 years of importing quality fertilizers, PGR, and agricultural products from China, India & Egypt to Sri Lanka.",
    type: "website",
    url: baseUrl,
    siteName: "AgriScience Internationals (pvt) LTD",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "AgriScience Internationals Logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgriScience Internationals (pvt) LTD - Premium Agricultural Products",
    description: "6 years of importing quality fertilizers, PGR, and agricultural products from China, India & Egypt to Sri Lanka.",
    images: ["/images/logo.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={`${inter.className} font-body`}>
        <OrganizationStructuredData />
        <ErrorBoundary>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent />
        </ErrorBoundary>
      </body>
    </html>
  );
}




