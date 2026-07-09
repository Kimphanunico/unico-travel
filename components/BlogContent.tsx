"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { loc, pick, type Localized } from "@/lib/i18n";

const POSTS: {
  title: Localized;
  excerpt: Localized;
  category: Localized;
  gradient: string;
  date: Localized;
}[] = [
  {
    title: loc(
      "How We Plan a Trip: Inside the Unico Process",
      "Cách chúng tôi lên kế hoạch: Bên trong quy trình của Unico"
    ),
    excerpt: loc(
      "From first call to final itinerary, a look at how our trip designers build every journey by hand.",
      "Từ cuộc gọi đầu tiên đến lịch trình hoàn chỉnh, xem cách đội ngũ thiết kế hành trình của chúng tôi xây dựng từng chuyến đi thủ công."
    ),
    category: loc("Behind the Scenes", "Hậu trường"),
    gradient: "gradient-forest",
    date: loc("June 2026", "Tháng 6 năm 2026"),
  },
  {
    title: loc(
      "Best Time to Visit Vietnam's Coast",
      "Thời điểm lý tưởng để ghé thăm bờ biển Việt Nam"
    ),
    excerpt: loc(
      "A season-by-season breakdown of weather, crowds, and pricing along Vietnam's central coastline.",
      "Phân tích theo từng mùa về thời tiết, lượng khách và giá cả dọc bờ biển miền Trung Việt Nam."
    ),
    category: loc("Destination Guide", "Cẩm nang điểm đến"),
    gradient: "gradient-ocean",
    date: loc("May 2026", "Tháng 5 năm 2026"),
  },
  {
    title: loc(
      "Packing for the Swiss Alps in Any Season",
      "Sắp xếp hành lý cho dãy Alps Thụy Sĩ ở mọi mùa"
    ),
    excerpt: loc(
      "What our guides actually pack for alpine trips, from shoulder-season layers to summer hiking gear.",
      "Những gì hướng dẫn viên của chúng tôi thực sự mang theo cho chuyến đi núi Alps, từ trang phục mùa giao mùa đến đồ leo núi mùa hè."
    ),
    category: loc("Travel Tips", "Mẹo du lịch"),
    gradient: "gradient-snow",
    date: loc("April 2026", "Tháng 4 năm 2026"),
  },
];

export default function BlogContent() {
  const { locale, t } = useLanguage();

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {t("blog.tag")}
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          {t("blog.heading")}
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">{t("blog.body")}</p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {POSTS.map((post, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-2xl border border-ink/10 bg-white"
            >
              <div className={`h-48 w-full ${post.gradient}`} />
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-terracotta">
                  {pick(post.category, locale)} &middot; {pick(post.date, locale)}
                </p>
                <h2 className="font-serif mt-3 text-xl text-ink">
                  {pick(post.title, locale)}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {pick(post.excerpt, locale)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
