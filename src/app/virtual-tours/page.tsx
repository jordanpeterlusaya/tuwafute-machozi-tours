import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "360° Tours" };

const tours = [
  { slug: "nungwi", title: "Nungwi coast", image: "/images/hero-nungwi.jpg" },
  { slug: "resort", title: "Palm shore", image: "/images/hero-resort.jpg" },
  { slug: "adventure", title: "East-coast water", image: "/images/hero-adventure.jpg" },
];

export default function VirtualToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Look around"
        title="360° hours from the island’s own light."
        copy="Step inside our footage. Drag the horizon. Then come in person."
      />
      <Section>
        <Container className="grid gap-8 md:grid-cols-3">
          {tours.map((tour) => (
            <Link key={tour.slug} href={`/virtual-tours/${tour.slug}`} className="group">
              <div className="image-reveal relative aspect-[3/4] overflow-hidden">
                <Image src={tour.image} alt={tour.title} fill className="object-cover" sizes="33vw" />
              </div>
              <h2 className="mt-4 font-display text-3xl group-hover:text-lagoon">{tour.title}</h2>
            </Link>
          ))}
        </Container>
      </Section>
    </>
  );
}
