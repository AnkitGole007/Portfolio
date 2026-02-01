import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ai-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ai-portfolio/' : '',
  trailingSlash: true,
};

export default nextConfig;
