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
    id: "alu-screw-skirting-profile-01",
    title: "Aluminium Screw Skirting Profile",
    price: 575,
    formattedPrice: "₹575/piece",
    currency: "INR",
    availability: "In Stock",
    description:
      "A durable aluminium skirting profile designed for screw-based installation. It creates a secure wall-to-floor finish, offers long-term strength, and delivers a sharp architectural look for residential and commercial interiors.",
    imageUrl:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776541906/aluminium-screw-skirting-profile-1000x1000_q7styx.webp",
    sku: "AE-SSP-01",
    features: ["50 mm profile", "75 mm profile", "100 mm profile"],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776541906/aluminium-screw-skirting-profile-1000x1000_q7styx.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776541905/aluminium-screw-skirting-profile-500x500_vipa7x.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776541906/aluminium-screw-skirting-profile-1000x1000_1_gnfr5i.webp",
    ],
  },
  {
    id: "alu-line-skirting-profile-02",
    title: "Aluminium Line Skirting Profile",
    price: 1250,
    formattedPrice: "₹1250/piece",
    currency: "INR",
    availability: "In Stock",
    description:
      "A sleek linear skirting profile created for contemporary interiors. Its minimalist form keeps edge protection subtle while giving walls and floors a clean, premium transition.",
    imageUrl:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542141/aluminium-line-skirting-profile-1000x1000_1_nrszbs.webp",
    sku: "AE-LSP-02",
    features: [
      "Minimal linear design",
      "Refined aluminium finish",
      "Ideal for modern interiors",
    ],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542141/aluminium-line-skirting-profile-1000x1000_1_nrszbs.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542141/aluminium-line-skirting-profile-1000x1000_pjnrob.webp",
    ],
  },
  {
    id: "alu-led-skirting-profile-80mm-03",
    title: "80 mm LED Aluminium Skirting Profile",
    price: 3500,
    formattedPrice: "₹3500/piece",
    currency: "INR",
    availability: "In Stock",
    description:
      "An 80 mm aluminium skirting profile with an integrated LED channel for ambient floor-line lighting. It combines edge protection with soft illumination, making it a strong fit for premium homes, offices, and hospitality spaces.",
    imageUrl:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542356/led-aluminum-skirting-profile-500x500_zfqnwh.webp",
    sku: "AE-LED-80-03",
    features: [
      "80 mm profile height",
      "Integrated LED channel",
      "Ambient architectural lighting",
    ],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542356/led-aluminum-skirting-profile-500x500_zfqnwh.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542356/led-aluminum-skirting-profile-1000x1000_lgkobn.webp",
    ],
  },
  {
    id: "alu-stick-on-skirting-profile-04",
    title: "Aluminium Stick-On Skirting Profile",
    price: 600,
    formattedPrice: "₹600/piece",
    currency: "INR",
    availability: "In Stock",
    description:
      "A clean, low-maintenance aluminium skirting option designed for stick-on installation. It offers quick fitting, protects exposed wall edges, and suits both residential and commercial projects.",
    imageUrl:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542595/aluminium-skirting-profiles-500x500_xjyl3l.webp",
    sku: "AE-STK-04",
    features: [
      "60 mm option available",
      "80 mm option available",
      "Quick adhesive installation",
    ],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542595/aluminium-skirting-profiles-500x500_xjyl3l.webp",
    ],
  },
  {
    id: "alu-led-skirting-profile-100mm-05",
    title: "100 mm LED Aluminium Skirting Profile",
    price: 3500,
    formattedPrice: "₹3500/piece",
    currency: "INR",
    availability: "In Stock",
    description:
      "A bold LED skirting profile built for premium spaces that need both illumination and strong edge definition. The 100 mm format gives the room a more pronounced finish while supporting concealed lighting.",
    imageUrl:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542761/100mm-led-aluminum-skirting-profile-500x500_pny9ue.webp",
    sku: "AE-LED-100-05",
    features: [
      "100 mm profile height",
      "LED-ready aluminium body",
      "Modern statement finish",
    ],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542761/100mm-led-aluminum-skirting-profile-500x500_pny9ue.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776542760/100mm-led-aluminum-skirting-profile-1000x1000_ncha85.webp",
    ],
  },
  {
    id: "alu-screw-skirting-profile-75mm-06",
    title: "75 mm Aluminium Screw-On Skirting Profile",
    price: 475,
    formattedPrice: "₹475/piece",
    currency: "INR",
    availability: "In Stock",
    description:
      "A 75 mm aluminium skirting profile created for projects that need a secure screw-fixed installation and a more visible architectural edge. It is durable, corrosion-resistant, and suitable for long-term interior use.",
    imageUrl:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543044/75-mm-aluminium-skirting-profile-500x500_avfzgg.webp",
    sku: "AE-SSP-75-06",
    features: [
      "75 mm profile height",
      "Screw-fixed installation",
      "Durable interior finish",
    ],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543044/75-mm-aluminium-skirting-profile-500x500_avfzgg.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543044/75-mm-aluminium-skirting-profile-1000x1000_jnfewh.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543043/75-mm-aluminium-skirting-profile-1000x1000_1_qbmrak.webp",
    ],
  },
  {
    id: "alu-screw-skirting-profile-50mm-07",
    title: "50 mm Aluminium Screw-On Skirting Profile",
    price: 375,
    formattedPrice: "₹375/piece",
    currency: "INR",
    availability: "In Stock",
    description:
      "A slim aluminium screw-on skirting profile for clean edge protection in compact spaces. Its sturdy build, low-maintenance finish, and modern proportions make it well suited to homes, offices, and retail interiors.",
    imageUrl:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543249/aluminium-skirting-1000x1000_eelq3v.webp",
    sku: "AE-SSP-50-07",
    features: [
      "50 mm profile height",
      "Slim contemporary look",
      "Low-maintenance aluminium",
    ],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543249/aluminium-skirting-1000x1000_eelq3v.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543248/high-end-aluminum-skirting-profile-1000x1000_1_jqab8k.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543332/high-end-aluminum-skirting-profile-1000x1000_3_ygt6pc.webp",
    ],
  },
  {
    id: "alu-stick-on-skirting-profile-80mm-08",
    title: "80 mm Aluminium Stick-On Skirting Profile",
    price: 700,
    formattedPrice: "₹700/piece",
    currency: "INR",
    availability: "In Stock",
    description:
      "An 80 mm stick-on aluminium skirting profile that balances quick installation with a strong visual finish. It is designed to create a neat wall-to-floor transition without the need for complex fitting hardware.",
    imageUrl:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543406/80mm-aluminium-stick-on-skritng-1000x1000_2_tseqcs.webp",
    sku: "AE-STK-80-08",
    features: [
      "80 mm profile height",
      "Stick-on installation",
      "Clean architectural edge",
    ],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543406/80mm-aluminium-stick-on-skritng-1000x1000_2_tseqcs.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543406/80mm-aluminium-stick-on-skritng-1000x1000_1_nzsb4h.webp",
    ],
  },
  {
    id: "alu-led-profile-09",
    title: "Aluminium LED Profile",
    price: 3500,
    formattedPrice: "₹3500/piece",
    currency: "INR",
    availability: "In Stock",
    description:
      "A versatile aluminium LED profile built to house and protect strip lighting while improving heat dissipation and finish quality. It is suitable for cabinets, false ceilings, wardrobes, display units, staircases, and modern architectural lighting projects.",
    imageUrl:
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543537/aluminium-led-profile-1000x1000_rcjxms.webp",
    sku: "AE-LP-09",
    features: [
      "Surface and recessed use",
      "Heat-dissipating body",
      "Diffuser-ready lighting profile",
    ],
    gallery: [
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543537/aluminium-led-profile-1000x1000_rcjxms.webp",
      "https://res.cloudinary.com/demfgmwjk/image/upload/v1776543536/aluminium-led-profile-1000x1000_1_ye5fho.webp",
    ],
  },
];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((product) => product.id === id);
}
