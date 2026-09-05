import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { itineraries } from "@/content/itineraries";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Editorial Itinerary Ideas",
  description:
    "Sample Zanzibar itinerary compositions assembled from the 28 guide excursions; not official packages.",
};

export default function ItinerariesPage() {
  return (
    <>
      <PageHero
        eyebrow="Editorial samples · not packages"
        title="Guide excursions, arranged into possible days."
        copy="These are sample compositions assembled from individual PDF excursions. They are not official guide packages and carry no bundled price, duration promise, or inclusion list."
      />
      <Section>
        <Container className="grid gap-10 md:grid-cols-2">
          {itineraries.map((item) => (
            <Link key={item.slug} href={`/itineraries/${item.slug}`} className="group">
              <div className="image-reveal relative aspect-[4/3] overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="50vw" />
              </div>
              <p className="mt-5 eyebrow">Editorial {item.days}-day sequence</p>
              <h2 className="mt-2 font-display text-4xl group-hover:text-lagoon">{item.name}</h2>
              <p className="mt-3 text-ink/60">{item.summary}</p>
            </Link>
          ))}
        </Container>
      </Section>
    </>
  );
}
