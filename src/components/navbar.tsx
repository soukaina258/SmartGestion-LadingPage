"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sun, Moon, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/provider";
import type { Locale } from "@/i18n/translations";

/* ---- Light / Dark theme toggle ---- */
function ThemeToggle({ stacked = false }: { stacked?: boolean }) {
  const { t } = useI18n();
  const [dark, setDark] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const prefersDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  if (stacked) {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-label="Changer de thème"
        className="flex w-full items-center justify-between rounded-full border border-black/10 px-4 py-3 text-sm font-medium text-dark-900/70 transition-colors hover:text-dark-900 dark:border-white/15 dark:text-white/70 dark:hover:text-white"
      >
        <span className="flex items-center gap-2">
          {mounted && dark ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
          {mounted && dark ? t.nav.themeDark : t.nav.themeLight}
        </span>
        <span className="flex h-5 w-9 items-center rounded-full bg-black/10 p-0.5 dark:bg-white/20">
          <span
            className={cn(
              "h-4 w-4 rounded-full bg-white shadow transition-transform",
              mounted && dark && "translate-x-4"
            )}
          />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Changer de thème"
      className="relative flex h-9 w-9 items-center justify-center rounded-full text-dark-900/70 transition-colors hover:bg-black/5 hover:text-dark-900 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={mounted && dark ? "moon" : "sun"}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="flex"
        >
          {mounted && dark ? (
            <Moon className="h-4.5 w-4.5" />
          ) : (
            <Sun className="h-4.5 w-4.5" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

/* ---- Inline SVG flags, circular (always render, unlike emoji) ---- */
const flagClass =
  "h-5 w-5 shrink-0 rounded-full object-cover shadow-sm ring-1 ring-black/10";

function FlagGB({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={cn(flagClass, className)} aria-hidden>
      <clipPath id="gb-c">
        <circle cx="30" cy="30" r="30" />
      </clipPath>
      <g clipPath="url(#gb-c)">
        <rect width="60" height="60" fill="#012169" />
        <path d="M0,0 60,60 M60,0 0,60" stroke="#fff" strokeWidth="10" />
        <path d="M0,0 60,60 M60,0 0,60" stroke="#C8102E" strokeWidth="6" />
        <path d="M30,0 V60 M0,30 H60" stroke="#fff" strokeWidth="14" />
        <path d="M30,0 V60 M0,30 H60" stroke="#C8102E" strokeWidth="8" />
      </g>
    </svg>
  );
}

function FlagFR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={cn(flagClass, className)} aria-hidden>
      <clipPath id="fr-c">
        <circle cx="30" cy="30" r="30" />
      </clipPath>
      <g clipPath="url(#fr-c)">
        <rect width="20" height="60" fill="#0055A4" />
        <rect x="20" width="20" height="60" fill="#fff" />
        <rect x="40" width="20" height="60" fill="#EF4135" />
      </g>
    </svg>
  );
}

function FlagMA({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={cn(flagClass, className)} aria-hidden>
      <clipPath id="ma-c">
        <circle cx="30" cy="30" r="30" />
      </clipPath>
      <g clipPath="url(#ma-c)">
        <rect width="60" height="60" fill="#C1272D" />
        <path
          d="M30 18 l3.5 10.8 11.4 0 -9.2 6.7 3.5 10.8 -9.2-6.7 -9.2 6.7 3.5-10.8 -9.2-6.7 11.4 0z"
          fill="none"
          stroke="#006233"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}

type Lang = {
  code: Locale;
  label: string;
  short: string;
  Flag: ({ className }: { className?: string }) => React.JSX.Element;
};

const LANGS: Lang[] = [
  { code: "en", label: "English", short: "EN", Flag: FlagGB },
  { code: "fr", label: "Français", short: "FR", Flag: FlagFR },
  { code: "ar", label: "الدارجة", short: "AR", Flag: FlagMA },
];

function LangSelector({ stacked = false }: { stacked?: boolean }) {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === locale) ?? LANGS[1];

  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className={cn("relative", stacked && "w-full")}>
      <button
        type="button"
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1.5 rounded-full text-sm font-medium text-dark-900/70 transition-colors hover:text-dark-900 dark:text-white/70 dark:hover:text-white",
          stacked
            ? "w-full justify-between border border-black/10 px-4 py-3 dark:border-white/15"
            : "h-9 px-2.5 hover:bg-black/5 dark:hover:bg-white/10"
        )}
      >
        <span className="flex items-center gap-2">
          <current.Flag />
          <span className={stacked ? "" : "hidden lg:inline"}>
            {stacked ? current.label : current.short}
          </span>
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16 }}
            className={cn(
              "z-50 overflow-hidden rounded-2xl border border-black/10 bg-white p-1.5 shadow-xl dark:border-white/10 dark:bg-dark-800",
              stacked
                ? "relative mt-2 w-full"
                : "absolute end-0 top-full mt-2 w-44"
            )}
          >
            {LANGS.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(l.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors hover:bg-black/5 dark:hover:bg-white/10",
                    current.code === l.code
                      ? "font-semibold text-dark-900 dark:text-white"
                      : "text-dark-900/70 dark:text-white/70"
                  )}
                  dir={l.code === "ar" ? "rtl" : "ltr"}
                >
                  <span className="flex items-center gap-2">
                    <l.Flag />
                    {l.label}
                  </span>
                  {current.code === l.code && (
                    <Check className="h-4 w-4 text-brand-600" />
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

function BrandLogo() {
  return (
    <Link href="#top" className="group flex items-center">
      <Image
        src="/logo3.png"
        alt="SmartGestion — Integrated ERP Solutions"
        width={460}
        height={149}
        priority
        className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] dark:brightness-0 dark:invert"
      />
    </Link>
  );
}

export function Navbar() {
  const { t } = useI18n();
  const [open, setOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState<string | null>(null);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.solutions, href: "#modules" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.contact, href: "#cta" },
  ];

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <motion.div
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-black/[0.06] bg-white/80 px-3 py-2 shadow-[0_10px_35px_-12px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-dark-800/80 sm:px-4"
      >
        {/* Left: brand */}
        <BrandLogo />

        {/* Center: simple links */}
        <nav
          className="hidden items-center lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onMouseEnter={() => setHovered(link.label)}
              className="relative rounded-full px-3.5 py-2 text-sm font-medium text-dark-900/70 transition-colors duration-200 hover:text-dark-900 dark:text-white/70 dark:hover:text-white"
            >
              {hovered === link.label && (
                <motion.span
                  layoutId="nav-hover-light"
                  className="absolute inset-0 -z-10 rounded-full bg-black/[0.06] dark:bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: theme + language + CTA */}
        <div className="flex items-center gap-1.5">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          <div className="hidden sm:block">
            <LangSelector />
          </div>

          <Link
            href="#cta"
            className="hidden rounded-full bg-accent-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-neon transition-all duration-300 hover:shadow-neon-purple hover:brightness-110 sm:inline-flex"
          >
            {t.nav.cta}
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-900 text-white transition-transform hover:scale-105 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-dark-900/40 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="fixed end-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col gap-2 border-s border-black/10 bg-white p-6 shadow-2xl dark:border-white/10 dark:bg-dark-900 md:hidden"
            >
              <div className="mb-6 flex items-center justify-between">
                <BrandLogo />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-dark-900 dark:bg-white/10 dark:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3.5 text-base font-medium text-dark-900/80 transition-colors hover:bg-black/5 hover:text-dark-900 dark:text-white/80 dark:hover:bg-white/10 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-5">
                <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-dark-900/40 dark:text-white/40">
                  {t.nav.language}
                </p>
                <LangSelector stacked />
              </div>

              <div className="mt-4">
                <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wide text-dark-900/40 dark:text-white/40">
                  {t.nav.theme}
                </p>
                <ThemeToggle stacked />
              </div>

              <div className="mt-auto pt-6">
                <Link
                  href="#cta"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-full bg-accent-gradient py-3.5 text-center text-sm font-semibold text-white shadow-neon transition-all hover:brightness-110"
                >
                  {t.nav.cta}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
