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
  Play,
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
  const { t } = useI18n();
  const p = t.modules.pharmacy;

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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative mt-16 overflow-hidden rounded-[2.5rem] border border-white/10 bg-dark-900 p-1"
        >
          {/* gradient frame glow */}
          <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-accent-gradient opacity-30 blur-[2px]" />

          <div className="relative overflow-hidden rounded-[2.3rem] bg-gradient-to-br from-dark-800 via-dark-900 to-black">
            {/* ambient blobs */}
            <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_85%_15%,rgba(63,184,196,0.22),transparent_42%),radial-gradient(circle_at_10%_90%,rgba(29,111,214,0.22),transparent_45%)]" />
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-brand-500/20 blur-[100px]"
            />

            <div className="relative grid items-center gap-8 p-7 sm:p-10 lg:grid-cols-2 lg:gap-6 lg:p-14">
              {/* ---- Left: copy + feature list ---- */}
              <div>
                <motion.div
                  custom={0}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur"
                >
                  <Sparkles className="h-3.5 w-3.5 text-[#5CC9C9]" />
                  {p.eyebrow}
                </motion.div>

                <motion.h3
                  custom={1}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl"
                >
                  {p.title}
                </motion.h3>

                <motion.p
                  custom={2}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-4 max-w-md text-sm leading-relaxed text-white/60"
                >
                  {p.description}
                </motion.p>

                {/* platform pills */}
                <motion.div
                  custom={3}
                  variants={reveal}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="mt-6 flex flex-wrap gap-2.5"
                >
                  {[
                    { icon: Monitor, label: p.desktop.label },
                    { icon: Smartphone, label: p.mobile.label },
                  ].map(({ icon: Icon, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/8 px-3 py-1.5 text-xs font-semibold text-white/85 ring-1 ring-inset ring-white/10"
                    >
                      <Icon className="h-3.5 w-3.5 text-[#5CC9C9]" />
                      {label}
                    </span>
                  ))}
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1.5 text-xs font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/20">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                      className="h-1.5 w-1.5 rounded-full bg-emerald-400"
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
                        viewport={{ once: true }}
                        whileHover={{ y: -3 }}
                        className="group/feat rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-gradient shadow-neon transition-transform duration-300 group-hover/feat:scale-110">
                          <Icon className="h-4 w-4 text-white" strokeWidth={2} />
                        </span>
                        <p className="mt-3 text-sm font-bold text-white">
                          {f.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-white/55">
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
                  viewport={{ once: true }}
                  className="mt-8"
                >
                  <Button asChild variant="gradient" size="md">
                    <a href="#pricing">
                      {p.cta} <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* ---- Right: device mockups ---- */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className="relative mx-auto flex h-[560px] w-full max-w-none items-center justify-center sm:h-[760px] lg:h-[750px]"
              >
                {/* glow behind device */}
                <div className="pointer-events-none absolute inset-0 m-auto h-3/4 w-3/4 rounded-full bg-accent-gradient opacity-25 blur-[80px]" />

                {/* phone */}
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                  className="relative h-full w-auto max-w-none drop-shadow-[0_24px_50px_rgba(0,0,0,0.55)]"
                >
                  <Image
                    src="/mobile.png"
                    alt={p.mobile.caption}
                    width={500}
                    height={500}
                    className="h-full w-auto object-contain"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ===== Product tutorial showcase ===== */}
        <div className="mt-24">
          {/* video / product showcase */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="group relative overflow-hidden rounded-4xl p-1"
          >
            {/* gradient border glow */}
            <div className="absolute inset-0 rounded-4xl bg-accent-gradient opacity-50 blur-[2px]" />

            <div className="relative aspect-[16/8] overflow-hidden rounded-[1.9rem] bg-dark-900">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-700 via-dark-900 to-black" />
              <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_70%_40%,rgba(63,184,196,0.30),transparent_45%),radial-gradient(circle_at_30%_70%,rgba(29,111,214,0.28),transparent_45%)]" />
              {/* light streaks */}
              <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#3FB8C4]/40 to-transparent" />
              <div className="absolute left-0 top-1/3 h-px w-full bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

              {/* play button */}
              <button
                type="button"
                aria-label="Play product walk-through"
                className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              >
                <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent-gradient shadow-neon transition-transform duration-300 group-hover:scale-110">
                  <span className="absolute inset-0 animate-glow rounded-full bg-accent-gradient blur-xl" />
                  <Play className="relative h-7 w-7 fill-white text-white" />
                </span>
              </button>

              <p className="absolute inset-x-0 bottom-6 z-10 text-center text-sm text-white/70">
                {t.about.videoCaption}
              </p>
            </div>
          </motion.div>

          {/* mission statement */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mx-auto mt-20 max-w-4xl text-center"
          >
            <p className="text-3xl font-bold leading-[1.2] tracking-tight text-dark-900 dark:text-white sm:text-4xl lg:text-5xl">
              <span className="text-dark-900/30 dark:text-white/35">
                {t.about.missionLead}
              </span>
              <br />
              {t.about.missionBody}{" "}
              <span className="text-gradient">{t.about.missionHighlight}</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
