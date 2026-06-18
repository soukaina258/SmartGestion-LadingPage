"use client";

import * as React from "react";
import { useActionState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/provider";
import { submitContact } from "@/app/actions/contact";
import { initialContactState } from "@/app/actions/contact-types";

const CONTACT_EMAIL = "smartgestionmaroc@gmail.com";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Contact() {
  const { t, dir } = useI18n();
  const c = t.contact;

  // Drives loading (pending), success and error states from the Server Action.
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialContactState,
  );

  const sent = state.status === "success";
  const fieldErrors = state.status === "error" ? state.errors : undefined;
  const formError = state.status === "error" ? state.message : null;

  const errorTextClass =
    "mt-1.5 text-xs font-medium text-red-600 dark:text-red-400";

  const inputClass =
    "w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm text-dark-900 placeholder:text-dark-900/40 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-white/10 dark:bg-dark-800 dark:text-white dark:placeholder:text-white/30";
  const labelClass =
    "mb-1.5 flex items-center gap-1.5 text-sm font-medium text-dark-900/80 dark:text-white/80";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 dark:bg-dark-900"
    >


      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-80px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600 dark:text-brand-400">
            <Sparkles className="h-3.5 w-3.5" /> {c.badge}
          </span>
          <h2 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-dark-900 dark:text-white sm:text-5xl">
            {c.title1}{" "}
            <span className="text-gradient">{c.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-dark-900/60 dark:text-white/60">
            {c.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid items-start gap-8 lg:grid-cols-5">
          {/* info panel */}
          <motion.aside
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-80px" }}
            className="relative overflow-hidden rounded-[2rem] bg-accent-gradient p-8 text-white shadow-neon-purple lg:col-span-2"
          >
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-white/15 blur-2xl" />
              <div className="absolute -bottom-12 -left-8 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
            </div>
            <div className="relative">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <MessageSquare className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-2xl font-bold leading-tight">
                {c.infoTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {c.infoBody}
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group flex items-center gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur transition-colors hover:bg-white/15"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Mail className="h-4.5 w-4.5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/70">
                      {c.emailLabel}
                    </span>
                    <span className="block truncate text-sm font-semibold">
                      {CONTACT_EMAIL}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 backdrop-blur">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Clock className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm font-medium">{c.responseTime}</span>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* form / success */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-80px" }}
            className="rounded-[2rem] border border-black/[0.06] bg-white p-6 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.25)] dark:border-white/10 dark:bg-dark-800 sm:p-8 lg:col-span-3"
          >
            {sent ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-dark-900 dark:text-white">
                  {c.successTitle}
                </h3>
                <p className="mt-3 max-w-md text-sm text-dark-900/60 dark:text-white/60">
                  {c.successBody}
                </p>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mt-7 rounded-full border border-black/10 px-6 py-2.5 text-sm font-semibold text-dark-900/80 transition-colors hover:bg-black/5 dark:border-white/15 dark:text-white/80 dark:hover:bg-white/10"
                >
                  {c.submit}
                </button>
              </div>
            ) : (
              <form action={formAction} noValidate className="relative space-y-5">
                {/* Honeypot: hidden from humans, bots tend to fill it. */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    id="contact-website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      {c.fields.name}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder={c.fields.namePlaceholder}
                      aria-invalid={!!fieldErrors?.name}
                      className={inputClass}
                    />
                    {fieldErrors?.name && (
                      <p className={errorTextClass}>{fieldErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      {c.fields.email}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      dir="ltr"
                      placeholder={c.fields.emailPlaceholder}
                      aria-invalid={!!fieldErrors?.email}
                      className={cn(inputClass, dir === "rtl" && "text-right")}
                    />
                    {fieldErrors?.email && (
                      <p className={errorTextClass}>{fieldErrors.email}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className={labelClass}>
                      {c.fields.phone}
                      <span className="text-xs font-normal text-dark-900/40 dark:text-white/40">
                        ({c.optional})
                      </span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      dir="ltr"
                      placeholder={c.fields.phonePlaceholder}
                      className={cn(inputClass, dir === "rtl" && "text-right")}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className={labelClass}>
                      {c.fields.company}
                      <span className="text-xs font-normal text-dark-900/40 dark:text-white/40">
                        ({c.optional})
                      </span>
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder={c.fields.companyPlaceholder}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    {c.fields.message}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder={c.fields.messagePlaceholder}
                    aria-invalid={!!fieldErrors?.message}
                    className={cn(inputClass, "resize-none")}
                  />
                  {fieldErrors?.message && (
                    <p className={errorTextClass}>{fieldErrors.message}</p>
                  )}
                </div>

                {formError && (
                  <p
                    role="alert"
                    className="rounded-xl bg-red-500/10 px-4 py-2.5 text-sm font-medium text-red-600 dark:text-red-400"
                  >
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-gradient px-8 py-4 text-base font-semibold text-white shadow-neon transition-all duration-300 hover:-translate-y-0.5 hover:shadow-neon-purple hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:brightness-100"
                >
                  {pending ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      {c.submitting}
                    </>
                  ) : (
                    <>
                      {c.submit}
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
