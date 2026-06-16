import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        light:
          "border border-black/10 bg-white text-dark-900 shadow-sm",
        dark: "border border-white/10 bg-white/5 text-white/80 backdrop-blur",
        gradient: "bg-accent-gradient text-white shadow-neon",
        outline: "border border-neon-pink/40 text-neon-pink",
      },
    },
    defaultVariants: {
      variant: "light",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
