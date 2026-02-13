import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 mb-4">
              <span className="text-lg font-bold text-white">H</span>
            </div>
            <p className="text-sm text-neutral-600">
              Professional hair color solutions for salon-grade results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link href="/" className="hover:text-neutral-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-neutral-900">
                  Catalog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">
              Categories
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                <Link href="/catalog?types=permanent" className="hover:text-neutral-900">
                  Permanent Color
                </Link>
              </li>
              <li>
                <Link href="/catalog?types=demi" className="hover:text-neutral-900">
                  Demi-Permanent
                </Link>
              </li>
              <li>
                <Link href="/catalog?types=toner" className="hover:text-neutral-900">
                  Toners
                </Link>
              </li>
              <li>
                <Link href="/catalog?types=bleach" className="hover:text-neutral-900">
                  Bleach
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-neutral-900">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Shipping</li>
              <li>Returns</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-600">
          <p>
            &copy; {new Date().getFullYear()} Hair Dye Catalog. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
