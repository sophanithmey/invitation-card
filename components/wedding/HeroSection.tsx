"use client";

import { Calendar, ArrowDown } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const isKh = language === "kh";

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-32">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="/khmer-couple.png"
          alt="Couple"
          className="w-full h-full object-cover object-top"
        />
        {/* Refined gradient overlay for clear contrast without darkening the whole photo */}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/25 to-[#FDFBF7]" />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-2xl mx-auto flex flex-col items-center"
      >
        {/* Getting Married Badge / Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-[#D4AF37]/50 text-[#FFF2B2] mb-3 sm:mb-4 shadow-sm"
        >
          <span
            className={`text-xs sm:text-sm font-semibold ${
              isKh
                ? "font-khmer-moul tracking-normal"
                : "uppercase tracking-widest text-xs"
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', 'Moul', cursive, serif"
                : undefined,
            }}
          >
            {t.hero.gettingMarried}
          </span>
        </motion.div>

        {/* Couple Names Heading - Mobile-proportioned & High-contrast */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className={`font-bold text-white mb-4 sm:mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] text-center ${
            isKh
              ? "font-khmer-moul text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-[1.65] tracking-normal"
              : "font-cursive text-4xl xs:text-5xl sm:text-7xl md:text-8xl leading-tight"
          }`}
          style={{
            fontFamily: isKh
              ? "'Moulpali', 'Moul', cursive, serif"
              : "'Great Vibes', cursive",
          }}
        >
          {isKh ? (
            <span className="inline-flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3.5">
              <span>សុភាព</span>
              <span className="text-[#FFF2B2] text-xl xs:text-2xl sm:text-3xl font-light opacity-95">
                &
              </span>
              <span>ច័ន្ទវដ្តី</span>
            </span>
          ) : (
            "Sopheap & Chanvadey"
          )}
        </motion.h1>

        {/* Date Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="inline-flex items-center gap-2.5 sm:gap-3 text-white/95 backdrop-blur-md bg-black/35 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/25 shadow-sm"
        >
          <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span
            className={`text-xs sm:text-sm font-semibold text-[#FFFDF9] ${
              isKh
                ? "font-khmer-kantumruuy tracking-normal"
                : "tracking-widest uppercase"
            }`}
            style={{
              fontFamily: isKh
                ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                : undefined,
            }}
          >
            {t.hero.date}
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-white/80"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-md" />
        </motion.div>
      </motion.div>
    </header>
  );
}
