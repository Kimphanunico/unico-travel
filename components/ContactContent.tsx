"use client";

import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          {t("contact.tag")}
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          {t("contact.heading")}
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">{t("contact.body")}</p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-12 px-6 lg:grid-cols-5 lg:px-10">
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-ink/10 bg-white p-8">
            <Suspense fallback={<p className="text-sm text-ink/50">...</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="rounded-2xl bg-forest p-8 text-cream">
            <h2 className="font-serif text-xl">{t("contact.detailsHeading")}</h2>
            <dl className="mt-6 space-y-4 text-sm text-cream/85">
              <div>
                <dt className="text-xs uppercase tracking-widest text-cream/50">{t("contact.email")}</dt>
                <dd className="mt-1">admin@unicovisa.com.vn</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-cream/50">{t("contact.phone")}</dt>
                <dd className="mt-1">+84 376 792 974</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-cream/50">{t("contact.office")}</dt>
                <dd className="mt-1">29A Nguyen Dinh Chieu, Saigon<br />Ho Chi Minh City</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-cream/50">{t("contact.hours")}</dt>
                <dd className="mt-1">{t("contact.hoursValue")}</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>
    </div>
  );
}
