"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/i18n/provider";

/* ─── helpers ──────────────────────────────────────────────── */

const AVATAR_GRADIENTS = [
  "from-[#0A1F44] to-[#1D6FD6]",
  "from-[#1D6FD6] to-[#3FB8C4]",
  "from-[#1657AD] to-[#5CC9C9]",
  "from-[#0A1F44] to-[#2E8BD8]",
  "from-[#1D6FD6] to-[#0A1F44]",
  "from-[#2E8BD8] to-[#3FB8C4]",
];

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

/* ─── card ─────────────────────────────────────────────────── */

function TestimonialCard({ quote, name, role, index }: { quote: string; name: string; role: string; index: number }) {
  return (
    <figure className="w-[280px] shrink-0 select-none rounded-2xl border border-black/[0.07] bg-white p-6 shadow-[0_2px_16px_-6px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-dark-800 sm:w-[300px]">
      <Stars />
      <blockquote className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-white/70">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3 border-t border-black/[0.06] pt-4 dark:border-white/10">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[index % AVATAR_GRADIENTS.length]} text-xs font-bold text-white`}>
          {initials(name)}
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">{name}</p>
          <p className="text-xs text-slate-400 dark:text-white/45">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

/* ─── RAFMarquee ────────────────────────────────────────────── */
/*
  Single rAF loop drives everything:
  • `offset` advances by `speed` px/frame
  • When |offset| ≥ copyWidth → wrap (seamless)
  • Drag: pointer events accumulate delta, added to offset each frame
  • Fling: after release, velocity decays at 0.96× per frame
*/

const GAP = 20; // must match gap-5

function RAFMarquee({
  items,
  reverse = false,
  baseIndex = 0,
  speed = 0.5,
}: {
  items: { quote: string; name: string; role: string }[];
  reverse?: boolean;
  baseIndex?: number;
  speed?: number;   // px per frame @ 60fps
}) {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);

  // all mutable state lives in a single ref — zero re-renders
  const state = useRef({
    offset: 0,
    dragging: false,
    lastX: 0,
    velocity: 0,          // px/frame during fling
    copyWidth: 0,
  });

  // items duplicated twice for seamless wrap
  const doubled = [...items, ...items];

  useEffect(() => {
    const strip = stripRef.current;
    const wrap  = wrapRef.current;
    if (!strip || !wrap) return;

    // measure copy width after mount
    const copyWidth = strip.scrollWidth / 2;
    state.current.copyWidth = copyWidth;

    // start mid-strip so first card appears fully on screen
    state.current.offset = reverse ? -copyWidth / 2 : copyWidth / 2;

    /* ── rAF loop ── */
    const tick = () => {
      const s = state.current;

      if (!s.dragging) {
        // auto-scroll
        s.offset += reverse ? speed : -speed;

        // fling decay
        if (Math.abs(s.velocity) > 0.05) {
          s.offset += s.velocity;
          s.velocity *= 0.94;
        } else {
          s.velocity = 0;
        }
      }

      // seamless wrap
      if (s.offset <= -s.copyWidth) s.offset += s.copyWidth;
      if (s.offset >= s.copyWidth)  s.offset -= s.copyWidth;

      strip.style.transform = `translateX(${s.offset}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    /* ── pointer events ── */
    const onDown = (e: PointerEvent) => {
      e.preventDefault();
      wrap.setPointerCapture(e.pointerId);
      state.current.dragging = true;
      state.current.lastX    = e.clientX;
      state.current.velocity = 0;
      wrap.style.cursor = "grabbing";
    };

    const onMove = (e: PointerEvent) => {
      if (!state.current.dragging) return;
      const dx = e.clientX - state.current.lastX;
      state.current.offset  += dx;
      state.current.velocity = dx;          // last delta = fling seed
      state.current.lastX    = e.clientX;
    };

    const onUp = () => {
      state.current.dragging = false;
      wrap.style.cursor = "grab";
      // velocity is already set from last onMove — rAF loop will decay it
    };

    wrap.addEventListener("pointerdown", onDown, { passive: false });
    wrap.addEventListener("pointermove", onMove, { passive: true  });
    wrap.addEventListener("pointerup",   onUp);
    wrap.addEventListener("pointercancel", onUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      wrap.removeEventListener("pointerdown", onDown);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerup",   onUp);
      wrap.removeEventListener("pointercancel", onUp);
    };
  }, [reverse, speed]);   // stable — items don't change

  return (
    <div
      ref={wrapRef}
      className="relative w-full cursor-grab overflow-hidden"
      style={{ touchAction: "pan-y" }}
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-zinc-50/80 to-transparent dark:from-dark-900" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-zinc-50/80 to-transparent dark:from-dark-900" />

      {/* the strip — width = 2 × copyWidth, centred with negative margin */}
      <div
        ref={stripRef}
        className="flex"
        style={{ gap: GAP, willChange: "transform" }}
      >
        {doubled.map((item, i) => (
          <TestimonialCard
            key={`${item.name}-${i}`}
            quote={item.quote}
            name={item.name}
            role={item.role}
            index={(baseIndex + i) % AVATAR_GRADIENTS.length}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Trustpilot ────────────────────────────────────────────── */

function TrustpilotBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-black/[0.07] bg-white px-5 py-3 shadow-sm dark:border-white/10 dark:bg-dark-800">
      <div className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="#00B67A" />
        </svg>
        <span className="text-sm font-bold text-slate-800 dark:text-white">Trustpilot</span>
      </div>
      <div className="h-4 w-px bg-slate-200 dark:bg-white/15" />
      <div className="flex flex-col items-start gap-0.5">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-[#00B67A]">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
            </svg>
          ))}
        </div>
        <p className="text-[11px] font-semibold text-slate-500 dark:text-white/50">Excellent &middot; 4.8 / 5</p>
      </div>
    </div>
  );
}

/* ─── section ───────────────────────────────────────────────── */

export function Testimonials() {
  const { t } = useI18n();
  const items = t.testimonials.items;
  const half  = Math.ceil(items.length / 2);
  const row1  = items.slice(0, half);
  const row2  = items.slice(half);

  return (
    <section id="testimonials" className="relative overflow-hidden bg-zinc-50/70 py-24 dark:bg-dark-900">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-[#3FB8C4]/8 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-64 w-64 rounded-full bg-[#1D6FD6]/8 blur-3xl" />
      </div>

      {/* header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge variant="light" className="mb-4 gap-1.5 shadow-sm">
            <Star className="h-3.5 w-3.5 fill-brand-500 text-brand-500" />
            {t.testimonials.badge}
          </Badge>
          <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-dark-900 dark:text-white sm:text-5xl">
            {t.testimonials.title1}{" "}
            <span className="text-gradient">{t.testimonials.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-dark-900/55 dark:text-white/55">
            {t.testimonials.intro}
          </p>
          <div className="mt-6 flex justify-center">
            <TrustpilotBadge />
          </div>
        </motion.div>
      </div>

      {/* marquee rows */}
      <div className="mt-14 flex flex-col gap-5">
        <RAFMarquee items={row1} baseIndex={0} speed={0.5} />
        <RAFMarquee items={row2} reverse baseIndex={4} speed={0.42} />
      </div>
    </section>
  );
}
