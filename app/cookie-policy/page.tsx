import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookie Policy | AgriScience',
  description: 'AgriScience Cookie Policy - Learn about how we use cookies and tracking technologies on our website.',
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
            <p className="text-gray-600">Last Updated: December 23, 2024</p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and understanding how you use our site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Essential Cookies (Required)</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These cookies are necessary for the website to function properly:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Session management and authentication</li>
                <li>Security and fraud prevention</li>
                <li>Load balancing and server allocation</li>
                <li>Remembering items in inquiry basket</li>
                <li>Language and region preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Performance and Analytics Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These help us understand how visitors interact with our website:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Google Analytics (visitor statistics, page views, session duration)</li>
                <li>Heatmap tools (user behavior analysis)</li>
                <li>Error tracking and debugging</li>
                <li>Website performance monitoring</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Functional Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These enhance your experience by remembering your choices:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Display preferences (layout, font size)</li>
                <li>Previously viewed products</li>
                <li>Form auto-fill information</li>
                <li>Newsletter subscription status</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Marketing and Advertising Cookies</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                These track your browsing to provide relevant content:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Retargeting and remarketing campaigns</li>
                <li>Social media integration (Facebook, LinkedIn, Instagram)</li>
                <li>Email campaign effectiveness</li>
                <li>Advertising performance measurement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use third-party services that may set their own cookies:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li><strong>Google Analytics:</strong> Website traffic analysis</li>
                <li><strong>Google Tag Manager:</strong> Tag and script management</li>
                <li><strong>Facebook Pixel:</strong> Social media advertising</li>
                <li><strong>LinkedIn Insight Tag:</strong> Professional network advertising</li>
                <li><strong>YouTube:</strong> Embedded video content</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These third parties have their own privacy policies governing cookie use.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Managing Cookie Preferences</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Browser Settings</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control cookies through your browser settings:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li><strong>Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies</li>
                <li><strong>Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies</li>
                <li><strong>Safari:</strong> Preferences &gt; Privacy &gt; Cookies</li>
                <li><strong>Edge:</strong> Settings &gt; Privacy &gt; Cookies</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cookie Consent</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon your first visit, we display a cookie consent banner allowing you to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Accept all cookies</li>
                <li>Reject non-essential cookies</li>
                <li>Customize your preferences</li>
                <li>Review our Cookie Policy</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                You can change your preferences at any time through the cookie settings link in our footer.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Opt-Out Tools</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li><strong>Google Analytics Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">Google Analytics Opt-out Browser Add-on</a></li>
                <li><strong>Network Advertising Initiative:</strong> <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">NAI Opt-out</a></li>
                <li><strong>Digital Advertising Alliance:</strong> <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline">DAA Opt-out</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Impact of Disabling Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Disabling cookies may affect your website experience:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Some features may not function properly</li>
                <li>You may need to re-enter information repeatedly</li>
                <li>Personalized content and preferences may not be saved</li>
                <li>Website performance may be reduced</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Essential cookies cannot be disabled as they are critical for website operation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookie Duration</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Session Cookies</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Temporary cookies deleted when you close your browser</li>
                <li>Used for navigation and authentication</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Persistent Cookies</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 leading-relaxed space-y-2">
                <li>Remain on your device for a set period or until manually deleted</li>
                <li>Duration ranges from days to years depending on purpose</li>
                <li>Used for preferences and analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy to reflect changes in technology or legal requirements. The "Last Updated" date indicates the most recent revision. Please review this policy periodically.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about our cookie practices:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-2"><strong>AgriScience Pvt Ltd</strong></p>
                <p className="text-gray-700 leading-relaxed mb-2">123 Agricultural Avenue, Colombo 00700, Sri Lanka</p>
                <p className="text-gray-700 leading-relaxed mb-2">Email: <a href="mailto:privacy@agriscience.com" className="text-primary-600 underline">privacy@agriscience.com</a></p>
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

