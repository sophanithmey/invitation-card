import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variantStyles = {
      default: "bg-[#8B0000] text-white hover:bg-[#6d0000]",
      outline:
        "border border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white bg-transparent",
      secondary: "bg-white text-[#8B0000] hover:bg-white/90",
      ghost: "hover:bg-slate-100 text-slate-800",
      link: "text-[#8B0000] underline-offset-4 hover:underline",
    };

    const sizeStyles = {
      default: "h-10 px-4 py-2 rounded-md",
      sm: "h-9 rounded-md px-3 text-xs",
      lg: "h-11 rounded-md px-8 text-base",
      icon: "h-10 w-10 rounded-md",
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
