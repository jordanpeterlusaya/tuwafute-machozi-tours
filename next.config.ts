import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [65, 75, 80],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600],
  },
  async redirects() {
    return [
      { source: "/destinations/nungwi", destination: "/destinations/nungwi-beach", permanent: true },
      { source: "/destinations/kendwa", destination: "/destinations/kendwa-sunset", permanent: true },
      { source: "/destinations/paje", destination: "/destinations/paje-beach", permanent: true },
      { source: "/destinations/jambiani", destination: "/destinations/jambiani-village", permanent: true },
      { source: "/destinations/kizimkazi", destination: "/destinations/kizimkazi-dolphin", permanent: true },
      { source: "/stays/north-coast-beach-stay", destination: "/stays/four-star", permanent: true },
      { source: "/stays/south-coast-private-stay", destination: "/stays/five-star", permanent: true },
      { source: "/stays/stone-town-heritage-stay", destination: "/stays/three-star", permanent: true },
      { source: "/stays/east-coast-boutique-stay", destination: "/stays/two-star", permanent: true },
    ];
  },
};

export default nextConfig;
