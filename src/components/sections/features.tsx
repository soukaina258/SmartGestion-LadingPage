"use client";

import * as React from "react";
import { motion, useInView, animate, type Variants } from "framer-motion";
import {
  TrendingUp,
  Calculator,
  ArrowRight,
  Sparkles,
  PieChart,
  AlertTriangle,
  LayoutDashboard,
  DollarSign,
  Link2,
  X,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/i18n/provider";

/* ---------------------------------------------------------------- */
/* Motion helpers                                                    */
/* ---------------------------------------------------------------- */

const EASE = [0.16, 1, 0.3, 1] as const;

const reveal: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay: i * 0.09, ease: EASE },
  }),
};

const headerReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  }),
};

function fmt(n: number) {
  return n.toLocaleString("fr-MA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/* number that counts up + can re-run on demand */
function useCountUp(to: number, run: boolean, duration = 1.3) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!run) return;
    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [run, to, duration]);
  return val;
}

/* ---------------------------------------------------------------- */
/* Visual 1 — Price calculator (real app feature)                    */
/* TTC + TVA% + Remise%  ->  HT auto                                 */
/* ---------------------------------------------------------------- */

function PriceCalculatorVisual() {
  const { t } = useI18n();
  const ui = t.features.ui;
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const TTC = 1290;
  const TVA = 20;
  const REMISE = 10;
  // HT = (TTC * (1 - remise)) / (1 + tva)
  const HT = (TTC * (1 - REMISE / 100)) / (1 + TVA / 100);

  const ttc = useCountUp(TTC, inView, 1.1);
  const ht = useCountUp(HT, inView, 1.6);

  const fields = [
    { label: ui.priceTTC, value: `${fmt(ttc)}`, accent: true, delay: 0.15 },
    { label: ui.tva, value: `${TVA}`, accent: false, delay: 0.3 },
    { label: ui.remise, value: `${REMISE}`, accent: false, delay: 0.45 },
  ];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_10px_40px_-18px_rgba(10,31,68,0.25)] dark:border-white/10 dark:bg-dark-900"
    >
      {/* modal title bar */}
      <div className="flex items-start justify-between px-4 pb-3 pt-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-400/15 text-brand-400">
            <Calculator className="h-3.5 w-3.5" />
          </span>
          <div>
            <p className="text-xs font-bold text-dark-900 dark:text-white">
              {ui.calcTitle}
            </p>
          </div>
        </div>
        <span className="flex h-6 w-6 items-center justify-center rounded-full text-dark-900/30 dark:text-white/30">
          <X className="h-3.5 w-3.5" />
        </span>
      </div>

      <div className="space-y-2.5 px-4 pb-4">
        {fields.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: f.delay, ease: EASE }}
          >
            <p className="mb-1 text-[10px] font-medium text-dark-900/50 dark:text-white/50">
              {f.label}
            </p>
            <div
              className={`flex h-9 items-center justify-between rounded-lg border px-3 text-xs font-semibold transition-colors ${
                f.accent
                  ? "border-brand-400 bg-brand-50/40 text-dark-900 ring-2 ring-brand-400/20 dark:bg-brand-400/10 dark:text-white"
                  : "border-black/[0.08] bg-black/[0.02] text-dark-900/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
              }`}
            >
              <span>{f.value}</span>
              {f.accent && (
                <span className="text-[9px] font-bold text-brand-400">
                  {ui.currency}
                </span>
              )}
            </div>
          </motion.div>
        ))}

        {/* auto-computed HT result */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.75, type: "spring", stiffness: 220, damping: 18 }}
          className="!mt-3.5 flex items-center justify-between rounded-xl bg-accent-gradient px-3.5 py-2.5 shadow-neon"
        >
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white/85">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Check className="h-3.5 w-3.5" />
            </motion.span>
            {ui.priceHT}
          </span>
          <span className="text-sm font-bold text-white">
            {fmt(ht)} {ui.currency}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Visual 2 — Commercial margin breakdown (real app feature)         */
/* CA - (cost - credits) = margin                                    */
/* ---------------------------------------------------------------- */

