"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/provider";

export function FAQ() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-24 dark:bg-dark-900"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="light" className="mb-4 gap-1.5 shadow-sm">
            <HelpCircle className="h-3.5 w-3.5 text-brand-600" />
            {t.faq.badge}
          </Badge>
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark-900 dark:text-white sm:text-5xl">
            {t.faq.title1}{" "}
            <span className="text-gradient">{t.faq.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-dark-900/55 dark:text-white/55">
            {t.faq.intro}
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-12 space-y-3">
          {t.faq.items.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.question}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-white transition-colors dark:bg-dark-800",
                  open
                    ? "border-brand-500/40 shadow-[0_8px_30px_-12px_rgba(29,111,214,0.3)]"
                    : "border-black/[0.08] dark:border-white/10"
                )}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-start"
                >
                  <span className="text-sm font-semibold text-dark-900 dark:text-white sm:text-base">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                      open
                        ? "rotate-45 bg-accent-gradient text-white"
                        : "bg-black/[0.05] text-dark-900/60 dark:bg-white/10 dark:text-white/60"
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-dark-900/60 dark:text-white/60">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
