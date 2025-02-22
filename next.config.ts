import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['a1.espncdn.com'],
  },
  eslint: {
    ignoreDuringBuilds: true, 
  },

};




export default nextConfig;

