"use client";

import * as React from "react";
import { motion, useInView, animate } from "framer-motion";
import {
  TrendingUp,
  Workflow,
  Boxes,
  ArrowRight,
  Zap,
  FileCheck2,
  Bell,
  Star,
  Layers,
  Sparkles,
  ScanLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/i18n/provider";

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

/* animated number counter (MAD) */
function Counter({
  to,
  className,
}: {
  to: number;
  className?: string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className={className}>
      {val.toLocaleString("fr-MA", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}{" "}
      DH
    </span>
  );
}

/* ---------- Visual 1: Smart dashboards (MAD revenue + animated bars) ---------- */
function InsightsVisual() {
  const bars = [38, 60, 45, 72, 50, 88, 64, 76];
  return (
    <div className="relative h-56 overflow-hidden rounded-2xl bg-dark-900 p-5">
      {/* ambient + animated glow */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-10 -top-12 h-36 w-36 rounded-full bg-brand-500/40 blur-3xl"
      />
      <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-[#3FB8C4]/30 blur-3xl" />

      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-[11px] text-white/50">Chiffre d&apos;affaires</p>
          <Counter to={87008.14} className="text-2xl font-bold text-white" />
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring", stiffness: 220 }}
          className="flex items-center gap-1 rounded-full bg-emerald-400/15 px-2 py-1 text-[11px] font-semibold text-emerald-300"
        >
          <TrendingUp className="h-3 w-3" /> +18,4%
        </motion.span>
      </div>

      {/* bars + animated sparkline overlay */}
      <div className="relative mt-6 h-24">
        <div className="absolute inset-0 flex items-end justify-between gap-2">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0, opacity: 0.4 }}
              whileInView={{ height: `${h}%`, opacity: 0.55 + i * 0.05 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + i * 0.07,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex-1 rounded-full bg-gradient-to-t from-brand-700 to-[#3FB8C4]"
            />
          ))}
        </div>
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 40">
          <motion.path
            d="M2 28 L15 18 L28 24 L42 10 L56 20 L70 4 L84 14 L98 7"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.85 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.4, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </div>
  );
}

/* ---------- Visual 2: Workflow automation (animated flow) ---------- */
function AutomationVisual() {
  const nodes = [
    { icon: FileCheck2, label: "Devis reçu", x: "left-4 top-5" },
    { icon: Zap, label: "Validé auto.", x: "right-4 top-1/2 -translate-y-1/2" },
    { icon: Bell, label: "Équipe notifiée", x: "left-6 bottom-6" },
  ];
  return (
    <div className="relative h-56 overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-br from-brand-50/60 to-white dark:border-white/10 dark:from-dark-800 dark:to-dark-900 p-5">
      <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-gradient opacity-[0.08] blur-2xl" />

      {/* connecting animated dashed line */}
      <svg className="absolute inset-0 h-full w-full" aria-hidden>
        <motion.path
          d="M 70 48 Q 210 70 225 112 T 95 196"
          fill="none"
          stroke="url(#flow-g)"
          strokeWidth="2"
          strokeDasharray="5 6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
        {/* travelling pulse dot */}
        <motion.circle
          r="3.5"
          fill="#1D6FD6"
          initial={{ offsetDistance: "0%" }}
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ offsetPath: 'path("M 70 48 Q 210 70 225 112 T 95 196")' }}
        />
        <defs>
          <linearGradient id="flow-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0A1F44" />
            <stop offset="50%" stopColor="#1D6FD6" />
            <stop offset="100%" stopColor="#3FB8C4" />
          </linearGradient>
        </defs>
      </svg>

      {nodes.map(({ icon: Icon, label, x }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.3, type: "spring", stiffness: 220, damping: 16 }}
          className={`absolute ${x} flex items-center gap-2 rounded-xl border border-black/5 bg-white px-3 py-2 shadow-card-lift dark:border-white/10 dark:bg-dark-800`}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent-gradient">
            <Icon className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="text-xs font-semibold text-dark-900 dark:text-white">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- Visual 3: Inventory & multi-business (category stock cards, MAD) ---------- */
function InventoryVisual() {
  const cards = [
    { label: "Soins", value: "12 480", icon: Sparkles, rotate: "-rotate-6 -translate-x-7", z: "z-10", delay: 0.15 },
    { label: "Compléments", value: "8 920", icon: Layers, rotate: "rotate-0 -translate-y-2", z: "z-20", delay: 0 },
    { label: "Hygiène", value: "6 310", icon: ScanLine, rotate: "rotate-6 translate-x-7", z: "z-10", delay: 0.3 },
  ];
  return (
    <div className="relative flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-dark-900 p-5">
      <div className="absolute inset-0 bg-card-glow opacity-50" />
      {/* slow rotating guide ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
      />
      <Boxes
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-white/[0.05]"
        strokeWidth={0.5}
      />

      <div className="relative flex">
        {cards.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + c.delay, type: "spring", stiffness: 170, damping: 15 }}
            whileHover={{ y: -6 }}
            className={`${c.z} ${c.rotate} flex h-32 w-[88px] flex-col justify-between rounded-2xl border border-white/15 bg-gradient-to-br from-brand-600 to-[#3FB8C4] p-3 shadow-neon`}
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/15">
              <c.icon className="h-3.5 w-3.5 text-white" />
            </span>
            <div>
              <p className="text-sm font-bold leading-none text-white">
                {c.value}
              </p>
              <p className="mt-0.5 text-[9px] font-medium text-white/80">DH</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-white/90">
                {c.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const FEATURE_META = [
  { icon: TrendingUp, visual: <InsightsVisual /> },
  { icon: Workflow, visual: <AutomationVisual /> },
  { icon: Boxes, visual: <InventoryVisual /> },
];

export function Features() {
  const { t } = useI18n();
  const features = FEATURE_META.map((m, i) => ({
    ...m,
    title: t.features.cards[i].title,
    description: t.features.cards[i].description,
  }));
  return (
    <section id="features" className="relative overflow-hidden bg-white py-24 dark:bg-dark-900">
      {/* ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-brand-500/[0.06] blur-[120px]" />
        <div className="absolute left-0 bottom-10 h-80 w-80 rounded-full bg-[#3FB8C4]/[0.06] blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <Badge variant="light" className="mb-4 gap-1.5 shadow-sm">
              <Star className="h-3.5 w-3.5 text-brand-600" /> {t.features.badge}
            </Badge>
            <h2 className="max-w-md text-4xl font-bold leading-[1.1] tracking-tight text-dark-900 dark:text-white sm:text-5xl">
              {t.features.title1}
              <br />
              <span className="text-gradient">{t.features.titleHighlight}</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="mb-5 text-sm text-dark-900/55 dark:text-white/55">
              {t.features.intro}
            </p>
            <Button asChild variant="dark" size="md">
              <a href="#about">
                {t.features.learnMore} <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative flex flex-col rounded-3xl border border-black/[0.08] bg-white p-6 shadow-[0_2px_20px_-8px_rgba(15,23,42,0.08)] transition-colors duration-300 hover:border-brand-500/30 hover:shadow-card-lift dark:border-white/10 dark:bg-dark-800 dark:hover:border-white/20"
            >
              {/* hover corner glow */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-card-glow opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

              {f.visual}
              <div className="mt-6 flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gradient shadow-neon transition-transform duration-300 group-hover:scale-105">
                  <f.icon className="h-5 w-5 text-white" strokeWidth={2} />
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-dark-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-dark-900/55 dark:text-white/55">
                    {f.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
