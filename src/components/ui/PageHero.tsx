import { Eyebrow } from "@/components/ui/Section";

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <header className="bg-ink px-5 pb-16 pt-32 text-ivory md:px-10 md:pb-24 md:pt-40">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/65">{copy}</p>
    </header>
  );
}
