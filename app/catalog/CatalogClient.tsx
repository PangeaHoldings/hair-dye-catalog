'use client';

import { useState, useCallback, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, SlidersHorizontal, X } from 'lucide-react';
import type { Product, FilterOptions, SortOption, Brand, ShadeFamily, Tone, ProductType, GrayCoverage } from '@/types';
import { ProductCard, FilterPanel } from '@/components/products';
import { Chip, Button, Drawer } from '@/components/ui';
import { filterProducts, sortProducts, getActiveFilterCount, getMinMaxPrice } from '@/lib/filters';

interface CatalogClientProps {
  initialProducts: Product[];
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
];

const PRODUCTS_PER_PAGE = 12;

export function CatalogClient({ initialProducts }: CatalogClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Parse filters from URL
  const filters: FilterOptions = useMemo(() => {
    const brands = searchParams.get('brands')?.split(',').filter(Boolean) || [];
    const shadeFamilies = searchParams.get('shadeFamilies')?.split(',').filter(Boolean) || [];
    const levels = searchParams.get('levels')?.split(',').map(Number).filter(Boolean) || [];
    const tones = searchParams.get('tones')?.split(',').filter(Boolean) || [];
    const types = searchParams.get('types')?.split(',').filter(Boolean) || [];
    const grayCoverages = searchParams.get('grayCoverages')?.split(',').filter(Boolean) || [];
    const ammoniaFree = searchParams.get('ammoniaFree') === 'true' ? true : undefined;
    const vegan = searchParams.get('vegan') === 'true' ? true : undefined;
    const inStockOnly = searchParams.get('inStockOnly') === 'true' ? true : undefined;
    const search = searchParams.get('search') || undefined;
    
    const priceMin = searchParams.get('priceMin');
    const priceMax = searchParams.get('priceMax');
    const priceRange = priceMin && priceMax ? [Number(priceMin), Number(priceMax)] as [number, number] : undefined;

    return {
      brands: brands as Brand[],
      shadeFamilies: shadeFamilies as ShadeFamily[],
      levels,
      tones: tones as Tone[],
      types: types as ProductType[],
      grayCoverages: grayCoverages as GrayCoverage[],
      ammoniaFree,
      vegan,
      priceRange,
      inStockOnly,
      search,
    };
  }, [searchParams]);

  const sortBy: SortOption = (searchParams.get('sort') as SortOption) || 'featured';

  // Update URL when filters change
  const updateURL = useCallback(
    (newFilters: FilterOptions, newSort?: SortOption) => {
      const params = new URLSearchParams();

      if (newFilters.brands.length) params.set('brands', newFilters.brands.join(','));
      if (newFilters.shadeFamilies.length) params.set('shadeFamilies', newFilters.shadeFamilies.join(','));
      if (newFilters.levels.length) params.set('levels', newFilters.levels.join(','));
      if (newFilters.tones.length) params.set('tones', newFilters.tones.join(','));
      if (newFilters.types.length) params.set('types', newFilters.types.join(','));
      if (newFilters.grayCoverages.length) params.set('grayCoverages', newFilters.grayCoverages.join(','));
      if (newFilters.ammoniaFree !== undefined) params.set('ammoniaFree', 'true');
      if (newFilters.vegan !== undefined) params.set('vegan', 'true');
      if (newFilters.inStockOnly !== undefined) params.set('inStockOnly', 'true');
      if (newFilters.search) params.set('search', newFilters.search);
      if (newFilters.priceRange) {
        params.set('priceMin', String(newFilters.priceRange[0]));
        params.set('priceMax', String(newFilters.priceRange[1]));
      }

      const sort = newSort || sortBy;
      if (sort !== 'featured') params.set('sort', sort);

      router.push(`/catalog?${params.toString()}`, { scroll: false });
      setCurrentPage(1);
    },
    [router, sortBy]
  );

  const handleFiltersChange = useCallback(
    (newFilters: FilterOptions) => {
      updateURL(newFilters);
    },
    [updateURL]
  );

  const handleSortChange = useCallback(
    (newSort: SortOption) => {
      updateURL(filters, newSort);
    },
    [filters, updateURL]
  );

  const clearAllFilters = useCallback(() => {
    router.push('/catalog');
    setCurrentPage(1);
  }, [router]);

  const removeFilter = useCallback(
    (key: keyof FilterOptions, value?: string | number | boolean) => {
      const newFilters = { ...filters };
      
      if (key === 'ammoniaFree' || key === 'vegan' || key === 'inStockOnly' || key === 'priceRange' || key === 'search') {
        newFilters[key] = undefined;
      } else if (Array.isArray(newFilters[key])) {
        (newFilters[key] as Brand[] | ShadeFamily[] | Tone[] | ProductType[] | GrayCoverage[] | number[]) = 
          (newFilters[key] as (string | number)[]).filter((v) => v !== value) as Brand[] & ShadeFamily[] & Tone[] & ProductType[] & GrayCoverage[] & number[];
      }
      
      updateURL(newFilters);
    },
    [filters, updateURL]
  );

  // Apply filters and sorting
  const filteredProducts = useMemo(() => {
    const filtered = filterProducts(initialProducts, filters);
    return sortProducts(filtered, sortBy);
  }, [initialProducts, filters, sortBy]);

  // Pagination
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
    const end = start + PRODUCTS_PER_PAGE;
    return filteredProducts.slice(start, end);
  }, [filteredProducts, currentPage]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const activeFilterCount = getActiveFilterCount(filters);
  const [minPrice, maxPrice] = getMinMaxPrice(initialProducts);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold text-white">
          Hair Color Catalog
        </h1>
        <p className="text-lg text-white">
          {filteredProducts.length} products found
        </p>
      </div>

      {/* Actions Bar */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Filter Button (Mobile) */}
        <Button
          variant="outline"
          onClick={() => setIsFilterDrawerOpen(true)}
          className="md:hidden"
        >
          <SlidersHorizontal className="mr-2 h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="ml-2 rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-900">
              {activeFilterCount}
            </span>
          )}
        </Button>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <label htmlFor="sort" className="text-sm font-medium text-white">
            Sort:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value as SortOption)}
            className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-900 focus:border-neutral-900 focus:outline-none focus:ring-1 focus:ring-neutral-900"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters */}
      {activeFilterCount > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-white">
            Active filters:
          </span>
          {filters.brands.map((brand) => (
            <Chip
              key={brand}
              variant="filter"
              onRemove={() => removeFilter('brands', brand)}
            >
              {brand}
            </Chip>
          ))}
          {filters.shadeFamilies.map((family) => (
            <Chip
              key={family}
              variant="filter"
              onRemove={() => removeFilter('shadeFamilies', family)}
            >
              {family}
            </Chip>
          ))}
          {filters.levels.map((level) => (
            <Chip
              key={level}
              variant="filter"
              onRemove={() => removeFilter('levels', level)}
            >
              Level {level}
            </Chip>
          ))}
          {filters.tones.map((tone) => (
            <Chip
              key={tone}
              variant="filter"
              onRemove={() => removeFilter('tones', tone)}
            >
              {tone}
            </Chip>
          ))}
          {filters.types.map((type) => (
            <Chip
              key={type}
              variant="filter"
              onRemove={() => removeFilter('types', type)}
            >
              {type}
            </Chip>
          ))}
          {filters.grayCoverages.map((coverage) => (
            <Chip
              key={coverage}
              variant="filter"
              onRemove={() => removeFilter('grayCoverages', coverage)}
            >
              {coverage} coverage
            </Chip>
          ))}
          {filters.ammoniaFree && (
            <Chip variant="filter" onRemove={() => removeFilter('ammoniaFree')}>
              Ammonia-Free
            </Chip>
          )}
          {filters.vegan && (
            <Chip variant="filter" onRemove={() => removeFilter('vegan')}>
              Vegan
            </Chip>
          )}
          {filters.priceRange && (
            <Chip variant="filter" onRemove={() => removeFilter('priceRange')}>
              ${filters.priceRange[0]} - ${filters.priceRange[1]}
            </Chip>
          )}
          {filters.inStockOnly && (
            <Chip variant="filter" onRemove={() => removeFilter('inStockOnly')}>
              In Stock Only
            </Chip>
          )}
          {filters.search && (
            <Chip variant="filter" onRemove={() => removeFilter('search')}>
              &quot;{filters.search}&quot;
            </Chip>
          )}
          <Button variant="ghost" size="sm" onClick={clearAllFilters}>
            <X className="mr-1 h-4 w-4" />
            Clear All
          </Button>
        </div>
      )}

      <div className="flex gap-8">
        {/* Filters Sidebar (Desktop) */}
        <aside className="hidden w-64 shrink-0 md:block">
          <div className="sticky top-20 rounded-2xl border border-neutral-200 bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-neutral-900">Filters</h2>
              {activeFilterCount > 0 && (
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-900">
                  {activeFilterCount}
                </span>
              )}
            </div>
            <FilterPanel
              filters={filters}
              onFiltersChange={handleFiltersChange}
              minPrice={minPrice}
              maxPrice={maxPrice}
            />
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex-1">
          {paginatedProducts.length === 0 ? (
            <div className="flex min-h-100 items-center justify-center rounded-2xl border-2 border-dashed border-neutral-200 bg-neutral-50">
              <div className="text-center">
                <Filter className="mx-auto mb-4 h-12 w-12 text-neutral-400" />
                <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                  No products found
                </h3>
                <p className="mb-4 text-neutral-600">
                  Try adjusting your filters to see more results
                </p>
                <Button onClick={clearAllFilters}>Clear All Filters</Button>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={page === currentPage ? 'primary' : 'outline'}
                        onClick={() => setCurrentPage(page)}
                      >
                        {page}
                      </Button>
                    )
                  )}
                  <Button
                    variant="outline"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <Drawer
        open={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        title="Filters"
        side="bottom"
      >
        <FilterPanel
          filters={filters}
          onFiltersChange={(newFilters) => {
            handleFiltersChange(newFilters);
            setIsFilterDrawerOpen(false);
          }}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
      </Drawer>
    </div>
  );
}
