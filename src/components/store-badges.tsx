"use client";

import { Monitor, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/provider";

function StoreBadge({
  icon,
  top,
  bottom,
  href,
  className,
}: {
  icon: React.ReactNode;
  top: string;
  bottom: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group flex items-center gap-3 rounded-2xl border border-white/10 bg-dark-900 px-5 py-2.5 text-start text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-neon",
        className
      )}
    >
      <span className="shrink-0">{icon}</span>
      <span className="flex flex-col leading-tight">
        <span className="text-[10px] font-medium uppercase tracking-wide text-white/60">
          {top}
        </span>
        <span className="text-sm font-semibold">{bottom}</span>
      </span>
    </a>
  );
}

export function StoreBadges({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-3", className)}>
      <StoreBadge
        href="#pricing"
        icon={
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/10">
            <Monitor className="h-4 w-4 text-white" />
          </span>
        }
        top={t.store.desktopTop}
        bottom={t.store.desktopBottom}
      />
      <StoreBadge
        href="#cta"
        icon={
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-gradient">
            <Globe className="h-4 w-4 text-white" />
          </span>
        }
        top={t.store.webTop}
        bottom={t.store.webBottom}
      />
    </div>
  );
}
