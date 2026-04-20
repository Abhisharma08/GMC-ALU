import React from "next";

export const metadata = {
  title: "Terms of Service | Alu Empire",
  description: "Terms and conditions of using Alu Empire online services.",
};

export default function TermsOfService() {
  return (
    <div className="bg-white text-gray-700 min-h-screen"> {/* ✅ white bg */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
        
        <h1 className="text-4xl font-extrabold text-black mb-8">
          Terms of Service
        </h1>

        <div className="prose prose-lg max-w-none space-y-6 
                        prose-headings:text-black 
                        prose-p:text-gray-700 
                        prose-strong:text-black
                        prose-a:text-orange-500">

          <p>
            <strong>Last Updated: {new Date().toLocaleDateString()}</strong>
          </p>

          {/* Acceptance */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using the Alu Empire website ("Site"), you agree to
            comply with and be bound by these Terms and Conditions. If you do not
            agree, please do not use our site.
          </p>

          {/* Interpretation */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            2. Interpretation
          </h2>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. These definitions shall have
            the same meaning regardless of singular or plural.
          </p>

          {/* Definitions */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            3. Definitions
          </h2>

          <p><strong>Affiliate:</strong> Entity under common control (50%+ ownership).</p>
          <p><strong>Country:</strong> Haryana, India</p>
          <p><strong>Company:</strong> Alu Empire</p>
          <p><strong>Device:</strong> Computer, mobile, or tablet.</p>
          <p><strong>Service:</strong> Website</p>
          <p><strong>Website:</strong> https://www.aluempire.com/</p>

          {/* Acknowledgment */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            4. Acknowledgment
          </h2>
          <p>
            These Terms govern the use of the Service and form an agreement between
            you and the Company.
          </p>
          <p>
            By using the Service, you agree to be bound by these Terms.
          </p>
          <p>You must be at least 18 years old to use this Service.</p>

          {/* Links */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            5. Links to Other Websites
          </h2>
          <p>
            Our Service may contain links to third-party websites. We are not
            responsible for their content or policies.
          </p>

          {/* Termination */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            6. Termination
          </h2>
          <p>
            We may terminate or suspend access immediately if you violate these
            Terms.
          </p>

          {/* Liability */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            7. Limitation of Liability
          </h2>
          <p>
            Liability is limited to the amount paid by you or up to $100 if no
            purchase has been made.
          </p>
          <p>
            We are not responsible for indirect or consequential damages including
            loss of data, profits, or business interruption.
          </p>

          {/* Governing Law */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            8. Governing Law
          </h2>
          <p>
            These Terms are governed by the laws of Haryana, India.
          </p>

          {/* Disputes */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            9. Disputes Resolution
          </h2>
          <p>
            Any disputes should first be resolved informally by contacting us.
          </p>

          {/* Translation */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            10. Translation Interpretation
          </h2>
          <p>
            If translated, the English version will prevail in case of dispute.
          </p>

          {/* Changes */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            11. Changes to Terms
          </h2>
          <p>
            We may update these Terms at any time. Continued use means acceptance.
          </p>

          {/* Contact */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-black">
            12. Contact Information
          </h2>
          <p>
            If you have any questions, contact us at:
            <br />
            <strong>Email:</strong> 
            <span className="text-orange-500"> info@aluempire.com</span>
          </p>

        </div>
      </div>
    </div>
  );
}