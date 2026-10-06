import React from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "../LanguageContext";

export interface ParentsGridProps {
  itemVariants: Variants;
}

export function ParentsGrid({ itemVariants }: ParentsGridProps) {
  const { t, language } = useLanguage();
  const isKh = language === "kh";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-start">
      {/* Groom's Family */}
      <motion.div variants={itemVariants} className="space-y-3">
        <div className="space-y-1">
          <h3
            className={`text-xl sm:text-2xl text-slate-800 font-semibold ${
              isKh ? "font-khmer-moul leading-[1.6]" : ""
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', cursive, serif"
                : "Playfair Display, serif",
            }}
          >
            {isKh ? "លោក សាំង ភារុំ" : "Mr. Saing Phearum"}
          </h3>
          <h3
            className={`text-xl sm:text-2xl text-slate-800 font-semibold ${
              isKh ? "font-khmer-moul leading-[1.6]" : ""
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', cursive, serif"
                : "Playfair Display, serif",
            }}
          >
            {isKh ? "លោកស្រី ប៉ឹល សាមឿន" : "Mrs. Poel Samoeun"}
          </h3>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="h-px w-8 bg-[#D4AF37]/40" />
          <span
            className={`text-[#8B0000] text-xs font-semibold px-3 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 ${
              isKh ? "font-khmer-moul text-xs" : "uppercase tracking-widest text-[10px]"
            }`}
          >
            {t.intro.groomParents}
          </span>
          <div className="h-px w-8 bg-[#D4AF37]/40" />
        </div>
      </motion.div>

      {/* Bride's Family */}
      <motion.div variants={itemVariants} className="space-y-3">
        <div className="space-y-1">
          <h3
            className={`text-xl sm:text-2xl text-slate-800 font-semibold ${
              isKh ? "font-khmer-moul leading-[1.6]" : ""
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', cursive, serif"
                : "Playfair Display, serif",
            }}
          >
            {isKh ? "លោក ទិន សម្បត្តិ" : "Mr. Tin Sambath"}
          </h3>
          <h3
            className={`text-xl sm:text-2xl text-slate-800 font-semibold ${
              isKh ? "font-khmer-moul leading-[1.6]" : ""
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', cursive, serif"
                : "Playfair Display, serif",
            }}
          >
            {isKh ? "លោកស្រី អ៊ង ងីម" : "Mrs. Ong Ngim"}
          </h3>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="h-px w-8 bg-[#D4AF37]/40" />
          <span
            className={`text-[#8B0000] text-xs font-semibold px-3 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 ${
              isKh ? "font-khmer-moul text-xs" : "uppercase tracking-widest text-[10px]"
            }`}
          >
            {t.intro.brideParents}
          </span>
          <div className="h-px w-8 bg-[#D4AF37]/40" />
        </div>
      </motion.div>
    </div>
  );
}
