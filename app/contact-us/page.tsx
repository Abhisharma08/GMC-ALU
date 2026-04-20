import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Alu Empire",
  description:
    "Get in touch with Alu Empire for aluminium skirting product enquiries, pricing, and delivery support.",
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-gray-700">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-[#FF6A13] mb-3">
            Contact Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            We Are Here to Help
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Reach out for product details, bulk pricing, installation guidance,
            and order-related support.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Business Contact
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold text-[#FF6A13]">Email:</span>{" "}
                info@aluempire.com
              </p>
              <p>
                <span className="font-semibold text-[#FF6A13]">Phone:</span>{" "}
                +91 9002690068
              </p>
              <p>
                <span className="font-semibold text-[#FF6A13]">Address:</span>{" "}
                Plot No. 10, 2nd Floor, Street No. 2, Pali Road, Bhakri, Near
                Asharam Bapu Ashram, Faridabad, Haryana - 121004
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Working Hours</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Monday - Saturday:</span> 9:00 AM
                - 7:00 PM
              </p>
              <p>
                <span className="font-semibold">Sunday:</span> Closed
              </p>
              <p className="text-sm text-gray-500 pt-2">
                For urgent product enquiries, please call during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
