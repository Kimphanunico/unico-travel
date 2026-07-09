import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Unico Travel",
  description:
    "Tell Unico Travel about your next trip and a trip designer will follow up within 1-2 business days.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          Get in touch
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          Let's plan your trip
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">
          Fill out the form below and a trip designer will follow up within
          1-2 business days with ideas and next steps.
        </p>
      </section>

      <section className="mx-auto mt-16 grid max-w-6xl gap-12 px-6 lg:grid-cols-5 lg:px-10">
        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-ink/10 bg-white p-8">
            <Suspense fallback={<p className="text-sm text-ink/50">Loading form...</p>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="rounded-2xl bg-forest p-8 text-cream">
            <h2 className="font-serif text-xl">Contact details</h2>
            <dl className="mt-6 space-y-4 text-sm text-cream/85">
              <div>
                <dt className="text-xs uppercase tracking-widest text-cream/50">Email</dt>
                <dd className="mt-1">hello@unicotravel.com</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-cream/50">Phone</dt>
                <dd className="mt-1">+1 (555) 200 3948</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-cream/50">Office</dt>
                <dd className="mt-1">142 Harbor Street, Suite 5<br />San Diego, CA 92101</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-cream/50">Hours</dt>
                <dd className="mt-1">Mon-Fri, 9am-6pm PT</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>
    </div>
  );
}
