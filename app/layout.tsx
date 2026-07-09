import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Unico Travel | Journeys Worth Remembering",
  description:
    "Unico Travel designs thoughtfully crafted trips across the globe — from coastal escapes to mountain expeditions. Let's plan your next journey.",
  metadataBase: new URL("https://unicotravel.example.com"),
  openGraph: {
    title: "Unico Travel | Journeys Worth Remembering",
    description:
      "Thoughtfully crafted trips across the globe. Let's plan your next journey.",
    siteName: "Unico Travel",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
