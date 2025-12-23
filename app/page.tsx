import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Premium Agricultural Fertilizers
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Nourishing crops, growing futures. Sustainable solutions for modern farming.
            </p>
            <Link
              href="/products"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition shadow-lg"
            >
              Explore Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-earth-900 mb-6 text-center">
              About AgriScience
            </h2>
            <div className="prose prose-lg mx-auto text-earth-700">
              <p className="text-lg leading-relaxed mb-4">
                AgriScience is a leading provider of high-quality agricultural fertilizers
                dedicated to supporting farmers in achieving optimal crop yields. With years
                of experience in the agricultural industry, we understand the importance of
                sustainable farming practices and nutrient management.
              </p>
              <p className="text-lg leading-relaxed">
                Our comprehensive range of fertilizers is carefully formulated to meet the
                diverse needs of different crops and soil types. We are committed to providing
                products that not only enhance productivity but also promote environmental
                sustainability for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-earth-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-earth-900 mb-2">
                Quality Assured
              </h3>
              <p className="text-earth-600">
                All our products undergo rigorous quality testing to ensure maximum effectiveness.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-earth-900 mb-2">
                Sustainable Solutions
              </h3>
              <p className="text-earth-600">
                Environmentally responsible products designed for long-term soil health.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-earth-900 mb-2">
                Expert Support
              </h3>
              <p className="text-earth-600">
                Our team provides guidance to help you choose the right products for your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}






