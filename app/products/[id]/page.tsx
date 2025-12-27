import { getProductById } from '@/lib/productsData';
import ProductDetailClient from './ProductDetailClient';
import { ProductStructuredData } from '@/components/StructuredData';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://agriscience.lk';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const product = await getProductById(params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found | AgriScience Internationals (pvt) LTD',
    };
  }

  return {
    title: `${product.name} | AgriScience Internationals (pvt) LTD`,
    description: product.description.substring(0, 160) + (product.description.length > 160 ? '...' : ''),
    openGraph: {
      title: product.name,
      description: product.description.substring(0, 160) + (product.description.length > 160 ? '...' : ''),
      type: 'website',
      url: `${baseUrl}/products/${product.id}`,
      images: product.image_url 
        ? (product.image_url.startsWith('http') ? [product.image_url] : [`${baseUrl}${product.image_url}`])
        : [`${baseUrl}/images/logo.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description.substring(0, 160) + (product.description.length > 160 ? '...' : ''),
      images: product.image_url 
        ? (product.image_url.startsWith('http') ? [product.image_url] : [`${baseUrl}${product.image_url}`])
        : [`${baseUrl}/images/logo.png`],
    },
  };
}

// Server component - fetches product instantly on server
export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <ProductStructuredData product={product} />
      <ProductDetailClient initialProduct={product} />
    </>
  );
}
