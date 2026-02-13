import Link from 'next/link';
import Image from 'next/image';
import type { Product } from '@/types';
import { Badge } from '@/components/ui';
import { formatPrice } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-neutral-50">
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          {!product.inStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/80">
              <Badge variant="warning">Out of Stock</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Brand */}
          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-neutral-500">
            {product.brand}
          </p>

          {/* Name */}
          <h3 className="mb-2 text-base font-semibold text-neutral-900 line-clamp-2">
            {product.name}
          </h3>

          {/* Shade Code */}
          <p className="mb-3 text-sm text-neutral-600">
            Shade {product.shadeCode}
          </p>

          {/* Badges */}
          <div className="mb-3 flex flex-wrap gap-1.5">
            {product.specs.ammoniaFree && (
              <Badge variant="info">Ammonia-Free</Badge>
            )}
            {product.specs.vegan && <Badge variant="success">Vegan</Badge>}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <p className="text-lg font-bold text-neutral-900">
              {formatPrice(product.price, product.currency)}
            </p>
            {product.inStock && (
              <Badge variant="success">In Stock</Badge>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
