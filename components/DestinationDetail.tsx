"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import type { Destination } from "@/lib/destinations";
import type { Tour } from "@/lib/tours";
import TourCard from "@/components/TourCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useLanguage } from "@/components/LanguageProvider";
import { pick } from "@/lib/i18n";
import { DURATION_BUCKETS } from "@/lib/durationBuckets";

export default function DestinationDetail({
  destination,
  destinationTours,
}: {
  destination: Destination;
  destinationTours: Tour[];
}) {
  const { locale, t } = useLanguage();
  const name = pick(destination.name, locale);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Same fix as the homepage hero: some in-app browsers don't respect
    // the muted/playsInline JSX attributes on mount, which can block
    // autoplay or force the native fullscreen player. Setting these
    // explicitly via the DOM before calling play() avoids that.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay blocked — the poster/gradient stays visible instead.
      });
    }
  }, []);

  return (
    <div>
      {/* Spacer to clear the fixed header (always solid on this page),
          then the breadcrumb bar as its own plain strip. */}
      <div className="h-[72px] lg:h-[104px]" />
      <div className="border-b border-ink/10 bg-cream">
        <div className="mx-auto max-w-5xl px-6 py-3 lg:px-10">
          <Breadcrumbs
            items={[
              { label: t("nav.home"), href: "/" },
              { label: t("nav.destinations"), href: "/destinations" },
              { label: name },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <section className={`relative flex h-[62vh] min-h-[440px] items-end overflow-hidden ${destination.gradient}`}>
        {destination.video && (
          <video
            ref={videoRef}
            className="absolute inset-0 z-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            poster={destination.videoPoster}
            webkit-playsinline="true"
          >
            <source src={destination.video} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-10 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/75">
            {t("destinationDetail.tag")}
          </p>
          <h1 className="font-serif mt-4 text-5xl uppercase tracking-wide text-white sm:text-6xl">
            {name}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-white/85">
            {pick(destination.tagline, locale)}
          </p>
        </div>
      </section>

      {/* Intro + facts */}
      <section className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-10">
        {destination.intro.map((p, i) => (
          <p key={i} className="mt-5 leading-relaxed text-ink/70 first:mt-0">
            {pick(p, locale)}
          </p>
        ))}

        <div className="mx-auto mt-12 max-w-2xl border-t border-ink/10 pt-10">
          <h2 className="text-xs uppercase tracking-[0.3em] text-terracotta">
            {t("destinationDetail.goodToKnow")}
          </h2>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 text-center sm:grid-cols-4">
            {destination.facts.map((fact, i) => (
              <div key={i}>
                <dt className="text-[10px] uppercase tracking-[0.15em] text-terracotta/80">
                  {pick(fact.label, locale)}
                </dt>
                <dd className="font-serif mt-2 text-base text-ink">{pick(fact.value, locale)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Country map + stats (Vietnam only) */}
      {destination.mapStats && destination.mapImage && (
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
            <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
              {t("destinationDetail.tag")}
            </p>
            <h2 className="font-serif mt-3 text-3xl text-ink">
              {t("destinationDetail.mapHeading")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-ink/70">
              {t("destinationDetail.mapBody")}
            </p>

            <div className="mx-auto mt-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-ink/10">
              <Image
                src={destination.mapImage}
                alt={t("destinationDetail.mapHeading")}
                width={2000}
                height={1644}
                className="h-auto w-full"
              />
            </div>

            <div className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              {destination.mapStats.map((stat, i) => (
                <div key={i}>
                  <p className="font-serif text-3xl text-terracotta">{stat.value}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-ink/50">
                    {pick(stat.label, locale)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Region locator */}
      <section className="bg-sand/40 py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
            {t("destinationDetail.whereItSits")}
          </p>
          <h2 className="font-serif mt-3 text-2xl text-ink">
            {pick(destination.neighborsLabel, locale)}
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-6">
            <div className="flex flex-col items-center gap-2">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-terracotta text-sm font-medium text-white shadow-md sm:h-24 sm:w-24">
                {name}
              </span>
            </div>

            {destination.neighbors.map((n, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="h-px w-8 bg-ink/20 sm:w-12" />
                <div className="flex flex-col items-center gap-2">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-ink/20 bg-white text-xs text-ink/70 sm:h-16 sm:w-16">
                    {pick(n, locale)}
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
              {t("destinationDetail.trips")}
            </p>
            <h2 className="font-serif mt-3 text-3xl text-ink">
              {name} {t("destinationDetail.itineraries")}
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm uppercase tracking-widest text-ink underline decoration-terracotta underline-offset-8 hover:text-terracotta"
          >
            {t("services.viewAllTours")}
          </Link>
        </div>

        {/* Quick links by trip length, so travelers can jump straight to a
            fitting itinerary rather than scanning the whole list. */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {DURATION_BUCKETS.map((bucket) => {
            const durationLabel = pick(bucket.label, locale);
            const linkLabel =
              locale === "vi" ? `Tour ${name} ${durationLabel}` : `${name} Tours ${durationLabel}`;
            return (
              <Link
                key={bucket.key}
                href={`/services?country=${destination.slug}&days=${bucket.key}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-4 py-2 text-xs text-ink/70 hover:border-terracotta hover:text-terracotta"
              >
                {linkLabel}
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="shrink-0">
                  <path
                    d="M2.5 7.5L7.5 2.5M7.5 2.5H3.5M7.5 2.5V6.5"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            );
          })}
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
              {t("destinationDetail.noPackageHeading")}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              {t("destinationDetail.noPackageBody").replace("{name}", name)}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-sm uppercase tracking-widest text-white hover:bg-terracotta-dark"
            >
              {t("destinationDetail.requestCustom")}
            </Link>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="gradient-forest">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center text-white lg:px-10">
          <h2 className="font-serif text-balance text-3xl sm:text-4xl">
            {t("destinationDetail.ctaHeading")}
          </h2>
          <p className="mt-4 text-balance text-white/85">
            {t("destinationDetail.ctaBody").replace("{name}", name)}
          </p>
          <Link
            href="/contact"
            className="mt-7 inline-block rounded-full bg-white px-8 py-3 text-sm uppercase tracking-widest text-ink hover:bg-cream"
          >
            {t("destinationDetail.ctaButton")}
          </Link>
        </div>
      </section>
    </div>
  );
}
