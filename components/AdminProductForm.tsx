'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string | null;
}

interface AdminProductFormProps {
  product?: Product | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function AdminProductForm({
  product,
  onSuccess,
  onCancel,
}: AdminProductFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name || '');
      setDescription(product.description || '');
      setImagePreview(product.image_url);
    }
  }, [product]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      // Convert file to base64 data URL for storage
      // This allows images to be stored without file system access
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result as string);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    } catch (error: any) {
      console.error('Error processing image:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      let imageUrl = product?.image_url || null;

      // Process new image if provided
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      const productData = {
        name,
        description,
        image_url: imageUrl,
      };

      if (product) {
        // Update existing product
        const response = await fetch(`/api/products/${product.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to update product');
        }
      } else {
        // Create new product
        const response = await fetch('/api/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(productData),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to create product');
        }
      }

      onSuccess();
    } catch (err: any) {
      setError(err.message || 'Failed to save product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-earth-900 mb-1">
          Product Name *
        </label>
        <input
          type="text"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-earth-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-earth-900 mb-1"
        >
          Description *
        </label>
        <textarea
          id="description"
          required
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border border-earth-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-earth-900 mb-1">
          Product Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-3 py-2 border border-earth-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
        />
        {imagePreview && (
          <div className="mt-2 relative w-32 h-32">
            <Image
              src={imagePreview}
              alt="Preview"
              fill
              className="object-cover rounded border border-earth-300"
              unoptimized
            />
          </div>
        )}
      </div>

      <div className="flex space-x-3 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50"
        >
          {loading ? 'Saving...' : product ? 'Update Product' : 'Create Product'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-earth-200 text-earth-900 px-4 py-2 rounded-md hover:bg-earth-300 focus:outline-none focus:ring-2 focus:ring-earth-500"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}



