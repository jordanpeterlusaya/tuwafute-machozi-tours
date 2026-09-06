import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/destinations/nungwi", destination: "/destinations/nungwi-beach", permanent: true },
      { source: "/destinations/kendwa", destination: "/destinations/kendwa-sunset", permanent: true },
      { source: "/destinations/paje", destination: "/destinations/paje-beach", permanent: true },
      { source: "/destinations/jambiani", destination: "/destinations/jambiani-village", permanent: true },
      { source: "/destinations/kizimkazi", destination: "/destinations/kizimkazi-dolphin", permanent: true },
    ];
  },
};

export default nextConfig;
