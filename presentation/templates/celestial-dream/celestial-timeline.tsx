'use client';

import React from 'react';
import { WeddingEvent } from '@/domain/entities/event';
import { CelestialCopy } from './celestial-copy';

interface CelestialTimelineProps {
  events: WeddingEvent[];
  copy: CelestialCopy;
  isKh: boolean;
}

export const CelestialTimeline: React.FC<CelestialTimelineProps> = ({
  events,
  copy,
  isKh,
}) => {
  const handleReturnToCompass = () => {
    const el = document.getElementById('cd-compass');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const list = events && events.length > 0 ? events : [
    {
      id: 'def-1',
      event_name: 'Blessing Ceremony',
      event_name_kh: 'ពិធីសំពះផ្ទឹម និងបំពាក់ចិញ្ចៀន',
      start_time: '07:30 AM',
      venue: 'Main Courtyard',
      date: '2026-12-19',
    },
    {
      id: 'def-2',
      event_name: 'Tea & Refreshment',
      event_name_kh: 'ពិធីពិសាតែ និងអាហារសម្រន់',
      start_time: '10:00 AM',
      venue: 'Garden Pavilion',
      date: '2026-12-19',
    },
    {
      id: 'def-3',
      event_name: 'Dinner Reception & Dancing',
      event_name_kh: 'ពិសារភោជនាហារ និងរាំកម្សាន្ត',
      start_time: '05:30 PM',
      venue: 'The Starry Hall',
      date: '2026-12-19',
    },
  ];

  return (
    <section
      id='cd-timeline'
      aria-label='Timeline Schedule'
      className='relative w-full bg-[#F2E9D9] px-6 py-16 sm:py-24 text-[#1A2445]'
    >
      <div className='mx-auto flex w-full max-w-2xl flex-col gap-8'>
        {/* Header */}
        <header className='text-center'>
          <p
            className={`mb-2 text-[0.65rem] uppercase text-[#C9A45C] ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.34em]'
            }`}
          >
            {copy.timelineKicker}
          </p>

          <h2
            className={`text-[clamp(1.6rem,7vw,2.4rem)] leading-[1.15] text-[#1A2445] ${
              isKh ? 'font-khmer-moul' : 'cd-font-display tracking-[0.04em]'
            }`}
          >
            {copy.timelineTitle}
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
        </header>

        {/* Vertical Celestial Timeline */}
        <ol className='relative flex flex-col gap-8 pl-8' role='list'>
          {/* Vertical gold starlight rail */}
          <span
            aria-hidden='true'
            className='absolute top-3 bottom-3 left-3 w-0.5'
            style={{
              background:
                'linear-gradient(180deg, transparent, #C9A45C 20%, #C9A45C 80%, transparent)',
            }}
          />

          {list.map((item, idx) => (
            <li key={item.id || idx} className='relative'>
              {/* Star Bullet Node */}
              <span
                aria-hidden='true'
                className='absolute -left-7 top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#0F1833] ring-2 ring-[#C9A45C]'
              >
                <span className='h-1.5 w-1.5 rounded-full bg-[#C9A45C]' />
              </span>

              <p
                className={`text-[0.62rem] uppercase font-semibold text-[#C9A45C] ${
                  isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.24em]'
                }`}
              >
                {item.start_time}
              </p>

              <h3
                className={`mt-1 text-[clamp(1.1rem,4.8vw,1.35rem)] text-[#1A2445] ${
                  isKh ? 'font-khmer-moul' : 'cd-font-display'
                }`}
              >
                {isKh && item.event_name_kh ? item.event_name_kh : item.event_name}
              </h3>

              {item.venue && (
                <p
                  className={`mt-1 text-sm text-[#1A2445]/70 ${
                    isKh ? 'font-khmer' : 'cd-font-serif'
                  }`}
                >
                  {item.venue}
                </p>
              )}
            </li>
          ))}
        </ol>

        {/* Return to compass button */}
        <div className='flex justify-center pt-4'>
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
