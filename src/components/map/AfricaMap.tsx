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
        <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="Interactive map of Zanzibar and Tanzania">
          <rect width="100" height="100" fill="#e8dccb" />
          <path d="M8 8h28v70H8Z" fill="#1a322c" opacity="0.12" />
          <text x="12" y="18" className="fill-ink/40" fontSize="3">
            TANZANIA
          </text>
          <ellipse cx="62" cy="48" rx="22" ry="34" fill="#3ec6b8" opacity="0.18" />
          <ellipse cx="62" cy="48" rx="16" ry="28" fill="#c9b48a" />
          <text x="54" y="46" className="fill-ink/50" fontSize="3">
            ZANZIBAR
          </text>
          {destinations.map((item) => (
            <g key={item.slug}>
              <circle
                cx={item.coords.x}
                cy={item.coords.y}
                r={active === item.slug ? 2.2 : 1.4}
                fill={active === item.slug ? "#c9a86a" : "#12201c"}
                className="cursor-pointer"
                onClick={() => setActive(item.slug)}
              />
            </g>
          ))}
        </svg>
      </div>
      <div>
        <p className="eyebrow">{current.regionLabel}</p>
        <h2 className="mt-3 font-display text-5xl">{current.name}</h2>
        <p className="mt-4 leading-8 text-ink/65">{current.summary}</p>
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
