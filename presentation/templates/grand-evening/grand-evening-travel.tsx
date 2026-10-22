'use client';

import React from 'react';
import { GrandEvening } from './grand-evening';

interface GrandEveningTravelProps {
  mapLocation?: string;
  copy: GrandEvening;
  isKh?: boolean;
}

export const GrandEveningTravel: React.FC<GrandEveningTravelProps> = ({
  mapLocation = 'https://maps.google.com/?q=Florence+Italy',
  copy,
  isKh = false,
}) => {
  const items = [
    {
      title: copy.travel.stayTitle,
      desc: copy.travel.stayDesc,
      icon: (
        <svg width='26' height='26' viewBox='0 0 32 32'>
          <g fill='none' stroke='#C9A14A' strokeWidth='1.4' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M4 24V11M4 18h24v6M28 24v-6a4 4 0 0 0-4-4H14v4' />
            <circle cx='9' cy='18' r='2' />
          </g>
        </svg>
      ),
    },
    {
      title: copy.travel.howTitle,
      desc: copy.travel.howDesc,
      icon: (
        <svg width='26' height='26' viewBox='0 0 32 32'>
          <g fill='none' stroke='#C9A14A' strokeWidth='1.4' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M5 20l3-8h16l3 8M5 20v4h4v-2M27 20v4h-4v-2M5 20h22' />
            <circle cx='10' cy='22' r='1.5' />
            <circle cx='22' cy='22' r='1.5' />
          </g>
        </svg>
      ),
    },
    {
      title: copy.travel.shuttleTitle,
      desc: copy.travel.shuttleDesc,
      icon: (
        <svg width='26' height='26' viewBox='0 0 32 32'>
          <g fill='none' stroke='#C9A14A' strokeWidth='1.4' strokeLinecap='round' strokeLinejoin='round'>
            <rect x='5' y='9' width='22' height='14' rx='2' />
            <path d='M5 17h22M9 13h5M18 13h5' />
            <circle cx='10' cy='25' r='1.5' />
            <circle cx='22' cy='25' r='1.5' />
          </g>
        </svg>
      ),
    },
    {
      title: copy.travel.mapTitle,
      desc: copy.travel.mapDesc,
      icon: (
        <svg width='26' height='26' viewBox='0 0 32 32'>
          <g fill='none' stroke='#C9A14A' strokeWidth='1.4' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M16 4c-5 0-8 3-8 8 0 6 8 16 8 16s8-10 8-16c0-5-3-8-8-8z' />
            <circle cx='16' cy='12' r='2.5' />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section
      id='travel'
      className='relative bg-[#F2EBDD] py-16 sm:py-24 px-6 select-none'
    >
      <div className='max-w-lg mx-auto flex flex-col'>
        {/* Section Tracker */}
        <div
          className={`flex items-center justify-between text-[10px] text-[#7A6F5C] uppercase mb-6 ${
            isKh ? 'font-khmer' : 'font-inter tracking-[0.3em]'
          }`}
        >
          <span>08</span>
          <span>{copy.nav.travel}</span>
        </div>

        {/* Heading */}
        <div className='text-center'>
          <h2
            className={`text-3xl sm:text-4xl font-medium text-[#0B0807] uppercase ${
              isKh ? 'font-khmer normal-case' : 'font-cormorant tracking-[0.03em]'
            }`}
          >
            {copy.travel.title}
          </h2>

          {/* Divider Line */}
          <div className='flex items-center justify-center gap-2.5 mt-3 mb-8'>
            <div className='w-10 h-px bg-[#0B0807]/60' />
            <span className='w-1.5 h-1.5 bg-[#C9A14A] rotate-45' />
            <div className='w-10 h-px bg-[#0B0807]/60' />
          </div>
        </div>

        {/* Travel List */}
        <div className='flex flex-col gap-6'>
          {items.map((item) => (
            <div
              key={item.title}
              className='grid grid-cols-[44px_1fr] gap-4 items-start'
            >
              <div className='pt-0.5'>{item.icon}</div>
              <div>
                <h3
                  className={`text-xs font-semibold text-[#0B0807] uppercase ${
                    isKh ? 'font-khmer' : 'font-inter tracking-[0.25em]'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm text-[#7A6F5C] mt-1 leading-relaxed ${
                    isKh ? 'font-khmer' : 'font-cormorant'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Map Action Button */}
        <div className='mt-10 flex justify-center'>
          <a
            href={mapLocation}
            target='_blank'
            rel='noopener noreferrer'
            className={`px-10 py-3.5 bg-[#0B0807] text-[#F2EBDD] uppercase text-[11px] font-semibold transition-all hover:bg-[#2C1810] active:scale-95 shadow-md ${
              isKh ? 'font-khmer' : 'font-inter tracking-[0.3em]'
            }`}
          >
            {copy.travel.viewMap}
          </a>
        </div>
      </div>
    </section>
  );
};
