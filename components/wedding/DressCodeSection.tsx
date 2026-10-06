'use client';

import React from 'react';
import { Sparkles, Sun, Moon, Check } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

export default function DressCodeSection() {
  const { t, language } = useLanguage();

  const morningColors = [
    {
      name: t.dressCode.morning.colors.gold,
      hex: '#D4AF37',
      gradient:
        'linear-gradient(135deg, #FDE68A 0%, #D4AF37 50%, #9A7712 100%)',
      ringColor: '#D4AF37',
      shadowColor: 'rgba(212, 175, 55, 0.4)',
    },
    {
      name: t.dressCode.morning.colors.cream,
      hex: '#F5E6D3',
      gradient:
        'linear-gradient(135deg, #FFFFFF 0%, #F5E6D3 50%, #DAC4AC 100%)',
      ringColor: '#DAC4AC',
      shadowColor: 'rgba(218, 196, 172, 0.4)',
    },
    {
      name: t.dressCode.morning.colors.rose,
      hex: '#E6B8B8',
      gradient:
        'linear-gradient(135deg, #FFE4E6 0%, #E6B8B8 50%, #BF8C8C 100%)',
      ringColor: '#E6B8B8',
      shadowColor: 'rgba(230, 184, 184, 0.4)',
    },
  ];

  const eveningColors = [
    {
      name: t.dressCode.evening.colors.burgundy,
      hex: '#8B0000',
      gradient:
        'linear-gradient(135deg, #A81B26 0%, #8B0000 50%, #4D0202 100%)',
      ringColor: '#8B0000',
      shadowColor: 'rgba(139, 0, 0, 0.45)',
    },
    {
      name: t.dressCode.evening.colors.cream,
      hex: '#1A1A1A',
      gradient:
        'linear-gradient(135deg, #FFFFFF 0%, #F5E6D3 50%, #DAC4AC 100%)',
      ringColor: '#374151',
      shadowColor: 'rgba(0, 0, 0, 0.35)',
    },
    {
      name: t.dressCode.evening.colors.green,
      hex: '#2A7B9B',
      gradient:
         'linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 100%, rgba(237, 221, 83, 1) 100%)',
      ringColor: '#2A7B9B',
      shadowColor: 'rgba(42, 123, 155, 0.4)',
    },
  ];

  return (
    <section className='py-24 px-4 bg-[#FDFBF7] relative overflow-hidden'>
      {/* Ambient background glows */}
      <div className='absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#8B0000]/6 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-5xl mx-auto relative z-10 text-center'>
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-sm text-[#7A1624] text-xs font-semibold tracking-[0.25em] uppercase mb-4'
        >
          <Sparkles className='w-3.5 h-3.5 text-[#D4AF37]' />
          <span>
            {language === 'kh'
              ? 'ការណែនាំអំពីការស្លៀកពាក់'
              : 'Attire & Color Palette'}
          </span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className='font-khmer-moul text-3xl sm:text-5xl text-[#7A1624] mb-4 tracking-wide drop-shadow-xs'
        >
          {t.dressCode.title}
        </motion.h2>

        {/* Khmer Traditional Ornamental Divider */}
        <div className='flex items-center justify-center gap-3 mb-14 opacity-80'>
          <div className='h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#D4AF37]' />
          <svg
            className='w-6 h-6 text-[#D4AF37]'
            viewBox='0 0 100 100'
            fill='none'
          >
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
          <div className='h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#D4AF37]' />
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch'>
          {/* 1. MORNING CEREMONY CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='group relative bg-linear-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF5EC] rounded-3xl p-8 sm:p-10 border-2 border-[#EBC070]/60 shadow-[0_15px_40px_rgba(201,140,8,0.12)] hover:shadow-[0_22px_55px_rgba(201,140,8,0.2)] hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-between overflow-hidden'
          >
            {/* Traditional Corner Filigree */}
            <div className='absolute top-3 left-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity'>
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#D4AF37]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <circle cx='10' cy='10' r='2.5' fill='currentColor' />
              </svg>
            </div>
            <div className='absolute top-3 right-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity rotate-90'>
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#D4AF37]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <circle cx='10' cy='10' r='2.5' fill='currentColor' />
              </svg>
            </div>

            <div>
              {/* Card Header Badge with Sun Icon */}
              <div className='flex flex-col items-center mb-6'>
                <div className='w-14 h-14 rounded-2xl bg-linear-to-br from-[#FFF8E7] to-[#FCEEC8] border border-[#D4AF37]/50 shadow-sm flex items-center justify-center text-[#B58611] mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Sun className='w-7 h-7 text-[#C98C08]' />
                </div>
                <h3 className='font-khmer-moul text-xl sm:text-2xl text-[#7A1624] mb-2'>
                  {t.dressCode.morning.title}
                </h3>
                <span className='inline-block px-4 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#8F6608] text-xs font-bold tracking-wider uppercase'>
                  {t.dressCode.morning.subtitle}
                </span>
              </div>

              {/* Color Swatches */}
              <div className='my-8 py-5 px-3 bg-white/70 rounded-2xl border border-[#EBC070]/30 shadow-inner'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F6608] mb-5'>
                  {language === 'kh'
                    ? 'ក្ដារពណ៌ដែលបានកំណត់'
                    : 'Recommended Color Palette'}
                </p>
                <div className='flex justify-center items-center gap-6 sm:gap-8'>
                  {morningColors.map((color, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1, y: -4 }}
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 20,
                      }}
                      className='flex flex-col items-center gap-2.5 cursor-pointer group/swatch'
                    >
                      {/* Swatch Circle */}
                      <div
                        className='relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-1 transition-all duration-300'
                        style={{
                          boxShadow: `0 8px 20px ${color.shadowColor}`,
                        }}
                      >
                        {/* Outer luxury gold ring */}
                        <div
                          className='absolute inset-0 rounded-full border-2 transition-transform duration-300 group-hover/swatch:scale-105'
                          style={{ borderColor: color.ringColor }}
                        />
                        {/* Inner colored disc with gloss reflection */}
                        <div
                          className='w-full h-full rounded-full relative overflow-hidden flex items-center justify-center'
                          style={{ background: color.gradient }}
                        >
                          {/* Gloss reflection shine */}
                          <div className='absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-full pointer-events-none' />
                        </div>
                      </div>

                      {/* Swatch Label */}
                      <span className='font-khmer-kantumruuy text-xs font-bold text-[#4A351C] tracking-wide group-hover/swatch:text-[#7A1624] transition-colors'>
                        {color.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className='mt-4 p-4 sm:p-5 rounded-2xl bg-[#FFF9EF]/80 border border-[#EBC070]/40 text-center'>
              <p className='font-khmer-kantumruuy text-xs sm:text-sm text-[#4A351C]/90 leading-relaxed'>
                {t.dressCode.morning.desc}
              </p>
            </div>
          </motion.div>

          {/* 2. EVENING BANQUET CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='group relative bg-linear-to-b from-[#FFFFFF] via-[#FFFDFC] to-[#FAF3F2] rounded-3xl p-8 sm:p-10 border-2 border-[#7A1624]/25 shadow-[0_15px_40px_rgba(122,22,36,0.1)] hover:shadow-[0_22px_55px_rgba(122,22,36,0.18)] hover:border-[#7A1624]/60 transition-all duration-500 flex flex-col justify-between overflow-hidden'
          >
            {/* Traditional Corner Filigree */}
            <div className='absolute top-3 left-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity'>
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#7A1624]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <circle cx='10' cy='10' r='2.5' fill='currentColor' />
              </svg>
            </div>
            <div className='absolute top-3 right-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity rotate-90'>
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#7A1624]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <circle cx='10' cy='10' r='2.5' fill='currentColor' />
              </svg>
            </div>

            <div>
              {/* Card Header Badge with Moon Icon */}
              <div className='flex flex-col items-center mb-6'>
                <div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FDF1F2] to-[#FCE6E8] border border-[#7A1624]/30 shadow-sm flex items-center justify-center text-[#7A1624] mb-4 group-hover:scale-110 transition-transform duration-300'>
                  <Moon className='w-7 h-7 text-[#7A1624]' />
                </div>
                <h3 className='font-khmer-moul text-xl sm:text-2xl text-[#7A1624] mb-2'>
                  {t.dressCode.evening.title}
                </h3>
                <span className='inline-block px-4 py-1 rounded-full bg-[#7A1624]/10 border border-[#7A1624]/30 text-[#7A1624] text-xs font-bold tracking-wider uppercase'>
                  {t.dressCode.evening.subtitle}
                </span>
              </div>

              {/* Color Swatches */}
              <div className='my-8 py-5 px-3 bg-white/70 rounded-2xl border border-[#7A1624]/20 shadow-inner'>
                <p className='text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7A1624] mb-5'>
                  {language === 'kh'
                    ? 'ក្ដារពណ៌ដែលបានកំណត់'
                    : 'Recommended Color Palette'}
                </p>
                <div className='flex justify-center items-center gap-6 sm:gap-8'>
                  {eveningColors.map((color, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.1, y: -4 }}
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 20,
                      }}
                      className='flex flex-col items-center gap-2.5 cursor-pointer group/swatch'
                    >
                      {/* Swatch Circle */}
                      <div
                        className='relative w-14 h-14 sm:w-16 sm:h-16 rounded-full p-1 transition-all duration-300'
                        style={{
                          boxShadow: `0 8px 20px ${color.shadowColor}`,
                        }}
                      >
                        {/* Outer luxury ring */}
                        <div
                          className='absolute inset-0 rounded-full border-2 transition-transform duration-300 group-hover/swatch:scale-105'
                          style={{ borderColor: color.ringColor }}
                        />
                        {/* Inner colored disc with gloss reflection */}
                        <div
                          className='w-full h-full rounded-full relative overflow-hidden flex items-center justify-center'
                          style={{ background: color.gradient }}
                        >
                          {/* Gloss reflection shine */}
                          <div className='absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/35 to-transparent rounded-t-full pointer-events-none' />
                        </div>
                      </div>

                      {/* Swatch Label */}
                      <span className='font-khmer-kantumruuy text-xs font-bold text-[#4A351C] tracking-wide group-hover/swatch:text-[#7A1624] transition-colors'>
                        {color.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className='mt-4 p-4 sm:p-5 rounded-2xl bg-[#FFF5F5]/80 border border-[#7A1624]/25 text-center'>
              <p className='font-khmer-kantumruuy text-xs sm:text-sm text-[#4A351C]/90 leading-relaxed'>
                {t.dressCode.evening.desc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
