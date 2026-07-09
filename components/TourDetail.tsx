"use client";

import Link from "next/link";
import type { Tour } from "@/lib/tours";
import { useLanguage } from "@/components/LanguageProvider";
import { pick } from "@/lib/i18n";

export default function TourDetail({ tour }: { tour: Tour }) {
  const { locale, t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className={`relative flex h-[60vh] min-h-[420px] items-end ${tour.gradient}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-32 lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">
            {pick(tour.category, locale)} &middot; {pick(tour.location, locale)}
          </p>
          <h1 className="font-serif text-balance mt-4 max-w-2xl text-4xl text-white sm:text-5xl">
            {pick(tour.title, locale)}
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-3 lg:px-10">
        {/* Main content */}
        <div className="lg:col-span-2">
          <p className="text-lg leading-relaxed text-ink/75">{pick(tour.summary, locale)}</p>
          {tour.description.map((p, i) => (
            <p key={i} className="mt-5 leading-relaxed text-ink/65">
              {pick(p, locale)}
            </p>
          ))}

          <h2 className="font-serif mt-12 text-2xl text-ink">{t("tour.highlights")}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {tour.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-ink/70">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                {pick(h, locale)}
              </li>
            ))}
          </ul>

          <h2 className="font-serif mt-12 text-2xl text-ink">{t("tour.itinerary")}</h2>
          <div className="mt-6 space-y-6">
            {tour.itinerary.map((day, i) => (
              <div key={i} className="border-l-2 border-terracotta/40 pl-5">
                <p className="text-xs uppercase tracking-widest text-terracotta">
                  {pick(day.day, locale)}
                </p>
                <h3 className="font-serif mt-1 text-lg text-ink">{pick(day.title, locale)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {pick(day.description, locale)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-serif text-lg text-ink">{t("tour.included")}</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/65">
                {tour.includes.map((i, idx) => (
                  <li key={idx}>&#10003; {pick(i, locale)}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-lg text-ink">{t("tour.notIncluded")}</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink/65">
                {tour.excludes.map((i, idx) => (
                  <li key={idx}>&#10005; {pick(i, locale)}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-8">
            <p className="font-serif text-3xl text-ink">{tour.price}</p>
            <p className="text-sm text-ink/50">{t("tour.perPerson")}</p>

            <dl className="mt-6 space-y-3 border-t border-ink/10 pt-6 text-sm">
              <div className="flex justify-between">
                <dt className="text-ink/50">{t("tour.duration")}</dt>
                <dd className="text-ink">{pick(tour.duration, locale)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/50">{t("tour.groupSize")}</dt>
                <dd className="text-ink">{pick(tour.groupSize, locale)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-ink/50">{t("tour.location")}</dt>
                <dd className="text-right text-ink">{pick(tour.location, locale)}</dd>
              </div>
            </dl>

            <Link
              href={`/contact?tour=${encodeURIComponent(pick(tour.title, locale))}`}
              className="mt-8 block rounded-full bg-terracotta px-6 py-3 text-center text-sm uppercase tracking-widest text-white hover:bg-terracotta-dark"
            >
              {t("tour.requestThisTrip")}
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
