# Hair Dye Catalog

A premium, production-ready web catalog for professional hair dyes built with Next.js 15, TypeScript, and Tailwind CSS. Features advanced filtering, server-side rendering, SEO optimization, and a luxury UI/UX design.

## 🎨 Features

### Core Functionality
- **48 Professional Products** - Realistic dataset with salon-grade shade codes across 6 major brands
- **Advanced Filtering** - Multi-select filters with URL synchronization for shareable links
- **Smart Search** - Text normalization with accent removal
- **Sorting Options** - Featured, price (asc/desc), newest
- **Pagination** - 12 products per page with smooth navigation
- **Responsive Design** - Mobile-first with drawer filters on mobile, sidebar on desktop
- **SEO Optimized** - Metadata, OpenGraph, Twitter cards, and JSON-LD structured data

### Pages
1. **Home (`/`)** - Luxury hero section, featured categories, trust strip, CTA sections
2. **Catalog (`/catalog`)** - Product grid with filters, search, sort, and active filter chips
3. **Product Detail (`/product/[slug]`)** - Gallery, specifications, tabs, breadcrumbs, related products

### Design System Components
Built from scratch with Tailwind CSS:
- Button (4 variants, 3 sizes)
- Input
- Badge (4 variants)
- Chip (removable)
- Card (with hover effects)
- Toggle
- Slider (dual-range)
- Tabs
- Drawer (mobile bottom sheet)

### Filtering Options
- **Brand** - 6 professional brands
- **Shade Family** - blonde, brown, black, red, copper, fantasy, gray-silver
- **Level** - 1-10
- **Tone** - ash, golden, neutral, copper, violet, red
- **Type** - permanent, demi, semi, toner, bleach
- **Gray Coverage** - full, partial, none
- **Ammonia-Free** - toggle
- **Vegan** - toggle
- **Price Range** - dual slider
- **In Stock Only** - toggle
- **Text Search** - normalized

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
hair-dye-catalog/
├── app/
│   ├── layout.tsx              # Root layout with Header/Footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── catalog/
│   │   ├── page.tsx            # Catalog server component
│   │   └── CatalogClient.tsx   # Catalog client component (filters/state)
│   └── product/
│       └── [slug]/
│           └── page.tsx        # Product detail page
├── components/
│   ├── ui/                     # Design system components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Badge.tsx
│   │   ├── Chip.tsx
│   │   ├── Card.tsx
│   │   ├── Toggle.tsx
│   │   ├── Slider.tsx
│   │   ├── Tabs.tsx
│   │   ├── Drawer.tsx
│   │   └── index.ts
│   ├── layout/                 # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── products/               # Product-specific components
│       ├── ProductCard.tsx
│       ├── FilterPanel.tsx
│       └── index.ts
├── data/
│   └── products.ts             # Product dataset (48 products)
├── lib/
│   ├── utils.ts                # Utility functions (cn, formatPrice, etc.)
│   └── filters.ts              # Filtering and sorting logic
├── types/
│   ├── product.ts              # TypeScript type definitions
│   └── index.ts
├── public/
│   └── images/
│       └── products/           # Product images (placeholders)
└── README.md
```

## 🔄 Replacing the Local Dataset with an API

The current implementation uses a local TypeScript file (`/data/products.ts`) for the product data. To swap this with an API:

### Step 1: Create an API client

```typescript
// lib/api.ts
import type { Product } from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/products`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return response.json();
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  const response = await fetch(`${API_BASE_URL}/products/${slug}`, {
    next: { revalidate: 3600 },
  });
  
  if (!response.ok) {
    return null;
  }
  
  return response.json();
}

export async function fetchRelatedProducts(
  productId: string,
  limit: number = 4
): Promise<Product[]> {
  const response = await fetch(
    `${API_BASE_URL}/products/${productId}/related?limit=${limit}`,
    {
      next: { revalidate: 3600 },
    }
  );
  
  if (!response.ok) {
    return [];
  }
  
  return response.json();
}
```

### Step 2: Update imports

Replace all imports from `@/data/products` with `@/lib/api`:

```typescript
// Before
import { getProducts, getProductBySlug, getRelatedProducts } from '@/data/products';

// After
import { fetchProducts, fetchProductBySlug, fetchRelatedProducts } from '@/lib/api';
```

