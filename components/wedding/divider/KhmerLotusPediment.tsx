import React from "react";

export function KhmerLotusPediment() {
  return (
    <svg
      viewBox="0 0 420 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[340px] sm:max-w-[460px] md:max-w-[540px] mx-auto text-[#D4AF37]"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
          <stop offset="25%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFF2B2" stopOpacity="1" />
          <stop offset="75%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Horizontal filigree lines flanking the center */}
      <path
        d="M10 40 H150 M270 40 H410"
        stroke="url(#goldGradient)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M40 44 H135 M285 44 H380"
        stroke="url(#goldGradient)"
        strokeWidth="1"
        strokeDasharray="3 3"
        strokeOpacity="0.6"
      />

      {/* Left Kbach Scroll Tendrils */}
      <path
        d="M150 40 C165 40 172 30 180 22 C186 16 195 20 192 28 C189 36 175 42 165 42 C158 42 154 36 160 32 C165 28 172 32 170 36"
        stroke="#D4AF37"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="160" cy="32" r="2" fill="#D4AF37" />

      {/* Right Kbach Scroll Tendrils (Symmetrical) */}
      <path
        d="M270 40 C255 40 248 30 240 22 C234 16 225 20 228 28 C231 36 245 42 255 42 C262 42 266 36 260 32 C255 28 248 32 250 36"
        stroke="#D4AF37"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="260" cy="32" r="2" fill="#D4AF37" />

      {/* Center Sacred Lotus Blossom (ផ្កាឈូក) */}
      {/* Outer Lotus Petals */}
      <path
        d="M195 44 C192 32 200 24 210 12 C220 24 228 32 225 44 C220 48 200 48 195 44 Z"
        fill="#8B0000"
        fillOpacity="0.08"
        stroke="#D4AF37"
        strokeWidth="1.8"
      />
      {/* Inner Petal */}
      <path
        d="M202 43 C200 34 205 26 210 18 C215 26 220 34 218 43 C214 45 206 45 202 43 Z"
        fill="#D4AF37"
        fillOpacity="0.25"
        stroke="#D4AF37"
        strokeWidth="1.4"
      />
      {/* Central Flame Tip (ក្បាច់ភ្លើង) */}
      <path
        d="M210 12 C209 8 210 4 210 2 C210 4 211 8 210 12 Z"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="210" cy="2" r="2" fill="#FFF2B2" stroke="#D4AF37" strokeWidth="0.8" />

      {/* Flanking Side Lotus Petals */}
      <path
        d="M196 40 C188 34 186 25 194 20 C198 25 198 32 198 38"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M224 40 C232 34 234 25 226 20 C222 25 222 32 222 38"
        stroke="#D4AF37"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      {/* Lotus Pedestal Beaded Base */}
      <circle cx="198" cy="46" r="1.8" fill="#D4AF37" />
      <circle cx="204" cy="47" r="2" fill="#D4AF37" />
      <circle cx="210" cy="47.5" r="2.2" fill="#FFF2B2" />
      <circle cx="216" cy="47" r="2" fill="#D4AF37" />
      <circle cx="222" cy="46" r="1.8" fill="#D4AF37" />

      {/* Distal End Finials (Diamond ornaments) */}
      <polygon points="10,40 6,37 2,40 6,43" fill="#D4AF37" />
      <polygon points="410,40 414,37 418,40 414,43" fill="#D4AF37" />
      <circle cx="10" cy="40" r="1.5" fill="#FFF2B2" />
      <circle cx="410" cy="40" r="1.5" fill="#FFF2B2" />
    </svg>
  );
}
