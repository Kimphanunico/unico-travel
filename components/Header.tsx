"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const DESTINATIONS = [
  { href: "/services?country=vietnam", label: "Vietnam" },
  { href: "/services?country=cambodia", label: "Cambodia" },
  { href: "/services?country=laos", label: "Laos" },
  { href: "/services?country=japan", label: "Japan" },
];

const SERVICE_TYPES = [
  { href: "/services?type=tailor-made", label: "Tailor-Made" },
  { href: "/services?type=luxury", label: "Luxury" },
  { href: "/services?type=events", label: "Events" },
  { href: "/services?type=group", label: "Group" },
];

const SIMPLE_LINKS = [
  { href: "/blog", label: "News" },
  { href: "/about", label: "About" },
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
  const linkColor = solid ? "text-ink/80" : "text-white/90";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-cream/95 backdrop-blur border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Unico Travel"
            width={160}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          <Link
            href="/"
            className={`text-sm uppercase tracking-widest transition-colors hover:text-terracotta ${
              pathname === "/" ? "text-terracotta" : linkColor
            }`}
          >
            Home
          </Link>

          <div className="group relative">
            <Link
              href="/services"
              className={`flex items-center gap-1 text-sm uppercase tracking-widest transition-colors hover:text-terracotta ${linkColor}`}
            >
              Destinations
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
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <Link
              href="/services"
              className={`flex items-center gap-1 text-sm uppercase tracking-widest transition-colors hover:text-terracotta ${linkColor}`}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border border-ink/10 bg-white py-2 shadow-lg">
                {SERVICE_TYPES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-2.5 text-sm text-ink/75 hover:bg-cream hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {SIMPLE_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm uppercase tracking-widest transition-colors hover:text-terracotta ${
                pathname === link.href ? "text-terracotta" : linkColor
              }`}
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
        <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-ink/10 bg-cream px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-sm uppercase tracking-widest text-ink/80 hover:text-terracotta"
            >
              Home
            </Link>

            <div>
              <p className="text-xs uppercase tracking-widest text-ink/40">
                Destinations
              </p>
              <div className="mt-3 flex flex-col gap-3 pl-1">
                {DESTINATIONS.map((item) => (
                  <Link
                    key={item.href}
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
                Services
              </p>
              <div className="mt-3 flex flex-col gap-3 pl-1">
                {SERVICE_TYPES.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-ink/80 hover:text-terracotta"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {SIMPLE_LINKS.map((link) => (
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
