"use client";

import { useState } from "react";
import Link from "next/link";
import { destinations } from "@/content/destinations";
import { experiences } from "@/content/experiences";
import { stays } from "@/content/stays";
import { WorldLoader } from "@/components/world/WorldLoader";
import { cx } from "@/lib/utils";

export function IslandScene() {
  const [active, setActive] = useState(destinations[0].slug);
  const current = destinations.find((item) => item.slug === active) ?? destinations[0];
  const relatedStays = stays.filter((item) => current.stays.includes(item.slug));
  const relatedExperiences = experiences
    .filter((item) => current.experiences.includes(item.slug))
    .slice(0, 4);

  const moveSelection = (direction: number) => {
    const index = destinations.findIndex((item) => item.slug === active);
    const next = (index + direction + destinations.length) % destinations.length;
    setActive(destinations[next].slug);
  };

  return (
    <div className="grid min-h-[88vh] bg-ink lg:grid-cols-[1.45fr_0.8fr]">
      <div className="relative h-[68vh] overflow-hidden bg-[#06110f] lg:h-auto">
        <WorldLoader
          variant="explorer"
          activeSlug={active}
          onSelect={setActive}
          className="absolute inset-0"
          fallbackImage={current.image}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/65 to-transparent" />
        <div
          className="absolute left-4 right-4 top-20 flex gap-2 overflow-x-auto pb-3 no-scrollbar md:left-8 md:right-8"
          role="tablist"
          aria-label="Destinations in the 3D world"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") moveSelection(1);
            if (event.key === "ArrowLeft") moveSelection(-1);
          }}
        >
          {destinations.map((dest) => (
            <button
              key={dest.slug}
              type="button"
              role="tab"
              aria-selected={active === dest.slug}
              tabIndex={active === dest.slug ? 0 : -1}
              onClick={() => setActive(dest.slug)}
              className={cx(
                "shrink-0 rounded-full border px-3 py-1.5 text-[9px] tracking-[0.18em] uppercase backdrop-blur-md transition-colors",
                active === dest.slug
                  ? "border-gold bg-gold text-ink"
                  : "border-ivory/20 bg-ink/35 text-ivory/70 hover:border-gold",
              )}
            >
              {dest.name}
            </button>
          ))}
        </div>
        <div className="pointer-events-none absolute bottom-4 left-4 flex gap-5 text-[9px] tracking-[0.22em] uppercase text-ivory/45 md:left-8">
          <span>Drag to orbit</span>
          <span>Pinch to zoom</span>
          <span className="hidden md:inline">Gold · destination</span>
        </div>
      </div>
      <aside
        className="relative overflow-y-auto bg-ink p-8 pt-24 text-ivory md:p-10 md:pt-24"
        aria-live="polite"
      >
        <p className="eyebrow">{current.regionLabel}</p>
        <h2 className="mt-4 font-display text-5xl lg:text-6xl">{current.name}</h2>
        <p className="mt-4 leading-8 text-ivory/65">{current.story}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {current.highlights.map((line) => (
            <li
              key={line}
              className="rounded-full border border-gold/20 px-3 py-1 text-xs text-gold"
            >
              {line}
            </li>
          ))}
        </ul>

        {relatedStays.length > 0 && (
          <div className="mt-8 border-t border-ivory/10 pt-6">
            <p className="text-[9px] tracking-[0.22em] uppercase text-ivory/40">
              Stay markers
            </p>
            {relatedStays.map((stay) => (
              <Link
                key={stay.slug}
                href={`/stays/${stay.slug}`}
                className="mt-3 block font-display text-xl text-gold-soft hover:text-gold"
              >
                {stay.name}
              </Link>
            ))}
          </div>
        )}

        {relatedExperiences.length > 0 && (
          <div className="mt-7 border-t border-ivory/10 pt-6">
            <p className="text-[9px] tracking-[0.22em] uppercase text-ivory/40">
              Experience markers
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ivory/62">
              {relatedExperiences.map((experience) => (
                <li key={experience.slug}>
                  <Link href={`/experiences/${experience.slug}`}>
                    {experience.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          href={`/destinations/${current.slug}`}
          className="mt-8 inline-block text-[11px] tracking-[0.28em] uppercase text-gold"
        >
          Open destination →
        </Link>
      </aside>
    </div>
  );
}
