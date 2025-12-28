import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.srilankawildsafari.com',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'limona.lk',
        pathname: '/uploads/**',
      },
    ],
  },
  // Optional: Enable static export for specific pages only
  // This requires deploying to a Node.js server or Vercel
};

export default nextConfig;
