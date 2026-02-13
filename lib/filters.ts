import type { Product, FilterOptions, SortOption } from '@/types';
import { normalizeText } from './utils';

export function filterProducts(
  products: Product[],
  filters: FilterOptions
): Product[] {
  return products.filter((product) => {
    // Brand filter (OR within group)
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand)) {
      return false;
    }

    // Shade family filter (OR within group)
    if (
      filters.shadeFamilies.length > 0 &&
      !filters.shadeFamilies.includes(product.shadeFamily)
    ) {
      return false;
    }

    // Level filter (OR within group)
    if (filters.levels.length > 0 && !filters.levels.includes(product.level)) {
      return false;
    }

    // Tone filter (OR within group)
    if (filters.tones.length > 0 && !filters.tones.includes(product.tone)) {
      return false;
    }

    // Type filter (OR within group)
    if (filters.types.length > 0 && !filters.types.includes(product.type)) {
      return false;
    }

    // Gray coverage filter (OR within group)
    if (
      filters.grayCoverages.length > 0 &&
      !filters.grayCoverages.includes(product.specs.grayCoverage)
    ) {
      return false;
    }

    // Ammonia-free filter
    if (
      filters.ammoniaFree !== undefined &&
      product.specs.ammoniaFree !== filters.ammoniaFree
    ) {
      return false;
    }

    // Vegan filter
    if (filters.vegan !== undefined && product.specs.vegan !== filters.vegan) {
      return false;
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      if (product.price < min || product.price > max) {
        return false;
      }
    }

    // In stock filter
    if (filters.inStockOnly && !product.inStock) {
      return false;
    }

    // Search filter
    if (filters.search && filters.search.trim() !== '') {
      const searchTerm = normalizeText(filters.search.trim());
      const searchableText = normalizeText(
        `${product.name} ${product.brand} ${product.shadeCode} ${product.description} ${product.tags.join(' ')}`
      );
      if (!searchableText.includes(searchTerm)) {
        return false;
      }
    }

    return true;
  });
}

export function sortProducts(
  products: Product[],
  sortBy: SortOption
): Product[] {
  const sorted = [...products];

  switch (sortBy) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      sorted.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      break;
    case 'featured':
    default:
      // Featured products are manually curated - for now keep original order
      break;
  }

  return sorted;
}

export function getMinMaxPrice(products: Product[]): [number, number] {
  if (products.length === 0) return [0, 100];

  const prices = products.map((p) => p.price);
  return [Math.min(...prices), Math.max(...prices)];
}

export function getActiveFilterCount(filters: FilterOptions): number {
  let count = 0;

  count += filters.brands.length;
  count += filters.shadeFamilies.length;
  count += filters.levels.length;
  count += filters.tones.length;
  count += filters.types.length;
  count += filters.grayCoverages.length;

  if (filters.ammoniaFree !== undefined) count++;
  if (filters.vegan !== undefined) count++;
  if (filters.priceRange) count++;
  if (filters.inStockOnly) count++;
  if (filters.search && filters.search.trim() !== '') count++;

  return count;
}
