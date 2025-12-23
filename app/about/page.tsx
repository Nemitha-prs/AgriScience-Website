import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - AgriScience',
  description: 'Learn about AgriScience and our mission to support sustainable agriculture',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-earth-900 mb-8 text-center">About AgriScience</h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-earth-900 mb-4">Our Story</h2>
            <p className="text-earth-700 leading-relaxed mb-4">
              AgriScience was founded with a vision to revolutionize agricultural practices
              through innovative fertilizer solutions. With decades of combined experience in
              agricultural science and soil management, our team is dedicated to helping farmers
              achieve sustainable, high-yield crop production.
            </p>
            <p className="text-earth-700 leading-relaxed">
              We understand that every farm is unique, and that's why we offer a comprehensive
              range of products tailored to different crops, soil types, and farming methods.
              Our commitment to quality and sustainability drives everything we do.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-earth-900 mb-4">Our Mission</h2>
            <p className="text-earth-700 leading-relaxed mb-4">
              To provide farmers with premium-quality fertilizers that enhance crop productivity
              while promoting environmental sustainability. We believe that successful farming
              and environmental stewardship go hand in hand.
            </p>
            <p className="text-earth-700 leading-relaxed">
              Our mission extends beyond just selling products. We aim to be a trusted partner
              in your farming journey, offering expert guidance and support to help you make
              informed decisions about soil nutrition and crop management.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-earth-900 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-earth-700 space-y-2">
              <li>
                <strong className="text-earth-900">Quality First:</strong> We never compromise
                on the quality of our products, ensuring they meet the highest industry standards.
              </li>
              <li>
                <strong className="text-earth-900">Sustainability:</strong> Environmental
                responsibility is at the core of our operations, from product development to
                delivery.
              </li>
              <li>
                <strong className="text-earth-900">Innovation:</strong> We continuously invest
                in research and development to bring cutting-edge solutions to the market.
              </li>
              <li>
                <strong className="text-earth-900">Customer Focus:</strong> Your success is our
                success. We are committed to understanding and meeting your specific needs.
              </li>
              <li>
                <strong className="text-earth-900">Integrity:</strong> We conduct our business
                with honesty, transparency, and ethical practices.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}






