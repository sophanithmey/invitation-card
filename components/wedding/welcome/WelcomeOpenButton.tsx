'use client';

import React from 'react';
import { MailOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export interface WelcomeOpenButtonProps {
  onOpen: () => void;
}

export function WelcomeOpenButton({ onOpen }: WelcomeOpenButtonProps) {
  const { t, language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.85 }}
      className='pt-2 sm:pt-4'
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type='button'
        onClick={onOpen}
        className='group relative overflow-hidden inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-white text-base sm:text-lg font-semibold shadow-[0_10px_25px_rgba(139,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(139,0,0,0.45)] transition-all duration-300 cursor-pointer bg-linear-to-r from-[#8B0000] via-[#A51212] to-[#8B0000] border-2 border-[#E5C158]/80'
        style={{
          fontFamily:
            language === 'kh' ? "'Moulpali', 'Moul', cursive, serif" : undefined,
        }}
      >
        <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none' />

        <MailOpen className='w-5 h-5 text-[#FFF5C0] group-hover:scale-110 transition-transform duration-300 shrink-0' />
        <span
          className={
            language === 'kh'
              ? 'font-khmer-moul leading-[1.6] tracking-normal'
              : 'tracking-wider'
          }
        >
          {t.welcome.open}
        </span>
      </motion.button>
    </motion.div>
  );
}
