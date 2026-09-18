import { brand } from "@/content/brand";
import { cx, whatsappLink } from "@/lib/utils";

const actionClass =
  "inline-flex items-center justify-center rounded-none px-6 py-3.5 text-[10px] tracking-[0.28em] uppercase transition-colors duration-300";

export function CallLink({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <a
      href={brand.phoneHref}
      className={cx(
        inverted ? "text-gold hover:text-ivory" : "text-gold hover:text-ink",
        className,
      )}
    >
      Call {brand.phoneDisplay}
    </a>
  );
}

export function ContactActions({
  whatsappMessage,
  stacked = true,
}: {
  whatsappMessage?: string;
  stacked?: boolean;
}) {
  return (
    <div className={cx(stacked ? "grid gap-3" : "flex flex-wrap gap-3")}>
      <a href={brand.phoneHref} className={cx(actionClass, "bg-gold text-ink hover:bg-gold-soft")}>
        Call {brand.phoneDisplay}
      </a>
      {whatsappMessage ? (
        <a
          href={whatsappLink(brand.whatsapp, whatsappMessage)}
          target="_blank"
          rel="noreferrer"
          className={cx(actionClass, "border border-ink/12 text-ink hover:border-gold")}
        >
          WhatsApp {brand.whatsappDisplay}
        </a>
      ) : null}
    </div>
  );
}

export function ContactLines({ inverted = false }: { inverted?: boolean }) {
  const muted = inverted ? "text-ivory/62" : "text-ink/65";
  const link = inverted
    ? "text-gold transition-colors hover:text-ivory"
    : "text-gold transition-colors hover:text-ink";

  return (
    <ul className={cx("space-y-3 text-sm leading-7", muted)}>
      <li>
        Call ·{" "}
        <a href={brand.phoneHref} className={link}>
          {brand.phoneDisplay}
        </a>
      </li>
      <li>
        WhatsApp ·{" "}
        <a
          href={whatsappLink(
            brand.whatsapp,
            `Hello ${brand.name} — I would like to enquire.`,
          )}
          target="_blank"
          rel="noreferrer"
          className={link}
        >
          {brand.whatsappDisplay}
        </a>
      </li>
    </ul>
  );
}
