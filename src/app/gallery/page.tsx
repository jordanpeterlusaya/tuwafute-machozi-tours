import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Gallery" };

const frames = [
  { src: "/images/hero-nungwi.jpg", alt: "Nungwi turquoise shallows", caption: "Nungwi · northern light" },
  { src: "/images/nungwi-boats.jpg", alt: "Traditional boats", caption: "Dhows at rest" },
  { src: "/images/hero-resort.jpg", alt: "Palm resort coast", caption: "Makuti and palm" },
  { src: "/images/resort-palms.jpg", alt: "Resort palms", caption: "The garden shore" },
  { src: "/images/hero-adventure.jpg", alt: "Jet ski adventure", caption: "East-coast wind" },
  { src: "/images/jetski.jpg", alt: "Ocean adventure", caption: "Salt and speed" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Light"
        title="A private reel from the island."
        copy="Original Zanzibar footage from the house. More island chapters as the seasons turn."
      />
      <Section>
        <Container className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {frames.map((frame) => (
            <figure key={frame.src} className="image-reveal mb-5 break-inside-avoid">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={frame.src} alt={frame.alt} fill className="object-cover" sizes="33vw" />
              </div>
              <figcaption className="mt-3 text-sm tracking-wide text-ink/50">{frame.caption}</figcaption>
            </figure>
          ))}
        </Container>
      </Section>
    </>
  );
}
