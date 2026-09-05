"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { brand } from "@/content/brand";
import { whatsappLink } from "@/lib/utils";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "dates", label: "Travel dates", type: "text", required: false },
  { name: "guests", label: "Guests", type: "text", required: false },
] as const;

export function EnquiryForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      const response = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("failed");
      setStatus("sent");
      setMessage(String(data.message || ""));
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-gold/30 bg-sand/40 p-8">
        <p className="font-display text-3xl">The house has your letter.</p>
        <p className="mt-4 text-ink/65">
          We reply with a considered proposal — usually within one working day. If you prefer the faster door:
        </p>
        <a
          className="mt-6 inline-flex text-sm tracking-[0.2em] uppercase text-gold"
          href={whatsappLink(brand.whatsapp, message || "Hello — I just sent an enquiry.")}
          target="_blank"
          rel="noreferrer"
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5">
      {fields.map((field) => (
        <label key={field.name} className="grid gap-2 text-[11px] tracking-[0.22em] uppercase text-ink/50">
          {field.label}
          <input
            name={field.name}
            type={field.type}
            required={field.required}
            className="border-b border-ink/15 bg-transparent py-3 text-base tracking-normal text-ink outline-none focus:border-gold"
          />
        </label>
      ))}
      <label className="grid gap-2 text-[11px] tracking-[0.22em] uppercase text-ink/50">
        Interest
        <input
          name="interest"
          defaultValue={params.get("interest") ?? ""}
          className="border-b border-ink/15 bg-transparent py-3 text-base tracking-normal text-ink outline-none focus:border-gold"
        />
      </label>
      <label className="grid gap-2 text-[11px] tracking-[0.22em] uppercase text-ink/50">
        How shall we compose the days?
        <textarea
          name="message"
          required
          rows={5}
          className="border border-ink/15 bg-transparent p-3 text-base tracking-normal text-ink outline-none focus:border-gold"
        />
      </label>
      {status === "error" && <p className="text-sm text-tear">Please try again, or write us on WhatsApp.</p>}
      <Button type="submit">Send the letter</Button>
    </form>
  );
}
