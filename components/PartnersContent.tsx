"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function PartnersContent() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {t("partners.tag")}
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          {t("partners.heading")}
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">{t("partners.body1")}</p>
        <p className="mt-4 leading-relaxed text-ink/65">{t("partners.body2")}</p>
        <p className="mt-4 leading-relaxed text-ink/65">{t("partners.body3")}</p>
      </section>

      <section className="mx-auto mt-14 max-w-3xl px-6 lg:px-10">
        <div className="rounded-2xl border border-ink/10 bg-white p-10 text-center">
          <h2 className="font-serif text-xl text-ink">{t("partners.getInTouch")}</h2>
          <p className="mt-3 text-sm text-ink/65">
            <a
              href="mailto:kim.phan@unicovisa.com.vn"
              className="text-ink hover:text-terracotta"
            >
              kim.phan@unicovisa.com.vn
            </a>
          </p>
          <p className="mt-2 text-sm text-ink/65">
            <a
              href="https://wa.me/84365473298"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-terracotta"
            >
              WhatsApp +84 365 473 298
            </a>
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-terracotta px-6 py-3 text-sm uppercase tracking-widest text-white hover:bg-terracotta-dark"
          >
            {t("partners.sendEnquiry")}
          </Link>
        </div>
      </section>

      <section id="tradeshows" className="mx-auto mt-20 max-w-3xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {t("partners.tradeshowsTag")}
        </p>
        <h2 className="font-serif mt-4 text-3xl text-ink">{t("partners.tradeshowsHeading")}</h2>
        <p className="mt-5 leading-relaxed text-ink/65">{t("partners.tradeshowsBody")}</p>
        <p className="mt-3 text-sm text-ink/50">
          {/* TODO: replace with real trade show names, dates and booth numbers, e.g. "ITB Berlin, March 2027" */}
          {t("partners.tradeshowsNote")}
        </p>
      </section>
    </div>
  );
}
