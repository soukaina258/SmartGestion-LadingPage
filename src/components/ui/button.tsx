import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-pink/60 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        gradient:
          "bg-accent-gradient text-white shadow-neon hover:shadow-neon-purple hover:brightness-110 bg-[length:200%_200%] hover:bg-[position:100%_0]",
        dark: "bg-dark-900 text-white hover:bg-dark-800 border border-white/10",
        light:
          "bg-white text-dark-900 hover:bg-white/90 shadow-sm border border-black/5",
        outline:
          "border border-white/15 bg-white/5 text-white backdrop-blur hover:bg-white/10",
        ghost: "text-dark-900 hover:bg-black/5",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-13 px-8 text-base py-3.5",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "gradient",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
