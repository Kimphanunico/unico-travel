import type { Metadata } from "next";
import DentalTourismContent from "@/components/DentalTourismContent";

export const metadata: Metadata = {
  title: "Dental Tourism | Unico Travel",
  description:
    "Combine quality, affordable dental care in Vietnam with a proper vacation. Unico Travel plans your treatment and your trip together.",
};

export default function DentalTourismPage() {
  return <DentalTourismContent />;
}
