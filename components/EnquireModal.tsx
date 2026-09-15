"use client";

import { useState, type FormEvent } from "react";
import Modal from "@/components/Modal";
import { BUDGET_RANGES } from "@/lib/budgetRanges";
import { useLanguage } from "@/components/LanguageProvider";
import { pick } from "@/lib/i18n";

type Status = "idle" | "submitting" | "success" | "error";

const PHONE_NUMBER = "+84 376 792 974";
const PHONE_HREF = "tel:+84376792974";
const EMAIL_ADDRESS = "admin@unicovisa.com.vn";

const inputClass =
  "mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta";
const labelClass = "text-xs uppercase tracking-widest text-ink/60";

export default function EnquireModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { locale, t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const fd = new FormData(form);
    const name = fd.get("name");
    const email = fd.get("email");
    const phone = fd.get("phone");
    const budget = fd.get("budget");
    const message = fd.get("message");

    const fullMessage = budget ? `${message}\n\n${t("enquireModal.budget")}: ${budget}` : message;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message: fullMessage }),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? t("contact.errorGeneric"));
        return;
      }

      setStatus("success");
      form.reset();
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
    <Modal open={open} onClose={handleClose} title={t("enquireModal.heading")}>
      {status === "success" ? (
        <div className="py-6 text-center">
          <h3 className="font-serif text-xl text-ink">{t("enquireModal.successTitle")}</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink/65">
            {t("enquireModal.successBody")}
          </p>
        </div>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="text-sm leading-relaxed text-ink/65">{t("enquireModal.intro")}</p>

            <div>
              <label htmlFor="enq-message" className={labelClass}>
                {t("enquireModal.message")} *
              </label>
              <textarea
                id="enq-message"
                name="message"
                required
                rows={4}
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label htmlFor="enq-name" className={labelClass}>
                  {t("enquireModal.fullName")} *
                </label>
                <input id="enq-name" name="name" type="text" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="enq-email" className={labelClass}>
                  {t("enquireModal.email")} *
                </label>
                <input id="enq-email" name="email" type="email" required className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div>
                <label htmlFor="enq-phone" className={labelClass}>
                  {t("enquireModal.phone")}
                </label>
                <input id="enq-phone" name="phone" type="tel" className={inputClass} />
              </div>
              <div>
                <label htmlFor="enq-budget" className={labelClass}>
                  {t("enquireModal.budget")}
                </label>
                <select id="enq-budget" name="budget" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    {t("enquireModal.budgetPlaceholder")}
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
              {t("enquireModal.budgetNote")}
            </p>

            {status === "error" && <p className="text-sm text-terracotta-dark">{errorMessage}</p>}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full rounded-full bg-terracotta px-6 py-3 text-sm uppercase tracking-widest text-white transition-colors hover:bg-terracotta-dark disabled:opacity-60"
            >
              {status === "submitting" ? t("enquireModal.submitting") : t("enquireModal.submit")}
            </button>
          </form>

          <div className="mt-6 space-y-2 border-t border-ink/10 pt-6 text-center text-sm">
            <p className="text-ink/60">
              {t("enquireModal.callUs")}:{" "}
              <a href={PHONE_HREF} className="font-medium text-terracotta hover:text-terracotta-dark">
                {PHONE_NUMBER}
              </a>
            </p>
            <p className="text-ink/60">
              {t("enquireModal.emailUs")}:{" "}
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="font-medium text-terracotta hover:text-terracotta-dark"
              >
                {EMAIL_ADDRESS}
              </a>
            </p>
          </div>
        </>
      )}
    </Modal>
  );
}
