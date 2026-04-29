"use client";

import { useState } from "react";
import { Loader2, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LeadForm({ productTitle }: { productTitle: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      quantity: quantity.toString(),
      productTitle,
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry. Please try again.");
      }

      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unexpected error occurred."
      );
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="mb-8 sm:mb-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
        <label
          htmlFor="quantity"
          className="text-lg font-semibold text-gray-900"
        >
          Quantity
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm w-full max-w-[11rem] sm:w-36 h-12">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="flex-1 h-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-12 h-full text-center text-lg font-bold text-gray-900 border-x border-gray-300 outline-none appearance-none m-0 p-0"
            style={{ MozAppearance: "textfield" }}
          />
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="flex-1 h-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-5 sm:p-6 md:p-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Secure Checkout</h3>
        <p className="text-gray-600 mb-6">
        Fill details our team will get back to you
        </p>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name <span className="text-[#FF6A13]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6A13] focus:border-transparent transition-all outline-none"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address <span className="text-[#FF6A13]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6A13] focus:border-transparent transition-all outline-none"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number <span className="text-[#FF6A13]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6A13] focus:border-transparent transition-all outline-none"
              placeholder="+91 90026 90068"
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              City <span className="text-[#FF6A13]">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF6A13] focus:border-transparent transition-all outline-none"
              placeholder="E.g. Faridabad, Delhi, Bengaluru..."
            />
          </div>

          {status === "error" && (
            <div className="p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-[#FF6A13] hover:bg-[#E65A00] text-white font-semibold py-3 px-6 rounded-lg transition-colors flex justify-center items-center h-12 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Submitting...
              </>
            ) : (
              "Place Order"
            )}
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            By submitting this form, you agree to Alu Empire&apos;s Terms of
            Service and Privacy Policy.
          </p>
        </div>
      </div>
    </form>
  );
}
