export const metadata = {
  title: "Shipping Policy | Paradise Furniture",
  description: "Shipping and delivery guidelines for Paradise Furniture.",
};

export default function ShippingPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Shipping Policy</h1>
      
      <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
        <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
        
        <p>
          At Paradise Furniture, we ensure your premium items are carefully transported and delivered safely to your location. Please review our shipping practices below.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Order Processing Time</h2>
        <p>
          All standard non-custom orders are processed and prepared for dispatch within <strong>1 to 3 business days</strong> (excluding weekends and public holidays) after receiving your order confirmation email. You will receive a notification and coordination call when your order has historically shipped.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Shipping Rates and Delivery Estimates</h2>
        <p>
          Shipping charges for your order will be calculated and displayed during your final invoice coordination, based on volumetric weight and transit distance.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Standard Local Delivery (Karnataka region):</strong> 2 to 5 business days.</li>
          <li><strong>National Freight Delivery (Rest of India):</strong> 5 to 10 business days.</li>
        </ul>
        <p>
          *Please note that occasional delays may happen due to heavy volumetric freight logistics. We will keep you updated.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Local Pickup / Offline Payment</h2>
        <p>
          If you have coordinated an offline payment or cash-on-delivery, our dispatch team will establish a firm delivery window with you directly prior to sending the freight vehicle.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Shipping Restrictions</h2>
        <p>
          Currently, we only ship to addresses within India. We cannot ship to P.O. boxes due to the physical size of our furniture.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Damages During Shipping</h2>
        <p>
          We are liable for the items until they are delivered to your threshold. Please inspect all packages upon arrival. If the package appears severely damaged, please reject the delivery and contact us immediately.
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Information</h2>
        <p>
          If you have any questions regarding your shipment, please reach out: <br/>
          <strong>Email:</strong> shipping@paradisefurniture.com<br/>
          <strong>Phone:</strong> +91 98765 43210
        </p>
      </div>
    </div>
  );
}
