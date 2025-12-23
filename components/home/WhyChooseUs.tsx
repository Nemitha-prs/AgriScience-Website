'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Globe, DollarSign, Truck, Phone, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: Target,
      title: 'Quality Assurance',
      description: 'All products tested and certified to meet international standards',
      color: 'text-primary-green',
      bgColor: 'bg-primary-green/10',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access to 3 major suppliers from China, India & Egypt',
      color: 'text-primary-green-light',
      bgColor: 'bg-primary-green-light/10',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Bulk import advantages passed on to customers',
      color: 'text-secondary-gold',
      bgColor: 'bg-secondary-gold/10',
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Nationwide distribution network for quick delivery',
      color: 'text-accent-terracotta',
      bgColor: 'bg-accent-terracotta/10',
    },
    {
      icon: Phone,
      title: 'Expert Support',
      description: 'Technical guidance included with every purchase',
      color: 'text-primary-green-dark',
      bgColor: 'bg-primary-green-dark/10',
    },
    {
      icon: Award,
      title: 'Proven Track Record',
      description: '400+ satisfied customers across Sri Lanka',
      color: 'text-secondary-amber',
      bgColor: 'bg-secondary-amber/10',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-section font-heading font-bold text-neutral-charcoal mb-4">
            Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-secondary-gold mx-auto mb-6" />
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Six reasons why farmers trust AgriScience Internationals
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white rounded-xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 card-lift border border-neutral-light"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${benefit.bgColor} ${benefit.color} mb-6`}
                >
                  <Icon className="h-8 w-8" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-heading font-semibold text-neutral-charcoal mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-gray leading-body">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

