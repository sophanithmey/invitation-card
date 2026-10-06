'use client';

import React from 'react';
import Image from 'next/image';
import { Calendar, MapPin } from 'lucide-react';
import { Wedding } from '@/domain/entities/wedding';
import { formatKhmerDate } from '@/use-cases/format-khmer-date';
import { KbachCrest, KbachCorner, KbachWing } from './etheap-ornaments';

interface EtheapHeroProps {
  wedding: Wedding;
}

export const EtheapHero: React.FC<EtheapHeroProps> = ({ wedding }) => {
  return (
    <section className='relative px-4 pt-6 pb-2 text-center'>
      {/* Outer arched parchment card */}
      <div className='max-w-md mx-auto relative bg-[#FFFCF7] rounded-t-[3.5rem] rounded-b-3xl border-2 border-[#EBC070]/70 shadow-[0_10px_35px_rgba(201,140,8,0.12)] p-6 sm:p-8 overflow-hidden'>
        {/* Subtle decorative corners */}
        <KbachCorner className='absolute top-2 left-2 w-8 h-8 text-[#EBC070]/50' />
        <KbachCorner
          className='absolute top-2 right-2 w-8 h-8 text-[#EBC070]/50'
          flip
        />

        {/* Royal Flame Pediment Crest at Apex */}
        <div className='relative z-10 flex flex-col items-center mb-2'>
          <KbachCrest className='w-12 h-14 text-[#C98C08] drop-shadow-xs' />
          <span className='font-khmer-moul text-xs sm:text-sm text-[#7A1624] tracking-wider uppercase mt-1'>
            សិរីសួស្តី អាពាហ៍ពិពាហ៍
          </span>
          <p className='text-[10px] sm:text-[11px] text-[#84623A] font-semibold tracking-[0.25em] uppercase mt-0.5'>
            Wedding Invitation
          </p>
        </div>

        {/* Arched Couple Photo Frame with Golden Filigree */}
        <div className='relative w-48 h-64 sm:w-56 sm:h-72 mx-auto mb-4 rounded-t-full rounded-b-2xl overflow-hidden border-3 border-[#EBC070] shadow-md'>
          <Image
            src={wedding.cover_photo || wedding.groom_photo}
            alt={`${wedding.groom_name_kh} & ${wedding.bride_name_kh}`}
            fill
            priority
            className='object-cover transition-transform duration-700 hover:scale-105'
            sizes='(max-width: 640px) 220px, 260px'
          />
          <div className='absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent pointer-events-none' />
        </div>

        {/* Couple Names in Traditional Calligraphy */}
        <div className='space-y-1 mb-3'>
          <h1 className='font-khmer-moul text-2xl sm:text-3xl text-[#7A1624] drop-shadow-sm leading-relaxed'>
            {wedding.groom_name_kh} <span className='text-[#C98C08]'>&</span>{' '}
            {wedding.bride_name_kh}
          </h1>
          <p className='font-serif italic text-base sm:text-lg text-[#84623A]'>
            {wedding.groom_name} & {wedding.bride_name}
          </p>
        </div>

        <KbachWing className='w-24 h-4 text-[#C98C08]/80 mb-3' />

        {/* Auspicious Solar & Lunar Date Pill */}
        <div className='inline-flex items-center gap-2 bg-[#FAF3E0] px-4 py-2 rounded-full border border-[#EBC070]/60 text-xs text-[#84623A] shadow-xs'>
          <Calendar className='w-3.5 h-3.5 text-[#C98C08]' />
          <span className='font-khmer-kantumruuy font-medium'>
            {formatKhmerDate(wedding.wedding_date)}
          </span>
        </div>

        {wedding.venue && (
          <div className='mt-3 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-[#84623A]/85'>
            <MapPin className='w-3.5 h-3.5 text-[#C98C08]' />
            <span className='font-khmer-kantumruuy line-clamp-1'>
              {wedding.venue}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};
