"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Boxes,
  Truck,
  Users,
  Wallet,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/i18n/provider";

const MODULE_ICONS: LucideIcon[] = [
  ShoppingCart,
  Boxes,
  Truck,
  Users,
  Wallet,
];

const card = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

/**
 * Value-focused panel for the About section.
 * Communicates the worth of the ERP with measurable stats and a
 * "connected modules → single source of truth" flow — no device mockup.
 */
export function ErpValuePanel() {
  const { t } = useI18n();
  const a = t.about;
  const modules = a.valueModules.map((label, i) => ({
    label,
    Icon: MODULE_ICONS[i % MODULE_ICONS.length],
  }));

  return (
    <div className="relative">
      {/* main panel */}
      <div className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white/80 p-6 shadow-[0_40px_90px_-30px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.03] backdrop-blur dark:border-white/10 dark:bg-dark-800/70 sm:p-8">
        {/* gradient header strip */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-accent-gradient opacity-[0.08]" />

        <div className="relative">
          <p className="text-sm font-bold text-dark-900 dark:text-white">
            {a.valuePanelTitle}
          </p>
          <p className="mt-1 text-xs text-dark-900/50 dark:text-white/50">
            {a.valuePanelSubtitle}
          </p>
        </div>

        {/* stats grid */}
        <div className="relative mt-6 grid grid-cols-2 gap-3">
          {a.valueStats.map((s, i) => (
            <motion.div
              key={s.label}
              custom={i}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              className="rounded-2xl border border-black/[0.05] bg-white p-4 dark:border-white/10 dark:bg-dark-700"
            >
              <p className="text-2xl font-bold tracking-tight text-gradient">
                {s.value}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-dark-900/55 dark:text-white/55">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* connected modules flow */}
        <div className="relative mt-7">
          <div className="mb-3 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-brand-500" />
            <p className="text-xs font-semibold text-dark-900/70 dark:text-white/70">
              {a.valueModulesTitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {modules.map((m, i) => (
              <motion.div
                key={m.label}
                custom={i}
                variants={card}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="flex items-center gap-1.5 rounded-full border border-black/[0.06] bg-white px-3 py-1.5 text-[11px] font-medium text-dark-900/75 shadow-sm dark:border-white/10 dark:bg-dark-700 dark:text-white/75"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-gradient text-white">
                  <m.Icon className="h-3 w-3" />
                </span>
                {m.label}
              </motion.div>
            ))}
          </div>

          {/* animated flow bar -> single source of truth */}
          <div className="mt-4 overflow-hidden rounded-full bg-black/[0.05] dark:bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-1.5 rounded-full bg-accent-gradient"
            />
          </div>
          <p className="mt-3 text-[11px] leading-snug text-dark-900/45 dark:text-white/45">
            {a.valueFootnote}
          </p>
        </div>
      </div>

      {/* floating accent badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, type: "spring", stiffness: 140 }}
        className="absolute -right-3 -top-3 z-10 flex items-center gap-1.5 rounded-2xl bg-accent-gradient px-3 py-2 text-xs font-bold text-white shadow-neon"
      >
        <TrendingUp className="h-4 w-4" />
        ERP
      </motion.div>
    </div>
  );
}
