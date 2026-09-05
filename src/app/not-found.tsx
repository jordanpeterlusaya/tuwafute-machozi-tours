import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-ink px-6 text-center text-ivory">
      <p className="eyebrow">Off the map</p>
      <h1 className="mt-4 font-display text-6xl">This path has returned to the tide.</h1>
      <Button href="/" className="mt-10">
        Back to the house
      </Button>
    </section>
  );
}
