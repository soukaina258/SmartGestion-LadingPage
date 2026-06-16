"use client";

import Image from "next/image";
import {
  LayoutGrid,
  LayoutDashboard,
  FileText,
  FileSignature,
  ShoppingCart,
  RotateCcw,
  Truck,
  ClipboardList,
  DollarSign,
  Users,
  Building2,
  Boxes,
  Settings,
  LogOut,
  Bell,
  ChevronDown,
  ChevronLeft,
  CreditCard,
  Activity,
  ShieldCheck,
  TrendingUp,
  Package,
  Minimize2,
  Calendar,
  Box,
  Plus,
  AlertTriangle,
  PieChart,
  Link2,
} from "lucide-react";
import { useI18n } from "@/i18n/provider";
import type { Dictionary } from "@/i18n/translations";

/* ============================================================
   Shared ParaGestion brand mark (uses the app icon)
   ============================================================ */
export function ParaGestionMark({
  className = "",
  textClass = "",
}: {
  className?: string;
  textClass?: string;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/icon.ico"
        alt="ParaGestion"
        width={28}
        height={28}
        unoptimized
        className="h-7 w-7 object-contain"
      />
      <span className={`text-base font-extrabold tracking-tight ${textClass}`}>
        Para<span className="text-emerald-500">Gestion</span>
      </span>
    </div>
  );
}

/* KPI icon tones — matched to the screenshot */
const TONE: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-500",
  blue: "bg-blue-50 text-blue-500",
  rose: "bg-rose-50 text-rose-500",
  indigo: "bg-indigo-50 text-indigo-500",
  amber: "bg-amber-50 text-amber-500",
};

type DashT = Dictionary["dashboard"];

/* ============================================================
   Desktop dashboard (for the browser-window mockup)
   ============================================================ */

function buildSidebar(d: DashT) {
  return [
    { section: d.sidebar.sectionDashboard },
    { icon: LayoutGrid, label: d.sidebar.workspace },
    { icon: LayoutDashboard, label: d.sidebar.dashboard, active: true },
    { section: d.sidebar.sectionSales },
    { icon: FileText, label: d.sidebar.invoices },
    { icon: FileSignature, label: d.sidebar.quotes },
    { icon: ShoppingCart, label: d.sidebar.passingSales },
    { icon: RotateCcw, label: d.sidebar.creditNotes },
    { icon: Truck, label: d.sidebar.deliveryNotes },
    { section: d.sidebar.sectionPurchases },
    { icon: ClipboardList, label: d.sidebar.purchaseOrders },
    { icon: DollarSign, label: d.sidebar.expenses },
    { section: d.sidebar.sectionContacts },
    { icon: Users, label: d.sidebar.clients },
    { icon: Building2, label: d.sidebar.suppliers },
    { section: d.sidebar.sectionStock },
    { icon: Boxes, label: d.sidebar.products },
    { section: d.sidebar.sectionSystem },
    { icon: Settings, label: d.sidebar.settings },
  ];
}

function KpiCard({
  label,
  value,
  sub,
  icon: Icon,
  tone,
}: {
  label: string;
  value: string;
  sub: string;
  icon: typeof DollarSign;
  tone: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="flex justify-end">
        <span
          className={`flex h-7 w-7 items-center justify-center rounded-lg ${TONE[tone]}`}
        >
          <Icon className="h-3.5 w-3.5" />
        </span>
      </div>
      <p className="mt-1 text-[7px] font-semibold uppercase tracking-wide text-slate-400">
        {label}
      </p>
      <p className="text-[13px] font-extrabold text-slate-800">{value}</p>
      <p className="text-[7px] text-slate-400">{sub}</p>
    </div>
  );
}

