import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-gray-300 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Contact Us</h4>
            <p className="text-sm mb-2 opacity-80">
              Plot No. 10, 2nd Floor, Street No. 2, Pali Road,
            </p>
            <p className="text-sm mb-2 opacity-80">
              Bhakri, Near Asharam Bapu Ashram,
            </p>
            <p className="text-sm mb-2 opacity-80">Faridabad, Haryana - 121004</p>

            <p className="text-sm mb-2 opacity-80 flex items-center">
              <span className="font-semibold text-orange-500 mr-2">Email:</span>
              <span className="hover:text-orange-500 transition">
                info@aluempire.com
              </span>
            </p>

            <p className="text-sm opacity-80 flex items-center">
              <span className="font-semibold text-orange-500 mr-2">Phone:</span>
              <span className="hover:text-orange-500 transition">
                +91 9002690068
              </span>
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Legal</h4>
            <div className="space-y-2 flex flex-col text-sm opacity-80">
              <Link
                href="/terms-of-service"
                className="hover:text-orange-500 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/shipping-return-policy"
                className="hover:text-orange-500 transition-colors"
              >
                Shipping & Return Policy
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-lg">About Us</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              Alu Empire specializes in aluminium skirting systems, LED
              profiles, and premium interior finishing solutions for
              residential, commercial, and architectural spaces.
            </p>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-sm opacity-60">
          &copy; {new Date().getFullYear()}
          <span className="text-orange-500 font-medium"> Alu Empire</span>. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
