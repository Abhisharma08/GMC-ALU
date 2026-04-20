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

  // ✅ ADDED REDIRECTS (DO NOT REMOVE)
  async redirects() {
    return [
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