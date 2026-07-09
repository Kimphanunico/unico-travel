import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { tours, getTourBySlug } from "@/lib/tours";
import TourDetail from "@/components/TourDetail";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  return {
    title: `${tour.title.en} | Unico Travel`,
    description: tour.summary.en,
  };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  return <TourDetail tour={tour} />;
}
