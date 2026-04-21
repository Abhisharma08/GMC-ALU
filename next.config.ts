import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  async redirects() {
    return [
      // Preserve legacy product URLs after the Alu Empire rebrand.
      {
        source: "/product/chair-ergonomic-01",
        destination: "/product/alu-screw-skirting-profile-01",
        permanent: true,
      },
      {
        source: "/product/chair-accent-02",
        destination: "/product/alu-line-skirting-profile-02",
        permanent: true,
      },
      {
        source: "/product/chair-dining-03",
        destination: "/product/alu-led-skirting-profile-80mm-03",
        permanent: true,
      },
      {
        source: "/product/chair-dining-04",
        destination: "/product/alu-stick-on-skirting-profile-04",
        permanent: true,
      },
      {
        source: "/product/chair-dining-05",
        destination: "/product/alu-led-skirting-profile-100mm-05",
        permanent: true,
      },
      {
        source: "/product/chair-dining-06",
        destination: "/product/alu-screw-skirting-profile-75mm-06",
        permanent: true,
      },
      {
        source: "/product/chair-dining-07",
        destination: "/product/alu-screw-skirting-profile-50mm-07",
        permanent: true,
      },
      {
        source: "/product/chair-dining-08",
        destination: "/product/alu-stick-on-skirting-profile-80mm-08",
        permanent: true,
      },
      {
        source: "/product/chair-dining-09",
        destination: "/product/alu-led-profile-09",
        permanent: true,
      },
      {
        source: "/shipping-policy",
        destination: "/shipping-return-policy",
        permanent: true,
      },
      {
        source: "/return-policy",
        destination: "/shipping-return-policy",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
