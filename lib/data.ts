export interface Product {
  id: string;
  title: string;
  price: number;
  formattedPrice: string;
  currency: string;
  availability: string;
  description: string;
  imageUrl: string;
  sku: string;
  features: string[];
  gallery: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "chair-ergonomic-01",
    title: "Ergonomic Office Chair - PRO",
    price: 15000,
    formattedPrice: "₹15,000",
    currency: "INR",
    availability: "In Stock",
    description: "Premium ergonomic office chair designed for long hours of comfortable working. Features adjustable lumbar support, 4D armrests, and breathable mesh back.",
    imageUrl: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80",
    sku: "PF-CHAIR-ERGO-01",
    features: ["Adjustable Lumbar Support", "Breathable Mesh Back", "Tilt & Lock Mechanism"],
    gallery: [
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "chair-accent-02",
    title: "Velvet Accent Lounge Chair",
    price: 22000,
    formattedPrice: "₹22,000",
    currency: "INR",
    availability: "In Stock",
    description: "Elegant velvet accent chair perfect for living rooms or boutique office spaces. Deeply padded seat with gold-finished metal legs.",
    imageUrl: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
    sku: "PF-CHAIR-ACC-02",
    features: ["Premium Velvet Fabric", "High-Density Foam Cushioning", "Gold-Finished Metal Legs"],
    gallery: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: "chair-dining-03",
    title: "Nordic Wooden Dining Chair",
    price: 8500,
    formattedPrice: "₹8,500",
    currency: "INR",
    availability: "In Stock",
    description: "Minimalist Scandinavian design dining chair crafted from solid oak wood. Features a gently curved backrest and woven rope seat.",
    imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
    sku: "PF-CHAIR-DIN-03",
    features: ["Solid Oak Wood Frame", "Hand-Woven Rope Seat", "Eco-Friendly Material"],
    gallery: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581539250439-c9668bd6ea3e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}
