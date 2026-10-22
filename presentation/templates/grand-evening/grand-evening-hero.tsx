'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { GrandEvening } from './grand-evening';

interface GrandEveningHeroProps {
  groomName: string;
  brideName: string;
  dateStr: string;
  venueName: string;
  copy: GrandEvening;
  isKh?: boolean;
}

export const GrandEveningHero: React.FC<GrandEveningHeroProps> = ({
  groomName,
  brideName,
  dateStr,
  venueName,
  copy,
  isKh = false,
}) => {
  const [lightsLevel, setLightsLevel] = useState<'off' | 'dim' | 'on'>('off');

  useEffect(() => {
    const dimTimer = setTimeout(() => {
      setLightsLevel('dim');
    }, 400);

    const onTimer = setTimeout(() => {
      setLightsLevel('on');
    }, 1200);

    return () => {
      clearTimeout(dimTimer);
      clearTimeout(onTimer);
    };
  }, []);

  return (
    <section
      id='hero'
      className='relative min-h-svh bg-[#0B0807] text-[#F2EBDD] flex flex-col justify-between overflow-hidden select-none'
    >
      {/* Background Lighting Layers */}
      <div className='absolute inset-0 z-0'>
        {/* Lights Off Base */}
        <div className='absolute inset-0'>
          <Image
            src='/templates/grand-evening/hero-lights-off.png'
            alt='Evening ambiance'
            fill
            priority
            className='object-cover object-center'
          />
        </div>

        {/* Lights Dim Layer */}
        <div
          className={`absolute inset-0 transition-opacity duration-1400 ease-in-out ${
            lightsLevel === 'dim' || lightsLevel === 'on'
              ? 'opacity-100'
              : 'opacity-0'
          }`}
        >
          <Image
            src='/templates/grand-evening/hero-lights-dim.png'
            alt='Dim lights'
            fill
            priority
            className='object-cover object-center'
          />
        </div>

        {/* Lights On Layer */}
        <div
          className={`absolute inset-0 transition-opacity duration-2200 ease-out ${
            lightsLevel === 'on' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src='/templates/grand-evening/hero-lights-on.png'
            alt='Chandelier lights'
            fill
            priority
            className='object-cover object-center'
          />
        </div>

        {/* Dark Vignette Overlay */}
        <div className='absolute inset-0 bg-linear-to-b from-[#0B0807]/30 via-[#0B0807]/50 to-[#0B0807]/90 z-10' />
      </div>

      {/* Main Foreground Content */}
      <div className='relative z-20 min-h-svh flex flex-col justify-between items-center text-center px-6 py-10 sm:py-14'>
        {/* Top Monogram Emblem */}
        <div className='w-14 h-14 border border-[#C9A14A] rounded-full flex items-center justify-center font-cormorant text-[#C9A14A] text-lg shadow-[0_0_15px_rgba(201,161,74,0.2)] animate-grand-glow'>
          <span>A</span>
          <span className='mx-1 opacity-50'>/</span>
          <span>M</span>
        </div>

        {/* Center Title & Names Block */}
        <div className='flex flex-col items-center my-auto py-8 max-w-xl'>
          {/* Top Diamond */}
          <div className='w-1.5 h-1.5 bg-[#C9A14A] rotate-45 mb-4' />

          <p
            className={`text-xs uppercase text-[#D9C7A3] ${
              isKh ? 'font-khmer' : 'font-inter tracking-[0.35em]'
            }`}
          >
            {copy.hero.theWeddingOf}
          </p>

          {/* Couple Names */}
          <h1
            className={`my-5 text-[#F2EBDD] font-medium leading-[1.05] ${
              isKh
                ? 'font-khmer text-4xl sm:text-5xl md:text-6xl'
                : 'font-cormorant text-5xl sm:text-6xl md:text-7xl uppercase'
            }`}
          >
            <div className='block tracking-wide'>{groomName}</div>
            <div className='italic text-[#C9A14A] text-[0.8em] my-1 font-serif font-normal'>
              &amp;
            </div>
            <div className='block tracking-wide'>{brideName}</div>
          </h1>

          {/* Bottom Diamond */}
          <div className='w-1.5 h-1.5 bg-[#C9A14A] rotate-45 my-4' />

          {/* Date and Venue */}
          <div
            className={`text-xs sm:text-sm uppercase text-[#D9C7A3] ${
              isKh ? 'font-khmer' : 'font-inter tracking-[0.3em]'
            }`}
          >
            {dateStr}
          </div>

          <div
            className={`text-[11px] sm:text-xs text-[#D9C7A3]/90 mt-2 ${
              isKh ? 'font-khmer' : 'font-inter tracking-[0.25em]'
            }`}
          >
            {venueName}
          </div>
        </div>

        {/* Scroll To Enter Indicator */}
        <div className='flex flex-col items-center gap-2.5 text-[#C9A14A]'>
          <span
            className={`text-[10px] uppercase text-[#C9A14A] ${
              isKh ? 'font-khmer' : 'font-inter tracking-[0.35em]'
            }`}
          >
            {copy.hero.scrollToEnter}
          </span>
          <span className='w-1 h-1 bg-[#C9A14A] rotate-45 animate-bounce' />
        </div>
      </div>
    </section>
  );
};
