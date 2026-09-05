"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { brand } from "@/content/brand";

export function CinematicHero() {
  const layer = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 40, damping: 20 });
  const sy = useSpring(y, { stiffness: 40, damping: 20 });
  const videoX = useTransform(sx, [-40, 40], [-16, 16]);
  const videoY = useTransform(sy, [-40, 40], [-12, 12]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (event: MouseEvent) => {
      const nx = (event.clientX / window.innerWidth - 0.5) * 80;
      const ny = (event.clientY / window.innerHeight - 0.5) * 80;
      x.set(nx);
      y.set(ny);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <section className="relative h-[100svh] min-h-[720px] overflow-hidden bg-ink text-ivory">
      <motion.div ref={layer} className="absolute inset-[-6%]" style={{ x: videoX, y: videoY }}>
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-nungwi.jpg"
        >
          <source src="/media/hero-nungwi.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/20 to-ink/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(8,17,15,0.45)_100%)]" />
      <div className="grain" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 md:px-10 md:pb-20 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="eyebrow"
        >
          {brand.descriptor}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-5xl font-display text-5xl leading-[0.92] md:text-7xl lg:text-[8.2rem]"
        >
          Discover.
          <br />
          Experience.
          <br />
          <span className="italic text-gold-soft">Give Back.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="mt-6 max-w-xl text-base leading-8 text-ivory/75 md:text-lg"
        >
          A cinematic house of travel for Zanzibar and the Tanzanian wilderness —
          designed for guests who want beauty with a conscience.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/trip-builder">Compose a journey</Button>
          <Button href="/explorer" variant="ghost">
            Explore in 3D
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-6 right-6 hidden text-[10px] tracking-[0.32em] uppercase text-ivory/45 md:block">
        Scroll to enter the island
      </div>
    </section>
  );
}
