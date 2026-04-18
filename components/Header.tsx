import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dfb0umklg/images/c_scale,w_170,h_42,dpr_1.5/f_auto,q_auto/v1/paradisefurniture.in/wp-content/uploads/elementor/thumbs/cropped-paradise-logo-01-r30y1kxsgerwspiz2nqjfwq8tfpu2etrqeptunsg74/cropped-paradise-logo-01-r30y1kxsgerwspiz2nqjfwq8tfpu2etrqeptunsg74.png?_i=AA"
            alt="Paradise Furniture Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </Link>
        <div className="hidden sm:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-red-700 transition-colors">Collections</Link>
          <Link href="#about" className="hover:text-red-700 transition-colors">About Us</Link>
          <Link href="#contact" className="hover:text-red-700 transition-colors">Contact</Link>
        </div>
      </div>
    </header>
  );
}
