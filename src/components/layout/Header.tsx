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
    const main = document.getElementById("main-content");
    const footer = document.querySelector("footer");
    const whatsapp = document.querySelector<HTMLElement>("[data-whatsapp-cta]");
    if (!open) {
      main?.removeAttribute("inert");
      main?.removeAttribute("aria-hidden");
      footer?.removeAttribute("aria-hidden");
      if (whatsapp) whatsapp.style.visibility = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    main?.setAttribute("aria-hidden", "true");
    footer?.setAttribute("aria-hidden", "true");
    if (whatsapp) whatsapp.style.visibility = "hidden";

    const focusable = () =>
      Array.from(
        menuPanel.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );
    window.requestAnimationFrame(() => focusable()[0]?.focus());

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
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const menu = (
    <AnimatePresence>
      {open && (
        <motion.div
          id="site-navigation-dialog"
          ref={menuPanel}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex h-[100dvh] w-screen flex-col overflow-hidden bg-ink text-ivory"
        >
          <div className="flex h-[calc(4.25rem+env(safe-area-inset-top))] shrink-0 items-center justify-between px-5 pt-[env(safe-area-inset-top)] md:px-8">
            <Link href="/" aria-label={brand.legalName} onClick={() => setOpen(false)}>
              <Logo inverted compact />
            </Link>
            <button
              type="button"
              className="relative h-10 w-10 text-ivory"
              aria-label="Close menu"
              onClick={() => {
                setOpen(false);
                menuButton.current?.focus();
              }}
            >
              <span className="absolute left-2 right-2 top-5 h-px rotate-45 bg-current" />
              <span className="absolute left-2 right-2 top-5 h-px -rotate-45 bg-current" />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-ink">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-[calc(3rem+env(safe-area-inset-bottom))] pt-6 md:grid-cols-[1.2fr_1fr] md:px-10">
              <div className="flex flex-col gap-5">
                {[...nav, { href: "/about", label: "The House" }, { href: "/enquire", label: "Enquire" }].map(
                  (item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ y: 18, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.04 * index, duration: 0.4 }}
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
                <p className="eyebrow">{brand.legalName}</p>
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
                <p className="mt-8 max-w-xs text-sm leading-7 text-ivory/55">
                  Travel with us and 60% of revenue supports charity in Zanzibar.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <header className={cx("fixed inset-x-0 top-0 [--header-height:calc(4.25rem+env(safe-area-inset-top))]", open ? "z-[200]" : "z-50")}>
      <div
        className={cx(
          "relative z-50 flex h-[var(--header-height)] items-center justify-between px-5 pt-[env(safe-area-inset-top)] transition-colors duration-500 md:px-8",
          open || scrolled ? "bg-ink" : "bg-ink/40 backdrop-blur-sm",
        )}
      >
        <Link href="/" aria-label={brand.legalName} onClick={() => setOpen(false)}>
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
            aria-controls="site-navigation-dialog"
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
      {menu}
    </header>
  );
}
