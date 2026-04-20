import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/demfgmwjk/image/upload/v1776537039/Alu_Empire_Logo-removebg-preview_nrlo91_fslx1w.png"
            alt="alu empire Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>
        <div className="hidden sm:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <Link href="/#collection" className="hover:text-[#FF6A13] transition-colors">Collections</Link>
          <Link href="/about-us" className="hover:text-[#FF6A13] transition-colors">About Us</Link>
          <Link href="/contact-us" className="hover:text-[#FF6A13] transition-colors">Contact</Link>
        </div>
      </div>
    </header>
  );
}
