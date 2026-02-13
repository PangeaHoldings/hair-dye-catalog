export type ShadeFamily = 
  | 'blonde' 
  | 'brown' 
  | 'black' 
  | 'red' 
  | 'copper' 
  | 'fantasy' 
  | 'gray-silver';

export type Tone = 
  | 'ash' 
  | 'golden' 
  | 'neutral' 
  | 'copper' 
  | 'violet' 
  | 'red';

export type ProductType = 
  | 'permanent' 
  | 'demi' 
  | 'semi' 
  | 'toner' 
  | 'bleach';

export type GrayCoverage = 
  | 'full' 
  | 'partial' 
  | 'none';

export type Brand = 
  | 'L\'Oréal Professionnel' 
  | 'Wella Professionals' 
  | 'Schwarzkopf Professional' 
  | 'Matrix' 
  | 'Redken' 
  | 'Keune';

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductSpecs {
  volumeMl: number;
  finish: string;
  grayCoverage: GrayCoverage;
  ammoniaFree: boolean;
  vegan: boolean;
  longevityWeeks: number;
}

export interface Product {
  id: string;
  slug: string;
  brand: Brand;
  name: string;
  shadeCode: string;
  shadeFamily: ShadeFamily;
  level: number;
  tone: Tone;
  type: ProductType;
  description: string;
  highlights: string[];
  howToUse: string[];
  ingredients: string[];
  specs: ProductSpecs;
  price: number;
  currency: string;
  inStock: boolean;
  images: ProductImage[];
  tags: string[];
  createdAt: string;
}

export interface FilterOptions {
  brands: Brand[];
  shadeFamilies: ShadeFamily[];
  levels: number[];
  tones: Tone[];
  types: ProductType[];
  grayCoverages: GrayCoverage[];
  ammoniaFree?: boolean;
  vegan?: boolean;
  priceRange?: [number, number];
  inStockOnly?: boolean;
  search?: string;
}

export type SortOption = 
  | 'featured' 
  | 'price-asc' 
  | 'price-desc' 
  | 'newest';
