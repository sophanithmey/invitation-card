'use client';

import React from 'react';
import Image from 'next/image';
import { GrandEvening } from './grand-evening';

interface GrandEveningFinaleProps {
  groomName: string;
  brideName: string;
  copy: GrandEvening;
  isKh?: boolean;
}

export const GrandEveningFinale: React.FC<GrandEveningFinaleProps> = ({
  groomName,
  brideName,
  copy,
  isKh = false,
}) => {
  return (
    <section
      id='finale'
      className='relative bg-[#0B0807] text-[#F2EBDD] overflow-hidden select-none'
    >
      {/* Background Stage Image */}
      <div className='absolute inset-0'>
        <Image
          src='/templates/grand-evening/finale-stage.jpg'
          alt='Ballroom stage finale'
          fill
          className='object-cover opacity-50'
        />
        <div className='absolute inset-0 bg-linear-to-b from-[#0B0807]/70 via-[#0B0807]/85 to-[#0B0807]' />
      </div>

      <div className='relative z-10 max-w-lg mx-auto px-6 py-24 sm:py-32 min-h-[85vh] flex flex-col justify-between items-center text-center'>
        {/* Section Tracker */}
        <div
          className={`flex items-center justify-between w-full text-[10px] text-[#D9C7A3] uppercase ${
            isKh ? 'font-khmer' : 'font-inter tracking-[0.3em]'
          }`}
        >
          <span>10</span>
          <span>{copy.nav.finale}</span>
        </div>

        {/* Central Closing Block */}
        <div className='my-auto py-8 flex flex-col items-center'>
          <p
            className={`text-xs uppercase text-[#D9C7A3] ${
              isKh ? 'font-khmer' : 'font-inter tracking-[0.35em]'
            }`}
          >
            {copy.finale.tag}
          </p>

          <h2
            className={`my-6 text-[#F2EBDD] font-medium leading-[1.05] ${
              isKh
                ? 'font-khmer text-4xl sm:text-5xl'
                : 'font-cormorant text-5xl sm:text-7xl uppercase'
            }`}
          >
            <div>{groomName}</div>
            <div className='italic text-[#C9A14A] text-[0.6em] my-1 font-serif font-normal'>
              &amp;
            </div>
            <div>{brideName}</div>
          </h2>

          <p
            className={`text-sm sm:text-base text-[#F2EBDD]/90 max-w-sm leading-relaxed ${
              isKh ? 'font-khmer' : 'font-cormorant italic'
            }`}
          >
            {copy.finale.thankYou}
          </p>

          {/* Bottom Monogram */}
          <div className='w-16 h-16 border border-[#C9A14A] rounded-full flex items-center justify-center font-cormorant text-[#C9A14A] text-xl mt-8 shadow-[0_0_20px_rgba(201,161,74,0.2)] animate-grand-glow'>
            <span>A</span>
            <span className='mx-1 opacity-50'>/</span>
            <span>M</span>
          </div>
        </div>

        <div />
      </div>
    </section>
  );
};
