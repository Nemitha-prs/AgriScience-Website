import HeroSection from '@/components/home/HeroSection';
import TrustIndicators from '@/components/home/TrustIndicators';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import AboutUs from '@/components/home/AboutUs';
import OurProcess from '@/components/home/OurProcess';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import StatisticsCounter from '@/components/home/StatisticsCounter';

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
