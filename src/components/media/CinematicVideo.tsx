"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function CinematicVideo({
  src,
  poster,
  className,
}: {
  src: string;
  poster: string;
  className?: string;
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
    return <Image src={poster} alt="" fill className={className} priority />;
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
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
