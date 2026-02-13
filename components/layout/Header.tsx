import Link from 'next/link';
import { Search, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900">
              <span className="text-lg font-bold text-white">H</span>
            </div>
            <span className="text-xl font-semibold text-neutral-900">
              Hair Dye Catalog
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Home
            </Link>
            <Link
              href="/catalog"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Catalog
            </Link>
            <Link
              href="/catalog"
              className="flex items-center gap-2 rounded-2xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
            >
              <Search className="h-4 w-4" />
              Browse Products
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-xl hover:bg-neutral-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
