'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function useCounter(target: number, duration: number = 2000, inView: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = target;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(startValue + (endValue - startValue) * easeOut);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, inView]);

  return count;
}

export default function StatisticsCounter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { number: 6, suffix: '+', label: 'Years Experience', sublabel: 'Since 2018' },
    { number: 400, suffix: '+', label: 'Customers', sublabel: 'Served' },
    { number: 3, suffix: '', label: 'Countries', sublabel: 'Sourcing' },
    { number: 5, suffix: '', label: 'Product Lines', sublabel: 'Categories' },
    { number: 95, suffix: '%', label: 'Customer Satisfaction', sublabel: 'Rating' },
    { number: 1000, suffix: '+', label: 'Products', sublabel: 'Delivered' },
    { number: 24, suffix: '/7', label: 'Support', sublabel: 'Available' },
    { number: 100, suffix: '%', label: 'Quality', sublabel: 'Assured' },
  ];

  return (
    <section className="relative py-24 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1920&h=1080&fit=crop)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ stat, index, inView }: { stat: { number: number; suffix: string; label: string; sublabel: string }; index: number; inView: boolean }) {
  const count = useCounter(stat.number, 2000, inView);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-lg md:text-xl font-heading font-semibold mb-1">
        {stat.label}
      </div>
      <div className="text-sm text-white/80">
        {stat.sublabel}
      </div>
    </motion.div>
  );
}
