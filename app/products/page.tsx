'use client';

import { useState, useEffect, Suspense, useMemo } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Search, X, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

function ProductsPageContent() {
  const searchParams = useSearchParams();
  
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  // Animation hooks - optimized to prevent lag
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [productsRef, productsInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  // Animation variants matching home page
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

  // Handle category param from URL (only once on mount)
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, []);

  // Fetch products once on mount
  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('created_at', { ascending: false })
          .range(0, 23); // Limit to 24 products

        if (error) throw error;
        
        const productsData = data || [];
        
        const uniqueCategories = Array.from(
          new Set(productsData.map((p) => p.category).filter(Boolean))
        ) as string[];
        setCategories(uniqueCategories);
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchQuery(inputValue);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputValue]);

  // Filter and sort products using useMemo (no useEffect)
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case 'price-high':
        filtered.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      case 'popular':
        filtered.sort((a, b) => (b.review_count || 0) - (a.review_count || 0));
        break;
      case 'newest':
      default:
        filtered.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
    }

    return filtered;
  }, [products, searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-neutral-cream overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-products-bg bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-green-dark/80 via-primary-green-dark/70 to-neutral-charcoal/80" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <motion.div
            ref={heroRef}
            variants={containerVariants}
            initial="hidden"
            animate={heroInView ? 'visible' : 'hidden'}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight text-white"
            >
              <span className="bg-gradient-to-r from-white via-secondary-gold to-white bg-clip-text text-transparent">
                Our Products
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-secondary-gold mx-auto mb-6"
            />

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto font-heading font-medium"
            >
              Premium agricultural solutions imported from leading global manufacturers
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="relative max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-neutral-gray z-10" />
                <input
                  type="text"
                  placeholder="Search products by name or description..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 rounded-xl text-lg text-neutral-charcoal focus:outline-none focus:ring-4 focus:ring-secondary-gold/50 shadow-md bg-white/95 transition-shadow duration-300"
                />
                {inputValue && (
                  <button
                    onClick={() => setInputValue('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-gray hover:text-neutral-charcoal transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Products Section */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div>
          {/* Category Filters */}
          {categories.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-shadow duration-300 ${
                    selectedCategory === null
                      ? 'bg-primary-green text-white shadow-md'
                      : 'bg-white text-neutral-charcoal border-2 border-neutral-light hover:border-primary-green hover:shadow-md'
                  }`}
                >
                  All Products
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-shadow duration-300 ${
                      selectedCategory === category
                        ? 'bg-primary-green text-white shadow-md'
                        : 'bg-white text-neutral-charcoal border-2 border-neutral-light hover:border-primary-green hover:shadow-md'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Products Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 rounded-xl h-96"
                />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <motion.div
              ref={productsRef}
              variants={containerVariants}
              initial="hidden"
              animate={productsInView ? 'visible' : 'hidden'}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  custom={index}
                  className="group relative"
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                    {/* Image Container */}
                    <div className="relative h-96 overflow-hidden bg-neutral-light">
                      <Image
                        src={product.image_url || '/placeholder.jpg'}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      {/* Dark Overlay on Hover */}
                      <div className="absolute inset-0 bg-neutral-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Origin Badge */}
                      {product.origin && (
                        <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-full shadow-md">
                          <span className="text-sm font-semibold text-primary-green">
                            {product.origin}
                          </span>
                        </div>
                      )}

                      {/* Category Badge */}
                      {product.category && (
                        <div className="absolute top-4 right-4 bg-primary-green/95 px-4 py-2 rounded-full shadow-md">
                          <span className="text-sm font-semibold text-white">
                            {product.category}
                          </span>
                        </div>
                      )}

                      {/* Center View Details Button - Pure CSS Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <a 
                          href={`/products/${product.id}`}
                          className="pointer-events-auto bg-white text-primary-green font-bold py-4 px-8 rounded-full hover:bg-secondary-gold hover:text-white transition-colors duration-300 flex items-center gap-3 shadow-md"
                        >
                          <span className="text-lg">View Details</span>
                          <ArrowRight className="h-6 w-6" />
                        </a>
                      </div>
                    </div>

                    {/* Product Name Bar */}
                    <div className="absolute bottom-0 left-0 right-0 bg-primary-green p-4 text-center">
                      <h3 className="text-xl font-heading font-bold text-white tracking-wide">
                        {product.name}
                      </h3>
                    </div>

                    {/* Border on Hover */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-primary-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl shadow-md">
              <div className="inline-block mb-6">
                <Search className="h-20 w-20 text-neutral-light mx-auto" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-charcoal mb-4">
                No products found
              </h3>
              <p className="text-lg text-neutral-gray mb-6 max-w-md mx-auto">
                Try adjusting your search query or category filter
              </p>
              <button
                onClick={() => {
                  setInputValue('');
                  setSelectedCategory(null);
                }}
                className="px-8 py-3 bg-primary-green text-white rounded-lg font-semibold hover:bg-primary-green-dark transition-colors shadow-md"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-neutral-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green mx-auto mb-4"></div>
          <p className="text-neutral-gray">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsPageContent />
    </Suspense>
  );
}
