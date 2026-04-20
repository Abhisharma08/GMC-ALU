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
    title: "Aluminium Screw Skirting Profile",
    price: 575,
    formattedPrice: "₹575/piece",
    currency: "INR",
    availability: "In Stock",
    description: "Aluminium Screw Skirting Profile is a type of skirting board made from aluminium that is designed to be attached to the wall using screws. This profile is popular in both residential and commercial spaces for its durability, sleek look, and ease of installation. Unlike traditional wooden skirting boards that may require nails or adhesives, aluminium screw skirting profiles use screws to secure them, ensuring a strong and long-lasting attachment to the wall.",
    imageUrl: "https://res.cloudinary.com/demfgmwjk/image/upload/v1776541906/aluminium-screw-skirting-profile-1000x1000_q7styx.webp",
    sku: "PF-CHAIR-ERGO-01",
    features: ["50 mm", "75 mm ", "100 mm"],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776541906/aluminium-screw-skirting-profile-1000x1000_q7styx.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776541905/aluminium-screw-skirting-profile-500x500_vipa7x.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776541906/aluminium-screw-skirting-profile-1000x1000_1_gnfr5i.webp"
    ]
  },
  {
    id: "chair-accent-02",
    title: "Aluminium Line Skirting Profile",
    price: 1250,
    formattedPrice: "₹1250/piece",
    currency: "INR",
    availability: "In Stock",
    description: "Aluminium Line Skirting Profile is a sleek, modern type of skirting that is made from aluminium and designed with a linear, minimalist aesthetic. These profiles are used to cover the gap between the floor and the wall, much like traditional skirting, but with a more refined and contemporary look. The line aspect refers to the slim, clean, and straight lines of the profile, which provide a sharp and subtle design that complements modern architectural styles.",
    imageUrl: "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542141/aluminium-line-skirting-profile-1000x1000_1_nrszbs.webp",
    sku: "PF-CHAIR-ACC-02",
    features: [],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542141/aluminium-line-skirting-profile-1000x1000_1_nrszbs.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542141/aluminium-line-skirting-profile-1000x1000_pjnrob.webp",
      
    ]
  },
  {
    id: "chair-dining-03",
    title: "80 mm LED Aluminium Skirting Profile",
    price: 3500,
    formattedPrice: "₹3500/piece",
    currency: "INR",
    availability: "In Stock",
    description: "LED Aluminium Skirting Profiles are specially designed profiles that integrate LED strip lights within the skirting board of a room. These profiles are perfect for creating ambient lighting effects along the floor while offering a sleek, modern aesthetic. They combine the functionality of traditional aluminium skirting with the added benefit of indirect lighting, ideal for both residential and commercial spaces.Dimensions Available: 80 mm",
    imageUrl: "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542356/led-aluminum-skirting-profile-500x500_zfqnwh.webp",
    sku: "PF-CHAIR-DIN-03",
    features: ["Solid Oak Wood Frame", "Hand-Woven Rope Seat", "Eco-Friendly Material"],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542356/led-aluminum-skirting-profile-500x500_zfqnwh.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542356/led-aluminum-skirting-profile-1000x1000_lgkobn.webp",
     ]
  },
   {
    id: "chair-dining-04",
    title: "Aluminium Stick on Skirting Profiles",
    price: 600,
    formattedPrice: "₹600/piece",
    currency: "INR",
    availability: "In Stock",
    description: "Aluminium Skirting Profiles are decorative and functional profiles made from aluminium, used to cover the joint between the wall and the floor in buildings. These profiles offer a sleek and modern alternative to traditional wooden skirting, providing a clean, low-maintenance solution. Aluminium skirting profiles are commonly used in both residential and commercial properties, offering durability, resistance to corrosion, and a contemporary look Dimensions Available: 60 mm 80 mm ",
    imageUrl: "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542595/aluminium-skirting-profiles-500x500_xjyl3l.webp",
    sku: "PF-CHAIR-DIN-03",
    features: ["Solid Oak Wood Frame", "Hand-Woven Rope Seat", "Eco-Friendly Material"],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542595/aluminium-skirting-profiles-500x500_xjyl3l.webp",
      
    ]
  },
    {
    id: "chair-dining-05",
    title: "LED Aluminium Skirting Profile",
    price: 3500,
    formattedPrice: "₹3500/piece",
    currency: "INR",
    availability: "In Stock",
    description: "LED Aluminium Skirting Profiles are specially designed profiles that integrate LED strip lights within the skirting board of a room. These profiles are perfect for creating ambient lighting effects along the floor while offering a sleek, modern aesthetic. They combine the functionality of traditional aluminium skirting with the added benefit of indirect lighting, ideal for both residential and commercial spaces Dimensions Available: 80 MM",
    imageUrl: "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542761/100mm-led-aluminum-skirting-profile-500x500_pny9ue.webp",
    sku: "PF-CHAIR-DIN-03",
    features: [],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542761/100mm-led-aluminum-skirting-profile-500x500_pny9ue.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542760/100mm-led-aluminum-skirting-profile-1000x1000_ncha85.webp",
      ]
  },
    {
    id: "chair-dining-06",
    title: "75 Mm Aluminium Screw on Skirting Profile",
    price: 475,
    formattedPrice: "₹475/piece",
    currency: "INR",
    availability: "In Stock",
    description: "A 75 mm Aluminium Skirting Profile is a premium finishing solution designed to cover the gap between the floor and wall while enhancing the overall interior appearance. Made from high-quality aluminium, this skirting profile offers excellent durability, strength, and resistance to moisture, corrosion, and impact. It is widely used in residential, commercial, and hospitality spaces such as homes, offices, hotels, malls, and showrooms.The 75 mm height provides a bold and modern look, effectively hiding wiring, expansion gaps, and uneven edges. Key features include a sleek contemporary design, easy installation, low maintenance, and long service life. Aluminium skirting profiles are available in various finishes such as anodized, powder-coated, and brushed, making them an ideal choice for stylish, clean, and long-lasting interior finishing.",
    imageUrl: "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543044/75-mm-aluminium-skirting-profile-500x500_avfzgg.webp",
    sku: "PF-CHAIR-DIN-03",
    features: ["Solid Oak Wood Frame", "Hand-Woven Rope Seat", "Eco-Friendly Material"],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543044/75-mm-aluminium-skirting-profile-500x500_avfzgg.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543044/75-mm-aluminium-skirting-profile-1000x1000_jnfewh.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543043/75-mm-aluminium-skirting-profile-1000x1000_1_qbmrak.webp"
    ]
  },
    {
    id: "chair-dining-07",
    title: "50MM Aluminum Screw on Skirting Profile",
    price: 375,
    formattedPrice: "₹375/piece",
    currency: "INR",
    availability: "In Stock",
    description: "Crafted from high-grade aluminium alloy, the 80 mm skirting profile boasts superior hardness, a silver hue, and a smooth finish. Its precise construction ",
    imageUrl: "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543249/aluminium-skirting-1000x1000_eelq3v.webp",
    sku: "PF-CHAIR-DIN-03",
    features: [],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543249/aluminium-skirting-1000x1000_eelq3v.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543248/high-end-aluminum-skirting-profile-1000x1000_1_jqab8k.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543332/high-end-aluminum-skirting-profile-1000x1000_3_ygt6pc.webp"
    ]
  },
    {
    id: "chair-dining-08",
    title: "80MM Aluminium Stick on Skritng",
    price: 700,
    formattedPrice: "₹700/piece",
    currency: "INR",
    availability: "In Stock",
    description: "Aluminium Skirting Profiles are decorative and functional profiles made from aluminium, used to cover the joint between the wall and the floor in buildings. These profiles offer a sleek and modern alternative to traditional wooden skirting, providing a clean, low-maintenance solution. Aluminium skirting profiles are commonly used in both residential and commercial properties, offering durability, resistance to corrosion, and a contemporary look Dimensions Available: 80 mm ",
    imageUrl: "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543406/80mm-aluminium-stick-on-skritng-1000x1000_2_tseqcs.webp",
    sku: "PF-CHAIR-DIN-03",
    features: ["Solid Oak Wood Frame", "Hand-Woven Rope Seat", "Eco-Friendly Material"],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543406/80mm-aluminium-stick-on-skritng-1000x1000_2_tseqcs.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543406/80mm-aluminium-stick-on-skritng-1000x1000_1_nzsb4h.webp",
      
    ]
  },
   {
  id: "chair-dining-09",
  title: "Aluminium LED Profile",
  price: 3500,
  formattedPrice: "₹3500/piece",
  currency: "INR",
  availability: "In Stock",

  description: `An Aluminium LED Profile is a sleek and functional housing designed to install and protect LED strip lights while enhancing their appearance and performance. Made from high-quality aluminium, these profiles provide excellent heat dissipation, which increases the lifespan and efficiency of LED strips. Aluminium LED profiles are widely used in residential, commercial, and architectural lighting applications such as false ceilings, cabinets, wardrobes, staircases, display units, offices, hotels, and retail spaces.

Key features include a modern slim design, durability, corrosion resistance, and easy installation. They are available in surface-mounted, recessed, and suspended types with options of clear, frosted, or opal diffusers for uniform and glare-free lighting. Aluminium LED profiles improve lighting aesthetics, ensure safety, and deliver a clean, professional finish to any interior or exterior space.`,

  imageUrl: "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543537/aluminium-led-profile-1000x1000_rcjxms.webp",
  sku: "PF-CHAIR-DIN-03",
  features: ["Solid Oak Wood Frame", "Hand-Woven Rope Seat", "Eco-Friendly Material"],
  gallery: [
    "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543537/aluminium-led-profile-1000x1000_rcjxms.webp",
    "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543536/aluminium-led-profile-1000x1000_1_ye5fho.webp",
  ]
},
  
  
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}
