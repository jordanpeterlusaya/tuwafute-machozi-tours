"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { WorldLoader } from "@/components/world/WorldLoader";
import { BrandMorph } from "@/components/brand/BrandMorph";
import { cx } from "@/lib/utils";

const chapters = [
  {
    eyebrow: "Ocean",
    title: "The island rises from the Indian Ocean.",
    copy: "A coastline drawn by tide, dhow and coral light.",
  },
  {
    eyebrow: "Experience",
    title: "Follow the gold points, not the crowds.",
    copy: "Every marker is a real chapter — village, reef, forest or open sandbank.",
  },
  {
    eyebrow: "Impact",
    title: "The tear becomes a horizon.",
    copy: "Beauty opens the journey. Attention decides what it leaves behind.",
  },
] as const;

export function ScrollStory() {
  const root = useRef<HTMLElement>(null);
  const [chapter, setChapter] = useState(0);
  const [progress, setProgress] = useState(0);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
          onUpdate: (self) => {
            setProgress(self.progress);
            setChapter(Math.min(2, Math.floor(self.progress * 3)));
          },
        });
      });
      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative h-[280vh] bg-ink text-ivory">
      <div className="sticky top-0 h-[100svh] min-h-[680px] overflow-hidden">
        <WorldLoader
          variant="hero"
          progress={0.15 + progress * 0.85}
          className="absolute inset-0"
          fallbackImage="/images/hero-resort.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/62 to-transparent" />
        <div className="grain" />

        <div className="relative z-10 flex h-full max-w-7xl items-center px-5 md:px-10 lg:px-16">
          <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div className="relative min-h-[360px]">
              {chapters.map((item, index) => (
                <div
                  key={item.title}
                  className={cx(
                    "absolute inset-0 flex max-w-2xl flex-col justify-center transition-all duration-700",
                    chapter === index
                      ? "translate-y-0 opacity-100"
                      : index < chapter
                        ? "-translate-y-10 opacity-0"
                        : "translate-y-10 opacity-0",
                  )}
                  aria-hidden={chapter !== index}
                >
                  <p className="eyebrow">{item.eyebrow}</p>
                  <h2 className="mt-5 font-display text-5xl leading-[0.98] md:text-7xl">
                    {item.title}
                  </h2>
                  <p className="mt-6 max-w-lg text-lg leading-8 text-ivory/65">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden justify-end lg:flex">
              <BrandMorph
                active={chapter === 2}
                className="h-72 w-72 opacity-90 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-5 right-5 z-10 md:left-10 md:right-10 lg:left-16 lg:right-16">
          <div className="h-px bg-ivory/15">
            <div
              className="h-px bg-gold transition-[width] duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
          <div className="mt-3 flex justify-between text-[9px] tracking-[0.24em] uppercase text-ivory/40">
            <span>Ocean</span>
            <span>Island</span>
            <span>Impact</span>
          </div>
        </div>
      </div>
    </section>
  );
}
