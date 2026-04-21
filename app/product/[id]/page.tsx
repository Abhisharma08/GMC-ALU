import { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";
import ProductGallery from "@/components/ProductGallery";
import { getProductById, PRODUCTS } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: `${product.title} | Alu Empire`,
    description: product.description,
  };
}

export default async function ProductLandingPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    image: product.imageUrl,
    description: product.description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: "Alu Empire",
    },
    offers: {
      "@type": "Offer",
      url: `https://www.aluempire.com/product/${id}`,
      priceCurrency: product.currency,
      price: product.price,
      availability:
        product.availability === "In Stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 w-full">
        <div className="lg:grid lg:grid-cols-2 gap-y-8 lg:gap-x-12 xl:gap-x-16 items-start">
          <ProductGallery
            title={product.title}
            gallery={product.gallery}
            availability={product.availability}
          />

          <div className="flex flex-col text-left">
            <div className="mb-4">
              <span className="text-sm font-semibold tracking-wider text-[#FF6A13] uppercase mb-2 block">
                Alu Empire Collection
              </span>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                {product.title}
              </h1>
            </div>

            <div className="flex flex-col items-start sm:flex-row sm:items-end gap-2 sm:gap-3 mb-6">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
                {product.formattedPrice}
              </span>
              <span className="text-sm sm:text-lg text-gray-500 sm:mb-1 font-medium">
                (Taxes Included)
              </span>
            </div>

            <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed max-w-none">
              <p>{product.description}</p>

              {product.features.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-700 font-medium font-sans"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#FF6A13] mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="mt-2 relative z-10">
              <LeadForm productTitle={product.title} />
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center justify-start sm:justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-sm font-semibold text-gray-800">
                <svg
                  className="w-6 h-6 mr-3 text-[#FF6A13]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Premium Finish
              </div>
              <div className="flex items-center justify-start sm:justify-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm text-sm font-semibold text-gray-800">
                <svg
                  className="w-6 h-6 mr-3 text-[#FF6A13]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Fast Dispatch
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
