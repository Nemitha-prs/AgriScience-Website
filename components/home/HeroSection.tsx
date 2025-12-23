'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
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

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden -mt-[70px]">
      {/* Full-Screen Background Image - Extends ABOVE the section to cover navbar area */}
      <div className="absolute inset-0 z-0" style={{ top: '-70px', height: 'calc(100% + 70px)' }}>
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/Hero/hero-bg.jpg)',
          }}
        />
        {/* Gradient Overlay for Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-green-dark/80 via-primary-green-dark/70 to-neutral-charcoal/80" />
        
        {/* Animated Particles/Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [null, Math.random() * -100],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-32 pt-[calc(70px+8rem)]">
        <div className="max-w-4xl">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-white"
          >
            {/* Main Headline with Gradient Text */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
            >
              <span className="block text-white">Empowering</span>
              <span className="block bg-gradient-to-r from-white via-secondary-gold to-white bg-clip-text text-transparent">
                Sri Lankan Agriculture
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-2xl md:text-3xl font-heading font-semibold mb-6 text-white/95 leading-relaxed"
            >
              Premium agricultural solutions through global partnerships
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl font-normal"
            >
              Importing high-quality agricultural products from China, India, and Egypt, serving over 400 farmers nationwide.
            </motion.p>

            {/* Stats Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 mb-10"
            >
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white">400+</span>
                <span className="text-sm text-white/80">Farmers Served</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white">6+</span>
                <span className="text-sm text-white/80">Years Experience</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-white">3</span>
                <span className="text-sm text-white/80">Countries</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={buttonVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/products"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-primary-green-dark rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-neutral-cream shadow-xl hover:shadow-2xl"
                >
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/50 hover:border-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Request a Quote
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/80"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}