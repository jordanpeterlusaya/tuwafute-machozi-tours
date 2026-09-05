"use client";

import dynamic from "next/dynamic";

const PanoramaTour = dynamic(
  () => import("@/components/virtual/PanoramaTour").then((mod) => mod.PanoramaTour),
  { ssr: false, loading: () => <div className="h-[70vh] bg-ink" /> },
);

export function VirtualTour({ src, activeSlug }: { src: string; activeSlug: string }) {
  return <PanoramaTour src={src} activeSlug={activeSlug} />;
}
