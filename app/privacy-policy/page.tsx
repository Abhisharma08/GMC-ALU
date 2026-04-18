export const metadata = {
  title: "Privacy Policy | Paradise Furniture",
  description: "How Paradise Furniture handles your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <p>
          At Paradise Furniture, we are fully committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and protect the information you provide to us when using our website and placing orders.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
        <p>
          When you place an order or request a custom quote on our site, we automatically collect personal information you specifically provide, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Contact Data:</strong> Full Name, Email Address, Phone Number.</li>
          <li><strong>Address Data:</strong> City and specific shipping details.</li>
          <li><strong>Usage Data:</strong> We may collect standard analytics data regarding your behavior on the site (IP address, browser type).</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <p>
          We strictly use your information to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Process and fulfill your orders or quote requests.</li>
          <li>Contact you regarding logistics, order coordination, and offline payment.</li>
          <li>Improve our website, user experience, and customer service processes.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Data Sharing and Protection</h2>
        <p>
          We <strong>do not</strong> sell or rent your personal information to third parties. We only share information with trusted fulfillment and logistics partners strictly required for delivering your products. Your data is stored securely in compliant database systems (including encrypted Google Cloud integrations).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Your Privacy Rights</h2>
        <p>
          Depending on your location, you may request to access, update, or delete your personal information by contacting us directly.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Us</h2>
        <p>
          If you have concerns about our privacy practices, please contact our data protection team: <br/>
          <strong>Email:</strong> privacy@paradisefurniture.com<br/>
          <strong>Address:</strong> 123 Design Avenue, Suite 400, Bangalore, Karnataka 560001, India
        </p>
      </div>
    </div>
  );
}
