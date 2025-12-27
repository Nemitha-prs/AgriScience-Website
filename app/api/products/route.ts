import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts, createProduct } from '@/lib/productsData';

/**
 * GET /api/products
 * Fetch all products
 */
export async function GET(request: NextRequest) {
  try {
    const products = await getAllProducts();
    return NextResponse.json(products);
  } catch (error: any) {
    console.error('[API] Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/products
 * Create a new product
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, description, image_url, category, origin, price, review_count } = body;

    // Validate required fields
    if (!name || !description) {
      return NextResponse.json(
        { error: 'Name and description are required' },
        { status: 400 }
      );
    }

    const newProduct = await createProduct({
      name,
      description,
      image_url: image_url || null,
      category: category || null,
      origin: origin || null,
      price: price || null,
      review_count: review_count || null,
    });

    console.log('[API] Product created:', newProduct.id);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error: any) {
    console.error('[API] Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}

