import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export interface CoupleHonorBlockProps {
  itemVariants: Variants;
}

export function CoupleHonorBlock({ itemVariants }: CoupleHonorBlockProps) {
  const { t, language } = useLanguage();
  const isKh = language === 'kh';

  return (
    <div className='py-2 sm:py-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2 xs:gap-3 sm:gap-6 max-w-3xl mx-auto'>
      {/* Groom Block */}
      <motion.div
        variants={itemVariants}
        className='w-full py-2.5 xs:py-3.5 sm:py-6 px-2 xs:px-3 sm:px-6 rounded-xl sm:rounded-2xl bg-linear-to-b from-[#FFFDF9] via-white to-[#FFFDF9] border border-[#D4AF37]/30 shadow-[0_2px_12px_rgba(212,175,55,0.08)] text-center'
      >
        <div className='inline-flex items-center gap-1 px-2 xs:px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#8B0000] mb-1.5 sm:mb-3 shadow-xs'>
          <span
            className={
              isKh
                ? 'font-khmer-moul text-[9px] xs:text-[10px] sm:text-xs tracking-normal'
                : 'uppercase tracking-widest text-[8px] xs:text-[9px] sm:text-[11px]'
            }
          >
            {t.intro.groom}
          </span>
        </div>
        <h2
          className={`text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B0000] ${
            isKh
              ? 'font-khmer-moul leading-normal sm:leading-[1.65] tracking-normal'
              : 'font-cursive text-xl xs:text-2xl sm:text-4xl lg:text-5xl'
          }`}
          style={{
            fontFamily: isKh
              ? "'Moulpali', 'Moul', cursive, serif"
              : "'Great Vibes', cursive",
          }}
        >
          {isKh ? 'សាំង សុភាព' : 'Saing Sopheap'}
        </h2>
      </motion.div>

      {/* Symmetrical Center Connector */}
      <motion.div
        variants={itemVariants}
        className='flex flex-col items-center justify-center gap-1 sm:gap-2 shrink-0'
      >
        <div className='w-px h-5 xs:h-7 sm:h-10 bg-linear-to-b from-transparent via-[#D4AF37]/50 to-[#D4AF37]/80' />
        <div className='w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/45 flex items-center justify-center text-[#8B0000] shadow-xs shrink-0'>
          <span
            className={`text-[10px] xs:text-xs sm:text-sm font-bold ${
              isKh
                ? 'font-khmer-moul tracking-normal'
                : 'font-serif italic text-xs sm:text-base'
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', 'Moul', cursive, serif"
                : "'Playfair Display', serif",
            }}
          >
            {isKh ? 'និង' : '&'}
          </span>
        </div>
        <div className='w-px h-5 xs:h-7 sm:h-10 bg-linear-to-t from-transparent via-[#D4AF37]/50 to-[#D4AF37]/80' />
      </motion.div>

      {/* Bride Block */}
      <motion.div
        variants={itemVariants}
        className='w-full py-2.5 xs:py-3.5 sm:py-6 px-2 xs:px-3 sm:px-6 rounded-xl sm:rounded-2xl bg-linear-to-b from-[#FFFDF9] via-white to-[#FFFDF9] border border-[#D4AF37]/30 shadow-[0_2px_12px_rgba(212,175,55,0.08)] text-center'
      >
        <div className='inline-flex items-center gap-1 px-2 xs:px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#8B0000] mb-1.5 sm:mb-3 shadow-xs'>
          <span
            className={
              isKh
                ? 'font-khmer-moul text-[9px] xs:text-[10px] sm:text-xs tracking-normal'
                : 'uppercase tracking-widest text-[8px] xs:text-[9px] sm:text-[11px]'
            }
          >
            {t.intro.bride}
          </span>
        </div>
        <h2
          className={`text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#8B0000] ${
            isKh
              ? 'font-khmer-moul leading-normal sm:leading-[1.65] tracking-normal'
              : 'font-cursive text-xl xs:text-2xl sm:text-4xl lg:text-5xl'
          }`}
          style={{
            fontFamily: isKh
              ? "'Moulpali', 'Moul', cursive, serif"
              : "'Great Vibes', cursive",
          }}
        >
          {isKh ? 'ទិន ច័ន្ទវដ្តី' : 'Tin Chanvadey'}
        </h2>
      </motion.div>
    </div>
  );
}
