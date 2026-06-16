"use client";

import {
  Receipt,
  Users,
  Boxes,
  Contact,
  BarChart3,
  Wallet,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { useI18n } from "@/i18n/provider";

const ICONS = [Receipt, Boxes, Truck, Contact, BarChart3, Wallet, Users, ShieldCheck];

function Row({ items }: { items: string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pe-10">
      {items.map((label, i) => {
        const Icon = ICONS[i % ICONS.length];
        return (
          <div
            key={label}
            className="flex items-center gap-2.5 text-dark-900/45 transition-colors hover:text-dark-900/80 dark:text-white/45 dark:hover:text-white/80"
          >
            <Icon className="h-5 w-5" strokeWidth={1.75} />
            <span className="whitespace-nowrap text-base font-semibold tracking-tight">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function TrustBar() {
  const { t } = useI18n();
  return (
    <section className="border-y border-black/[0.06] bg-zinc-50/60 py-8 dark:border-white/10 dark:bg-dark-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-dark-900/40 dark:text-white/40">
          {t.trust.label}
        </p>
        <div className="grid-fade-mask flex overflow-hidden">
          <div className="flex animate-marquee">
            <Row items={t.trust.items} />
            <Row items={t.trust.items} />
          </div>
        </div>
      </div>
    </section>
  );
}
