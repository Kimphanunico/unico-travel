"use client";

import Link from "next/link";
import { useState } from "react";
import { tours, type Tour } from "@/lib/tours";
import TourCard from "@/components/TourCard";
import InclusionIconGraphic from "@/components/InclusionIcon";
import TransportIcon from "@/components/TransportIcon";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useLanguage } from "@/components/LanguageProvider";
import { pick } from "@/lib/i18n";

export default function TourDetail({ tour }: { tour: Tour }) {
  const { locale, t } = useLanguage();

  const hasJourney = !!tour.gallerySegments && tour.gallerySegments.length > 0;
  const hasInclusionsGrid = !!tour.inclusionsGrid && tour.inclusionsGrid.length > 0;
  const hasHotels = !!tour.hotels && tour.hotels.length > 0;
  const hasFaqs = !!tour.faqs && tour.faqs.length > 0;

  const similarTours = tours
    .filter(
      (other) =>
        other.slug !== tour.slug &&
        (other.country === tour.country || other.serviceType === tour.serviceType)
    )
    .slice(0, 3);
  const hasSimilar = similarTours.length > 0;

  const locationTags =
    tour.routeStops && tour.routeStops.length > 0
      ? tour.routeStops.map((s) => pick(s, locale))
      : [pick(tour.location, locale)];

  const [openDay, setOpenDay] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  function toggleCard(i: number) {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  const navItems: { id: string; label: string }[] = [
    { id: "overview", label: t("tour.navOverview") },
    ...(hasJourney ? [{ id: "journey", label: t("tour.navJourney") }] : []),
    { id: "itinerary", label: t("tour.navItinerary") },
    ...(hasHotels ? [{ id: "hotels", label: t("tour.navHotels") }] : []),
    ...(hasFaqs ? [{ id: "faqs", label: t("tour.navFaqs") }] : []),
    ...(hasSimilar ? [{ id: "similar", label: t("tour.navSimilar") }] : []),
  ];

  return (
    <div>
      {/* Hero */}
      <section className={`relative flex h-[60vh] min-h-[420px] items-end ${tour.gradient}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 pt-32 lg:px-10">
          <Breadcrumbs
            items={[
              { label: t("nav.home"), href: "/" },
              { label: t("nav.services"), href: "/services" },
              { label: pick(tour.title, locale) },
            ]}
          />
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">
            {pick(tour.category, locale)}
          </p>
          <h1 className="font-serif text-balance mt-4 max-w-2xl text-4xl text-white sm:text-5xl">
            {pick(tour.title, locale)}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {locationTags.map((loc, i) => (
              <span
                key={i}
                className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur-sm"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky sub-navigation */}
      <div className="sticky top-[72px] z-30 border-b border-ink/10 bg-cream/95 backdrop-blur-sm lg:top-[104px]">
        <nav className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-3 text-xs uppercase tracking-widest text-ink/60 lg:px-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 whitespace-nowrap hover:text-terracotta"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-3 lg:px-10">
        {/* Main content */}
        <div className="lg:col-span-2">
          {/* Overview */}
          <div id="overview" className="scroll-mt-40">
            <p className="text-lg leading-relaxed text-ink/75">{pick(tour.summary, locale)}</p>
            {tour.description.map((p, i) => (
              <p key={i} className="mt-5 leading-relaxed text-ink/65">
                {pick(p, locale)}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <h2 className="font-serif mt-14 text-2xl text-ink">{t("tour.highlightsOfThisTour")}</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {tour.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-xl border border-ink/10 bg-white p-4 text-sm text-ink/70"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  &#10003;
                </span>
                {pick(h, locale)}
              </li>
            ))}
          </ul>

          {/* Journey / gallery segments */}
          {hasJourney && (
            <div id="journey" className="scroll-mt-40">
              <h2 className="font-serif mt-14 text-2xl text-ink">{t("tour.journeyHeading")}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {t("tour.journeyBody")}
              </p>
              {/* Vertical timeline: compact, information-first treatment.
                  Each stage shows the transport mode and travel time so the
                  itinerary's logic (how one leg connects to the next) is
                  legible at a glance, instead of a large decorative cover
                  with no real photography behind it. */}
              <div className="relative mt-8 pl-11">
                <div className="absolute bottom-3.5 left-4 top-3.5 border-l border-dashed border-terracotta/30" />
                {tour.gallerySegments!.map((segment, i) => {
                  const isLast = i === tour.gallerySegments!.length - 1;
                  return (
                    <div key={i} className={isLast ? "relative" : "relative pb-7"}>
                      <div
                        className="absolute -left-11 top-0 flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold text-white"
                        style={{ background: segment.accent }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="font-serif text-lg text-ink">{pick(segment.title, locale)}</h3>
                        <span
                          className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-medium"
                          style={{ color: segment.accent, background: `${segment.accent}18` }}
                        >
                          <TransportIcon mode={segment.transport} className="h-3.5 w-3.5" />
                          {pick(segment.travelTime, locale)}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                        {pick(segment.description, locale)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Inclusions grid */}
          {hasInclusionsGrid && (
            <div>
              <h2 className="font-serif mt-14 text-2xl text-ink">
                {t("tour.inclusionsOfThisTour")}
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {tour.inclusionsGrid!.map((item, i) => {
                  const expanded = expandedCards.has(i);
                  return (
                    <div
                      key={i}
                      className="rounded-2xl border border-ink/10 bg-white p-6"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                        <InclusionIconGraphic icon={item.icon} />
                      </div>
                      <h3 className="font-serif mt-4 text-base text-ink">
                        {pick(item.category, locale)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/65">
                        {pick(item.summary, locale)}
                      </p>
                      {item.details.length > 0 && (
                        <>
                          {expanded && (
                            <ul className="mt-3 space-y-1.5 text-sm text-ink/60">
                              {item.details.map((d, di) => (
                                <li key={di} className="flex items-start gap-2">
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-terracotta" />
                                  {pick(d, locale)}
                                </li>
                              ))}
                            </ul>
                          )}
                          <button
                            type="button"
                            onClick={() => toggleCard(i)}
                            className="mt-3 text-[10px] font-medium uppercase tracking-wide text-terracotta hover:text-terracotta-dark"
                          >
                            {expanded ? t("tour.readLess") : t("tour.readMore")}
                          </button>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Itinerary accordion */}
          <div id="itinerary" className="scroll-mt-40">
            <h2 className="font-serif mt-14 text-2xl text-ink">{t("tour.itinerary")}</h2>
            <div className="mt-6 space-y-3">
              {tour.itinerary.map((day, i) => {
                const isOpen = openDay === i;
                return (
                  <div
                    key={i}
                    className="overflow-hidden rounded-xl border border-ink/10 bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenDay(isOpen ? -1 : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <div>
                        <p className="text-xs uppercase tracking-widest text-terracotta">
                          {pick(day.day, locale)}
                        </p>
                        <h3 className="font-serif mt-1 text-lg text-ink">
                          {pick(day.title, locale)}
                        </h3>
                        {day.activityLine && !isOpen && (
                          <p className="mt-1 text-sm text-ink/55">
                            {pick(day.activityLine, locale)}
                          </p>
                        )}
                      </div>
                      <span
                        className={`shrink-0 text-xl text-ink/40 transition-transform ${isOpen ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div className="border-t border-ink/10 px-5 pb-5 pt-4">
                        {day.activityLine && (
                          <p className="text-sm font-medium text-ink/80">
                            {pick(day.activityLine, locale)}
                          </p>
                        )}
                        <p className="mt-2 text-sm leading-relaxed text-ink/65">
                          {pick(day.description, locale)}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hotel list */}
          {hasHotels && (
            <div id="hotels" className="scroll-mt-40">
              <h2 className="font-serif mt-14 text-2xl text-ink">{t("tour.hotelList")}</h2>
              <div className="mt-6 space-y-8">
                {tour.hotels!.map((tier, ti) => (
                  <div key={ti}>
                    <p className="text-xs uppercase tracking-widest text-terracotta">
                      {pick(tier.tierLabel, locale)}
                    </p>
                    <div className="mt-3 overflow-hidden rounded-xl border border-ink/10 bg-white">
                      <table className="w-full text-left text-sm">
                        <tbody>
                          {tier.hotels.map((h, hi) => (
                            <tr
                              key={hi}
                              className={hi > 0 ? "border-t border-ink/10" : ""}
                            >
                              <td className="px-5 py-3 text-ink/50">{pick(h.city, locale)}</td>
                              <td className="px-5 py-3 font-medium text-ink">
                                {pick(h.hotel, locale)}
                              </td>
                              <td className="px-5 py-3 text-right text-ink/55">
                                {pick(h.roomType, locale)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-relaxed text-ink/45">
                {t("tour.hotelListNote")}
              </p>
            </div>
          )}

          {/* Includes / excludes */}
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
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

          {/* FAQs */}
          {hasFaqs && (
            <div id="faqs" className="scroll-mt-40">
              <h2 className="font-serif mt-14 text-2xl text-ink">{t("tour.faqsHeading")}</h2>
              <div className="mt-6 space-y-3">
                {tour.faqs!.map((faq, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <div
                      key={i}
                      className="overflow-hidden rounded-xl border border-ink/10 bg-white"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      >
                        <h3 className="text-sm font-medium text-ink">
                          {pick(faq.question, locale)}
                        </h3>
                        <span
                          className={`shrink-0 text-xl text-ink/40 transition-transform ${isOpen ? "rotate-45" : ""}`}
                        >
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="border-t border-ink/10 px-5 pb-5 pt-4">
                          <p className="text-sm leading-relaxed text-ink/65">
                            {pick(faq.answer, locale)}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl border border-ink/10 bg-white p-8">
            <p className="text-xs uppercase tracking-widest text-terracotta">
              {t("tour.bookThisTour")}
            </p>
            <p className="font-serif mt-2 text-3xl text-ink">{tour.price}</p>
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

            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="text-xs uppercase tracking-widest text-ink/50">
                {t("tour.howItWorks")}
              </p>
              <ol className="mt-4 space-y-4">
                {[
                  { title: t("tour.step1Title"), body: t("tour.step1Body") },
                  { title: t("tour.step2Title"), body: t("tour.step2Body") },
                  { title: t("tour.step3Title"), body: t("tour.step3Body") },
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-xs font-medium text-terracotta">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-ink">{step.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink/55">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </aside>
      </section>

      {/* Similar tours */}
      {hasSimilar && (
        <section id="similar" className="scroll-mt-32 bg-sand/30 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <h2 className="font-serif text-2xl text-ink">{t("tour.similarToursHeading")}</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {similarTours.map((other) => (
                <TourCard key={other.slug} tour={other} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
