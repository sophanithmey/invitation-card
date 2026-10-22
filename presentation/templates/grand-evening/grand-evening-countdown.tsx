'use client';

import React, { useState, useEffect } from 'react';
import { GrandEvening } from './grand-evening';

interface GrandEveningCountdownProps {
  weddingDateStr: string;
  copy: GrandEvening;
  isKh?: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const GrandEveningCountdown: React.FC<GrandEveningCountdownProps> = ({
  weddingDateStr,
  copy,
  isKh = false,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const target = new Date(weddingDateStr).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [weddingDateStr]);

  const pad = (n: number) => n.toString().padStart(2, '0');

  const units = [
    { value: pad(timeLeft.days), label: copy.countdown.days },
    { value: pad(timeLeft.hours), label: copy.countdown.hours },
    { value: pad(timeLeft.minutes), label: copy.countdown.minutes },
    { value: pad(timeLeft.seconds), label: copy.countdown.seconds },
  ];

  return (
    <section
      id='countdown'
      className='relative bg-[#0B0807] bg-cover bg-center text-[#F2EBDD] py-24 sm:py-32 px-6 overflow-hidden select-none'
      style={{
        backgroundImage: `url('/templates/grand-evening/countdown-bg.jpg')`,
      }}
    >
      {/* Radial Dark Vignette Overlay */}
      <div
        aria-hidden='true'
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at 50% 30%, transparent 0%, rgba(11,8,7,0.85) 65%, #0B0807 100%)',
        }}
      />

      <div className='relative z-10 max-w-lg mx-auto flex flex-col items-center text-center'>
        {/* Title */}
        <h2
          className={`text-xs sm:text-sm uppercase text-[#F2EBDD] ${
            isKh ? 'font-khmer' : 'font-inter tracking-[0.35em]'
          }`}
        >
          {copy.countdown.title}
        </h2>

        {/* Gold Diamond Line */}
        <div className='flex items-center justify-center gap-3 mt-4 mb-8'>
          <div className='w-12 h-px bg-[#C9A14A] opacity-60' />
          <span className='text-[#C9A14A] text-xs'>◆</span>
          <div className='w-12 h-px bg-[#C9A14A] opacity-60' />
        </div>

        {/* Vertical Countdown Numbers */}
        <div className='flex flex-col items-center gap-4 sm:gap-6 mt-4 w-full'>
          {units.map((unit, index) => (
            <React.Fragment key={unit.label}>
              <div className='flex flex-col items-center'>
                <span className='font-cormorant font-medium text-6xl sm:text-7xl md:text-8xl text-[#D9C7A3] leading-none'>
                  {unit.value}
                </span>
                <span
                  className={`text-[11px] uppercase text-[#F2EBDD]/80 mt-2 ${
                    isKh ? 'font-khmer' : 'font-inter tracking-[0.35em]'
                  }`}
                >
                  {unit.label}
                </span>
              </div>

              {/* Diamond Divider Between Units */}
              {index < units.length - 1 && (
                <span className='text-[#C9A14A] text-xs opacity-75 my-1'>◆</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
