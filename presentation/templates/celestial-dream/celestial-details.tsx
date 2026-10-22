'use client';

import React from 'react';
import { WeddingEvent } from '@/domain/entities/event';
import { CelestialCopy } from './celestial-copy';

interface CelestialDetailsProps {
  dateStr: string;
  venueName: string;
  venueAddress: string;
  mapLocation?: string;
  events?: WeddingEvent[];
  copy: CelestialCopy;
  isKh: boolean;
}

export const CelestialDetails: React.FC<CelestialDetailsProps> = ({
  dateStr,
  venueName,
  venueAddress,
  mapLocation,
  events = [],
  copy,
  isKh,
}) => {
  const ceremonyEvent = events[0];
  const receptionEvent = events.length > 1 ? events[events.length - 1] : events[0];

  const handleReturnToCompass = () => {
    const el = document.getElementById('cd-compass');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='cd-details'
      aria-label='The Big Day Details'
      className='relative w-full bg-linear-to-b from-[#0F1833] to-[#18254A] px-4 py-16 sm:py-24'
    >
      <div className='mx-auto flex w-full max-w-2xl flex-col gap-8'>
        {/* Header */}
        <header className='text-center'>
          <p
            className={`mb-2 text-[0.65rem] uppercase text-[#C9A45C] ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.34em]'
            }`}
          >
            {copy.theBigDay}
          </p>
          <h2
            className={`text-[clamp(1.6rem,7vw,2.4rem)] leading-[1.15] text-[#F8F7F3] ${
              isKh ? 'font-khmer-moul' : 'cd-font-display tracking-[0.04em]'
            }`}
          >
            {dateStr}
          </h2>

          <div className='flex items-center justify-center gap-3 py-3' aria-hidden='true'>
            <span className='block h-px w-16 bg-linear-to-r from-transparent to-[#C9A45C]' />
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
              <path
                d='M8 0.5 L9.4 6.6 L15.5 8 L9.4 9.4 L8 15.5 L6.6 9.4 L0.5 8 L6.6 6.6 Z'
                fill='#C9A45C'
              />
            </svg>
            <span className='block h-px w-16 bg-linear-to-l from-transparent to-[#C9A45C]' />
          </div>
        </header>

        {/* Ceremony & Reception Cards */}
        <div className='flex flex-col gap-6'>
          {/* Ceremony Card */}
          <article className='flex flex-col items-center gap-3 rounded-3xl border border-[#C9A45C]/35 bg-[#18254A]/35 px-6 py-8 text-center shadow-lg backdrop-blur-sm'>
            <p
              className={`text-[0.6rem] uppercase text-[#C9A45C] ${
                isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.3em]'
              }`}
            >
              {copy.ceremony}
            </p>

            <h3
              className={`text-[clamp(1.2rem,5vw,1.6rem)] text-[#F8F7F3] ${
                isKh ? 'font-khmer-moul' : 'cd-font-display'
              }`}
            >
              {isKh && ceremonyEvent?.event_name_kh
                ? ceremonyEvent.event_name_kh
                : ceremonyEvent?.event_name || copy.ceremonyTitle}
            </h3>

            <p
              className={`text-xl text-[#C9A45C] ${
                isKh ? 'font-khmer' : 'cd-font-serif'
              }`}
            >
              {ceremonyEvent?.start_time || '07:30 AM'}
            </p>

            <p
              className={`text-[#F8F7F3] ${isKh ? 'font-khmer' : 'cd-font-serif'}`}
            >
              {ceremonyEvent?.venue || venueName}
            </p>

            <p
              className={`text-sm text-[#F2E9D9]/75 ${
                isKh ? 'font-khmer' : 'cd-font-serif'
              }`}
            >
              {venueAddress}
            </p>

            <p
              className={`text-xs italic text-[#F2E9D9]/60 ${
                isKh ? 'font-khmer' : 'cd-font-serif'
              }`}
            >
              {copy.earlyArrivalNote}
            </p>

            {mapLocation && (
              <a
                href={mapLocation}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-[#C9A45C]/50 px-6 py-2.5 text-[0.72rem] uppercase text-[#C9A45C] transition-all hover:bg-[#C9A45C] hover:text-[#1A1405]'
              >
                <span>✦</span>
                <span>{copy.openMap}</span>
              </a>
            )}
          </article>

          {/* Reception Card */}
          <article className='flex flex-col items-center gap-3 rounded-3xl border border-[#C9A45C]/35 bg-[#18254A]/35 px-6 py-8 text-center shadow-lg backdrop-blur-sm'>
            <p
              className={`text-[0.6rem] uppercase text-[#C9A45C] ${
                isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.3em]'
              }`}
            >
              {copy.reception}
            </p>

            <h3
              className={`text-[clamp(1.2rem,5vw,1.6rem)] text-[#F8F7F3] ${
                isKh ? 'font-khmer-moul' : 'cd-font-display'
              }`}
            >
              {isKh && receptionEvent?.event_name_kh
                ? receptionEvent.event_name_kh
                : receptionEvent?.event_name || copy.receptionTitle}
            </h3>

            <p
              className={`text-xl text-[#C9A45C] ${
                isKh ? 'font-khmer' : 'cd-font-serif'
              }`}
            >
              {receptionEvent?.start_time || '05:30 PM'}
            </p>

            <p
              className={`text-[#F8F7F3] ${isKh ? 'font-khmer' : 'cd-font-serif'}`}
            >
              {receptionEvent?.venue || venueName}
            </p>

            <p
              className={`text-xs italic text-[#F2E9D9]/60 ${
                isKh ? 'font-khmer' : 'cd-font-serif'
              }`}
            >
              {copy.receptionNote}
            </p>
          </article>
        </div>

        {/* Return to compass link */}
        <div className='flex justify-center pt-3'>
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
      </div>
    </section>
  );
};
