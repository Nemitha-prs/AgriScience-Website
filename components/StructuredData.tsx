/**
 * JSON-LD Structured Data Component
 * Adds schema.org structured data for SEO without affecting UI
 */

interface OrganizationDataProps {
  type?: 'Organization';
}

export function OrganizationStructuredData({ type = 'Organization' }: OrganizationDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'AgriScience Internationals (pvt) LTD',
    description: 'Premium agricultural products importer serving Sri Lanka with fertilizers, PGR, fruit protection bags, PPE, and surfactants from China, India & Egypt.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://agriscience.lk',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://agriscience.lk'}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+94-77-366-7823',
      contactType: 'Customer Service',
      email: 'agriinternationalco@gmail.com',
      areaServed: 'LK',
      availableLanguage: 'en',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Thushara, Medagoda, Kamburugamuwa',
      addressLocality: 'Matara',
      addressCountry: 'LK',
    },
    sameAs: [
      'https://www.facebook.com',
      'https://www.instagram.com',
      'https://www.linkedin.com',
      'https://www.youtube.com',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface ProductDataProps {
  product: {
    id: string;
    name: string;
    description: string;
    image_url: string | null;
    price?: number | null;
    category?: string | null;
  };
}

export function ProductStructuredData({ product }: ProductDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://agriscience.lk';
  
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image_url 
      ? (product.image_url.startsWith('http') ? product.image_url : `${baseUrl}${product.image_url}`)
      : `${baseUrl}/images/logo.png`,
    category: product.category || 'Agricultural Products',
    ...(product.price && {
      offers: {
        '@type': 'Offer',
        price: product.price,
        priceCurrency: 'LKR',
        availability: 'https://schema.org/InStock',
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

