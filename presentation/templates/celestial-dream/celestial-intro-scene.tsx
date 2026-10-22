'use client';

import React from 'react';
import { CelestialCopy } from './celestial-copy';

interface CelestialIntroSceneProps {
  invitationMessage?: string;
  dateStr: string;
  venueName: string;
  copy: CelestialCopy;
  isKh: boolean;
}

export const CelestialIntroScene: React.FC<CelestialIntroSceneProps> = ({
  invitationMessage,
  dateStr,
  venueName,
  copy,
  isKh,
}) => {
  return (
    <section
      id='cd-introduction'
      aria-label='Introduction'
      className='relative w-full bg-[#F2E9D9] px-6 py-16 sm:py-24 text-[#1A2445]'
    >
      <div className='mx-auto flex w-full max-w-2xl flex-col items-center gap-7 text-center'>
        <p
          className={`text-[0.65rem] uppercase text-[#C9A45C] ${
            isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.34em]'
          }`}
        >
          {copy.introKicker}
        </p>

        <h2
          className={`text-[clamp(1.6rem,7vw,2.4rem)] leading-[1.2] text-[#1A2445] ${
            isKh ? 'font-khmer-moul' : 'cd-font-display tracking-[0.04em]'
          }`}
        >
          {copy.introTitle}
        </h2>

        {/* Ivory dark divider */}
        <div className='flex items-center justify-center gap-3 py-1' aria-hidden='true'>
          <span className='block h-px w-14 bg-linear-to-r from-transparent to-[#1A2445]/30' />
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
            <path
              d='M8 0.5 L9.4 6.6 L15.5 8 L9.4 9.4 L8 15.5 L6.6 9.4 L0.5 8 L6.6 6.6 Z'
              fill='#1A2445'
              opacity='0.6'
            />
          </svg>
          <span className='block h-px w-14 bg-linear-to-l from-transparent to-[#1A2445]/30' />
        </div>

        <p
          className={`mx-auto max-w-xl text-[clamp(0.95rem,3.8vw,1.15rem)] leading-relaxed text-[#1A2445]/80 ${
            isKh ? 'font-khmer' : 'cd-font-serif'
          }`}
        >
          {invitationMessage || copy.introMessage}
        </p>

        <div className='mt-2 flex items-center justify-center gap-2'>
          <p
            className={`text-[0.65rem] uppercase text-[#1A2445]/70 ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.28em]'
            }`}
          >
            {dateStr} &bull; {venueName}
          </p>
        </div>
      </div>
    </section>
  );
};
