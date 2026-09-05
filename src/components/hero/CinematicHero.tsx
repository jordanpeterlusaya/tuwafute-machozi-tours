"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Button } from "@/components/ui/Button";
import { brand } from "@/content/brand";
import { coastFilms } from "@/content/media";
import { WorldLoader } from "@/components/world/WorldLoader";

const heroFilm = coastFilms[0];

export function CinematicHero() {
  const layer = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [scrollProgress, setScrollProgress] = useState(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 40, damping: 20 });
  const sy = useSpring(y, { stiffness: 40, damping: 20 });
  const videoX = useTransform(sx, [-40, 40], [-16, 16]);
  const videoY = useTransform(sy, [-40, 40], [-12, 12]);
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setScrollProgress(value);
  });

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

  useEffect(() => {
    if (!video.current || reduceMotion) return;
    const element = video.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void element.play().catch(() => undefined);
      else element.pause();
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [reduceMotion]);

  return (
    <section
      ref={section}
      className="relative h-[100svh] min-h-[560px] overflow-hidden bg-ink text-ivory"
    >
      <motion.div ref={layer} className="absolute inset-[-6%]" style={{ x: videoX, y: videoY }}>
        {reduceMotion ? (
          <div className="h-full w-full bg-[url('/images/hero-nungwi.jpg')] bg-cover bg-center" />
        ) : (
          <video
            ref={video}
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={heroFilm.poster}
            aria-label={heroFilm.title}
          >
            <source
              src={heroFilm.mobileVideo}
              type="video/mp4"
              media="(max-width: 767px)"
            />
            <source src={heroFilm.video} type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        )}
      </motion.div>
      <WorldLoader
        variant="hero"
        progress={scrollProgress}
        className="pointer-events-none absolute inset-0 hidden opacity-70 [mask-image:radial-gradient(circle_at_78%_46%,black_0%,transparent_67%)] md:block"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/20 to-ink/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(8,17,15,0.45)_100%)]" />
      <div className="grain" />

      <motion.div
        className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 md:px-10 md:pb-20 lg:px-16"
        style={{ y: titleY, opacity: titleOpacity }}
      >
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
          A cinematic house of travel for Zanzibar — designed for guests who want
          beauty with a conscience.
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
      </motion.div>

      <div className="absolute bottom-6 right-6 hidden text-[10px] tracking-[0.32em] uppercase text-ivory/45 md:block">
        Scroll to enter the island
      </div>
    </section>
  );
}
