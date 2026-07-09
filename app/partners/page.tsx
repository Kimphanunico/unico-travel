import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner With Us | Unico Travel",
  description:
    "Partner with Unico Travel for tailor-made itineraries across Vietnam, Cambodia, Laos and Japan.",
};

export default function PartnersPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          For Agencies & Wholesalers
        </p>
        <h1 className="font-serif mt-5 text-4xl text-ink sm:text-5xl">
          Partner With Us
        </h1>
        <p className="mt-6 leading-relaxed text-ink/65">
          With years of experience crafting unique journeys, Unico Travel
          keeps reinventing what travel across Vietnam, Cambodia, Laos and
          Japan can look like. Every itinerary we design is exclusive to our
          partners, priced to stay competitive, and backed by an operations
          team that keeps things running smoothly long after the contract is
          signed.
        </p>
        <p className="mt-4 leading-relaxed text-ink/65">
          We work with travel agencies, wholesalers and independent planners
          who want a partner they can rely on, not just a supplier. If that
          sounds like a good fit, we would love to hear from you.
        </p>
      </section>

      <section className="mx-auto mt-14 max-w-3xl px-6 lg:px-10">
        <div className="rounded-2xl border border-ink/10 bg-white p-10 text-center">
          <h2 className="font-serif text-xl text-ink">Get in touch</h2>
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
            Send an Enquiry
          </Link>
        </div>
      </section>

      <section id="tradeshows" className="mx-auto mt-20 max-w-3xl px-6 text-center lg:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-terracotta">
          Meet Us In Person
        </p>
        <h2 className="font-serif mt-4 text-3xl text-ink">Trade Shows</h2>
        <p className="mt-5 leading-relaxed text-ink/65">
          We attend a number of travel trade shows and workshops throughout
          the year to meet partners face to face. Details of upcoming events
          will be listed here soon.
        </p>
        <p className="mt-3 text-sm text-ink/50">
          {/* TODO: replace with real trade show names, dates and booth numbers, e.g. "ITB Berlin, March 2027" */}
          Have an event you would like to meet us at? Let us know and we
          will do our best to be there.
        </p>
      </section>
    </div>
  );
}
