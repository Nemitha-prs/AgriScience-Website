'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

export default function FeaturedProducts() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const products = [
    {
      name: 'Fertilizers',
      description: 'NPK, Organic & Compound Solutions',
      features: ['High quality imports', 'Custom blends available', 'Tested & certified'],
      image: '/images/featured-products/fertilizers.jpg',
    },
    {
      name: 'Plant Growth Regulators (PGR)',
      description: 'Growth Enhancers | Hormones | Yield Boosters',
      features: ['Growth enhancers', 'Hormones', 'Yield boosters'],
      image: '/images/featured-products/pgr.jpg',
    },
    {
      name: 'Fruit Protection Bags',
      description: 'Banana | Mango | Grape | UV-Resistant',
      features: ['UV-resistant', 'Multiple sizes', 'Durable material'],
      image: '/images/featured-products/fruit-bags.jpg',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section font-heading font-bold text-neutral-charcoal mb-4">
            Our Product Range
          </h2>
          <div className="w-24 h-1 bg-secondary-gold mx-auto mb-6" />
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Premium agricultural solutions imported from leading global manufacturers
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 card-lift"
            >
              {/* Image Container */}
              <div className="relative h-64 image-zoom">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-neutral-charcoal mb-2">
                  {product.name}
                </h3>
                <p className="text-neutral-gray mb-4 text-sm">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-neutral-gray">
                      <Check className="h-4 w-4 text-primary-green mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
