import HeroSection from '@/components/home/HeroSection';
import TrustIndicators from '@/components/home/TrustIndicators';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import AboutUs from '@/components/home/AboutUs';
import OurProcess from '@/components/home/OurProcess';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import StatisticsCounter from '@/components/home/StatisticsCounter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AgriScience Internationals (pvt) LTD - Premium Agricultural Products | Sri Lanka',
  description: '6 years of excellence in importing premium agricultural products from China, India & Egypt. Serving 400+ customers across Sri Lanka with fertilizers, PGR, fruit protection bags, PPE, and surfactants.',
  openGraph: {
    title: 'AgriScience Internationals (pvt) LTD - Premium Agricultural Products',
    description: '6 years of importing quality fertilizers, PGR, and agricultural products from China, India & Egypt to Sri Lanka.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <TrustIndicators />
      <FeaturedProducts />
      <AboutUs />
      <OurProcess />
      <WhyChooseUs />
      <Testimonials />
      <StatisticsCounter />
    </div>
  );
}
