import type { Metadata } from "next";
import DestinationsIndex from "@/components/DestinationsIndex";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Unico Travel plans trips across Vietnam, Cambodia, Laos and Japan.",
};

export default function DestinationsPage() {
  return <DestinationsIndex />;
}
