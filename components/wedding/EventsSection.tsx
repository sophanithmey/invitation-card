"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Music,
  MapPin,
  Sparkles,
  Sun,
  Moon,
  Heart,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

function CornerFiligree({ className }: { className?: string }) {
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

export default function EventsSection() {
  const { t, language } = useLanguage();
  const [activeDay, setActiveDay] = useState<"day1" | "day2" | "all">("day1");
  const isKh = language === "kh";

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

  return (
    <section className="py-16 sm:py-24 px-3 sm:px-6 relative bg-[#FDFBF7] overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#8B0000]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
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
            className={`text-3xl sm:text-4xl font-bold text-[#8B0000] mb-2 sm:mb-3 ${
              isKh ? "font-khmer-moul leading-[1.65]" : "font-playfair tracking-wide"
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', cursive, serif"
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

          {/* Interactive Day 1 & Day 2 Tabs */}
          <div className="inline-flex items-center p-1 sm:p-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#D4AF37]/35 mt-6 sm:mt-8 shadow-xs max-w-full overflow-x-auto">
            <button
              type="button"
              onClick={() => setActiveDay("day1")}
              className={`px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeDay === "day1"
                  ? "bg-gradient-to-r from-[#8B0000] to-[#A00E0E] text-white shadow-md"
                  : "text-slate-700 hover:text-[#8B0000]"
              }`}
              style={{
                fontFamily: isKh
                  ? "'Moulpali', cursive, serif"
                  : undefined,
              }}
            >
              {t.events.day1Tab}
            </button>
            <button
              type="button"
              onClick={() => setActiveDay("day2")}
              className={`px-3.5 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                activeDay === "day2"
                  ? "bg-gradient-to-r from-[#8B0000] to-[#A00E0E] text-white shadow-md"
                  : "text-slate-700 hover:text-[#8B0000]"
              }`}
              style={{
                fontFamily: isKh
                  ? "'Moulpali', cursive, serif"
                  : undefined,
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
                fontFamily: isKh
                  ? "'Kantumruuy Pro', sans-serif"
                  : undefined,
              }}
            >
              {isKh ? "កម្មវិធីទាំងពីរថ្ងៃ" : "All Days"}
            </button>
          </div>
        </motion.div>

        {/* Content Container */}
        <div className="space-y-10 sm:space-y-12">
          {/* DAY 1 SECTION */}
          {(activeDay === "day1" || activeDay === "all") && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative max-w-3xl mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white via-[#FFFDF9] to-[#FAF6EE] p-5 sm:p-8 md:p-10 border-2 border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(212,175,55,0.12)] overflow-hidden"
            >
              {/* Traditional Corner Filigrees */}
              <div className="absolute top-2 left-2 opacity-60">
                <CornerFiligree />
              </div>
              <div className="absolute top-2 right-2 opacity-60 rotate-90">
                <CornerFiligree />
              </div>
              <div className="absolute bottom-2 left-2 opacity-60 -rotate-90">
                <CornerFiligree />
              </div>
              <div className="absolute bottom-2 right-2 opacity-60 rotate-180">
                <CornerFiligree />
              </div>

              {/* Inner Etched Border */}
              <div className="absolute inset-3 border border-dashed border-[#D4AF37]/25 rounded-xl pointer-events-none" />

              {/* Day 1 Header */}
              <div className="relative z-10 text-center mb-8 pb-4 border-b border-[#D4AF37]/25">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/30 text-[#8B0000] text-xs font-semibold mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className={isKh ? "font-khmer-moul text-xs" : "uppercase tracking-widest text-[11px]"}>
                    {t.events.day1.badge}
                  </span>
                </div>
                <h3
                  className={`text-2xl sm:text-3xl font-bold text-[#8B0000] mb-1.5 ${
                    isKh ? "font-khmer-moul leading-[1.6]" : "font-playfair tracking-wide"
                  }`}
                  style={{
                    fontFamily: isKh
                      ? "'Moulpali', cursive, serif"
                      : "Playfair Display, serif",
                  }}
                >
                  {t.events.day1.title}
                </h3>
                <div className="inline-flex items-center gap-2 text-[#9E6D08] text-xs sm:text-sm font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span className={isKh ? "font-khmer-kantumruuy font-semibold" : "font-serif"}>
                    {t.events.day1.date}
                  </span>
                </div>
              </div>

              {/* Day 1 Timeline Items */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 space-y-6 sm:space-y-7 pl-3 sm:pl-6"
              >
                {/* Vertical Timeline Guide */}
                <div className="absolute left-6.5 sm:left-9.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/30 to-[#D4AF37]/10" />

                {t.events.day1.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={itemVariants}
                    className="relative flex items-start gap-4 sm:gap-6 group"
                  >
                    {/* Timeline Node */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#D4AF37] shadow-sm flex items-center justify-center shrink-0 z-10 group-hover:scale-110 transition-transform">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#8B0000]" />
                    </div>

                    {/* Timeline Details */}
                    <div className="flex-1 pb-1">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8B0000] text-xs font-bold mb-1">
                        <Clock className="w-3 h-3 text-[#D4AF37]" />
                        <span>{item.time}</span>
                      </div>
                      <h4
                        className={`text-base sm:text-lg font-bold text-slate-800 ${
                          isKh ? "font-khmer-moul text-base leading-[1.6]" : ""
                        }`}
                        style={{
                          fontFamily: isKh
                            ? "'Moulpali', cursive, serif"
                            : undefined,
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`text-slate-600 text-xs sm:text-sm mt-0.5 leading-relaxed ${
                          isKh ? "font-khmer-kantumruuy leading-[1.7]" : ""
                        }`}
                        style={{
                          fontFamily: isKh
                            ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                            : undefined,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* DAY 2 SECTION */}
          {(activeDay === "day2" || activeDay === "all") && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Day 2 Divider Line (if showing all) */}
              {activeDay === "all" && (
                <div className="text-center pt-2">
                  <div className="h-px max-w-xs mx-auto bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-6" />
                </div>
              )}

              {/* Day 2 Master Container - Combined Single Card */}
              <div className="relative max-w-3xl mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white via-[#FFFDF9] to-[#FAF6EE] p-5 sm:p-8 md:p-10 border-2 border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(212,175,55,0.12)] overflow-hidden">
                {/* Traditional Corner Filigrees */}
                <div className="absolute top-2 left-2 opacity-60">
                  <CornerFiligree />
                </div>
                <div className="absolute top-2 right-2 opacity-60 rotate-90">
                  <CornerFiligree />
                </div>
                <div className="absolute bottom-2 left-2 opacity-60 -rotate-90">
                  <CornerFiligree />
                </div>
                <div className="absolute bottom-2 right-2 opacity-60 rotate-180">
                  <CornerFiligree />
                </div>

                {/* Inner Etched Border */}
                <div className="absolute inset-3 border border-dashed border-[#D4AF37]/25 rounded-xl pointer-events-none" />

                {/* Day 2 Header Banner */}
                <div className="relative z-10 text-center mb-8 pb-4 border-b border-[#D4AF37]/25">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/30 text-[#8B0000] text-xs font-semibold mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className={isKh ? "font-khmer-moul text-xs" : "uppercase tracking-widest text-[11px]"}>
                      {t.events.day2.badge}
                    </span>
                  </div>
                  <h3
                    className={`text-2xl sm:text-3xl font-bold text-[#8B0000] mb-1.5 ${
                      isKh ? "font-khmer-moul leading-[1.6]" : "font-playfair tracking-wide"
                    }`}
                    style={{
                      fontFamily: isKh
                        ? "'Moulpali', cursive, serif"
                        : "Playfair Display, serif",
                    }}
                  >
                    {t.events.day2.title}
                  </h3>
                  <div className="inline-flex items-center gap-2 text-[#9E6D08] text-xs sm:text-sm font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className={isKh ? "font-khmer-kantumruuy font-semibold" : "font-serif"}>
                      {t.events.day2.date}
                    </span>
                  </div>
                </div>

                {/* Combined Chronological Timeline */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative z-10 space-y-6 sm:space-y-7 pl-3 sm:pl-6"
                >
                  {/* Vertical Timeline Guide */}
                  <div className="absolute left-6.5 sm:left-9.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#D4AF37]/60 via-[#D4AF37]/30 to-[#D4AF37]/10" />

                  {/* Morning Ceremony Phase Header */}
                  <div className="relative flex items-center gap-3 pt-1 pb-1">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#8B0000] text-xs sm:text-sm font-bold shadow-xs">
                      <Sun className="w-4 h-4 text-[#D4AF37]" />
                      <span className={isKh ? "font-khmer-moul text-xs sm:text-sm" : "uppercase tracking-wider font-semibold"}>
                        {t.events.day2.morningTitle}
                      </span>
                      <span className="text-[#8B0000]/70 text-xs hidden sm:inline">• {t.events.day2.morningSubtitle}</span>
                    </div>
                  </div>

                  {/* Morning Ceremony Items */}
                  {t.events.day2.morningItems.map((item, idx) => (
                    <motion.div
                      key={`morning-${idx}`}
                      variants={itemVariants}
                      className="relative flex items-start gap-4 sm:gap-6 group"
                    >
                      {/* Timeline Node */}
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#D4AF37] shadow-sm flex items-center justify-center shrink-0 z-10 group-hover:scale-110 transition-transform">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#8B0000]" />
                      </div>

                      {/* Timeline Details */}
                      <div className="flex-1 pb-1">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8B0000] text-xs font-bold mb-1">
                          <Clock className="w-3 h-3 text-[#D4AF37]" />
                          <span>{item.time}</span>
                        </div>
                        <h4
                          className={`text-base sm:text-lg font-bold text-slate-800 ${
                            isKh ? "font-khmer-moul text-base leading-[1.6]" : ""
                          }`}
                          style={{
                            fontFamily: isKh
                              ? "'Moulpali', cursive, serif"
                              : undefined,
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`text-slate-600 text-xs sm:text-sm mt-0.5 leading-relaxed ${
                            isKh ? "font-khmer-kantumruuy leading-[1.7]" : ""
                          }`}
                          style={{
                            fontFamily: isKh
                              ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                              : undefined,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Evening Reception Phase Header */}
                  <div className="relative flex items-center gap-3 pt-4 pb-1">
                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8B0000]/15 to-[#8B0000]/5 border border-[#8B0000]/30 text-[#8B0000] text-xs sm:text-sm font-bold shadow-xs">
                      <Moon className="w-4 h-4 text-[#8B0000]" />
                      <span className={isKh ? "font-khmer-moul text-xs sm:text-sm" : "uppercase tracking-wider font-semibold"}>
                        {t.events.day2.eveningTitle}
                      </span>
                      <span className="text-[#8B0000]/70 text-xs hidden sm:inline">• {t.events.day2.eveningSubtitle}</span>
                    </div>
                  </div>

                  {/* Evening Reception Items */}
                  {t.events.day2.eveningItems.map((item, idx) => (
                    <motion.div
                      key={`evening-${idx}`}
                      variants={itemVariants}
                      className="relative flex items-start gap-4 sm:gap-6 group"
                    >
                      {/* Timeline Node */}
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#8B0000] to-[#600000] border-2 border-[#D4AF37] shadow-md flex items-center justify-center shrink-0 z-10 group-hover:scale-110 transition-transform">
                        <Music className="w-3.5 h-3.5 text-[#FFF2B2]" />
                      </div>

                      {/* Timeline Details Highlighted */}
                      <div className="flex-1 p-3.5 sm:p-5 rounded-2xl bg-gradient-to-br from-white via-[#FFF9EE] to-[#FAF3E3] border-2 border-[#D4AF37]/50 shadow-sm">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#8B0000] text-[#FFF2B2] text-xs font-bold mb-1.5 shadow-xs">
                          <Clock className="w-3 h-3 text-[#FFF2B2]" />
                          <span>{item.time}</span>
                        </div>
                        <h4
                          className={`text-base sm:text-lg font-bold text-[#8B0000] ${
                            isKh ? "font-khmer-moul text-base leading-[1.6]" : ""
                          }`}
                          style={{
                            fontFamily: isKh
                              ? "'Moulpali', cursive, serif"
                              : undefined,
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`text-slate-700 text-xs sm:text-sm mt-1 leading-relaxed font-medium ${
                            isKh ? "font-khmer-kantumruuy leading-[1.7]" : ""
                          }`}
                          style={{
                            fontFamily: isKh
                              ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                              : undefined,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Venue Location & Reception Info Box */}
                <div className="relative z-10 mt-8 pt-6 border-t border-[#D4AF37]/30">
                  <div className="bg-gradient-to-br from-[#8B0000] via-[#780000] to-[#5C0000] text-white rounded-2xl p-4 sm:p-6 shadow-md border border-[#D4AF37]/40 relative overflow-hidden">
                    {/* Background ambient glow */}
                    <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />

                    <div className="relative z-10 flex items-start gap-3.5 sm:gap-4">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-[#FFF2B2]/60 flex items-center justify-center text-[#FFF2B2] shrink-0 mt-0.5 shadow-xs">
                        <MapPin className="w-5 h-5 text-[#FFF2B2]" />
                      </div>
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-[#FFF2B2] text-[11px] font-semibold mb-1.5">
                          <Sparkles className="w-3 h-3 text-[#FFF2B2]" />
                          <span>{t.events.day2.location.title}</span>
                        </div>
                        <h4
                          className={`text-base sm:text-lg font-bold text-white ${
                            isKh ? "font-khmer-moul text-base leading-[1.6]" : ""
                          }`}
                          style={{
                            fontFamily: isKh
                              ? "'Moulpali', cursive, serif"
                              : undefined,
                          }}
                        >
                          {t.events.day2.location.name}
                        </h4>
                        <p
                          className={`text-xs sm:text-sm text-white/85 mt-1 leading-relaxed ${
                            isKh ? "font-khmer-kantumruuy leading-[1.7]" : ""
                          }`}
                          style={{
                            fontFamily: isKh
                              ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                              : undefined,
                          }}
                        >
                          {t.events.day2.location.detail}
                        </p>
                      </div>
                    </div>

                    {/* Quote Banner */}
                    <div className="relative z-10 mt-4 pt-3.5 border-t border-white/15 text-center">
                      <p
                        className={`text-xs sm:text-sm italic text-[#FFF2B2] font-medium ${
                          isKh ? "font-khmer-kantumruuy leading-relaxed" : ""
                        }`}
                        style={{
                          fontFamily: isKh
                            ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                            : undefined,
                        }}
                      >
                        {t.events.day2.quote}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
