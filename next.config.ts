import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/home",
  
  // For static export, we need to ensure images work
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Ensure trailing slash for static hosting
  trailingSlash: true,
  
  // Fix turbopack root warning
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
