import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms and Conditions | AgriScience Internationals',
  description: 'AgriScience Internationals Terms and Conditions - Read our terms of service and usage policies.',
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
            <p className="text-gray-600">Last Updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms and Conditions ("Terms") govern your use of the AgriScience Internationals (pvt) LTD website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree, please discontinue use immediately.
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
                <li>Viewing product details and descriptions</li>
                <li>Contacting us for business inquiries through our contact form</li>
                <li>Accessing information about our company and services</li>
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
                All content on this website, including text, graphics, logos, images, product descriptions, and software, is the property of AgriScience Internationals (pvt) LTD or its licensors and is protected by copyright, trademark, and other intellectual property laws.
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
                <li>AgriScience Internationals (pvt) LTD shall not be liable for any indirect, incidental, special, consequential, or punitive damages</li>
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
                You agree to indemnify and hold harmless AgriScience Internationals (pvt) LTD, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Your use of the website</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of third parties</li>
                <li>Your misuse of product information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Form Submissions</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you submit a message through our contact form:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Your message is sent directly to our email address and is not stored on our website</li>
                <li>We use your information only to respond to your inquiry</li>
                <li>We do not add you to mailing lists or marketing databases</li>
                <li>You represent that your message is accurate, lawful, and does not violate any third-party rights</li>
                <li>You agree not to send threatening, abusive, harassing, or illegal content</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We do not collect, store, or process user submissions beyond receiving your email message. There is no user account system, registration, or data storage for website visitors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Prohibited Use of Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our contact information, including email addresses, phone numbers, and physical addresses, are provided solely for legitimate business inquiries and customer service purposes. The following uses are strictly prohibited:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Illegal Activities</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are strictly prohibited from using our contact information for any illegal activities, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Fraud, scams, or financial crimes</li>
                <li>Identity theft or impersonation</li>
                <li>Unauthorized access to systems or data</li>
                <li>Distribution of malware, viruses, or harmful software</li>
                <li>Violation of any local, national, or international laws</li>
                <li>Any activity that constitutes a criminal offense</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Harassment and Abuse</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are strictly prohibited from using our contact information to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Send threatening, abusive, or offensive messages</li>
                <li>Engage in harassment, intimidation, or bullying</li>
                <li>Attempt blackmail, extortion, or coercion</li>
                <li>Send defamatory, libelous, or slanderous content</li>
                <li>Transmit hate speech, discriminatory content, or content that incites violence</li>
                <li>Send unsolicited commercial messages (spam) unrelated to our business</li>
                <li>Impersonate our company, employees, or representatives</li>
                <li>Use contact information to harm our reputation or business interests</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Legal Consequences</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Violation of these prohibitions will result in immediate legal action, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li><strong>Criminal Prosecution:</strong> We will report all illegal activities to relevant law enforcement agencies, including the Sri Lanka Police, Cyber Crime Division, and international authorities where applicable</li>
                <li><strong>Civil Legal Action:</strong> We reserve the right to pursue civil litigation for damages, including compensation for business losses, reputation damage, and legal costs</li>
                <li><strong>Restraining Orders:</strong> We may seek court orders to prevent further contact or harassment</li>
                <li><strong>Data Protection Complaints:</strong> Violations will be reported to data protection authorities under applicable privacy laws</li>
                <li><strong>Blocking and Filtering:</strong> We will implement technical measures to block and filter prohibited communications</li>
                <li><strong>Public Disclosure:</strong> We may publicly disclose information about threats, harassment, or illegal activities to protect our business and warn others</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Reporting and Cooperation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We actively monitor and log all communications for security and legal purposes. We will:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Preserve all evidence of prohibited activities</li>
                <li>Cooperate fully with law enforcement investigations</li>
                <li>Provide witness statements and documentation as required</li>
                <li>Pursue maximum penalties under applicable laws</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                By contacting us through any channel, you acknowledge that you have read and understood these prohibitions and agree to use our contact information only for legitimate business purposes.
              </p>
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
                <li>Conduct harmful to AgriScience Internationals (pvt) LTD or other users</li>
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
                These Terms, together with our Privacy Policy and any other legal notices, constitute the entire agreement between you and AgriScience Internationals (pvt) LTD regarding use of the website.
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

