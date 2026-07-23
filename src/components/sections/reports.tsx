"use client";

import * as React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  BarChart3,
  Boxes,
  ShoppingCart,
  Wallet,
  Users,
  Gauge,
  TrendingUp,
  ArrowRight,
  Sparkles,
  FileSpreadsheet,
  FileText,
  Printer,
  Download,
  Store,
  ReceiptText,
  Truck,
  RotateCcw,
  ClipboardList,
  Percent,
  DollarSign,
  FolderOpen,
  Warehouse,
  Clock,
  CalendarDays,
  Search,
  Package,
  PieChart,
  Trophy,
  Zap,
  Snail,
  History,
  ArrowDownToLine,
  ArrowUpFromLine,
  PackageMinus,
  PackagePlus,
  Landmark,
  CreditCard,
  Repeat,
  UserPlus,
  UserX,
  TrendingDown,
  AlertTriangle,
  Info,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/provider";

type SalesData = ReturnType<typeof useI18n>["t"]["reports"]["sales"];
type ProductsData = ReturnType<typeof useI18n>["t"]["reports"]["products2"];
type InventoryData = ReturnType<typeof useI18n>["t"]["reports"]["inventory2"];
type PurchasesData = ReturnType<typeof useI18n>["t"]["reports"]["purchases2"];
type FinanceData = ReturnType<typeof useI18n>["t"]["reports"]["finance2"];
type CustomersData = ReturnType<typeof useI18n>["t"]["reports"]["customers2"];
type PerformanceData = ReturnType<typeof useI18n>["t"]["reports"]["performance2"];

/* ---------- Mini SVG line chart (area) ---------- */
function LineChart({
  points,
  color = "#3FB8C4",
  className = "",
}: {
  points: number[];
  color?: string;
  className?: string;
}) {
  const W = 300;
  const H = 96;
  const max = Math.max(...points, 1);
  const min = Math.min(...points, 0);
  const range = max - min || 1;
  const step = W / (points.length - 1 || 1);
  const coords = points.map((p, i) => {
    const x = i * step;
    const y = H - ((p - min) / range) * (H - 12) - 6;
    return [x, y] as const;
  });
  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${W},${H} L0,${H} Z`;
  const gid = React.useId();
  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className={className}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill={`url(#${gid})`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
      />
      {coords.map(([x, y], i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={y}
          r={2.6}
          fill="#fff"
          stroke={color}
          strokeWidth={1.6}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 + i * 0.04, ease: EASE }}
        />
      ))}
    </svg>
  );
}

/* ---------- Donut chart ---------- */
function Donut({
  slices,
}: {
  slices: { color: string; slice: number }[];
}) {
  const total = slices.reduce((s, x) => s + x.slice, 0) || 1;
  const R = 42;
  const C = 2 * Math.PI * R;
  let offset = 0;
  return (
    <svg viewBox="0 0 110 110" className="h-32 w-32 -rotate-90">
      <circle cx="55" cy="55" r={R} fill="none" stroke="currentColor" strokeWidth="14" className="text-slate-100 dark:text-white/[0.06]" />
      {slices.map((s, i) => {
        const len = (s.slice / total) * C;
        const dash = `${len} ${C - len}`;
        const el = (
          <motion.circle
            key={i}
            cx="55"
            cy="55"
            r={R}
            fill="none"
            stroke={s.color}
            strokeWidth="14"
            strokeLinecap="butt"
            strokeDasharray={dash}
            strokeDashoffset={-offset}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 + i * 0.12, ease: EASE }}
          />
        );
        offset += len;
        return el;
      })}
    </svg>
  );
}

const EASE = [0.16, 1, 0.3, 1] as const;

const reveal: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE },
  }),
};

const TAB_ICONS: Record<string, LucideIcon> = {
  sales: TrendingUp,
  products: Boxes,
  inventory: Warehouse,
  purchases: ShoppingCart,
  finance: Wallet,
  customers: Users,
  performance: Gauge,
};

const MODULE_ICONS: LucideIcon[] = [
  Store,
  ReceiptText,
  Truck,
  RotateCcw,
  ClipboardList,
  Percent,
  DollarSign,
  FolderOpen,
  Warehouse,
];

const EXPORT_ICONS: LucideIcon[] = [FileText, FileSpreadsheet, FileText, Printer];

