"use client";

import Link from "next/link";
import TourCard from "@/components/TourCard";
import type { Tour } from "@/lib/tours";
import { useLanguage } from "@/components/LanguageProvider";
import { pick } from "@/lib/i18n";

const COUNTRY_LABELS: Record<string, { en: string; vi: string }> = {
  vietnam: { en: "Vietnam", vi: "Việt Nam" },
  cambodia: { en: "Cambodia", vi: "Campuchia" },
  laos: { en: "Laos", vi: "Lào" },
  japan: { en: "Japan", vi: "Nhật Bản" },
  switzerland: { en: "Switzerland", vi: "Thụy Sĩ" },
  tanzania: { en: "Tanzania", vi: "Tanzania" },
  indonesia: { en: "Indonesia", vi: "Indonesia" },
  iceland: { en: "Iceland", vi: "Iceland" },
};

const TYPE_LABELS: Record<string, { en: string; vi: string }> = {
  "tailor-made": { en: "Tailor-Made", vi: "Trọn Gói Riêng" },
  luxury: { en: "Luxury", vi: "Cao Cấp" },
  events: { en: "Events", vi: "Sự Kiện" },
  group: { en: "Group", vi: "Đoàn" },
};

export default function ServicesList({
  tours,
  country,
  type,
}: {
  tours: Tour[];
  country?: string;
  type?: string;
}) {
  const { locale, t } = useLanguage();

  const activeLabel = country
    ? pick(COUNTRY_LABELS[country] ?? { en: country, vi: country }, locale)
    : type
    ? pick(TYPE_LABELS[type] ?? { en: type, vi: type }, locale)
    : null;

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {activeLabel
            ? `${activeLabel} ${locale === "vi" ? "" : "Tours"}`.trim()
            : t("services.tag")}
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          {activeLabel
            ? locale === "vi"
              ? `Hành trình tại ${activeLabel}`
              : `Trips in ${activeLabel}`
            : t("services.heading")}
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">{t("services.body")}</p>
        {activeLabel && (
          <Link
            href="/services"
            className="mt-4 inline-block text-sm uppercase tracking-widest text-ink underline decoration-terracotta underline-offset-8 hover:text-terracotta"
          >
            {t("services.viewAllTours")}
          </Link>
        )}
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 pb-24 lg:px-10">
        {tours.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-xl rounded-2xl border border-ink/10 bg-white p-10 text-center">
            <h2 className="font-serif text-xl text-ink">
              {t("services.noPackageHeading")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">
              {activeLabel
                ? t("services.noPackageBody").replace("{label}", activeLabel)
                : t("services.noPackageBodyGeneric")}
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-sm uppercase tracking-widest text-white hover:bg-terracotta-dark"
            >
              {t("services.requestCustom")}
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
