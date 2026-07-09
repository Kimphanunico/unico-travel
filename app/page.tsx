import Link from "next/link";
import Hero from "@/components/Hero";
import TourCard from "@/components/TourCard";
import { tours } from "@/lib/tours";

const FEATURES = [
  {
    title: "Small Group Sizes",
    description:
      "Most trips cap at 12 travelers, so days feel personal, not scheduled.",
  },
  {
    title: "Local Guides, Always",
    description:
      "Every itinerary is led by guides who live where you're visiting.",
  },
  {
    title: "Thoughtful Pacing",
    description:
      "Fewer stops, more time in each place. No 6am-to-9pm checklists.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees — what you see in a quote is what you pay.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Unico Travel planned our Vietnam trip down to the smallest detail, but it never felt rigid. Best trip we've taken as a family.",
    name: "Marissa T.",
    trip: "Vietnam Coastal Explorer",
  },
  {
    quote:
      "The Iceland aurora nights alone were worth it. Our guide knew exactly where to go based on the forecast each night.",
    name: "David & Priya K.",
    trip: "Iceland Northern Lights Expedition",
  },
  {
    quote:
      "I've used other travel companies before — Unico is the first one that felt like it was actually designed around me.",
    name: "Owen R.",
    trip: "Swiss Alps Adventure",
  },
];

export default function Home() {
  const featured = tours.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          Who we are
        </p>
        <h2 className="font-serif text-balance mt-5 text-3xl leading-snug text-ink sm:text-4xl">
          We build trips around places and people, not itineraries and
          checkboxes.
        </h2>
        <p className="mt-6 text-balance leading-relaxed text-ink/65">
          Unico Travel is a small team of trip designers who've lived,
          worked, and wandered in the places we plan for. Every itinerary is
          built by hand — no templates, no filler days.
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block text-sm uppercase tracking-widest text-ink underline decoration-terracotta underline-offset-8 hover:text-terracotta"
        >
          More about Unico
        </Link>
      </section>

      {/* Featured tours */}
      <section className="bg-sand/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
                Featured trips
              </p>
              <h2 className="font-serif mt-4 text-3xl text-ink sm:text-4xl">
                Where to next
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm uppercase tracking-widest text-ink underline decoration-terracotta underline-offset-8 hover:text-terracotta"
            >
              View all tours
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {featured.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-terracotta">
          Why travel with us
        </p>
        <h2 className="font-serif mt-4 text-center text-3xl text-ink sm:text-4xl">
          The Unico difference
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="border-t border-ink/15 pt-6">
              <h3 className="font-serif text-lg text-ink">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-forest py-24 text-cream">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-cream/60">
            Traveler stories
          </p>
          <h2 className="font-serif mt-4 text-center text-3xl sm:text-4xl">
            What our travelers say
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="rounded-2xl border border-cream/15 p-7">
                <p className="text-sm leading-relaxed text-cream/85">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-medium text-cream">
                  {t.name}
                </p>
                <p className="text-xs uppercase tracking-widest text-terracotta">
                  {t.trip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-sunset">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center text-white lg:px-10">
          <h2 className="font-serif text-balance text-3xl sm:text-4xl">
            Ready to start planning your next trip?
          </h2>
          <p className="mt-5 text-balance text-white/90">
            Tell us where you'd like to go and what matters most to you —
            we'll take it from there.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-ink px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-black"
          >
            Start Your Request
          </Link>
        </div>
      </section>
    </>
  );
}
