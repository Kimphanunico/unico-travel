import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: "Unico Travel Vietnam DMC | Journeys Worth Remembering",
    template: "%s | Unico Travel Vietnam DMC",
  },
  description:
    "Unico Travel designs thoughtfully crafted trips across the globe, from coastal escapes to mountain expeditions. Let's plan your next journey.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Unico Travel Vietnam DMC | Journeys Worth Remembering",
    description:
      "Thoughtfully crafted trips across the globe. Let's plan your next journey.",
    siteName: "Unico Travel Vietnam DMC",
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
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
