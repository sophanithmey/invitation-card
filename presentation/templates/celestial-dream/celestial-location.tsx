'use client';

import React from 'react';
import Image from 'next/image';
import { CelestialCopy } from './celestial-copy';

interface CelestialLocationProps {
  venueName: string;
  venueAddress: string;
  mapLocation?: string;
  copy: CelestialCopy;
  isKh: boolean;
}

export const CelestialLocation: React.FC<CelestialLocationProps> = ({
  venueName,
  venueAddress,
  mapLocation,
  copy,
  isKh,
}) => {
  const handleReturnToCompass = () => {
    const el = document.getElementById('cd-compass');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const travelTips = [
    {
      title: isKh ? 'សេវារថយន្តជូនដំណើរ (Shuttle Service)' : 'Shuttle Service',
      desc: isKh
        ? 'មានសេវារថយន្តជូនដំណើរពីទីតាំងចំណតកណ្តាលក្រុងចាប់ពីម៉ោង ៤:០០ រសៀល'
        : 'Complimentary shuttle available from the city center starting at 4:00 PM.',
    },
    {
      title: isKh ? 'ចំណតយានយន្ត (Parking)' : 'Guest Parking',
      desc: isKh
        ? 'មានចំណតយានយន្តធំទូលាយ និងឥតគិតថ្លៃនៅទីតាំងរៀបចំពិធី'
        : 'Spacious complimentary valet and self-parking available on premise.',
    },
  ];

  return (
    <section
      id='cd-location'
      aria-label='Location & Travel'
      className='relative w-full bg-[#F2E9D9] px-4 py-16 sm:py-24 text-[#1A2445]'
    >
      <div className='mx-auto flex w-full max-w-2xl flex-col gap-8'>
        {/* Header */}
        <header className='text-center'>
          <p
            className={`mb-2 text-[0.65rem] uppercase text-[#C9A45C] ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.34em]'
            }`}
          >
            {copy.locationKicker}
          </p>

          <h2
            className={`text-[clamp(1.6rem,7vw,2.4rem)] leading-[1.15] text-[#1A2445] ${
              isKh ? 'font-khmer-moul' : 'cd-font-display tracking-[0.04em]'
            }`}
          >
            {venueName}
          </h2>

          <div className='flex items-center justify-center gap-3 py-2' aria-hidden='true'>
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
            className={`mx-auto max-w-prose text-sm text-[#1A2445]/75 ${
              isKh ? 'font-khmer' : 'cd-font-serif'
            }`}
          >
            {venueAddress}
          </p>
        </header>

        {/* Venue Image Card */}
        <article className='flex flex-col gap-4'>
          <div className='relative aspect-4/3 w-full overflow-hidden rounded-3xl border border-[#1A2445]/15 bg-[#1A2445]/5 shadow-md'>
            <Image
              src='/templates/celestial-dream/cd-hall.webp'
              alt={venueName}
              fill
              sizes='(max-width: 640px) 100vw, 680px'
              className='object-cover'
            />
          </div>

          {mapLocation && (
            <div className='flex justify-center pt-2'>
              <a
                href={mapLocation}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 rounded-full border border-[#C9A45C] bg-[#0F1833] px-7 py-3 text-[0.72rem] uppercase text-[#F8F7F3] shadow-md transition-all hover:bg-[#18254A] hover:shadow-[0_0_20px_rgba(201,164,92,0.4)]'
              >
                <span>✦</span>
                <span>{copy.openMap}</span>
              </a>
            </div>
          )}
        </article>

        {/* Travel Information */}
        <div className='mt-4 flex flex-col gap-4 border-t border-[#1A2445]/15 pt-6'>
          <p
            className={`text-center text-[0.65rem] uppercase text-[#C9A45C] ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.3em]'
            }`}
          >
            {copy.travelTitle}
          </p>

          <dl className='flex flex-col gap-4'>
            {travelTips.map((tip, idx) => (
              <div key={idx} className='rounded-2xl bg-black/5 p-4'>
                <dt
                  className={`text-[0.62rem] uppercase font-semibold text-[#C9A45C] ${
                    isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.24em]'
                  }`}
                >
                  {tip.title}
                </dt>
                <dd
                  className={`mt-1 text-sm text-[#1A2445]/75 ${
                    isKh ? 'font-khmer' : 'cd-font-serif'
                  }`}
                >
                  {tip.desc}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Return to compass button */}
        <div className='flex justify-center pt-2'>
          <button
            type='button'
            onClick={handleReturnToCompass}
            className={`flex items-center gap-2 text-[0.65rem] uppercase text-[#1A2445]/60 transition-colors hover:text-[#1A2445] ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.3em]'
            }`}
          >
            <span aria-hidden='true'>✦</span>
            <span>{copy.returnToCompass}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
