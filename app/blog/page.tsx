import type { Metadata } from "next";
import BlogContent from "@/components/BlogContent";

export const metadata: Metadata = {
  title: "Journal | Unico Travel",
  description: "Stories, guides, and notes from Unico Travel's trip designers.",
};

export default function BlogPage() {
  return <BlogContent />;
}
