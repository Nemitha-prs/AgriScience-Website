'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, Package, Factory, CheckCircle, Truck } from 'lucide-react';

export default function OurProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      number: 1,
      icon: Globe,
      title: 'Global Sourcing',
      description: 'Partner with manufacturers in China, India & Egypt. Select premium quality products. Negotiate best prices.',
    },
    {
      number: 2,
      icon: Package,
      title: 'Import',
      description: 'Handle all customs & documentation. Ensure compliance with Sri Lankan regulations. Efficient logistics management.',
    },
    {
      number: 3,
      icon: Factory,
      title: 'Repackaging',
      description: 'Local repackaging facility. Appropriate sizing for Sri Lankan market. Clear labeling in local languages.',
    },
    {
      number: 4,
      icon: CheckCircle,
      title: 'Quality Testing',
      description: 'Laboratory testing. Quality assurance checks. Certification & documentation.',
    },
    {
      number: 5,
      icon: Truck,
      title: 'Distribution',
      description: 'Nationwide delivery network. Technical support included. After-sales service.',
    },
  ];

  return (
    <section className="py-24 bg-neutral-cream">
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
            From Import to Your Farm
          </h2>
          <div className="w-24 h-1 bg-secondary-gold mx-auto mb-6" />
          <p className="text-lg text-neutral-gray max-w-2xl mx-auto">
            Our streamlined process ensures quality products reach your farm efficiently
          </p>
        </motion.div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connecting Line (Desktop) - positioned to align with icon centers */}
          <div className="hidden lg:block absolute top-[40px] left-0 right-0 h-1 bg-primary-green/20 z-0" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 2, delay: 0.5 }}
            className="hidden lg:block absolute top-[40px] left-0 right-0 h-1 bg-primary-green origin-left z-0"
          />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-4 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="text-center relative flex flex-col h-full"
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-6 z-10">
                    <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-primary-green relative z-10 group-hover:scale-110 transition-transform">
                      <Icon className="h-10 w-10 text-primary-green" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-green/10 rounded-full -z-10" />
                  </div>

                  {/* Content - Fixed height card */}
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 card-lift flex-1 flex flex-col min-h-[220px]">
                    <div className="text-3xl font-bold text-primary-green mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-neutral-charcoal mb-3 min-h-[56px] flex items-center justify-center">
                      {step.title}
                    </h3>
                    <p className="text-sm text-neutral-gray leading-relaxed flex-1">
                      {step.description}
                    </p>
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

