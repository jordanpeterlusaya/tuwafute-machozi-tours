import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { TrustStrip } from "@/components/brand/TrustStrip";
import { brand, nav, secondaryNav } from "@/content/brand";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <div className="grain" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-10">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-6 max-w-sm font-display text-3xl leading-snug text-ivory/90">
              {brand.tagline}
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-ivory/55">{brand.meaning}</p>
            <p className="mt-6 text-[11px] tracking-[0.28em] uppercase text-gold">{brand.descriptor}</p>
          </div>

          <div>
            <p className="eyebrow mb-5">Journeys</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/70 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">The house</p>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-ivory/70 transition-colors hover:text-gold">
                  The House · Founder
                </Link>
              </li>
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/70 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={brand.instagramUrl} target="_blank" rel="noreferrer" className="text-ivory/70 hover:text-gold">
                  Instagram · @{brand.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <TrustStrip inverted />

        <div className="gold-line mt-16" />
        <div className="mt-8 flex flex-col justify-between gap-4 text-xs tracking-wide text-ivory/40 md:flex-row">
          <p>© 2026 {brand.legalName}. Zanzibar.</p>
          <p>Crafted as a cinematic house of travel — not a catalogue.</p>
        </div>
      </div>
    </footer>
  );
}
