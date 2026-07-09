"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Tours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Journal" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-cream/95 backdrop-blur border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className={`font-serif text-xl tracking-wide transition-colors ${
            solid ? "text-ink" : "text-white"
          }`}
        >
          UNICO <span className="text-terracotta">TRAVEL</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-terracotta ${
                solid ? "text-ink/80" : "text-white/90"
              } ${pathname === link.href ? "text-terracotta" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className={`hidden rounded-full border px-5 py-2 text-sm uppercase tracking-widest transition-colors md:inline-block ${
            solid
              ? "border-ink text-ink hover:bg-ink hover:text-cream"
              : "border-white text-white hover:bg-white hover:text-ink"
          }`}
        >
          Plan a Trip
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className={`flex flex-col gap-1.5 md:hidden ${solid ? "text-ink" : "text-white"}`}
        >
          <span className={`h-px w-6 bg-current transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-current transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-ink/10 bg-cream px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-widest text-ink/80 hover:text-terracotta"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-block w-fit rounded-full border border-ink px-5 py-2 text-sm uppercase tracking-widest text-ink"
            >
              Plan a Trip
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
