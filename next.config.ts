import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "image.tmdb.org"
    ],
  },
};

export default nextConfig;
