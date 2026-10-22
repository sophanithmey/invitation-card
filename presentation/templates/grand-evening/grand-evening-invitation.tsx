'use client';

import React from 'react';
import { GrandEvening } from './grand-evening';

interface GrandEveningInvitationProps {
  copy: GrandEvening;
  isKh?: boolean;
}

export const GrandEveningInvitation: React.FC<GrandEveningInvitationProps> = ({
  copy,
  isKh = false,
}) => {
  return (
    <section
      id='invitation'
      className='relative min-h-[85vh] bg-[#0B0807] text-[#F2EBDD] px-6 py-24 flex flex-col items-center justify-center text-center select-none'
    >
      <div className='max-w-md mx-auto flex flex-col items-center'>
        {/* Quote Line 1 */}
        <p
          className={`text-lg sm:text-xl md:text-2xl font-medium leading-relaxed uppercase ${
            isKh
              ? 'font-khmer text-base sm:text-lg normal-case leading-loose'
              : 'font-cormorant tracking-[0.16em]'
          }`}
        >
          {copy.invitation.line1}
        </p>

        {/* Gold Line with Diamond Accent */}
        <div className='flex items-center justify-center gap-3 my-8 sm:my-10'>
          <div className='w-10 sm:w-14 h-px bg-[#C9A14A] opacity-60' />
          <span className='text-[#C9A14A] text-xs'>◆</span>
          <div className='w-10 sm:w-14 h-px bg-[#C9A14A] opacity-60' />
        </div>

        {/* Quote Line 2 */}
        <p
          className={`text-lg sm:text-xl md:text-2xl font-medium leading-relaxed uppercase ${
            isKh
              ? 'font-khmer text-base sm:text-lg normal-case leading-loose'
              : 'font-cormorant tracking-[0.16em]'
          }`}
        >
          {copy.invitation.line2}
        </p>
      </div>
    </section>
  );
};
