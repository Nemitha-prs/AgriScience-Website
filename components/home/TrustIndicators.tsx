'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Users, Globe, Package } from 'lucide-react';

export default function TrustIndicators() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const indicators = [
    {
      icon: Trophy,
      number: '6+',
      label: 'Years Experience',
      sublabel: 'Since 2018',
    },
    {
      icon: Users,
      number: '400+',
      label: 'Customers',
      sublabel: 'Nationwide',
    },
    {
      icon: Globe,
      number: '3',
      label: 'Countries',
      sublabel: 'Sourcing',
    },
    {
      icon: Package,
      number: '5',
      label: 'Product Categories',
      sublabel: 'Complete Range',
    },
  ];

  return (
    <section className="py-16 bg-neutral-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {indicators.map((indicator, index) => {
              const Icon = indicator.icon;
              return (
                <motion.div
                  key={indicator.label}
                  initial={{ opacity: 0, y: 4 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    delay: index * 0.06, 
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-green/10 text-primary-green mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-2">
                    {indicator.number}
                  </div>
                  <div className="text-base md:text-lg font-semibold text-neutral-charcoal mb-1">
                    {indicator.label}
                  </div>
                  <div className="text-sm text-neutral-gray">
                    {indicator.sublabel}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
