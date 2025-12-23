import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

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

export const metadata: Metadata = {
  title: "AgriScience Internationals (Pvt) Ltd - Premium Agricultural Products | Sri Lanka",
  description: "6 years of excellence in importing premium agricultural products from China, India & Egypt. Serving 400+ customers across Sri Lanka with fertilizers, PGR, fruit protection bags, PPE, and surfactants.",
  keywords: "agricultural products, fertilizers, plant growth regulators, fruit protection bags, PPE, surfactants, Sri Lanka, import, agriculture, farming, crops, NPK, organic fertilizer",
  openGraph: {
    title: "AgriScience Internationals - Premium Agricultural Products",
    description: "6 years of importing quality fertilizers, PGR, and agricultural products from China, India & Egypt to Sri Lanka.",
    type: "website",
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
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}




