'use client';

import { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, Package, Leaf, Sparkles } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string | null;
  created_at: string;
}

interface ProductDetailClientProps {
  initialProduct: Product | null;
}

// Safe useInView hook that handles SSR
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

    return () => {
      observer.disconnect();
    };
  }, [ref, options.triggerOnce, options.threshold]);

  return [setRef, inView] as const;
}

export default function ProductDetailClient({ initialProduct }: ProductDetailClientProps) {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(initialProduct);
  const [loading, setLoading] = useState(!initialProduct);
  const [error, setError] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted before using browser APIs
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Refresh product in background if not provided initially
  useEffect(() => {
    if (!initialProduct && params.id) {
      async function fetchProduct() {
        try {
          setLoading(true);
          const response = await fetch(`/api/products/${params.id}`);
          
          if (!response.ok) {
            if (response.status === 404) {
              throw new Error('Product not found');
            }
            throw new Error('Failed to load product');
          }

          const data = await response.json();
          setProduct(data);
        } catch (err: any) {
          setError(err.message || 'Failed to load product');
        } finally {
          setLoading(false);
        }
      }
      fetchProduct();
    }
  }, [params.id, initialProduct]);

  // Animation hooks - using safe custom hook
  const [imageRef, imageInView] = useSafeInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [contentRef, contentInView] = useSafeInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-cream flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="relative w-[150px] h-[150px] mb-8">
            <Image
              src="/images/logo.png"
              alt="Loading"
              width={150}
              height={150}
              className="object-contain animate-pulse"
              priority
              unoptimized
            />
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" style={{ animationDelay: '0ms', animationDuration: '1.4s' }} />
            <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" style={{ animationDelay: '200ms', animationDuration: '1.4s' }} />
            <div className="w-3 h-3 bg-primary-green rounded-full animate-pulse" style={{ animationDelay: '400ms', animationDuration: '1.4s' }} />
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-neutral-cream flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <h1 className="text-3xl font-heading font-bold text-neutral-charcoal mb-4">
            Product Not Found
          </h1>
          <p className="text-neutral-gray mb-8">{error || 'The product you are looking for does not exist.'}</p>
          <Link
            href="/products"
            prefetch={true}
            className="inline-flex items-center px-6 py-3 bg-primary-green text-white rounded-lg font-semibold hover:bg-primary-green-dark transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Products
          </Link>
        </motion.div>
      </div>
    );
  }

  // Split description into paragraphs
  const descriptionParagraphs = product.description.split('\n').filter(p => p.trim());

  return (
    <div className="min-h-screen bg-neutral-cream">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/products/info-bg.jpg)',
            }}
          />
          {/* Gradient Overlay for Better Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green-dark/80 via-primary-green-dark/70 to-neutral-charcoal/80" />
          
          {/* Animated Background Elements */}
          {isMounted && (
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(15)].map((_, i) => {
                const randomLeft = Math.random() * 100;
                const randomTop = Math.random() * 100;
                const randomDuration = Math.random() * 10 + 10;
                const randomY = Math.random() * -100;
                
                return (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white/20 rounded-full"
                    initial={{ opacity: 0.2 }}
                    animate={{
                      y: randomY,
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: randomDuration,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      left: `${randomLeft}%`,
                      top: `${randomTop}%`,
                    }}
                  />
                );
              })}
            </div>
          )}
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/products"
              prefetch={true}
              className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              Back to Products
            </Link>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight"
            >
              <span className="block bg-gradient-to-r from-white via-secondary-gold to-white bg-clip-text text-transparent">
                {product.name}
              </span>
            </motion.h1>
          </motion.div>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 lg:items-center">
              {/* Product Image */}
              <motion.div
                ref={(node) => {
                  if (node) imageRef(node);
                }}
                variants={imageVariants}
                initial={isMounted ? "hidden" : "visible"}
                animate={isMounted && imageInView ? 'visible' : 'visible'}
                className="relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl group"
              >
                {product.image_url ? (
                  <Image
                    src={product.image_url}
                    alt={product.name || 'Product image'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    onError={(e) => {
                      // Fallback to logo if image fails to load
                      const target = e.target as HTMLImageElement;
                      if (target.src !== '/images/logo.png') {
                        target.src = '/images/logo.png';
                      }
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary-green/20 to-primary-green-dark/20" role="img" aria-label="Product image placeholder">
                    <Package className="w-32 h-32 text-primary-green/40" />
                  </div>
                )}
                {/* Decorative gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>

              {/* Product Details */}
              <motion.div
                ref={(node) => {
                  if (node) contentRef(node);
                }}
                variants={containerVariants}
                initial={isMounted ? "hidden" : "visible"}
                animate={isMounted && contentInView ? 'visible' : 'visible'}
                className="space-y-8"
              >
                {/* Description Section */}
                <motion.div variants={itemVariants} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary-green/10 rounded-lg mr-4">
                      <Leaf className="h-6 w-6 text-primary-green" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-neutral-charcoal">
                      Product Description
                    </h2>
                  </div>
                  <div className="prose prose-lg max-w-none">
                    {descriptionParagraphs.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        variants={itemVariants}
                        className="text-neutral-gray leading-relaxed mb-4 last:mb-0"
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>

                {/* Features/Highlights Card */}
                <motion.div
                  variants={itemVariants}
                  className="bg-gradient-to-br from-primary-green/5 to-primary-green-dark/5 rounded-xl p-8 border border-primary-green/20"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-secondary-gold/20 rounded-lg mr-4">
                      <Sparkles className="h-6 w-6 text-secondary-gold" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-neutral-charcoal">
                      Key Features
                    </h2>
                  </div>
                  <ul className="space-y-4">
                    {[
                      'Premium Quality Product',
                      'Tested & Certified',
                      'Expert Support Available',
                      'Nationwide Delivery',
                    ].map((feature, index) => (
                      <motion.li
                        key={feature}
                        variants={itemVariants}
                        className="flex items-start"
                      >
                        <Check className="h-5 w-5 text-primary-green mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-gray">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-heading font-bold text-neutral-charcoal mb-4">
                    Interested in this product?
                  </h3>
                  <p className="text-neutral-gray mb-6">
                    Contact us for more information, pricing, and availability.
                  </p>
                  <Link
                    href="/contact"
                    prefetch={true}
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-primary-green text-white rounded-lg font-semibold hover:bg-primary-green-dark transition-colors shadow-md hover:shadow-lg"
                  >
                    Request a Quote
                    <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
