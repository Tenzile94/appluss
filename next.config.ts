import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  ExportTrailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
