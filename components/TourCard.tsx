import Link from "next/link";
import type { Tour } from "@/lib/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/services/${tour.slug}`}
      className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow hover:shadow-xl"
    >
      <div className={`relative h-64 w-full overflow-hidden ${tour.gradient}`}>
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-widest text-ink">
          {tour.category}
        </div>
        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
      </div>
      <div className="p-6">
        <p className="text-xs uppercase tracking-widest text-terracotta">
          {tour.location}
        </p>
        <h3 className="font-serif mt-2 text-xl text-ink">{tour.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/65">
          {tour.summary}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-4 text-sm">
          <span className="text-ink/60">{tour.duration}</span>
          <span className="font-medium text-ink">{tour.price}</span>
        </div>
      </div>
    </Link>
  );
}
