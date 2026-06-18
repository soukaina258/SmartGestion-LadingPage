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

/* ============================================================
   Locale flag — switches with the active language
   fr -> France, en -> England, ar -> Morocco
   ============================================================ */
function LocaleFlag({ locale }: { locale: string }) {
  const cls = "h-2 w-3 shrink-0 overflow-hidden rounded-[1px]";
  if (locale === "en") {
    // England (St George's Cross)
    return (
      <svg viewBox="0 0 5 3" className={cls} aria-hidden="true">
        <rect width="5" height="3" fill="#FFFFFF" />
        <rect x="2" width="1" height="3" fill="#CE1124" />
        <rect y="1" width="5" height="1" fill="#CE1124" />
      </svg>
    );
  }
  if (locale === "ar") {
    // Morocco (red field with green pentagram)
    return (
      <svg viewBox="0 0 5 3" className={cls} aria-hidden="true">
        <rect width="5" height="3" fill="#C1272D" />
        <path
          d="M2.5 1.05l.18.55h.58l-.47.34.18.55-.47-.34-.47.34.18-.55-.47-.34h.58z"
          fill="none"
          stroke="#006233"
          strokeWidth="0.07"
        />
      </svg>
    );
  }
  // France (default)
  return (
    <svg viewBox="0 0 3 2" className={cls} aria-hidden="true">
      <rect x="0" width="1" height="2" fill="#0055A4" />
      <rect x="1" width="1" height="2" fill="#FFFFFF" />
      <rect x="2" width="1" height="2" fill="#EF4135" />
    </svg>
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
    { icon: RotateCcw, label: "Avoirs Fournisseur" },
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
  cta,
}: {
  label: string;
  value: string;
  sub: string;
  icon: typeof DollarSign;
  tone: string;
  cta?: string;
}) {
  return (
    <div className="relative rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
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
      {cta && (
        <span className="absolute bottom-2 end-2 inline-flex items-center gap-0.5 rounded bg-indigo-50 px-1 py-[1px] text-[5.5px] font-semibold text-indigo-500">
          <Activity className="h-1.5 w-1.5" /> {cta}
        </span>
      )}
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
    { ...d.kpis.revenue, value: cur("984,17"), icon: DollarSign, tone: "blue" },
    { ...d.kpis.receivables, value: cur("765,00"), icon: CreditCard, tone: "blue" },
    { ...d.kpis.expenses, value: cur("681,91"), icon: Activity, tone: "rose" },
    { ...d.kpis.netProfit, value: cur("-528,75"), icon: ShieldCheck, tone: "rose" },
    { ...d.kpis.margin, value: cur("656,48"), icon: TrendingUp, tone: "indigo", cta: "Voir le calcul" },
  ];
  const kpisRow2 = [
    { ...d.kpis.orders, value: "5", icon: ClipboardList, tone: "blue" },
    { ...d.kpis.clients, value: "2", icon: Users, tone: "blue" },
    { ...d.kpis.suppliers, value: "1", icon: Building2, tone: "indigo" },
    { ...d.kpis.products, value: "36", icon: Package, tone: "amber" },
    { ...d.kpis.invoices, value: "12", icon: FileText, tone: "blue" },
  ];

  const invoices = [
    { ref: "FAC-2026-0014", date: "17/06/2026", amount: cur("965,00"), status: d.statusPending, tone: "amber" },
    { ref: "FAC-2026-0012", date: "16/06/2026", amount: cur("755,00"), status: d.statusPaid, tone: "emerald" },
    { ref: "FAC-2026-0013", date: "16/06/2026", amount: cur("599,99"), status: d.statusPaid, tone: "emerald" },
    { ref: "FAC-2026-0007", date: "13/06/2026", amount: cur("930,01"), status: d.statusPending, tone: "amber" },
    { ref: "FAC-2026-0008", date: "13/06/2026", amount: cur("640,10"), status: d.statusPending, tone: "amber" },
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
      <aside className="relative flex h-full w-[150px] shrink-0 flex-col bg-[#1E2538] py-3 text-[#A0AEC0] ring-1 ring-black/20">
        {/* collapse handle */}
        <span className="absolute -end-2.5 top-12 flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-[#1E2538] text-[#A0AEC0] shadow">
          <ChevronLeft className="h-2.5 w-2.5" />
        </span>

        <div className="px-3 pb-3">
          <div className="leading-none">
            <span className="text-[13px] font-extrabold tracking-tight text-white">
              Smart<span className="text-sky-400">Gestion</span>
            </span>
          </div>
          <p className="mt-0.5 text-[5.5px] font-semibold tracking-[0.18em] text-[#8A94A6]">
            INTEGRATED ERP SOLUTIONS
          </p>
        </div>

        <div className="no-scrollbar flex-1 space-y-0.5 overflow-y-auto px-2">
          {sidebar.map((item, i) =>
            "section" in item ? (
              <p
                key={i}
                className="px-1.5 pb-0.5 pt-2.5 text-[6px] font-semibold uppercase tracking-[0.12em] text-[#8A94A6]"
              >
                {item.section}
              </p>
            ) : (
              <div
                key={i}
                className={`relative flex items-center gap-1.5 rounded-md px-1.5 py-[5px] text-[8px] ${
                  "active" in item && item.active
                    ? "bg-white/10 font-semibold text-white"
                    : "font-medium text-[#A0AEC0]"
                }`}
              >
                {"active" in item && item.active && (
                  <span className="absolute inset-y-0 start-0 w-[2px] rounded-full bg-white" />
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
              <p className="text-[8px] font-semibold text-white">
                Test User
              </p>
              <p className="text-[6px] tracking-wide text-[#8A94A6]">{d.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[8px] text-[#A0AEC0]">
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
              <span className="font-semibold text-sky-500">
                {d.systemActive}
              </span>
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1 rounded-md border border-slate-200 px-1.5 py-0.5 text-[7px] text-slate-600">
              <LocaleFlag locale={locale} />
              {langShort} <ChevronDown className="h-2 w-2" />
            </span>
            <Minimize2 className="h-3 w-3 text-slate-400" />
            <span className="relative">
              <Bell className="h-3.5 w-3.5 text-slate-400" />
              <span className="absolute -end-1 -top-1 flex h-2.5 min-w-2.5 items-center justify-center rounded-full bg-rose-500 px-0.5 text-[5px] font-bold text-white">
                50
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
              <p className="text-[8px] text-slate-400">
                Bienvenue sur MECADIAG TAMASNA
              </p>
            </div>
            <div className="flex items-start gap-1.5">
              <Box className="mt-0.5 h-3 w-3 text-slate-400" />
              <div className="text-end leading-tight">
                <p className="text-[7px] text-slate-400">{d.stockValue}</p>
                <p className="text-[12px] font-extrabold text-slate-800">
                  {cur("865,80")}
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
                    ? "bg-sky-500 font-semibold text-white"
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
            <Calendar className="h-2 w-2" /> 01/06/2026 — 17/06/2026
          </p>

          {/* HT / TTC toggle */}
          <div className="mb-3 inline-flex items-center gap-0.5 rounded-md bg-slate-100 p-0.5">
            <span className="rounded px-2 py-[2px] text-[7px] font-medium text-slate-500">
              HT
            </span>
            <span className="rounded bg-sky-500 px-2 py-[2px] text-[7px] font-semibold text-white">
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
                  <TrendingUp className="h-3 w-3 text-sky-500" />
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
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
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
                  {/* expenses (red) — tall sharp spike around x=12, small bump near x=16 */}
                  <path
                    d="M0 84 L118 84 C 128 84 133 26 140 8 C 143 2 146 2 149 8 C 156 26 161 84 171 84 C 182 84 186 74 190 74 C 194 74 198 84 204 84 L220 84"
                    fill="rgba(239,68,68,0.08)"
                    stroke="#ef4444"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  {/* revenue (blue) — shorter spike just left of red, small bump near x=16 */}
                  <path
                    d="M0 84 L114 84 C 124 84 129 44 136 34 C 139 30 142 30 145 34 C 152 44 157 84 167 84 C 180 84 185 72 190 72 C 195 72 199 84 205 84 L220 84"
                    fill="rgba(14,165,233,0.12)"
                    stroke="#0ea5e9"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="ms-5 mt-0.5 flex justify-between text-[5px] text-slate-300">
                {Array.from({ length: 17 }, (_, i) => i + 1).map((n) => (
                  <span key={n}>{n}</span>
                ))}
              </div>
            </div>

            {/* recent invoices */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <FileText className="h-2.5 w-2.5 text-sky-500" />
                  <div className="leading-tight">
                    <p className="text-[9px] font-bold text-slate-700">
                      {d.recent.title}
                    </p>
                    <p className="text-[5px] text-slate-400">
                      Dernières transactions
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-0.5 text-[6px] font-medium text-sky-600">
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
                        Client Passager
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
                <Plus className="h-2.5 w-2.5 text-sky-500" />
                <p className="text-[9px] font-bold text-slate-700">
                  {d.quickActions.title}
                </p>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  { icon: FileText, label: d.quickActions.newInvoice, tone: "emerald" },
                  { icon: ShoppingCart, label: d.quickActions.quickSale, tone: "blue" },
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
                  { name: "La Roche-Posay Anthelios Fluide UVMune 50+", ref: "REF-002", units: "4" },
                  { name: "CeraVe Gel Moussant 473ml", ref: "REF-003", units: "4" },
                  { name: "Cetaphil Lotion Nettoyante 460ml", ref: "REF-005", units: "-5" },
                  { name: "Eucerin Sun Gel-Crème Oil Control SPF50+", ref: "REF-006", units: "0" },
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
                { label: d.fiscal.collected, value: "947.49", w: "55%", c: "bg-emerald-500", badge: null },
                { label: d.fiscal.deductible, value: "907.25", w: "85%", c: "bg-sky-500", badge: null },
                { label: d.fiscal.balance, value: "-659.77", w: "100%", c: "bg-sky-500", badge: "Crédit" },
              ].map((f) => (
                <div key={f.label}>
                  <div className="flex items-center justify-between">
                    <p className="text-[6px] font-semibold uppercase tracking-wide text-slate-400">
                      {f.label}
                    </p>
                    {f.badge && (
                      <span className="rounded bg-sky-50 px-1 text-[5px] font-semibold text-sky-600">
                        {f.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] font-extrabold text-slate-800">
                    {f.value}{" "}
                    <span className="text-[7px] font-medium text-slate-400">
                      MAD
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
   Desktop dashboard V2 — matches the OptiGestion reference photo
   (KPI cards, two donut charts, recent invoices, calendar + agenda)
   Uses ParaGestion brand colors (indigo accent) to stay on-brand.
   ============================================================ */

function buildSidebarV2(d: DashT) {
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
    { section: d.sidebar.sectionSystem },
    { icon: Settings, label: d.sidebar.settings },
  ];
}

/** Small KPI tile used in the V2 secondary row. */
function MiniKpi({
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
    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[6.5px] font-semibold uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-md ${TONE[tone]}`}
        >
          <Icon className="h-3 w-3" />
        </span>
      </div>
      <p className="text-[13px] font-extrabold text-slate-800">{value}</p>
      <p className="text-[6px] text-slate-400">{sub}</p>
    </div>
  );
}

/** A donut (ring) chart drawn with SVG stroke-dasharray. */
function Donut({
  segments,
  centerLabel,
  centerValue,
}: {
  segments: { value: number; color: string }[];
  centerLabel: string;
  centerValue: string;
}) {
  const r = 26;
  const c = 2 * Math.PI * r;
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  let offset = 0;

  return (
    <div className="relative h-[78px] w-[78px]">
      <svg viewBox="0 0 64 64" className="h-full w-full -rotate-90">
        <circle cx="32" cy="32" r={r} fill="none" stroke="#eef2f7" strokeWidth="8" />
        {segments.map((seg, i) => {
          const len = (seg.value / total) * c;
          const dash = `${len} ${c - len}`;
          const el = (
            <circle
              key={i}
              cx="32"
              cy="32"
              r={r}
              fill="none"
              stroke={seg.color}
              strokeWidth="8"
              strokeDasharray={dash}
              strokeDashoffset={-offset}
              strokeLinecap="round"
            />
          );
          offset += len;
          return el;
        })}
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center leading-none">
        <span className="text-[5px] font-semibold uppercase tracking-wide text-slate-400">
          {centerLabel}
        </span>
        <span className="text-[9px] font-extrabold text-slate-800">
          {centerValue}
        </span>
      </div>
    </div>
  );
}

export function ParaGestionDesktopV2() {
  const { t, dir, locale } = useI18n();
  const d = t.dashboard;
  const langShort = locale.toUpperCase();

  const sidebar = buildSidebarV2(d);
  const cur = (n: string) => `${n} ${d.currency}`;

  const secondaryKpis = [
    { label: "BONS DE COMMANDE", value: "1", sub: "Confirmés / Livrés", icon: ClipboardList, tone: "emerald" },
    { ...d.kpis.clients, value: "2", icon: Users, tone: "blue" },
    { ...d.kpis.suppliers, value: "1", icon: Building2, tone: "indigo" },
    { ...d.kpis.products, value: "3", icon: Package, tone: "amber" },
    { ...d.kpis.invoices, value: "2", icon: FileText, tone: "emerald" },
  ];

  const recentInvoices = [
    { ref: "FAC-2026-0002", date: "30/05/2026", amount: cur("876,00"), status: d.statusPending, tone: "amber" },
    { ref: "FAC-2026-0001", date: "29/05/2026", amount: cur("7.200,00"), status: d.statusPaid, tone: "emerald" },
  ];

  const weekDays = ["LUN.", "MAR.", "MER.", "JEU.", "VEN.", "SAM.", "DIM."];
  // May 2026 starts on a Friday; build a 5-week grid.
  const calendarCells: (number | null)[] = [
    null, null, null, null, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24,
    25, 26, 27, 28, 29, 30, 31,
  ];

  return (
    <div
      dir={dir}
      className="flex h-full w-full overflow-hidden bg-slate-50 text-start"
    >
      {/* ===== Sidebar ===== */}
      <aside className="flex w-[150px] shrink-0 flex-col bg-white py-3 text-slate-600 ring-1 ring-slate-200">
        <div className="px-3 pb-3">
          <div className="flex items-center gap-1.5">
            <span className="flex h-[22px] w-[22px] items-center justify-center rounded-lg bg-indigo-600 text-white">
              <LayoutGrid className="h-3 w-3" />
            </span>
            <span className="text-[12px] font-extrabold text-slate-800">
              Para<span className="text-indigo-600">Gestion</span>
            </span>
          </div>
          <p className="ms-7 mt-0.5 text-[6px] font-semibold tracking-[0.15em] text-slate-400">
            {d.solutionTag}
          </p>
        </div>

        <div className="no-scrollbar flex-1 space-y-0.5 overflow-y-auto px-2">
          {sidebar.map((item, i) =>
            "section" in item ? (
              <p
                key={i}
                className="px-1.5 pb-0.5 pt-2.5 text-[6px] font-semibold tracking-[0.12em] text-slate-400"
              >
                {item.section}
              </p>
            ) : (
              <div
                key={i}
                className={`relative flex items-center gap-1.5 rounded-md px-1.5 py-[5px] text-[8px] ${
                  "active" in item && item.active
                    ? "bg-indigo-50 font-semibold text-indigo-700"
                    : "text-slate-500"
                }`}
              >
                {item.icon && <item.icon className="h-2.5 w-2.5 shrink-0" />}
                <span className="truncate">{item.label}</span>
              </div>
            )
          )}
        </div>

        <div className="mt-2 space-y-1.5 border-t border-slate-200 px-3 pt-2.5">
          <div className="flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-[8px]">
              👤
            </span>
            <div className="leading-none">
              <p className="text-[8px] font-semibold text-slate-700">optique3</p>
              <p className="text-[6px] tracking-wide text-slate-400">{d.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-[8px] text-slate-400">
            <LogOut className="h-2.5 w-2.5" /> {d.logout}
          </div>
        </div>
      </aside>

      {/* ===== Main ===== */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-2">
          <div className="flex items-center gap-1.5">
            <ChevronLeft className="h-3 w-3 text-slate-400" />
            <div>
              <p className="text-[13px] font-bold text-slate-800">{d.title}</p>
              <p className="text-[7px] text-slate-400">
                {d.headerSubtitle} -{" "}
                <span className="font-semibold text-indigo-600">
                  {d.systemActive}
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1 rounded-md border border-slate-200 px-1.5 py-0.5 text-[7px] text-slate-600">
              <LocaleFlag locale={locale} />
              {langShort} <ChevronDown className="h-2 w-2" />
            </span>
            <span className="relative">
              <Bell className="h-3.5 w-3.5 text-slate-400" />
              <span className="absolute -end-1 -top-1 flex h-2.5 min-w-2.5 items-center justify-center rounded-full bg-rose-500 px-0.5 text-[5px] font-bold text-white">
                1
              </span>
            </span>
            <div className="flex items-center gap-1">
              <div className="text-end leading-none">
                <p className="text-[8px] font-semibold text-slate-700">
                  optique3
                </p>
                <p className="text-[6px] tracking-wide text-slate-400">
                  {d.role}
                </p>
              </div>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-[8px]">
                👤
              </span>
              <ChevronDown className="h-2.5 w-2.5 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Scroll body */}
        <div className="no-scrollbar flex-1 overflow-y-auto p-4">
          {/* primary KPI row: highlighted revenue + 3 cards */}
          <div className="grid grid-cols-4 gap-2.5">
            {/* highlighted revenue */}
            <div className="rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-500 p-3 text-white shadow-[0_8px_20px_-8px_rgba(79,70,229,0.6)]">
              <div className="flex items-start justify-between">
                <p className="text-[6.5px] font-semibold uppercase tracking-wide text-white/80">
                  {d.kpis.revenue.label}
                </p>
                <TrendingUp className="h-3 w-3 text-white/70" />
              </div>
              <p className="mt-1 text-[14px] font-extrabold">{cur("7.920,00")}</p>
              <p className="text-[6px] text-white/70">{d.kpis.revenue.sub}</p>
            </div>
            {[
              { ...d.kpis.receivables, value: cur("0,00"), icon: CreditCard, tone: "blue" },
              { ...d.kpis.expenses, value: cur("3.000,00"), icon: Activity, tone: "rose" },
              { ...d.kpis.netProfit, value: cur("4.920,00"), icon: ShieldCheck, tone: "emerald" },
            ].map((k) => (
              <div
                key={k.label}
                className="rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]"
              >
                <div className="flex items-start justify-between">
                  <p className="text-[6.5px] font-semibold uppercase tracking-wide text-slate-400">
                    {k.label}
                  </p>
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-md ${TONE[k.tone]}`}
                  >
                    <k.icon className="h-3 w-3" />
                  </span>
                </div>
                <p className="mt-1 text-[14px] font-extrabold text-slate-800">
                  {k.value}
                </p>
                <p className="text-[6px] text-slate-400">{k.sub}</p>
              </div>
            ))}
          </div>

          {/* secondary KPI row */}
          <div className="mt-2.5 grid grid-cols-5 gap-2.5">
            {secondaryKpis.map((k) => (
              <MiniKpi key={k.label} {...k} />
            ))}
          </div>

          {/* charts row: two donuts + recent invoices */}
          <div className="mt-2.5 grid grid-cols-3 gap-2.5">
            {/* Stock par Catégorie */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="mb-1.5 flex items-center gap-1">
                <PieChart className="h-2.5 w-2.5 text-indigo-500" />
                <p className="text-[9px] font-bold text-slate-700">
                  Stock par Catégorie
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Donut
                  segments={[{ value: 100, color: "#6366f1" }]}
                  centerLabel="STOCK TOTAL"
                  centerValue={cur("20.417")}
                />
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[6px] text-slate-500">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Non catégorisé
                </span>
                <span className="font-semibold text-slate-700">100%</span>
              </div>
            </div>

            {/* État du Stock */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="mb-1.5 flex items-center gap-1">
                <Activity className="h-2.5 w-2.5 text-amber-500" />
                <p className="text-[9px] font-bold text-slate-700">
                  État du Stock
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Donut
                  segments={[
                    { value: 67, color: "#6366f1" },
                    { value: 33, color: "#f97316" },
                  ]}
                  centerLabel="PRODUITS"
                  centerValue="3"
                />
              </div>
              <div className="mt-1.5 space-y-0.5 text-[6px] text-slate-500">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                    Critique
                  </span>
                  <span className="font-semibold text-slate-700">33%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    Sain
                  </span>
                  <span className="font-semibold text-slate-700">67%</span>
                </div>
              </div>
            </div>

            {/* Factures Récentes */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="mb-1.5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <FileText className="h-2.5 w-2.5 text-indigo-500" />
                  <p className="text-[9px] font-bold text-slate-700">
                    {d.recent.title}
                  </p>
                </div>
                <span className="text-[6px] font-medium text-indigo-600">
                  {d.recent.seeAll} ›
                </span>
              </div>
              <div className="space-y-2">
                {recentInvoices.map((inv) => (
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
                        Client Passager
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

          {/* bottom row: calendar + agenda */}
          <div className="mt-2.5 grid grid-cols-2 gap-2.5">
            {/* calendar */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="mb-1.5 flex items-center gap-1">
                <Calendar className="h-2.5 w-2.5 text-indigo-500" />
                <div className="leading-tight">
                  <p className="text-[9px] font-bold text-slate-700">À venir</p>
                  <p className="text-[5px] text-slate-400">
                    Prochains rendez-vous
                  </p>
                </div>
              </div>
              <p className="mb-1 text-center text-[8px] font-bold text-slate-700">
                Mai 2026
              </p>
              <div className="grid grid-cols-7 gap-[2px] text-center">
                {weekDays.map((w) => (
                  <span
                    key={w}
                    className="text-[5px] font-semibold text-slate-400"
                  >
                    {w}
                  </span>
                ))}
                {calendarCells.map((day, i) => (
                  <span
                    key={i}
                    className={`flex h-3 items-center justify-center rounded text-[5.5px] ${
                      day === 31
                        ? "bg-indigo-600 font-bold text-white"
                        : day
                          ? "text-slate-600"
                          : "text-transparent"
                    }`}
                  >
                    {day ?? "."}
                  </span>
                ))}
              </div>
            </div>

            {/* agenda */}
            <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <ClipboardList className="h-2.5 w-2.5 text-indigo-500" />
                  <p className="text-[9px] font-bold text-slate-700">
                    Prochains rendez-vous
                  </p>
                </div>
                <span className="text-[6px] font-medium text-indigo-600">
                  {d.recent.seeAll} ›
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex flex-col items-center rounded-md bg-indigo-50 px-1.5 py-1 leading-none text-indigo-700">
                  <span className="text-[9px] font-extrabold">2</span>
                  <span className="text-[5px] font-semibold">JUIN</span>
                </div>
                <div className="flex-1 leading-tight">
                  <p className="text-[7px] font-semibold text-slate-700">
                    FARSI JAOUAD
                  </p>
                  <p className="text-[5px] text-slate-400">
                    02/06/2026 • 12:30:00
                  </p>
                </div>
                <span className="rounded bg-indigo-50 px-1 text-[5px] font-semibold text-indigo-600">
                  Planifié
                </span>
              </div>
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
