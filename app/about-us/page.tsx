import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Alu Empire",
  description:
    "Learn about Alu Empire, our manufacturing quality, and our commitment to modern aluminium skirting solutions.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-gray-700">
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-[#FF6A13] mb-3">
            About Alu Empire
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Premium Aluminium Skirting for Modern Spaces
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl leading-relaxed">
            Alu Empire delivers durable, design-forward aluminium skirting systems
            for homes, offices, and commercial interiors. We focus on clean
            finishing, long-term protection, and consistent product quality.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Quality Materials
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              We use high-grade aluminium profiles designed for strength,
              corrosion resistance, and long-term performance.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Precision Finish
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Every profile is crafted for neat edge protection and an elegant,
              architectural look across interior spaces.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Customer First
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              From enquiry to delivery, our team supports clients with quick
              guidance, transparent communication, and reliable service.
            </p>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to make premium aluminium skirting accessible to
            builders, designers, and homeowners looking for both function and
            aesthetics. We continuously improve our product range to match modern
            interior trends while maintaining practical durability.
          </p>
        </div>
      </section>
    </div>
  );
}
