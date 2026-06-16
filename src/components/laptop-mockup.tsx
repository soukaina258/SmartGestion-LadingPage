"use client";

import { ParaGestionDesktop } from "@/components/paragestion-ui";

/**
 * Clean floating browser-style window showcasing the ParaGestion dashboard,
 * matching the polished light SaaS reference.
 */
export function LaptopMockup() {
  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_40px_90px_-30px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.03] dark:border-white/10 dark:bg-dark-800">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-black/[0.06] bg-white/80 px-4 py-2.5 dark:border-white/10 dark:bg-dark-700">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <div className="ms-3 hidden h-6 flex-1 items-center rounded-md bg-black/[0.04] px-3 text-[10px] text-dark-900/40 dark:bg-white/5 dark:text-white/40 sm:flex">
            app.paragestion.com/dashboard
          </div>
        </div>
        {/* dashboard */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-white">
          <ParaGestionDesktop />
          {/* fade hint that more content scrolls below */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </div>
  );
}
