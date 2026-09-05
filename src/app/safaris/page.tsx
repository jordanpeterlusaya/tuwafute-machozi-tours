import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { safaris } from "@/content/safaris";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";
import { formatPrice } from "@/lib/utils";

export const metadata: Metadata = { title: "Safaris" };

export default function SafarisPage() {
  return (
    <>
      <PageHero
        eyebrow="The mainland"
        title="Wilderness, timed to the herds — never to a checklist."
        copy="Serengeti, Ngorongoro, Tarangire and the island-to-savannah bridge. Camps that disappear. Guides who wait."
      />
      <Section>
        <Container className="grid gap-12">
          {safaris.map((item) => (
            <Link key={item.slug} href={`/safaris/${item.slug}`} className="group grid gap-8 md:grid-cols-2">
              <div className="image-reveal relative aspect-[16/10] overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="50vw" />
              </div>
              <div className="flex flex-col justify-center">
                <p className="eyebrow">
                  {item.days} days · from {formatPrice(item.priceFrom)}
                </p>
                <h2 className="mt-3 font-display text-5xl group-hover:text-lagoon">{item.name}</h2>
                <p className="mt-4 leading-8 text-ink/65">{item.summary}</p>
                <p className="mt-4 text-sm text-ink/45">{item.parks.join(" · ")}</p>
              </div>
            </Link>
          ))}
        </Container>
      </Section>
    </>
  );
}
