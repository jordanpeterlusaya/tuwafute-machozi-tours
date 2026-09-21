import { brand } from "@/content/brand";
import { cx } from "@/lib/utils";

export function PrivateGuideNote({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <p
      className={cx(
        inverted ? "text-ivory/70" : "text-ink/60",
        className,
      )}
    >
      {brand.privateGuideNote}
    </p>
  );
}
