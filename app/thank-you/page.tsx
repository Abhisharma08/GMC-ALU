import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center justify-center font-sans px-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl border border-gray-100 p-10 md:p-14 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border-2 border-gray-100">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          Your Request Has Been Received
        </h1>

        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Your requirement has been recorded successfully. An Alu Empire team
          member will contact you shortly to confirm product details, delivery,
          and offline payment.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#FF6A13] text-white font-semibold hover:bg-[#E65A00] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
