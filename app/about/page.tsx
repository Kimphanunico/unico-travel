import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About | Unico Travel",
  description:
    "Meet Unico Travel, a small team of trip designers building thoughtful journeys across the world.",
};

export default function AboutPage() {
  return <AboutContent />;
}
