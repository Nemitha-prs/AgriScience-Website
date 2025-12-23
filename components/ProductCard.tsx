'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Eye, MessageSquare, Check } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  imageUrl: string | null;
  price?: number;
  origin?: string;
  rating?: number;
  reviewCount?: number;
  inStock?: boolean;
}

export default function ProductCard({ 
  id, 
  name, 
  description, 
  imageUrl,
  price,
  origin,
  rating = 5,
  reviewCount = 0,
  inStock = true,
}: ProductCardProps) {
  const originFlags: Record<string, string> = {
    china: '🇨🇳',
    india: '🇮🇳',
    egypt: '🇪🇬',
  };

  const originFlag = origin ? originFlags[origin.toLowerCase()] || '🌍' : '🌍';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 card-lift"
    >
      <Link href={`/products/${id}`}>
        {/* Image Container */}
        <div className="relative h-64 image-zoom bg-neutral-light">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-neutral-gray">
              <svg
                className="w-24 h-24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
          )}
          
          {/* Origin Badge */}
          {origin && (
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
              <span>{originFlag}</span>
              <span className="text-xs">Made in {origin.charAt(0).toUpperCase() + origin.slice(1)}</span>
            </div>
          )}

          {/* Stock Badge */}
          {inStock && (
            <div className="absolute top-3 right-3 bg-primary-green text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
              <Check className="h-3 w-3" />
              <span>In Stock</span>
            </div>
          )}

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-4">
              <button className="bg-white text-primary-green px-4 py-2 rounded-lg font-semibold hover:bg-neutral-cream transition-colors flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>Quick View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-lg font-heading font-bold text-neutral-charcoal mb-2 line-clamp-2">
            {name}
          </h3>
          
          {description && (
            <p className="text-sm text-neutral-gray mb-4 line-clamp-2">
              {description}
            </p>
          )}

          {/* Rating */}
          {rating > 0 && (
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(rating)
                        ? 'text-secondary-gold fill-secondary-gold'
                        : 'text-neutral-light'
                    }`}
                  />
                ))}
              </div>
              {reviewCount > 0 && (
                <span className="text-sm text-neutral-gray">
                  ({reviewCount} reviews)
                </span>
              )}
            </div>
          )}

          {/* Price */}
          {price && (
            <div className="mb-4">
              <span className="text-2xl font-heading font-bold text-primary-green">
                Rs. {price.toLocaleString()}
              </span>
              <span className="text-sm text-neutral-gray ml-2">per unit</span>
            </div>
          )}

          {/* Actions */}
          <div className="flex space-x-2">
            <Link
              href={`/products/${id}`}
              className="flex-1 px-4 py-2 bg-primary-green text-white rounded-lg font-semibold hover:bg-primary-green-dark transition-colors text-center text-sm"
            >
              View Details
            </Link>
            <button className="px-4 py-2 border-2 border-primary-green text-primary-green rounded-lg font-semibold hover:bg-primary-green hover:text-white transition-colors text-sm">
              Quote
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
