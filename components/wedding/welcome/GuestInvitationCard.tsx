'use client';

import React, { useMemo } from 'react';
import { Sparkles, Calendar, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { getGuestSalutation } from './salutation-helper';

export interface GuestInvitationCardProps {
  guestName: string;
  isKhmerGuest: boolean;
  prefix?: string | null;
}

export function GuestInvitationCard({
  guestName,
  isKhmerGuest,
  prefix,
}: GuestInvitationCardProps) {
  const { t, language } = useLanguage();

  const salutation = useMemo(() => {
    let p = prefix;
    if (!p && typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      p = params.get('prefix') || params.get('title');
    }
    return getGuestSalutation(language, t.welcome.honorifics, p);
  }, [prefix, language, t.welcome.honorifics]);

  return (
    <>
      {/* Royal Seal / Emblem */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: 'spring',
          stiffness: 240,
          damping: 20,
          delay: 0.2,
        }}
        className='relative w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center'
      >
        <div className='absolute inset-0 rounded-full bg-[#D4AF37]/20 animate-ping opacity-60' />
        <div className='relative w-full h-full rounded-full border-2 border-[#D4AF37] shadow-[0_4px_16px_rgba(212,175,55,0.35)] bg-linear-to-br from-[#FFF8E7] via-[#FDF1D3] to-[#F5DEAC] flex items-center justify-center'>
          <div className='w-[84%] h-[84%] rounded-full border border-dashed border-[#D4AF37]/70 flex items-center justify-center bg-white/40'>
            <Heart className='w-6 h-6 sm:w-8 sm:h-8 text-[#8B0000] fill-[#8B0000]/15' />
          </div>
        </div>
      </motion.div>

      {/* Invitation Top Header / Greeting */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className='inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#8B0000]'>
          <Sparkles className='w-3.5 h-3.5 text-[#D4AF37] shrink-0' />
          <span
            className={`text-xs sm:text-sm font-semibold ${
              language === 'kh'
                ? 'font-khmer-moul leading-[1.6] tracking-normal'
                : 'uppercase tracking-[0.2em]'
            }`}
            style={{
              fontFamily:
                language === 'kh' ? "'Moulpali', 'Moul', cursive, serif" : undefined,
            }}
          >
            {t.welcome.invite}
          </span>
          <Sparkles className='w-3.5 h-3.5 text-[#D4AF37] shrink-0' />
        </div>
      </motion.div>

      {/* Honored Guest Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.55, duration: 0.6 }}
        className='relative py-3 sm:py-4 px-3 sm:px-5 rounded-xl sm:rounded-2xl bg-linear-to-b from-[#FFFDF9]/80 via-white to-[#FFFDF9]/80 border border-[#D4AF37]/25 shadow-[inset_0_1px_4px_rgba(212,175,55,0.08)]'
      >
        <p
          className={`text-slate-500 text-xs sm:text-sm mb-1 ${
            language === 'kh'
              ? 'font-khmer-kantumruuy leading-relaxed'
              : 'uppercase tracking-wider text-[11px] sm:text-xs'
          }`}
          style={{
            fontFamily:
              language === 'kh'
                ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                : undefined,
          }}
        >
          {salutation}
        </p>

        <h1
          className={`font-bold text-[#8B0000] wrap-break text-balance px-1 transition-all duration-300 drop-shadow-[0_1px_2px_rgba(139,0,0,0.1)] ${
            isKhmerGuest
              ? 'font-khmer-moul text-2xl sm:text-3xl md:text-4xl py-1 sm:py-2 leading-[1.65] tracking-normal'
              : 'font-cursive text-4xl sm:text-5xl md:text-6xl py-2 leading-tight'
          }`}
          style={{
            fontFamily: isKhmerGuest
              ? "'Moulpali', 'Moul', cursive, serif"
              : "'Great Vibes', cursive",
          }}
        >
          {guestName}
        </h1>
      </motion.div>

      {/* Celebration Subtitle & Couple Info */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className='space-y-2'
      >
        <p
          className={`text-slate-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed ${
            language === 'kh'
              ? 'font-khmer-kantumruuy leading-[1.8]'
              : 'tracking-wide'
          }`}
          style={{
            fontFamily:
              language === 'kh'
                ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                : undefined,
          }}
        >
          {t.welcome.celebration}
        </p>

        <div className='flex items-center justify-center gap-2.5 sm:gap-3 py-0.5'>
          <span className='h-px w-6 sm:w-10 bg-linear-to-r from-transparent to-[#D4AF37]/60' />
          <span
            className={`text-base sm:text-lg font-bold text-[#8B0000] ${
              language === 'kh'
                ? 'font-khmer-moul leading-[1.6] tracking-normal'
                : 'font-serif italic'
            }`}
            style={{
              fontFamily:
                language === 'kh'
                  ? "'Moulpali', 'Moul', cursive, serif"
                  : "'Playfair Display', serif",
            }}
          >
            {language === 'kh' ? 'សុភាព & ច័ន្ទវដ្តី' : 'Sopheap & Chanvadey'}
          </span>
          <span className='h-px w-6 sm:w-10 bg-linear-to-l from-transparent to-[#D4AF37]/60' />
        </div>

        <div className='inline-flex items-center gap-2 text-[#9E6D08] bg-[#D4AF37]/10 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 text-xs sm:text-sm'>
          <Calendar className='w-3.5 h-3.5 text-[#D4AF37] shrink-0' />
          <span
            className={
              language === 'kh'
                ? 'font-khmer-moul text-xs sm:text-sm leading-[1.6] tracking-normal'
                : 'font-serif tracking-wider'
            }
            style={{
              fontFamily:
                language === 'kh' ? "'Moulpali', 'Moul', cursive, serif" : undefined,
            }}
          >
            {t.welcome.date}
          </span>
        </div>
      </motion.div>
    </>
  );
}
