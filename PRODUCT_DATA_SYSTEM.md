# Product Data System Documentation

## Overview

The product system uses a local, file-based data storage system. All product data is stored in-memory within the application.

## Architecture

### Data Storage
- **Location**: `lib/productsData.ts`
- **Type**: In-memory TypeScript module
- **Persistence**: Runtime only (data persists during server session)

### API Routes
- **GET** `/api/products` - Fetch all products
- **POST** `/api/products` - Create a new product
- **GET** `/api/products/[id]` - Fetch a single product
- **PUT** `/api/products/[id]` - Update a product
- **DELETE** `/api/products/[id]` - Delete a product

## Important Persistence Notes

### ⚠️ Runtime Persistence Only

**Current Behavior:**
- Product data persists during the server runtime
- Changes made via admin panel are immediately available
- Data is lost when the server restarts

**For Permanent Persistence:**

1. **Development/Testing**: 
   - Data persists during `npm run dev` session
   - Restarting the dev server resets to initial data

2. **Production Deployment**:
   - On platforms like Vercel, each deployment starts fresh
   - Changes made via admin panel are lost on next deployment
   - To persist data, you need to:
     - Export data to a JSON file
     - Commit the JSON file to git
     - Redeploy the application

### Recommended Workflow

1. **Add/Edit Products** via admin panel during development
2. **Export data** before deployment (add export function if needed)
3. **Update** `lib/productsData.ts` with the exported data
4. **Commit and deploy**

## Image Handling

### Current Implementation
- Images are referenced by **path** (not uploaded)
- Images must be placed in `/public/images/products/` directory
- Admin form accepts image paths as text input
- Example path: `/images/products/fertilizer.jpg`

### Adding Images
1. Place image file in `public/images/products/` directory
2. In admin panel, enter the path: `/images/products/your-image.jpg`
3. The path will be validated and preview shown

### Image Path Format
- **Relative paths**: `/images/products/image.jpg` (recommended)
- **Absolute URLs**: `https://example.com/image.jpg` (also supported)

## Admin Dashboard Features

All CRUD operations work as expected:

- ✅ **Create**: Add new products with name, description, and image path
- ✅ **Read**: View all products in the dashboard
- ✅ **Update**: Edit existing products
- ✅ **Delete**: Remove products with confirmation

## Product Data Structure

```typescript
interface Product {
  id: string;                    // Auto-generated unique ID
  name: string;                   // Product name (required)
  description: string;            // Product description (required)
  image_url: string | null;       // Image path or URL
  category?: string | null;       // Optional category
  origin?: string | null;         // Optional origin country
  price?: number | null;          // Optional price
  review_count?: number | null;   // Optional review count
  created_at: string;             // ISO timestamp
}
```

## System Architecture

### What's Included
- ✅ Local in-memory data store
- ✅ API routes for CRUD operations
- ✅ Frontend components using API
- ✅ All UI components and styling preserved
- ✅ All animations and interactions
- ✅ Product listing page layout
- ✅ Product detail page layout
- ✅ Admin dashboard layout
- ✅ All routing structure

## Sample Data

The system includes sample products that are initialized on first load:
- Premium NPK Fertilizer
- Plant Growth Regulator
- Fruit Protection Bags

To disable sample data, comment out the `initializeSampleData()` call in `lib/productsData.ts`.

## Future Enhancements (Optional)

If you need permanent persistence without a database:

1. **JSON File Storage**: 
   - Write products to `data/products.json`
   - Read from file on server start
   - Update file on each CRUD operation

2. **Git-Based Storage**:
   - Export products to JSON
   - Commit to git
   - Auto-import on deployment

3. **File System API** (Node.js only):
   - Use `fs` module to read/write JSON files
   - Works in development and self-hosted production

## Troubleshooting

### Products not showing
- Check browser console for API errors
- Verify server is running
- Check that sample data is initialized

### Changes not persisting
- This is expected behavior - data resets on server restart
- Export data before restarting if needed

### Images not loading
- Verify image exists in `/public/images/products/`
- Check path format (should start with `/`)
- Ensure image file is committed to git

## API Usage Examples

### Fetch All Products
```typescript
const response = await fetch('/api/products');
const products = await response.json();
```

### Create Product
```typescript
const response = await fetch('/api/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'New Product',
    description: 'Product description',
    image_url: '/images/products/product.jpg'
  })
});
```

### Update Product
```typescript
const response = await fetch(`/api/products/${productId}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Updated Name',
    description: 'Updated description'
  })
});
```

### Delete Product
```typescript
const response = await fetch(`/api/products/${productId}`, {
  method: 'DELETE'
});
```

