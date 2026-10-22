'use client';

import React from 'react';
import Image from 'next/image';
import { CelestialStarfield } from './celestial-starfield';
import { CelestialCopy } from './celestial-copy';

interface CelestialHeroProps {
  groomName: string;
  brideName: string;
  dateStr: string;
  venueName: string;
  copy: CelestialCopy;
  isKh: boolean;
}

export const CelestialHero: React.FC<CelestialHeroProps> = ({
  groomName,
  brideName,
  dateStr,
  venueName,
  copy,
  isKh,
}) => {
  const handleScrollToCompass = () => {
    const el = document.getElementById('cd-compass');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='cd-hero'
      aria-label='Hero'
      className='relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-[#0F1833]'
    >
      <div className='absolute inset-0 mx-auto max-w-3xl overflow-hidden'>
        {/* Portal Scenes: Layered closed and open for visual depth */}
        <div className='absolute inset-0' aria-hidden='true'>
          <Image
            src='/templates/celestial-dream/cd-scene-open.png'
            alt=''
            fill
            priority
            sizes='(max-width: 768px) 100vw, 48rem'
            className='select-none object-cover'
            style={{ objectPosition: '50% 40%' }}
          />
        </div>

        {/* Luminous Arch Aura */}
        <div
          aria-hidden='true'
          className='cd-arch-glow pointer-events-none absolute'
          style={{
            zIndex: 10,
            left: '19%',
            top: '12%',
            width: '62%',
            height: '76%',
            borderRadius: '50% 50% 8% 8% / 34% 34% 4% 4%',
            background:
              'radial-gradient(60% 60% at 50% 55%, rgba(255,214,126,0.18), transparent 72%)',
          }}
        />

        {/* Twinkling Starfield */}
        <CelestialStarfield density='normal' className='z-20' />

        {/* Vignette shadows top and bottom for readability */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 z-30'
          style={{
            background:
              'radial-gradient(120% 82% at 50% 42%, transparent 45%, rgba(4,7,20,0.65) 100%), linear-gradient(180deg, rgba(4,7,20,0.5) 0%, transparent 25%, transparent 70%, rgba(4,7,20,0.7) 100%)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className='relative z-40 flex flex-col items-center justify-center gap-3 px-6 py-12 text-center'>
        <p
          className={`text-[0.68rem] uppercase text-[#C9A45C] ${
            isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.36em]'
          }`}
        >
          {copy.invitationKicker}
        </p>

        <h1
          className={`text-[clamp(2.1rem,9vw,3.8rem)] leading-[1.1] text-[#F8F7F3] drop-shadow-[0_0_28px_rgba(255,220,140,0.35)] ${
            isKh ? 'font-khmer-moul text-[clamp(1.8rem,8vw,3.2rem)]' : 'cd-font-display tracking-wider'
          }`}
        >
          <span>{groomName}</span>
          <span className='mx-2 inline-block text-[0.6em] text-[#C9A45C]'>
            &amp;
          </span>
          <span>{brideName}</span>
        </h1>

        <div className='mt-1 flex flex-col items-center gap-1'>
          <p
            className={`text-[0.72rem] uppercase text-[#F2E9D9]/85 ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.3em]'
            }`}
          >
            {dateStr}
          </p>
          <p
            className={`text-[0.65rem] uppercase text-[#F2E9D9]/70 ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.24em]'
            }`}
          >
            {venueName}
          </p>
        </div>

        {/* Explore Button with animated chevron */}
        <button
          type='button'
          onClick={handleScrollToCompass}
          aria-label={copy.tapToExplore}
          className='group mt-6 inline-flex cursor-pointer flex-col items-center gap-2.5 rounded-full px-6 py-3 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#C9A45C]'
        >
          <span
            className='inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A45C] bg-[#0F1833]/60 backdrop-blur-sm transition-shadow duration-300 group-hover:shadow-[0_0_24px_rgba(255,220,140,0.5)]'
            style={{ boxShadow: '0 0 16px rgba(255, 220, 140, 0.25)' }}
          >
            {/* 8-point celestial compass star */}
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              aria-hidden='true'
              className='cd-float text-[#C9A45C]'
            >
              <path
                d='M8 0.5 L9.4 6.6 L15.5 8 L9.4 9.4 L8 15.5 L6.6 9.4 L0.5 8 L6.6 6.6 Z'
                fill='currentColor'
              />
            </svg>
          </span>

          <span
            className={`text-[0.62rem] uppercase text-[#C9A45C] transition-opacity group-hover:opacity-100 ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.28em]'
            }`}
          >
            {copy.tapToExplore}
          </span>

          <svg
            width='14'
            height='9'
            viewBox='0 0 16 10'
            fill='none'
            aria-hidden='true'
            className='animate-bounce text-[#C9A45C]'
          >
            <path
              d='M1 1 L8 8 L15 1'
              stroke='currentColor'
              strokeWidth='1.6'
              strokeLinecap='round'
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
