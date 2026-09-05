"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type Plan = {
  title: string;
  days: number;
  note: string;
  story: string;
  daysPlan: { title: string; copy: string }[];
  experiences: string[];
};

export function AIPlanner() {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<Plan | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const response = await fetch("/api/planner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    setPlan(json.plan);
    setLoading(false);
  }

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <form onSubmit={onSubmit} className="grid gap-6">
        <label className="grid gap-2 text-sm">
          Season
          <select name="season" className="border-b border-ink/15 bg-transparent py-3">
            <option value="dry">Dry light · June–October</option>
            <option value="warm">Warm seas · December–March</option>
            <option value="kite">Kite winds</option>
            <option value="rains">Green rains · April–May</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          Who is travelling
          <select name="party" className="border-b border-ink/15 bg-transparent py-3">
            <option value="couple">Couple</option>
            <option value="family">Family</option>
            <option value="friends">Friends</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          Energy
          <select name="energy" className="border-b border-ink/15 bg-transparent py-3">
            <option value="unhurried">Unhurried</option>
            <option value="balanced">Balanced</option>
            <option value="full">Full days</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          A must — in your words
          <input
            name="must"
            placeholder="Stone Town, a sandbank, Jozani, perhaps Mnemba…"
            className="border-b border-ink/15 bg-transparent py-3 outline-none focus:border-gold"
          />
        </label>
        <Button type="submit">{loading ? "Composing…" : "Compose with the house"}</Button>
        <p className="text-xs leading-6 text-ink/45">
          A private planner trained on our excursions, lodges and impact principles — not a generic chatbot.
        </p>
      </form>

      <div className="bg-sand/60 p-8 min-h-[360px]">
        {!plan && <p className="font-display text-3xl text-ink/40">Your itinerary will appear here.</p>}
        {plan && (
          <div>
            <p className="eyebrow">{plan.days} days</p>
            <h3 className="mt-3 font-display text-4xl">{plan.title}</h3>
            <p className="mt-4 text-ink/65">{plan.story}</p>
            <p className="mt-3 text-sm italic text-ink/50">{plan.note}</p>
            <ol className="mt-6 space-y-3">
              {plan.daysPlan.map((day, index) => (
                <li key={day.title}>
                  <span className="text-gold">0{index + 1}</span> {day.title}
                </li>
              ))}
            </ol>
            <Button href="/enquire?interest=planner" className="mt-8">
              Place this with a human
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
