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
    <div className='py-2 sm:py-4 space-y-4 sm:space-y-5 max-w-lg mx-auto'>
      {/* Groom Block */}
      <motion.div
        variants={itemVariants}
        className='py-3 sm:py-4 px-4 sm:px-6 rounded-2xl bg-linear-to-b from-[#FFFDF9] via-white to-[#FFFDF9] border border-[#D4AF37]/30 shadow-[0_2px_12px_rgba(212,175,55,0.08)]'
      >
        <div className='inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#8B0000] text-xs font-semibold mb-2 shadow-xs'>
          <span
            className={
              isKh
                ? 'font-khmer-moul text-xs'
                : 'uppercase tracking-widest text-[11px]'
            }
          >
            {t.intro.groom}
          </span>
        </div>
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B0000] ${
            isKh
              ? 'font-khmer-moul leading-[1.65]'
              : 'font-cursive text-4xl sm:text-5xl'
          }`}
          style={{
            fontFamily: isKh
              ? "'Moulpali', cursive, serif"
              : "'Great Vibes', cursive",
          }}
        >
          {isKh ? 'សាំង សុភាព' : 'Saing Sopheap'}
        </h2>
      </motion.div>

      {/* Symmetrical Center Connector */}
      <motion.div
        variants={itemVariants}
        className='flex items-center justify-center gap-3 sm:gap-4 my-2 sm:my-3'
      >
        <div className='h-px flex-1 max-w-20 sm:max-w-30 bg-linear-to-r from-transparent via-[#D4AF37]/50 to-[#D4AF37]/80' />
        <div className='w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/45 flex items-center justify-center text-[#8B0000] shadow-xs shrink-0'>
          <span
            className={`text-xs sm:text-sm font-bold ${
              isKh ? 'font-khmer-moul' : 'font-serif italic text-base'
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', cursive, serif"
                : "'Playfair Display', serif",
            }}
          >
            {isKh ? 'និង' : '&'}
          </span>
        </div>
        <div className='h-px flex-1 max-w-20 sm:max-w-30 bg-linear-to-l from-transparent via-[#D4AF37]/50 to-[#D4AF37]/80' />
      </motion.div>

      {/* Bride Block */}
      <motion.div
        variants={itemVariants}
        className='py-3 sm:py-4 px-4 sm:px-6 rounded-2xl bg-linear-to-b from-[#FFFDF9] via-white to-[#FFFDF9] border border-[#D4AF37]/30 shadow-[0_2px_12px_rgba(212,175,55,0.08)]'
      >
        <div className='inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#8B0000] text-xs font-semibold mb-2 shadow-xs'>
          <span
            className={
              isKh
                ? 'font-khmer-moul text-xs'
                : 'uppercase tracking-widest text-[11px]'
            }
          >
            {t.intro.bride}
          </span>
        </div>
        <h2
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B0000] ${
            isKh
              ? 'font-khmer-moul leading-[1.65]'
              : 'font-cursive text-4xl sm:text-5xl'
          }`}
          style={{
            fontFamily: isKh
              ? "'Moulpali', cursive, serif"
              : "'Great Vibes', cursive",
          }}
        >
          {isKh ? 'ទិន ច័ន្ទវដ្តី' : 'Tin Chanvaday'}
        </h2>
      </motion.div>
    </div>
  );
}
