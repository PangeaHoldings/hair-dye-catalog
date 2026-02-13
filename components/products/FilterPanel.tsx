'use client';

import { useState, useCallback } from 'react';
import type { FilterOptions, Brand, ShadeFamily, Tone, ProductType, GrayCoverage } from '@/types';
import { Input, Toggle, Slider, Button, Chip } from '@/components/ui';

interface FilterPanelProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  minPrice: number;
  maxPrice: number;
}

const BRANDS: Brand[] = [
  'L\'Oréal Professionnel',
  'Wella Professionals',
  'Schwarzkopf Professional',
  'Matrix',
  'Redken',
  'Keune',
];

const SHADE_FAMILIES: ShadeFamily[] = [
  'blonde',
  'brown',
  'black',
  'red',
  'copper',
  'fantasy',
  'gray-silver',
];

const LEVELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const TONES: Tone[] = ['ash', 'golden', 'neutral', 'copper', 'violet', 'red'];

const TYPES: ProductType[] = ['permanent', 'demi', 'semi', 'toner', 'bleach'];

const GRAY_COVERAGES: GrayCoverage[] = ['full', 'partial', 'none'];

export function FilterPanel({
  filters,
  onFiltersChange,
  minPrice,
  maxPrice,
}: FilterPanelProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>(
    filters.priceRange || [minPrice, maxPrice]
  );

  const updateFilter = useCallback(
    <K extends keyof FilterOptions>(key: K, value: FilterOptions[K]) => {
      onFiltersChange({ ...filters, [key]: value });
    },
    [filters, onFiltersChange]
  );

  const toggleArrayValue = useCallback(
    <T,>(array: T[], value: T): T[] => {
      return array.includes(value)
        ? array.filter((v) => v !== value)
        : [...array, value];
    },
    []
  );

  const handlePriceChange = useCallback((newRange: [number, number]) => {
    setPriceRange(newRange);
  }, []);

  const applyPriceRange = useCallback(() => {
    updateFilter('priceRange', priceRange);
  }, [priceRange, updateFilter]);

  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-neutral-900">
          Search
        </label>
        <Input
          type="text"
          placeholder="Search products..."
          value={filters.search || ''}
          onChange={(e) => updateFilter('search', e.target.value)}
        />
      </div>

      {/* Brands */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-neutral-900">
          Brand
        </label>
        <div className="space-y-2">
          {BRANDS.map((brand) => (
            <label
              key={brand}
              className="flex cursor-pointer items-center gap-2"
            >
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() =>
                  updateFilter(
                    'brands',
                    toggleArrayValue(filters.brands, brand)
                  )
                }
                className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-500"
              />
              <span className="text-sm text-neutral-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Shade Family */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-neutral-900">
          Shade Family
        </label>
        <div className="flex flex-wrap gap-2">
          {SHADE_FAMILIES.map((family) => (
            <Chip
              key={family}
              variant={
                filters.shadeFamilies.includes(family) ? 'filter' : 'default'
              }
              onClick={() =>
                updateFilter(
                  'shadeFamilies',
                  toggleArrayValue(filters.shadeFamilies, family)
                )
              }
            >
              {family}
            </Chip>
          ))}
        </div>
      </div>

      {/* Level */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-neutral-900">
          Level
        </label>
        <div className="flex flex-wrap gap-2">
          {LEVELS.map((level) => (
            <Chip
              key={level}
              variant={filters.levels.includes(level) ? 'filter' : 'default'}
              onClick={() =>
                updateFilter(
                  'levels',
                  toggleArrayValue(filters.levels, level)
                )
              }
            >
              {level}
            </Chip>
          ))}
        </div>
      </div>

      {/* Tone */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-neutral-900">
          Tone
        </label>
        <div className="flex flex-wrap gap-2">
          {TONES.map((tone) => (
            <Chip
              key={tone}
              variant={filters.tones.includes(tone) ? 'filter' : 'default'}
              onClick={() =>
                updateFilter('tones', toggleArrayValue(filters.tones, tone))
              }
            >
              {tone}
            </Chip>
          ))}
        </div>
      </div>

      {/* Type */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-neutral-900">
          Type
        </label>
        <div className="flex flex-wrap gap-2">
          {TYPES.map((type) => (
            <Chip
              key={type}
              variant={filters.types.includes(type) ? 'filter' : 'default'}
              onClick={() =>
                updateFilter('types', toggleArrayValue(filters.types, type))
              }
            >
              {type}
            </Chip>
          ))}
        </div>
      </div>

      {/* Gray Coverage */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-neutral-900">
          Gray Coverage
        </label>
        <div className="flex flex-wrap gap-2">
          {GRAY_COVERAGES.map((coverage) => (
            <Chip
              key={coverage}
              variant={
                filters.grayCoverages.includes(coverage) ? 'filter' : 'default'
              }
              onClick={() =>
                updateFilter(
                  'grayCoverages',
                  toggleArrayValue(filters.grayCoverages, coverage)
                )
              }
            >
              {coverage}
            </Chip>
          ))}
        </div>
      </div>

      {/* Ammonia-Free Toggle */}
      <div>
        <label className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-neutral-900">
            Ammonia-Free
          </span>
          <Toggle
            pressed={filters.ammoniaFree === true}
            onPressedChange={(pressed) =>
              updateFilter('ammoniaFree', pressed ? true : undefined)
            }
          />
        </label>
      </div>

      {/* Vegan Toggle */}
      <div>
        <label className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-neutral-900">Vegan</span>
          <Toggle
            pressed={filters.vegan === true}
            onPressedChange={(pressed) =>
              updateFilter('vegan', pressed ? true : undefined)
            }
          />
        </label>
      </div>

      {/* Price Range */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-neutral-900">
          Price Range
        </label>
        <div className="space-y-4">
          <Slider
            min={minPrice}
            max={maxPrice}
            step={1}
            value={priceRange}
            onChange={handlePriceChange}
          />
          <div className="flex items-center justify-between text-sm text-neutral-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={applyPriceRange}
            className="w-full"
          >
            Apply Price Range
          </Button>
        </div>
      </div>

      {/* In Stock Only */}
      <div>
        <label className="mb-3 flex items-center justify-between">
          <span className="text-sm font-semibold text-neutral-900">
            In Stock Only
          </span>
          <Toggle
            pressed={filters.inStockOnly === true}
            onPressedChange={(pressed) =>
              updateFilter('inStockOnly', pressed ? true : undefined)
            }
          />
        </label>
      </div>
    </div>
  );
}
