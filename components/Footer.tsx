'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Facebook, Instagram, Linkedin, Youtube, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Products', href: '/products' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Linkedin, href: 'https://www.linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: 'https://www.youtube.com', label: 'YouTube', color: 'hover:bg-red-600' },
  ];

  return (
    <>
      <footer className="bg-gradient-to-br from-neutral-charcoal via-gray-900 to-neutral-charcoal text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-gold rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-12 relative z-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              
               {/* Logo & Social */}
               <div className="lg:col-span-1">
                 <div className="relative h-24 w-72 mb-4">
                   <Image
                     src="/images/logo.png"
                     alt="AgriScience Internationals"
                     fill
                     className="object-contain object-left"
                   />
                 </div>
                <div className="flex gap-2 mt-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-9 h-9 rounded-lg bg-white/5 ${social.color} flex items-center justify-center transition-all duration-300 border border-white/10`}
                        aria-label={social.label}
                      >
                        <Icon className="h-4 w-4" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-sm mb-4 text-white uppercase tracking-wider">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-secondary-gold transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

               {/* Legal */}
               <div>
                 <h4 className="font-bold text-sm mb-4 text-white uppercase tracking-wider">Legal</h4>
                 <ul className="space-y-2">
                   <li>
                     <Link href="/privacy-policy" className="text-gray-400 hover:text-secondary-gold transition-colors text-sm">
                       Privacy Policy
                     </Link>
                   </li>
                   <li>
                     <Link href="/terms-conditions" className="text-gray-400 hover:text-secondary-gold transition-colors text-sm">
                       Terms & Conditions
                     </Link>
                   </li>
                   <li>
                     <Link href="/cookie-policy" className="text-gray-400 hover:text-secondary-gold transition-colors text-sm">
                       Cookie Policy
                     </Link>
                   </li>
                   <li>
                     <Link href="/disclaimer" className="text-gray-400 hover:text-secondary-gold transition-colors text-sm">
                       Disclaimer
                     </Link>
                   </li>
                 </ul>
               </div>

              {/* Contact */}
              <div>
                <h4 className="font-bold text-sm mb-4 text-white uppercase tracking-wider">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="tel:+94112345678" className="flex items-center gap-2 text-gray-400 hover:text-secondary-gold transition-colors text-sm">
                      <Phone className="h-4 w-4 text-secondary-gold" />
                      <span>+94 XX XXX XXXX</span>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@agriscience.lk" className="flex items-center gap-2 text-gray-400 hover:text-secondary-gold transition-colors text-sm">
                      <Mail className="h-4 w-4 text-secondary-gold" />
                      <span>info@agriscience.lk</span>
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin className="h-4 w-4 text-secondary-gold" />
                      <span>Colombo, Sri Lanka</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
                <p>© {new Date().getFullYear()} AgriScience Internationals. All Rights Reserved.</p>
                <p>Created by Nemitha Prabashwara</p>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-br from-secondary-gold to-yellow-600 text-white rounded-full shadow-2xl hover:shadow-secondary-gold/50 transition-all duration-300 flex items-center justify-center hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      )}
    </>
  );
}