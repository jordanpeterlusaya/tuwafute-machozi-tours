import { cx } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  inverted?: boolean;
  stacked?: boolean;
  compact?: boolean;
};

export function LogoMark({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  const gold = inverted ? "#E4D2A6" : "#C9A86A";
  const ink = inverted ? "#FAF6F0" : "#12201C";

  return (
    <svg viewBox="0 0 80 96" className={cx("overflow-visible", className)} aria-hidden>
      <path
        d="M40 6C40 6 16 34 16 56c0 14.36 10.75 26 24 26s24-11.64 24-26C64 34 40 6 40 6Z"
        fill="none"
        stroke={gold}
        strokeWidth="1.6"
      />
      <path
        d="M26 58c6 4 10 4 14 0 4 4 8 4 14 0"
        fill="none"
        stroke={gold}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M40 22c-1.4 8-1.2 16 0 22"
        fill="none"
        stroke={gold}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M40 30c-7 3-11 9-12 16M40 30c7 3 11 9 12 16M34 36c-6-1-10-5-12-10M46 36c6-1 10-5 12-10"
        fill="none"
        stroke={ink}
        strokeOpacity="0.55"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="40" cy="20" r="3.2" fill="none" stroke={gold} strokeWidth="1.1" />
      <path d="M36.2 20h7.6M40 16.2v7.6" stroke={gold} strokeWidth="0.7" />
    </svg>
  );
}

export function Logo({
  className,
  markClassName,
  inverted = false,
  stacked = false,
  compact = false,
}: LogoProps) {
  const text = inverted ? "text-ivory" : "text-ink";

  if (compact) {
    return (
      <span className={cx("inline-flex items-center gap-2", className)}>
        <LogoMark inverted={inverted} className={cx("h-9 w-7", markClassName)} />
        <span className={cx("leading-none", text)}>
          <span className="block font-accent text-[11px] tracking-[0.26em]">TUWAFUTE MACHOZI</span>
          <span className="mt-0.5 block text-[9px] tracking-[0.32em] text-gold">TOURS</span>
        </span>
      </span>
    );
  }

  return (
    <span className={cx("inline-flex items-center gap-3", stacked && "flex-col gap-1", className)}>
      <LogoMark inverted={inverted} className={cx("h-12 w-10 shrink-0", markClassName)} />
      <span className={cx("leading-none", text)}>
        <span className="block font-accent text-[15px] tracking-[0.34em]">TUWAFUTE</span>
        <span className="mt-1 block font-display text-[13px] tracking-[0.42em] text-gold">
          MACHOZI TOURS
        </span>
      </span>
    </span>
  );
}