/* ---------- Rich sales dashboard panel ---------- */
function SalesPanel({ s }: { s: SalesData }) {
  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.05 + i * 0.05, ease: EASE, duration: 0.45 },
  });

  const cell =
    "px-3 py-2.5 text-xs text-slate-600 dark:text-white/70 whitespace-nowrap";
  const head =
    "px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45 whitespace-nowrap";

  return (
    <div className="space-y-6">
      {/* KPI strip */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 xl:grid-cols-7">
        {s.kpis.map((k, i) => (
          <motion.div
            key={k.label}
            {...stagger(i)}
            className="rounded-xl border border-slate-200 bg-slate-50/70 p-3 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <p className="text-[9px] font-semibold uppercase leading-tight tracking-wide text-slate-400 dark:text-white/45">
              {k.label}
            </p>
            <p
              className={`mt-1 text-base font-black tracking-tight ${
                k.accent === "up"
                  ? "text-emerald-500"
                  : k.accent === "down"
                  ? "text-rose-500"
                  : "text-slate-900 dark:text-white"
              }`}
            >
              {k.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Dual line charts */}
      <div className="grid gap-4 lg:grid-cols-2">
        {[
          { title: s.evolutionTitle, data: [96, 82, 88, 60, 70, 44, 52, 30], color: "#3FB8C4" },
          { title: s.trendTitle, data: [30, 48, 42, 66, 58, 80, 72, 96], color: "#1D6FD6" },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            {...stagger(i)}
            className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
          >
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
              {c.title}
            </p>
            <LineChart points={c.data} color={c.color} className="h-24 w-full" />
          </motion.div>
        ))}
      </div>

      {/* Product table */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <Package className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <p className="text-sm font-bold text-slate-800 dark:text-white">
            {s.productTableTitle}
          </p>
          <span className="ms-auto inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-400 dark:border-white/10 dark:text-white/40">
            <Search className="h-3 w-3" />
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className={head}>{s.productCols.product}</th>
                <th className={head}>{s.productCols.qty}</th>
                <th className={head}>{s.productCols.revenue}</th>
                <th className={head}>{s.productCols.margin}</th>
                <th className={head}>{s.productCols.stock}</th>
              </tr>
            </thead>
            <tbody>
              {s.products.map((p, i) => (
                <motion.tr
                  key={p.name}
                  {...stagger(i + 1)}
                  className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                >
                  <td className={cell}>
                    <span className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#3FB8C4]/12 text-[#2a9fa9] dark:text-[#3FB8C4]">
                        <Boxes className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-white/90">{p.name}</span>
                    </span>
                  </td>
                  <td className={cell}>{p.qty}</td>
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{p.revenue}</td>
                  <td className={`${cell} font-semibold text-emerald-500`}>{p.margin}</td>
                  <td className={cell}>{p.stock}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Top / Low bars */}
      <div className="grid gap-4 lg:grid-cols-2">
        {[
          { title: s.topTitle, icon: Trophy, list: s.products },
          { title: s.lowTitle, icon: TrendingUp, list: [...s.products].reverse() },
        ].map((b, bi) => (
          <motion.div
            key={b.title}
            {...stagger(bi)}
            className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
          >
            <p className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
              <b.icon className="h-3.5 w-3.5 text-[#3FB8C4]" />
              {b.title}
            </p>
            <div className="space-y-2.5">
              {b.list.map((p, i) => (
                <div key={p.name} className="flex items-center gap-2">
                  <span className="w-24 shrink-0 truncate text-[11px] font-medium text-slate-500 dark:text-white/55">
                    {p.name}
                  </span>
                  <span className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-white/[0.06]">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bi === 0 ? p.bar : 100 - p.bar + 10}%` }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: EASE }}
                      className="block h-full rounded-full bg-gradient-to-r from-[#1D6FD6] to-[#3FB8C4]"
                    />
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Category donut + list */}
      <motion.div
        {...stagger(0)}
        className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 dark:border-white/10 dark:bg-white/[0.02]"
      >
        <p className="mb-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
          <PieChart className="h-3.5 w-3.5 text-[#3FB8C4]" />
          {s.categoryTitle}
        </p>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
          <Donut slices={s.categories} />
          <div className="w-full flex-1 space-y-2.5">
            {s.categories.map((c) => (
              <div key={c.name} className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: c.color }} />
                <span className="text-xs font-medium text-slate-600 dark:text-white/70">{c.name}</span>
                <span className="ms-auto text-xs font-bold text-slate-800 dark:text-white/90">{c.value}</span>
                <span className="w-10 text-end text-[11px] font-semibold text-slate-400 dark:text-white/45">{c.percent}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Client table */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <Users className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <p className="text-sm font-bold text-slate-800 dark:text-white">{s.clientTableTitle}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className={head}>{s.clientCols.client}</th>
                <th className={head}>{s.clientCols.orders}</th>
                <th className={head}>{s.clientCols.revenue}</th>
                <th className={head}>{s.clientCols.basket}</th>
                <th className={head}>{s.clientCols.last}</th>
              </tr>
            </thead>
            <tbody>
              {s.clients.map((c, i) => (
                <motion.tr
                  key={c.name}
                  {...stagger(i + 1)}
                  className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                >
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{c.name}</td>
                  <td className={cell}>{c.orders}</td>
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{c.revenue}</td>
                  <td className={cell}>{c.basket}</td>
                  <td className={cell}>{c.last}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Hour heatmap + day bars */}
      <div className="grid gap-4 lg:grid-cols-2">
        <motion.div
          {...stagger(0)}
          className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
        >
          <p className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
            <Clock className="h-3.5 w-3.5 text-[#3FB8C4]" />
            {s.hourTitle}
          </p>
          <div className="space-y-1.5">
            {s.days.map((d, di) => (
              <div key={d} className="flex items-center gap-1.5">
                <span className="w-10 shrink-0 text-[10px] font-medium text-slate-400 dark:text-white/40">{d}</span>
                <div className="flex flex-1 gap-1">
                  {Array.from({ length: 12 }).map((_, hi) => {
                    const seed = (di * 3 + hi * 5) % 11;
                    const on = seed > 6;
                    const strong = seed > 8;
                    return (
                      <span
                        key={hi}
                        className={`h-3 flex-1 rounded-[3px] ${
                          strong
                            ? "bg-[#1D6FD6]"
                            : on
                            ? "bg-[#3FB8C4]/60"
                            : "bg-slate-100 dark:bg-white/[0.05]"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...stagger(1)}
          className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
        >
          <p className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
            <CalendarDays className="h-3.5 w-3.5 text-[#3FB8C4]" />
            {s.dayTitle}
          </p>
          <div className="flex h-28 items-end justify-between gap-2">
            {s.dayValues.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${v}%` }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: EASE }}
                  className="w-full rounded-md bg-gradient-to-t from-[#1D6FD6]/70 to-[#3FB8C4]/50"
                />
                <span className="text-[9px] font-medium text-slate-400 dark:text-white/40">{s.days[i]}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- Reusable horizontal bar list ---------- */
function BarList({
  items,
  labelWidth = "w-24",
}: {
  items: { name: string; bar: number }[];
  labelWidth?: string;
}) {
  return (
    <div className="space-y-2.5">
      {items.map((it, i) => (
        <div key={it.name} className="flex items-center gap-2">
          <span className={`${labelWidth} shrink-0 truncate text-[11px] font-medium text-slate-500 dark:text-white/55`}>
            {it.name}
          </span>
          <span className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-white/[0.06]">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: `${it.bar}%` }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.6, ease: EASE }}
              className="block h-full rounded-full bg-gradient-to-r from-[#1D6FD6] to-[#3FB8C4]"
            />
          </span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Rich products dashboard panel ---------- */
function ProductsPanel({ p }: { p: ProductsData }) {
  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.05 + i * 0.05, ease: EASE, duration: 0.45 },
  });

  const cell = "px-3 py-2.5 text-xs text-slate-600 dark:text-white/70 whitespace-nowrap";
  const head =
    "px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45 whitespace-nowrap";

  const topCards = [
    { title: p.topRevenueTitle, items: p.topRevenue },
    { title: p.topProfitTitle, items: p.topProfit },
    { title: p.topQtyTitle, items: p.topQty },
  ];

  return (
    <div className="space-y-6">
      {/* Product analysis table */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <Boxes className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <p className="text-sm font-bold text-slate-800 dark:text-white">{p.tableTitle}</p>
          <span className="ms-auto inline-flex items-center gap-1 rounded-md border border-slate-200 px-2 py-1 text-[10px] font-medium text-slate-400 dark:border-white/10 dark:text-white/40">
            <Search className="h-3 w-3" />
          </span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className={head}>{p.cols.product}</th>
                <th className={head}>{p.cols.category}</th>
                <th className={head}>{p.cols.bought}</th>
                <th className={head}>{p.cols.sold}</th>
                <th className={head}>{p.cols.revenue}</th>
                <th className={head}>{p.cols.margin}</th>
                <th className={head}>{p.cols.stock}</th>
              </tr>
            </thead>
            <tbody>
              {p.rows.map((row, i) => (
                <motion.tr
                  key={row.name}
                  {...stagger(i + 1)}
                  className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                >
                  <td className={cell}>
                    <span className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#3FB8C4]/12 text-[#2a9fa9] dark:text-[#3FB8C4]">
                        <Boxes className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-white/90">{row.name}</span>
                    </span>
                  </td>
                  <td className={cell}>
                    <span className="inline-flex rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500 dark:bg-white/[0.06] dark:text-white/60">
                      {row.category}
                    </span>
                  </td>
                  <td className={cell}>{row.bought}</td>
                  <td className={cell}>{row.sold}</td>
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{row.revenue}</td>
                  <td className={`${cell} font-semibold text-emerald-500`}>{row.margin}</td>
                  <td className={cell}>{row.stock}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Top CA / Bénéfice / Quantité */}
      <div className="grid gap-4 md:grid-cols-3">
        {topCards.map((c, i) => (
          <motion.div
            key={c.title}
            {...stagger(i)}
            className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
          >
            <p className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
              <Trophy className="h-3.5 w-3.5 text-[#3FB8C4]" />
              {c.title}
            </p>
            <BarList items={c.items} labelWidth="w-20" />
          </motion.div>
        ))}
      </div>

      {/* Rotation rapide / lente */}
      <div className="grid gap-4 lg:grid-cols-2">
        <motion.div
          {...stagger(0)}
          className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
        >
          <p className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
            <Zap className="h-3.5 w-3.5 text-[#3FB8C4]" />
            {p.fastTitle}
          </p>
          <BarList items={p.fast} />
        </motion.div>
        <motion.div
          {...stagger(1)}
          className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
        >
          <p className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
            <Snail className="h-3.5 w-3.5 text-[#3FB8C4]" />
            {p.slowTitle}
          </p>
          <BarList items={p.slow} />
        </motion.div>
      </div>
    </div>
  );
}

/* ---------- Rich inventory dashboard panel ---------- */
function InventoryPanel({ inv }: { inv: InventoryData }) {
  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.05 + i * 0.05, ease: EASE, duration: 0.45 },
  });

  const cell = "px-3 py-2.5 text-xs text-slate-600 dark:text-white/70 whitespace-nowrap";
  const head =
    "px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45 whitespace-nowrap";

  return (
    <div className="space-y-6">
      {/* KPI cards */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {inv.kpis.map((k, i) => (
          <motion.div
            key={k.label}
            {...stagger(i)}
            className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-white/45">
              {k.label}
            </p>
            <p
              className={`mt-1 text-xl font-black tracking-tight ${
                k.accent === "up" ? "text-emerald-500" : "text-slate-900 dark:text-white"
              }`}
            >
              {k.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Stock movements */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <History className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <div>
            <p className="text-sm font-bold leading-tight text-slate-800 dark:text-white">{inv.movementsTitle}</p>
            <p className="text-[10px] text-slate-400 dark:text-white/40">{inv.movementsSubtitle}</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className={head}>{inv.movCols.date}</th>
                <th className={head}>{inv.movCols.product}</th>
                <th className={head}>{inv.movCols.type}</th>
                <th className={head}>{inv.movCols.qty}</th>
                <th className={head}>{inv.movCols.ref}</th>
              </tr>
            </thead>
            <tbody>
              {inv.movements.map((m, i) => (
                <motion.tr
                  key={`${m.ref}-${i}`}
                  {...stagger(i + 1)}
                  className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                >
                  <td className={cell}>{m.date}</td>
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{m.product}</td>
                  <td className={cell}>
                    <span
                      className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-bold ${
                        m.direction === "in"
                          ? "bg-emerald-500/12 text-emerald-500"
                          : "bg-rose-500/12 text-rose-500"
                      }`}
                    >
                      {m.direction === "in" ? (
                        <ArrowDownToLine className="h-3 w-3" />
                      ) : (
                        <ArrowUpFromLine className="h-3 w-3" />
                      )}
                      {m.type}
                    </span>
                  </td>
                  <td
                    className={`${cell} font-bold ${
                      m.direction === "in" ? "text-emerald-500" : "text-rose-500"
                    }`}
                  >
                    {m.qty}
                  </td>
                  <td className={`${cell} font-mono text-[11px] text-slate-400 dark:text-white/45`}>{m.ref}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Low stock + Overstock */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Low stock */}
        <motion.div
          {...stagger(0)}
          className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
        >
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
            <PackageMinus className="h-4 w-4 text-amber-500" strokeWidth={2.2} />
            <p className="text-sm font-bold text-slate-800 dark:text-white">{inv.lowTitle}</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10">
                  <th className={head}>{inv.lowCols.product}</th>
                  <th className={head}>{inv.lowCols.stock}</th>
                  <th className={head}>{inv.lowCols.min}</th>
                  <th className={head}>{inv.lowCols.value}</th>
                </tr>
              </thead>
              <tbody>
                {inv.low.map((row, i) => (
                  <motion.tr
                    key={row.name}
                    {...stagger(i + 1)}
                    className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                  >
                    <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{row.name}</td>
                    <td className={`${cell} font-bold text-amber-500`}>{row.stock}</td>
                    <td className={cell}>{row.min}</td>
                    <td className={cell}>{row.value}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Overstock */}
        <motion.div
          {...stagger(1)}
          className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
        >
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
            <PackagePlus className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
            <div>
              <p className="text-sm font-bold leading-tight text-slate-800 dark:text-white">{inv.overTitle}</p>
              <p className="text-[10px] text-slate-400 dark:text-white/40">{inv.overSubtitle}</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10">
                  <th className={head}>{inv.lowCols.product}</th>
                  <th className={head}>{inv.lowCols.stock}</th>
                  <th className={head}>{inv.unsoldCols.sold}</th>
                  <th className={head}>{inv.lowCols.value}</th>
                </tr>
              </thead>
              <tbody>
                {inv.over.map((row, i) => (
                  <motion.tr
                    key={row.name}
                    {...stagger(i + 1)}
                    className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                  >
                    <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{row.name}</td>
                    <td className={`${cell} font-bold text-[#2a9fa9] dark:text-[#3FB8C4]`}>{row.stock}</td>
                    <td className={cell}>{row.sold}</td>
                    <td className={cell}>{row.value}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* Unsold products */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <Clock className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <div>
            <p className="text-sm font-bold leading-tight text-slate-800 dark:text-white">{inv.unsoldTitle}</p>
            <p className="text-[10px] text-slate-400 dark:text-white/40">{inv.unsoldSubtitle}</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className={head}>{inv.unsoldCols.product}</th>
                <th className={head}>{inv.unsoldCols.stock}</th>
                <th className={head}>{inv.unsoldCols.sold}</th>
                <th className={head}>{inv.unsoldCols.days}</th>
                <th className={head}>{inv.unsoldCols.value}</th>
              </tr>
            </thead>
            <tbody>
              {inv.unsold.map((row, i) => (
                <motion.tr
                  key={row.name}
                  {...stagger(i + 1)}
                  className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                >
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{row.name}</td>
                  <td className={cell}>{row.stock}</td>
                  <td className={cell}>{row.sold}</td>
                  <td className={cell}>
                    <span className="inline-flex rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-500 dark:bg-white/[0.06] dark:text-white/60">
                      {row.days}j
                    </span>
                  </td>
                  <td className={cell}>{row.value}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Rich purchases dashboard panel ---------- */
function PurchasesPanel({ pu }: { pu: PurchasesData }) {
  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.05 + i * 0.05, ease: EASE, duration: 0.45 },
  });

  const cell = "px-3 py-2.5 text-xs text-slate-600 dark:text-white/70 whitespace-nowrap";
  const head =
    "px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45 whitespace-nowrap";

  return (
    <div className="space-y-6">
      {/* KPI cards */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {pu.kpis.map((k, i) => (
          <motion.div
            key={k.label}
            {...stagger(i)}
            className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-white/[0.03]"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-white/45">
              {k.label}
            </p>
            <p className="mt-1 text-xl font-black tracking-tight text-slate-900 dark:text-white">
              {k.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Purchase trend */}
      <motion.div
        {...stagger(0)}
        className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
      >
        <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
          {pu.trendTitle}
        </p>
        <LineChart points={[20, 32, 28, 44, 40, 60, 74, 96]} color="#1D6FD6" className="h-28 w-full" />
      </motion.div>

      {/* Purchases by supplier */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <Truck className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <p className="text-sm font-bold text-slate-800 dark:text-white">{pu.supplierTitle}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className={head}>{pu.supplierCols.supplier}</th>
                <th className={head}>{pu.supplierCols.orders}</th>
                <th className={head}>{pu.supplierCols.products}</th>
                <th className={head}>{pu.supplierCols.amount}</th>
                <th className={head}>{pu.supplierCols.avg}</th>
              </tr>
            </thead>
            <tbody>
              {pu.suppliers.map((s, i) => (
                <motion.tr
                  key={s.name}
                  {...stagger(i + 1)}
                  className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                >
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{s.name}</td>
                  <td className={cell}>{s.orders}</td>
                  <td className={cell}>{s.products}</td>
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{s.amount}</td>
                  <td className={cell}>{s.avg}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Purchases by product */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <Boxes className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <p className="text-sm font-bold text-slate-800 dark:text-white">{pu.productTitle}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className={head}>{pu.productCols.product}</th>
                <th className={head}>{pu.productCols.qty}</th>
                <th className={head}>{pu.productCols.cost}</th>
                <th className={head}>{pu.productCols.supplier}</th>
                <th className={head}>{pu.productCols.last}</th>
              </tr>
            </thead>
            <tbody>
              {pu.products.map((p, i) => (
                <motion.tr
                  key={p.name}
                  {...stagger(i + 1)}
                  className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                >
                  <td className={cell}>
                    <span className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#3FB8C4]/12 text-[#2a9fa9] dark:text-[#3FB8C4]">
                        <Boxes className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-white/90">{p.name}</span>
                    </span>
                  </td>
                  <td className={cell}>{p.qty}</td>
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{p.cost}</td>
                  <td className={cell}>{p.supplier}</td>
                  <td className={cell}>{p.last}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Rich finance dashboard panel ---------- */
function FinancePanel({ fin }: { fin: FinanceData }) {
  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.05 + i * 0.05, ease: EASE, duration: 0.45 },
  });

  const cell = "px-3 py-2.5 text-xs text-slate-600 dark:text-white/70 whitespace-nowrap";
  const head =
    "px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45 whitespace-nowrap";

  const marginTable = (
    title: string,
    rows: FinanceData["marginProducts"]
  ) => (
    <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10">
      <div className="border-b border-slate-200 bg-slate-50/70 px-4 py-2.5 dark:border-white/10 dark:bg-white/[0.03]">
        <p className="text-xs font-bold text-slate-700 dark:text-white/80">{title}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-white/10">
              <th className={head}>{fin.marginCols.name}</th>
              <th className={head}>{fin.marginCols.revenue}</th>
              <th className={head}>{fin.marginCols.cost}</th>
              <th className={head}>{fin.marginCols.margin}</th>
              <th className={head}>{fin.marginCols.marginPct}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <motion.tr
                key={row.name}
                {...stagger(i + 1)}
                className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
              >
                <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{row.name}</td>
                <td className={cell}>{row.revenue}</td>
                <td className={cell}>{row.cost}</td>
                <td className={`${cell} font-semibold text-emerald-500`}>{row.margin}</td>
                <td className={`${cell} font-semibold text-emerald-500`}>{row.marginPct}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Profit & loss */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <FileText className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <p className="text-sm font-bold text-slate-800 dark:text-white">{fin.plTitle}</p>
        </div>
        <div className="divide-y divide-slate-100 px-4 dark:divide-white/[0.06]">
          <div className="flex items-center justify-between py-3">
            <span className="text-sm font-bold text-slate-800 dark:text-white">{fin.pl.revenue}</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">{fin.pl.revenueVal}</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-sm text-slate-500 dark:text-white/60">− {fin.pl.cogsLabel}</span>
            <span className="text-sm font-semibold text-rose-500">{fin.pl.cogsVal}</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-sm font-bold text-slate-800 dark:text-white">{fin.pl.grossLabel}</span>
            <span className="text-sm font-bold text-emerald-500">{fin.pl.grossVal}</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-sm text-slate-500 dark:text-white/60">− {fin.pl.opexLabel}</span>
            <span className="text-sm font-semibold text-rose-500">{fin.pl.opexVal}</span>
          </div>
        </div>
        <div className="flex items-center justify-between bg-slate-50 px-4 py-3.5 dark:bg-white/[0.04]">
          <span className="text-sm font-black text-slate-900 dark:text-white">{fin.pl.netLabel}</span>
          <span className={`text-lg font-black ${fin.pl.netNegative ? "text-rose-500" : "text-emerald-500"}`}>
            {fin.pl.netVal}
          </span>
        </div>
      </motion.div>

      {/* Expense report */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <DollarSign className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <p className="text-sm font-bold text-slate-800 dark:text-white">{fin.expensesTitle}</p>
        </div>
        <div className="flex flex-col items-center gap-6 p-5 sm:flex-row sm:gap-8">
          <Donut slices={fin.expenses} />
          <div className="w-full flex-1 space-y-2.5">
            {fin.expenses.map((e) => (
              <div key={e.name} className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: e.color }} />
                <span className="text-xs font-medium text-slate-600 dark:text-white/70">{e.name}</span>
                <span className="ms-auto text-xs font-bold text-slate-800 dark:text-white/90">{e.amount}</span>
                <span className="w-12 text-end text-[11px] font-semibold text-slate-400 dark:text-white/45">{e.percent}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Commercial margin */}
      <motion.div {...stagger(0)}>
        <p className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
          <Percent className="h-3.5 w-3.5 text-[#3FB8C4]" />
          {fin.marginTitle}
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          {marginTable(fin.marginByProduct, fin.marginProducts)}
          {marginTable(fin.marginByCategory, fin.marginCategories)}
        </div>
      </motion.div>

      {/* Cash flow */}
      <motion.div
        {...stagger(0)}
        className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5 dark:border-white/10 dark:bg-white/[0.02]"
      >
        <p className="mb-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
          <Wallet className="h-3.5 w-3.5 text-[#3FB8C4]" />
          {fin.cashTitle}
        </p>
        <div className="grid grid-cols-3 gap-3">
          {fin.cashKpis.map((k) => (
            <div
              key={k.label}
              className="rounded-xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400 dark:text-white/45">
                {k.label}
              </p>
              <p
                className={`mt-1 text-base font-black tracking-tight ${
                  k.accent === "up" ? "text-emerald-500" : k.accent === "down" ? "text-rose-500" : "text-slate-900 dark:text-white"
                }`}
              >
                {k.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex h-32 items-end justify-center gap-16">
          <div className="flex w-16 flex-col items-center gap-1.5">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "18%" }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, ease: EASE }}
              className="w-full rounded-md bg-emerald-500/80"
            />
            <span className="flex items-center gap-1 text-[10px] font-medium text-slate-400 dark:text-white/40">
              <span className="h-2 w-2 rounded-sm bg-emerald-500" />
              {fin.cashKpis[0].label}
            </span>
          </div>
          <div className="flex w-16 flex-col items-center gap-1.5">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.6, ease: EASE }}
              className="w-full rounded-md bg-rose-500/80"
            />
            <span className="flex items-center gap-1 text-[10px] font-medium text-slate-400 dark:text-white/40">
              <span className="h-2 w-2 rounded-sm bg-rose-500" />
              {fin.cashKpis[1].label}
            </span>
          </div>
        </div>
      </motion.div>

      {/* VAT report */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <Landmark className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <div>
            <p className="text-sm font-bold leading-tight text-slate-800 dark:text-white">{fin.vatTitle}</p>
            <p className="text-[10px] text-slate-400 dark:text-white/40">{fin.vatSubtitle}</p>
          </div>
        </div>
        <div className="divide-y divide-slate-100 px-4 dark:divide-white/[0.06]">
          <div className="flex items-center justify-between py-3">
            <span className="text-sm font-semibold text-slate-700 dark:text-white/80">{fin.vat.collectedLabel}</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">{fin.vat.collectedVal}</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-sm text-slate-500 dark:text-white/60">− {fin.vat.deductibleLabel}</span>
            <span className="text-sm font-semibold text-slate-700 dark:text-white/80">{fin.vat.deductibleVal}</span>
          </div>
        </div>
        <div className="flex items-center justify-between bg-slate-50 px-4 py-3.5 dark:bg-white/[0.04]">
          <span className="text-sm font-black text-slate-900 dark:text-white">{fin.vat.balanceLabel}</span>
          <span className="text-lg font-black text-rose-500">{fin.vat.balanceVal}</span>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Rich customers dashboard panel ---------- */
function CustomersPanel({ cu }: { cu: CustomersData }) {
  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.05 + i * 0.05, ease: EASE, duration: 0.45 },
  });

  const cell = "px-3 py-2.5 text-xs text-slate-600 dark:text-white/70 whitespace-nowrap";
  const head =
    "px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45 whitespace-nowrap";

  return (
    <div className="space-y-6">
      {/* Top customers */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <Trophy className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <p className="text-sm font-bold text-slate-800 dark:text-white">{cu.topTitle}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className={head}>{cu.topCols.client}</th>
                <th className={head}>{cu.topCols.invoices}</th>
                <th className={head}>{cu.topCols.revenue}</th>
                <th className={head}>{cu.topCols.profit}</th>
                <th className={head}>{cu.topCols.avg}</th>
                <th className={head}>{cu.topCols.due}</th>
                <th className={head}>{cu.topCols.last}</th>
              </tr>
            </thead>
            <tbody>
              {cu.top.map((c, i) => (
                <motion.tr
                  key={c.name}
                  {...stagger(i + 1)}
                  className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                >
                  <td className={cell}>
                    <span className="flex items-center gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3FB8C4]/12 text-[10px] font-bold text-[#2a9fa9] dark:text-[#3FB8C4]">
                        {c.name.slice(0, 1)}
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-white/90">{c.name}</span>
                    </span>
                  </td>
                  <td className={cell}>{c.invoices}</td>
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{c.revenue}</td>
                  <td className={`${cell} font-semibold text-emerald-500`}>{c.profit}</td>
                  <td className={cell}>{c.avg}</td>
                  <td className={`${cell} font-semibold ${c.due.startsWith("0") ? "text-slate-400 dark:text-white/40" : "text-rose-500"}`}>{c.due}</td>
                  <td className={cell}>{c.last}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Balance + Loyalty */}
      <div className="grid gap-4 lg:grid-cols-2">
        <motion.div
          {...stagger(0)}
          className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
        >
          <p className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
            <CreditCard className="h-3.5 w-3.5 text-[#3FB8C4]" />
            {cu.balanceTitle}
          </p>
          <div className="grid grid-cols-3 gap-2.5">
            {cu.balanceKpis.map((k) => (
              <div key={k.label} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400 dark:text-white/45">{k.label}</p>
                <p
                  className={`mt-1 text-sm font-black tracking-tight ${
                    k.accent === "up" ? "text-emerald-500" : k.accent === "down" ? "text-rose-500" : "text-slate-900 dark:text-white"
                  }`}
                >
                  {k.value}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...stagger(1)}
          className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
        >
          <p className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
            <Repeat className="h-3.5 w-3.5 text-[#3FB8C4]" />
            {cu.loyaltyTitle}
          </p>
          <div className="grid grid-cols-3 gap-2.5">
            {cu.loyaltyKpis.map((k) => (
              <div key={k.label} className="rounded-xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400 dark:text-white/45">{k.label}</p>
                <p className="mt-1 text-sm font-black tracking-tight text-slate-900 dark:text-white">{k.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* New customers chart */}
      <motion.div
        {...stagger(0)}
        className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
      >
        <p className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
          <UserPlus className="h-3.5 w-3.5 text-[#3FB8C4]" />
          {cu.newTitle}
        </p>
        <div className="flex h-28 items-end justify-between gap-2">
          {cu.newValues.map((v, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${v}%` }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: EASE }}
              className="flex-1 rounded-md bg-gradient-to-t from-emerald-500/70 to-[#3FB8C4]/50"
            />
          ))}
        </div>
      </motion.div>

      {/* Inactive customers */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <UserX className="h-4 w-4 text-amber-500" strokeWidth={2.2} />
          <div>
            <p className="text-sm font-bold leading-tight text-slate-800 dark:text-white">{cu.inactiveTitle}</p>
            <p className="text-[10px] text-slate-400 dark:text-white/40">{cu.inactiveSubtitle}</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className={head}>{cu.inactiveCols.client}</th>
                <th className={head}>{cu.inactiveCols.revenue}</th>
                <th className={head}>{cu.inactiveCols.last}</th>
                <th className={head}>{cu.inactiveCols.days}</th>
              </tr>
            </thead>
            <tbody>
              {cu.inactive.map((c, i) => (
                <motion.tr
                  key={c.name}
                  {...stagger(i + 1)}
                  className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                >
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{c.name}</td>
                  <td className={cell}>{c.revenue}</td>
                  <td className={cell}>{c.last}</td>
                  <td className={cell}>
                    <span className="inline-flex rounded-md bg-amber-500/12 px-2 py-0.5 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                      {c.days}j
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}

/* ---------- Rich performance dashboard panel ---------- */
function PerformancePanel({ pf }: { pf: PerformanceData }) {
  const stagger = (i: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.05 + i * 0.05, ease: EASE, duration: 0.45 },
  });

  const cell = "px-3 py-2.5 text-xs text-slate-600 dark:text-white/70 whitespace-nowrap";
  const head =
    "px-3 py-2.5 text-left text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45 whitespace-nowrap";

  const dirClass = (d: "up" | "down" | "flat") =>
    d === "up" ? "text-emerald-500" : d === "down" ? "text-rose-500" : "text-slate-400 dark:text-white/40";

  const alertStyle = {
    warning: "border-amber-500/30 bg-amber-500/[0.06] text-amber-600 dark:text-amber-400",
    info: "border-[#3FB8C4]/30 bg-[#3FB8C4]/[0.06] text-[#2a9fa9] dark:text-[#3FB8C4]",
    success: "border-emerald-500/30 bg-emerald-500/[0.06] text-emerald-600 dark:text-emerald-400",
  } as const;
  const alertIcon = { warning: AlertTriangle, info: Info, success: CheckCircle2 } as const;

  return (
    <div className="space-y-6">
      {/* Period comparison */}
      <motion.div {...stagger(0)}>
        <div className="mb-3 flex items-center gap-2">
          <Gauge className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <div>
            <p className="text-sm font-bold leading-tight text-slate-800 dark:text-white">{pf.compareTitle}</p>
            <p className="text-[10px] text-slate-400 dark:text-white/40">{pf.compareSubtitle}</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {pf.compare.map((c, i) => (
            <motion.div
              key={c.label}
              {...stagger(i)}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="flex items-start justify-between">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-white/45">
                  {c.label}
                </p>
                <span className={`flex items-center gap-0.5 text-[11px] font-bold ${dirClass(c.direction)}`}>
                  {c.direction === "up" && <TrendingUp className="h-3 w-3" />}
                  {c.direction === "down" && <TrendingDown className="h-3 w-3" />}
                  {c.change}
                </span>
              </div>
              <p className="mt-1 text-xl font-black tracking-tight text-slate-900 dark:text-white">{c.value}</p>
              <p className="mt-0.5 text-[10px] text-slate-400 dark:text-white/40">{c.prev}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Growth report */}
      <motion.div {...stagger(0)}>
        <p className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
          <TrendingUp className="h-3.5 w-3.5 text-[#3FB8C4]" />
          {pf.growthTitle}
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pf.growth.map((g, i) => (
            <motion.div
              key={g.label}
              {...stagger(i)}
              className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
            >
              <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-white/45">
                {g.label}
              </p>
              <p className={`mt-1 text-lg font-black tracking-tight ${dirClass(g.direction)}`}>{g.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Product profitability */}
      <motion.div
        {...stagger(0)}
        className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10"
      >
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50/70 px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]">
          <Trophy className="h-4 w-4 text-[#2a9fa9] dark:text-[#3FB8C4]" strokeWidth={2.2} />
          <div>
            <p className="text-sm font-bold leading-tight text-slate-800 dark:text-white">{pf.profitTitle}</p>
            <p className="text-[10px] text-slate-400 dark:text-white/40">{pf.profitSubtitle}</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10">
                <th className={head}>{pf.profitCols.product}</th>
                <th className={head}>{pf.profitCols.qty}</th>
                <th className={head}>{pf.profitCols.revenue}</th>
                <th className={head}>{pf.profitCols.profit}</th>
                <th className={head}>{pf.profitCols.margin}</th>
              </tr>
            </thead>
            <tbody>
              {pf.profit.map((p, i) => (
                <motion.tr
                  key={p.name}
                  {...stagger(i + 1)}
                  className="border-b border-slate-100 last:border-0 dark:border-white/[0.06]"
                >
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{p.name}</td>
                  <td className={cell}>{p.qty}</td>
                  <td className={`${cell} font-semibold text-slate-800 dark:text-white/90`}>{p.revenue}</td>
                  <td className={`${cell} font-semibold text-emerald-500`}>{p.profit}</td>
                  <td className={`${cell} font-semibold text-emerald-500`}>{p.margin}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Alerts */}
      <motion.div
        {...stagger(0)}
        className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 dark:border-white/10 dark:bg-white/[0.02]"
      >
        <p className="mb-3 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 dark:text-white/45">
          <AlertTriangle className="h-3.5 w-3.5 text-[#3FB8C4]" />
          {pf.alertsTitle}
        </p>
        <div className="space-y-2.5">
          {pf.alerts.map((a, i) => {
            const Icon = alertIcon[a.level];
            return (
              <motion.div
                key={i}
                {...stagger(i + 1)}
                className={`flex items-start gap-2.5 rounded-xl border px-3.5 py-2.5 text-xs font-medium ${alertStyle[a.level]}`}
              >
                <Icon className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.2} />
                <span>{a.text}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export function Reports() {
  const { t } = useI18n();
  const r = t.reports;
  const [active, setActive] = React.useState(0);
  const tab = r.tabs[active];

  return (
    <section
      id="reports"
      className="relative overflow-hidden bg-slate-50/60 py-24 dark:bg-dark-800"
    >
      {/* ambient accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[820px] -translate-x-1/2 rounded-full bg-radial-glow opacity-40 blur-3xl" />
        <div className="absolute -left-24 bottom-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(29,111,214,0.12),transparent_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="light" className="mb-4 gap-1.5 shadow-sm">
            <BarChart3 className="h-3.5 w-3.5 text-[#3FB8C4]" strokeWidth={2.4} />
            {r.badge}
          </Badge>
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark-900 dark:text-white sm:text-5xl">
            {r.title1}{" "}
            <span className="text-gradient">{r.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-dark-900/55 dark:text-white/55">
            {r.intro}
          </p>
        </div>

        {/* ===== BI Center: interactive tabbed dashboard ===== */}
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_-30px_rgba(15,23,42,0.28)] dark:border-white/10 dark:bg-dark-900">
          {/* top bar */}
          <div className="flex flex-col gap-3 border-b border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-gradient shadow-neon">
                <BarChart3 className="h-5 w-5 text-white" strokeWidth={2.2} />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#2a9fa9] dark:text-[#3FB8C4]">
                  {r.biEyebrow}
                </p>
                <h3 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                  {r.biTitle}
                </h3>
              </div>
            </div>
            {/* export chips */}
            <div className="flex flex-wrap items-center gap-1.5">
              {r.exportFormats.map((fmt, i) => {
                const Icon = EXPORT_ICONS[i % EXPORT_ICONS.length];
                return (
                  <span
                    key={fmt}
                    className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 text-[10px] font-semibold text-slate-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/60"
                  >
                    <Icon className="h-3 w-3" />
                    {fmt}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="grid gap-0 lg:grid-cols-[260px_1fr]">
            {/* tab rail */}
            <div className="flex gap-2 overflow-x-auto border-b border-slate-200 p-4 lg:flex-col lg:overflow-visible lg:border-b-0 lg:border-r dark:border-white/10">
              {r.tabs.map((tb, i) => {
                const Icon = TAB_ICONS[tb.key] ?? BarChart3;
                const isActive = i === active;
                return (
                  <button
                    key={tb.key}
                    onClick={() => setActive(i)}
                    className={`group relative flex shrink-0 items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-accent-gradient text-white shadow-neon"
                        : "text-slate-600 hover:bg-slate-100 dark:text-white/60 dark:hover:bg-white/[0.06]"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 shrink-0 ${
                        isActive ? "text-white" : "text-[#3FB8C4]"
                      }`}
                      strokeWidth={2.2}
                    />
                    {tb.label}
                  </button>
                );
              })}
            </div>

            {/* panel */}
            <div className="relative min-h-[340px] p-6 sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={tab.key}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  <h4 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {tab.title}
                  </h4>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-500 dark:text-white/55">
                    {tab.description}
                  </p>

                  {tab.key === "sales" ? (
                    <div className="mt-6">
                      <SalesPanel s={r.sales} />
                    </div>
                  ) : tab.key === "products" ? (
                    <div className="mt-6">
                      <ProductsPanel p={r.products2} />
                    </div>
                  ) : tab.key === "inventory" ? (
                    <div className="mt-6">
                      <InventoryPanel inv={r.inventory2} />
                    </div>
                  ) : tab.key === "purchases" ? (
                    <div className="mt-6">
                      <PurchasesPanel pu={r.purchases2} />
                    </div>
                  ) : tab.key === "finance" ? (
                    <div className="mt-6">
                      <FinancePanel fin={r.finance2} />
                    </div>
                  ) : tab.key === "customers" ? (
                    <div className="mt-6">
                      <CustomersPanel cu={r.customers2} />
                    </div>
                  ) : tab.key === "performance" ? (
                    <div className="mt-6">
                      <PerformancePanel pf={r.performance2} />
                    </div>
                  ) : (
                    <>
                      {/* KPI cards */}
                      <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {tab.kpis.map((kpi, i) => (
                          <motion.div
                            key={kpi.label}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + i * 0.08, ease: EASE }}
                            className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 dark:border-white/10 dark:bg-white/[0.03]"
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-white/45">
                              {kpi.label}
                            </p>
                            <p className="mt-1 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                              {kpi.value}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* faux chart bars */}
                      <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/50 p-5 dark:border-white/10 dark:bg-white/[0.02]">
                        <div className="flex h-28 items-end justify-between gap-1.5">
                          {[42, 68, 55, 80, 61, 92, 74, 88, 66, 96, 78, 84].map(
                            (h, i) => (
                              <motion.div
                                key={`${tab.key}-${i}`}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{
                                  delay: 0.15 + i * 0.03,
                                  duration: 0.5,
                                  ease: EASE,
                                }}
                                className="flex-1 rounded-md bg-gradient-to-t from-[#1D6FD6]/70 to-[#3FB8C4]/50"
                              />
                            )
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* footer export note */}
          <div className="flex items-center gap-2 border-t border-slate-200 px-6 py-3.5 dark:border-white/10">
            <Download className="h-3.5 w-3.5 text-[#2a9fa9] dark:text-[#3FB8C4]" />
            <p className="text-xs font-medium text-slate-500 dark:text-white/55">
              {r.exportNote}
            </p>
          </div>
        </div>

        {/* ===== "And much more" modules grid ===== */}
        <div className="mt-24 text-center">
          <motion.h3
            custom={0}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-80px" }}
            className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl"
          >
            {r.modulesTitle}
          </motion.h3>
          <motion.p
            custom={1}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="mx-auto mt-3 max-w-lg text-sm text-slate-500 dark:text-white/55"
          >
            {r.modulesSubtitle}
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {r.modules.map((m, i) => {
            const Icon = MODULE_ICONS[i % MODULE_ICONS.length];
            return (
              <motion.div
                key={m.name}
                custom={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, margin: "-40px" }}
                whileHover={{ y: -6 }}
                className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-[#3FB8C4]/50 hover:shadow-[0_20px_50px_-24px_rgba(63,184,196,0.55)] dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-[#3FB8C4]/40"
              >
                {/* hover gradient wash */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#3FB8C4]/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {/* top accent line */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-[#3FB8C4] to-transparent opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-100"
                />

                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3FB8C4]/15 to-[#3FB8C4]/5 text-[#2a9fa9] ring-1 ring-inset ring-[#3FB8C4]/10 transition-all duration-300 group-hover:scale-110 group-hover:from-[#3FB8C4] group-hover:to-[#2a9fa9] group-hover:text-white group-hover:ring-[#3FB8C4]/30 group-hover:shadow-[0_8px_20px_-6px_rgba(63,184,196,0.6)] dark:text-[#3FB8C4] dark:ring-white/10 dark:group-hover:text-white">
                  <Icon className="h-5 w-5" strokeWidth={2.1} />
                </span>

                <div className="relative flex-1">
                  <p className="text-sm font-bold text-slate-800 transition-colors duration-300 group-hover:text-[#2a9fa9] dark:text-white dark:group-hover:text-[#3FB8C4]">
                    {m.name}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-white/55">
                    {m.description}
                  </p>
                </div>

                {/* arrow reveal */}
                <ArrowRight
                  aria-hidden
                  className="relative mt-0.5 h-4 w-4 shrink-0 -translate-x-1 text-[#3FB8C4] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  strokeWidth={2.2}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <motion.div
            custom={0}
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <Button asChild variant="gradient" size="lg">
              <a href="#contact">
                <Sparkles className="h-4 w-4" />
                {r.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
