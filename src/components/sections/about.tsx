"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Layers,
  Briefcase,
  Zap,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ErpValuePanel } from "@/components/erp-value-panel";
import { useI18n } from "@/i18n/provider";

const reveal = {
  hidden: { opacity: 0, y: 28 },
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

const POINT_ICONS: LucideIcon[] = [Layers, Briefcase, Zap, ShieldCheck];

export function About() {
  const { t } = useI18n();
  const a = t.about;
  const points = a.points.map((p, i) => ({
    ...p,
    Icon: POINT_ICONS[i % POINT_ICONS.length],
  }));

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 dark:bg-dark-900"
    >
      {/* ambient accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-24 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-[#3FB8C4]/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* ===== Left: copy ===== */}
        <motion.div
          custom={0}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gradient">
            {a.whyEyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-dark-900 dark:text-white sm:text-5xl">
            {a.whyTitle1}{" "}
            <span className="text-gradient">{a.whyTitleHighlight}</span>{" "}
            {a.whyTitle2}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-dark-900/55 dark:text-white/55">
            {a.whyBody}
          </p>

          {/* selling points */}
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                custom={i + 1}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-gradient text-white shadow-neon">
                  <p.Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-dark-900 dark:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-dark-900/55 dark:text-white/55">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-9">
            <Button asChild variant="gradient" size="lg">
              <a href="#modules">
                {a.whyCta} <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>

        {/* ===== Right: ERP value panel ===== */}
        <motion.div
          custom={1}
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="relative"
        >
          {/* glow behind */}
          <div className="pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10 rounded-[40%] bg-[radial-gradient(ellipse_at_center,rgba(29,111,214,0.22),rgba(10,31,68,0.12)_55%,transparent_75%)] blur-[60px]" />

          <ErpValuePanel />
        </motion.div>
      </div>
    </section>
  );
}
