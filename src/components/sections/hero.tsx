"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroMockup } from "@/components/laptop-mockup";
import { useI18n } from "@/i18n/provider";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32">
      {/* ===== Soft gradient background (PrimeStay-style) ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white dark:from-dark-800 dark:via-dark-900 dark:to-dark-900" />
        {/* radial wash from top */}
        <div className="absolute left-1/2 top-[-20%] h-[640px] w-[1100px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(29,111,214,0.18),rgba(63,184,196,0.10)_45%,transparent_70%)] blur-2xl" />
        {/* side blobs */}
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-500/15 blur-[120px] animate-aurora" />
        <div className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-[#3FB8C4]/15 blur-[120px] animate-aurora-slow" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* eyebrow pill: New + trusted */}
        <motion.div variants={item} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/80 py-1 pe-3.5 ps-1 text-xs font-medium text-dark-900/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
            <span className="rounded-full bg-accent-gradient px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
              New
            </span>
            {t.heroMockup.trustedUsers}
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          variants={item}
          className="mx-auto mt-6 max-w-4xl text-center text-5xl font-bold leading-[1.02] tracking-tight text-dark-900 dark:text-white sm:text-6xl lg:text-7xl"
        >
          {t.hero.title1} {t.hero.title2}
          <br />
          <span className="text-gradient italic [font-family:Georgia,'Times_New_Roman',serif]">
            {t.hero.titleHighlight}
          </span>
        </motion.h1>

        {/* subheadline */}
        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-xl text-center text-base text-dark-900/55 dark:text-white/60"
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild variant="gradient" size="lg">
            <a href="#about">
              {t.hero.primaryCta} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="light" size="lg">
            <a href="#contact">{t.hero.secondaryCta}</a>
          </Button>
        </motion.div>

        {/* ParaGestion desktop mockup */}
        <motion.div variants={item} className="relative mt-14 flex justify-center pb-4">
          <div className="relative w-full max-w-4xl">
            {/* soft colored aura behind the dashboard */}
            <div className="pointer-events-none absolute -inset-x-16 -inset-y-10 -z-10 rounded-[40%] bg-[radial-gradient(ellipse_at_center,rgba(29,111,214,0.28),rgba(10,31,68,0.16)_50%,transparent_72%)] blur-[70px]" />
            <div className="pointer-events-none absolute -left-8 top-1/4 -z-10 h-64 w-64 rounded-full bg-brand-500/30 blur-[90px] animate-aurora" />
            <div className="pointer-events-none absolute -right-8 top-1/3 -z-10 h-64 w-64 rounded-full bg-[#3FB8C4]/30 blur-[90px] animate-aurora-slow" />

            <HeroMockup />
          </div>
        </motion.div>

        {/* Integration logos row */}
        <motion.div
          variants={item}
          className="relative mx-auto mt-12 max-w-5xl pb-20"
        >
          <p className="mb-5 text-center text-xs font-medium uppercase tracking-[0.2em] text-dark-900/40 dark:text-white/40">
            {t.hero.integrationsLabel}
          </p>
          <div className="grid-fade-mask flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-between">
            {t.hero.integrations.map((name) => (
              <span
                key={name}
                className="flex items-center gap-1.5 text-lg font-semibold tracking-tight text-dark-900/30 transition-colors hover:text-brand-600 dark:text-white/30 dark:hover:text-white/60 sm:text-xl"
              >
                <ShieldCheck className="h-4 w-4" /> {name}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