### Step 3: Add environment variables

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
```

### Step 4: Error handling

Add error boundaries and loading states as needed:

```typescript
// app/catalog/page.tsx
export default async function CatalogPage() {
  try {
    const products = await fetchProducts();
    return <CatalogClient initialProducts={products} />;
  } catch (error) {
    return <ErrorState error={error} />;
  }
}
```

### API Response Format

Your API should return data matching the `Product` type defined in `/types/product.ts`:

```json
{
  "id": "1",
  "slug": "loreal-inoa-6-34-dark-golden-copper-blonde",
  "brand": "L'Oréal Professionnel",
  "name": "INOA Supreme Color Crème",
  "shadeCode": "6.34",
  "shadeFamily": "blonde",
  "level": 6,
  "tone": "golden",
  "type": "permanent",
  "description": "...",
  "highlights": ["..."],
  "howToUse": ["..."],
  "ingredients": ["..."],
  "specs": {
    "volumeMl": 60,
    "finish": "Glossy",
    "grayCoverage": "full",
    "ammoniaFree": true,
    "vegan": false,
    "longevityWeeks": 6
  },
  "price": 24.99,
  "currency": "USD",
  "inStock": true,
  "images": [
    { "src": "/images/products/loreal-1.jpg", "alt": "..." }
  ],
  "tags": ["..."],
  "createdAt": "2025-12-15T10:00:00Z"
}
```

## 🎨 Design Philosophy

### Visual Direction
- **Luxury aesthetic** - White/cream backgrounds, ample whitespace
- **Premium typography** - Clean hierarchy with Inter font
- **Refined interactions** - Subtle shadows, 2xl radius, smooth transitions
- **Champagne/rose-gold accents** - Elegant without being loud
- **Micro-interactions** - Hover lift, transition effects

### Color Palette
- Primary: `neutral-900` (deep charcoal)
- Background: `white` / `neutral-50`
- Borders: `neutral-200`
- Text: `neutral-900` / `neutral-600`
- Accents: `neutral-100`

## 🔍 SEO & Metadata

### Implemented
- ✅ Page-level metadata (title, description, keywords)
- ✅ OpenGraph tags for social sharing
- ✅ Twitter card metadata
- ✅ JSON-LD structured data for products
- ✅ Semantic HTML structure
- ✅ Image alt text

### Recommended Additions
- Sitemap generation (`next-sitemap`)
- Robots.txt configuration
- Canonical URLs for duplicate content
- Schema.org BreadcrumbList
- Google Analytics / Tag Manager

## 📱 Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile Safari iOS 12+
- Chrome Android

## 🚧 Future Enhancements

### Bonus Features to Implement
1. **Compare Feature** - Select up to 3 products, store in localStorage, show compare drawer
2. **Recently Viewed** - Track viewed products, show on product detail page
3. **Wishlist** - Save favorite products
4. **Color Visualizer** - Upload photo and preview hair color
5. **Professional Account** - Salon/stylist login with order history
6. **Batch Export** - Export product list as PDF or CSV

### Performance Optimizations
- Add loading skeletons
- Implement image optimization (use proper product images)
- Add service worker for offline capability
- Implement virtual scrolling for large lists

## 📄 License

This is a demo project. Adjust licensing as needed for your use case.

## 🙏 Credits

- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter)
- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)

## 🐛 Known Issues

1. **Placeholder Images** - Product images are placeholder paths. Replace with actual images.
2. **Add to Cart** - Button is non-functional (requires cart implementation).
3. **Mobile Menu** - Header mobile menu button present but drawer not implemented.

## 💡 Tips

### Adding Real Images
Replace placeholder image paths in `/data/products.ts`:

```typescript
images: [
  { 
    src: '/images/products/loreal-inoa-6-34.jpg',  // Update this path
    alt: 'L\'Oréal INOA 6.34 Dark Golden Copper Blonde' 
  }
]
```

Then add images to `/public/images/products/`.

### Customizing Colors
Update Tailwind theme in `tailwind.config.ts` and component color classes.

### Extending Filters
Add new filter options in:
1. `/types/product.ts` - Update types
2. `/components/products/FilterPanel.tsx` - Add UI controls
3. `/lib/filters.ts` - Update filter logic

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
