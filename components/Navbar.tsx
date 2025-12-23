'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Search, Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [language, setLanguage] = useState('EN');

  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}
      >
        {/* Animated border bottom */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary-green to-transparent origin-center"
        />

        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[70px]">
            {/* Logo with scale animation */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0 transition-opacity duration-200 hover:opacity-90 relative z-10"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative"
                style={{
                  height: '80px',
                  width: 'auto',
                  minWidth: '240px',
                  maxWidth: '420px'
                }}
              >
                <Image
                  src="/images/logo.png"
                  alt="AgriScience Internationals"
                  fill
                  className="object-contain object-left transition-all duration-500"
                  priority
                  sizes="(max-width: 768px) 240px, (max-width: 1024px) 320px, 420px"
                  style={{
                    filter: isScrolled 
                      ? 'none' 
                      : 'brightness(0) invert(1) drop-shadow(0 2px 12px rgba(0,0,0,0.8))',
                  }}
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation with staggered animations */}
            <div className="hidden xl:flex items-center space-x-8 flex-1 justify-center ml-8">
              {navLinks.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium text-base transition-all duration-300 whitespace-nowrap relative group ${
                    isScrolled 
                      ? 'text-neutral-charcoal hover:text-primary-green' 
                      : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] hover:text-white/90'
                  }`}
                >
                  {link.name}
                  {/* Animated underline */}
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? 'bg-primary-green' : 'bg-white'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4 flex-shrink-0 ml-4">
              {/* Search with pulse animation */}
              <div className="relative">
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`p-2 transition-all duration-300 rounded-lg ${
                    isScrolled 
                      ? 'text-neutral-charcoal hover:text-primary-green hover:bg-neutral-cream' 
                      : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] hover:bg-white/10'
                  }`}
                  aria-label="Search"
                >
                  <Search className="h-5 w-5" />
                </button>
                
                <AnimatePresence>
                  {isSearchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-2xl border border-neutral-light overflow-hidden"
                    >
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full px-4 py-3 outline-none text-neutral-charcoal"
                        autoFocus
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Language Toggle with rotate animation */}
              <div className="relative">
                <button className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'hover:bg-neutral-cream' 
                    : 'hover:bg-white/10'
                }`}>
                  <Globe className={`h-4 w-4 transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-neutral-charcoal' 
                      : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
                  }`} />
                  <span className={`text-sm font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-neutral-charcoal' 
                      : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
                  }`}>{language}</span>
                </button>
              </div>

              {/* CTA Button with gradient animation */}
              <Link
                href="/contact"
                className={`relative px-6 py-2.5 rounded-lg font-semibold text-base transition-all duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'bg-primary-green hover:bg-primary-green-dark text-white shadow-md hover:shadow-lg'
                    : 'bg-white/95 backdrop-blur-sm hover:bg-white text-primary-green-dark border border-white/50 shadow-lg hover:shadow-xl'
                }`}
              >
                Request Quote
              </Link>
            </div>

            {/* Tablet: Reduced nav */}
            <div className="hidden lg:flex xl:hidden items-center space-x-4 flex-shrink-0 ml-4">
              <Link
                href="/products"
                className={`font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                  isScrolled 
                    ? 'text-neutral-charcoal hover:text-primary-green' 
                    : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] hover:text-white/90'
                }`}
              >
                Products
              </Link>
              <Link
                href="/contact"
                className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                  isScrolled
                    ? 'bg-primary-green hover:bg-primary-green-dark text-white'
                    : 'bg-white/95 backdrop-blur-sm hover:bg-white text-primary-green-dark border border-white/50 shadow-lg'
                }`}
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile: Hamburger with animation */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 flex-shrink-0 ml-4 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-neutral-charcoal hover:bg-neutral-cream' 
                  : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: "spring",
                damping: 25,
                stiffness: 200
              }}
              className="fixed inset-y-0 right-0 w-80 bg-white z-40 lg:hidden shadow-2xl"
              style={{ paddingTop: '70px' }}
            >
              <div className="container mx-auto px-4 py-8 h-full overflow-y-auto">
                <nav className="flex flex-col space-y-4">
                  {[
                    { name: 'Home', href: '/' },
                    { name: 'Products', href: '/products' },
                    { name: 'About Us', href: '/about' },
                    { name: 'Contact', href: '/contact' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xl font-semibold text-neutral-charcoal hover:text-primary-green transition-colors duration-200 py-2 block"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="pt-4"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full px-6 py-3 bg-primary-green hover:bg-primary-green-dark text-white rounded-lg font-semibold text-center transition-colors duration-200"
                    >
                      Request Quote
                    </Link>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div style={{ height: '0px' }} />
    </>
  );
}