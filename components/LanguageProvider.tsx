"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ui, type Locale } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getByPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce((acc: unknown, key) => {
    if (acc && typeof acc === "object" && key in (acc as object)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("unico-locale");
    if (stored === "en" || stored === "vi") setLocaleState(stored);
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("unico-locale", next);
  };

  const t = (path: string): string => {
    const value = getByPath(ui[locale], path) ?? getByPath(ui.en, path);
    return typeof value === "string" ? value : path;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
