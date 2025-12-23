import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions | AgriScience',
  description: 'AgriScience Terms and Conditions - Read our terms of service and usage policies.',
  robots: 'index, follow',
};

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li>/</li>
              <li className="text-gray-900">Terms and Conditions</li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
            <p className="text-gray-600">Last Updated: December 23, 2024</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions ("Terms") govern your use of the AgriScience website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please discontinue use immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use of Website</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Permitted Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may use our website for lawful purposes only, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Browsing product information</li>
                <li>Requesting product catalogs and technical information</li>
                <li>Contacting us for business inquiries</li>
                <li>Subscribing to newsletters and updates</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Prohibited Use</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Use the website for any illegal or unauthorized purpose</li>
                <li>Violate any laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit viruses, malware, or harmful code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Collect or harvest information about other users</li>
                <li>Interfere with website operations or security</li>
                <li>Misrepresent your identity or affiliation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, images, product descriptions, and software, is the property of AgriScience or its licensors and is protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Reproduce, distribute, or modify website content without written permission</li>
                <li>Use our trademarks or logos without authorization</li>
                <li>Create derivative works based on our content</li>
                <li>Frame or mirror any website content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Product Information</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Accuracy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we strive to provide accurate product information, we do not warrant that product descriptions, specifications, or other content are complete, reliable, current, or error-free. Products may vary slightly from images and descriptions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Agricultural Advice</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Information provided on this website is for general informational purposes only and should not be considered professional agricultural advice. Always consult with qualified agricultural professionals before making farming or cultivation decisions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Product Availability</h3>
              <p className="text-gray-700 leading-relaxed">
                Product availability, specifications, and prices are subject to change without notice. We reserve the right to discontinue products at any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the fullest extent permitted by law:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>AgriScience shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Our total liability shall not exceed the amount you paid for products or services (if applicable)</li>
                <li>We are not responsible for crop failures, losses, or damages resulting from product use</li>
                <li>We do not guarantee specific agricultural results or yields</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Disclaimer of Warranties</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The website and all information are provided "as is" and "as available" without warranties of any kind, either express or implied, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy or completeness of information</li>
                <li>Uninterrupted or error-free operation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify and hold harmless AgriScience, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Your use of the website</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of third parties</li>
                <li>Your misuse of product information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Submissions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you submit any content (reviews, testimonials, feedback, suggestions), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute such content for business purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You represent that:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>You own or have rights to submitted content</li>
                <li>Content does not violate any third-party rights</li>
                <li>Content is accurate and not misleading</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Links to Third-Party Websites</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites for your convenience. We do not endorse or control these external sites and are not responsible for their content, privacy practices, or availability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to terminate or suspend your access to the website immediately, without notice, for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Conduct harmful to AgriScience or other users</li>
                <li>Any other reason at our sole discretion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of Sri Lanka, without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts in Colombo, Sri Lanka.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In the event of any dispute arising from these Terms:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Parties agree to first attempt resolution through good-faith negotiations</li>
                <li>If negotiations fail, parties may pursue mediation before litigation</li>
                <li>Any legal action must be brought within one year of the cause of action</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with our Privacy Policy and any other legal notices, constitute the entire agreement between you and AgriScience regarding use of the website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the modified Terms. We encourage you to review these Terms periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions regarding these Terms and Conditions:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-2"><strong>AgriScience Pvt Ltd</strong></p>
                <p className="text-gray-700 leading-relaxed mb-2">123 Agricultural Avenue, Colombo 00700, Sri Lanka</p>
                <p className="text-gray-700 leading-relaxed mb-2">Email: <a href="mailto:legal@agriscience.com" className="text-primary-600 underline">legal@agriscience.com</a></p>
                <p className="text-gray-700 leading-relaxed mb-2">Phone: <a href="tel:+94112345678" className="text-primary-600 underline">+94 11 234 5678</a></p>
                <p className="text-gray-700 leading-relaxed">Website: <a href="https://www.agriscience.lk" className="text-primary-600 underline">www.agriscience.lk</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

