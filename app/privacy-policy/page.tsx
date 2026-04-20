export const metadata = {
  title: "Privacy Policy | Alu Empire",
  description: "How Alu Empire handles your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-gray-700 min-h-screen"> {/* ✅ white bg */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
        
        <h1 className="text-4xl font-extrabold text-black mb-8">
          Privacy Policy
        </h1>

        <div
          className="prose prose-lg max-w-none space-y-6 
                     prose-headings:text-black 
                     prose-p:text-gray-700
                     prose-strong:text-black
                     prose-li:text-gray-700
                     prose-a:text-orange-500"
        >

          <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

          <p>
            Please read these terms and conditions carefully before using Our Service.
          </p>

          {/* Interpretation */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Interpretation</h2>
          <p>
            The words of which the initial letter is capitalized have meanings defined under the following conditions. 
            The following definitions shall have the same meaning regardless of whether they appear in singular or plural.
          </p>

          {/* Definitions */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Definitions</h2>

          <p><strong>Affiliate:</strong> means an entity that controls, is controlled by or is under common control with a party.</p>
          <p><strong>Country:</strong> Haryana, India</p>
          <p><strong>Company:</strong> Alu Empire</p>
          <p><strong>Device:</strong> Any device such as computer, mobile or tablet.</p>
          <p><strong>Service:</strong> Website</p>
          <p><strong>Terms and Conditions:</strong> Agreement between you and the Company.</p>
          <p><strong>Website:</strong> https://www.aluempire.com/</p>

          {/* Acknowledgment */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Acknowledgment</h2>

          <p>
            These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.
          </p>

          <p>
            By accessing or using the Service You agree to be bound by these Terms and Conditions.
          </p>

          <p>
            You must be at least 18 years old to use this Service.
          </p>

          <p>
            Your use of the Service is also subject to the Privacy Policy.
          </p>

          {/* Links */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Links to Other Websites</h2>

          <p>
            Our Service may contain links to third-party websites that are not owned or controlled by the Company.
          </p>

          <p>
            The Company has no control over third-party websites and assumes no responsibility for them.
          </p>

          {/* Termination */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Termination</h2>

          <p>
            We may terminate or suspend Your access immediately without prior notice if You breach these Terms.
          </p>

          {/* Liability */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Limitation of Liability</h2>

          <p>
            The total liability shall be limited to the amount paid by You or $100 if no purchase was made.
          </p>

          <p>
            We are not liable for indirect damages such as loss of profits, data, or business interruption.
          </p>

          <p>
            We do not guarantee uninterrupted or error-free service.
          </p>

          {/* Governing Law */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Governing Law</h2>

          <p>
            These Terms are governed by the laws of Haryana, India.
          </p>

          {/* Disputes */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Disputes Resolution</h2>

          <p>
            Any disputes should first be resolved informally by contacting the Company.
          </p>

          {/* Translation */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Translation Interpretation</h2>

          <p>
            In case of translation, the English version shall prevail.
          </p>

          {/* Changes */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Changes to These Terms</h2>

          <p>
            We may update these Terms at any time. Continued use means acceptance of updated terms.
          </p>

          {/* Contact */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>

          <p>
            If you have any questions, contact us:
            <br />
            <strong>Email:</strong> 
            <span className="text-orange-500"> info@aluempire.com</span>
          </p>

        </div>
      </div>
    </div>
  );
}