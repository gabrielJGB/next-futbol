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

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});



export default nextConfig;

module.exports = withPWA({
  reactStrictMode: true,
});
