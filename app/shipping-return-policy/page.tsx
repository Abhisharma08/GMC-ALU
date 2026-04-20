export const metadata = {
  title: "Shipping & Return Policy | Alu Empire",
  description: "Shipping, return and refund policy of Alu Empire.",
};

export default function ShippingReturnPolicy() {
  return (
    <div className="bg-white text-gray-700 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
        
        <h1 className="text-4xl font-extrabold text-black mb-6">
          Shipping & Return Policy
        </h1>

        <p className="mb-8 text-gray-600">
          <strong>Effective Date:</strong> 20-04-2026
        </p>

        <div className="prose prose-lg max-w-none space-y-6 
                        prose-headings:text-black 
                        prose-p:text-gray-700 
                        prose-strong:text-black
                        prose-li:text-gray-700
                        prose-a:text-orange-500">

          {/* 1 */}
          <h2>1. Order Processing & Production</h2>
          <ul>
            <li>All orders are processed after:</li>
            <ul>
              <li>Final design approval</li>
              <li>Advance payment confirmation</li>
            </ul>
            <li>As most products are custom-manufactured, production timelines vary:</li>
            <ul>
              <li>Standard orders: 5–10 working days</li>
              <li>Customized projects: 7–21 working days</li>
            </ul>
          </ul>

          {/* 2 */}
          <h2>2. Shipping & Delivery</h2>
          <ul>
            <li>Orders are delivered via:</li>
            <ul>
              <li>Company logistics team, or</li>
              <li>Trusted third-party courier partners</li>
            </ul>
            <li>Estimated delivery timelines:</li>
            <ul>
              <li>Metro cities: 3–7 working days after dispatch</li>
              <li>Non-metro / remote areas: 5–10 working days</li>
            </ul>
            <li>Customers will be informed once the order is dispatched.</li>
          </ul>

          <p><strong>Shipping Charges</strong></p>
          <ul>
            <li>Shipping charges are:</li>
            <ul>
              <li>Included in quotation, or</li>
              <li>Calculated separately and shared before order confirmation</li>
            </ul>
          </ul>

          {/* 3 */}
          <h2>3. Installation (If Applicable)</h2>
          <ul>
            <li>Installation services are scheduled after delivery</li>
            <li>Timelines depend on:</li>
            <ul>
              <li>Site readiness</li>
              <li>Product type</li>
            </ul>
          </ul>

          {/* 4 */}
          <h2>4. Return Policy</h2>

          <h3>4.1 Return Eligibility</h3>
          <p>We accept returns/replacements under the following conditions:</p>
          <ul>
            <li>Product received is damaged during transit</li>
            <li>Product has a manufacturing defect</li>
            <li>Incorrect product delivered (not matching approved specifications)</li>
          </ul>

          <h3>4.2 Return Window</h3>
          <ul>
            <li>Return request must be raised within 48 hours of delivery</li>
          </ul>

          <h3>4.3 Return Requirements</h3>
          <p>To process a return request, customers must provide:</p>
          <ul>
            <li>Order ID</li>
            <li>Description of the issue</li>
            <li>Clear photos/videos showing the problem</li>
          </ul>

          <h3>4.4 Non-Returnable Situations</h3>
          <p>Returns are not accepted in the following cases:</p>
          <ul>
            <li>Change of mind after order confirmation</li>
            <li>Incorrect measurements provided by the customer</li>
            <li>Approved design later rejected after production</li>
            <li>Normal wear and tear or misuse</li>
          </ul>

          {/* 5 */}
          <h2>5. Replacement Policy</h2>
          <ul>
            <li>Eligible products will be:</li>
            <ul>
              <li>Repaired, or</li>
              <li>Replaced (based on technical assessment)</li>
            </ul>
            <li>Replacement timelines depend on:</li>
            <ul>
              <li>Manufacturing schedule</li>
              <li>Product availability</li>
            </ul>
          </ul>

          {/* 6 */}
          <h2>6. Refund Policy</h2>
          <p><strong>Eligible Refund Cases:</strong></p>
          <ul>
            <li>Order cancelled before production starts</li>
            <li>Product cannot be repaired or replaced</li>
            <li>Order cannot be fulfilled by the company</li>
          </ul>

          <p><strong>Refund Timeline:</strong></p>
          <ul>
            <li>Processed within 7–10 business days after approval</li>
          </ul>

          <p><strong>Refund Method:</strong></p>
          <ul>
            <li>Original payment method, or</li>
            <li>Bank transfer (if required)</li>
          </ul>

          {/* 7 */}
          <h2>7. Cancellation Policy</h2>
          <ul>
            <li>Orders can be cancelled before production begins</li>
            <li>Once production starts:</li>
            <ul>
              <li>Cancellation is not allowed</li>
              <li>Advance payment becomes non-refundable</li>
            </ul>
          </ul>

          {/* 8 */}
          <h2>8. Damaged or Incorrect Orders (Consumer Protection Clause)</h2>
          <ul>
            <li>Customers must report issues within 48 hours of delivery</li>
            <li>An unboxing video is strongly recommended for faster resolution</li>
          </ul>

          {/* 9 */}
          <h2>9. Customer Responsibilities</h2>
          <ul>
            <li>Providing accurate measurements</li>
            <li>Ensuring site readiness for installation</li>
            <li>Providing safe and accessible delivery conditions</li>
          </ul>

          {/* 10 */}
          <h2>10. Contact Information</h2>
          <p>For all shipping, return, or refund queries:</p>
          <ul>
            <li>Phone: <span className="text-orange-500">+91 9002690068</span></li>
            <li>Email: <span className="text-orange-500">info@aluempire.com</span></li>
          </ul>

          {/* 11 */}
          <h2>11. Legal Compliance</h2>
          <ul>
            <li>Indian consumer protection guidelines</li>
            <li>Transparency requirements of Google Merchant Center</li>
          </ul>

        </div>
      </div>
    </div>
  );
}