"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { pick, type Locale, type Localized } from "@/lib/i18n";

const DESTINATIONS: { href: string; label: Localized }[] = [
  { href: "/destinations/vietnam", label: { en: "Vietnam", vi: "Việt Nam" } },
  { href: "/destinations/cambodia", label: { en: "Cambodia", vi: "Campuchia" } },
  { href: "/destinations/laos", label: { en: "Laos", vi: "Lào" } },
  { href: "/destinations/japan", label: { en: "Japan", vi: "Nhật Bản" } },
];

const SERVICE_TYPES: { href: string; label: Localized }[] = [
  { href: "/services?type=tailor-made", label: { en: "Tailor-Made", vi: "Trọn Gói Riêng" } },
  { href: "/services?type=luxury", label: { en: "Luxury", vi: "Cao Cấp" } },
  { href: "/services?type=events", label: { en: "Events", vi: "Sự Kiện" } },
  { href: "/services?type=group", label: { en: "Group", vi: "Đoàn" } },
  { href: "/dental-tourism", label: { en: "Dental Tourism", vi: "Du Lịch Nha Khoa" } },
];

const LANGUAGES: { code: Locale; label: string }[] = [
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { locale, setLocale, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome || menuOpen;
  const linkColor = solid ? "text-ink/80" : "text-white/90";

  const contactItems = [
    { href: "/contact", label: t("nav.enquiry") },
    { href: "/partners", label: t("nav.partnerWithUs") },
  ];

  const simpleLinks = [
    { href: "/blog", label: t("nav.news") },
    { href: "/about", label: t("nav.about") },
  ];

  const currentLanguage = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-cream/95 backdrop-blur border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="relative flex h-10 w-40 items-center">
          <Image
            src="/images/logo-white.png"
            alt="Unico Travel"
            width={160}
            height={48}
            className={`absolute left-0 h-10 w-auto transition-opacity duration-300 ${
              solid ? "opacity-0" : "opacity-100"
            }`}
            priority
          />
          <Image
            src="/images/logo.png"
            alt="Unico Travel"
            width={160}
            height={48}
            className={`absolute left-0 h-10 w-auto transition-opacity duration-300 ${
              solid ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <Link
            href="/"
            className={`whitespace-nowrap text-sm uppercase tracking-wide transition-colors hover:text-terracotta ${
              pathname === "/" ? "text-terracotta" : linkColor
            }`}
          >
            {t("nav.home")}
          </Link>

          <div className="group relative">
            <Link
              href="/destinations"
              className={`flex items-center gap-1 whitespace-nowrap text-sm uppercase tracking-wide transition-colors hover:text-terracotta ${linkColor}`}
            >
              {t("nav.destinations")}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-ink/10 bg-white py-2 shadow-lg">
                {DESTINATIONS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-2.5 text-sm text-ink/75 hover:bg-cream hover:text-terracotta"
                  >
                    {pick(item.label, locale)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <Link
              href="/services"
              className={`flex items-center gap-1 whitespace-nowrap text-sm uppercase tracking-wide transition-colors hover:text-terracotta ${linkColor}`}
            >
              {t("nav.services")}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-ink/10 bg-white py-2 shadow-lg">
                {SERVICE_TYPES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block whitespace-nowrap px-5 py-2.5 text-sm text-ink/75 hover:bg-cream hover:text-terracotta"
                  >
                    {pick(item.label, locale)}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {simpleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap text-sm uppercase tracking-wide transition-colors hover:text-terracotta ${
                pathname === link.href ? "text-terracotta" : linkColor
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="group relative">
            <Link
              href="/contact"
              className={`flex items-center gap-1 whitespace-nowrap text-sm uppercase tracking-wide transition-colors hover:text-terracotta ${
                pathname === "/contact" ? "text-terracotta" : linkColor
              }`}
            >
              {t("nav.contact")}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="invisible absolute right-0 top-full w-52 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-ink/10 bg-white py-2 shadow-lg">
                {contactItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block px-5 py-2.5 text-sm text-ink/75 hover:bg-cream hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="group relative">
            <button
              className={`flex items-center gap-1 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-wide transition-colors ${
                solid ? "border-ink/20 hover:border-terracotta hover:text-terracotta" : "border-white/40 hover:border-white"
              } ${linkColor}`}
            >
              {currentLanguage.label}
              <svg width="8" height="5" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="invisible absolute right-0 top-full w-28 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-lg">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLocale(lang.code)}
                    className={`block w-full px-3 py-2 text-left text-xs hover:bg-cream hover:text-terracotta ${
                      lang.code === locale ? "text-terracotta" : "text-ink/75"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <a
            href="https://unicovisa.com.vn"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-1 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] uppercase tracking-wide transition-colors ${
              solid ? "border-ink/20 hover:border-terracotta hover:text-terracotta" : "border-white/40 hover:border-white"
            } ${linkColor}`}
          >
            {t("nav.visaServices")}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="mt-px">
              <path d="M2.5 7.5L7.5 2.5M7.5 2.5H3.5M7.5 2.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <Link
            href="/contact"
            className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm uppercase tracking-wide transition-colors ${
              solid
                ? "border-ink text-ink hover:bg-ink hover:text-cream"
                : "border-white text-white hover:bg-white hover:text-ink"
            }`}
          >
            {t("nav.planATrip")}
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className={`flex flex-col gap-1.5 lg:hidden ${solid ? "text-ink" : "text-white"}`}
        >
          <span className={`h-px w-6 bg-current transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-current transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-ink/10 bg-cream px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-ink/80 hover:text-terracotta"
            >
              {t("nav.home")}
            </Link>

            <div>
              <p className="text-xs uppercase tracking-widest text-ink/40">
                {t("nav.destinations")}
              </p>
              <div className="mt-3 flex flex-col gap-3 pl-1">
                {DESTINATIONS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-ink/80 hover:text-terracotta"
                  >
                    {pick(item.label, locale)}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-ink/40">
                {t("nav.services")}
              </p>
              <div className="mt-3 flex flex-col gap-3 pl-1">
                {SERVICE_TYPES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-ink/80 hover:text-terracotta"
                  >
                    {pick(item.label, locale)}
                  </Link>
                ))}
              </div>
            </div>

            {simpleLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-ink/80 hover:text-terracotta"
              >
                {link.label}
              </Link>
            ))}

            <div>
              <p className="text-xs uppercase tracking-widest text-ink/40">
                {t("nav.contact")}
              </p>
              <div className="mt-3 flex flex-col gap-3 pl-1">
                {contactItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-ink/80 hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-ink/40">
                {t("nav.language")}
              </p>
              <div className="mt-3 flex flex-col gap-3 pl-1">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLocale(lang.code)}
                    className={`text-left text-sm hover:text-terracotta ${
                      lang.code === locale ? "text-terracotta" : "text-ink/80"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <a
              href="https://unicovisa.com.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-1.5 text-sm uppercase tracking-widest text-ink/80 hover:text-terracotta"
            >
              {t("nav.visaServices")}
              <svg width="11" height="11" viewBox="0 0 10 10" fill="none">
                <path d="M2.5 7.5L7.5 2.5M7.5 2.5H3.5M7.5 2.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-block w-fit rounded-full border border-ink px-5 py-2 text-sm uppercase tracking-widest text-ink"
            >
              {t("nav.planATrip")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
