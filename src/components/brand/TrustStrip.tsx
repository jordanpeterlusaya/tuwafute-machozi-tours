const marks = [
  {
    src: "/images/trust/google-logo.svg",
    name: "Google Reviews",
    caption: "Google Reviews",
    className: "h-7 w-7",
    invertOnDark: false,
  },
  {
    src: "/images/trust/tripadvisor-logo.svg",
    name: "Tripadvisor",
    caption: "Tripadvisor",
    className: "h-7 w-7",
    invertOnDark: true,
  },
  {
    src: "/images/trust/trustpilot-logo.svg",
    name: "Trustpilot",
    caption: null,
    className: "h-7 w-40",
    invertOnDark: false,
  },
  {
    src: "/images/trust/tanapa-logo.svg",
    name: "TANAPA",
    caption: "TANAPA",
    className: "h-10 w-10",
    invertOnDark: true,
  },
  {
    src: "/images/trust/safaribookings-logo.svg",
    name: "SafariBookings",
    caption: null,
    className: "h-6 w-40",
    invertOnDark: true,
  },
] as const;

export function TrustStrip({ inverted = false }: { inverted?: boolean }) {
  return (
    <div
      className={
        inverted
          ? "border-t border-ivory/10 pt-10"
          : "border-y border-ink/8 bg-sand/30"
      }
    >
      <div
        className={
          inverted
            ? "flex flex-col gap-6"
            : "mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 md:px-10 lg:px-16"
        }
      >
        <p
          className={
            inverted
              ? "text-[10px] tracking-[0.28em] uppercase text-gold"
              : "text-center text-[10px] tracking-[0.28em] uppercase text-ink/45"
          }
        >
          As seen on · Licensed with
        </p>
        <ul
          className={
            inverted
              ? "flex flex-wrap items-center gap-x-8 gap-y-5"
              : "flex flex-wrap items-center justify-center gap-x-10 gap-y-6"
          }
        >
          {marks.map((mark) => (
            <li key={mark.name} className="flex items-center gap-2.5">
              <img
                src={mark.src}
                alt={mark.name}
                className={`${mark.className} object-contain ${
                  inverted && mark.invertOnDark ? "brightness-0 invert" : ""
                }`}
              />
              {mark.caption ? (
                <span
                  className={
                    inverted
                      ? "text-[11px] tracking-[0.14em] uppercase text-ivory/70"
                      : "text-[11px] tracking-[0.14em] uppercase text-ink/55"
                  }
                >
                  {mark.caption}
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
