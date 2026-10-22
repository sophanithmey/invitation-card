'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toKhmerDigits } from '@/lib/utils';

export interface TimeUnitProps {
  value: number;
  label: string;
  isKh?: boolean;
}

export const TimeUnit: React.FC<TimeUnitProps> = ({
  value,
  label,
  isKh = false,
}) => {
  const formattedValue = isKh
    ? toKhmerDigits(String(value).padStart(2, '0'))
    : value.toString().padStart(2, '0');

  return (
    <div className='flex flex-col items-center'>
      <div className='relative group'>
        {/* Background Glow Effect */}
        <div className='absolute -inset-2 sm:-inset-4 bg-linear-to-b from-[#D4AF37]/10 to-transparent rounded-4xl blur-xl sm:blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none' />

        <div className='relative w-16 h-20 sm:w-20 sm:h-24 md:w-28 md:h-32 bg-white/20 backdrop-blur-2xl rounded-2xl md:rounded-[1.25rem] border border-white/40 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.08)] flex items-center justify-center overflow-hidden'>
          {/* Animated Number Container */}
          <div className='relative w-full h-full flex items-center justify-center'>
            <AnimatePresence initial={false}>
              <motion.span
                key={formattedValue}
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -14, opacity: 0 }}
                transition={{
                  duration: 0.28,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`absolute inset-0 flex items-center justify-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B0000] tabular-nums select-none ${
                  isKh ? 'font-khmer-kantumruuy' : 'font-playfair'
                }`}
                style={{
                  fontFamily: isKh
                    ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                    : undefined,
                  willChange: 'transform, opacity',
                  transform: 'translateZ(0)',
                }}
              >
                {formattedValue}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Glass Reflection Overlay */}
          <div className='absolute inset-0 bg-linear-to-br from-white/25 via-transparent to-transparent pointer-events-none' />
          <div className='absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent pointer-events-none' />
        </div>
      </div>

      {/* Label */}
      <span className='text-[#D4AF37] uppercase text-[10px] sm:text-[11px] font-black mt-2.5 sm:mt-4 drop-shadow-sm font-khmer-kantumruuy select-none'>
        {label}
      </span>
    </div>
  );
};
