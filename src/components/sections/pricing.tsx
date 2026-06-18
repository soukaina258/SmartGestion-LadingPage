"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Star,
  Tag,
  Monitor,
  Cloud,
  RefreshCw,
  WifiOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/provider";

type Mode = "desktop" | "online";

/* Static per-plan pricing config (numbers + which is highlighted).
   Text comes from translations, keyed by plan.key. */
type PriceConfig = {
  desktop: { kind: "free" | "amount" | "quote"; value?: string };
  online: { kind: "free" | "amount" | "quote"; value?: string };
};

const PRICE_CONFIG: Record<string, { highlighted?: boolean; prices: PriceConfig }> = {
  demo: {
    prices: {
      desktop: { kind: "free" },
      online: { kind: "free" },
    },
  },
  premium: {
    highlighted: true,
    prices: {
      desktop: { kind: "amount", value: "499 DH" },
      online: { kind: "amount", value: "499 DH" },
    },
  },
  standard: {
    prices: {
      desktop: { kind: "amount", value: "299 DH" },
      online: { kind: "amount", value: "299 DH" },
    },
  },
};

const reveal = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function Pricing() {
  const { t } = useI18n();
  const [mode, setMode] = React.useState<Mode>("online");

  const MODE_META = {
    desktop: { label: t.pricing.modeDesktop, icon: Monitor, tagIcon: WifiOff, tag: t.pricing.tagNoUpdates },
    online: { label: t.pricing.modeOnline, icon: Cloud, tagIcon: RefreshCw, tag: t.pricing.tagUpdates },
  } as const;
  const meta = MODE_META[mode];

  // build plans by merging static price config with translated text
  const plans = t.pricing.plans.map((p) => {
    const cfg = PRICE_CONFIG[p.key];
    const resolve = (m: Mode) => {
      const pc = cfg.prices[m];
      if (pc.kind === "free")
        return { price: t.pricing.free, period: t.pricing.periodTrial };
      if (pc.kind === "quote")
        return { price: t.pricing.onQuote, period: "" };
      return {
        price: pc.value ?? "",
        period: m === "desktop" ? t.pricing.period3Years : t.pricing.periodPerYear,
      };
    };
    // backup feature is exclusive to the Premium desktop (offline) version
    const features =
      p.key === "premium" && mode === "desktop"
        ? [...p.features, t.pricing.desktopBackup]
        : p.features;
    return {
      key: p.key,
      name: p.name,
      description: p.description,
      features,
      cta: p.cta,
      highlighted: cfg.highlighted,
      prices: { desktop: resolve("desktop"), online: resolve("online") },
      isFree: cfg.prices[mode].kind === "free",
    };
  });

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white py-24 text-dark-900 dark:bg-dark-900 dark:text-white"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-[700px] -translate-x-1/2 rounded-full bg-radial-glow opacity-50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-dark-900/70 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/70">
            <Tag className="h-3.5 w-3.5 text-brand-600" /> {t.pricing.badge}
          </span>
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl">
            {t.pricing.title1}{" "}
            <span className="text-gradient">{t.pricing.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-dark-900/55 dark:text-white/55">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Desktop / Online toggle */}
        <div className="mt-9 flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-zinc-100 p-1 dark:border-white/10 dark:bg-white/5">
            {(Object.keys(MODE_META) as Mode[]).map((m) => {
              const Icon = MODE_META[m].icon;
              const active = mode === m;
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all",
                    active
                      ? "bg-accent-gradient text-white shadow-neon"
                      : "text-dark-900/60 hover:text-dark-900 dark:text-white/60 dark:hover:text-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {MODE_META[m].label}
                </button>
              );
            })}
          </div>
        </div>

        {/* mode tag */}
        <div className="mt-4 flex justify-center">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
              mode === "online"
                ? "border-brand-500/40 bg-brand-500/10 text-brand-600 dark:text-brand-400"
                : "border-amber-400/40 bg-amber-400/10 text-amber-600 dark:text-amber-300"
            )}
          >
            <meta.tagIcon className="h-3.5 w-3.5" />
            {meta.tag}
          </span>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-10 grid max-w-6xl items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const p = plan.prices[mode];
            return (
              <motion.div
                key={plan.key}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-80px" }}
                className={cn(
                  "relative flex flex-col rounded-3xl p-7 transition-all duration-300",
                  plan.highlighted
                    ? "bg-accent-gradient text-white shadow-neon lg:-translate-y-4 lg:scale-[1.03]"
                    : "border border-black/[0.08] bg-white text-dark-900 shadow-sm hover:-translate-y-1.5 hover:border-brand-500/30 hover:shadow-card-lift dark:border-white/10 dark:bg-dark-800 dark:text-white dark:hover:border-white/20"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 whitespace-nowrap rounded-full bg-white px-3 py-1 text-[11px] font-bold text-brand-600 shadow-lg">
                    <Star className="h-3 w-3 fill-brand-500 text-brand-500" />
                    {t.pricing.mostPopular}
                  </span>
                )}

                <div className="flex flex-col gap-1">
                  <h3
                    className={cn(
                      "text-lg font-bold tracking-tight",
                      plan.highlighted
                        ? "text-white"
                        : "text-dark-900 dark:text-white"
                    )}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={cn(
                      "text-xs",
                      plan.highlighted
                        ? "text-white/80"
                        : "text-dark-900/50 dark:text-white/50"
                    )}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mt-5 flex items-end gap-1.5">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {p.price}
                  </span>
                  <span
                    className={cn(
                      "pb-1 text-sm font-medium",
                      plan.highlighted
                        ? "text-white/85"
                        : "text-dark-900/55 dark:text-white/55"
                    )}
                  >
                    {p.period}
                  </span>
                </div>
                <p
                  className={cn(
                    "mt-1 flex items-center gap-1.5 text-[11px]",
                    plan.highlighted
                      ? "text-white/75"
                      : "text-dark-900/45 dark:text-white/45"
                  )}
                >
                  <meta.icon className="h-3.5 w-3.5" />
                  {plan.isFree
                    ? t.pricing.trialNote
                    : mode === "desktop"
                      ? t.pricing.noteDesktop
                      : t.pricing.noteOnline}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          plan.highlighted ? "bg-white/25" : "bg-brand-500/15"
                        )}
                      >
                        <Check
                          className={cn(
                            "h-3 w-3",
                            plan.highlighted ? "text-white" : "text-brand-600"
                          )}
                          strokeWidth={3}
                        />
                      </span>
                      <span
                        className={cn(
                          plan.highlighted
                            ? "text-white/95"
                            : "text-dark-900/75 dark:text-white/75"
                        )}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={plan.highlighted ? "light" : "dark"}
                  className={cn(
                    "mt-8 w-full",
                    plan.highlighted && "text-brand-600 hover:text-brand-700"
                  )}
                >
                  <a href="#contact">{plan.cta}</a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-xs text-dark-900/40 dark:text-white/40">
          {t.pricing.footnote}
        </p>
      </div>
    </section>
  );
}
