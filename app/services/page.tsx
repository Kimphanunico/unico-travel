import type { Metadata } from "next";
import ServicesList from "@/components/ServicesList";
import { tours } from "@/lib/tours";

export const metadata: Metadata = {
  title: "Tours | Unico Travel",
  description:
    "Browse Unico Travel's small-group and private trips, from coastal escapes to mountain expeditions and safaris.",
};

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string; type?: string }>;
}) {
  const { country, type } = await searchParams;

  let filtered = tours;
  if (country) filtered = filtered.filter((t) => t.country === country);
  if (type) filtered = filtered.filter((t) => t.serviceType === type);

  return <ServicesList tours={filtered} country={country} type={type} />;
}