export function ParaGestionDesktop() {
  const { t, dir, locale } = useI18n();
  const d = t.dashboard;
  const langShort = locale.toUpperCase();

  const sidebar = buildSidebar(d);
  const cur = (n: string) => `${n} ${d.currency}`;

  const kpisRow1 = [
    { ...d.kpis.revenue, value: cur("984,17"), icon: DollarSign, tone: "emerald" },
    { ...d.kpis.receivables, value: cur("612,34"), icon: CreditCard, tone: "blue" },
    { ...d.kpis.expenses, value: cur("537,89"), icon: Activity, tone: "rose" },
    { ...d.kpis.netProfit, value: cur("746,28"), icon: ShieldCheck, tone: "emerald" },
    { ...d.kpis.margin, value: cur("823,45"), icon: TrendingUp, tone: "indigo" },
  ];
  const kpisRow2 = [
    { ...d.kpis.orders, value: "5", icon: ClipboardList, tone: "emerald" },
    { ...d.kpis.clients, value: "2", icon: Users, tone: "blue" },
    { ...d.kpis.suppliers, value: "1", icon: Building2, tone: "indigo" },
    { ...d.kpis.products, value: "35", icon: Package, tone: "amber" },
    { ...d.kpis.invoices, value: "9", icon: FileText, tone: "emerald" },
  ];

  const invoices = [
    { ref: "FAC-2026-0007", date: "13/06/2026", amount: cur("731,52"), status: d.statusPending, tone: "amber" },
    { ref: "FAC-2026-0008", date: "13/06/2026", amount: cur("564,19"), status: d.statusPending, tone: "amber" },
    { ref: "FAC-2026-0009", date: "13/06/2026", amount: cur("948,73"), status: d.statusPaid, tone: "emerald" },
    { ref: "FAC-2026-0010", date: "13/06/2026", amount: cur("672,45"), status: d.statusPending, tone: "amber" },
    { ref: "FAC-2026-0011", date: "13/06/2026", amount: cur("853,61"), status: d.statusPending, tone: "amber" },
  ];

  const filters = [
    d.filters.today,
    d.filters.yesterday,
    d.filters.week,
    d.filters.month,
    d.filters.year,
  ];

  return (
    <div
      dir={dir}
      className="flex h-full w-full overflow-hidden bg-slate-50 text-start"
    >
      {/* ===== Sidebar ===== */}
      <aside className="relative flex w-[150px] shrink-0 flex-col bg-[#0c1a33] py-3 text-white">
        {/* collapse handle */}
        <span className="absolute -end-2.5 top-12 flex h-5 w-5 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow">
          <ChevronLeft className="h-2.5 w-2.5" />
        </span>

        <div className="px-3 pb-3">
          <div className="flex items-center gap-1.5">
            <Image
              src="/icon.ico"
              alt="ParaGestion"
              width={22}
              height={22}
              unoptimized
              className="h-[22px] w-[22px] object-contain"
            />
            <span className="text-[12px] font-extrabold">
              Para<span className="text-emerald-400">Gestion</span>
            </span>
          </div>
          <p className="ms-7 mt-0.5 text-[6px] font-semibold tracking-[0.15em] text-slate-500">
            {d.solutionTag}
          </p>
        </div>

        <div className="no-scrollbar flex-1 space-y-0.5 overflow-y-auto px-2">
          {sidebar.map((item, i) =>
            "section" in item ? (
              <p
                key={i}
                className="px-1.5 pb-0.5 pt-2.5 text-[6px] font-semibold tracking-[0.12em] text-slate-500"
              >
                {item.section}
              </p>
            ) : (
              <div
                key={i}
                className={`relative flex items-center gap-1.5 rounded-md px-1.5 py-[5px] text-[8px] ${
                  "active" in item && item.active
                    ? "bg-emerald-500/15 font-semibold text-white"
                    : "text-slate-300"
                }`}
              >
                {"active" in item && item.active && (
                  <span className="absolute inset-y-0 start-0 w-[2px] rounded-full bg-emerald-400" />
                )}
                {item.icon && <item.icon className="h-2.5 w-2.5 shrink-0" />}
                <span className="truncate">{item.label}</span>
              </div>
            )
          )}
        </div>

        <div className="mt-2 space-y-1.5 border-t border-white/10 px-3 pt-2.5">
          <div className="flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[8px]">
              👩
            </span>
            <div className="leading-none">
              <p className="text-[8px] font-semibold">Test User</p>
              <p className="text-[6px] tracking-wide text-slate-400">{d.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[8px] text-slate-300">
            <LogOut className="h-2.5 w-2.5" /> {d.logout}
          </div>
        </div>
      </aside>

      {/* ===== Main ===== */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2">
          <div>
            <p className="text-[13px] font-bold text-slate-800">{d.title}</p>
            <p className="text-[7px] text-slate-400">
              {d.headerSubtitle} -{" "}
              <span className="font-semibold text-emerald-500">
                {d.systemActive}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1 rounded-md border border-slate-200 px-1.5 py-0.5 text-[7px] text-slate-600">
              🇫🇷 {langShort} <ChevronDown className="h-2 w-2" />
            </span>
            <Minimize2 className="h-3 w-3 text-slate-400" />
            <span className="relative">
              <Bell className="h-3.5 w-3.5 text-slate-400" />
              <span className="absolute -end-1 -top-1 flex h-2.5 min-w-2.5 items-center justify-center rounded-full bg-rose-500 px-0.5 text-[5px] font-bold text-white">
                9+
              </span>
            </span>
            <div className="flex items-center gap-1">
              <div className="text-end leading-none">
                <p className="text-[8px] font-semibold text-slate-700">
                  Test User
                </p>
                <p className="text-[6px] tracking-wide text-slate-400">
                  {d.role}
                </p>
              </div>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-[8px]">
                👩
              </span>
              <ChevronDown className="h-2.5 w-2.5 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Scroll body */}
        <div className="no-scrollbar flex-1 overflow-y-auto p-4">
          {/* page header */}
          <div className="mb-3 flex items-start justify-between">
            <div>
              <p className="text-[15px] font-extrabold text-slate-800">
                {d.title}
              </p>
              <p className="text-[8px] text-slate-400">{d.welcome}</p>
            </div>
            <div className="flex items-start gap-1.5">
              <Box className="mt-0.5 h-3 w-3 text-slate-400" />
              <div className="text-end leading-tight">
                <p className="text-[7px] text-slate-400">{d.stockValue}</p>
                <p className="text-[12px] font-extrabold text-slate-800">
                  {cur("917,64")}
                </p>
              </div>
            </div>
          </div>

          {/* filter pills */}
          <div className="mb-1.5 flex items-center gap-1.5">
            <Calendar className="h-2.5 w-2.5 text-slate-400" />
            {filters.map((p) => (
              <span
                key={p}
                className={`rounded-md px-2 py-[3px] text-[7px] ${
                  p === d.filters.month
                    ? "bg-emerald-600 font-semibold text-white"
                    : "border border-slate-200 text-slate-500"
                }`}
              >
                {p}
              </span>
            ))}
            <span className="flex items-center gap-1 rounded-md border border-slate-200 px-2 py-[3px] text-[7px] text-slate-500">
              {d.filters.month} <ChevronDown className="h-2 w-2" />
            </span>
          </div>
          <p className="mb-2.5 flex items-center gap-1 text-[6px] text-slate-400">
            <Calendar className="h-2 w-2" /> 01/06/2026 — 16/06/2026
          </p>

          {/* HT / TTC toggle */}
          <div className="mb-3 inline-flex items-center gap-0.5 rounded-md bg-slate-100 p-0.5">
            <span className="rounded px-2 py-[2px] text-[7px] font-medium text-slate-500">
              HT
            </span>
            <span className="rounded bg-emerald-600 px-2 py-[2px] text-[7px] font-semibold text-white">
              TTC
            </span>
          </div>

          {/* KPI rows */}
          <div className="grid grid-cols-5 gap-2">
            {kpisRow1.map((k) => (
              <KpiCard key={k.label} {...k} />
            ))}
          </div>
          <div className="mt-2 grid grid-cols-5 gap-2">
            {kpisRow2.map((k) => (
              <KpiCard key={k.label} {...k} />
            ))}
          </div>

          {/* charts row */}
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {/* flux chart */}
            <div className="col-span-2 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3 text-emerald-500" />
                  <div className="leading-tight">
                    <p className="text-[9px] font-bold text-slate-700">
                      {d.flux.title}
                    </p>
                    <p className="text-[6px] text-slate-400">
                      {d.flux.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[6px] text-slate-500">
                  <span className="flex items-center gap-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                    {d.flux.revenue}
                  </span>
                  <span className="flex items-center gap-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                    {d.flux.expenses}
                  </span>
                </div>
              </div>
              {/* y grid + axis labels */}
              <div className="flex gap-1">
                <div className="flex flex-col justify-between py-1 text-[5px] text-slate-300">
                  <span>80000</span>
                  <span>60000</span>
                  <span>40000</span>
                  <span>20000</span>
                  <span>0</span>
                </div>
                <svg viewBox="0 0 220 90" className="h-24 w-full">
                  {/* dashed gridlines */}
                  {[6, 27, 48, 69, 84].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="220"
                      y2={y}
                      stroke="#e2e8f0"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                    />
                  ))}
                  {/* expenses (red) sharp spike around x=12 */}
                  <path
                    d="M0 84 L120 84 C 128 84 132 30 138 12 C 141 4 144 4 147 12 C 153 30 157 84 165 84 L220 84"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="1.6"
                  />
                  {/* revenue (teal) smaller spike */}
                  <path
                    d="M0 84 L122 84 C 130 84 134 52 140 44 C 143 40 146 40 149 44 C 155 52 159 84 167 84 L220 84"
                    fill="rgba(20,184,166,0.10)"
                    stroke="#14b8a6"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
              <div className="ms-5 mt-0.5 flex justify-between text-[5px] text-slate-300">
                {Array.from({ length: 16 }, (_, i) => i + 1).map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
            </div>

            {/* recent invoices */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <FileText className="h-2.5 w-2.5 text-emerald-500" />
                  <div className="leading-tight">
                    <p className="text-[9px] font-bold text-slate-700">
                      {d.recent.title}
                    </p>
                    <p className="text-[5px] text-slate-400">{d.welcome}</p>
                  </div>
                </div>
                <span className="flex items-center gap-0.5 text-[6px] font-medium text-emerald-600">
                  {d.recent.seeAll} ›
                </span>
              </div>
              <div className="space-y-1.5">
                {invoices.map((inv) => (
                  <div key={inv.ref} className="flex items-center gap-1.5">
                    <span
                      className={`flex h-5 w-5 items-center justify-center rounded-md ${
                        inv.tone === "emerald" ? "bg-emerald-50" : "bg-amber-50"
                      }`}
                    >
                      <FileText
                        className={`h-2.5 w-2.5 ${
                          inv.tone === "emerald"
                            ? "text-emerald-500"
                            : "text-amber-500"
                        }`}
                      />
                    </span>
                    <div className="flex-1 leading-tight">
                      <p className="text-[7px] font-semibold text-slate-700">
                        Test User
                      </p>
                      <p className="text-[5px] text-slate-400">
                        {inv.ref} • {inv.date}
                      </p>
                    </div>
                    <div className="text-end leading-tight">
                      <p className="text-[7px] font-bold text-slate-800">
                        {inv.amount}
                      </p>
                      <span
                        className={`inline-block rounded px-1 text-[5px] font-semibold ${
                          inv.tone === "emerald"
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-amber-50 text-amber-600"
                        }`}
                      >
                        {inv.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* quick actions + stock alerts */}
          <div className="mt-2.5 grid grid-cols-2 gap-2.5">
            {/* quick actions */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="mb-2 flex items-center gap-1">
                <Plus className="h-2.5 w-2.5 text-emerald-500" />
                <p className="text-[9px] font-bold text-slate-700">
                  {d.quickActions.title}
                </p>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { icon: FileText, label: d.quickActions.newInvoice, tone: "emerald" },
                  { icon: ShoppingCart, label: d.quickActions.quickSale, tone: "emerald" },
                  { icon: CreditCard, label: d.quickActions.newExpense, tone: "rose" },
                  { icon: Users, label: d.quickActions.addClient, tone: "blue" },
                ].map((a) => (
                  <div
                    key={a.label}
                    className="flex flex-col items-center gap-1 rounded-lg border border-slate-100 p-1.5 text-center"
                  >
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-md ${TONE[a.tone]}`}
                    >
                      <a.icon className="h-3 w-3" />
                    </span>
                    <span className="text-[5.5px] font-medium text-slate-600">
                      {a.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* stock alerts */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <AlertTriangle className="h-2.5 w-2.5 text-amber-500" />
                  <p className="text-[9px] font-bold text-slate-700">
                    {d.stockAlerts.title}
                  </p>
                </div>
                <span className="rounded bg-amber-500 px-1.5 py-[1px] text-[6px] font-semibold text-white">
                  5 {d.stockAlerts.products}
                </span>
              </div>
              <div className="space-y-1">
                {[
                  { name: "La Roche-Posay Anthelios UVMune 50+", ref: "REF-002", units: "4" },
                  { name: "CeraVe Gel Moussant 473ml", ref: "REF-003", units: "4" },
                  { name: "Cetaphil Lotion Nettoyante 460ml", ref: "REF-005", units: "-4" },
                  { name: "Eucerin Sun Gel-Crème SPF50+", ref: "REF-006", units: "0" },
                ].map((p) => (
                  <div
                    key={p.ref}
                    className="flex items-center gap-1.5 rounded-md bg-amber-50/60 px-1.5 py-1"
                  >
                    <Link2 className="h-2.5 w-2.5 shrink-0 text-amber-500" />
                    <div className="flex-1 leading-tight">
                      <p className="truncate text-[6.5px] font-semibold text-slate-700">
                        {p.name}
                      </p>
                      <p className="text-[5px] text-slate-400">RÉF : {p.ref}</p>
                    </div>
                    <div className="text-end leading-tight">
                      <p className="text-[7px] font-bold text-slate-800">
                        {p.units} {d.stockAlerts.unit}
                      </p>
                      <p className="text-[5px] font-semibold text-amber-500">
                        {d.stockAlerts.low}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* fiscal summary */}
          <div className="mt-2.5 rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
            <div className="mb-2.5 flex items-center gap-1">
              <PieChart className="h-3 w-3 text-emerald-500" />
              <div className="leading-tight">
                <p className="text-[9px] font-bold text-slate-700">
                  {d.fiscal.title}
                </p>
                <p className="text-[6px] text-slate-400">{d.fiscal.subtitle}</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: d.fiscal.collected, value: "684,52", w: "55%", c: "bg-teal-500" },
                { label: d.fiscal.deductible, value: "927,38", w: "85%", c: "bg-emerald-500" },
                { label: d.fiscal.balance, value: "753,16", w: "100%", c: "bg-blue-500" },
              ].map((f) => (
                <div key={f.label}>
                  <p className="text-[6px] font-semibold uppercase tracking-wide text-slate-400">
                    {f.label}
                  </p>
                  <p className="text-[12px] font-extrabold text-slate-800">
                    {f.value}{" "}
                    <span className="text-[7px] font-medium text-slate-400">
                      {d.currency}
                    </span>
                  </p>
                  <div className="mt-1 h-1 w-full rounded-full bg-slate-100">
                    <div
                      className={`h-1 rounded-full ${f.c}`}
                      style={{ width: f.w }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   Mobile dashboard (for phone mockup — kept available)
   ============================================================ */

export function ParaGestionMobile() {
  const { t, dir } = useI18n();
  const d = t.dashboard;
  const cur = (n: string) => `${n} ${d.currency}`;

  const mobileKpis = [
    { ...d.kpis.revenue, value: cur("984"), icon: DollarSign, tone: "emerald" },
    { ...d.kpis.receivables, value: cur("612"), icon: CreditCard, tone: "blue" },
    { ...d.kpis.expenses, value: cur("537"), icon: Activity, tone: "rose" },
    { ...d.kpis.netProfit, value: cur("746"), icon: ShieldCheck, tone: "emerald" },
    { ...d.kpis.products, value: "35", icon: Package, tone: "amber" },
    { ...d.kpis.clients, value: "2", icon: Users, tone: "blue" },
  ];

  return (
    <div dir={dir} className="flex h-full flex-col bg-slate-50 text-start">
      {/* top bar */}
      <div className="flex items-center justify-between bg-white px-3 py-2">
        <LayoutGrid className="h-4 w-4 text-slate-700" />
        <div className="text-center leading-none">
          <p className="text-[10px] font-bold text-slate-800">{d.title}</p>
          <p className="text-[6px] font-semibold text-emerald-500">
            {d.systemActive}
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <Bell className="h-3.5 w-3.5 text-slate-400" />
          <span className="h-5 w-5 rounded-full bg-emerald-500" />
        </div>
      </div>

      {/* kpi grid */}
      <div className="no-scrollbar flex-1 space-y-2 overflow-y-auto p-2.5">
        <div className="grid grid-cols-2 gap-2">
          {mobileKpis.map((k) => (
            <div
              key={k.label}
              className="rounded-xl border border-slate-200 bg-white p-2"
            >
              <div className="flex justify-end">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md ${TONE[k.tone]}`}
                >
                  <k.icon className="h-3 w-3" />
                </span>
              </div>
              <p className="mt-0.5 text-[6px] font-semibold tracking-wide text-slate-400">
                {k.label}
              </p>
              <p className="text-[11px] font-bold text-slate-800">{k.value}</p>
              <p className="text-[6px] text-slate-400">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* flux card */}
        <div className="rounded-xl border border-slate-200 bg-white p-2.5">
          <div className="flex items-center gap-1">
            <TrendingUp className="h-3 w-3 text-emerald-500" />
            <p className="text-[9px] font-bold text-slate-700">{d.flux.title}</p>
          </div>
          <p className="text-[6px] text-slate-400">{d.flux.subtitle}</p>
          <div className="mt-1.5 flex items-center gap-2 text-[6px] text-slate-400">
            <span className="flex items-center gap-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />{" "}
              {d.flux.revenue}
            </span>
            <span className="flex items-center gap-0.5">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />{" "}
              {d.flux.expenses}
            </span>
          </div>
          <svg viewBox="0 0 200 60" className="mt-1 h-16 w-full">
            <path
              d="M0 50 L100 50 C 108 50 112 14 118 6 C 121 2 124 2 127 6 C 133 14 137 50 145 50 L200 50"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
            />
            <path
              d="M0 52 L102 52 C 110 52 114 30 120 24 C 123 21 126 21 129 24 C 135 30 139 52 147 52 L200 52"
              fill="rgba(20,184,166,0.10)"
              stroke="#14b8a6"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
