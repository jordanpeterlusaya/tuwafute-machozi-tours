"use client";

import { SmoothScroll } from "@/components/motion/SmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SmoothScroll />
      {children}
    </>
  );
}
