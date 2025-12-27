import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | AgriScience Internationals',
  description: 'AgriScience Internationals Cookie Policy - Learn about how we use cookies on our website.',
  robots: 'index, follow',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center space-x-2 text-gray-600">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li>/</li>
              <li className="text-gray-900">Cookie Policy</li>
            </ol>
          </nav>

          {/* Page Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-gray-600">Last Updated: January 2025</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember your preferences and provide a better browsing experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Cookie Usage</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use minimal cookies on our website. We do not use cookies for tracking, advertising, or analytics purposes. Here's what we actually use:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Essential Cookies (Admin Only)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use one cookie that is only set when an authorized admin logs into the admin panel:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li><strong>admin_session:</strong> A secure authentication cookie that maintains the admin's login session. This cookie is only created when an authorized administrator logs in and is not used for regular website visitors.</li>
                <li>This cookie expires after 24 hours or when the admin logs out</li>
                <li>Regular website visitors do not receive this cookie</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Local Storage (Not Cookies)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use browser localStorage (which is not a cookie) to remember your cookie consent preference:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li><strong>cookieConsent:</strong> Stores your choice to accept or reject cookies (stored locally on your device, not sent to our servers)</li>
                <li>This is stored in your browser's local storage, not as a cookie</li>
                <li>It only remembers your preference so we don't show the cookie consent banner repeatedly</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies We Do NOT Use</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To be clear, we do not use:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li><strong>Analytics Cookies:</strong> We do not use Google Analytics, Facebook Pixel, or any other analytics or tracking tools</li>
                <li><strong>Marketing Cookies:</strong> We do not use cookies for advertising or marketing purposes</li>
                <li><strong>Social Media Cookies:</strong> We do not embed social media tracking pixels or cookies</li>
                <li><strong>Third-Party Tracking:</strong> We do not allow third parties to set cookies on our website</li>
                <li><strong>Behavioral Tracking:</strong> We do not track your browsing behavior or preferences</li>
                <li><strong>Retargeting Cookies:</strong> We do not use cookies to show you targeted advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookie Consent</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you first visit our website, you may see a cookie consent banner. This banner allows you to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Accept all cookies (though we only use the admin session cookie, which you won't receive unless you're an admin)</li>
                <li>Reject non-essential cookies (though we don't have any non-essential cookies)</li>
                <li>Customize your preferences</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Your preference is stored locally in your browser (using localStorage, not cookies) so we remember your choice and don't show the banner repeatedly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Managing Cookies</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Browser Settings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control cookies through your browser settings. Here's how:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies and website data</li>
                <li><strong>Edge:</strong> Settings &gt; Privacy, search, and services &gt; Cookies and site permissions</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Impact of Disabling Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since we use minimal cookies, disabling cookies will have minimal impact:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>You can still browse all pages and view all content</li>
                <li>You can still use the contact form</li>
                <li>The cookie consent banner may appear on each visit (since we can't remember your preference)</li>
                <li>If you are an admin, you may need to log in more frequently</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites (such as social media platforms). These external sites may use their own cookies. We are not responsible for the cookie practices of third-party websites. We encourage you to review their cookie policies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We do not embed third-party tracking scripts, analytics tools, or advertising networks on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy to reflect changes in our practices or legal requirements. The "Last Updated" date indicates the most recent revision. Please review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about our cookie practices:
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

