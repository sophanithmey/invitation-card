'use client';

import React, { useEffect, useState } from 'react';
import { CelestialCopy } from './celestial-copy';

interface CelestialCountdownProps {
  weddingDateStr: string;
  copy: CelestialCopy;
  isKh: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CelestialCountdown: React.FC<CelestialCountdownProps> = ({
  weddingDateStr,
  copy,
  isKh,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(weddingDateStr).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [weddingDateStr]);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section
      id='cd-countdown'
      aria-label='Countdown'
      className='relative w-full bg-linear-to-b from-[#0F1833] to-[#18254A] px-4 py-16 sm:py-24'
    >
      <div className='mx-auto flex w-full max-w-2xl flex-col items-center gap-8'>
        {/* Header */}
        <header className='flex flex-col items-center text-center'>
          <p
            className={`mb-2 text-[0.65rem] uppercase text-[#C9A45C] ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.34em]'
            }`}
          >
            {copy.countdownKicker}
          </p>

          <h2
            className={`text-[clamp(1.5rem,6vw,2.2rem)] leading-snug text-[#F8F7F3] ${
              isKh ? 'font-khmer-moul' : 'cd-font-display tracking-[0.04em]'
            }`}
          >
            {copy.countdownTitle}
          </h2>

          {/* Golden star divider */}
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
        </header>

        {/* 4 Counter Cards */}
        <div className='grid w-full max-w-md grid-cols-4 gap-2.5 sm:gap-4'>
          {[
            { label: copy.days, value: pad(timeLeft.days) },
            { label: copy.hours, value: pad(timeLeft.hours) },
            { label: copy.minutes, value: pad(timeLeft.minutes) },
            { label: copy.seconds, value: pad(timeLeft.seconds) },
          ].map((item, idx) => (
            <div
              key={idx}
              className='flex flex-col items-center gap-2 rounded-2xl border border-[#C9A45C]/35 bg-[#18254A]/40 px-2 py-5 shadow-lg backdrop-blur-sm'
            >
              <span
                className={`text-[clamp(1.2rem,5vw,2rem)] leading-none tabular-nums text-[#F8F7F3] ${
                  isKh ? 'font-khmer-moul' : 'cd-font-display'
                }`}
              >
                {item.value}
              </span>
              <span
                className={`text-[0.52rem] uppercase text-[#C9A45C] ${
                  isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.2em]'
                }`}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
