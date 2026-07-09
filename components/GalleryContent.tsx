"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { loc, pick, type Localized } from "@/lib/i18n";

const PHOTOS: { caption: Localized; gradient: string; size: string }[] = [
  { caption: loc("Ha Long Bay, Vietnam", "Vịnh Hạ Long, Việt Nam"), gradient: "gradient-ocean", size: "row-span-2" },
  { caption: loc("Kyoto, Japan", "Kyoto, Nhật Bản"), gradient: "gradient-sunset", size: "" },
  { caption: loc("Zermatt, Switzerland", "Zermatt, Thụy Sĩ"), gradient: "gradient-snow", size: "" },
  { caption: loc("Serengeti, Tanzania", "Serengeti, Tanzania"), gradient: "gradient-sand", size: "" },
  { caption: loc("Ubud, Bali", "Ubud, Bali"), gradient: "gradient-forest", size: "row-span-2" },
  { caption: loc("Jokulsarlon, Iceland", "Jokulsarlon, Iceland"), gradient: "gradient-dusk", size: "" },
  { caption: loc("Hoi An, Vietnam", "Hội An, Việt Nam"), gradient: "gradient-sunset", size: "" },
  { caption: loc("Lucerne, Switzerland", "Lucerne, Thụy Sĩ"), gradient: "gradient-snow", size: "" },
];

export default function GalleryContent() {
  const { locale, t } = useLanguage();

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {t("gallery.tag")}
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          {t("gallery.heading")}
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">{t("gallery.body")}</p>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:grid-cols-4">
          {PHOTOS.map((photo, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl ${photo.gradient} ${photo.size}`}
            >
              <div className="absolute inset-0 flex items-end bg-black/0 p-4 opacity-0 transition-opacity group-hover:bg-black/30 group-hover:opacity-100">
                <span className="text-sm text-white">{pick(photo.caption, locale)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
