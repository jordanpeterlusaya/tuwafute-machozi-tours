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
  const [status, setStatus] = useState<"idle" | "ready">("idle");
  const [message, setMessage] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    setMessage(
      [
        `Hello ${brand.name} — I would like to make an enquiry.`,
        "",
        `Name: ${String(data.name || "")}`,
        `Email: ${String(data.email || "")}`,
        `Travel dates: ${String(data.dates || "Flexible")}`,
        `Guests: ${String(data.guests || "To be confirmed")}`,
        `Interest: ${String(data.interest || "Zanzibar excursions")}`,
        `Message: ${String(data.message || "")}`,
        "",
        "I understand this is a request pending human confirmation.",
      ].join("\n"),
    );
    setStatus("ready");
  }

  if (status === "ready") {
    return (
      <div className="border border-gold/30 bg-sand/40 p-8">
        <p className="font-display text-3xl">Your message is ready.</p>
        <p className="mt-4 text-ink/65">
          Nothing has been submitted or stored. Use the button below to send
          this draft to {brand.phoneDisplay} in WhatsApp.
        </p>
        <a
          className="mt-6 inline-flex bg-[#25D366] px-6 py-3 text-[11px] tracking-[0.2em] uppercase text-white"
          href={whatsappLink(brand.whatsapp, message)}
          target="_blank"
          rel="noreferrer"
        >
          Book via WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 block text-xs text-ink/55 underline underline-offset-4"
        >
          Start again
        </button>
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
      <p className="text-xs leading-6 text-ink/45">
        This form prepares a WhatsApp message in your browser. It is not stored
        or sent until you continue to WhatsApp.
      </p>
      <Button type="submit">Prepare WhatsApp message</Button>
    </form>
  );
}
