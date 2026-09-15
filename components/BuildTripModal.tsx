"use client";

import { useState, type FormEvent } from "react";
import Modal from "@/components/Modal";
import SuccessAnimation from "@/components/SuccessAnimation";
import { destinations } from "@/lib/destinations";
import { BUDGET_RANGES } from "@/lib/budgetRanges";
import { useLanguage } from "@/components/LanguageProvider";
import { pick } from "@/lib/i18n";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta";
const labelClass = "text-xs uppercase tracking-widest text-ink/60";

export default function BuildTripModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { locale, t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const fd = new FormData(form);
    const name = fd.get("name");
    const email = fd.get("email");
    const phone = fd.get("phone");
    const destination = (fd.get("destination") as string) || selectedDestination;
    const interests = fd.get("interests");
    const adults = fd.get("adults");
    const children = fd.get("children");
    const tourClass = fd.get("tourClass");
    const when = fd.get("when");
    const duration = fd.get("duration");
    const notes = fd.get("notes");
    const budget = fd.get("budget");

    const travelers = [
      adults ? `${adults} ${t("buildModal.adults")}` : "",
      children ? `${children} ${t("buildModal.children")}` : "",
    ]
      .filter(Boolean)
      .join(", ");

    const message = [
      interests ? `${t("buildModal.interests")}: ${interests}` : "",
      tourClass ? `${t("buildModal.tourClass")}: ${tourClass}` : "",
      duration ? `${t("buildModal.duration")}: ${duration}` : "",
      budget ? `${t("buildModal.budget")}: ${budget}` : "",
      notes ? `${t("buildModal.notes")}: ${notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          destination,
          travelDates: when,
          travelers,
          message: message || "Create Own Tour request",
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? t("contact.errorGeneric"));
        return;
      }

      setStatus("success");
      form.reset();
      setSelectedDestination("");
    } catch {
      setStatus("error");
      setErrorMessage(t("contact.errorNetwork"));
    }
  }

  function handleClose() {
    onClose();
    if (status === "success") setStatus("idle");
  }

  return (
    <Modal open={open} onClose={handleClose} title={t("buildModal.heading")}>
      {status === "success" ? (
        <div className="py-4 text-center">
          <SuccessAnimation className="mx-auto h-36 w-auto" />
          <h3 className="font-serif mt-2 text-2xl text-ink">{t("buildModal.successTitle")}</h3>
          <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-ink/65">
            {t("buildModal.successBody")}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <p className="text-sm leading-relaxed text-ink/65">{t("buildModal.intro")}</p>

          <div>
            <label className={labelClass}>{t("buildModal.destination")}</label>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {destinations.map((d) => {
                const label = pick(d.name, locale);
                const isSelected = selectedDestination === label;
                return (
                  <button
                    key={d.slug}
                    type="button"
                    onClick={() => setSelectedDestination(isSelected ? "" : label)}
                    className={`overflow-hidden rounded-lg border text-left transition-colors ${
                      isSelected ? "border-terracotta" : "border-ink/10 hover:border-ink/25"
                    }`}
                  >
                    <div className={`h-12 w-full ${d.gradient}`} />
                    <p className="px-2 py-1.5 text-[11px] font-medium uppercase tracking-wide text-ink">
                      {label}
                    </p>
                  </button>
                );
              })}
            </div>
            <input type="hidden" name="destination" value={selectedDestination} />
          </div>

          <div>
            <label htmlFor="interests" className={labelClass}>
              {t("buildModal.interests")}
            </label>
            <input
              id="interests"
              name="interests"
              type="text"
              placeholder={t("buildModal.interestsPlaceholder")}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="adults" className={labelClass}>
                {t("buildModal.adults")} *
              </label>
              <input
                id="adults"
                name="adults"
                type="number"
                min={1}
                defaultValue={2}
                required
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="children" className={labelClass}>
                {t("buildModal.children")}
              </label>
              <input id="children" name="children" type="number" min={0} defaultValue={0} className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="tourClass" className={labelClass}>
                {t("buildModal.tourClass")}
              </label>
              <select id="tourClass" name="tourClass" className={inputClass}>
                <option value={t("buildModal.tourClassStandard")}>
                  {t("buildModal.tourClassStandard")}
                </option>
                <option value={t("buildModal.tourClassDeluxe")}>
                  {t("buildModal.tourClassDeluxe")}
                </option>
                <option value={t("buildModal.tourClassLuxury")}>
                  {t("buildModal.tourClassLuxury")}
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="when" className={labelClass}>
                {t("buildModal.when")}
              </label>
              <input
                id="when"
                name="when"
                type="text"
                placeholder={t("buildModal.whenPlaceholder")}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="duration" className={labelClass}>
              {t("buildModal.duration")}
            </label>
            <input id="duration" name="duration" type="number" min={1} className={inputClass} />
          </div>

          <div>
            <label htmlFor="notes" className={labelClass}>
              {t("buildModal.notes")}
            </label>
            <textarea id="notes" name="notes" rows={3} className={inputClass} />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="build-name" className={labelClass}>
                {t("buildModal.fullName")} *
              </label>
              <input id="build-name" name="name" type="text" required className={inputClass} />
            </div>
            <div>
              <label htmlFor="build-email" className={labelClass}>
                {t("buildModal.email")} *
              </label>
              <input id="build-email" name="email" type="email" required className={inputClass} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label htmlFor="build-phone" className={labelClass}>
                {t("buildModal.phone")}
              </label>
              <input id="build-phone" name="phone" type="tel" className={inputClass} />
            </div>
            <div>
              <label htmlFor="budget" className={labelClass}>
                {t("buildModal.budget")}
              </label>
              <select id="budget" name="budget" defaultValue="" className={inputClass}>
                <option value="" disabled>
                  {t("buildModal.budgetPlaceholder")}
                </option>
                {BUDGET_RANGES.map((b, i) => (
                  <option key={i} value={pick(b, locale)}>
                    {pick(b, locale)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <p className="-mt-2 text-xs italic leading-relaxed text-ink/45">
            {t("buildModal.budgetNote")}
          </p>

          {status === "error" && <p className="text-sm text-terracotta-dark">{errorMessage}</p>}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-full bg-terracotta px-6 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-terracotta-dark disabled:opacity-60"
          >
            {status === "submitting" ? t("buildModal.submitting") : t("buildModal.submit")}
          </button>
        </form>
      )}
    </Modal>
  );
}
