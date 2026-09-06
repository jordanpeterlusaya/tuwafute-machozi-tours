"use client";

import Link from "next/link";
import {
  useCallback,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { brand } from "@/content/brand";
import { experiences } from "@/content/experiences";
import { cx, whatsappLink } from "@/lib/utils";

const STORAGE_KEY = "tuwafute-tour-request-v1";
const MAX_TEXT_LENGTH = 600;

type RequestDraft = {
  items: string[];
  partySize: number;
  preferredDate: string;
  pickup: string;
  name: string;
  contact: string;
  notes: string;
};

type StoredRequest = RequestDraft & { version: 1 };

type TourCartContextValue = {
  draft: RequestDraft;
  itemCount: number;
  isOpen: boolean;
  add: (slug: string) => void;
  remove: (slug: string) => void;
  open: () => void;
  close: () => void;
  update: <Key extends keyof RequestDraft>(
    key: Key,
    value: RequestDraft[Key],
  ) => void;
};

const emptyDraft: RequestDraft = {
  items: [],
  partySize: 2,
  preferredDate: "",
  pickup: "",
  name: "",
  contact: "",
  notes: "",
};

const TourCartContext = createContext<TourCartContextValue | null>(null);

function safeText(value: unknown, max = MAX_TEXT_LENGTH) {
  return typeof value === "string" ? value.slice(0, max) : "";
}

function restoreDraft(value: string): RequestDraft | null {
  try {
    const parsed = JSON.parse(value) as Partial<StoredRequest> | null;
    if (!parsed || parsed.version !== 1 || !Array.isArray(parsed.items)) {
      return null;
    }
    const validSlugs = new Set(experiences.map((item) => item.slug));
    const items = Array.from(
      new Set(
        parsed.items.filter(
          (item): item is string =>
            typeof item === "string" && validSlugs.has(item),
        ),
      ),
    ).slice(0, experiences.length);
    const partySize =
      typeof parsed.partySize === "number" && Number.isFinite(parsed.partySize)
        ? Math.min(40, Math.max(1, Math.round(parsed.partySize)))
        : 2;
    const preferredDate = /^\d{4}-\d{2}-\d{2}$/.test(
      safeText(parsed.preferredDate, 10),
    )
      ? safeText(parsed.preferredDate, 10)
      : "";

    return {
      items,
      partySize,
      preferredDate,
      pickup: safeText(parsed.pickup, 120),
      name: safeText(parsed.name, 120),
      contact: safeText(parsed.contact, 160),
      notes: safeText(parsed.notes),
    };
  } catch {
    return null;
  }
}

function requestMessage(draft: RequestDraft) {
  const selected = draft.items
    .map((slug) => experiences.find((item) => item.slug === slug))
    .filter((item) => item !== undefined);
  const lines = selected.map((item, index) => `${index + 1}. ${item.name}`);
  return [
    `Hello ${brand.name} — I would like to request prices and availability for these Zanzibar excursions:`,
    "",
    ...lines,
    "",
    `Party size: ${draft.partySize}`,
    `Preferred date: ${draft.preferredDate}`,
    `Pickup hotel / area: ${draft.pickup}`,
    `Name: ${draft.name}`,
    `Contact: ${draft.contact}`,
    `Notes: ${draft.notes || "None"}`,
    "",
    "I understand this is a booking request, not payment or confirmed availability. Please confirm the details with me.",
  ].join("\n");
}

function useTourCart() {
  const value = useContext(TourCartContext);
  if (!value) {
    throw new Error("Tour cart controls must be used inside TourCartProvider");
  }
  return value;
}

export function TourCartProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<RequestDraft>(emptyDraft);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let restored: RequestDraft | null = null;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      restored = saved ? restoreDraft(saved) : null;
    } catch {
      // Storage may be blocked; the request still works for this session.
    }
    const timer = window.setTimeout(() => {
      if (restored) setDraft(restored);
      setHydrated(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      const stored: StoredRequest = { version: 1, ...draft };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // Storage is an enhancement, not a prerequisite for checkout.
    }
  }, [draft, hydrated]);

  const add = useCallback((slug: string) => {
    if (!experiences.some((item) => item.slug === slug)) return;
    setDraft((current) =>
      current.items.includes(slug)
        ? current
        : { ...current, items: [...current.items, slug] },
    );
  }, []);
  const remove = useCallback(
    (slug: string) =>
      setDraft((current) => ({
        ...current,
        items: current.items.filter((item) => item !== slug),
      })),
    [],
  );
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const update = useCallback(
    <Key extends keyof RequestDraft,>(
      key: Key,
      nextValue: RequestDraft[Key],
    ) => setDraft((current) => ({ ...current, [key]: nextValue })),
    [],
  );

  const value = useMemo<TourCartContextValue>(
    () => ({
      draft,
      itemCount: draft.items.length,
      isOpen,
      add,
      remove,
      open,
      close,
      update,
    }),
    [add, close, draft, isOpen, open, remove, update],
  );

  return (
    <TourCartContext.Provider value={value}>
      {children}
      <TourCartDrawer />
    </TourCartContext.Provider>
  );
}

