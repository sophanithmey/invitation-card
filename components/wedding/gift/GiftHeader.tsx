'use client';

import React from 'react';
import { BellRing } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export const GiftHeader: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-xs text-[#7A1624] text-xs font-semibold uppercase mb-4 ${
          language === 'kh' ? 'tracking-normal font-khmer' : 'tracking-[0.25em]'
        }`}
      >
        <BellRing className='w-3.5 h-3.5 text-[#D4AF37]' />
        <span>
          {language === 'kh'
            ? 'ចំណងដៃ និង ការជូនពរ'
            : 'Wedding Gift & Blessings'}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`font-bold text-[#7A1624] mb-4 drop-shadow-xs ${
          language === 'kh'
            ? 'font-khmer-moul text-2xl sm:text-3xl tracking-normal'
            : 'font-serif text-3xl sm:text-4xl tracking-wide'
        }`}
      >
        {t.gift.title}
      </motion.h2>

      <div className='flex items-center justify-center gap-3 mb-8 opacity-80'>
        <div className='h-px w-16 sm:w-28 bg-linear-to-r from-transparent to-[#D4AF37]' />
        <svg className='w-6 h-6 text-[#D4AF37]' viewBox='0 0 100 100' fill='none'>
          <rect
            x='50'
            y='15'
            width='49.5'
            height='49.5'
            transform='rotate(45 50 15)'
            stroke='currentColor'
            strokeWidth='2.5'
          />
          <circle cx='50' cy='50' r='9' fill='currentColor' />
        </svg>
        <div className='h-px w-16 sm:w-28 bg-linear-to-l from-transparent to-[#D4AF37]' />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light mb-14 ${
          language === 'kh' ? 'font-khmer' : ''
        }`}
      >
        {t.gift.desc}
      </motion.p>
    </>
  );
};
