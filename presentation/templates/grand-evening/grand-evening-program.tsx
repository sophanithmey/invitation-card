'use client';

import React from 'react';
import { WeddingEvent } from '@/domain/entities/event';
import { GrandEvening } from './grand-evening';

interface GrandEveningProgramProps {
  events?: WeddingEvent[];
  copy: GrandEvening;
  isKh?: boolean;
}

export const GrandEveningProgram: React.FC<GrandEveningProgramProps> = ({
  events,
  copy,
  isKh = false,
}) => {
  // Fallback program items if not provided or to match standard 3 timeline items
  const defaultEvents = [
    {
      num: '01',
      title: isKh ? 'ពិធីមង្គលការ' : 'Ceremony',
      time: '4:00 PM',
      place: isKh ? 'សួនច្បារវីឡា' : 'Villa Rosella, Garden',
    },
    {
      num: '02',
      title: isKh ? 'ពិសារភេសជ្ជៈ & សម្រាកកម្សាន្ត' : 'Aperitif',
      time: '5:30 PM',
      place: isKh ? 'បរិវេណដើមអូលីវ' : 'Olive Grove',
    },
    {
      num: '03',
      title: isKh ? 'ពិសារភោជនាហារ & រាំកម្សាន្ត' : 'Dinner & dancing',
      time: '7:30 PM',
      place: isKh ? 'សាលមហោស្រពធំ' : 'Main Hall',
    },
  ];

  const items =
    events && events.length > 0
      ? events.map((ev, i) => ({
          num: (i + 1).toString().padStart(2, '0'),
          title: isKh ? ev.event_name_kh || ev.event_name : ev.event_name,
          time: ev.start_time,
          place: ev.venue || (isKh ? 'បរិវេណពិធី' : 'Main Venue'),
        }))
      : defaultEvents;

  return (
    <section
      id='program'
      className='relative bg-[#F2EBDD] bg-cover bg-center py-20 sm:py-28 px-4 sm:px-6 select-none overflow-hidden'
      style={{
        backgroundImage: `url('/templates/grand-evening/program-bg.png')`,
      }}
    >
      {/* Semi-transparent Tint */}
      <div className='absolute inset-0 bg-[#F2EBDD]/85 pointer-events-none' />

      <div className='relative z-10 max-w-xl mx-auto flex flex-col items-center'>
        {/* Monogram Badge */}
        <div className='w-14 h-14 border border-[#0B0807] rounded-full flex items-center justify-center font-cormorant text-[#0B0807] text-lg'>
          <span>A</span>
          <span className='mx-1 opacity-50'>/</span>
          <span>M</span>
        </div>

        {/* Diamond Accent */}
        <div className='text-[#C9A14A] text-xs mt-3.5'>◆</div>

        {/* Program Title */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0807] text-center mt-5 leading-tight uppercase ${
            isKh ? 'font-khmer normal-case' : 'font-cormorant tracking-[0.04em]'
          }`}
        >
          {isKh ? (
            copy.program.title
          ) : (
            <>
              THE
              <br />
              EVENING
              <br />
              PROGRAM
            </>
          )}
        </h2>

        {/* Timeline Container */}
        <div className='relative w-full max-w-md mt-12 sm:mt-14'>
          {/* Vertical Center Gold Line */}
          <div className='absolute left-1/2 top-4 bottom-4 w-px bg-[#C9A14A]/60 -translate-x-1/2' />

          {/* Timeline Nodes */}
          <div className='flex flex-col gap-6 sm:gap-8'>
            {items.map((item) => (
              <div
                key={item.num}
                className='grid grid-cols-[1fr_24px_1fr] items-center gap-4 sm:gap-6 py-2'
              >
                {/* Big Number Left */}
                <div className='text-right font-cormorant text-3xl sm:text-4xl text-[#C9A14A] font-normal leading-none'>
                  {item.num}
                </div>

                {/* Center Node Dot */}
                <div className='flex justify-center'>
                  <span className='w-2.5 h-2.5 rounded-full bg-[#C9A14A] ring-4 ring-[#F2EBDD]' />
                </div>

                {/* Event Details Right */}
                <div className='text-left'>
                  <h3
                    className={`text-xs sm:text-sm font-semibold text-[#0B0807] uppercase ${
                      isKh ? 'font-khmer' : 'font-inter tracking-[0.2em]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div className='text-sm sm:text-base text-[#C9A14A] font-cormorant mt-1'>
                    {item.time}
                  </div>
                  <div className='text-xs text-[#7A6F5C] font-cormorant italic'>
                    {item.place}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
