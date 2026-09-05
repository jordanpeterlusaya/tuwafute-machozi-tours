import type { Metadata } from "next";
import { AIPlanner } from "@/components/planner/AIPlanner";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "AI Planner" };

export default function PlannerPage() {
  return (
    <>
      <PageHero
        eyebrow="A private intelligence"
        title="Ask the house how the days should fall."
        copy="Answer four questions. Receive a composition drawn from our real excursions, lodges and safari chapters."
      />
      <Section>
        <Container>
          <AIPlanner />
        </Container>
      </Section>
    </>
  );
}
