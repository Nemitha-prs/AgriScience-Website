'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Target, Eye, Globe, Star, Briefcase, Users, TrendingUp, Leaf, Heart, Lightbulb, Shield, CheckCircle, Sprout } from 'lucide-react';

function useSafeInView(options: { triggerOnce?: boolean; threshold?: number } = {}) {
  const [inView, setInView] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !ref) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (options.triggerOnce && hasTriggered.current) return;
          hasTriggered.current = true;
        } else if (!options.triggerOnce) {
          setInView(false);
        }
      },
      { threshold: options.threshold || 0 }
    );
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options.triggerOnce, options.threshold]);

  return [setRef, inView] as const;
}

export default function AboutPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('mission');
  const [directorImageError, setDirectorImageError] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  const [heroRef, heroInView] = useSafeInView({ triggerOnce: true, threshold: 0.1 });
  const [storyRef, storyInView] = useSafeInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useSafeInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useSafeInView({ triggerOnce: true, threshold: 0.1 });
  const [directorRef, directorInView] = useSafeInView({ triggerOnce: true, threshold: 0.1 });

  const particles = useMemo(() => {
    if (typeof window === 'undefined') return [];
    const particlesArray = [];
    for (let i = 0; i < 20; i++) {
      particlesArray.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        randomY: Math.random() * -100,
      });
    }
    return particlesArray;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
  };

  const statsData = [
    { number: '400+', label: 'Partner Farmers', icon: Users },
    { number: '6+', label: 'Years Experience', icon: TrendingUp },
    { number: '50+', label: 'Premium Products', icon: Leaf },
    { number: '100%', label: 'Quality Assured', icon: Shield },
  ];

  const valuesData = [
    { icon: Heart, title: 'Farmer First', description: 'Every decision we make prioritizes the success and wellbeing of our farming partners.', color: 'from-red-500 to-pink-500' },
    { icon: Leaf, title: 'Sustainability', description: 'We champion eco-friendly practices that protect our land for future generations.', color: 'from-green-500 to-emerald-500' },
    { icon: Lightbulb, title: 'Innovation', description: 'Bringing cutting-edge agricultural technology and methods to Sri Lankan farms.', color: 'from-yellow-500 to-orange-500' },
    { icon: Shield, title: 'Quality Excellence', description: 'Uncompromising standards in every product we deliver to your fields.', color: 'from-blue-500 to-indigo-500' },
  ];

  const milestones = [
    { year: '2018', title: 'Foundation', description: 'AgriScience Internationals was established with a vision to revolutionize Sri Lankan agriculture' },
    { year: '2019', title: 'Global Partnerships', description: 'Secured first international partnerships bringing world-class products to local farmers' },
    { year: '2020', title: 'Market Expansion', description: 'Extended reach across Sri Lanka, serving farmers in multiple provinces' },
    { year: '2022', title: 'Quality Certification', description: 'Achieved international quality standards and certifications for all products' },
    { year: '2024', title: 'Community Growth', description: 'Reached 400+ partner farmers, becoming a trusted name in Sri Lankan agriculture' },
  ];

  return (
    <div className="min-h-screen bg-neutral-cream overflow-x-hidden">
      {/* Hero Section - UNCHANGED */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/about-us/about-bg.jpg)' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green-dark/80 via-primary-green-dark/70 to-neutral-charcoal/80" />
          {isMounted && (
            <div className="absolute inset-0 overflow-hidden">
              {particles.map((p) => (
                <motion.div key={p.id} className="absolute w-2 h-2 bg-white/20 rounded-full" initial={{ opacity: 0.2 }}
                  animate={{ y: p.randomY, opacity: [0.2, 0.5, 0.2] }} transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
                  style={{ left: `${p.left}%`, top: `${p.top}%` }} />
              ))}
            </div>
          )}
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <motion.div ref={(n: HTMLElement | null) => { if (n) heroRef(n); }} variants={containerVariants}
            initial="hidden" animate={isMounted && heroInView ? 'visible' : 'hidden'} className="max-w-4xl mx-auto text-center">
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-white">
              <span className="block text-white">About</span>
              <span className="block whitespace-nowrap bg-gradient-to-r from-white via-secondary-gold to-white bg-clip-text text-transparent">AgriScience Internationals</span>
            </motion.h1>
            <motion.div variants={itemVariants} className="w-24 h-1 bg-secondary-gold mx-auto mb-6" />
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto font-heading font-medium">
              Empowering Sri Lankan agriculture through global partnerships and premium solutions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/5 via-transparent to-secondary-gold/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div ref={(n: HTMLElement | null) => { if (n) statsRef(n); }} variants={containerVariants}
            initial="hidden" animate={isMounted && statsInView ? 'visible' : 'hidden'} className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statsData.map((s) => (
              <motion.div key={s.label} variants={itemVariants} className="text-center group">
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary-green to-primary-green-dark mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                  <s.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-neutral-charcoal mb-2">{s.number}</h3>
                <p className="text-sm md:text-base text-neutral-gray font-medium">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story - Green BG */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/about/story-bg.jpg)' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green-dark/80 via-primary-green-dark/70 to-primary-green-dark/80" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div ref={(n: HTMLElement | null) => { if (n) storyRef(n); }} variants={containerVariants}
            initial="hidden" animate={isMounted && storyInView ? 'visible' : 'hidden'} className="max-w-7xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Story</h2>
              <div className="w-24 h-1 bg-white mx-auto mb-6" />
              <p className="text-lg text-white/90 max-w-3xl mx-auto">A journey of growth, innovation, and unwavering commitment to Sri Lankan agriculture</p>
            </motion.div>
            
            {/* Modern Stepped Timeline */}
            <motion.div variants={itemVariants} className="relative max-w-6xl mx-auto">
              <div className="hidden lg:block">
                <div className="space-y-0">
                  {milestones.map((m, i) => (
                    <motion.div 
                      key={m.year}
                      initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                      animate={isMounted && storyInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
                      transition={{ delay: i * 0.2, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                      className={`flex items-stretch gap-0 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}
                    >
                      {/* Content Card */}
                      <motion.div 
                        whileHover={{ scale: 1.02, y: -8 }}
                        className="w-[45%] bg-white rounded-3xl p-8 shadow-2xl relative group overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative z-10">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-green to-primary-green-dark flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                              <Sprout className="w-7 h-7 text-white" />
                            </div>
                            <div>
                              <span className="text-3xl font-heading font-bold text-primary-green block leading-none">{m.year}</span>
                            </div>
                          </div>
                          <h3 className="text-2xl font-heading font-bold text-neutral-charcoal mb-3 group-hover:text-primary-green transition-colors">{m.title}</h3>
                          <p className="text-base text-neutral-gray leading-relaxed">{m.description}</p>
                        </div>
                        <div className={`absolute top-1/2 -translate-y-1/2 w-12 h-12 ${i % 2 === 0 ? '-right-6' : '-left-6'}`}>
                          <div className="w-full h-full rounded-full bg-white shadow-xl border-4 border-primary-green" />
                        </div>
                      </motion.div>
                      
                      {/* Spacer */}
                      <div className="w-[10%]" />
                      
                      {/* Empty space for alternating layout */}
                      <div className="w-[45%]" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Central Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/30 -translate-x-1/2 -z-10 rounded-full" />
                <motion.div 
                  initial={{ height: 0 }}
                  animate={isMounted && storyInView ? { height: '100%' } : { height: 0 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-white via-white to-white/50 -translate-x-1/2 -z-10 rounded-full"
                />
              </div>
              
              <div className="lg:hidden space-y-6">
                {milestones.map((m, i) => (
                  <motion.div 
                    key={m.year}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isMounted && storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ delay: i * 0.15, duration: 0.6 }}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl p-6 shadow-xl relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary-green/5 to-transparent" />
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-green to-primary-green-dark flex items-center justify-center shadow-md">
                            <Sprout className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-2xl font-heading font-bold text-primary-green">{m.year}</span>
                        </div>
                        <h3 className="text-xl font-heading font-bold text-neutral-charcoal mb-2">{m.title}</h3>
                        <p className="text-sm text-neutral-gray leading-relaxed">{m.description}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Our Purpose - White BG */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-charcoal mb-4">Our Purpose</h2>
              <div className="w-24 h-1 bg-secondary-gold mx-auto" />
            </div>
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-full bg-neutral-cream p-2 shadow-lg">
                <button onClick={() => setActiveTab('mission')}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${activeTab === 'mission' ? 'bg-primary-green text-white shadow-md' : 'text-neutral-gray hover:text-neutral-charcoal'}`}>
                  <Target className="w-5 h-5" />Mission
                </button>
                <button onClick={() => setActiveTab('vision')}
                  className={`flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all ${activeTab === 'vision' ? 'bg-secondary-gold text-white shadow-md' : 'text-neutral-gray hover:text-neutral-charcoal'}`}>
                  <Eye className="w-5 h-5" />Vision
                </button>
              </div>
            </div>
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-neutral-cream to-white rounded-3xl p-8 md:p-12 shadow-xl border border-neutral-light">
              {activeTab === 'mission' ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-green/10 flex items-center justify-center">
                      <Target className="w-6 h-6 text-primary-green" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-neutral-charcoal mb-4">Our Mission</h3>
                      <p className="text-lg text-neutral-gray leading-relaxed mb-4">
                        To provide farmers with premium-quality fertilizers and agricultural solutions that enhance crop productivity while promoting environmental sustainability.
                      </p>
                      <p className="text-base text-neutral-gray leading-relaxed">
                        We're more than suppliers—we're partners in your farming journey. Through expert guidance and unwavering support, we help you make informed decisions about soil nutrition and crop management.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary-gold/10 flex items-center justify-center">
                      <Eye className="w-6 h-6 text-secondary-gold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-neutral-charcoal mb-4">Our Vision</h3>
                      <p className="text-lg text-neutral-gray leading-relaxed mb-4">
                        To become the leading agricultural solutions provider in Sri Lanka, recognized for our commitment to quality, innovation, and sustainable farming practices.
                      </p>
                      <p className="text-base text-neutral-gray leading-relaxed">
                        We envision a future where every Sri Lankan farmer has access to world-class agricultural products and expert support.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Green BG */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/about/core-bg.jpg)' }} />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green-dark/95 via-primary-green-dark/90 to-primary-green-dark/95" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div ref={(n: HTMLElement | null) => { if (n) valuesRef(n); }} variants={containerVariants}
            initial="hidden" animate={isMounted && valuesInView ? 'visible' : 'hidden'} className="max-w-7xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">Our Core Values</h2>
              <div className="w-24 h-1 bg-secondary-gold mx-auto mb-6" />
              <p className="text-lg text-white/90 max-w-2xl mx-auto">The principles that guide every decision we make</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valuesData.map((v) => (
                <motion.div key={v.title} variants={itemVariants} whileHover={{ y: -10 }} className="group">
                  <div className="h-full bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all border border-white/50 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <v.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-xl font-heading font-bold text-neutral-charcoal mb-3">{v.title}</h3>
                      <p className="text-sm text-neutral-gray leading-relaxed">{v.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Director - White BG */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div ref={(n: HTMLElement | null) => { if (n) directorRef(n); }} variants={containerVariants}
            initial="hidden" animate={isMounted && directorInView ? 'visible' : 'hidden'} className="max-w-7xl mx-auto">
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-neutral-charcoal mb-4">Meet Our Director</h2>
              <div className="w-24 h-1 bg-secondary-gold mx-auto mb-6" />
              <p className="text-lg text-neutral-gray max-w-2xl mx-auto">Visionary leadership driving agricultural excellence</p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <motion.div whileHover={{ y: -10, scale: 1.02 }} className="relative group">
                    <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                      {/* Image - Fully Visible */}
                      {!directorImageError ? (
                        <Image 
                          src="/images/director/director.jpg" 
                          alt="Director" 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-700" 
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          onError={() => setDirectorImageError(true)}
                          priority
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-green to-primary-green-dark flex items-center justify-center">
                          <Briefcase className="w-32 h-32 text-white/20" />
                        </div>
                      )}
                      
                      {/* Subtle gradient only at bottom for text readability */}
                      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                      
                      {/* Text Overlay - No Background */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.6 }}
                          className="relative"
                        >
                          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3 leading-tight drop-shadow-2xl">
                            [Director Name]
                          </h3>
                          <div className="flex items-center gap-3">
                            <Briefcase className="w-5 h-5 text-secondary-gold drop-shadow-lg" />
                            <p className="text-lg font-semibold text-white drop-shadow-2xl">
                              Director & Co-Founder
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-gold/10 rounded-3xl -z-10 group-hover:scale-110 transition-transform" />
                  </motion.div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-gradient-to-br from-primary-green/5 to-primary-green-dark/5 rounded-2xl p-8 border-l-4 border-primary-green">
                    <p className="text-xl text-neutral-charcoal leading-relaxed italic font-medium">
                      "Our commitment is to bridge the gap between global agricultural innovation and local farming needs, ensuring every Sri Lankan farmer has access to world-class solutions."
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-light hover:border-primary-green/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-green to-primary-green-dark flex items-center justify-center">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-gray uppercase tracking-wide mb-1">Experience</p>
                          <p className="text-base text-neutral-charcoal font-medium">31 years in local and global agriculture field, working directly with farmers, understanding their challenges and providing tailored agricultural solutions</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-light hover:border-secondary-gold/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary-gold to-yellow-600 flex items-center justify-center">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-gray uppercase tracking-wide mb-1">Education</p>
                          <p className="text-base text-neutral-charcoal font-medium">Diploma in Agriculture and Agriculture Marketing</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-light hover:border-primary-green/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                          <Shield className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-gray uppercase tracking-wide mb-1">Crop Protection</p>
                          <p className="text-base text-neutral-charcoal font-medium">Expert in crop protection strategies, helping farmers safeguard their crops from pests, diseases, and environmental challenges</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-light hover:border-secondary-gold/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-gray uppercase tracking-wide mb-1">Yield Enhancement</p>
                          <p className="text-base text-neutral-charcoal font-medium">Specialized knowledge in yield enhancement techniques and harvesting index optimization to maximize crop productivity</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 bg-white rounded-2xl p-6 shadow-lg border border-neutral-light hover:border-primary-green/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-neutral-gray uppercase tracking-wide mb-1">Areas of Expertise</p>
                          <p className="text-base text-neutral-charcoal font-medium">Crop protection, yield enhancement, harvesting index optimization, farmer relations, agricultural marketing, and sustainable farming practices</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}