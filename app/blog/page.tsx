import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal | Unico Travel",
  description: "Stories, guides, and notes from Unico Travel's trip designers.",
};

const POSTS = [
  {
    title: "How We Plan a Trip: Inside the Unico Process",
    excerpt:
      "From first call to final itinerary, a look at how our trip designers build every journey by hand.",
    category: "Behind the Scenes",
    gradient: "gradient-forest",
    date: "June 2026",
  },
  {
    title: "Best Time to Visit Vietnam's Coast",
    excerpt:
      "A season-by-season breakdown of weather, crowds, and pricing along Vietnam's central coastline.",
    category: "Destination Guide",
    gradient: "gradient-ocean",
    date: "May 2026",
  },
  {
    title: "Packing for the Swiss Alps in Any Season",
    excerpt:
      "What our guides actually pack for alpine trips, from shoulder-season layers to summer hiking gear.",
    category: "Travel Tips",
    gradient: "gradient-snow",
    date: "April 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          The Journal
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          Notes from the field
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">
          Destination guides, planning tips, and stories from our trip
          designers. Sample posts below use placeholder content, so connect
          a CMS or add static routes to publish your own.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-2xl border border-ink/10 bg-white"
            >
              <div className={`h-48 w-full ${post.gradient}`} />
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-terracotta">
                  {post.category} &middot; {post.date}
                </p>
                <h2 className="font-serif mt-3 text-xl text-ink">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
