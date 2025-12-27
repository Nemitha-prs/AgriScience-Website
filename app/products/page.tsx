import { getAllProducts } from '@/lib/productsData';
import { Suspense } from 'react';
import ProductsClient from './ProductsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products | AgriScience Internationals (pvt) LTD',
  description: 'Explore the range of premium agricultural products from AgriScience Internationals (pvt) LTD. Fertilizers, PGR, fruit protection bags, PPE, and surfactants imported from China, India & Egypt.',
  openGraph: {
    title: 'Our Products | AgriScience Internationals (pvt) LTD',
    description: 'Explore the range of premium agricultural products from AgriScience Internationals (pvt) LTD.',
    type: 'website',
  },
};

// Server component - fetches products instantly on server
export default async function ProductsPage() {
  // Fetch products on the server - instant load, no API call needed
  const products = await getAllProducts();

  return (
    <Suspense fallback={
      <div className="min-h-screen bg-neutral-cream flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green mx-auto mb-4"></div>
          <p className="text-neutral-gray">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsClient initialProducts={products} />
    </Suspense>
  );
}
