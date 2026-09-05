import type { Metadata } from "next";
import { AIPlanner } from "@/components/planner/AIPlanner";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Excursion Planner" };

export default function PlannerPage() {
  return (
    <>
      <PageHero
        eyebrow="Editorial planning aid"
        title="See one way the guide excursions could flow."
        copy="Answer four questions for a sample composition drawn from the Zanzibar guide. It is not an official package or availability confirmation."
      />
      <Section>
        <Container>
          <AIPlanner />
        </Container>
      </Section>
    </>
  );
}
