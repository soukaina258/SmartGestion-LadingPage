"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { ArrowLeft, Home, MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n/provider";

export default function NotFoundPage() {
  const { t } = useI18n();
  const n = t.notFound;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white px-4 dark:bg-dark-900">
      <div className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(rgba(63,184,196,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(63,184,196,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3FB8C4]/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 translate-x-1/2 translate-y-1/2 rounded-full bg-[#1D6FD6]/8 blur-3xl" />
      </div>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3FB8C4]/60 to-transparent" />

      <div className="mb-12">
        <Link href="/"><Logo /></Link>
      </div>

      <div className="relative mb-6 select-none text-center">
        <span
          className="block text-[9rem] font-black leading-none tracking-tighter sm:text-[13rem]"
          style={{
            background: "linear-gradient(135deg, #0A1F44 0%, #1D6FD6 50%, #3FB8C4 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </span>
        <span className="absolute inset-0 block text-[9rem] font-black leading-none tracking-tighter text-slate-100 blur-sm dark:text-white/5 sm:text-[13rem]">
          404
        </span>
      </div>

      <h1 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
        {n.title}
      </h1>
      <p className="mb-10 max-w-md text-center text-sm leading-relaxed text-slate-500 dark:text-white/50">
        {n.subtitle}
      </p>

      <div className="flex flex-col items-center gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1D6FD6] to-[#3FB8C4] px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#1D6FD6]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          <Home className="h-4 w-4" />
          {n.home}
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-600 transition-all hover:-translate-y-0.5 hover:border-[#3FB8C4]/50 hover:text-[#1D6FD6] dark:border-white/10 dark:bg-white/5 dark:text-white/70"
        >
          <MessageCircle className="h-4 w-4" />
          {n.contact}
        </Link>
      </div>

      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#1D6FD6] dark:text-white/30 dark:hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {n.back}
        </Link>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-slate-100 py-4 text-center text-xs text-slate-400 dark:border-white/10 dark:text-white/30">
        © {new Date().getFullYear()} SmartGestion. {n.copyright}
      </div>
    </div>
  );
}