function MarginVisual() {
  const { t } = useI18n();
  const ui = t.features.ui;
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const rows = [
    { label: ui.revenue, value: "4 250,00", sign: "", muted: false },
    { label: ui.costOfSales, value: "2 980,00", sign: "−", muted: true },
    { label: ui.customerCredit, value: "210,00", sign: "+", muted: true },
    { label: ui.netCost, value: "2 770,00", sign: "", muted: false },
  ];

  const margin = useCountUp(1480, inView, 1.6);

  return (
    <div
      ref={ref}
      className="relative h-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-4 shadow-[0_10px_40px_-18px_rgba(10,31,68,0.2)] dark:border-white/10 dark:bg-dark-900"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/12 text-violet-500">
          <PieChart className="h-3.5 w-3.5" />
        </span>
        <p className="text-xs font-bold text-dark-900 dark:text-white">
          {ui.marginTitle}
        </p>
      </div>

      <div className="space-y-1">
        {rows.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15 + i * 0.1, ease: EASE }}
            className={`flex items-center justify-between border-b border-dashed border-black/[0.06] py-1.5 text-[11px] last:border-0 dark:border-white/[0.06] ${
              r.muted
                ? "text-dark-900/50 dark:text-white/45"
                : "font-semibold text-dark-900/80 dark:text-white/80"
            }`}
          >
            <span className="flex items-center gap-1">
              {r.sign && <span className="w-2 text-dark-900/40">{r.sign}</span>}
              {r.label}
            </span>
            <span>
              {r.value} {ui.currency}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, ease: EASE }}
        className="mt-3 flex items-center justify-between rounded-xl bg-violet-500/[0.07] px-3 py-2.5"
      >
        <span className="text-xs font-bold text-dark-900 dark:text-white">
          {ui.grossMargin}
        </span>
        <span className="text-base font-extrabold text-violet-600 dark:text-violet-400">
          {fmt(margin)} {ui.currency}
        </span>
      </motion.div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Visual 3 — VAT tax summary (real app feature)                     */
/* ---------------------------------------------------------------- */

