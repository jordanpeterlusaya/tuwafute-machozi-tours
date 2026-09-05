"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { experiences } from "@/content/experiences";
import { itineraries } from "@/content/itineraries";

const interests = [
  { id: "coast", label: "Coast & stillness" },
  { id: "culture", label: "Stone Town & spice" },
  { id: "marine", label: "Reef & dhow" },
  { id: "impact", label: "Social impact" },
  { id: "adventure", label: "Wind & water" },
];

export function TripBuilder() {
  const [step, setStep] = useState(0);
  const [guests, setGuests] = useState("2");
  const [days, setDays] = useState("7");
  const [chosen, setChosen] = useState<string[]>(["coast", "culture"]);
  const [pace, setPace] = useState("unhurried");

  const suggestion = useMemo(() => {
    if (chosen.includes("adventure")) return itineraries.find((i) => i.slug === "east-and-south");
    return itineraries.find((i) => i.slug === "zanzibar-essential");
  }, [chosen]);

  const extras = experiences.filter((item) => chosen.includes(item.category)).slice(0, 4);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="eyebrow">Step {step + 1} of 4</p>
        {step === 0 && (
          <div className="mt-6 space-y-6">
            <label className="grid gap-2 text-sm">
              Travelling party
              <select value={guests} onChange={(e) => setGuests(e.target.value)} className="border-b border-ink/15 bg-transparent py-3">
                <option>2</option>
                <option>3–4</option>
                <option>Family</option>
                <option>Private group</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm">
              Length of stay
              <select value={days} onChange={(e) => setDays(e.target.value)} className="border-b border-ink/15 bg-transparent py-3">
                <option value="5">5 days</option>
                <option value="7">7 days</option>
                <option value="10">10 days</option>
                <option value="14">14 days</option>
              </select>
            </label>
          </div>
        )}
        {step === 1 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {interests.map((item) => {
              const active = chosen.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    setChosen((current) =>
                      current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id],
                    )
                  }
                  className={`border px-4 py-2 text-sm ${active ? "border-gold bg-gold/15" : "border-ink/15"}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
        {step === 2 && (
          <div className="mt-6 space-y-3">
            {["unhurried", "balanced", "full"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setPace(item)}
                className={`block w-full border px-5 py-4 text-left capitalize ${pace === item ? "border-gold" : "border-ink/15"}`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
        {step === 3 && (
          <p className="mt-6 font-display text-3xl">
            An editorial sample, not an official package. A person can refine
            each requested excursion with you.
          </p>
        )}
        <div className="mt-10 flex gap-3">
          {step > 0 && (
            <Button variant="line" onClick={() => setStep((value) => value - 1)}>
              Back
            </Button>
          )}
          {step < 3 ? (
            <Button onClick={() => setStep((value) => value + 1)}>Continue</Button>
          ) : (
            <Button
              href={`/enquire?interest=builder&guests=${guests}&days=${days}&pace=${pace}`}
            >
              Send this composition
            </Button>
          )}
        </div>
      </div>

      <aside className="bg-ink p-8 text-ivory md:p-10">
        <p className="eyebrow">Editorial sample</p>
        <h3 className="mt-4 font-display text-4xl">{suggestion?.name}</h3>
        <p className="mt-3 text-ivory/60">{suggestion?.summary}</p>
        <p className="mt-6 text-sm text-gold">
          {guests} · {days} days · {pace}
        </p>
        <ul className="mt-6 space-y-2 text-sm text-ivory/65">
          {extras.map((item) => (
            <li key={item.slug}>— {item.name}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
