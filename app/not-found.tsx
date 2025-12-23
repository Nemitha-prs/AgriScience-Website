import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-earth-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-earth-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-earth-700 mb-4">Page Not Found</h2>
        <p className="text-earth-600 mb-8">The page you're looking for doesn't exist.</p>
        <Link
          href="/"
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}







