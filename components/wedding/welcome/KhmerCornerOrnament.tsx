import React from 'react';
import { cn } from '@/lib/utils';

export function KhmerCornerOrnament({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        'w-7 h-7 sm:w-9 sm:h-9 text-[#D4AF37] pointer-events-none',
        className,
      )}
      aria-hidden='true'
    >
      <path
        d='M2 42 V12 C2 6.477 6.477 2 12 2 H42'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinecap='round'
      />
      <path
        d='M6 38 V14 C6 9.582 9.582 6 14 6 H38'
        stroke='currentColor'
        strokeWidth='1'
        strokeOpacity='0.5'
        strokeLinecap='round'
      />
      <path
        d='M12 26 C12 18.268 18.268 12 26 12'
        stroke='currentColor'
        strokeWidth='1'
        strokeOpacity='0.4'
      />
      <circle cx='13' cy='13' r='2.2' fill='currentColor' />
      <circle cx='2' cy='42' r='1.5' fill='currentColor' />
      <circle cx='42' cy='2' r='1.5' fill='currentColor' />
    </svg>
  );
}
