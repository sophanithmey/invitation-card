'use client';

import React from 'react';
import { CelestialCopy } from './celestial-copy';

interface CelestialFooterProps {
  groomName: string;
  brideName: string;
  copy: CelestialCopy;
  isKh: boolean;
}

export const CelestialFooter: React.FC<CelestialFooterProps> = ({
  groomName,
  brideName,
  copy,
  isKh,
}) => {
  const handleReturnToCompass = () => {
    const el = document.getElementById('cd-compass');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const groomInitial = groomName.charAt(0).toUpperCase();
  const brideInitial = brideName.charAt(0).toUpperCase();

  return (
    <footer
      id='cd-footer'
      aria-label='Footer'
      className='relative flex min-h-[60svh] w-full flex-col items-center justify-center gap-5 px-6 py-20 text-center'
      style={{
        background:
          'radial-gradient(100% 70% at 50% 20%, #24356B 0%, #18254A 45%, #0F1833 100%)',
      }}
    >
      {/* Couple Monogram Circle */}
      <span
        aria-hidden='true'
        className='inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#C9A45C]/45 text-sm font-semibold text-[#C9A45C] shadow-[0_0_24px_rgba(255,220,140,0.25)]'
      >
        {groomInitial} &amp; {brideInitial}
      </span>

      <h2
        className={`text-[clamp(1.6rem,8vw,2.4rem)] text-[#F8F7F3] ${
          isKh ? 'font-khmer-moul' : 'cd-font-display tracking-wider'
        }`}
      >
        {isKh ? 'ទន្ទឹងរង់ចាំវត្តមានអ្នក' : 'We Look Forward to Seeing You'}
      </h2>

      {/* Star divider */}
      <div className='flex items-center justify-center gap-3 py-1' aria-hidden='true'>
        <span className='block h-px w-14 bg-linear-to-r from-transparent to-[#C9A45C]' />
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
          <path
            d='M8 0.5 L9.4 6.6 L15.5 8 L9.4 9.4 L8 15.5 L6.6 9.4 L0.5 8 L6.6 6.6 Z'
            fill='#C9A45C'
          />
        </svg>
        <span className='block h-px w-14 bg-linear-to-l from-transparent to-[#C9A45C]' />
      </div>

      <p
        className={`max-w-prose leading-relaxed text-[#F2E9D9]/80 ${
          isKh ? 'font-khmer' : 'cd-font-serif text-lg italic'
        }`}
      >
        &ldquo;{copy.footerQuote}&rdquo;
      </p>

      <p
        className={`text-[0.68rem] uppercase text-[#C9A45C] ${
          isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.3em]'
        }`}
      >
        {groomName} &amp; {brideName}
      </p>

      {/* Return to compass */}
      <div className='mt-6'>
        <button
          type='button'
          onClick={handleReturnToCompass}
          className={`flex items-center gap-2 text-[0.65rem] uppercase text-[#C9A45C]/75 transition-colors hover:text-[#C9A45C] ${
            isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.3em]'
          }`}
        >
          <span aria-hidden='true'>✦</span>
          <span>{copy.returnToCompass}</span>
        </button>
      </div>
    </footer>
  );
};
