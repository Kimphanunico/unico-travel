import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContactBar from "@/components/FloatingContactBar";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE_URL } from "@/lib/site";

// Trial font for the English site only (Poppins has no Vietnamese glyph
// coverage on Google Fonts, so the Vietnamese version keeps the original
// serif headings). Toggled on via the html[data-locale="en"] rule in
// globals.css, switched at runtime by LanguageProvider.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

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
  verification: {
    google: "sECprBaiZFwT4tnERMzj7YlQXTMYJuw8_0S1T1oU-eU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-locale="en" className={`h-full antialiased ${poppins.variable}`}>
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingContactBar />
        </LanguageProvider>
      </body>
    </html>
  );
}
