import type { Metadata } from "next";
import GalleryContent from "@/components/GalleryContent";

export const metadata: Metadata = {
  title: "Gallery | Unico Travel",
  description: "A look at the places and moments Unico Travel has visited.",
};

export default function GalleryPage() {
  return <GalleryContent />;
}
