import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { TrustStrip } from "@/components/brand/TrustStrip";
import { ContactLines } from "@/components/layout/ContactActions";
import { brand, nav, secondaryNav } from "@/content/brand";
import { founder } from "@/content/founder";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-ivory">
      <div className="relative mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-8 max-w-sm font-display text-2xl leading-snug text-ivory/88">
              {brand.tagline}
            </p>
            <div className="quiet-rule mt-8" />
            <div className="mt-8">
              <ContactLines inverted />
            </div>
            <p className="mt-6 text-[11px] tracking-[0.28em] uppercase text-gold">
              {brand.descriptor}
            </p>
          </div>

          <div>
            <p className="eyebrow mb-6">Journeys</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/62 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-6">The house</p>
            <p className="font-display text-3xl leading-tight">{founder.name}</p>
            <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-gold">
              {founder.role}
            </p>
            <ul className="mt-6 space-y-3">
              <li>
                <Link href="/about" className="text-ivory/62 transition-colors hover:text-gold">
                  The House
                </Link>
              </li>
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ivory/62 transition-colors hover:text-gold">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={brand.instagramUrl} target="_blank" rel="noreferrer" className="text-ivory/62 hover:text-gold">
                  Instagram · @{brand.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <TrustStrip inverted />

        <div className="gold-line mt-16" />
        <div className="mt-8 flex flex-col justify-between gap-4 text-xs tracking-wide text-ivory/35 md:flex-row">
          <p>© 2026 {brand.legalName}. Zanzibar.</p>
          <p>A house of travel — not a catalogue.</p>
        </div>
      </div>
    </footer>
  );
}
