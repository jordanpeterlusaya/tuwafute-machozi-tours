import Link from "next/link";
import { cx } from "@/lib/utils";

const variants = {
  gold:
    "bg-gold text-ink hover:bg-gold-soft",
  ghost:
    "border border-gold/45 text-ivory hover:border-gold hover:bg-gold/8",
  ink:
    "bg-ink text-ivory hover:bg-ink-soft",
  line:
    "border border-ink/12 text-ink hover:border-gold hover:text-gold",
};

type Common = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
};

export function Button({
  href,
  children,
  className,
  variant = "gold",
  type = "button",
  onClick,
}: Common & {
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const cls = cx(
    "inline-flex items-center justify-center gap-2 rounded-none px-7 py-3.5 text-[10px] tracking-[0.3em] uppercase transition-colors duration-300",
    variants[variant],
    className,
  );

  if (href) {
    const external = /^(https?:|tel:|mailto:)/.test(href);
    if (external) {
      const newTab = href.startsWith("http");
      return (
        <a
          href={href}
          className={cls}
          {...(newTab ? { target: "_blank", rel: "noreferrer" } : undefined)}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
