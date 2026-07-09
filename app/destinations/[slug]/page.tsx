import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations, getDestinationBySlug } from "@/lib/destinations";
import { tours } from "@/lib/tours";
import DestinationDetail from "@/components/DestinationDetail";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};
  return {
    title: `${destination.name.en} | Unico Travel`,
    description: destination.tagline.en,
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  const destinationTours = tours.filter((t) => t.country === destination.slug);

  return <DestinationDetail destination={destination} destinationTours={destinationTours} />;
}
