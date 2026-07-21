"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Bell } from "lucide-react";
import { useI18n } from "@/i18n/provider";

const EASE = [0.16, 1, 0.3, 1] as const;

export function NewsletterBanner() {
  const { t } = useI18n();
  const n = t.newsletter;
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 dark:bg-dark-900 sm:px-6 lg:px-8">
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0A1F44] via-[#1D6FD6] to-[#3FB8C4] p-px shadow-[0_20px_80px_-20px_rgba(29,111,214,0.55)]"
      >
        {/* inner rounded container */}
        <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-gradient-to-br from-[#0c2252] via-[#1a5fc4] to-[#2ea8b8] px-8 py-14 sm:px-14 lg:px-20">

          {/* animated blobs */}
          <motion.div
            animate={reduced ? {} : { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <motion.div
            animate={reduced ? {} : { scale: [1, 1.15, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#3FB8C4]/30 blur-3xl"
          />
          {/* grid lines */}
          <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]" />
          {/* top shimmer line */}
          <motion.div
            animate={reduced ? {} : { x: ["-100%", "200%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
          />

          {/* content */}
          <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">

            {/* left — text */}
            <div className="flex-1">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-sm">
                <Bell className="h-3.5 w-3.5" />
                {n.badge}
              </div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
                {n.title}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">{n.brand}</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                    className="absolute inset-x-0 bottom-1 z-0 h-2 origin-left rounded-full bg-white/20"
                  />
                </span>
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65">
                {n.subtitle}
              </p>
            </div>

            {/* right — WhatsApp CTA */}
            <div className="flex w-full flex-col items-center gap-3 lg:w-auto lg:items-end">
              <motion.a
                href="https://wa.me/212620849779"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Smartgestion on WhatsApp"
                whileHover={reduced ? {} : { scale: 1.04, y: -2 }}
                whileTap={reduced ? {} : { scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl px-8 py-4 text-base font-bold text-white shadow-[0_10px_40px_-8px_rgba(63,184,196,0.65)] transition-shadow duration-300 hover:shadow-[0_18px_55px_-6px_rgba(92,201,201,0.85)]"
              >
                {/* animated brand gradient base */}
                <span className="absolute inset-0 bg-[linear-gradient(120deg,#0A1F44_0%,#1D6FD6_40%,#3FB8C4_70%,#5CC9C9_100%)] bg-[length:220%_220%] animate-gradient-x" />
                {/* subtle top-light overlay */}
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-transparent" />
                {/* glowing border */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/25" />
                {/* hover glow ring */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-[0_0_0_2px_rgba(255,255,255,0.5)] transition-opacity duration-300 group-hover:opacity-100" />
                {/* shimmer sweep */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-[900ms] ease-out group-hover:translate-x-full" />

                {/* whatsapp icon */}
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {/* live pulse ring */}
                  <motion.span
                    animate={reduced ? {} : { scale: [1, 1.9], opacity: [0.55, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-white/40"
                  />
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="relative h-5 w-5 text-white drop-shadow-sm"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.9 11.9 0 005.71 1.454h.006c6.585 0 11.946-5.359 11.949-11.893a11.821 11.821 0 00-3.481-8.464" />
                  </svg>
                </span>

                <span className="relative flex flex-col items-start leading-tight">
                  <span className="text-[11px] font-medium uppercase tracking-wide text-white/80">
                    {n.badge}
                  </span>
                  <span className="text-base font-bold drop-shadow-sm">
                    {n.button}
                  </span>
                </span>

                <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </motion.a>

              <p className="text-xs text-white/45">{n.note}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
