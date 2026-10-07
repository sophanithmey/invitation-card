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
    <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 items-start">
      {/* Groom's Family */}
      <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3">
        <div className="space-y-0.5 sm:space-y-1.5">
          <h3
            className={`text-xs xs:text-sm sm:text-lg md:text-xl text-slate-800 font-semibold ${
              isKh ? "font-khmer-moul leading-[1.6]" : ""
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', 'Moul', cursive, serif"
                : "Playfair Display, serif",
            }}
          >
            {isKh ? "លោក សាំង ភារុំ" : "Mr. Saing Phearum"}
          </h3>
          <h3
            className={`text-xs xs:text-sm sm:text-lg md:text-xl text-slate-800 font-semibold ${
              isKh ? "font-khmer-moul leading-[1.6]" : ""
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', 'Moul', cursive, serif"
                : "Playfair Display, serif",
            }}
          >
            {isKh ? "លោកស្រី ប៉ឹល សាមឿន" : "Mrs. Poel Samoeun"}
          </h3>
        </div>
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          <div className="hidden xs:block h-px w-3 sm:w-8 bg-[#D4AF37]/40" />
          <span
            className={`text-[#8B0000] font-semibold px-2 sm:px-3 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-center ${
              isKh
                ? "font-khmer-moul text-[9px] sm:text-xs tracking-normal"
                : "uppercase tracking-widest text-[8px] sm:text-[10px]"
            }`}
          >
            {t.intro.groomParents}
          </span>
          <div className="hidden xs:block h-px w-3 sm:w-8 bg-[#D4AF37]/40" />
        </div>
      </motion.div>

      {/* Bride's Family */}
      <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3">
        <div className="space-y-0.5 sm:space-y-1.5">
          <h3
            className={`text-xs xs:text-sm sm:text-lg md:text-xl text-slate-800 font-semibold ${
              isKh ? "font-khmer-moul leading-[1.6]" : ""
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', 'Moul', cursive, serif"
                : "Playfair Display, serif",
            }}
          >
            {isKh ? "លោក ទិន សម្បត្តិ" : "Mr. Tin Sambath"}
          </h3>
          <h3
            className={`text-xs xs:text-sm sm:text-lg md:text-xl text-slate-800 font-semibold ${
              isKh ? "font-khmer-moul leading-[1.6]" : ""
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', 'Moul', cursive, serif"
                : "Playfair Display, serif",
            }}
          >
            {isKh ? "លោកស្រី អ៊ង ងីម" : "Mrs. Ong Ngim"}
          </h3>
        </div>
        <div className="flex items-center justify-center gap-1 sm:gap-2">
          <div className="hidden xs:block h-px w-3 sm:w-8 bg-[#D4AF37]/40" />
          <span
            className={`text-[#8B0000] font-semibold px-2 sm:px-3 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-center ${
              isKh
                ? "font-khmer-moul text-[9px] sm:text-xs tracking-normal"
                : "uppercase tracking-widest text-[8px] sm:text-[10px]"
            }`}
          >
            {t.intro.brideParents}
          </span>
          <div className="hidden xs:block h-px w-3 sm:w-8 bg-[#D4AF37]/40" />
        </div>
      </motion.div>
    </div>
  );
}
