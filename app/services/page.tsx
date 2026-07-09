import type { Metadata } from "next";
import TourCard from "@/components/TourCard";
import { tours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Tours | Unico Travel",
  description:
    "Browse Unico Travel's small-group and private trips — from coastal escapes to mountain expeditions and safaris.",
};

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          Our Tours
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          Find your next journey
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">
          Every trip is designed and led in-house — small groups, local
          guides, and itineraries built for travelers who want more than a
          checklist.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>
    </div>
  );
}
