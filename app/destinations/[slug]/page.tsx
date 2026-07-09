import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "@/lib/destinations";
import { tours } from "@/lib/tours";
import TourCard from "@/components/TourCard";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};
  return {
    title: `${destination.name} | Unico Travel`,
    description: destination.tagline,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const destinationTours = tours.filter((t) => t.country === destination.slug);

  return (
    <div>
      {/* Hero */}
      <section className={`relative flex h-[62vh] min-h-[440px] items-end ${destination.gradient}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-32 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/75">
            Destination
          </p>
          <h1 className="font-serif mt-4 text-5xl text-white sm:text-6xl">
            {destination.name}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-white/85">
            {destination.tagline}
          </p>
        </div>
      </section>

      {/* Intro + facts */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-3 lg:px-10">
        <div className="lg:col-span-2">
          {destination.intro.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed text-ink/70 first:mt-0">
              {p}
            </p>
          ))}
        </div>

        <div className="rounded-2xl border border-ink/10 bg-white p-8">
          <h2 className="text-xs uppercase tracking-widest text-terracotta">
            Good to know
          </h2>
          <dl className="mt-5 space-y-4">
            {destination.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-widest text-ink/40">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Region locator */}
      <section className="bg-sand/40 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
            Where it sits
          </p>
          <h2 className="font-serif mt-3 text-2xl text-ink">
            {destination.neighborsLabel}
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-6">
            <div className="flex flex-col items-center gap-2">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-terracotta text-sm font-medium text-white shadow-md sm:h-24 sm:w-24">
                {destination.name}
              </span>
            </div>

            {destination.neighbors.map((n, i) => (
              <div key={n} className="flex items-center gap-2">
                <span className="h-px w-8 bg-ink/20 sm:w-12" />
                <div className="flex flex-col items-center gap-2">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink/20 bg-white text-xs text-ink/70 sm:h-16 sm:w-16">
                    {n}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tours in this destination */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
              Trips
            </p>
            <h2 className="font-serif mt-3 text-3xl text-ink">
              {destination.name} itineraries
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm uppercase tracking-widest text-ink underline decoration-terracotta underline-offset-8 hover:text-terracotta"
          >
            View all tours
          </Link>
        </div>

        {destinationTours.length > 0 ? (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinationTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-ink/10 bg-white p-10 text-center">
            <h3 className="font-serif text-xl text-ink">
              No fixed packages here yet
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              Every {destination.name} trip can be built from scratch to
              match what you are after.
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

      {/* CTA */}
      <section className="gradient-forest">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center text-white lg:px-10">
          <h2 className="font-serif text-balance text-3xl sm:text-4xl">
            Don't see what you're after?
          </h2>
          <p className="mt-4 text-balance text-white/85">
            Every Unico itinerary can be tailor-made from scratch, in{" "}
            {destination.name} or anywhere else we work.
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-white px-8 py-3 text-sm uppercase tracking-widest text-ink hover:bg-cream"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </div>
  );
}
