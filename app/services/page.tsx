import type { Metadata } from "next";
import ServicesList from "@/components/ServicesList";
import { tours } from "@/lib/tours";
import { parseDurationRange } from "@/lib/durationBuckets";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Browse Unico Travel's small-group and private trips, from coastal escapes to mountain expeditions and safaris.",
};

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string; type?: string; days?: string }>;
}) {
  const { country, type, days } = await searchParams;

  let filtered = tours;
  if (country) filtered = filtered.filter((t) => t.country === country);
  if (type) filtered = filtered.filter((t) => t.serviceType === type);

  const durationRange = days ? parseDurationRange(days) : null;
  if (durationRange) {
    filtered = filtered.filter((t) => t.days >= durationRange.min && t.days <= durationRange.max);
  }

  return <ServicesList tours={filtered} country={country} type={type} days={days} />;
}
