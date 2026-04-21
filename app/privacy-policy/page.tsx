export const metadata = {
  title: "Privacy Policy | Alu Empire",
  description: "How Alu Empire collects, uses, and protects customer data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-700 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
        <h1 className="text-4xl font-extrabold text-black mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 prose-headings:text-black prose-p:text-gray-700 prose-strong:text-black prose-li:text-gray-700 prose-a:text-orange-500">
          <p>
            <strong>Last Updated: 21-04-2026</strong>
          </p>

          <p>
            Alu Empire respects your privacy and is committed to protecting the
            personal information you share with us through this website.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect the following information when you submit an enquiry or place an order request:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>City and delivery-related details</li>
            <li>Product and quantity preferences</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>Your information is used to:</p>
          <ul>
            <li>Respond to product enquiries and order requests</li>
            <li>Coordinate quotations, dispatch, and offline payment follow-up</li>
            <li>Provide customer service and installation-related communication</li>
            <li>Maintain internal sales and fulfilment records</li>
          </ul>

          <h2>3. How Your Information Is Stored</h2>
          <p>
            Enquiry data submitted through the website is processed on the server
            and stored in Alu Empire&apos;s connected Google Workspace spreadsheet
            for internal business use.
          </p>

          <h2>4. Data Sharing</h2>
          <p>
            We do not sell or rent your personal information. We may share it
            only with internal team members, logistics partners, installation
            partners, or service providers when required to fulfil your request.
          </p>

          <h2>5. Cookies and Analytics</h2>
          <p>
            This website may use analytics, cookies, or tracking tools to
            understand traffic, measure conversions, and improve the buying
            experience.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain submitted information only for as long as it is needed for
            enquiry handling, sales coordination, legal compliance, and internal
            business records.
          </p>

          <h2>7. Data Security</h2>
          <p>
            We take reasonable technical and organizational steps to protect your
            information. However, no internet-based transmission or storage
            system can be guaranteed to be completely secure.
          </p>

          <h2>8. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your
            personal information by contacting us directly.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party services or websites. We
            are not responsible for their privacy practices or content.
          </p>

          <h2>10. Policy Updates</h2>
          <p>
            We may update this Privacy Policy from time to time. Continued use of
            the website after changes are published will constitute acceptance of
            the updated policy.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            For privacy-related questions, please contact:
            <br />
            <strong>Email:</strong>{" "}
            <span className="text-orange-500">info@aluempire.com</span>
            <br />
            <strong>Phone:</strong>{" "}
            <span className="text-orange-500">+91 9002690068</span>
          </p>
        </div>
      </div>
    </div>
  );
}
