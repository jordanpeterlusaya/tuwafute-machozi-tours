import type { Metadata } from "next";
import { Suspense } from "react";
import { EnquiryForm } from "@/components/booking/EnquiryForm";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";
import { brand } from "@/content/brand";

export const metadata: Metadata = { title: "Enquire" };

export default function EnquirePage() {
  return (
    <>
      <PageHero
        eyebrow="The first conversation"
        title="Write to the house."
        copy="Tell us who is travelling, when, and the feeling you want to leave with. We answer as people."
      />
      <Section>
        <Container className="grid gap-16 lg:grid-cols-2">
          <Suspense fallback={<p>Opening the desk…</p>}>
            <EnquiryForm />
          </Suspense>
          <aside className="self-start border-l border-gold/25 pl-0 lg:pl-12">
            <p className="eyebrow">Also</p>
            <ul className="mt-6 space-y-4 text-ink/70">
              <li>
                Instagram ·{" "}
                <a className="text-gold" href={brand.instagramUrl} target="_blank" rel="noreferrer">
                  @{brand.instagram}
                </a>
              </li>
              <li>WhatsApp · the green button</li>
              <li>
                <a className="text-gold" href="/trip-builder">
                  Trip builder
                </a>{" "}
                if you prefer to compose first
              </li>
            </ul>
          </aside>
        </Container>
      </Section>
    </>
  );
}
