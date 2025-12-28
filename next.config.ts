import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove 'export' to enable dynamic features for admin
  // output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: Enable static export for specific pages only
  // This requires deploying to a Node.js server or Vercel
};

export default nextConfig;
