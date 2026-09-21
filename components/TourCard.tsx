"use client";

import Image from "next/image";
import Link from "next/link";
import type { Tour } from "@/lib/tours";
import { useLanguage } from "@/components/LanguageProvider";
import { pick } from "@/lib/i18n";

export default function TourCard({ tour }: { tour: Tour }) {
  const { locale } = useLanguage();
  const coverImage = tour.heroImages?.[0];

  return (
    <Link
      href={`/services/${tour.slug}`}
      className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow hover:shadow-xl"
    >
      <div className={`relative h-64 w-full overflow-hidden ${tour.gradient}`}>
        {coverImage && (
          <Image
            src={coverImage}
            alt={pick(tour.title, locale)}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-x-4 top-4 flex flex-wrap items-start gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-ink">
            {pick(tour.category, locale)}
          </span>
          {tour.tourType && (
            <span className="ml-auto rounded-full bg-terracotta px-3 py-1 text-[10px] uppercase tracking-widest text-white">
              {pick(tour.tourType, locale)}
            </span>
          )}
        </div>
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-terracotta">
          {pick(tour.location, locale)}
        </p>
        <h3 className="font-serif mt-2 text-xl text-ink">{pick(tour.title, locale)}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          {pick(tour.summary, locale)}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-sm">
          <span className="text-ink/60">{pick(tour.duration, locale)}</span>
          <span className="font-medium text-ink">{tour.price}</span>
        </div>
      </div>
    </Link>
  );
}
