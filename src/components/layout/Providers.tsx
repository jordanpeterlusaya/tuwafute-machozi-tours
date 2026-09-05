"use client";

import { TourCartProvider } from "@/components/booking/TourCart";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TourCartProvider>
      <SmoothScroll />
      {children}
    </TourCartProvider>
  );
}
