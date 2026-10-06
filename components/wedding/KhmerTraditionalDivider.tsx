'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { KhmerLotusPediment } from './divider/KhmerLotusPediment';

export default function KhmerTraditionalDivider() {
  const { language } = useLanguage();
  const isKh = language === 'kh';

  return (
    <section className='relative py-8 sm:py-12 px-4 overflow-hidden'>
      <div className='absolute inset-0 kbac-bg-pattern opacity-30 pointer-events-none' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-125 h-32 sm:h-44 rounded-full bg-linear-to-r from-transparent via-[#D4AF37]/10 to-transparent blur-2xl pointer-events-none' />

      <div className='max-w-4xl mx-auto relative z-10 text-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className='mb-4 sm:mb-6'
        >
          <KhmerLotusPediment />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='inline-flex items-center gap-2 px-4 sm:px-6 py-1.5 rounded-full bg-linear-to-r from-[#8B0000]/5 via-[#D4AF37]/15 to-[#8B0000]/5 border border-[#D4AF37]/40 shadow-[0_2px_12px_rgba(212,175,55,0.12)] mb-3'
        >
          <Sparkles className='w-3.5 h-3.5 text-[#D4AF37] animate-pulse' />
          <span
            className={`text-xs sm:text-sm font-semibold tracking-wider text-[#8B0000] ${
              isKh
                ? 'font-khmer-moul leading-[1.6]'
                : 'uppercase tracking-[0.25em]'
            }`}
            style={{
              fontFamily: isKh ? "'Moulpali', cursive, serif" : undefined,
            }}
          >
            {isKh ? 'សិរីសួស្តី ជ័យមង្គល វិបុលសុខ' : 'Auspicious Celebration'}
          </span>
          <Sparkles className='w-3.5 h-3.5 text-[#D4AF37] animate-pulse' />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-[#8B0000] mb-2 sm:mb-3 drop-shadow-sm ${
            isKh
              ? 'font-khmer-moul leading-[1.65]'
              : 'font-playfair tracking-wide'
          }`}
          style={{
            fontFamily: isKh
              ? "'Moulpali', cursive, serif"
              : "'Playfair Display', serif",
          }}
        >
          {isKh
            ? 'ពិធីមង្គលការ សុភាព & ច័ន្ទវដ្តី'
            : 'Wedding Ceremony • Sopheap & Chanvadey'}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={`text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed px-4 ${
            isKh ? 'font-khmer-kantumruuy leading-[1.8]' : 'italic'
          }`}
          style={{
            fontFamily: isKh
              ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
              : undefined,
          }}
        >
          {isKh
            ? '« ចំណងនិស្ស័យ ស្នេហាស្មោះស្ម័គ្រ រួមរស់សុខសាន្ត រហូតដល់ចាស់កោងខ្នង »'
            : '“Bound by destiny, faithful in love, united in joy for all the years to come.”'}
        </motion.p>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '160px', opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='h-[1.5px] mx-auto mt-5 sm:mt-6 bg-linear-to-r from-transparent via-[#D4AF37]/60 to-transparent flex items-center justify-center'
        >
          <div className='w-2 h-2 rotate-45 bg-[#D4AF37] border border-[#FFF2B2] shadow-sm -mt-0.5' />
        </motion.div>
      </div>
    </section>
  );
}
