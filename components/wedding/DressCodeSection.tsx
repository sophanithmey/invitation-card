'use client';

import React from 'react';
import { Sparkles, Sun, Moon } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { AttireCard } from './dress-code/AttireCard';

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
      <div className='absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#8B0000]/6 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-5xl mx-auto relative z-10 text-center'>
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

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className='font-khmer-moul text-3xl sm:text-5xl text-[#7A1624] mb-4 tracking-wide drop-shadow-xs'
        >
          {t.dressCode.title}
        </motion.h2>

        <div className='flex items-center justify-center gap-3 mb-14 opacity-80'>
          <div className='h-px w-16 sm:w-28 bg-linear-to-r from-transparent to-[#D4AF37]' />
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
          <div className='h-px w-16 sm:w-28 bg-linear-to-l from-transparent to-[#D4AF37]' />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch'>
          <AttireCard
            variant='morning'
            direction='left'
            icon={<Sun className='w-7 h-7 text-[#C98C08]' />}
            title={t.dressCode.morning.title}
            subtitle={t.dressCode.morning.subtitle}
            colors={morningColors}
            description={t.dressCode.morning.desc}
          />
          <AttireCard
            variant='evening'
            direction='right'
            icon={<Moon className='w-7 h-7 text-[#7A1624]' />}
            title={t.dressCode.evening.title}
            subtitle={t.dressCode.evening.subtitle}
            colors={eveningColors}
            description={t.dressCode.evening.desc}
          />
        </div>
      </div>
    </section>
  );
}