function VatVisual() {
  const { t } = useI18n();
  const ui = t.features.ui;
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const items = [
    { label: ui.vatCollected, value: "1 240,50", pct: 39, color: "from-emerald-500 to-emerald-400", dot: "bg-emerald-500" },
    { label: ui.vatDeductible, value: "3 180,00", pct: 100, color: "from-brand-500 to-brand-400", dot: "bg-brand-500" },
  ];

  return (
    <div
      ref={ref}
      className="relative h-full overflow-hidden rounded-2xl border border-black/[0.06] bg-white p-4 shadow-[0_10px_40px_-18px_rgba(10,31,68,0.2)] dark:border-white/10 dark:bg-dark-900"
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-500/12 text-brand-500">
          <PieChart className="h-3.5 w-3.5" />
        </span>
        <p className="text-xs font-bold text-dark-900 dark:text-white">
          {ui.vatTitle}
        </p>
      </div>

      <div className="space-y-3">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15 + i * 0.12, ease: EASE }}
          >
            <div className="mb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] font-medium text-dark-900/55 dark:text-white/55">
                <span className={`h-1.5 w-1.5 rounded-full ${it.dot}`} />
                {it.label}
              </span>
              <span className="text-[11px] font-bold text-dark-900 dark:text-white">
                {it.value}{" "}
                <span className="text-dark-900/40 dark:text-white/40">
                  {ui.currency}
                </span>
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-black/[0.05] dark:bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${it.pct}%` } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.9, ease: EASE }}
                className={`h-full rounded-full bg-gradient-to-r ${it.color}`}
              />
            </div>
          </motion.div>
        ))}

        {/* balance */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, ease: EASE }}
          className="flex items-center justify-between rounded-xl bg-brand-50/60 px-3 py-2 dark:bg-white/[0.04]"
        >
          <div>
            <p className="text-[10px] font-medium text-dark-900/55 dark:text-white/55">
              {ui.vatBalance}
            </p>
            <p className="text-sm font-extrabold text-dark-900 dark:text-white">
              −1 939,50{" "}
              <span className="text-[10px] text-dark-900/40 dark:text-white/40">
                {ui.currency}
              </span>
            </p>
          </div>
          <span className="rounded-full bg-brand-500/15 px-2 py-0.5 text-[10px] font-bold text-brand-600 dark:text-brand-400">
            {ui.credit}
          </span>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Visual 4 — Stock alerts (real app feature)                        */
/* ---------------------------------------------------------------- */

function AlertsVisual() {
  const { t } = useI18n();
  const ui = t.features.ui;
  const products = [
    { name: "La Roche-Posay Anthelios 50+", ref: "REF-002", qty: 4 },
    { name: "CeraVe Gel Moussant 473ml", ref: "REF-003", qty: 4 },
    { name: "Eucerin Sun Gel-Crème SPF50+", ref: "REF-006", qty: 0 },
  ];
  return (
    <div className="relative h-full overflow-hidden rounded-2xl border border-amber-500/20 bg-amber-50/40 p-4 dark:border-amber-500/15 dark:bg-amber-500/[0.04]">
      <div className="mb-3 flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs font-bold text-dark-900 dark:text-white">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-600">
            <AlertTriangle className="h-3.5 w-3.5" />
          </span>
          {ui.alertsTitle}
        </span>
        <motion.span
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-bold text-white"
        >
          5
        </motion.span>
      </div>

      <div className="space-y-2">
        {products.map((p, i) => (
          <motion.div
            key={p.ref}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.12, ease: EASE }}
            className="flex items-center gap-2.5 rounded-xl border border-amber-500/15 bg-white px-2.5 py-2 dark:border-white/10 dark:bg-dark-800"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
              <Link2 className="h-3 w-3" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-semibold text-dark-900 dark:text-white">
                {p.name}
              </p>
              <p className="text-[9px] uppercase tracking-wide text-dark-900/40 dark:text-white/40">
                {p.ref}
              </p>
            </div>
            <div className="text-right">
              <p
                className={`text-[11px] font-bold ${
                  p.qty === 0 ? "text-red-500" : "text-amber-600"
                }`}
              >
                {p.qty} {ui.units}
              </p>
              <p className="text-[8px] font-semibold uppercase text-amber-600/70">
                {ui.lowStock}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Visual 5 — Financial dashboard KPIs (real app feature)            */
/* ---------------------------------------------------------------- */

function DashboardVisual() {
  const { t } = useI18n();
  const ui = t.features.ui;
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const ca = useCountUp(4250, inView, 1.4);

  const kpis = [
    { label: ui.receivables, value: "1 850,00", icon: DollarSign, tone: "text-brand-500" },
    { label: ui.expenses, value: "3 120,00", icon: TrendingUp, tone: "text-red-500" },
    { label: ui.netProfit, value: "1 130,00", icon: PieChart, tone: "text-violet-500" },
  ];

  const bars = [40, 58, 46, 72, 52, 88, 64, 78, 56, 92, 70, 84];

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_10px_40px_-18px_rgba(10,31,68,0.25)] dark:border-white/10 dark:bg-dark-900"
    >
      {/* main KPI */}
      <div className="flex items-start justify-between border-b border-black/[0.05] px-4 py-3.5 dark:border-white/5">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wide text-dark-900/45 dark:text-white/45">
            {ui.revenueTTC}
          </p>
          <p className="mt-0.5 text-2xl font-extrabold tracking-tight text-dark-900 dark:text-white">
            {fmt(ca)} {ui.currency}
          </p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/12 text-brand-500">
          <DollarSign className="h-4 w-4" />
        </span>
      </div>

      {/* mini KPIs */}
      <div className="grid grid-cols-3 gap-2 px-4 py-3">
        {kpis.map((k, i) => (
          <motion.div
            key={k.label}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 + i * 0.1, ease: EASE }}
            className="rounded-xl bg-black/[0.02] p-2 dark:bg-white/5"
          >
            <k.icon className={`mb-1 h-3 w-3 ${k.tone}`} />
            <p className="text-[8px] font-medium text-dark-900/45 dark:text-white/45">
              {k.label}
            </p>
            <p className="truncate text-[11px] font-bold text-dark-900 dark:text-white">
              {k.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* flux chart */}
      <div className="relative h-16 px-4 pb-4">
        <div className="flex h-full items-end justify-between gap-1">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={inView ? { height: `${h}%` } : {}}
              transition={{ delay: 0.3 + i * 0.04, duration: 0.6, ease: EASE }}
              className="flex-1 rounded-sm bg-gradient-to-t from-brand-500/70 to-brand-400/40"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Section                                                           */
/* ---------------------------------------------------------------- */

export function Features() {
  const { t } = useI18n();
  const f = t.features.items;

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-24 dark:bg-dark-900"
    >
      {/* ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-brand-500/[0.06] blur-[120px]" />
        <div className="absolute bottom-10 left-0 h-80 w-80 rounded-full bg-[#3FB8C4]/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header — centered */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            custom={0}
            variants={headerReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Badge variant="light" className="mb-5 gap-1.5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-brand-600" />
              {t.features.badge}
            </Badge>
          </motion.div>
          <motion.h2
            custom={1}
            variants={headerReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-dark-900 dark:text-white sm:text-5xl"
          >
            {t.features.title1}{" "}
            <span className="text-gradient">{t.features.titleHighlight}</span>
          </motion.h2>
          <motion.p
            custom={2}
            variants={headerReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-dark-900/55 dark:text-white/55"
          >
            {t.features.intro}
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-6">
          {/* Card 1 — Price calculator (2/6) */}
          <FeatureCard
            index={0}
            className="lg:col-span-2"
            icon={Calculator}
            title={f.calculator.title}
            description={f.calculator.description}
            visualOnTop={false}
          >
            <PriceCalculatorVisual />
          </FeatureCard>

          {/* Card 2 — Financial dashboard (4/6) */}
          <FeatureCard
            index={1}
            className="lg:col-span-4"
            icon={LayoutDashboard}
            title={f.dashboard.title}
            description={f.dashboard.description}
            visualOnTop={false}
          >
            <DashboardVisual />
          </FeatureCard>

          {/* Card 3 — Margin breakdown (3/6) */}
          <FeatureCard
            index={2}
            className="lg:col-span-3"
            icon={PieChart}
            title={f.margin.title}
            description={f.margin.description}
            visualOnTop
          >
            <MarginVisual />
          </FeatureCard>

          {/* Card 4 — VAT summary (3/6) */}
          <FeatureCard
            index={3}
            className="lg:col-span-3"
            icon={PieChart}
            title={f.vat.title}
            description={f.vat.description}
            visualOnTop
          >
            <VatVisual />
          </FeatureCard>

          {/* Card 5 — Stock alerts (4/6) */}
          <FeatureCard
            index={4}
            className="lg:col-span-4"
            icon={AlertTriangle}
            title={f.alerts.title}
            description={f.alerts.description}
            visualOnTop={false}
          >
            <AlertsVisual />
          </FeatureCard>

          {/* Card 6 — CTA tile (2/6) */}
          <motion.div
            custom={5}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-accent-gradient p-6 text-white shadow-neon lg:col-span-2"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-white/5 blur-2xl" />
            <Sparkles className="h-7 w-7" />
            <div className="mt-6">
              <h3 className="text-lg font-bold leading-snug">
                {t.features.title1} {t.features.titleHighlight}
              </h3>
              <Button asChild variant="light" size="sm" className="mt-4">
                <a href="#about">
                  {t.features.learnMore} <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* shared feature card shell */
function FeatureCard({
  index,
  className = "",
  icon: Icon,
  title,
  description,
  visualOnTop,
  children,
}: {
  index: number;
  className?: string;
  icon: React.ElementType;
  title: string;
  description: string;
  visualOnTop: boolean;
  children: React.ReactNode;
}) {
  const header = (
    <div className="flex items-start gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gradient shadow-neon transition-transform duration-300 group-hover:scale-105">
        <Icon className="h-5 w-5 text-white" strokeWidth={2} />
      </span>
      <div>
        <h3 className="text-base font-bold tracking-tight text-dark-900 dark:text-white sm:text-lg">
          {title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-dark-900/55 dark:text-white/55">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <motion.div
      custom={index}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 280, damping: 24 }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-black/[0.08] bg-white p-6 shadow-[0_2px_24px_-10px_rgba(15,23,42,0.1)] transition-colors duration-300 hover:border-brand-500/30 hover:shadow-card-lift dark:border-white/10 dark:bg-dark-800 dark:hover:border-white/20 ${className}`}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-card-glow opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      {visualOnTop ? (
        <>
          {header}
          <div className="mt-5 flex-1">{children}</div>
        </>
      ) : (
        <>
          <div className="mb-5 flex-1">{children}</div>
          {header}
        </>
      )}
    </motion.div>
  );
}
