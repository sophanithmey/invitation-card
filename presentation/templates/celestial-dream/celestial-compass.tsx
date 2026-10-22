'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { CelestialStarfield } from './celestial-starfield';
import { CelestialCopy } from './celestial-copy';

interface CelestialCompassProps {
  copy: CelestialCopy;
  isKh: boolean;
}

export const CelestialCompass: React.FC<CelestialCompassProps> = ({
  copy,
  isKh,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const destinations = copy.destinations;
  const count = destinations.length;

  const current = destinations[activeIndex] || destinations[0];
  const rotationDegrees = activeIndex * (360 / count);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + count) % count);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % count);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  const handleSelect = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='cd-compass'
      aria-label='Navigation Compass'
      className='relative flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-[#0F1833] px-4 py-16'
      style={{
        background:
          'radial-gradient(120% 80% at 50% 30%, #18254A, #0F1833 70%)',
      }}
    >
      <CelestialStarfield density='low' />

      <div className='relative z-10 flex w-full max-w-md flex-col items-center gap-7'>
        <p
          className={`text-[0.65rem] uppercase text-[#C9A45C] ${
            isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.38em]'
          }`}
        >
          {copy.chooseYourPath}
        </p>

        {/* Interactive Astrolabe Wheel */}
        <div
          role='region'
          aria-label='Celestial Astrolabe'
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className='relative flex aspect-square w-[clamp(240px,70vw,320px)] items-center justify-center select-none'
        >
          {/* Outer Radial Golden Halo */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-[-12%] rounded-full'
            style={{
              background:
                'radial-gradient(circle, rgba(255, 214, 126, 0.16) 0%, transparent 68%)',
            }}
          />

          {/* Rotating Astrolabe Image */}
          <div
            className='pointer-events-none absolute inset-0 transition-transform duration-700 ease-out'
            style={{ transform: `rotate(${rotationDegrees}deg)` }}
          >
            <Image
              src='/templates/celestial-dream/cd-compass.png'
              alt=''
              fill
              sizes='320px'
              className='object-contain'
            />
          </div>

          {/* Center Destination Dial Button */}
          <button
            type='button'
            onClick={() => handleSelect(current.targetId)}
            className='group relative z-20 flex aspect-square w-[60%] cursor-pointer flex-col items-center justify-center rounded-full border border-[#C9A45C]/40 bg-[#0F1833]/85 p-4 text-center shadow-[0_0_30px_rgba(4,7,20,0.6)] backdrop-blur-md transition-all duration-300 hover:border-[#C9A45C] hover:shadow-[0_0_24px_rgba(255,220,140,0.35)]'
          >
            <span className='text-[0.75rem] text-[#C9A45C] transition-transform duration-300 group-hover:scale-125'>
              ✦
            </span>

            <span
              className={`mt-1 text-[clamp(0.88rem,3.4vw,1.1rem)] uppercase text-[#F8F7F3] ${
                isKh ? 'font-khmer-moul' : 'cd-font-display tracking-[0.06em]'
              }`}
            >
              {current.title}
            </span>

            <span
              className={`mt-1 max-w-[16ch] text-[clamp(0.6rem,2.4vw,0.72rem)] text-[#F2E9D9]/75 ${
                isKh ? 'font-khmer' : 'cd-font-serif'
              }`}
            >
              {current.subtitle}
            </span>

            <span
              className={`mt-2 text-[0.55rem] uppercase text-[#C9A45C] underline underline-offset-4 ${
                isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.18em]'
              }`}
            >
              {copy.explore} &darr;
            </span>
          </button>
        </div>

        {/* Navigation Arrows & Swipe Hint */}
        <div className='flex items-center gap-6'>
          <button
            type='button'
            onClick={handlePrev}
            aria-label='Previous destination'
            className='cursor-pointer rounded-full border border-[#C9A45C]/40 bg-[#18254A]/50 p-2 text-[#C9A45C] transition-all hover:border-[#C9A45C] hover:bg-[#C9A45C]/20'
          >
            <svg width='16' height='16' viewBox='0 0 14 14' fill='none'>
              <path
                d='M9 1 L3 7 L9 13'
                stroke='currentColor'
                strokeWidth='1.6'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>

          <p
            className={`text-[0.62rem] uppercase text-[#C9A45C] ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.32em]'
            }`}
          >
            {copy.swipeToExplore}
          </p>

          <button
            type='button'
            onClick={handleNext}
            aria-label='Next destination'
            className='cursor-pointer rounded-full border border-[#C9A45C]/40 bg-[#18254A]/50 p-2 text-[#C9A45C] transition-all hover:border-[#C9A45C] hover:bg-[#C9A45C]/20'
          >
            <svg width='16' height='16' viewBox='0 0 14 14' fill='none'>
              <path
                d='M5 1 L11 7 L5 13'
                stroke='currentColor'
                strokeWidth='1.6'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
