import type { Metadata } from "next";
import DestinationsIndex from "@/components/DestinationsIndex";

export const metadata: Metadata = {
  title: "Destinations | Unico Travel",
  description:
    "Unico Travel plans trips across Vietnam, Cambodia, Laos and Japan.",
};

export default function DestinationsPage() {
  return <DestinationsIndex />;
}
