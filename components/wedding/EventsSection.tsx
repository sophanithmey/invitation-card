"use client";

import React, { useState } from "react";
import { Calendar } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { motion, Variants } from "framer-motion";
import { Day1Card } from "./events/Day1Card";
import { Day2Card } from "./events/Day2Card";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function EventsSection() {
  const { t, language } = useLanguage();
  const [activeDay, setActiveDay] = useState<"day1" | "day2" | "all">("day1");
  const isKh = language === "kh";

  return (
    <section className="py-16 sm:py-24 px-3 sm:px-6 relative bg-[#FDFBF7] overflow-hidden">
      <div className="absolute top-1/3 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#8B0000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 flex items-center justify-center mx-auto mb-3 shadow-xs">
            <Calendar className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h2
            className={`font-bold text-[#8B0000] mb-2 sm:mb-3 ${
              isKh ? "font-khmer-moul text-2xl sm:text-3xl leading-[1.65] tracking-normal" : "text-3xl sm:text-4xl font-playfair tracking-wide"
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', 'Moul', cursive, serif"
                : "Playfair Display, serif",
            }}
          >
            {t.events.title}
          </h2>
          <p
            className={`text-slate-600 text-sm sm:text-base max-w-md mx-auto ${
              isKh ? "font-khmer-kantumruuy leading-relaxed" : "italic"
            }`}
            style={{
              fontFamily: isKh
                ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                : undefined,
            }}
          >
            {t.events.subtitle}
          </p>

          <div className="inline-flex items-center p-1 sm:p-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4AF37]/35 mt-6 sm:mt-8 shadow-xs max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveDay("day1")}
              className={`px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeDay === "day1"
                  ? "bg-linear-to-r from-[#8B0000] to-[#A00E0E] text-white shadow-md"
                  : "text-slate-700 hover:text-[#8B0000]"
              }`}
              style={{
                fontFamily: isKh ? "'Moulpali', 'Moul', cursive, serif" : undefined,
              }}
            >
              {t.events.day1Tab}
            </button>
            <button
              type="button"
              onClick={() => setActiveDay("day2")}
              className={`px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeDay === "day2"
                  ? "bg-linear-to-r from-[#8B0000] to-[#A00E0E] text-white shadow-md"
                  : "text-slate-700 hover:text-[#8B0000]"
              }`}
              style={{
                fontFamily: isKh ? "'Moulpali', 'Moul', cursive, serif" : undefined,
              }}
            >
              {t.events.day2Tab}
            </button>
            <button
              type="button"
              onClick={() => setActiveDay("all")}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeDay === "all"
                  ? "bg-[#D4AF37] text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
              style={{
                fontFamily: isKh ? "'Kantumruuy Pro', sans-serif" : undefined,
              }}
            >
              {isKh ? "កម្មវិធីទាំងពីរថ្ងៃ" : "All Days"}
            </button>
          </div>
        </motion.div>

        <div className="space-y-10 sm:space-y-12">
          {(activeDay === "day1" || activeDay === "all") && (
            <Day1Card
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />
          )}

          {(activeDay === "day2" || activeDay === "all") && (
            <Day2Card
              activeDay={activeDay}
              containerVariants={containerVariants}
              itemVariants={itemVariants}
            />
          )}
        </div>
      </div>
    </section>
  );
}
