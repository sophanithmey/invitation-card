import { useLanguage } from "./LanguageContext";
import { motion, Variants } from "framer-motion";

export default function IntroductionSection() {
  const { t, language } = useLanguage();

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
            language === "kh" ? "font-khmer-moul" : ""
          }`}
          style={{
            fontFamily:
              language === "kh"
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
          {/* Traditional Khmer Corner Frames */}
          <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none p-4">
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
              {/* Khmer Ornament Detail */}
              <circle cx="2" cy="24" r="1.5" fill="#D4AF37" />
              <circle cx="24" cy="2" r="1.5" fill="#D4AF37" />
            </svg>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none p-4 rotate-90">
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
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none p-4 -rotate-90">
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
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none p-4 rotate-180">
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
            </svg>
          </div>

          <div className="relative z-10 space-y-12">
            <motion.p
              variants={itemVariants}
              className={`text-slate-500 uppercase tracking-[0.3em] text-xs sm:text-sm font-medium ${
                language === "kh" ? "font-khmer-moul" : ""
              }`}
            >
              {t.intro.together}
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-start">
              {/* Groom's Family */}
              <motion.div variants={itemVariants} className="space-y-3">
                <div className="space-y-1">
                  <h3
                    className={`text-xl sm:text-2xl text-slate-800 font-semibold ${
                      language === "kh" ? "font-khmer-moul leading-[1.6]" : ""
                    }`}
                    style={{
                      fontFamily:
                        language === "kh"
                          ? "'Moulpali', cursive, serif"
                          : "Playfair Display, serif",
                    }}
                  >
                    {language === "kh" ? "លោក សាំង ភារុំ" : "Mr. Saing Phearum"}
                  </h3>
                  <h3
                    className={`text-xl sm:text-2xl text-slate-800 font-semibold ${
                      language === "kh" ? "font-khmer-moul leading-[1.6]" : ""
                    }`}
                    style={{
                      fontFamily:
                        language === "kh"
                          ? "'Moulpali', cursive, serif"
                          : "Playfair Display, serif",
                    }}
                  >
                    {language === "kh" ? "លោកស្រី ប៉ឹល សាមឿន" : "Mrs. Poel Samoeun"}
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-8 bg-[#D4AF37]/40" />
                  <span
                    className={`text-[#8B0000] text-xs font-semibold px-3 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 ${
                      language === "kh" ? "font-khmer-moul text-xs" : "uppercase tracking-widest text-[10px]"
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
                      language === "kh" ? "font-khmer-moul leading-[1.6]" : ""
                    }`}
                    style={{
                      fontFamily:
                        language === "kh"
                          ? "'Moulpali', cursive, serif"
                          : "Playfair Display, serif",
                    }}
                  >
                    {language === "kh" ? "លោក ទិន សម្បត្តិ" : "Mr. Tin Sambath"}
                  </h3>
                  <h3
                    className={`text-xl sm:text-2xl text-slate-800 font-semibold ${
                      language === "kh" ? "font-khmer-moul leading-[1.6]" : ""
                    }`}
                    style={{
                      fontFamily:
                        language === "kh"
                          ? "'Moulpali', cursive, serif"
                          : "Playfair Display, serif",
                    }}
                  >
                    {language === "kh" ? "លោកស្រី អ៊ង ងីម" : "Mrs. Ong Ngim"}
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-8 bg-[#D4AF37]/40" />
                  <span
                    className={`text-[#8B0000] text-xs font-semibold px-3 py-0.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 ${
                      language === "kh" ? "font-khmer-moul text-xs" : "uppercase tracking-widest text-[10px]"
                    }`}
                  >
                    {t.intro.brideParents}
                  </span>
                  <div className="h-px w-8 bg-[#D4AF37]/40" />
                </div>
              </motion.div>
            </div>

            {/* Respectful Request Message */}
            <motion.div variants={itemVariants} className="py-2 sm:py-3">
              <p
                className={`text-slate-600 text-sm sm:text-base md:text-lg leading-[1.85] max-w-xl mx-auto ${
                  language === "kh" ? "font-khmer-kantumruuy leading-[1.85]" : "font-serif italic"
                }`}
                style={{
                  fontFamily:
                    language === "kh"
                      ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                      : undefined,
                }}
              >
                {t.intro.request}
              </p>
            </motion.div>

            {/* Couple Names Section */}
            <div className="py-2 sm:py-4 space-y-4 sm:space-y-5 max-w-lg mx-auto">
              {/* Groom Block */}
              <motion.div
                variants={itemVariants}
                className="py-3 sm:py-4 px-4 sm:px-6 rounded-2xl bg-linear-to-b from-[#FFFDF9] via-white to-[#FFFDF9] border border-[#D4AF37]/30 shadow-[0_2px_12px_rgba(212,175,55,0.08)]"
              >
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#8B0000] text-xs font-semibold mb-2 shadow-xs">
                  <span className={language === "kh" ? "font-khmer-moul text-xs" : "uppercase tracking-widest text-[11px]"}>
                    {t.intro.groom}
                  </span>
                </div>
                <h2
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B0000] ${
                    language === "kh"
                      ? "font-khmer-moul leading-[1.65]"
                      : "font-cursive text-4xl sm:text-5xl"
                  }`}
                  style={{
                    fontFamily:
                      language === "kh"
                        ? "'Moulpali', cursive, serif"
                        : "'Great Vibes', cursive",
                  }}
                >
                  {language === "kh" ? "សាំង សុភាព" : "Saing Sopheap"}
                </h2>
              </motion.div>

              {/* Symmetrical Center Connector */}
              <motion.div
                variants={itemVariants}
                className="flex items-center justify-center gap-3 sm:gap-4 my-2 sm:my-3"
              >
                <div className="h-px flex-1 max-w-[80px] sm:max-w-[120px] bg-linear-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]/80" />
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/45 flex items-center justify-center text-[#8B0000] shadow-xs shrink-0">
                  <span
                    className={`text-xs sm:text-sm font-bold ${
                      language === "kh" ? "font-khmer-moul" : "font-serif italic text-base"
                    }`}
                    style={{
                      fontFamily:
                        language === "kh"
                          ? "'Moulpali', cursive, serif"
                          : "'Playfair Display', serif",
                    }}
                  >
                    {language === "kh" ? "និង" : "&"}
                  </span>
                </div>
                <div className="h-px flex-1 max-w-[80px] sm:max-w-[120px] bg-linear-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]/80" />
              </motion.div>

              {/* Bride Block */}
              <motion.div
                variants={itemVariants}
                className="py-3 sm:py-4 px-4 sm:px-6 rounded-2xl bg-linear-to-b from-[#FFFDF9] via-white to-[#FFFDF9] border border-[#D4AF37]/30 shadow-[0_2px_12px_rgba(212,175,55,0.08)]"
              >
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#8B0000] text-xs font-semibold mb-2 shadow-xs">
                  <span className={language === "kh" ? "font-khmer-moul text-xs" : "uppercase tracking-widest text-[11px]"}>
                    {t.intro.bride}
                  </span>
                </div>
                <h2
                  className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B0000] ${
                    language === "kh"
                      ? "font-khmer-moul leading-[1.65]"
                      : "font-cursive text-4xl sm:text-5xl"
                  }`}
                  style={{
                    fontFamily:
                      language === "kh"
                        ? "'Moulpali', cursive, serif"
                        : "'Great Vibes', cursive",
                  }}
                >
                  {language === "kh" ? "ទិន ច័ន្ទវដ្តី" : "Tin Chanvaday"}
                </h2>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
