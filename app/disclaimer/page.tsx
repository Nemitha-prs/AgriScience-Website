import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | AgriScience Internationals',
  description: 'AgriScience Internationals Disclaimer - Important information about product information, usage, and limitations.',
  robots: 'index, follow',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li>/</li>
              <li className="text-gray-900">Disclaimer</li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
            <p className="text-gray-600">Last Updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">General Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                The information provided on the AgriScience Internationals (pvt) LTD website is for general informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Product Information Disclaimer</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Accuracy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Product descriptions, specifications, images, and technical information are provided as accurately as possible. However:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Products may vary from images and descriptions</li>
                <li>Specifications are subject to change without notice</li>
                <li>Colors may appear different on various screens</li>
                <li>Measurements and weights are approximate</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Performance and Results</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Agricultural products performance depends on multiple factors including soil conditions, climate, application methods, and farming practices</li>
                <li>We do not guarantee specific crop yields, growth rates, or agricultural outcomes</li>
                <li>Results may vary significantly based on environmental conditions</li>
                <li>Past performance or test results do not guarantee future results</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Professional Advice Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The content on this website is not intended to be a substitute for professional agricultural, legal, financial, or other professional advice. Always seek the advice of qualified professionals regarding:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Agricultural practices and crop management</li>
                <li>Product application and safety procedures</li>
                <li>Soil testing and fertilization programs</li>
                <li>Pest and disease management</li>
                <li>Legal compliance and regulations</li>
                <li>Business and financial decisions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use at Your Own Risk</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any reliance you place on information from this website is strictly at your own risk. AgriScience Internationals (pvt) LTD shall not be liable for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Crop failures or agricultural losses</li>
                <li>Soil or environmental damage</li>
                <li>Economic losses or lost profits</li>
                <li>Decisions made based on website information</li>
                <li>Misapplication or misuse of products</li>
                <li>Adverse reactions or unintended consequences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">External Links Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain links to external websites not operated by AgriScience Internationals (pvt) LTD. We have no control over and assume no responsibility for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Content, accuracy, or availability of external sites</li>
                <li>Privacy policies or practices of third-party websites</li>
                <li>Products or services offered by external sites</li>
                <li>Any damages or losses caused by external sites</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Testimonials and Reviews Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Customer testimonials and reviews reflect individual experiences and opinions. They are not verified by AgriScience Internationals (pvt) LTD and:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Do not constitute professional endorsements</li>
                <li>May not be representative of typical results</li>
                <li>Are not guarantees of future performance</li>
                <li>Should not be the sole basis for purchasing decisions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Technical Information Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Technical specifications, application rates, and usage guidelines:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Are provided for reference purposes only</li>
                <li>May require adjustment based on local conditions</li>
                <li>Should be verified with agricultural professionals</li>
                <li>Are subject to regulatory compliance in your region</li>
                <li>May change based on product formulation updates</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Regulatory and Compliance Disclaimer</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Product availability and use may be subject to local regulations</li>
                <li>Users are responsible for compliance with all applicable laws</li>
                <li>Import/export regulations vary by country</li>
                <li>Licensing and certification requirements differ by region</li>
                <li>We are not responsible for regulatory non-compliance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Health and Safety Disclaimer</h2>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Always follow product labels and safety data sheets</li>
                <li>Use appropriate personal protective equipment</li>
                <li>Store products according to manufacturer guidelines</li>
                <li>Keep products away from children and unauthorized persons</li>
                <li>Dispose of products and containers properly</li>
                <li>Seek immediate medical attention in case of exposure or emergency</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">No Liability for Website Errors</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we make reasonable efforts to maintain website accuracy:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Technical errors, omissions, or inaccuracies may occur</li>
                <li>Website content may become outdated</li>
                <li>Temporary interruptions or downtime may happen</li>
                <li>We reserve the right to correct errors without notice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, AGRISCIENCE INTERNATIONALS (PVT) LTD DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>MERCHANTABILITY</li>
                <li>FITNESS FOR A PARTICULAR PURPOSE</li>
                <li>NON-INFRINGEMENT</li>
                <li>ACCURACY OR COMPLETENESS</li>
                <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify this Disclaimer at any time. Changes are effective immediately upon posting. Your continued use of the website constitutes acceptance of the updated Disclaimer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Acknowledgment</h2>
              <p className="text-gray-700 leading-relaxed">
                By using this website, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions or clarifications regarding this Disclaimer:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-2"><strong>AgriScience Internationals (pvt) LTD</strong></p>
                <p className="text-gray-700 leading-relaxed mb-2">Thushara, Medagoda, Kamburugamuwa, Matara</p>
                <p className="text-gray-700 leading-relaxed mb-2">Email: <a href="mailto:agriinternationalco@gmail.com" className="text-primary-600 underline">agriinternationalco@gmail.com</a></p>
                <p className="text-gray-700 leading-relaxed mb-2">Phone: <a href="tel:+94773667823" className="text-primary-600 underline">+94 77 366 7823</a></p>
                <p className="text-gray-700 leading-relaxed">Website: <a href="https://www.agriscience.lk" className="text-primary-600 underline">www.agriscience.lk</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

