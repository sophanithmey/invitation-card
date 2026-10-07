'use client';

import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { KbachWing } from './etheap-ornaments';
import { toKhmerDigits } from '@/lib/utils';

interface EtheapCountdownProps {
  targetDateStr: string;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const EtheapCountdown: React.FC<EtheapCountdownProps> = ({
  targetDateStr,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetTime = new Date(targetDateStr).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = Math.max(0, targetTime - now);

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDateStr]);

  const units = [
    { labelKh: 'ថ្ងៃ', labelEn: 'Days', value: timeLeft.days },
    { labelKh: 'ម៉ោង', labelEn: 'Hours', value: timeLeft.hours },
    { labelKh: 'នាទី', labelEn: 'Mins', value: timeLeft.minutes },
    { labelKh: 'វិនាទី', labelEn: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <section className='relative px-4 py-4 text-center'>
      <div className='max-w-md mx-auto bg-[#FFFCF7] rounded-3xl border border-[#EBC070]/60 p-6 sm:p-7 shadow-[0_6px_25px_rgba(201,140,8,0.08)]'>
        <div className='inline-flex items-center gap-2 mb-2 text-[#C98C08]'>
          <Clock className='w-4 h-4' />
          <span className='text-[11px] font-semibold tracking-[0.2em] uppercase'>
            Save The Date
          </span>
        </div>

        <div className='space-y-1 mb-5'>
          <KbachWing className='w-20 h-3.5 text-[#C98C08]/80 mb-1' />
          <h2 className='font-khmer-moul text-sm sm:text-base text-[#7A1624]'>
            រាប់ថយក្រោយឆ្ពោះទៅកាន់ថ្ងៃពិសេស
          </h2>
        </div>

        {/* 4 Counter Pills */}
        <div className='grid grid-cols-4 gap-2 sm:gap-3'>
          {units.map((unit, idx) => (
            <div
              key={idx}
              className='bg-linear-to-b from-[#FAF4E6] to-[#FFFDF9] rounded-2xl p-2.5 sm:p-3.5 border-2 border-[#EBC070]/70 shadow-xs flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105'
            >
              <span className='font-khmer-kantumruuy font-bold text-xl sm:text-2xl text-[#7A1624] leading-tight tracking-normal'>
                {toKhmerDigits(String(unit.value).padStart(2, '0'))}
              </span>
              <span className='font-khmer-kantumruuy font-semibold text-[11px] sm:text-xs text-[#C98C08] mt-1'>
                {unit.labelKh}
              </span>
              <span className='text-[9px] text-[#84623A]/70 uppercase tracking-wider'>
                {unit.labelEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
