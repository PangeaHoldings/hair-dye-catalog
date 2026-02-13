import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getProducts } from '@/data/products';
import { CatalogClient } from './CatalogClient';

export const metadata: Metadata = {
  title: 'Hair Color Catalog - Professional Hair Dyes & Toners',
  description: 'Browse our complete catalog of professional hair color products. Filter by brand, shade family, level, tone, and more.',
  openGraph: {
    title: 'Hair Color Catalog - Professional Hair Dyes & Toners',
    description: 'Browse our complete catalog of professional hair color products.',
    type: 'website',
  },
};

export default async function CatalogPage() {
  const products = await getProducts();

  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-8">Loading...</div>}>
      <CatalogClient initialProducts={products} />
    </Suspense>
  );
}
