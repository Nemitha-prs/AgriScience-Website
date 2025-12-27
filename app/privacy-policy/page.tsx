import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | AgriScience Internationals',
  description: 'AgriScience Internationals Privacy Policy - Learn about our privacy practices and data handling.',
  robots: 'index, follow',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li>/</li>
              <li className="text-gray-900">Privacy Policy</li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last Updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                AgriScience Internationals (pvt) LTD (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains our data practices when you visit our website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our website, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access the site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Information We Do NOT Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We want to be transparent: <strong>We do not collect, store, or process any personal information from website visitors.</strong> Our website is designed to provide information about our products and services without requiring any user registration or data collection.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Require user registration or account creation</li>
                <li>Collect names, email addresses, or phone numbers from visitors</li>
                <li>Use analytics or tracking tools to monitor user behavior</li>
                <li>Store browsing history or preferences</li>
                <li>Use cookies for tracking or advertising purposes</li>
                <li>Share or sell any user data (because we don&apos;t collect any)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Form</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you choose to contact us through our contact form:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Your message is sent directly to our email address via a secure email service (Resend)</li>
                <li>We do not store your contact information in any database or file system</li>
                <li>Your information is only used to respond to your inquiry</li>
                <li>We do not add you to any mailing lists or marketing databases</li>
                <li>Your message is handled by our email service provider and may be stored in their system according to their privacy policy</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                The contact form is the only way we receive information from you, and it is sent directly via email without being stored on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Admin Login</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website includes an admin login area for authorized personnel only. This is a single admin account used to manage product information on the website.
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Admin login credentials are stored securely in environment variables (not in the website code)</li>
                <li>When an admin logs in, a secure session cookie is created for authentication purposes</li>
                <li>This cookie is only used to maintain the admin&apos;s login session and is not used to track regular website visitors</li>
                <li>The admin session cookie expires after 24 hours or when the admin logs out</li>
                <li>Regular website visitors are not affected by the admin login system</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies and Local Storage</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website uses minimal cookies and local storage:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li><strong>Cookie Consent Preference:</strong> We use browser localStorage (not cookies) to remember your cookie consent choice. This is stored locally on your device and is not sent to our servers.</li>
                <li><strong>Admin Session Cookie:</strong> Only set when an authorized admin logs in. This cookie is not used for regular visitors.</li>
                <li><strong>No Tracking Cookies:</strong> We do not use Google Analytics, Facebook Pixel, or any other tracking or analytics tools.</li>
                <li><strong>No Marketing Cookies:</strong> We do not use cookies for advertising or marketing purposes.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can control cookies through your browser settings. Disabling cookies will not affect your ability to browse our website, as we do not rely on cookies for core functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Server Logs</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Like most websites, our hosting provider may automatically log certain technical information when you visit our site:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>IP address (for security and technical purposes)</li>
                <li>Browser type and version</li>
                <li>Pages visited</li>
                <li>Date and time of visit</li>
                <li>Referring website (if applicable)</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These logs are standard server logs maintained by our hosting provider for security and technical purposes. We do not actively monitor or analyze these logs, and they are not used to identify individual visitors.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since we do not collect user data, we have no user data to share, sell, or trade. We do not:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Sell or rent personal information to third parties</li>
                <li>Share data with marketing companies</li>
                <li>Use data brokers or analytics services</li>
                <li>Share information with social media platforms for advertising</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                The only exception is if we are required by law, court order, or governmental authority to disclose information. However, since we don&apos;t collect user data, there would be no user data to disclose.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we don&apos;t collect user data, we take security seriously:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Our website uses SSL/TLS encryption for secure data transmission</li>
                <li>Admin login credentials are stored securely in environment variables</li>
                <li>Admin sessions use secure, encrypted tokens</li>
                <li>Our hosting provider implements industry-standard security measures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since we do not collect or store your personal information, there is no personal data to access, correct, or delete. However, if you have contacted us through our contact form and wish to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Request information about any emails we may have received from you</li>
                <li>Ask us to delete any email correspondence</li>
                <li>Have questions about our privacy practices</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Please contact us at <a href="mailto:agriinternationalco@gmail.com" className="text-primary-600 underline">agriinternationalco@gmail.com</a> or <a href="tel:+94773667823" className="text-primary-600 underline">+94 77 366 7823</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites (such as social media platforms). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Protection Against Misuse of Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We take the protection of our contact information and the prevention of misuse seriously. Our contact details (email addresses, phone numbers, and physical addresses) are provided for legitimate business inquiries only.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Prohibited Uses</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The following uses of our contact information are strictly prohibited and will result in legal action:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Use of our contact details for any illegal activities or criminal purposes</li>
                <li>Sending threatening, abusive, harassing, or offensive messages</li>
                <li>Attempting blackmail, extortion, or coercion</li>
                <li>Impersonating our company, employees, or representatives</li>
                <li>Using contact information to harm our reputation or business</li>
                <li>Sending unsolicited spam or commercial messages unrelated to our business</li>
                <li>Any activity that violates applicable laws or regulations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Monitoring and Enforcement</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We actively monitor all communications and maintain records for security and legal purposes. In the event of misuse:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>All communications are logged and preserved as evidence</li>
                <li>We will report violations to law enforcement agencies, including the Sri Lanka Police and Cyber Crime Division</li>
                <li>We reserve the right to pursue civil and criminal legal action</li>
                <li>We may seek restraining orders and other legal remedies</li>
                <li>Violators may face criminal prosecution and civil liability for damages</li>
                <li>We will cooperate fully with law enforcement investigations</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Your Responsibility</h3>
              <p className="text-gray-700 leading-relaxed">
                When you contact us, you agree to use our contact information only for legitimate business purposes. Any misuse will be treated seriously and may result in immediate legal action, including criminal prosecution and claims for damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website is not intended for individuals under 18 years of age. Since we do not collect personal information, we do not knowingly collect information from children. If you are a parent or guardian and believe your child has contacted us, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting the new policy on this page with an updated &ldquo;Last Updated&rdquo; date. Your continued use of the website after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
