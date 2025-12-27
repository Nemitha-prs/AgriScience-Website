/**
 * File-Based Product Data Store
 * 
 * Products are stored in a JSON file for persistence across server restarts.
 * Changes are automatically saved to the file.
 */

import { promises as fs } from 'fs';
import path from 'path';

export interface Product {
  id: string;
  name: string;
  description: string;
  image_url: string | null;
  category?: string | null;
  origin?: string | null;
  price?: number | null;
  review_count?: number | null;
  created_at: string;
}

// Path to the products data file
const DATA_FILE = path.join(process.cwd(), 'data', 'products.json');

// In-memory cache
let products: Product[] = [];
let isLoaded = false;

/**
 * Ensure data directory exists
 */
async function ensureDataDirectory(): Promise<void> {
  const dataDir = path.dirname(DATA_FILE);
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (error) {
    // Directory might already exist, that's fine
  }
}

/**
 * Load products from file
 */
async function loadProducts(): Promise<void> {
  if (isLoaded) return;

  try {
    await ensureDataDirectory();
    const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
    products = JSON.parse(fileContent);
    console.log('[PRODUCTS] Loaded', products.length, 'products from file');
  } catch (error: any) {
    // File doesn't exist yet, start with empty array
    if (error.code === 'ENOENT') {
      console.log('[PRODUCTS] No existing data file, starting with empty products');
      products = [];
    } else {
      console.error('[PRODUCTS] Error loading products:', error);
      products = [];
    }
  }
  isLoaded = true;
}

/**
 * Save products to file
 */
async function saveProducts(): Promise<void> {
  try {
    await ensureDataDirectory();
    await fs.writeFile(DATA_FILE, JSON.stringify(products, null, 2), 'utf-8');
    console.log('[PRODUCTS] Saved', products.length, 'products to file');
  } catch (error) {
    console.error('[PRODUCTS] Error saving products:', error);
    // Don't throw - allow operation to continue even if save fails
    // In production (Vercel), file writes might fail, but we still want the data in memory
  }
}

/**
 * Generate a unique ID for new products
 */
function generateId(): string {
  return `prod_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Get all products
 */
export async function getAllProducts(): Promise<Product[]> {
  await loadProducts();
  return [...products].sort((a, b) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

/**
 * Get a single product by ID
 */
export async function getProductById(id: string): Promise<Product | null> {
  await loadProducts();
  return products.find(p => p.id === id) || null;
}

/**
 * Create a new product
 */
export async function createProduct(productData: Omit<Product, 'id' | 'created_at'>): Promise<Product> {
  await loadProducts();
  
  const newProduct: Product = {
    ...productData,
    id: generateId(),
    created_at: new Date().toISOString(),
  };
  
  products.push(newProduct);
  await saveProducts();
  
  return newProduct;
}

/**
 * Update an existing product
 */
export async function updateProduct(id: string, productData: Partial<Omit<Product, 'id' | 'created_at'>>): Promise<Product | null> {
  await loadProducts();
  
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return null;
  
  products[index] = {
    ...products[index],
    ...productData,
  };
  
  await saveProducts();
  return products[index];
}

/**
 * Delete a product
 */
export async function deleteProduct(id: string): Promise<boolean> {
  await loadProducts();
  
  const index = products.findIndex(p => p.id === id);
  if (index === -1) return false;
  
  products.splice(index, 1);
  await saveProducts();
  
  return true;
}
