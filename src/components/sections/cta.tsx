"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/provider";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function CTA() {
  const { t } = useI18n();
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-white py-24 dark:bg-dark-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-80px" }}
          className="relative overflow-hidden rounded-[2.5rem] bg-accent-gradient px-6 py-16 text-center shadow-neon-purple sm:px-12 sm:py-20"
        >
          {/* decorative layers */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />
            <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> {t.cta.badge}
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.cta.title1}
              <br />
              {t.cta.titleHighlight}
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-base text-white/85">
              {t.cta.subtitle}
            </p>

            <div className="mt-9 flex justify-center">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-brand-700 shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
              >
                {t.cta.button}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <p className="mt-5 text-xs text-white/70">{t.cta.note}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
