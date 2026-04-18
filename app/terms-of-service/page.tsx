import React from "next";

export const metadata = {
  title: "Terms of Service | Paradise Furniture",
  description: "Terms and conditions of using Paradise Furniture online services.",
};

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Paradise Furniture website ("Site") or submitting an order through our system, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our site.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Orders and Pricing</h2>
        <p>
          Since we specialize in B2B and dedicated fulfillment, all "orders" placed on this website act as a binding quote request and purchase intent. Payment will be collected offline securely via invoice or upon delivery. We reserve the right to cancel any order if there are logistical constraints or pricing errors. Prices are subject to change without prior notice.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Product Descriptions</h2>
        <p>
          We strive to ensure that our product descriptions, features, and images are as accurate as possible. However, due to the nature of handcrafted premium furniture, slight variations in color, texture, or finish may occur. These variations do not constitute product defects.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitation of Liability</h2>
        <p>
          Paradise Furniture shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our products or services.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Contact Information</h2>
        <p>
          If you have any questions regarding these Terms of Service, please contact us at: <br/>
          <strong>Email:</strong> support@paradisefurniture.com<br/>
          <strong>Phone:</strong> +91 98765 43210
        </p>
      </div>
    </div>
  );
}
