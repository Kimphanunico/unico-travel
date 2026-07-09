"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-serif text-2xl tracking-wide">
              UNICO <span className="text-terracotta">TRAVEL</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
              {t("footer.tagline")}
            </p>
            <div className="mt-6 flex gap-4 text-sm text-cream/70">
              <a href="#" className="hover:text-terracotta">Instagram</a>
              <a href="#" className="hover:text-terracotta">Facebook</a>
              <a href="#" className="hover:text-terracotta">TikTok</a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/50">
              {t("footer.exploreHeading")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/destinations" className="text-cream/80 hover:text-terracotta">{t("footer.destinations")}</Link></li>
              <li><Link href="/services" className="text-cream/80 hover:text-terracotta">{t("footer.allTours")}</Link></li>
              <li><Link href="/about" className="text-cream/80 hover:text-terracotta">{t("footer.aboutUs")}</Link></li>
              <li><Link href="/gallery" className="text-cream/80 hover:text-terracotta">{t("footer.gallery")}</Link></li>
              <li><Link href="/blog" className="text-cream/80 hover:text-terracotta">{t("footer.news")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-cream/50">
              {t("footer.contactHeading")}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li>admin@unicovisa.com.vn</li>
              <li>+84 376 792 974</li>
              <li>29A Nguyen Dinh Chieu, Saigon<br />Ho Chi Minh City</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-8 text-xs text-cream/50 md:flex-row">
          <p>&copy; {new Date().getFullYear()} {t("footer.copyright")}</p>
          <p>{t("footer.designedFor")}</p>
        </div>
      </div>
    </footer>
  );
}
