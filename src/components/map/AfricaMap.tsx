"use client";

import Link from "next/link";
import { useState } from "react";
import { destinations } from "@/content/destinations";

export function AfricaMap() {
  const [active, setActive] = useState("nungwi");
  const current = destinations.find((item) => item.slug === active) ?? destinations[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative aspect-[3/4] bg-sand md:aspect-[4/3]">
        <svg
          viewBox="0 0 100 100"
          className="h-full w-full"
          role="img"
          aria-label="Stylized map of Zanzibar"
        >
          <rect width="100" height="100" fill="#e8dccb" />
          <path
            d="M45 4c13 4 25 18 21 32 10 11 18 29 9 46-6 11-18 16-29 9-8-6-6-18-14-27-9-11-3-22-1-33C33 20 35 8 45 4Z"
            fill="#c9b48a"
            stroke="#8e7c59"
            strokeWidth=".5"
          />
          <path
            d="M47 45c5 2 9 2 14 0M50 57c4 2 8 2 13 0M53 70c3 2 6 2 9 0"
            fill="none"
            stroke="#f4ead8"
            strokeWidth=".6"
            opacity=".8"
          />
          <ellipse cx="53" cy="50" rx="31" ry="46" fill="#3ec6b8" opacity="0.1" />
          <text x="43" y="48" className="fill-ink/50" fontSize="3">
            ZANZIBAR
          </text>
        </svg>
        {destinations.map((item) => (
          <button
            key={item.slug}
            type="button"
            aria-label={`Show ${item.name}`}
            aria-pressed={active === item.slug}
            onClick={() => setActive(item.slug)}
            className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 shadow-md transition-all focus-visible:z-10 ${
              active === item.slug
                ? "h-5 w-5 border-ivory bg-gold"
                : "h-3.5 w-3.5 border-sand bg-ink hover:scale-125"
            }`}
            style={{ left: `${item.coords.x}%`, top: `${item.coords.y}%` }}
          />
        ))}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-4 text-[9px] tracking-[0.16em] uppercase text-ink/45">
          <span>North · East · South · West</span>
          <span>Keyboard ready</span>
        </div>
      </div>
      <div>
        <p className="eyebrow">{current.regionLabel}</p>
        <h2 className="mt-3 font-display text-5xl">{current.name}</h2>
        <p className="mt-4 leading-8 text-ink/65">{current.summary}</p>
        <p className="mt-4 flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-gold">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: current.scene.accent }}
          />
          Scene tone
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {destinations.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setActive(item.slug)}
              className={`px-3 py-1 text-[11px] tracking-[0.16em] uppercase ${
                active === item.slug ? "bg-ink text-ivory" : "border border-ink/15"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
        <Link href={`/destinations/${current.slug}`} className="mt-8 inline-block text-[11px] tracking-[0.24em] uppercase text-gold">
          Open {current.name} →
        </Link>
      </div>
    </div>
  );
}
