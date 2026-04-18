export const metadata = {
  title: "Return & Refund Policy | Paradise Furniture",
  description: "Our return and refund guidelines.",
};

export default function ReturnPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Return & Refund Policy</h1>
      
      <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <p>
          We want you to be completely satisfied with your premium furniture. Please read our Return and Refund Policy carefully to understand our guidelines for returning items.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Return Window</h2>
        <p>
          You have <strong>14 days</strong> from the date of final delivery to initiate a return on any non-custom furniture items. Items must be securely packed in their original condition (disassembled if initially delivered as such).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Eligibility Conditions</h2>
        <p>
          To be eligible for a return and refund:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>The item must be unused, unblemished, and in the exact condition you received it.</li>
          <li>Original packaging materials should be retained and utilized for the return freight.</li>
          <li><strong>Custom-made or bespoke orders are strictly final sale</strong> and are not eligible for returns or refunds.</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Return Shipping & Restocking Fees</h2>
        <p>
          Unless the product was delivered damaged or with severe manufacturing defects, you will be responsible for covering the return shipping costs. A restocking fee of 15% of the initial purchase price may be applied for heavy freight items.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Refunds</h2>
        <p>
          Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed and a credit will automatically be applied to your original method of payment (or via bank transfer) within 7-10 business days.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Damaged Items</h2>
        <p>
          If your item arrived damaged during transit, please contact us within 48 hours of delivery with photographic evidence so we can arrange an immediate replacement or full refund without restocking penalties.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
        <p>
          To initiate a return, please contact our support desk: <br/>
          <strong>Email:</strong> support@paradisefurniture.com<br/>
          <strong>Phone:</strong> +91 98765 43210
        </p>
      </div>
    </div>
  );
}
