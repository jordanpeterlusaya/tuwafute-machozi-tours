"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { coastFilms } from "@/content/media";
import { warmImageBlur } from "@/lib/utils";

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
      <Image
        src={heroFilm.poster}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={80}
        placeholder="blur"
        blurDataURL={warmImageBlur}
        className="object-cover"
      />
      {reduceMotion ? null : (
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-ink/25" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 md:px-10 md:pb-20 lg:px-16">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="eyebrow"
        >
          Zanzibar
        </motion.p>
        <span className="quiet-rule mt-5" />
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-5xl font-display text-6xl leading-[0.9] md:text-8xl lg:text-[8.4rem]"
        >
          Tuwafute Machozi
          <span className="mt-3 block font-sans text-[0.7rem] tracking-[0.48em] text-gold md:text-sm lg:text-base">
            TOURS
          </span>
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-6 max-w-md text-sm leading-7 text-ivory/80 md:text-base"
        >
          Private island tours. Forty percent funds charity in Zanzibar.
        </motion.p>
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Button href="/experiences">Island tours</Button>
          <Button href="/safaris" variant="ghost">
            Safaris
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
