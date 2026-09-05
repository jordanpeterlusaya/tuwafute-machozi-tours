"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/brand/Logo";
import { TourCartHeaderButton } from "@/components/booking/TourCart";
import { brand, nav, secondaryNav } from "@/content/brand";
import { cx } from "@/lib/utils";

export function Header() {
  const menuButton = useRef<HTMLButtonElement>(null);
  const menuPanel = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const frame = window.requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;

    const focusable = () =>
      Array.from(
        menuPanel.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
    const first = focusable()[0];
    window.requestAnimationFrame(() => first?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (!items.length) return;
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open ? "bg-ink/88 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="flex items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" aria-label={brand.name} onClick={() => setOpen(false)}>
          <Logo inverted compact />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] tracking-[0.22em] uppercase text-ivory/78 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <TourCartHeaderButton />
          <Link
            href="/enquire"
            className="hidden text-[11px] tracking-[0.28em] uppercase text-gold md:inline-flex"
          >
            Enquire
          </Link>
          <button
            ref={menuButton}
            type="button"
            className="relative h-10 w-10 text-ivory"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={cx(
                "absolute left-2 right-2 h-px bg-current transition-transform",
                open ? "top-5 rotate-45" : "top-3.5",
              )}
            />
            <span
              className={cx(
                "absolute left-2 right-2 top-5 h-px bg-current transition-opacity",
                open && "opacity-0",
              )}
            />
            <span
              className={cx(
                "absolute left-2 right-2 h-px bg-current transition-transform",
                open ? "top-5 -rotate-45" : "top-[26px]",
              )}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={menuPanel}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[68px] z-40 bg-ink"
          >
            <div className="grain" />
            <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-[1.2fr_1fr] md:px-10">
              <div className="flex flex-col gap-5">
                {[...nav, { href: "/about", label: "The House" }, { href: "/enquire", label: "Enquire" }].map(
                  (item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.05 * index, duration: 0.5 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="font-display text-4xl text-ivory transition-colors hover:text-gold md:text-6xl"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ),
                )}
              </div>
              <div className="flex flex-col justify-end gap-4 border-t border-gold/20 pt-8 md:border-l md:border-t-0 md:pl-12 md:pt-0">
                <p className="eyebrow">The atelier</p>
                {secondaryNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-wide text-ivory/70 hover:text-gold"
                  >
                    {item.label}
                  </Link>
                ))}
                <p className="mt-8 max-w-xs text-sm leading-7 text-ivory/50">{brand.tagline}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
