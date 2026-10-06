'use client';

import React from 'react';
import Image from 'next/image';
import { Wedding } from '@/domain/entities/wedding';
import { KbachRosette, KbachWing, KbachCorner } from './etheap-ornaments';

interface EtheapCoupleProps {
  wedding: Wedding;
}

export const EtheapCouple: React.FC<EtheapCoupleProps> = ({ wedding }) => {
  return (
    <section className='relative px-4 py-4 text-center'>
      <div className='max-w-md mx-auto bg-[#FFFCF7] rounded-3xl border border-[#EBC070]/60 p-6 sm:p-7 shadow-[0_6px_25px_rgba(201,140,8,0.08)] relative overflow-hidden'>
        <KbachCorner className='absolute top-2 left-2 w-7 h-7 text-[#EBC070]/40' />
        <KbachCorner
          className='absolute top-2 right-2 w-7 h-7 text-[#EBC070]/40'
          flip
        />

        <div className='space-y-1 mb-6 relative z-10'>
          <KbachWing className='w-24 h-4 text-[#C98C08]/80 mb-1' />
          <h2 className='font-khmer-moul text-sm sm:text-base text-[#7A1624] tracking-wide'>
            គូស្វាមីភរិយាថ្មី
          </h2>
        </div>

        <div className='flex items-center justify-around gap-2 relative z-10'>
          {/* Groom Profile */}
          <div className='flex flex-col items-center space-y-2 flex-1'>
            <div className='relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-linear-to-tr from-[#C98C08] via-[#EBC070] to-[#C98C08] shadow-md'>
              <div className='relative w-full h-full rounded-full overflow-hidden border-2 border-white'>
                <Image
                  src={wedding.groom_photo}
                  alt={wedding.groom_name_kh}
                  fill
                  className='object-cover'
                  sizes='120px'
                />
              </div>
            </div>
            <span className='text-[11px] font-semibold text-[#84623A] uppercase tracking-wider'>
              កូនប្រុស (Groom)
            </span>
            <h3 className='font-khmer-moul text-sm sm:text-base text-[#7A1624]'>
              {wedding.groom_name_kh}
            </h3>
            <p className='font-serif italic text-xs text-[#84623A]'>
              {wedding.groom_name}
            </p>
          </div>

          {/* Center Traditional Khmer Phka Chan Rosette Emblem */}
          <div className='flex flex-col items-center justify-center px-1'>
            <div className='w-10 h-10 rounded-full bg-[#FAF3E0] border border-[#EBC070] flex items-center justify-center shadow-xs'>
              <KbachRosette className='w-6 h-6 text-[#C98C08]' />
            </div>
          </div>

          {/* Bride Profile */}
          <div className='flex flex-col items-center space-y-2 flex-1'>
            <div className='relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-linear-to-tr from-[#C98C08] via-[#EBC070] to-[#C98C08] shadow-md'>
              <div className='relative w-full h-full rounded-full overflow-hidden border-2 border-white'>
                <Image
                  src={wedding.bride_photo}
                  alt={wedding.bride_name_kh}
                  fill
                  className='object-cover'
                  sizes='120px'
                />
              </div>
            </div>
            <span className='text-[11px] font-semibold text-[#84623A] uppercase tracking-wider'>
              កូនស្រី (Bride)
            </span>
            <h3 className='font-khmer-moul text-sm sm:text-base text-[#7A1624]'>
              {wedding.bride_name_kh}
            </h3>
            <p className='font-serif italic text-xs text-[#84623A]'>
              {wedding.bride_name}
            </p>
          </div>
        </div>

        {wedding.story && (
          <div className='mt-6 pt-5 border-t border-[#EBC070]/30 text-xs sm:text-[13px] font-khmer-kantumruuy text-[#4A351C] italic leading-relaxed relative z-10'>
            &ldquo;{wedding.story}&rdquo;
          </div>
        )}
      </div>
    </section>
  );
};
