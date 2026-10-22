'use client';

import React from 'react';
import Image from 'next/image';
import { GrandEvening } from './grand-evening';

interface GrandEveningVenueActsProps {
  copy: GrandEvening;
  isKh?: boolean;
}

export const GrandEveningVenueActs: React.FC<GrandEveningVenueActsProps> = ({
  copy,
  isKh = false,
}) => {
  const acts = [
    {
      act: copy.venue.act1,
      title: copy.venue.act1Title,
      time: copy.venue.act1Time,
      image: '/templates/grand-evening/act-ceremony.jpg',
    },
    {
      act: copy.venue.act2,
      title: copy.venue.act2Title,
      time: copy.venue.act2Time,
      image: '/templates/grand-evening/act-dinner.jpg',
    },
    {
      act: copy.venue.act3,
      title: copy.venue.act3Title,
      time: copy.venue.act3Time,
      image: '/templates/grand-evening/act-dancing.jpg',
    },
  ];

  return (
    <section
      id='venue'
      className='relative bg-[#F2EBDD] text-[#0B0807] py-20 sm:py-28 px-4 sm:px-6 select-none'
    >
      <div className='max-w-3xl mx-auto flex flex-col items-center text-center'>
        {/* Monogram Badge */}
        <div className='w-14 h-14 border border-[#0B0807] rounded-full flex items-center justify-center font-cormorant text-[#0B0807] text-lg'>
          <span>A</span>
          <span className='mx-1 opacity-50'>/</span>
          <span>M</span>
        </div>

        {/* Diamond Accent */}
        <div className='text-[#C9A14A] text-xs mt-3.5'>◆</div>

        {/* Section Heading */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0807] mt-4 uppercase ${
            isKh ? 'font-khmer normal-case' : 'font-cormorant tracking-[0.06em]'
          }`}
        >
          {copy.venue.title}
        </h2>

        {/* Italic Subtitle */}
        <p
          className={`text-sm sm:text-base text-[#B8923E] mt-2.5 ${
            isKh ? 'font-khmer' : 'font-cormorant italic tracking-[0.02em]'
          }`}
        >
          {copy.venue.subtitle}
        </p>

        {/* Line with Diamond */}
        <div className='flex items-center justify-center gap-2.5 mt-5 mb-10 sm:mb-12'>
          <div className='w-16 sm:w-20 h-px bg-[#C9A14A]' />
          <span className='text-[#C9A14A] text-[9px]'>◆</span>
          <div className='w-16 sm:w-20 h-px bg-[#C9A14A]' />
        </div>

        {/* 3 Arched Cards Grid */}
        <div className='grid grid-cols-3 gap-2.5 sm:gap-5 w-full'>
          {acts.map((item) => (
            <div key={item.act} className='flex flex-col items-stretch'>
              {/* Arched Window Image */}
              <div className='relative w-full aspect-3/5 opera-arch-card overflow-hidden border border-[#C9A14A]/40 bg-[#E7DECC] shadow-xs'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover hover:scale-105 transition-transform duration-700'
                  sizes='(max-width: 768px) 33vw, 240px'
                />
              </div>

              {/* Text Card Box */}
              <div className='mt-2.5 p-2 sm:p-3.5 border border-[#C9A14A]/40 bg-[#F2EBDD] text-center flex flex-col items-center justify-between min-h-27.5 sm:min-h-33.75'>
                <span
                  className={`text-[8px] sm:text-[9px] uppercase text-[#7A6F5C] ${
                    isKh ? 'font-khmer' : 'font-inter tracking-[0.25em]'
                  }`}
                >
                  {item.act}
                </span>

                <h3
                  className={`text-xs sm:text-sm md:text-base font-medium text-[#0B0807] leading-tight my-1 uppercase ${
                    isKh ? 'font-khmer normal-case' : 'font-cormorant'
                  }`}
                >
                  {item.title}
                </h3>

                {/* Divider Line */}
                <div className='flex items-center gap-1.5 text-[#C9A14A] my-1'>
                  <span className='w-3 h-px bg-[#C9A14A]' />
                  <span className='text-[6px]'>◆</span>
                  <span className='w-3 h-px bg-[#C9A14A]' />
                </div>

                <span
                  className={`text-[10px] sm:text-xs text-[#7A6F5C] ${
                    isKh ? 'font-khmer' : 'font-cormorant italic'
                  }`}
                >
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line Accent */}
        <div className='flex items-center justify-center gap-2.5 mt-10 sm:mt-12'>
          <div className='w-20 sm:w-28 h-px bg-[#C9A14A]' />
          <span className='text-[#C9A14A] text-[9px]'>◆</span>
          <div className='w-20 sm:w-28 h-px bg-[#C9A14A]' />
        </div>
      </div>
    </section>
  );
};
