'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Leaf, Globe, Users, Award } from 'lucide-react';

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const features = [
    { icon: Globe, text: 'Import premium products from China, India, and Egypt' },
    { icon: Leaf, text: 'Repack to suit Sri Lankan market' },
    { icon: Users, text: 'Distribute nationwide with technical support' },
    { icon: Award, text: 'Ensure quality at every step' },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background with image and dark green overlay - cropped to section size */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/about-us/about-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark green gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-green-dark/70 via-primary-green-dark/60 to-neutral-charcoal/65" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-16 md:py-20 pb-24">
        <div className="max-w-4xl">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-white"
          >
            {/* Main Headline with Gradient Text */}
            <motion.h2
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            >
              <span className="block text-white">Six Years of</span>
              <span className="block bg-gradient-to-r from-white via-secondary-gold to-white bg-clip-text text-transparent">
                Growing Together
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl font-normal"
            >
              Since 2018, AgriScience Internationals has been at the forefront of bringing 
              world-class agricultural products to Sri Lankan farmers. Our journey began with 
              a simple mission: bridge the gap between global agricultural innovation and local 
              farming needs.
            </motion.p>

            {/* What We Do Section */}
            <motion.div
              variants={itemVariants}
            >
              <h3 className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-white/95 leading-relaxed">
                What We Do
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {features.map((item) => (
                  <div
                    key={item.text}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/20 hover:bg-white/15 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <p className="text-base text-white/95 font-medium leading-relaxed pt-2">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/about"
                  className="group inline-flex items-center justify-center px-7 py-3.5 bg-white text-primary-green-dark rounded-lg text-base font-semibold transition-colors duration-200 hover:bg-neutral-cream"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
