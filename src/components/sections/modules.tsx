"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  FileText,
  Percent,
  Boxes,
  Truck,
  BarChart3,
  ArrowUpRight,
  Play,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/i18n/provider";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const MODULE_ICONS: LucideIcon[] = [
  Calculator,
  FileText,
  Percent,
  Boxes,
  Truck,
  BarChart3,
];

export function Modules() {
  const { t } = useI18n();
  const cards = t.modules.cards.map((c, i) => ({
    ...c,
    Icon: MODULE_ICONS[i % MODULE_ICONS.length],
  }));

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

        {/* Solutions grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="group relative flex flex-col rounded-3xl border border-black/[0.07] bg-white p-7 shadow-[0_2px_20px_-8px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/30 hover:shadow-card-lift dark:border-white/10 dark:bg-dark-800 dark:hover:border-white/20"
            >
              {/* icon tile */}
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-gradient shadow-neon transition-transform duration-300 group-hover:scale-105">
                <card.Icon className="h-6 w-6 text-white" strokeWidth={2} />
              </span>

              <h3 className="mt-6 text-lg font-bold tracking-tight text-dark-900 dark:text-white">
                {card.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-dark-900/55 dark:text-white/55">
                {card.description}
              </p>

              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-brand-400">
                <ArrowUpRight className="h-4 w-4" />
              </span>

              {/* corner glow on hover */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-card-glow opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>

        {/* ===== Product tutorial showcase ===== */}
        <div className="mt-24">
          {/* video / product showcase */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
