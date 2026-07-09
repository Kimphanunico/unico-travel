import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact | Unico Travel",
  description:
    "Tell Unico Travel about your next trip and a trip designer will follow up within 1-2 business days.",
};

export default function ContactPage() {
  return <ContactContent />;
}
