"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { pick } from "@/lib/i18n";
import { DURATION_BUCKETS } from "@/lib/durationBuckets";
import { TRAVEL_STYLES } from "@/lib/travelStyles";

// Fully rounded "search bar" style finder -- Travel Style + Duration
// dropdowns and a single button, so visitors can narrow the list instead of
// scanning every card. Pill-shaped on purpose (no sharp corners).
export default function TourStyleFinder({
  country,
  availableStyleKeys,
}: {
  country: string;
  availableStyleKeys: string[];
}) {
  const { locale, t } = useLanguage();
  const router = useRouter();
  const [style, setStyle] = useState("");
  const [days, setDays] = useState("");

  const styles = useMemo(
    () => TRAVEL_STYLES.filter((s) => availableStyleKeys.includes(s.key)),
    [availableStyleKeys]
  );

  function handleFind() {
    const params = new URLSearchParams({ country });
    if (style) params.set("style", style);
    if (days) params.set("days", days);
    router.push(`/services?${params.toString()}`);
  }

  // Poppins is the site's English-only trial font (no Vietnamese glyph
  // coverage), so it's applied here explicitly rather than relying on the
  // font-serif utility, which is meant for serif headings, not this bar.
  const poppinsStyle =
    locale === "en" ? { fontFamily: "var(--font-poppins), var(--font-sans)" } : undefined;

  return (
    <div
      className="mx-auto mt-8 flex max-w-3xl flex-col gap-2 rounded-3xl border border-ink/10 bg-white p-2 shadow-sm sm:flex-row sm:items-center sm:rounded-full"
      style={poppinsStyle}
    >
      <div className="flex flex-1 items-center gap-2 rounded-full px-5 py-2.5">
        <span className="shrink-0 text-xs uppercase tracking-wide text-ink/45">
          {t("destinationDetail.travelStyle")}
        </span>
        <select
          value={style}
          onChange={(e) => setStyle(e.target.value)}
          className="w-full flex-1 truncate bg-transparent text-sm text-ink outline-none"
        >
          <option value="">{t("destinationDetail.allStyles")}</option>
          {styles.map((s) => (
            <option key={s.key} value={s.key}>
              {pick(s.label, locale)}
            </option>
          ))}
        </select>
      </div>

      <div className="hidden h-8 w-px bg-ink/10 sm:block" />

      <div className="flex flex-1 items-center gap-2 rounded-full px-5 py-2.5">
        <span className="shrink-0 text-xs uppercase tracking-wide text-ink/45">
          {t("destinationDetail.duration")}
        </span>
        <select
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full flex-1 truncate bg-transparent text-sm text-ink outline-none"
        >
          <option value="">{t("destinationDetail.allDurations")}</option>
          {DURATION_BUCKETS.map((bucket) => (
            <option key={bucket.key} value={bucket.key}>
              {pick(bucket.label, locale)}
            </option>
          ))}
        </select>
      </div>

      <button
        type="button"
        onClick={handleFind}
        className="shrink-0 rounded-full bg-terracotta px-8 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:bg-terracotta-dark"
      >
        {t("destinationDetail.findTour")}
      </button>
    </div>
  );
}
