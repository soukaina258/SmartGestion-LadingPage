"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Wallet,
  ArrowDownLeft,
  Users,
  ChevronDown,
  Repeat,
} from "lucide-react";
import { useI18n } from "@/i18n/provider";

const float = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
  },
};

/* small floating card */
function StatCard({
  children,
  className,
  delay = 0,
  duration = 5,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 14 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute z-20 ${className}`}
    >
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
        className="rounded-2xl border border-black/[0.06] bg-white/95 px-4 py-3 shadow-[0_20px_45px_-20px_rgba(10,31,68,0.35)] backdrop-blur dark:border-white/10 dark:bg-dark-800/95"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

function Pill({ tone = "teal" }: { tone?: "teal" | "blue" }) {
  return (
    <span
      className={`flex h-7 w-7 items-center justify-center rounded-full text-white shadow ${
        tone === "teal"
          ? "bg-[#3FB8C4]"
          : "bg-accent-gradient"
      }`}
    >
      <TrendingUp className="h-3.5 w-3.5" />
    </span>
  );
}

export function HeroMockup() {
  const { t } = useI18n();
  const m = t.heroMockup;

  return (
    <div className="relative mx-auto flex w-full max-w-3xl items-center justify-center py-10">
      {/* ambient glow behind everything */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,111,214,0.25),transparent_70%)] blur-2xl" />
        <div className="absolute left-1/4 top-1/3 h-40 w-40 rounded-full bg-[#3FB8C4]/20 blur-3xl animate-aurora" />
        <div className="absolute right-1/4 bottom-1/3 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl animate-aurora-slow" />
      </div>

      {/* ===== Center phone ===== */}
      <motion.div
        variants={float}
        animate="animate"
        className="relative z-10 w-[230px] shrink-0 sm:w-[260px]"
      >
        <div className="relative rounded-[2.4rem] border-[8px] border-[#0c1424] bg-[#0c1424] shadow-[0_40px_80px_-30px_rgba(10,31,68,0.6)]">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#0c1424]" />
          <div className="relative overflow-hidden rounded-[1.9rem] bg-[#0c1424] pb-3 pt-2">
            {/* status bar */}
            <div className="flex items-center justify-between px-5 pt-1 text-[9px] font-semibold text-white/80">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-3 rounded-[1px] bg-white/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                <span className="h-1.5 w-4 rounded-[2px] border border-white/40" />
              </div>
            </div>

            {/* finance panel (white card) */}
            <div className="mx-3 mt-3 rounded-3xl bg-white p-4 shadow-xl">
              <p className="text-center text-[13px] font-bold text-dark-900">
                {m.panelTitle}
              </p>
              <p className="mt-0.5 text-center text-[8px] text-dark-900/50">
                {m.panelSubtitle}
              </p>

              {/* row 1 */}
              <div className="mt-3 flex items-center justify-between rounded-2xl border border-black/[0.06] bg-zinc-50 px-3 py-2.5">
                <span className="flex items-center gap-1.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-gradient text-[8px] font-bold text-white">
                    CA
                  </span>
                  <span className="flex items-center gap-0.5 text-[10px] font-semibold text-dark-900">
                    {t.hero.integrations[0]}{" "}
                    <ChevronDown className="h-2.5 w-2.5 text-dark-900/40" />
                  </span>
                </span>
                <span className="text-[10px] font-bold text-dark-900">
                  984,17 DH
                </span>
              </div>

              {/* swap badge */}
              <div className="-my-1.5 flex justify-center">
                <span className="z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#3FB8C4] text-white shadow">
                  <Repeat className="h-3 w-3" />
                </span>
              </div>

              {/* row 2 */}
              <div className="flex items-center justify-between rounded-2xl border border-black/[0.06] bg-zinc-50 px-3 py-2.5">
                <span className="flex items-center gap-1.5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A1F44] text-[8px] font-bold text-white">
                    ST
                  </span>
                  <span className="flex items-center gap-0.5 text-[10px] font-semibold text-dark-900">
                    {t.hero.integrations[1]}{" "}
                    <ChevronDown className="h-2.5 w-2.5 text-dark-900/40" />
                  </span>
                </span>
                <span className="text-[10px] font-bold text-dark-900">
                  537,89 DH
                </span>
              </div>

              {/* convert button */}
              <button className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-full bg-[#0c1424] py-2.5 text-[10px] font-semibold text-white">
                {m.convert} <ArrowRight className="h-3 w-3" />
              </button>
            </div>

            {/* running row */}
            <div className="mx-3 mt-3 flex items-center gap-1.5 text-[9px] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3FB8C4]" />
              {m.running}
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== Floating cards ===== */}
      {/* Total balance — top left */}
      <StatCard
        delay={0.2}
        duration={5.5}
        className="left-0 top-6 sm:left-2 lg:left-6"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <Wallet className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="text-[9px] text-dark-900/50 dark:text-white/50">
              {m.totalBalance}
            </p>
            <p className="text-sm font-extrabold text-dark-900 dark:text-white">
              9 647,00 DH
            </p>
          </div>
          <span className="ms-1 rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-bold text-emerald-600">
            +6,5%
          </span>
        </div>
      </StatCard>

      {/* Net Income — top right */}
      <StatCard
        delay={0.35}
        duration={6}
        className="right-0 top-2 sm:right-2 lg:right-6"
      >
        <div className="flex items-center gap-2.5">
          <div className="leading-tight">
            <p className="text-[9px] text-dark-900/50 dark:text-white/50">
              {m.netIncome}
            </p>
            <p className="text-sm font-extrabold text-dark-900 dark:text-white">
              234,98 KDH
            </p>
          </div>
          <Pill tone="blue" />
        </div>
      </StatCard>

      {/* Received — bottom left */}
      <StatCard
        delay={0.5}
        duration={5.2}
        className="bottom-10 left-0 sm:left-4 lg:left-2"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3FB8C4]/15 text-[#3FB8C4]">
            <ArrowDownLeft className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="text-[9px] text-dark-900/50 dark:text-white/50">
              {m.received}
            </p>
            <p className="text-sm font-extrabold text-dark-900 dark:text-white">
              6 790,67 DH
            </p>
          </div>
        </div>
      </StatCard>

      {/* Trusted users — bottom right */}
      <StatCard
        delay={0.65}
        duration={5.8}
        className="bottom-6 right-0 sm:right-3 lg:right-4"
      >
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-gradient text-white">
            <Users className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-extrabold text-dark-900 dark:text-white">
              12 489+
            </p>
            <p className="text-[9px] text-dark-900/50 dark:text-white/50">
              {m.trustedUsers}
            </p>
          </div>
        </div>
      </StatCard>
    </div>
  );
}
