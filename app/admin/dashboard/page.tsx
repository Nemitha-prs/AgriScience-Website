'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import AdminProductForm from '@/components/AdminProductForm';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, LogOut, Package, Loader2 } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string | null;
  created_at: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const { error } = await supabase.from('products').delete().eq('id', id);
      if (error) throw error;
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/admin/login';
  };

  const handleFormSuccess = () => {
    setShowForm(false);
    setEditingProduct(null);
    fetchProducts();
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-cream">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Loader2 className="w-12 h-12 text-primary-green animate-spin mx-auto mb-4" />
          <p className="text-neutral-gray font-medium">Loading...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-cream via-white to-neutral-cream pt-[70px]">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-green via-primary-green-dark to-primary-green shadow-xl">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-white">
                  Admin Dashboard
                </h1>
                <p className="text-white/80 text-sm">Manage your products</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogout}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-6 py-2.5 rounded-xl font-semibold transition-all duration-300"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {!showForm ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-2">
                  Products
                </h2>
                <div className="w-16 h-1 bg-secondary-gold" />
              </div>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 bg-gradient-to-r from-primary-green to-primary-green-dark text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Plus className="w-5 h-5" />
                <span>Add New Product</span>
              </motion.button>
            </motion.div>

            {products.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl shadow-xl border border-neutral-light p-12 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-primary-green/10 flex items-center justify-center mx-auto mb-6">
                  <Package className="w-10 h-10 text-primary-green" />
                </div>
                <p className="text-neutral-gray text-lg mb-6">No products yet.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-green to-primary-green-dark text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Plus className="w-5 h-5" />
                  <span>Add Your First Product</span>
                </motion.button>
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-neutral-light transition-all duration-300 group"
                  >
                    <div className="relative w-full h-48 bg-neutral-light overflow-hidden">
                      {product.image_url ? (
                        <Image
                          src={product.image_url}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-neutral-gray">
                          <Package className="w-12 h-12 opacity-30" />
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-heading font-bold text-neutral-charcoal mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-neutral-gray text-sm mb-6 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleEdit(product)}
                          className="flex-1 flex items-center justify-center gap-2 bg-primary-green hover:bg-primary-green-dark text-white px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                        >
                          <Edit className="w-4 h-4" />
                          <span>Edit</span>
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleDelete(product.id)}
                          className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Delete</span>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl border border-neutral-light p-8 md:p-10">
              <div className="mb-8">
                <h2 className="text-3xl font-heading font-bold text-neutral-charcoal mb-3">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h2>
                <div className="w-16 h-1 bg-secondary-gold" />
              </div>
              <AdminProductForm
                product={editingProduct}
                onSuccess={handleFormSuccess}
                onCancel={handleCancel}
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}



