"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function CinematicVideo({
  src,
  mobileSrc,
  poster,
  className,
  ariaLabel,
  posterSizes = "100vw",
  preloadPoster = true,
}: {
  src: string;
  mobileSrc?: string;
  poster: string;
  className?: string;
  ariaLabel?: string;
  posterSizes?: string;
  preloadPoster?: boolean;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(query.matches);
    const frame = window.requestAnimationFrame(update);
    query.addEventListener("change", update);
    return () => {
      window.cancelAnimationFrame(frame);
      query.removeEventListener("change", update);
    };
  }, []);

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

  if (reduceMotion) {
    return (
      <Image
        src={poster}
        alt={ariaLabel ?? ""}
        fill
        className={className}
        sizes={posterSizes}
        preload={preloadPoster}
      />
    );
  }

  return (
    <video
      ref={video}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-label={ariaLabel}
    >
      {mobileSrc ? (
        <source src={mobileSrc} type="video/mp4" media="(max-width: 767px)" />
      ) : null}
      <source src={src} type="video/mp4" />
      Your browser does not support HTML video.
    </video>
  );
}
