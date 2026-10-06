import React from "react";

export function KhmerCornerFrames() {
  const cornerSvg = (
    <svg viewBox="0 0 100 100" className="w-full h-full opacity-80">
      <path
        d="M100 2 H24 A22 22 0 0 0 2 24 V100"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="1.5"
      />
      <path
        d="M100 8 H30 A22 22 0 0 0 8 30 V100"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="0.5"
        opacity="0.4"
      />
      <circle cx="2" cy="24" r="1.5" fill="#D4AF37" />
      <circle cx="24" cy="2" r="1.5" fill="#D4AF37" />
    </svg>
  );

  return (
    <>
      <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none p-4">
        {cornerSvg}
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none p-4 rotate-90">
        {cornerSvg}
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none p-4 -rotate-90">
        {cornerSvg}
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none p-4 rotate-180">
        {cornerSvg}
      </div>
    </>
  );
}
