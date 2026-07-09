import type { Metadata } from "next";
import PartnersContent from "@/components/PartnersContent";

export const metadata: Metadata = {
  title: "Partner With Us | Unico Travel",
  description:
    "Partner with Unico Travel for tailor-made itineraries across Vietnam, Cambodia, Laos and Japan.",
};

export default function PartnersPage() {
  return <PartnersContent />;
}
