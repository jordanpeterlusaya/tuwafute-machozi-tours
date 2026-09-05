import Link from "next/link";
import { cx } from "@/lib/utils";

const variants = {
  gold:
    "bg-gold text-ink hover:bg-gold-soft",
  ghost:
    "border border-gold/40 text-ivory hover:border-gold hover:bg-gold/10",
  ink:
    "bg-ink text-ivory hover:bg-ink-soft",
  line:
    "border border-ink/15 text-ink hover:border-gold hover:text-forest",
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
    "inline-flex items-center justify-center gap-2 px-7 py-3 text-[11px] tracking-[0.28em] uppercase transition-colors duration-300",
    variants[variant],
    className,
  );

  if (href) {
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
