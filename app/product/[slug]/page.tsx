import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Check } from 'lucide-react';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { formatPrice } from '@/lib/utils';
import { Badge, Card, CardContent, Tabs, TabsList, TabsTrigger, TabsContent, Button } from '@/components/ui';
import { ProductCard } from '@/components/products';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} ${product.shadeCode} - ${product.brand}`,
    description: product.description,
    openGraph: {
      title: `${product.name} ${product.shadeCode}`,
      description: product.description,
      type: 'website',
      images: product.images.map((img) => ({ url: img.src, alt: img.alt })),
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.id, 4);

  // JSON-LD structured data
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.name} ${product.shadeCode}`,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.currency,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
    image: product.images.map((img) => img.src),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="bg-white">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/catalog" className="hover:text-neutral-900">
              Catalog
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-neutral-900">{product.name}</span>
          </nav>

          {/* Product Section */}
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-50">
                <Image
                  src={product.images[0].src}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                    <Badge variant="warning" className="text-lg">
                      Out of Stock
                    </Badge>
                  </div>
                )}
              </div>
              {/* Thumbnails would go here if there were multiple images */}
            </div>

            {/* Product Info */}
            <div>
              {/* Brand */}
              <p className="mb-2 text-sm font-medium uppercase tracking-wide text-neutral-500">
                {product.brand}
              </p>

              {/* Name */}
              <h1 className="mb-4 text-4xl font-bold text-neutral-900">
                {product.name}
              </h1>

              {/* Shade Code */}
              <div className="mb-4 flex items-center gap-4">
                <span className="text-2xl font-semibold text-neutral-700">
                  Shade {product.shadeCode}
                </span>
                <Badge>{product.shadeFamily}</Badge>
                <Badge>{product.type}</Badge>
              </div>

              {/* Price */}
              <div className="mb-6">
                <p className="text-3xl font-bold text-neutral-900">
                  {formatPrice(product.price, product.currency)}
                </p>
              </div>

              {/* Stock Status */}
              <div className="mb-6">
                {product.inStock ? (
                  <Badge variant="success" className="text-sm">
                    <Check className="mr-1 h-4 w-4" />
                    In Stock
                  </Badge>
                ) : (
                  <Badge variant="warning" className="text-sm">
                    Out of Stock
                  </Badge>
                )}
              </div>

              {/* Key Features */}
              <div className="mb-6 space-y-2">
                <div className="flex gap-2">
                  <span className="text-sm font-semibold text-neutral-700">
                    Level:
                  </span>
                  <span className="text-sm text-neutral-600">
                    {product.level}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-sm font-semibold text-neutral-700">
                    Tone:
                  </span>
                  <span className="text-sm text-neutral-600">
                    {product.tone}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-sm font-semibold text-neutral-700">
                    Gray Coverage:
                  </span>
                  <span className="text-sm text-neutral-600">
                    {product.specs.grayCoverage}
                  </span>
                </div>
                <div className="flex gap-2">
                  <span className="text-sm font-semibold text-neutral-700">
                    Volume:
                  </span>
                  <span className="text-sm text-neutral-600">
                    {product.specs.volumeMl}ml
                  </span>
                </div>
              </div>

              {/* Badges */}
              <div className="mb-6 flex flex-wrap gap-2">
                {product.specs.ammoniaFree && (
                  <Badge variant="info">Ammonia-Free</Badge>
                )}
                {product.specs.vegan && <Badge variant="success">Vegan</Badge>}
                <Badge variant="default">
                  {product.specs.longevityWeeks} weeks longevity
                </Badge>
              </div>

              {/* CTA */}
              <div className="mb-8">
                <Button size="lg" className="w-full" disabled={!product.inStock}>
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </div>

              {/* Highlights */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-lg font-semibold text-neutral-900">
                    Key Highlights
                  </h3>
                  <ul className="space-y-2">
                    {product.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-neutral-900" />
                        <span className="text-sm text-neutral-700">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <Tabs defaultValue="description">
              <TabsList>
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="how-to-use">How to Use</TabsTrigger>
                <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
              </TabsList>

              <TabsContent value="description">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-neutral-700 leading-relaxed">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="how-to-use">
                <Card>
                  <CardContent className="p-6">
                    <ol className="space-y-3">
                      {product.howToUse.map((step, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-sm font-semibold text-white">
                            {index + 1}
                          </span>
                          <span className="pt-1 text-neutral-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="ingredients">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ingredient, index) => (
                        <Badge key={index} variant="default">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="specs">
                <Card>
                  <CardContent className="p-6">
                    <dl className="space-y-4">
                      <div className="flex justify-between border-b border-neutral-200 pb-3">
                        <dt className="font-semibold text-neutral-900">
                          Volume
                        </dt>
                        <dd className="text-neutral-700">
                          {product.specs.volumeMl}ml
                        </dd>
                      </div>
                      <div className="flex justify-between border-b border-neutral-200 pb-3">
                        <dt className="font-semibold text-neutral-900">
                          Finish
                        </dt>
                        <dd className="text-neutral-700">
                          {product.specs.finish}
                        </dd>
                      </div>
                      <div className="flex justify-between border-b border-neutral-200 pb-3">
                        <dt className="font-semibold text-neutral-900">
                          Gray Coverage
                        </dt>
                        <dd className="text-neutral-700">
                          {product.specs.grayCoverage}
                        </dd>
                      </div>
                      <div className="flex justify-between border-b border-neutral-200 pb-3">
                        <dt className="font-semibold text-neutral-900">
                          Ammonia-Free
                        </dt>
                        <dd className="text-neutral-700">
                          {product.specs.ammoniaFree ? 'Yes' : 'No'}
                        </dd>
                      </div>
                      <div className="flex justify-between border-b border-neutral-200 pb-3">
                        <dt className="font-semibold text-neutral-900">
                          Vegan
                        </dt>
                        <dd className="text-neutral-700">
                          {product.specs.vegan ? 'Yes' : 'No'}
                        </dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="font-semibold text-neutral-900">
                          Longevity
                        </dt>
                        <dd className="text-neutral-700">
                          {product.specs.longevityWeeks} weeks
                        </dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-neutral-900">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
