"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { ui } from "@/lib/i18n";

export default function DentalTourismContent() {
  const { locale, t } = useLanguage();
  const dental = ui[locale].dentalTourism;

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {t("dentalTourism.tag")}
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          {t("dentalTourism.heading")}
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">{t("dentalTourism.intro")}</p>
        <Link
          href="/contact?tour=Dental%20Tourism"
          className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-terracotta-dark"
        >
          {t("dentalTourism.ctaButton")}
        </Link>
      </section>

      {/* Why Vietnam */}
      <section className="mx-auto mt-24 max-w-6xl px-6 lg:px-10">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-terracotta">
          {t("dentalTourism.whyTag")}
        </p>
        <h2 className="font-serif mt-4 text-center text-3xl text-ink sm:text-4xl">
          {t("dentalTourism.whyHeading")}
        </h2>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {dental.why.map((item) => (
            <div key={item.title} className="border-t border-ink/15 pt-6">
              <h3 className="font-serif text-lg text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-sand/40 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-terracotta">
            {t("dentalTourism.howTag")}
          </p>
          <h2 className="font-serif mt-4 text-center text-3xl text-ink sm:text-4xl">
            {t("dentalTourism.howHeading")}
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dental.how.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-ink/10 bg-white p-7">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-sm font-medium text-white">
                  {i + 1}
                </div>
                <h3 className="font-serif mt-4 text-lg text-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner clinics */}
      <section className="mx-auto mt-24 max-w-3xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {t("dentalTourism.partnersTag")}
        </p>
        <h2 className="font-serif mt-4 text-3xl text-ink">
          {t("dentalTourism.partnersHeading")}
        </h2>
        <p className="mt-5 leading-relaxed text-ink/65">{t("dentalTourism.partnersBody")}</p>
        <p className="mt-3 text-sm text-ink/50">
          {/* TODO: replace with real partner clinic names, procedures offered and price ranges once confirmed */}
          {t("dentalTourism.partnersNote")}
        </p>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-20 max-w-3xl px-6 text-center lg:px-10">
        <div className="rounded-2xl border border-ink/10 bg-white p-10">
          <h2 className="font-serif text-2xl text-ink">{t("dentalTourism.ctaHeading")}</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            {t("dentalTourism.ctaBody")}
          </p>
          <Link
            href="/contact?tour=Dental%20Tourism"
            className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-sm uppercase tracking-widest text-white hover:bg-terracotta-dark"
          >
            {t("dentalTourism.ctaButton")}
          </Link>
        </div>
      </section>
    </div>
  );
}
