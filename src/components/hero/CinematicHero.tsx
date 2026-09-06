"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { coastFilms } from "@/content/media";

const heroFilm = coastFilms[2];

export function CinematicHero() {
  const video = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

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
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-ink text-ivory">
      {reduceMotion ? (
        <div className="absolute inset-0 bg-[url('/images/hero-coast.jpg')] bg-cover bg-center" />
      ) : (
        <video
          ref={video}
          className="absolute inset-0 h-full w-full object-cover"
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
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/80" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 md:px-10 md:pb-20 lg:px-16">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl font-display text-5xl leading-[0.94] md:text-7xl lg:text-[7.4rem]"
        >
          Tuwafute Machozi
          <span className="mt-2 block text-3xl tracking-[0.18em] text-gold md:text-4xl lg:text-5xl">
            Tours
          </span>
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-6 max-w-xl text-base text-ivory/80 md:text-lg"
        >
          Private Zanzibar tours — beaches, Stone Town, reef and forest.
        </motion.p>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button href="/experiences">Browse Zanzibar tours</Button>
          <Button href="/about" variant="ghost">
            Meet the founder
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
