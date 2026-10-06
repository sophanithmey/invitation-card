import React from "react";
import { cn } from "@/lib/utils";

export function CornerFiligree({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37] pointer-events-none", className)}
      aria-hidden="true"
    >
      <path
        d="M2 38 V10 C2 5.58 5.58 2 10 2 H38"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M6 34 V12 C6 8.68 8.68 6 12 6 H34"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeOpacity="0.45"
        strokeLinecap="round"
      />
      <circle cx="11" cy="11" r="2" fill="currentColor" />
    </svg>
  );
}
