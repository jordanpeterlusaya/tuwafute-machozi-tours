import Image from "next/image";
import Link from "next/link";
import { cx, warmImageBlur } from "@/lib/utils";

export function MediaCard({
  href,
  image,
  alt,
  eyebrow,
  title,
  summary,
  children,
  aspect = "aspect-[4/3]",
  headingAs: Heading = "h3",
  sizes,
  className,
}: {
  href: string;
  image: string;
  alt: string;
  eyebrow?: string;
  title: string;
  summary?: string;
  children?: React.ReactNode;
  aspect?: string;
  headingAs?: "h2" | "h3";
  sizes?: string;
  className?: string;
}) {
  return (
    <article className={cx("media-card flex h-full flex-col", className)}>
      <Link href={href} className="image-reveal group block">
        <div className={cx("relative overflow-hidden bg-forest", aspect)}>
          <Image
            src={image}
            alt={alt}
            fill
            sizes={
              sizes ??
              "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            }
            className="object-cover"
            quality={80}
            placeholder="blur"
            blurDataURL={warmImageBlur}
          />
        </div>
        <div className="px-5 pt-5">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <Heading className="mt-2 font-display text-[1.7rem] leading-[1.05] tracking-tight text-ink transition-colors duration-300 group-hover:text-gold">
            {title}
          </Heading>
        </div>
      </Link>
      {summary ? (
        <p className="mt-2 line-clamp-2 px-5 text-sm leading-6 text-ink/55">
          {summary}
        </p>
      ) : null}
      {children ? (
        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 px-5 pb-5 pt-4">
          {children}
        </div>
      ) : (
        <div className="pb-5" />
      )}
    </article>
  );
}

export function QuietLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "text-[10px] tracking-[0.22em] uppercase text-ink/50 transition-colors hover:text-gold";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
