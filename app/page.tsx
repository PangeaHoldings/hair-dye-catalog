import Link from 'next/link';
import { ArrowRight, Sparkles, Shield, Award } from 'lucide-react';
import { Button, Card, CardContent } from '@/components/ui';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-neutral-50 to-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-700">
              <Sparkles className="h-4 w-4" />
              Professional Salon-Grade Hair Color
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
              Discover Your Perfect
              <span className="block bg-linear-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
                Hair Color
              </span>
            </h1>
            <p className="mb-10 text-xl text-neutral-600 md:text-2xl">
              Premium professional hair dyes from the world's leading brands.
              Salon-quality formulas for beautiful, long-lasting results.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/catalog">
                <Button size="lg" className="group">
                  Browse Catalog
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/catalog?types=toner">
                <Button size="lg" variant="outline">
                  Explore Toners
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-neutral-200 bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100">
                <Shield className="h-6 w-6 text-neutral-900" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">
                  Salon-Grade Quality
                </h3>
                <p className="text-sm text-neutral-600">
                  Professional formulas trusted by experts
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100">
                <Award className="h-6 w-6 text-neutral-900" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">
                  Color Accuracy
                </h3>
                <p className="text-sm text-neutral-600">
                  Predictable, true-to-tone results every time
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral-100">
                <Sparkles className="h-6 w-6 text-neutral-900" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900">
                  Pro Formulas
                </h3>
                <p className="text-sm text-neutral-600">
                  Advanced technology for healthy hair color
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-neutral-900">
              Shop by Category
            </h2>
            <p className="text-lg text-neutral-600">
              Explore our curated collection of professional hair color products
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link href="/catalog?types=permanent">
              <Card hover className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-neutral-900 to-neutral-700">
                    <span className="text-2xl font-bold text-white">P</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    Permanent Color
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Long-lasting color with 100% gray coverage
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/catalog?types=demi">
              <Card hover className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-neutral-700 to-neutral-500">
                    <span className="text-2xl font-bold text-white">D</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    Demi-Permanent
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Gentle color with brilliant shine and no lift
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/catalog?types=toner">
              <Card hover className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-neutral-500 to-neutral-400">
                    <span className="text-2xl font-bold text-white">T</span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    Toners
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Neutralize unwanted tones and add shine
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/catalog?types=bleach">
              <Card hover className="h-full">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-amber-100 to-amber-200">
                    <span className="text-2xl font-bold text-neutral-900">
                      B
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-neutral-900">
                    Bleach & Lighteners
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Professional lightening for dramatic results
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Ready to Transform Your Hair?
          </h2>
          <p className="mb-8 text-xl text-neutral-300">
            Browse our complete catalog of professional hair color products
          </p>
          <Link href="/catalog">
            <Button size="lg" variant="secondary" className="group">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

