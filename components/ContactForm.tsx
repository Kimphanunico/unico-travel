"use client";

import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefillTour = searchParams.get("tour") ?? "";

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      destination: formData.get("destination"),
      travelDates: formData.get("travelDates"),
      travelers: formData.get("travelers"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-forest/20 bg-forest/5 p-8 text-center">
        <h3 className="font-serif text-xl text-ink">Request received</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          Thanks for reaching out — a trip designer will get back to you
          within 1-2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-xs uppercase tracking-widest text-ink/60">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs uppercase tracking-widest text-ink/60">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-xs uppercase tracking-widest text-ink/60">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta"
          />
        </div>
        <div>
          <label htmlFor="destination" className="text-xs uppercase tracking-widest text-ink/60">
            Destination / Tour
          </label>
          <input
            id="destination"
            name="destination"
            type="text"
            defaultValue={prefillTour}
            className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="travelDates" className="text-xs uppercase tracking-widest text-ink/60">
            Preferred dates
          </label>
          <input
            id="travelDates"
            name="travelDates"
            type="text"
            placeholder="e.g. March 2027"
            className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta"
          />
        </div>
        <div>
          <label htmlFor="travelers" className="text-xs uppercase tracking-widest text-ink/60">
            Number of travelers
          </label>
          <input
            id="travelers"
            name="travelers"
            type="text"
            className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-widest text-ink/60">
          Tell us about your trip *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-terracotta-dark">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-terracotta px-6 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-terracotta-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
