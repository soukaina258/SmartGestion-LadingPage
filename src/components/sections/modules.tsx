"use client";

import * as React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Boxes,
  Receipt,
  LineChart,
  Truck,
  Monitor,
  Smartphone,
  ArrowRight,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/provider";

const EASE = [0.16, 1, 0.3, 1] as const;

const reveal: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, delay: i * 0.1, ease: EASE },
  }),
};

const FEATURE_ICONS: LucideIcon[] = [Boxes, Receipt, LineChart, Truck];

export function Modules() {
  const { t, locale } = useI18n();
  const p = t.modules.pharmacy;
  const isAr = locale === "ar";

  // badge labels switch by locale
  const badge = {
    caLabel:    isAr ? "رقم الأعمال اليوم"  : locale === "fr" ? "CA du jour"      : "Today's revenue",
    caValue:    isAr ? "١٢ ٨٤٠ درهم"        : "12 840 DH",
    caUp:       isAr ? "↑ +٨٫٤٪"            : "↑ +8.4%",
    stockLabel: isAr ? "تنبيه المخزون"       : locale === "fr" ? "Stock alertes"   : "Stock alerts",
    stockValue: isAr ? "٣ منتجات"            : locale === "fr" ? "3 produits"       : "3 products",
    stockWarn:  isAr ? "⚠ انتهاء الصلاحية"  : locale === "fr" ? "⚠ Péremption"    : "⚠ Expiry",
  };

  return (
    <section
      id="modules"
      className="relative overflow-hidden bg-white py-24 dark:bg-dark-900"
    >
      {/* soft ambient accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[760px] -translate-x-1/2 rounded-full bg-radial-glow opacity-50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="light" className="mb-4 gap-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-gradient" />
            {t.modules.badge}
          </Badge>
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark-900 dark:text-white sm:text-5xl">
            {t.modules.title1}{" "}
            <span className="text-gradient">{t.modules.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-dark-900/55 dark:text-white/55">
            {t.modules.intro}
          </p>
        </div>

        {/* ===== Pharmacy solution showcase ===== */}
        <div className="relative mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-8">

          {/* ---- Left: copy + feature list ---- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3FB8C4]/30 bg-[#3FB8C4]/8 px-3.5 py-1.5 text-xs font-semibold text-[#2a9fa9]">
              <Sparkles className="h-3.5 w-3.5 text-[#3FB8C4]" />
              {p.eyebrow}
            </div>

            <motion.h3
              custom={1}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            >
              {p.title}
            </motion.h3>

            <motion.p
              custom={2}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 dark:text-white/60"
            >
              {p.description}
            </motion.p>

            {/* platform pills */}
            <motion.div
              custom={3}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="mt-6 flex flex-wrap gap-2.5"
            >
              {[
                { icon: Monitor, label: p.desktop.label },
                { icon: Smartphone, label: p.mobile.label },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-inset ring-slate-200 dark:bg-white/10 dark:text-white dark:ring-white/20"
                >
                  <Icon className="h-3.5 w-3.5 text-[#3FB8C4]" />
                  {label}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1D6FD6]/10 px-3 py-1.5 text-xs font-semibold text-[#1D6FD6] ring-1 ring-inset ring-[#1D6FD6]/20 dark:bg-[#3FB8C4]/15 dark:text-[#3FB8C4] dark:ring-[#3FB8C4]/20">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#1D6FD6] to-[#3FB8C4]"
                />
                {p.liveBadge}
              </span>
            </motion.div>

            {/* feature list */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {p.features.map((f, i) => {
                const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
                return (
                  <motion.div
                    key={f.title}
                    custom={4 + i}
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    whileHover={{ y: -3, boxShadow: "0 8px 30px -6px rgba(63,184,196,0.18)" }}
                    className="group/feat rounded-2xl border border-slate-200 bg-slate-50/80 p-4 transition-all duration-300 hover:border-[#3FB8C4]/40 hover:bg-white dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:bg-white/[0.06]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient shadow-neon transition-transform duration-300 group-hover/feat:scale-110">
                      <Icon className="h-4 w-4 text-white" strokeWidth={2} />
                    </span>
                    <p className="mt-3 text-sm font-bold text-slate-800 dark:text-white">
                      {f.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-white/55">
                      {f.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              custom={8}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="mt-8"
            >
              <Button asChild variant="gradient" size="md">
                <a href="#pricing">
                  {p.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* ---- Right: phone image, no box ---- */}
          <div className="relative flex items-center justify-center py-8 lg:py-16">
            {/* rotating ring decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute h-[420px] w-[420px] rounded-full border border-dashed border-[#3FB8C4]/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute h-[300px] w-[300px] rounded-full border border-dashed border-brand-500/15"
            />

            {/* glow blob behind phone */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(63,184,196,0.30),transparent_70%)] blur-3xl"
            />

            {/* wrapper for phone + floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative z-10"
            >
              {/* corner accent brackets */}
              <div className="pointer-events-none absolute -left-4 -top-4 h-10 w-10 rounded-tl-xl border-l-2 border-t-2 border-[#3FB8C4]/50" />
              <div className="pointer-events-none absolute -right-4 -top-4 h-10 w-10 rounded-tr-xl border-r-2 border-t-2 border-[#3FB8C4]/50" />
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-10 w-10 rounded-bl-xl border-b-2 border-l-2 border-[#3FB8C4]/50" />
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-10 w-10 rounded-br-xl border-b-2 border-r-2 border-[#3FB8C4]/50" />

              {/* floating badge — live */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -right-6 -top-5 z-20 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#1D6FD6] to-[#3FB8C4] px-3 py-1.5 text-[11px] font-bold text-white shadow-lg shadow-[#1D6FD6]/30"
              >
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-white"
                />
                Live
              </motion.div>

              {/* floating stat badge — top left (hidden on small screens to avoid clipping) */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8, duration: 0.5 }}
                animate={{ y: [0, -5, 0] }}
                className="absolute -left-14 top-10 z-20 hidden rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.09)] sm:block dark:border-white/10 dark:bg-dark-700"
              >
                <p className="text-[10px] font-semibold text-slate-400 dark:text-white/50">{badge.caLabel}</p>
                <p className="text-base font-bold text-slate-800 dark:text-white">{badge.caValue}</p>
                <p className="text-[10px] font-semibold text-[#1D6FD6]">{badge.caUp}</p>
              </motion.div>

              {/* floating stat badge — bottom right (hidden on small screens to avoid clipping) */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 1.0, duration: 0.5 }}
                animate={{ y: [0, 5, 0] }}
                className="absolute -right-14 bottom-14 z-20 hidden rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.09)] sm:block dark:border-white/10 dark:bg-dark-700"
              >
                <p className="text-[10px] font-semibold text-slate-400 dark:text-white/50">{badge.stockLabel}</p>
                <p className="text-base font-bold text-slate-800 dark:text-white">{badge.stockValue}</p>
                <p className="text-[10px] font-semibold text-amber-500">{badge.stockWarn}</p>
              </motion.div>

              {/* the actual phone image — floating */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="drop-shadow-[0_32px_56px_rgba(63,184,196,0.22)]"
              >
                <Image
                  src="/mobile3.png"
                  alt={p.mobile.caption}
                  width={260}
                  height={520}
                  className="h-auto w-[200px] object-contain sm:w-[230px] lg:w-[260px]"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}
