'use client';

import React from 'react';
import Image from 'next/image';
import { GrandEvening } from './grand-evening';

interface GrandEveningDressCodeProps {
  dressCode?: string;
  copy: GrandEvening;
  isKh?: boolean;
}

export const GrandEveningDressCode: React.FC<GrandEveningDressCodeProps> = ({
  dressCode,
  copy,
  isKh = false,
}) => {
  const colorSwatches = [
    { bg: '#E8D5C4', label: 'Alabaster' },
    { bg: '#C9B79C', label: 'Cashmere' },
    { bg: '#A89078', label: 'Sepia' },
    { bg: '#1A1A1A', label: 'Tuxedo' },
  ];

  return (
    <section
      id='dress-code'
      className='relative bg-[#F2EBDD] py-16 sm:py-24 px-6 select-none'
    >
      <div className='max-w-lg mx-auto flex flex-col items-center text-center'>
        {/* Section Tracker Tag */}
        <div
          className={`flex items-center justify-between w-full text-[10px] text-[#7A6F5C] uppercase mb-6 ${
            isKh ? 'font-khmer' : 'font-inter tracking-[0.3em]'
          }`}
        >
          <span>06</span>
          <span>{copy.nav.dressCode}</span>
        </div>

        {/* Heading */}
        <h2
          className={`text-3xl sm:text-4xl font-medium text-[#0B0807] uppercase ${
            isKh ? 'font-khmer normal-case' : 'font-cormorant tracking-[0.03em]'
          }`}
        >
          {copy.dressCode.title}
        </h2>

        {/* Subtitle */}
        <p
          className={`text-xs text-[#7A6F5C] mt-2.5 max-w-sm uppercase ${
            isKh ? 'font-khmer normal-case' : 'font-inter tracking-[0.25em]'
          }`}
        >
          {dressCode || copy.dressCode.subtitle}
        </p>

        {/* Couple Attire Photo with multiply blend */}
        <div className='relative w-48 sm:w-64 aspect-3/4 my-8'>
          <Image
            src='/templates/grand-evening/dress-couple.jpg'
            alt='Black tie dress code'
            fill
            className='object-contain mix-blend-multiply'
            sizes='(max-width: 640px) 192px, 256px'
          />
        </div>

        {/* Color Palette Label */}
        <div
          className={`text-[10px] uppercase text-[#0B0807] mb-3.5 ${
            isKh ? 'font-khmer' : 'font-inter tracking-[0.3em]'
          }`}
        >
          {copy.dressCode.colorPalette}
        </div>

        {/* 4 Color Swatch Circles */}
        <div className='flex items-center justify-center gap-3.5'>
          {colorSwatches.map((swatch) => (
            <div
              key={swatch.bg}
              className='w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#0B0807]/15 shadow-inner'
              style={{ backgroundColor: swatch.bg }}
              title={swatch.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
