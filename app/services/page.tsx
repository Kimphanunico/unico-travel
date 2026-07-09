import type { Metadata } from "next";
import Link from "next/link";
import TourCard from "@/components/TourCard";
import { tours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Tours | Unico Travel",
  description:
    "Browse Unico Travel's small-group and private trips — from coastal escapes to mountain expeditions and safaris.",
};

const COUNTRY_LABELS: Record<string, string> = {
  vietnam: "Vietnam",
  cambodia: "Cambodia",
  laos: "Laos",
  japan: "Japan",
  switzerland: "Switzerland",
  tanzania: "Tanzania",
  indonesia: "Indonesia",
  iceland: "Iceland",
};

const TYPE_LABELS: Record<string, string> = {
  "tailor-made": "Tailor-Made",
  luxury: "Luxury",
  events: "Events",
  group: "Group",
};

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string; type?: string }>;
}) {
  const { country, type } = await searchParams;

  let filtered = tours;
  if (country) filtered = filtered.filter((t) => t.country === country);
  if (type) filtered = filtered.filter((t) => t.serviceType === type);

  const activeLabel = country
    ? COUNTRY_LABELS[country] ?? country
    : type
    ? TYPE_LABELS[type] ?? type
    : null;

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {activeLabel ? `Tours — ${activeLabel}` : "Our Tours"}
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          {activeLabel ? `Trips in ${activeLabel}` : "Find your next journey"}
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">
          Every trip is designed and led in-house — small groups, local
          guides, and itineraries built for travelers who want more than a
          checklist.
        </p>
        {activeLabel && (
          <Link
            href="/services"
            className="mt-4 inline-block text-sm uppercase tracking-widest text-ink underline decoration-terracotta underline-offset-8 hover:text-terracotta"
          >
            View all tours
          </Link>
        )}
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 pb-24 lg:px-10">
        {filtered.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-xl rounded-2xl border border-ink/10 bg-white p-10 text-center">
            <h2 className="font-serif text-xl text-ink">
              No fixed packages here yet
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              {activeLabel
                ? `We don't have a published package for ${activeLabel} yet — every Unico trip can be built from scratch to match what you're after.`
                : "No tours match this filter yet."}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-sm uppercase tracking-widest text-white hover:bg-terracotta-dark"
            >
              Request a Custom Trip
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
