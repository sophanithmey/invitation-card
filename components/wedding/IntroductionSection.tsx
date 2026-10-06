import React from "react";
import { useLanguage } from "./LanguageContext";
import { motion, Variants } from "framer-motion";
import { KhmerCornerFrames } from "./intro/KhmerCornerFrames";
import { ParentsGrid } from "./intro/ParentsGrid";
import { CoupleHonorBlock } from "./intro/CoupleHonorBlock";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function IntroductionSection() {
  const { t, language } = useLanguage();
  const isKh = language === "kh";

  return (
    <section className="pb-20 px-4 relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.img
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/khmer-border.png"
          className="w-24 h-24 mx-auto mb-6 opacity-60 rotate-180"
          alt="ornament"
        />
        <motion.h2
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`text-3xl sm:text-4xl font-bold text-[#8B0000] mb-8 ${
            isKh ? "font-khmer-moul" : ""
          }`}
          style={{
            fontFamily: isKh
              ? "'Moulpali', cursive, serif"
              : "Playfair Display, serif",
          }}
        >
          {t.intro.title}
        </motion.h2>
        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-slate-600 leading-relaxed text-lg mb-12 max-w-2xl mx-auto"
        >
          {t.intro.quote}
        </motion.p>

        {/* Elegant Invitation Card */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-white p-8 sm:p-16 rounded-3xl shadow-2xl border border-[#D4AF37]/10 mx-auto overflow-hidden"
        >
          <KhmerCornerFrames />

          <div className="relative z-10 space-y-12">
            <motion.p
              variants={itemVariants}
              className={`text-slate-500 uppercase tracking-[0.3em] text-xs sm:text-sm font-medium ${
                isKh ? "font-khmer-moul" : ""
              }`}
            >
              {t.intro.together}
            </motion.p>

            <ParentsGrid itemVariants={itemVariants} />

            {/* Respectful Request Message */}
            <motion.div variants={itemVariants} className="py-2 sm:py-3">
              <p
                className={`text-slate-600 text-sm sm:text-base md:text-lg leading-[1.85] max-w-xl mx-auto ${
                  isKh ? "font-khmer-kantumruuy leading-[1.85]" : "font-serif italic"
                }`}
                style={{
                  fontFamily: isKh
                    ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                    : undefined,
                }}
              >
                {t.intro.request}
              </p>
            </motion.div>

            <CoupleHonorBlock itemVariants={itemVariants} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
