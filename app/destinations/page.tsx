import type { Metadata } from "next";
import Link from "next/link";
import { destinations } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Destinations | Unico Travel",
  description:
    "Unico Travel plans trips across Vietnam, Cambodia, Laos and Japan.",
};

export default function DestinationsPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          Where We Go
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          Destinations
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">
          Four countries, each with its own pace and character. Every
          itinerary is designed and led in-house.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className={`group relative flex h-72 items-end overflow-hidden rounded-2xl p-8 ${d.gradient}`}
            >
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
              <div className="relative">
                <h2 className="font-serif text-3xl text-white">{d.name}</h2>
                <p className="mt-2 max-w-xs text-sm text-white/80">
                  {d.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
