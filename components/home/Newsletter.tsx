'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Check, Send } from 'lucide-react';

export default function Newsletter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-green/10 mb-6"
          >
            <Mail className="h-10 w-10 text-primary-green" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-section font-heading font-bold mb-4 text-neutral-charcoal">
            Stay Updated
          </h2>
          <p className="text-lg md:text-xl mb-8 text-neutral-gray max-w-2xl mx-auto">
            Get the latest product updates, agricultural tips, and exclusive offers 
            delivered to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 rounded-lg text-neutral-charcoal bg-white border-2 border-neutral-light focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-primary-green transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-primary-green text-white rounded-lg font-semibold hover:bg-primary-green-dark transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-md"
            >
              <span>Subscribe</span>
              <Send className="h-5 w-5" />
            </button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center space-x-2 text-primary-green"
            >
              <Check className="h-5 w-5" />
              <span>Thank you for subscribing! Check your inbox.</span>
            </motion.div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              'Weekly agricultural tips',
              'New product announcements',
              'Exclusive subscriber discounts',
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="flex items-center space-x-2 text-neutral-charcoal"
              >
                <Check className="h-5 w-5 text-primary-green flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

