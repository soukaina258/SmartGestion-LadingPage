"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { ArrowLeft } from "lucide-react";
import { useI18n } from "@/i18n/provider";

export default function TermsPage() {
  const { t } = useI18n();
  const l = t.legal;
  const p = l.terms;

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      <div className="fixed inset-x-0 top-0 z-50 h-px bg-gradient-to-r from-transparent via-[#3FB8C4]/60 to-transparent" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-[#3FB8C4]/8 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-[#1D6FD6]/6 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-black/[0.06] bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-dark-900/80">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/"><Logo className="h-8" /></Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 transition-all hover:border-[#3FB8C4]/50 hover:text-[#1D6FD6] dark:border-white/10 dark:bg-white/5 dark:text-white/70"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {l.back}
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mb-12 border-b border-slate-100 pb-10 dark:border-white/10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#3FB8C4]/30 bg-[#3FB8C4]/8 px-3.5 py-1.5 text-xs font-semibold text-[#2a9fa9]">
            {l.badge}
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            {p.title}
          </h1>
          <p className="mt-4 text-sm text-slate-500 dark:text-white/50">{l.updated}</p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-white/60">
            {p.intro}
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 dark:border-amber-400/20 dark:bg-amber-400/5">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
            {p.refundNoticeTitle}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-amber-700 dark:text-amber-400/80">
            {p.refundNoticeBody}
          </p>
        </div>

        <div className="space-y-10">
          {p.sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/60">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-100 pt-8 dark:border-white/10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#1D6FD6] hover:underline dark:text-[#3FB8C4]">
            <ArrowLeft className="h-4 w-4" />
            {l.back}
          </Link>
        </div>
      </main>

      <footer className="border-t border-slate-100 py-6 text-center text-xs text-slate-400 dark:border-white/10 dark:text-white/30">
        © {new Date().getFullYear()} SmartGestion. {t.notFound.copyright}
      </footer>
    </div>
  );
}
