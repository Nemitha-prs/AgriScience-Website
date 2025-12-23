import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-primary-700 text-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center hover:opacity-80 transition relative z-10 -ml-16">
            <div className="relative h-32 w-[500px]">
              <Image
                src="/images/logo.png"
                alt="AgriScience Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <div className="flex space-x-6">
            <Link
              href="/"
              className="hover:text-primary-200 transition font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="hover:text-primary-200 transition font-medium"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="hover:text-primary-200 transition font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary-200 transition font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}