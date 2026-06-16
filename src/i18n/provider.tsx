"use client";

import * as React from "react";
import {
  DEFAULT_LOCALE,
  LOCALES,
  RTL_LOCALES,
  dictionaries,
  type Dictionary,
  type Locale,
} from "@/i18n/translations";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
  dir: "ltr" | "rtl";
};

const I18nContext = React.createContext<I18nContextValue | null>(null);

function applyDocumentLang(locale: Locale) {
  const dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
  document.documentElement.lang = locale;
  document.documentElement.dir = dir;
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>(DEFAULT_LOCALE);

  React.useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    const initial = stored && LOCALES.includes(stored) ? stored : DEFAULT_LOCALE;
    setLocaleState(initial);
    applyDocumentLang(initial);
  }, []);

  const setLocale = React.useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("locale", l);
    applyDocumentLang(l);
  }, []);

  const value = React.useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: dictionaries[locale],
      dir: RTL_LOCALES.includes(locale) ? "rtl" : "ltr",
    }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
