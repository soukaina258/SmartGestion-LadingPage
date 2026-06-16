"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/i18n/provider";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: (i % 3) * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const AVATAR_GRADIENTS = [
  "from-[#0A1F44] to-[#1D6FD6]",
  "from-[#1D6FD6] to-[#3FB8C4]",
  "from-[#1657AD] to-[#5CC9C9]",
  "from-[#0A1F44] to-[#2E8BD8]",
  "from-[#1D6FD6] to-[#0A1F44]",
  "from-[#2E8BD8] to-[#3FB8C4]",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toUpperCase();
}

export function Testimonials() {
  const { t } = useI18n();

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-zinc-50/70 py-24 dark:bg-dark-800/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="light" className="mb-4 gap-1.5 shadow-sm">
            <Star className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
            {t.testimonials.badge}
          </Badge>
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark-900 dark:text-white sm:text-5xl">
            {t.testimonials.title1}{" "}
            <span className="text-gradient">
              {t.testimonials.titleHighlight}
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-dark-900/55 dark:text-white/55">
            {t.testimonials.intro}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.items.map((item, i) => (
            <motion.figure
              key={item.name}
              custom={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col rounded-3xl border border-black/[0.07] bg-white p-7 shadow-[0_2px_20px_-8px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lift dark:border-white/10 dark:bg-dark-800"
            >
              <Quote className="h-7 w-7 text-brand-500/30" />
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-dark-900/70 dark:text-white/70">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-black/[0.06] pt-5 dark:border-white/10">
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${
                    AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]
                  } text-sm font-bold text-white shadow-sm`}
                >
                  {initials(item.name)}
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-dark-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-dark-900/50 dark:text-white/50">
                    {item.role}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
