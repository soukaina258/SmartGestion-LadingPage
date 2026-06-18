"use client";

import { useActionState, useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle, Sparkles, Bell } from "lucide-react";
import { subscribeNewsletter, type NewsletterState } from "@/app/actions/newsletter";
import { useI18n } from "@/i18n/provider";

const EASE = [0.16, 1, 0.3, 1] as const;

const initial: NewsletterState = { status: "idle" };

export function NewsletterBanner() {
  const { t } = useI18n();
  const n = t.newsletter;
  const [state, action, pending] = useActionState(subscribeNewsletter, initial);
  const inputRef = useRef<HTMLInputElement>(null);
  const reduced = useReducedMotion();

  // clear input on success
  useEffect(() => {
    if (state.status === "success" && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [state.status]);

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

            {/* right — form */}
            <div className="w-full max-w-md lg:w-auto lg:min-w-[420px]">
              {state.status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm"
                >
                  <CheckCircle className="h-5 w-5 shrink-0 text-emerald-300" />
                  <p className="text-sm font-semibold text-white">
                    {state.code === "already" ? n.alreadyMessage : n.successMessage}
                  </p>
                </motion.div>
              ) : (
                <form action={action}>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    {/* email input */}
                    <div className="group relative flex-1">
                      <input
                        ref={inputRef}
                        type="email"
                        name="email"
                        required
                        placeholder={n.placeholder}
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur-sm transition-all duration-200 focus:border-white/50 focus:bg-white/15 focus:ring-2 focus:ring-white/20"
                      />
                    </div>

                    {/* submit button */}
                    <motion.button
                      type="submit"
                      disabled={pending}
                      whileHover={reduced ? {} : { scale: 1.03, y: -1 }}
                      whileTap={reduced ? {} : { scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="group relative inline-flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#1D6FD6] shadow-[0_4px_20px_rgba(255,255,255,0.25)] transition-all duration-200 hover:bg-white/95 hover:shadow-[0_8px_30px_rgba(255,255,255,0.35)] disabled:opacity-60"
                    >
                      {/* shimmer on hover */}
                      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#3FB8C4]/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                      <span className="relative flex items-center gap-2">
                        {pending ? (
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                        ) : (
                          <>
                            <Sparkles className="h-3.5 w-3.5" />
                            {n.button}
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </>
                        )}
                      </span>
                    </motion.button>
                  </div>

                  {/* error message */}
                  {state.status === "error" && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2.5 text-xs text-red-300"
                    >
                      {n.errorMessage}
                    </motion.p>
                  )}

                  <p className="mt-3 text-xs text-white/40">
                    {n.note}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