export function TourCartHeaderButton() {
  const { itemCount, open } = useTourCart();
  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Open tour request${itemCount ? ` with ${itemCount} excursions` : ""}`}
      className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-[10px] tracking-[0.2em] uppercase text-gold md:text-[11px]"
    >
      <span className="hidden sm:inline">Tour request</span>
      <span
        className="grid h-6 min-w-6 place-items-center rounded-full border border-gold/50 px-1 text-[10px]"
        aria-hidden
      >
        {itemCount}
      </span>
    </button>
  );
}

export function AddToTourCartButton({
  slug,
  compact = false,
  className,
}: {
  slug: string;
  compact?: boolean;
  className?: string;
}) {
  const { draft, add, open } = useTourCart();
  const added = draft.items.includes(slug);

  return (
    <button
      type="button"
      aria-pressed={added}
      onClick={() => {
        if (added) {
          open();
          return;
        }
        add(slug);
      }}
      aria-label={
        added
          ? `Review booking request containing ${experiences.find((item) => item.slug === slug)?.name ?? "excursion"}`
          : `Request price for ${experiences.find((item) => item.slug === slug)?.name ?? "excursion"}`
      }
      className={cx(
        "inline-flex items-center justify-center bg-gold text-[10px] tracking-[0.2em] uppercase text-ink transition-colors hover:bg-gold-soft",
        compact ? "px-4 py-2" : "px-6 py-3",
        className,
      )}
    >
      {added ? "Review request" : "Request price"}
    </button>
  );
}

function TourCartDrawer() {
  const { draft, itemCount, isOpen, close, remove, update } = useTourCart();
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      if (wasOpenRef.current) returnFocusRef.current?.focus();
      wasOpenRef.current = false;
      return;
    }

    wasOpenRef.current = true;
    returnFocusRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [close, isOpen]);

  if (!isOpen) return null;

  const selected = draft.items
    .map((slug) => experiences.find((item) => item.slug === slug))
    .filter((item) => item !== undefined);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selected.length) return;
    const href = whatsappLink(brand.whatsapp, requestMessage(draft));
    window.location.assign(href);
  };

  return (
    <div className="fixed inset-0 z-[90]">
      <button
        type="button"
        aria-label="Close tour request"
        onClick={close}
        className="absolute inset-0 bg-ink/75 backdrop-blur-sm"
      />
      <aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="tour-request-title"
        className="absolute inset-y-0 right-0 w-full max-w-xl overflow-y-auto bg-ivory shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/10 bg-ivory/95 px-5 py-4 backdrop-blur md:px-8">
          <div>
            <p className="eyebrow">Booking request</p>
            <h2 id="tour-request-title" className="mt-1 font-display text-3xl">
              Your Zanzibar excursions
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={close}
            aria-label="Close tour request"
            className="grid h-11 w-11 place-items-center border border-ink/15 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="px-5 py-7 md:px-8">
          {selected.length === 0 ? (
            <div className="border border-gold/25 bg-sand/45 p-7">
              <h3 className="font-display text-3xl">Your request is empty.</h3>
              <p className="mt-3 leading-7 text-ink/60">
                Choose from the 28 excursions in the Zanzibar guide, then send
                one clear request on WhatsApp.
              </p>
              <Link
                href="/experiences"
                onClick={close}
                className="mt-6 inline-flex bg-gold px-6 py-3 text-[10px] tracking-[0.2em] uppercase"
              >
                Browse excursions
              </Link>
            </div>
          ) : (
            <form onSubmit={submit}>
              <ul className="space-y-3" aria-label="Selected excursions">
                {selected.map((item) => (
                  <li
                    key={item.slug}
                    className="flex items-start justify-between gap-5 border-b border-ink/10 pb-3"
                  >
                    <div>
                      <Link
                        href={`/experiences/${item.slug}`}
                        onClick={close}
                        className="font-display text-xl hover:text-lagoon"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-xs text-ink/45">
                        {item.regionLabel}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(item.slug)}
                      aria-label={`Remove ${item.name}`}
                      className="py-1 text-[10px] tracking-[0.16em] uppercase text-tear"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-[10px] tracking-[0.18em] uppercase text-ink/55">
                  Party size
                  <input
                    name="partySize"
                    type="number"
                    min={1}
                    max={40}
                    required
                    value={draft.partySize}
                    onChange={(event) =>
                      update(
                        "partySize",
                        Math.min(40, Math.max(1, event.target.valueAsNumber || 1)),
                      )
                    }
                    className="border border-ink/15 bg-white px-3 py-3 text-base tracking-normal text-ink"
                  />
                </label>
                <label className="grid gap-2 text-[10px] tracking-[0.18em] uppercase text-ink/55">
                  Preferred date
                  <input
                    name="preferredDate"
                    type="date"
                    required
                    value={draft.preferredDate}
                    onChange={(event) =>
                      update("preferredDate", event.target.value)
                    }
                    className="border border-ink/15 bg-white px-3 py-3 text-base tracking-normal text-ink"
                  />
                </label>
                <label className="grid gap-2 text-[10px] tracking-[0.18em] uppercase text-ink/55 sm:col-span-2">
                  Pickup hotel or area
                  <input
                    name="pickup"
                    type="text"
                    required
                    autoComplete="street-address"
                    value={draft.pickup}
                    onChange={(event) =>
                      update("pickup", event.target.value.slice(0, 120))
                    }
                    className="border border-ink/15 bg-white px-3 py-3 text-base tracking-normal text-ink"
                  />
                </label>
                <label className="grid gap-2 text-[10px] tracking-[0.18em] uppercase text-ink/55">
                  Your name
                  <input
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={draft.name}
                    onChange={(event) =>
                      update("name", event.target.value.slice(0, 120))
                    }
                    className="border border-ink/15 bg-white px-3 py-3 text-base tracking-normal text-ink"
                  />
                </label>
                <label className="grid gap-2 text-[10px] tracking-[0.18em] uppercase text-ink/55">
                  WhatsApp or email
                  <input
                    name="contact"
                    type="text"
                    required
                    autoComplete="tel"
                    value={draft.contact}
                    onChange={(event) =>
                      update("contact", event.target.value.slice(0, 160))
                    }
                    className="border border-ink/15 bg-white px-3 py-3 text-base tracking-normal text-ink"
                  />
                </label>
                <label className="grid gap-2 text-[10px] tracking-[0.18em] uppercase text-ink/55 sm:col-span-2">
                  Notes
                  <textarea
                    name="notes"
                    rows={4}
                    value={draft.notes}
                    onChange={(event) =>
                      update("notes", event.target.value.slice(0, MAX_TEXT_LENGTH))
                    }
                    placeholder="Accessibility needs, children’s ages, preferred timing…"
                    className="border border-ink/15 bg-white px-3 py-3 text-base tracking-normal text-ink"
                  />
                </label>
              </div>

              <div className="mt-7 border border-gold/25 bg-sand/45 p-4 text-sm leading-6 text-ink/65">
                This sends a booking request to {brand.phoneDisplay}. It is not
                a payment or confirmed reservation; a person will reply with
                prices, availability, and final details.
              </div>
              <button
                type="submit"
                className="mt-5 w-full bg-[#25D366] px-7 py-4 text-[11px] tracking-[0.22em] uppercase text-white transition-colors hover:bg-[#1fb459]"
              >
                Book via WhatsApp · {itemCount}{" "}
                {itemCount === 1 ? "excursion" : "excursions"}
              </button>
            </form>
          )}
        </div>
      </aside>
    </div>
  );
}
