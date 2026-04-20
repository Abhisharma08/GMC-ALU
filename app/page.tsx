import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
import { ArrowRight, Star } from "lucide-react";

/* ✅ ADD THIS FUNCTION (NEW) */
function truncateText(text: string, wordLimit = 20) {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col font-sans">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/demfgmwjk/image/upload/v1776535704/Modern_brushed_aluminum_skirting_detail_c6maok_mjrrva.jpg"
            alt="Hero Background"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        {/* EXISTING CODE */}
        <div className="absolute inset-x-0 top-0 h-[800px] pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full bg-[#FF6A13]/10 blur-3xl opacity-50" />
          <div className="absolute top-20 -left-20 w-[600px] h-[600px] rounded-full bg-[#FF6A13]/10 blur-3xl opacity-50" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="text-center max-w-3xl mx-auto">
            
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
              Aluminium Skirting{" "}
              <span className="text-[#FF6A13]">Systems</span> for Modern Spaces
            </h1>

            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Sleek, protective skirting solutions — designed to enhance walls while offering durability and a clean architectural finish.
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="#collection"
                className="inline-flex items-center px-8 py-4 rounded-full bg-[#FF6A13] text-white font-semibold hover:bg-[#E65A00] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Collection
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Featured Products Section */}
      <section id="collection" className="scroll-mt-24 py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#FF6A13] mb-4">
                Featured Products
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Browse our most popular selections. Request a custom quote to get the best pricing tailored specifically for your needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-[#FF6A13]/20 flex flex-col"
              >
                
                {/* 🔥 IMAGE FIX (ONLY UPDATED) */}
                <div className="relative h-72 bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-sm">
                    {product.availability}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {product.title}
                  </h3>

                  <div className="flex items-center mb-6">
                    <div className="flex text-[#FF6A13] gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 ml-2">(4.9/5)</span>
                  </div>

                  {/* 🔥 DESCRIPTION FIX (ONLY UPDATED) */}
                  <p className="text-gray-600 text-sm mb-8 flex-1">
                    {truncateText(product.description, 20)}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="text-2xl font-extrabold text-gray-900">
                      {product.formattedPrice}
                    </div>
                    
                    <Link
                      href={`/product/${product.id}`}
                      className="inline-flex items-center justify-center px-5 py-3 sm:px-6 rounded-xl bg-[#FF6A13] text-white font-semibold hover:bg-[#E65A00] transition-all duration-300"
                    >
                      <span className="mr-2">Buy Now</span>
                      <ArrowRight className="w-5 h-5 hidden sm:inline-block" />
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}