"use client";

import Link from "next/link";
import Image from "next/image";
import { Globe, AtSign, Send, MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n/provider";

const SOCIAL_ICONS = [Globe, AtSign, Send, MessageCircle];

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative overflow-hidden border-t border-black/[0.06] bg-zinc-50/70 text-dark-900 dark:border-white/10 dark:bg-dark-900 dark:text-white">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[700px] -translate-x-1/2 rounded-full bg-brand-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-6">
          {/* link columns (Product, Company, Resources, Legal) */}
          {t.footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-dark-900 dark:text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-dark-900/55 transition-colors hover:text-brand-600 dark:text-white/55 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: SmartGestion branding */}
          <div className="lg:col-span-2">
            <Link href="#top" className="inline-flex">
              <Image
                src="/logo3.png"
                alt="SmartGestion — Integrated ERP Solutions"
                width={460}
                height={149}
                className="h-12 w-auto object-contain dark:brightness-0 dark:invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-dark-900/55 dark:text-white/50">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-2">
              {t.footer.socials.map((s, i) => {
                const Icon = SOCIAL_ICONS[i % SOCIAL_ICONS.length];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.08] bg-white text-dark-900/60 transition-all hover:-translate-y-0.5 hover:border-brand-500/50 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-6 dark:border-white/10 sm:flex-row">
          <p className="text-xs text-dark-900/45 dark:text-white/40">
            © {new Date().getFullYear()} SmartGestion. {t.footer.rights}
          </p>
          <p className="text-xs text-dark-900/45 dark:text-white/40">
            {t.footer.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
