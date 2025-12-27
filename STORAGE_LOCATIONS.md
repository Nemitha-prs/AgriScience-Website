# Storage Locations for Products and Images

## 📦 Product Data Storage

### Location: `data/products.json`

**Path:** `C:\Users\Nemitha\OneDrive\Documents\GitHub\AgriScience Website\data\products.json`

**What's stored here:**
- All product information (name, description, category, price, etc.)
- Product images as **base64 data URLs** (embedded directly in JSON)
- Product IDs and creation timestamps

**File Structure:**
```json
[
  {
    "id": "prod_1234567890_abc123",
    "name": "Product Name",
    "description": "Product description...",
    "image_url": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ...",
    "category": "Fertilizers",
    "origin": "China",
    "price": 1000,
    "review_count": 5,
    "created_at": "2025-01-27T10:30:00.000Z"
  }
]
```

**Code Reference:**
- Defined in: `lib/productsData.ts` (line 24)
- Storage path: `const DATA_FILE = path.join(process.cwd(), 'data', 'products.json');`

---

## 🖼️ Image Storage

### 1. Product Images (Admin Uploaded)
**Storage Method:** Base64 Data URLs embedded in `data/products.json`

**How it works:**
- When admin uploads an image via the dashboard, it's converted to base64
- The entire image data is stored as a string in the `image_url` field
- No separate image files are created for products

**Code Reference:**
- Image conversion: `components/AdminProductForm.tsx` (lines 51-67)
- Storage: Saved directly in product JSON via `lib/productsData.ts`

**Example:**
```javascript
// Image is converted to base64 like this:
"image_url": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
```

### 2. Static Website Images
**Location:** `public/images/`

**Path:** `C:\Users\Nemitha\OneDrive\Documents\GitHub\AgriScience Website\public\images\`

**Directory Structure:**
```
public/images/
├── logo.png                          # Main website logo
├── hero-farm.jpg                     # Hero section background
├── dev-logo.svg                      # Developer logo
├── about/
│   ├── core-bg.jpg
│   └── story-bg.jpg
├── about-us/
│   └── about-bg.jpg
├── director/
│   └── director.jpg
├── featured-products/
│   ├── fertilizers.jpg
│   ├── fruit-bags.jpg
│   └── pgr.jpg
├── Hero/
│   └── hero-bg.jpg
└── products/
    ├── info-bg.jpg
    └── products-bg.jpg
```

**Usage:**
- These are static images used throughout the website
- Referenced in code as `/images/filename.jpg`
- Served directly by Next.js from the `public` folder

---

## 📝 Summary

| Item | Storage Location | Format |
|------|-----------------|--------|
| **Product Data** | `data/products.json` | JSON file |
| **Product Images** | Embedded in `data/products.json` | Base64 data URLs |
| **Website Images** | `public/images/` | JPG, PNG, SVG files |

---

## 🔍 How to Access

### View Product Data:
1. Open: `data/products.json`
2. Or check via API: `http://localhost:3000/api/products`

### View Static Images:
1. Navigate to: `public/images/`
2. Or access via browser: `http://localhost:3000/images/logo.png`

### Add New Product:
1. Go to Admin Dashboard: `/admin/dashboard`
2. Click "Add New Product"
3. Upload image (converted to base64 automatically)
4. Product saved to `data/products.json`

---

## ⚠️ Important Notes

1. **Product Images are Large:**
   - Base64 encoding increases file size by ~33%
   - Large images make `products.json` very large
   - Consider image compression before upload

2. **File Persistence:**
   - In development: Changes persist in `data/products.json`
   - In production (Vercel): File writes may not persist
   - For production: Commit `data/products.json` to Git

3. **Backup:**
   - Always backup `data/products.json` before major changes
   - The file contains all product data and images

