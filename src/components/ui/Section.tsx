import { cx } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={cx(
        "relative px-5 py-24 md:px-10 md:py-32 lg:px-16",
        dark ? "bg-ink text-ivory" : "bg-ivory text-ink",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cx("mx-auto w-full max-w-7xl", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cx("eyebrow", className)}>{children}</p>;
}
