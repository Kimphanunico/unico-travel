"use client";

import Link from "next/link";
import { destinations } from "@/lib/destinations";
import { useLanguage } from "@/components/LanguageProvider";
import { pick } from "@/lib/i18n";

export default function DestinationsIndex() {
  const { locale, t } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {t("destinationsIndex.tag")}
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          {t("destinationsIndex.heading")}
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">
          {t("destinationsIndex.body")}
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
                <h2 className="font-serif text-3xl text-white">{pick(d.name, locale)}</h2>
                <p className="mt-2 max-w-xs text-sm text-white/80">
                  {pick(d.tagline, locale)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
