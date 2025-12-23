import { createClient } from '@/lib/supabaseServer';
import ProductCard from '@/components/ProductCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - AgriScience',
  description: 'Browse our comprehensive range of agricultural fertilizers',
};

export default async function ProductsPage() {
  const supabase = await createClient();
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching products:', error);
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-earth-900 mb-4">Our Products</h1>
        <p className="text-lg text-earth-600 max-w-2xl mx-auto">
          Discover our range of premium agricultural fertilizers designed to enhance
          crop yields and promote sustainable farming practices.
        </p>
      </div>

      {products && products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              imageUrl={product.image_url}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-earth-600 text-lg">No products available at the moment.</p>
        </div>
      )}
    </div>
  );
}





