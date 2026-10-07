'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export interface ColorSwatchItem {
  name: string;
  gradient: string;
  ringColor: string;
  shadowColor: string;
}

export interface AttireCardProps {
  variant: 'morning' | 'evening';
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  colors: ColorSwatchItem[];
  description: string;
  direction?: 'left' | 'right';
}

export function AttireCard({
  variant,
  icon,
  title,
  subtitle,
  colors,
  description,
  direction = 'left',
}: AttireCardProps) {
  const { language } = useLanguage();
  const isMorning = variant === 'morning';

  const cardBorderClass = isMorning
    ? 'border-[#EBC070]/60 hover:border-[#D4AF37] shadow-[0_15px_40px_rgba(201,140,8,0.12)] hover:shadow-[0_22px_55px_rgba(201,140,8,0.2)]'
    : 'border-[#7A1624]/25 hover:border-[#7A1624]/60 shadow-[0_15px_40px_rgba(122,22,36,0.1)] hover:shadow-[0_22px_55px_rgba(122,22,36,0.18)]';

  const filigreeColor = isMorning ? 'text-[#D4AF37]' : 'text-[#7A1624]';

  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`group relative bg-linear-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF5EC] rounded-3xl p-8 sm:p-10 border-2 ${cardBorderClass} transition-all duration-500 flex flex-col justify-between overflow-hidden`}
    >
      {/* Corner Filigrees */}
      <div className={`absolute top-3 left-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity ${filigreeColor}`}>
        <svg viewBox='0 0 40 40' fill='none' className='w-full h-full'>
          <path d='M2 38 V10 A8 8 0 0 1 10 2 H38' stroke='currentColor' strokeWidth='2' />
          <circle cx='10' cy='10' r='2.5' fill='currentColor' />
        </svg>
      </div>
      <div className={`absolute top-3 right-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity rotate-90 ${filigreeColor}`}>
        <svg viewBox='0 0 40 40' fill='none' className='w-full h-full'>
          <path d='M2 38 V10 A8 8 0 0 1 10 2 H38' stroke='currentColor' strokeWidth='2' />
          <circle cx='10' cy='10' r='2.5' fill='currentColor' />
        </svg>
      </div>

      <div>
        {/* Header Icon & Title */}
        <div className='flex flex-col items-center mb-6'>
          <div className='w-14 h-14 rounded-2xl bg-linear-to-br from-[#FFF8E7] to-[#FCEEC8] border border-[#D4AF37]/50 shadow-sm flex items-center justify-center text-[#B58611] mb-4 group-hover:scale-110 transition-transform duration-300'>
            {icon}
          </div>
          <h3
            className={`font-khmer-moul text-xl sm:text-2xl text-[#7A1624] mb-2 ${
              language === 'kh' ? 'tracking-normal' : ''
            }`}
            style={{
              fontFamily:
                language === 'kh'
                  ? "'Moulpali', 'Moul', cursive, serif"
                  : undefined,
            }}
          >
            {title}
          </h3>
          <span
            className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase ${
              language === 'kh' ? 'font-khmer-kantumruuy tracking-normal' : 'tracking-wider'
            } ${
              isMorning
                ? 'bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#8F6608]'
                : 'bg-[#7A1624]/10 border border-[#7A1624]/30 text-[#7A1624]'
            }`}
          >
            {subtitle}
          </span>
        </div>

        {/* Color Swatches */}
        <div
          className={`my-8 py-5 px-3 bg-white/70 rounded-2xl border shadow-inner ${
            isMorning ? 'border-[#EBC070]/30' : 'border-[#7A1624]/20'
          }`}
        >
          <p
            className={`text-[11px] font-semibold uppercase mb-5 ${
              language === 'kh'
                ? 'font-khmer-kantumruuy tracking-normal'
                : 'tracking-[0.2em]'
            } ${
              isMorning ? 'text-[#8F6608]' : 'text-[#7A1624]'
            }`}
          >
            {language === 'kh'
              ? 'ក្ដារពណ៌ដែលបានកំណត់'
              : 'Recommended Color Palette'}
          </p>
          <div className='flex justify-center items-center gap-6 sm:gap-8'>
            {colors.map((color, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, y: -4 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
                className='flex flex-col items-center gap-2.5 cursor-pointer group/swatch'
              >
                <div
                  className='relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-1 transition-all duration-300'
                  style={{ boxShadow: `0 8px 20px ${color.shadowColor}` }}
                >
                  <div
                    className='absolute inset-0 rounded-full border-2 transition-transform duration-300 group-hover/swatch:scale-105'
                    style={{ borderColor: color.ringColor }}
                  />
                  <div
                    className='w-full h-full rounded-full relative overflow-hidden flex items-center justify-center'
                    style={{ background: color.gradient }}
                  >
                    <div className='absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/40 to-transparent rounded-t-full pointer-events-none' />
                  </div>
                </div>

                <span className='font-khmer-kantumruuy text-xs font-bold text-[#4A351C] tracking-wide group-hover/swatch:text-[#7A1624] transition-colors'>
                  {color.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Description Box */}
      <div
        className={`mt-4 p-4 sm:p-5 rounded-2xl border text-center ${
          isMorning
            ? 'bg-[#FFF9EF]/80 border-[#EBC070]/40'
            : 'bg-[#FFF5F5]/80 border-[#7A1624]/25'
        }`}
      >
        <p className='font-khmer-kantumruuy text-xs sm:text-sm text-[#4A351C]/90 leading-relaxed'>
          {description}
        </p>
      </div>
    </motion.div>
  );
}
