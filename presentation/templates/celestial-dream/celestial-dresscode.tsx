'use client';

import React from 'react';
import { Accommodation } from '@/domain/entities/details';
import { CelestialCopy } from './celestial-copy';

interface CelestialDressCodeProps {
  dressCode?: string;
  accommodations?: Accommodation[];
  copy: CelestialCopy;
  isKh: boolean;
}

export const CelestialDressCode: React.FC<CelestialDressCodeProps> = ({
  dressCode,
  accommodations,
  copy,
  isKh,
}) => {
  const swatches = [
    { color: '#0F1833', name: 'Midnight' },
    { color: '#18254A', name: 'Deep Navy' },
    { color: '#F2E9D9', name: 'Ivory' },
    { color: '#C9A45C', name: 'Starlight Gold' },
    { color: '#B8A4FF', name: 'Lavender Mist' },
  ];

  const defaultStays = [
    {
      name: 'The Celestial Boutique Hotel',
      price: 'from $120/night',
      stars: '★★★★★',
      desc: isKh
        ? 'ត្រឹមតែ ៥ នាទីពីទីតាំងមង្គលការ បន្ទប់ស្អាត និងមានផាសុកភាព'
        : '5 minutes from the venue with starry panoramic view.',
    },
    {
      name: 'Starry Garden Resort',
      price: 'from $85/night',
      stars: '★★★★',
      desc: isKh
        ? 'រមណីយដ្ឋានបែបធម្មជាតិស្ងប់ស្ងាត់ មានអាងហែលទឹក'
        : 'Serene garden resort surrounded by lush greenery.',
    },
  ];

  return (
    <section
      id='cd-dresscode'
      aria-label='Dress code and accommodation'
      className='relative w-full bg-linear-to-b from-[#0F1833] to-[#18254A] px-4 py-16 sm:py-24'
    >
      <div className='mx-auto flex w-full max-w-[42rem] flex-col gap-8'>
        {/* Header */}
        <header className='text-center'>
          <p
            className={`mb-2 text-[0.65rem] uppercase text-[#C9A45C] ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.34em]'
            }`}
          >
            {copy.dressCodeKicker}
          </p>
          <h2
            className={`text-[clamp(1.6rem,7vw,2.4rem)] leading-[1.15] text-[#F8F7F3] ${
              isKh ? 'font-khmer-moul' : 'cd-font-display tracking-[0.04em]'
            }`}
          >
            {copy.dressCodeTitle}
          </h2>

          <div className='flex items-center justify-center gap-3 py-3' aria-hidden='true'>
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
            className={`mx-auto max-w-md text-sm text-[#F2E9D9]/80 ${
              isKh ? 'font-khmer' : 'cd-font-serif'
            }`}
          >
            {dressCode || (isKh ? 'សម្លៀកបំពាក់បែបប្រណីតស្រស់បំព្រង តាមពណ៌តារារាត្រី' : 'Formal Black Tie & Celestial Evening Palette')}
          </p>
        </header>

        {/* Color Palette Swatches */}
        <div className='flex justify-center gap-3 py-2' aria-label='Color Palette'>
          {swatches.map((s, idx) => (
            <span
              key={idx}
              title={s.name}
              className='h-9 w-9 rounded-full border border-[#C9A45C]/40 shadow-[0_0_12px_rgba(201,164,92,0.2)]'
              style={{ backgroundColor: s.color }}
            />
          ))}
        </div>

        {/* Ladies and Gentlemen Cards */}
        <div className='grid gap-4 sm:grid-cols-2'>
          <div className='rounded-3xl border border-[#C9A45C]/35 bg-[#18254A]/35 p-6 text-center shadow-md backdrop-blur-sm'>
            <p
              className={`mb-2 text-[0.6rem] uppercase text-[#C9A45C] ${
                isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.3em]'
              }`}
            >
              {copy.ladies}
            </p>
            <p
              className={`text-sm text-[#F2E9D9]/80 ${
                isKh ? 'font-khmer' : 'cd-font-serif'
              }`}
            >
              {copy.ladiesNote}
            </p>
          </div>

          <div className='rounded-3xl border border-[#C9A45C]/35 bg-[#18254A]/35 p-6 text-center shadow-md backdrop-blur-sm'>
            <p
              className={`mb-2 text-[0.6rem] uppercase text-[#C9A45C] ${
                isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.3em]'
              }`}
            >
              {copy.gentlemen}
            </p>
            <p
              className={`text-sm text-[#F2E9D9]/80 ${
                isKh ? 'font-khmer' : 'cd-font-serif'
              }`}
            >
              {copy.gentlemenNote}
            </p>
          </div>
        </div>

        {/* Optional Accommodations */}
        <div className='mt-4 flex flex-col gap-4'>
          <p
            className={`text-center text-[0.65rem] uppercase text-[#C9A45C] ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.3em]'
            }`}
          >
            {copy.accommodationTitle}
          </p>

          <div className='flex flex-col gap-3'>
            {defaultStays.map((stay, idx) => (
              <article
                key={idx}
                className='flex flex-col gap-1 rounded-2xl border border-[#C9A45C]/25 bg-[#18254A]/25 p-4'
              >
                <div className='flex items-baseline justify-between gap-2'>
                  <h4
                    className={`text-base text-[#F8F7F3] ${
                      isKh ? 'font-khmer-moul text-sm' : 'cd-font-display'
                    }`}
                  >
                    {stay.name}
                  </h4>
                  <span className='text-xs text-[#C9A45C]'>{stay.price}</span>
                </div>
                <p className='text-[0.65rem] text-[#C9A45C]'>{stay.stars}</p>
                <p
                  className={`text-xs text-[#F2E9D9]/70 ${
                    isKh ? 'font-khmer' : 'cd-font-serif'
                  }`}
                >
                  {stay.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
