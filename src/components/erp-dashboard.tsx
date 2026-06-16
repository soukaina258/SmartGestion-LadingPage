"use client";

import Image from "next/image";
import {
  LayoutDashboard,
  FileText,
  Boxes,
  Users,
  Truck,
  CreditCard,
  Wallet,
  BarChart3,
  Settings,
  Search,
  Bell,
  Sparkles,
  TrendingUp,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/i18n/provider";

const NAV: { icon: LucideIcon; label: string; active?: boolean }[] = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FileText, label: "Invoices" },
  { icon: Boxes, label: "Inventory" },
  { icon: Users, label: "Clients" },
  { icon: Truck, label: "Suppliers" },
  { icon: CreditCard, label: "Payments" },
  { icon: Wallet, label: "Expenses" },
  { icon: BarChart3, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

/* smooth area chart path */
function FinancialChart() {
  return (
    <svg viewBox="0 0 320 120" className="h-full w-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="erp-rev" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(29,111,214,0.25)" />
          <stop offset="100%" stopColor="rgba(29,111,214,0)" />
        </linearGradient>
      </defs>
      {[20, 50, 80, 110].map((y) => (
        <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#eef2f7" strokeWidth="1" />
      ))}
      {/* collected (teal, dashed) */}
      <path
        d="M0 95 C 30 88 50 92 80 70 C 110 50 130 78 160 60 C 190 44 210 66 240 40 C 270 20 290 34 320 22"
        fill="none"
        stroke="#3FB8C4"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      {/* revenue (blue, filled) */}
      <path
        d="M0 100 C 30 96 50 98 80 84 C 110 70 130 90 160 76 C 190 60 210 80 240 58 C 270 36 290 52 320 44 L320 120 L0 120 Z"
        fill="url(#erp-rev)"
        stroke="#1D6FD6"
        strokeWidth="2.5"
      />
      {/* tooltip dot */}
      <circle cx="240" cy="58" r="3.5" fill="#1D6FD6" stroke="#fff" strokeWidth="1.5" />
    </svg>
  );
}

function DonutMetric() {
  const pct = 82.7;
  const r = 26;
  const circ = 2 * Math.PI * r;
  return (
    <div className="relative flex h-[72px] w-[72px] items-center justify-center">
      <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="#eef2f7" strokeWidth="8" />
        <circle
          cx="32"
          cy="32"
          r={r}
          fill="none"
          stroke="#1D6FD6"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${(pct / 100) * circ} ${circ}`}
        />
      </svg>
      <span className="absolute text-[10px] font-extrabold text-slate-800">
        {pct}%
      </span>
    </div>
  );
}

export function ErpDashboard() {
  const { t, dir } = useI18n();

  const kpis = [
    { label: t.heroMockup.totalBalance, value: "9 647 DH", icon: Wallet, delta: "+12%", tone: "text-blue-600 bg-blue-50" },
    { label: t.heroMockup.netIncome, value: "234 980 DH", icon: TrendingUp, delta: "+8%", tone: "text-[#3FB8C4] bg-[#3FB8C4]/10" },
    { label: t.heroMockup.received, value: "6 790 DH", icon: ArrowUpRight, delta: "+5%", tone: "text-emerald-600 bg-emerald-50" },
    { label: t.dashboard.kpis.invoices.label, value: "9", icon: FileText, delta: "+3", tone: "text-indigo-600 bg-indigo-50" },
  ];

  return (
    <div dir={dir} className="flex h-full w-full overflow-hidden bg-slate-50 text-start">
      {/* Sidebar */}
      <aside className="flex w-[128px] shrink-0 flex-col border-e border-slate-200 bg-white py-3">
        <div className="flex items-center gap-1.5 px-3 pb-3">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent-gradient">
            <Image src="/icon.ico" alt="" width={14} height={14} unoptimized className="h-3.5 w-3.5 object-contain" />
          </span>
          <span className="text-[11px] font-extrabold text-slate-800">
            Smart<span className="text-brand-600">Gestion</span>
          </span>
        </div>
        <div className="no-scrollbar flex-1 space-y-0.5 overflow-y-auto px-2">
          {NAV.map((n) => (
            <div
              key={n.label}
              className={`flex items-center gap-1.5 rounded-md px-2 py-[5px] text-[8px] ${
                n.active
                  ? "bg-brand-50 font-semibold text-brand-600"
                  : "text-slate-500"
              }`}
            >
              <n.icon className="h-2.5 w-2.5" />
              {n.label}
            </div>
          ))}
        </div>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* top search bar */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-2">
          <div className="flex flex-1 items-center gap-1.5 rounded-md bg-slate-100 px-2 py-1">
            <Search className="h-2.5 w-2.5 text-slate-400" />
            <span className="text-[7px] text-slate-400">{t.nav.search}…</span>
          </div>
          <Bell className="h-3 w-3 text-slate-400" />
          <span className="h-5 w-5 rounded-full bg-gradient-to-br from-brand-500 to-[#3FB8C4]" />
        </div>

        <div className="no-scrollbar flex-1 overflow-y-auto p-3.5">
          {/* welcome + date range */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[13px] font-extrabold text-slate-800">
                {t.dashboard.welcome}, Sam!
              </p>
              <p className="text-[7px] text-slate-400">{t.dashboard.headerSubtitle}</p>
            </div>
            <span className="rounded-md border border-slate-200 px-2 py-0.5 text-[7px] text-slate-500">
              1 Nov 2026 – 7 Nov 2026
            </span>
          </div>

          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-2">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-xl border border-slate-200 bg-white p-2.5">
                <div className="flex items-center gap-1.5">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-lg ${k.tone}`}>
                    <k.icon className="h-3 w-3" />
                  </span>
                  <span className="text-[6.5px] font-semibold uppercase tracking-wide text-slate-400">
                    {k.label}
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] font-extrabold text-slate-800">{k.value}</p>
                <p className="text-[6.5px] font-semibold text-emerald-500">{k.delta} {t.dashboard.kpis.revenue.sub}</p>
              </div>
            ))}
          </div>

          {/* charts row */}
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {/* financial overview */}
            <div className="col-span-2 rounded-xl border border-slate-200 bg-white p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[9px] font-bold text-slate-700">{t.dashboard.flux.title}</p>
                <div className="flex items-center gap-2 text-[6px] text-slate-500">
                  <span className="flex items-center gap-0.5"><span className="h-1.5 w-1.5 rounded-full bg-brand-500" />{t.dashboard.flux.revenue}</span>
                  <span className="flex items-center gap-0.5"><span className="h-1.5 w-1.5 rounded-full bg-[#3FB8C4]" />{t.dashboard.flux.expenses}</span>
                  <span className="rounded border border-slate-200 px-1 py-[1px]">Monthly</span>
                </div>
              </div>
              <div className="h-24">
                <FinancialChart />
              </div>
            </div>

            {/* occupancy / utilization */}
            <div className="rounded-xl border border-slate-200 bg-white p-3">
              <p className="text-[9px] font-bold text-slate-700">{t.dashboard.kpis.margin.label}</p>
              <div className="mt-2 flex flex-col items-center">
                <DonutMetric />
                <div className="mt-2 w-full space-y-1">
                  <div className="flex items-center justify-between text-[6.5px] text-slate-500">
                    <span className="flex items-center gap-0.5"><span className="h-1.5 w-1.5 rounded-full bg-brand-500" />{t.dashboard.flux.revenue}</span>
                    <span className="font-semibold text-slate-700">82.7%</span>
                  </div>
                  <div className="flex items-center justify-between text-[6.5px] text-slate-500">
                    <span className="flex items-center gap-0.5"><span className="h-1.5 w-1.5 rounded-full bg-slate-200" />{t.dashboard.flux.expenses}</span>
                    <span className="font-semibold text-slate-700">17.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Assistant panel */}
      <aside className="hidden w-[120px] shrink-0 flex-col gap-2 border-s border-slate-200 bg-white p-2.5 lg:flex">
        <div className="rounded-xl bg-gradient-to-br from-brand-600 to-[#3FB8C4] p-2.5 text-white">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
            <Sparkles className="h-3 w-3" />
          </span>
          <p className="mt-1.5 text-[8px] font-bold">AI Assistant</p>
          <p className="text-[6px] text-white/80">{t.dashboard.welcome}</p>
        </div>
        {[
          { t: `3 ${t.dashboard.stockAlerts.products}`, d: t.dashboard.kpis.expenses.sub },
          { t: t.dashboard.kpis.netProfit.label, d: t.dashboard.kpis.netProfit.sub },
          { t: `5 ${t.dashboard.kpis.invoices.label}`, d: t.dashboard.recent.title },
        ].map((c, i) => (
          <div key={i} className="rounded-lg border border-slate-200 p-2">
            <p className="text-[7px] font-semibold text-slate-700">{c.t}</p>
            <p className="text-[6px] text-slate-400">{c.d}</p>
            <p className="mt-1 text-[6px] font-semibold text-brand-600">{t.dashboard.recent.seeAll} ›</p>
          </div>
        ))}
      </aside>
    </div>
  );
}
