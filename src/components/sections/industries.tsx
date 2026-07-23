"use client";

import * as React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import {
  Cross,
  Boxes,
  Receipt,
  LineChart,
  Truck,
  Monitor,
  ArrowRight,
  Sparkles,
  PlayCircle,
  ShieldCheck,
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
    transition: { duration: 0.6, delay: i * 0.1, ease: EASE },
  }),
};

const HIGHLIGHT_ICONS: LucideIcon[] = [Boxes, Receipt, Truck, LineChart];
const FEATURE_ICONS: LucideIcon[] = [Boxes, Receipt, LineChart, Truck];

export function Industries() {
  const { t } = useI18n();
  const s = t.industries;
  const sc = s.showcase;

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-white py-24 dark:bg-dark-900"
    >
      {/* soft ambient accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[760px] -translate-x-1/2 rounded-full bg-radial-glow opacity-50 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(63,184,196,0.18),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="light" className="mb-4 gap-1.5 shadow-sm">
            <Cross className="h-3 w-3 text-[#3FB8C4]" strokeWidth={2.5} />
            {s.badge}
          </Badge>
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark-900 dark:text-white sm:text-5xl">
            {s.title1}{" "}
            <span className="text-gradient">{s.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-dark-900/55 dark:text-white/55">
            {s.intro}
          </p>
        </div>

        {/* ===== Hero feature block: ParaPharmacie ===== */}
        <div className="relative mt-16 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50/70 p-6 sm:p-10 dark:border-white/10 dark:bg-white/[0.03]">
          {/* decorative gradient corner */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(63,184,196,0.25),transparent_70%)] blur-2xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            {/* left: identity + highlights */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex items-center gap-4"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-gradient shadow-neon">
                  <Cross className="h-7 w-7 text-white" strokeWidth={2.2} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#2a9fa9] dark:text-[#3FB8C4]">
                    {s.flagshipLabel}
                  </p>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                    {s.nicheName}
                  </h3>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
                className="mt-5 max-w-md text-sm font-medium text-slate-600 dark:text-white/70"
              >
                {s.nicheTagline}
              </motion.p>

              {/* highlights list */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {s.highlights.map((h, i) => {
                  const Icon = HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length];
                  return (
                    <motion.div
                      key={h.title}
                      custom={i}
                      variants={reveal}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false }}
                      whileHover={{ y: -5 }}
                      className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#3FB8C4]/50 hover:shadow-[0_18px_44px_-18px_rgba(63,184,196,0.5)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-[#3FB8C4]/40"
                    >
                      {/* hover gradient wash */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3FB8C4]/[0.08] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      />
                      {/* corner glow */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(63,184,196,0.22),transparent_70%)] opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100"
                      />

                      <div className="relative flex items-start justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#3FB8C4]/15 to-[#3FB8C4]/5 text-[#2a9fa9] ring-1 ring-inset ring-[#3FB8C4]/10 transition-all duration-300 group-hover:scale-110 group-hover:from-[#3FB8C4] group-hover:to-[#2a9fa9] group-hover:text-white group-hover:ring-[#3FB8C4]/30 group-hover:shadow-[0_8px_18px_-6px_rgba(63,184,196,0.6)] dark:text-[#3FB8C4] dark:ring-white/10 dark:group-hover:text-white">
                          <Icon className="h-[18px] w-[18px]" strokeWidth={2.2} />
                        </span>
                        <ArrowRight
                          aria-hidden
                          className="mt-1 h-4 w-4 -translate-x-1 text-[#3FB8C4] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                          strokeWidth={2.2}
                        />
                      </div>

                      <p className="relative mt-4 text-sm font-bold text-slate-800 transition-colors duration-300 group-hover:text-[#2a9fa9] dark:text-white dark:group-hover:text-[#3FB8C4]">
                        {h.title}
                      </p>
                      <p className="relative mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-white/55">
                        {h.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
                className="mt-8"
              >
                <Button asChild variant="gradient" size="md">
                  <a href="#contact">
                    {s.cta} <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* right: stats panel */}
            <div className="grid gap-4">
              {s.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-[#3FB8C4]/40 hover:shadow-[0_12px_40px_-18px_rgba(63,184,196,0.45)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-white/20"
                >
                  <span className="bg-accent-gradient bg-clip-text text-4xl font-black tracking-tight text-transparent sm:text-5xl">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold leading-snug text-slate-600 dark:text-white/70">
                    {stat.label}
                  </span>
                </motion.div>
              ))}

              <motion.div
                custom={s.stats.length}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className="flex items-center gap-3 rounded-2xl border border-[#3FB8C4]/30 bg-[#3FB8C4]/8 p-5"
              >
                <ShieldCheck className="h-6 w-6 shrink-0 text-[#2a9fa9] dark:text-[#3FB8C4]" />
                <p className="text-xs font-semibold text-[#2a9fa9] dark:text-[#3FB8C4]">
                  {sc.eyebrow}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ===== Platform showcase ===== */}
        <div
          id="industries-showcase"
          className="relative mt-24 grid scroll-mt-24 items-center gap-12 lg:grid-cols-2 lg:gap-8"
        >
          {/* ---- Left: copy + feature list ---- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3FB8C4]/30 bg-[#3FB8C4]/8 px-3.5 py-1.5 text-xs font-semibold text-[#2a9fa9]">
              <Sparkles className="h-3.5 w-3.5 text-[#3FB8C4]" />
              {sc.eyebrow}
            </div>

            <motion.h3
              custom={1}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="mt-5 text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 dark:text-white sm:text-4xl"
            >
              {sc.title}
            </motion.h3>

            <motion.p
              custom={2}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              className="mt-4 max-w-md text-sm leading-relaxed text-slate-500 dark:text-white/60"
            >
              {sc.description}
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
              <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-inset ring-slate-200 dark:bg-white/10 dark:text-white dark:ring-white/20">
                <Monitor className="h-3.5 w-3.5 text-[#3FB8C4]" />
                {sc.platform}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1D6FD6]/10 px-3 py-1.5 text-xs font-semibold text-[#1D6FD6] ring-1 ring-inset ring-[#1D6FD6]/20 dark:bg-[#3FB8C4]/15 dark:text-[#3FB8C4] dark:ring-[#3FB8C4]/20">
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                  className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#1D6FD6] to-[#3FB8C4]"
                />
                {sc.liveBadge}
              </span>
            </motion.div>

            {/* feature list */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {sc.features.map((f, i) => {
                const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
                return (
                  <motion.div
                    key={f.title}
                    custom={4 + i}
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false }}
                    whileHover={{
                      y: -3,
                      boxShadow: "0 8px 30px -6px rgba(63,184,196,0.18)",
                    }}
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
                <a href="#contact">
                  {sc.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* ---- Right: desktop mockup ---- */}
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

            {/* glow blob */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(63,184,196,0.30),transparent_70%)] blur-3xl"
            />

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
                {sc.liveBadge}
              </motion.div>

              {/* floating stat badge — top left */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8, duration: 0.5 }}
                animate={{ y: [0, -5, 0] }}
                className="absolute -left-14 top-10 z-20 hidden rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.09)] sm:block dark:border-white/10 dark:bg-dark-700"
              >
                <p className="text-[10px] font-semibold text-slate-400 dark:text-white/50">
                  {sc.caLabel}
                </p>
                <p className="text-base font-bold text-slate-800 dark:text-white">
                  {sc.caValue}
                </p>
                <p className="text-[10px] font-semibold text-[#1D6FD6]">
                  {sc.caUp}
                </p>
              </motion.div>

              {/* floating stat badge — bottom right */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 1.0, duration: 0.5 }}
                animate={{ y: [0, 5, 0] }}
                className="absolute -right-14 bottom-14 z-20 hidden rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.09)] sm:block dark:border-white/10 dark:bg-dark-700"
              >
                <p className="text-[10px] font-semibold text-slate-400 dark:text-white/50">
                  {sc.stockLabel}
                </p>
                <p className="text-base font-bold text-slate-800 dark:text-white">
                  {sc.stockValue}
                </p>
                <p className="text-[10px] font-semibold text-amber-500">
                  {sc.stockWarn}
                </p>
              </motion.div>

              {/* the desktop image — floating */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="drop-shadow-[0_32px_56px_rgba(63,184,196,0.22)]"
              >
                <Image
                  src="/iMac.png"
                  alt={sc.title}
                  width={560}
                  height={460}
                  className="w-[320px] object-contain sm:w-[420px] lg:w-[520px]"
                  style={{ height: "auto" }}
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* ===== Video tutorial ===== */}
        <div className="mx-auto mt-24 max-w-4xl text-center">
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-80px" }}
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#3FB8C4]/30 bg-[#3FB8C4]/8 px-3.5 py-1.5 text-xs font-semibold text-[#2a9fa9]">
              <PlayCircle className="h-3.5 w-3.5 text-[#3FB8C4]" />
              {sc.videoTitle}
            </div>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-500 dark:text-white/60">
              {sc.videoSubtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-[0_24px_60px_-24px_rgba(63,184,196,0.35)] dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="relative aspect-video w-full">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube-nocookie.com/embed/uIYKo-hWFsk?rel=0"
                title={sc.videoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
