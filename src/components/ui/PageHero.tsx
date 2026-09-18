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
    <header className="bg-ink px-5 pb-20 pt-36 text-ivory md:px-10 md:pb-28 md:pt-44">
      <p className="eyebrow">{eyebrow}</p>
      <span className="quiet-rule mt-6 block" />
      <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">
        {title}
      </h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-ivory/62">{copy}</p>
    </header>
  );
}
