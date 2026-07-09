"use client";

import Link from "next/link";
import Hero from "@/components/Hero";
import TourCard from "@/components/TourCard";
import { tours } from "@/lib/tours";
import { useLanguage } from "@/components/LanguageProvider";
import { ui } from "@/lib/i18n";

export default function Home() {
  const { locale, t } = useLanguage();
  const featured = tours.slice(0, 3);
  const features = ui[locale].home.features;
  const testimonials = ui[locale].home.testimonials;

  return (
    <>
      <Hero />

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {t("home.introTag")}
        </p>
        <h2 className="font-serif text-balance mt-5 text-3xl leading-snug text-ink sm:text-4xl">
          {t("home.introHeading")}
        </h2>
        <p className="mt-6 text-balance leading-relaxed text-ink/65">
          {t("home.introBody")}
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block text-sm uppercase tracking-widest text-ink underline decoration-terracotta underline-offset-8 hover:text-terracotta"
        >
          {t("home.moreAbout")}
        </Link>
      </section>

      {/* Featured tours */}
      <section className="bg-sand/40 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
                {t("home.featuredTag")}
              </p>
              <h2 className="font-serif mt-4 text-3xl text-ink sm:text-4xl">
                {t("home.featuredHeading")}
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm uppercase tracking-widest text-ink underline decoration-terracotta underline-offset-8 hover:text-terracotta"
            >
              {t("nav.viewAllTours")}
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
          {t("home.whyTag")}
        </p>
        <h2 className="font-serif mt-4 text-center text-3xl text-ink sm:text-4xl">
          {t("home.whyHeading")}
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
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
            {t("home.testimonialsTag")}
          </p>
          <h2 className="font-serif mt-4 text-center text-3xl sm:text-4xl">
            {t("home.testimonialsHeading")}
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="rounded-2xl border border-cream/15 p-7">
                <p className="text-sm leading-relaxed text-cream/85">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-6 text-sm font-medium text-cream">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-widest text-terracotta">
                  {testimonial.trip}
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
            {t("home.ctaHeading")}
          </h2>
          <p className="mt-5 text-balance text-white/90">
            {t("home.ctaBody")}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-ink px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-black"
          >
            {t("home.ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
