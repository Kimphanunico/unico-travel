import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Unico Travel",
  description:
    "Meet Unico Travel, a small team of trip designers building thoughtful journeys across the world.",
};

const VALUES = [
  {
    title: "Slow Down, See More",
    description:
      "We'd rather give you three unforgettable days in one place than seven rushed ones across five.",
  },
  {
    title: "Real Local Partners",
    description:
      "We work directly with family-run guesthouses, independent guides, and small operators rather than resellers.",
  },
  {
    title: "Honest Planning",
    description:
      "Clear pricing, realistic itineraries, and straight answers when a plan needs to change.",
  },
];

const STATS = [
  { value: "12+", label: "Years planning trips" },
  { value: "38", label: "Countries covered" },
  { value: "4,200+", label: "Travelers guided" },
  { value: "4.9/5", label: "Average trip rating" },
];

const TEAM = [
  { name: "Lena Ortiz", role: "Founder & Lead Trip Designer", gradient: "gradient-sunset" },
  { name: "Marcus Webb", role: "Head of Operations", gradient: "gradient-forest" },
  { name: "Aiko Tanaka", role: "Asia Program Lead", gradient: "gradient-ocean" },
  { name: "Priya Nair", role: "Guest Experience Lead", gradient: "gradient-sand" },
];

export default function AboutPage() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          About Unico Travel
        </p>
        <h1 className="font-serif text-balance mt-5 text-4xl leading-tight text-ink sm:text-5xl">
          We started Unico because most travel felt rushed, generic, or both.
        </h1>
        <p className="mt-6 text-balance leading-relaxed text-ink/65">
          Founded by a small group of former guides and tour operators, Unico
          Travel exists to plan trips the way we'd want to take them
          ourselves, unhurried, well connected to place, and built around
          the traveler in front of us rather than a template.
        </p>
      </section>

      {/* Image band */}
      <section className="mt-16 grid grid-cols-2 gap-3 px-6 sm:grid-cols-4 lg:px-10">
        <div className="h-40 rounded-xl gradient-ocean sm:h-56" />
        <div className="h-40 rounded-xl gradient-sunset sm:h-56" />
        <div className="h-40 rounded-xl gradient-forest sm:h-56" />
        <div className="h-40 rounded-xl gradient-sand sm:h-56" />
      </section>

      {/* Stats */}
      <section className="mx-auto mt-24 max-w-5xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 rounded-2xl border border-ink/10 bg-white p-10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-3xl text-terracotta">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-ink/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-terracotta">
          What we believe
        </p>
        <h2 className="font-serif mt-4 text-center text-3xl text-ink sm:text-4xl">
          Our approach to travel
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl border border-ink/10 bg-white p-8">
              <h3 className="font-serif text-xl text-ink">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-sand/40 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-terracotta">
            The people behind the plans
          </p>
          <h2 className="font-serif mt-4 text-center text-3xl text-ink sm:text-4xl">
            Meet the team
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member) => (
              <div key={member.name} className="text-center">
                <div className={`mx-auto h-40 w-40 rounded-full ${member.gradient}`} />
                <h3 className="font-serif mt-5 text-lg text-ink">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-ink/50">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        <h2 className="font-serif text-balance text-3xl text-ink sm:text-4xl">
          Want to plan a trip with us?
        </h2>
        <p className="mt-5 text-balance text-ink/65">
          We'd love to hear where you're dreaming of going.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-terracotta-dark"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
