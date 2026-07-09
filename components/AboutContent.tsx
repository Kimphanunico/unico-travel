"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { ui } from "@/lib/i18n";

const TEAM_GRADIENTS = ["gradient-sunset", "gradient-forest", "gradient-ocean", "gradient-sand"];

export default function AboutContent() {
  const { locale, t } = useLanguage();
  const about = ui[locale].about;

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {t("about.tag")}
        </p>
        <h1 className="font-serif text-balance mt-5 text-4xl leading-tight text-ink sm:text-5xl">
          {t("about.heading")}
        </h1>
        <p className="mt-6 text-balance leading-relaxed text-ink/65">
          {t("about.body")}
        </p>
      </section>

      {/* Image band */}
      <section className="mt-16 grid grid-cols-2 gap-3 px-6 sm:grid-cols-4 lg:px-10">
        <div className="h-40 rounded-xl gradient-ocean sm:h-56" />
        <div className="h-40 rounded-xl gradient-sunset sm:h-56" />
        <div className="h-40 rounded-xl gradient-forest sm:h-56" />
        <div className="h-40 rounded-xl gradient-sand sm:h-56" />
      </section>

      {/* Stats */}
      <section className="mx-auto mt-24 max-w-5xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 rounded-2xl border border-ink/10 bg-white p-10 sm:grid-cols-4">
          {about.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-3xl text-terracotta">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-widest text-ink/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-6xl px-6 py-24 lg:px-10">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-terracotta">
          {t("about.valuesTag")}
        </p>
        <h2 className="font-serif mt-4 text-center text-3xl text-ink sm:text-4xl">
          {t("about.valuesHeading")}
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {about.values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-ink/10 bg-white p-8">
              <h3 className="font-serif text-xl text-ink">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-sand/40 py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-terracotta">
            {t("about.teamTag")}
          </p>
          <h2 className="font-serif mt-4 text-center text-3xl text-ink sm:text-4xl">
            {t("about.teamHeading")}
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {about.team.map((member, i) => (
              <div key={member.name} className="text-center">
                <div className={`mx-auto h-40 w-40 rounded-full ${TEAM_GRADIENTS[i % TEAM_GRADIENTS.length]}`} />
                <h3 className="font-serif mt-5 text-lg text-ink">{member.name}</h3>
                <p className="text-xs uppercase tracking-widest text-ink/50">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-10">
        <h2 className="font-serif text-balance text-3xl text-ink sm:text-4xl">
          {t("about.ctaHeading")}
        </h2>
        <p className="mt-5 text-balance text-ink/65">
          {t("about.ctaBody")}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-full bg-terracotta px-8 py-3 text-sm uppercase tracking-widest text-white hover:bg-terracotta-dark"
        >
          {t("about.ctaButton")}
        </Link>
      </section>
    </div>
  );
}
