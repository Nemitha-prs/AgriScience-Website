'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

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

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [heroRef, heroInView] = useSafeInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useSafeInView({ triggerOnce: true, threshold: 0.1 });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for contacting us. We will get back to you soon!'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-cream overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/images/about-us/about-bg.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green-dark/80 via-primary-green-dark/70 to-neutral-charcoal/80" />
          {isMounted && (
            <div className="absolute inset-0 overflow-hidden">
              {particles.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute w-2 h-2 bg-white/20 rounded-full"
                  initial={{ opacity: 0.2 }}
                  animate={{ y: p.randomY, opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: p.duration, repeat: Infinity, ease: 'linear' }}
                  style={{ left: `${p.left}%`, top: `${p.top}%` }}
                />
              ))}
            </div>
          )}
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12">
          <motion.div
            ref={(n: HTMLElement | null) => {
              if (n) heroRef(n);
            }}
            variants={containerVariants}
            initial="hidden"
            animate={isMounted && heroInView ? 'visible' : 'hidden'}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-white"
            >
              <span className="block bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent">
                Get in Touch
              </span>
            </motion.h1>
            <motion.div variants={itemVariants} className="w-24 h-1 bg-secondary-gold/40 mx-auto mb-6" />
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-2xl mx-auto font-heading font-medium"
            >
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - White BG */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-green/5 via-transparent to-secondary-gold/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            ref={(n: HTMLElement | null) => {
              if (n) contactRef(n);
            }}
            variants={containerVariants}
            initial="hidden"
            animate={isMounted && contactInView ? 'visible' : 'hidden'}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-neutral-cream to-white rounded-2xl p-6 border border-neutral-light hover:border-primary-green/30 transition-all shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-green to-primary-green-dark flex items-center justify-center shadow-md">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-neutral-charcoal mb-2">Email</h3>
                      <p className="text-neutral-gray">agriinternationalco@gmail.com</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-neutral-cream to-white rounded-2xl p-6 border border-neutral-light hover:border-primary-green/30 transition-all shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-green to-primary-green-dark flex items-center justify-center shadow-md">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-neutral-charcoal mb-2">Phone</h3>
                      <p className="text-neutral-gray">+94 77 366 7823</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-neutral-cream to-white rounded-2xl p-6 border border-neutral-light hover:border-primary-green/30 transition-all shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-green to-primary-green-dark flex items-center justify-center shadow-md">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-neutral-charcoal mb-2">Address</h3>
                      <p className="text-neutral-gray">
                        Thushara, Medagoda,
                        <br />
                        Kamburugamuwa,
                        <br />
                        Matara
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <div className="bg-gradient-to-br from-neutral-cream to-white rounded-2xl p-8 border border-neutral-light shadow-lg">
                  <h3 className="text-2xl font-heading font-bold text-neutral-charcoal mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-charcoal mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-light text-neutral-charcoal placeholder-neutral-gray focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                        placeholder="Your name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-charcoal mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-light text-neutral-charcoal placeholder-neutral-gray focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-charcoal mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-light text-neutral-charcoal placeholder-neutral-gray focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent transition-all resize-none"
                        placeholder="Your message..."
                        required
                        disabled={isSubmitting}
                      ></textarea>
                    </div>
                    
                    {/* Warning Notice */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-neutral-charcoal">
                      <p className="font-semibold mb-1">Important Notice:</p>
                      <p className="text-neutral-gray leading-relaxed">
                        Our contact information is provided for legitimate business inquiries only. Any misuse, including but not limited to threatening messages, harassment, blackmail, illegal activities, or offensive content, will result in immediate legal action, including criminal prosecution and civil claims for damages. By submitting this form, you agree to use our contact information responsibly and in accordance with our{' '}
                        <Link href="/terms-conditions" className="text-primary-green underline hover:text-primary-green-dark">
                          Terms and Conditions
                        </Link>
                        .
                      </p>
                    </div>
                    
                    {/* Status Message */}
                    <AnimatePresence>
                      {submitStatus.type && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className={`p-5 rounded-xl flex items-center gap-3 shadow-lg ${
                            submitStatus.type === 'success'
                              ? 'bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-300 text-green-900'
                              : 'bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 text-red-900'
                          }`}
                        >
                          {submitStatus.type === 'success' ? (
                            <CheckCircle className="w-6 h-6 flex-shrink-0 text-green-600" />
                          ) : (
                            <XCircle className="w-6 h-6 flex-shrink-0 text-red-600" />
                          )}
                          <div className="flex-1">
                            <p className="text-base font-bold">
                              {submitStatus.type === 'success' ? 'Message Sent!' : 'Error'}
                            </p>
                            <p className="text-sm font-medium mt-1">{submitStatus.message}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <motion.button
                      type="submit"
                      whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                      whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      disabled={isSubmitting}
                      className="w-full bg-primary-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-green-dark transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
