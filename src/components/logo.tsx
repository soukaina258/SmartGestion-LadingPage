import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * SmartGestion logo mark — an inline SVG recreation of the brand symbol:
 * a connected node flowing into a rising bar chart with growth arrows,
 * rendered in the brand gradient (navy → blue → teal).
 */
export function LogoMark({ className }: { className?: string }) {
  const gid = React.useId();
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="SmartGestion"
    >
      <defs>
        <linearGradient id={`${gid}-g`} x1="0" y1="64" x2="64" y2="0">
          <stop offset="0%" stopColor="#0A1F44" />
          <stop offset="55%" stopColor="#1D6FD6" />
          <stop offset="100%" stopColor="#3FB8C4" />
        </linearGradient>
        <linearGradient id={`${gid}-t`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3FB8C4" />
          <stop offset="100%" stopColor="#1D6FD6" />
        </linearGradient>
      </defs>

      {/* connection nodes (bottom-left) */}
      <g fill={`url(#${gid}-g)`}>
        <rect x="6" y="44" width="9" height="9" rx="2" />
        <rect x="9" y="28" width="7" height="7" rx="2" />
        <rect x="22" y="36" width="7" height="7" rx="2" />
      </g>
      <g
        stroke={`url(#${gid}-g)`}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      >
        <path d="M12.5 44 L12.5 35" />
        <path d="M16 31.5 L22 38" />
      </g>

      {/* bar chart */}
      <g fill={`url(#${gid}-g)`}>
        <rect x="30" y="40" width="6" height="14" rx="1.5" />
        <rect x="38" y="32" width="6" height="22" rx="1.5" />
        <rect x="46" y="24" width="6" height="30" rx="1.5" opacity="0.92" />
      </g>

      {/* small rising line over the bars */}
      <path
        d="M31 40 L41 31 L49 23"
        fill="none"
        stroke={`url(#${gid}-t)`}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* main growth arrow (curving up-right) */}
      <path
        d="M20 50 C 24 36, 34 30, 44 16"
        fill="none"
        stroke={`url(#${gid}-g)`}
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M44 16 L37 18.5 L42.5 23.5 Z"
        fill={`url(#${gid}-g)`}
      />

      {/* secondary teal arrow */}
      <path
        d="M30 52 C 36 44, 44 40, 52 26"
        fill="none"
        stroke={`url(#${gid}-t)`}
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.9"
      />
      <path d="M52 26 L46.5 27.5 L50.5 31.5 Z" fill={`url(#${gid}-t)`} />
    </svg>
  );
}

/**
 * Full SmartGestion lockup: mark + wordmark.
 * `compact` hides the tagline (used in the navbar).
 */
export function Logo({
  className,
  textClassName,
  tagline = false,
}: {
  className?: string;
  textClassName?: string;
  tagline?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-lg font-bold tracking-tight text-dark-900 dark:text-white",
            textClassName
          )}
        >
          Smart<span className="text-gradient">Gestion</span>
        </span>
        {tagline && (
          <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-dark-900/45 dark:text-white/45">
            Integrated ERP Solutions
          </span>
        )}
      </span>
    </span>
  );
}
