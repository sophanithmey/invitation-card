"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { useLanguage } from "./LanguageContext";

// Authentic Khmer Kbach Lotus Pediment SVG
function KhmerLotusPediment() {
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

export default function KhmerTraditionalDivider() {
  const { language } = useLanguage();
  const isKh = language === "kh";

  return (
    <section className="relative py-8 sm:py-12 px-4 overflow-hidden">
      {/* Background Soft Glow & Khmer Pattern */}
      <div className="absolute inset-0 kbac-bg-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-32 sm:h-44 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Khmer Traditional Lotus Pediment SVG */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4 sm:mb-6"
        >
          <KhmerLotusPediment />
        </motion.div>

        {/* Central Blessing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 rounded-full bg-gradient-to-r from-[#8B0000]/5 via-[#D4AF37]/15 to-[#8B0000]/5 border border-[#D4AF37]/40 shadow-[0_2px_12px_rgba(212,175,55,0.12)] mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
          <span
            className={`text-xs sm:text-sm font-semibold tracking-wider text-[#8B0000] ${
              isKh ? "font-khmer-moul leading-[1.6]" : "uppercase tracking-[0.25em]"
            }`}
            style={{
              fontFamily: isKh ? "'Moulpali', cursive, serif" : undefined,
            }}
          >
            {isKh ? "សិរីសួស្តី ជ័យមង្គល វិបុលសុខ" : "Auspicious Celebration"}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
        </motion.div>

        {/* Traditional Couple Ceremony Title */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B0000] mb-2 sm:mb-3 drop-shadow-sm ${
            isKh ? "font-khmer-moul leading-[1.65]" : "font-playfair tracking-wide"
          }`}
          style={{
            fontFamily: isKh
              ? "'Moulpali', cursive, serif"
              : "'Playfair Display', serif",
          }}
        >
          {isKh ? "ពិធីមង្គលការ សុភាព & ច័ន្ទវដ្តី" : "Wedding Ceremony • Sopheap & Chanvadey"}
        </motion.h2>

        {/* Khmer Proverb / Blessing Quote */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={`text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed px-4 ${
            isKh ? "font-khmer-kantumruuy leading-[1.8]" : "italic"
          }`}
          style={{
            fontFamily: isKh
              ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
              : undefined,
          }}
        >
          {isKh
            ? "« ចំណងនិស្ស័យ ស្នេហាស្មោះស្ម័គ្រ រួមរស់សុខសាន្ត រហូតដល់ចាស់កោងខ្នង »"
            : "“Bound by destiny, faithful in love, united in joy for all the years to come.”"}
        </motion.p>

        {/* Delicate Bottom Accent Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "160px", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-[1.5px] mx-auto mt-5 sm:mt-6 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent flex items-center justify-center"
        >
          <div className="w-2 h-2 rotate-45 bg-[#D4AF37] border border-[#FFF2B2] shadow-sm -mt-0.5" />
        </motion.div>
      </div>
    </section>
  );
}
