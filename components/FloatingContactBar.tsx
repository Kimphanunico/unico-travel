"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import BuildTripModal from "@/components/BuildTripModal";
import EnquireModal from "@/components/EnquireModal";

const PHONE_NUMBER = "+84 376 792 974";
const PHONE_HREF = "tel:+84376792974";

function BuildIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6l6-2 6 2 4-1.5v13L16 19l-6-2-6 2V6z" />
      <path d="M10 4v13" />
      <path d="M16 6v13" />
    </svg>
  );
}

function EnquireIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.5 6.5L12 13l8.5-6.5" />
    </svg>
  );
}

function CallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h3.2l1.4 4.2-2 1.6a13 13 0 0 0 6.6 6.6l1.6-2 4.2 1.4V19a2 2 0 0 1-2.2 2C10.8 20.6 3.4 13.2 3 6.2A2 2 0 0 1 5 4Z" />
    </svg>
  );
}

export default function FloatingContactBar() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [buildOpen, setBuildOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const goingUp = y < lastScrollY.current - 4;
        const goingDown = y > lastScrollY.current + 4;

        if (y < 120) {
          setVisible(false);
        } else if (goingUp) {
          setVisible(true);
        } else if (goingDown) {
          setVisible(false);
        }

        lastScrollY.current = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    {
      key: "build",
      icon: <BuildIcon />,
      label: t("floatingBar.build"),
      onClick: () => setBuildOpen(true),
    },
    {
      key: "enquire",
      icon: <EnquireIcon />,
      label: t("floatingBar.enquire"),
      onClick: () => setEnquireOpen(true),
    },
    {
      key: "call",
      icon: <CallIcon />,
      label: t("floatingBar.callUs"),
      href: PHONE_HREF,
      title: PHONE_NUMBER,
    },
  ];

  return (
    <>
      <div
        className={`fixed right-0 top-1/2 z-40 -translate-y-1/2 transition-all duration-300 ${
          visible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1.5 py-2 pl-2">
          {items.map((item) => {
            const className =
              "group flex items-center justify-end overflow-hidden rounded-l-lg bg-terracotta text-white shadow-md transition-colors hover:bg-terracotta-dark";
            const content = (
              <>
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-medium uppercase tracking-wide opacity-0 transition-all duration-300 group-hover:max-w-[9rem] group-hover:px-3 group-hover:opacity-100">
                  {item.label}
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center">
                  {item.icon}
                </span>
              </>
            );

            if (item.href) {
              return (
                <a key={item.key} href={item.href} title={item.title} className={className}>
                  {content}
                </a>
              );
            }

            return (
              <button key={item.key} type="button" onClick={item.onClick} className={className}>
                {content}
              </button>
            );
          })}
        </div>
      </div>

      <BuildTripModal open={buildOpen} onClose={() => setBuildOpen(false)} />
      <EnquireModal open={enquireOpen} onClose={() => setEnquireOpen(false)} />
    </>
  );
}
