"use client";

import { ParaGestionMobile } from "@/components/paragestion-ui";

/**
 * iPhone-style mockup showcasing the ParaGestion mobile dashboard.
 */
export function PhoneMockup() {
  return (
    <div className="relative w-[180px] sm:w-[200px]">
      <div className="relative rounded-[2.2rem] border-[7px] border-dark-900 bg-dark-900 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.55)]">
        {/* notch */}
        <div className="absolute left-1/2 top-1.5 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-dark-900" />
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.7rem] bg-white">
          {/* status bar */}
          <div className="flex items-center justify-between bg-white px-4 pt-2 text-[8px] font-semibold text-slate-700">
            <span>9:41</span>
            <div className="flex items-center gap-0.5">
              <span className="block h-1.5 w-2.5 rounded-[1px] bg-slate-400" />
              <span className="block h-1.5 w-1.5 rounded-full bg-slate-400" />
              <span className="block h-1.5 w-3.5 rounded-[2px] border border-slate-400" />
            </div>
          </div>
          <div className="h-[calc(100%-1rem)]">
            <ParaGestionMobile />
          </div>
        </div>
      </div>
    </div>
  );
}
