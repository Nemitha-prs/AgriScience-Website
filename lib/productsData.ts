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

// In-memory cache (per-instance, not shared across serverless invocations)
let products: Product[] | null = null;

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
 * Load products from file (always reads from disk to ensure consistency)
 */
async function loadProducts(): Promise<Product[]> {
  try {
    await ensureDataDirectory();
    const fileContent = await fs.readFile(DATA_FILE, 'utf-8');
    const loadedProducts = JSON.parse(fileContent);
    
    // Validate it's an array
    if (!Array.isArray(loadedProducts)) {
      console.warn('[PRODUCTS] Invalid data format, resetting to empty array');
      products = [];
      return products;
    }
    
    products = loadedProducts;
    console.log('[PRODUCTS] Loaded', products.length, 'products from file');
    return products;
  } catch (error: any) {
    // File doesn't exist yet, start with empty array
    if (error.code === 'ENOENT') {
      console.log('[PRODUCTS] No existing data file, starting with empty products');
      products = [];
      // Create empty file
      await saveProducts([]);
      return products;
    } else {
      console.error('[PRODUCTS] Error loading products:', error);
      products = [];
      return products;
    }
  }
}

/**
 * Save products to file (ensures write completes)
 */
async function saveProducts(productsToSave?: Product[]): Promise<void> {
  const productsToWrite = productsToSave !== undefined ? productsToSave : products;
  
  if (productsToWrite === null) {
    console.error('[PRODUCTS] Cannot save: products array is null');
    return;
  }

  try {
    await ensureDataDirectory();
    
    // Write to a temporary file first, then rename (atomic operation)
    const tempFile = DATA_FILE + '.tmp';
    await fs.writeFile(tempFile, JSON.stringify(productsToWrite, null, 2), 'utf-8');
    
    // Atomic rename (replaces old file)
    await fs.rename(tempFile, DATA_FILE);
    
    // Update in-memory cache
    products = productsToWrite;
    
    console.log('[PRODUCTS] Saved', productsToWrite.length, 'products to file');
  } catch (error) {
    console.error('[PRODUCTS] Error saving products:', error);
    throw error; // Re-throw to ensure caller knows if save failed
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
  const loadedProducts = await loadProducts();
  return [...loadedProducts].sort((a, b) => 
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
}

/**
 * Get a single product by ID
 */
export async function getProductById(id: string): Promise<Product | null> {
  const loadedProducts = await loadProducts();
  return loadedProducts.find(p => p.id === id) || null;
}

/**
 * Create a new product
 */
export async function createProduct(productData: Omit<Product, 'id' | 'created_at'>): Promise<Product> {
  const loadedProducts = await loadProducts();
  
  const newProduct: Product = {
    ...productData,
    id: generateId(),
    created_at: new Date().toISOString(),
  };
  
  const updatedProducts = [...loadedProducts, newProduct];
  await saveProducts(updatedProducts);
  
  return newProduct;
}

/**
 * Update an existing product
 */
export async function updateProduct(id: string, productData: Partial<Omit<Product, 'id' | 'created_at'>>): Promise<Product | null> {
  const loadedProducts = await loadProducts();
  
  const index = loadedProducts.findIndex(p => p.id === id);
  if (index === -1) return null;
  
  const updatedProducts = [...loadedProducts];
  updatedProducts[index] = {
    ...updatedProducts[index],
    ...productData,
    // Preserve id and created_at
    id: updatedProducts[index].id,
    created_at: updatedProducts[index].created_at,
  };
  
  await saveProducts(updatedProducts);
  return updatedProducts[index];
}

/**
 * Delete a product
 */
export async function deleteProduct(id: string): Promise<boolean> {
  const loadedProducts = await loadProducts();
  
  const index = loadedProducts.findIndex(p => p.id === id);
  if (index === -1) return false;
  
  const updatedProducts = loadedProducts.filter(p => p.id !== id);
  await saveProducts(updatedProducts);
  
  return true;
}
