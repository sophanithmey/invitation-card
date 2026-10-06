'use client';

import React from 'react';
import { Calendar, MapPin, ChevronDown } from 'lucide-react';
import { Wedding } from '@/domain/entities/wedding';
import { formatKhmerDate } from '@/use-cases/format-khmer-date';
import { useLanguage } from '@/presentation/context/language-context';
import { KhmerOrnament } from '../ornaments/khmer-ornament';

interface HeroSectionProps {
  wedding: Wedding;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ wedding }) => {
  const { lang } = useLanguage();

  return (
    <section className='relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-16 overflow-hidden'>
      {/* Full Background Cover */}
      {wedding.cover_photo && (
        <div className='absolute inset-0 -z-10 overflow-hidden bg-[#111]'>
          {/* Background image with smooth slow-zoom on hover */}
          <div
            className='w-full h-full bg-cover bg-position-[50%_25%] bg-no-repeat transition-transform duration-[30s] ease-out hover:scale-110 opacity-90'
            style={{ backgroundImage: `url(${wedding.cover_photo})` }}
          />
          {/* Cinematic vignette overlay (darker edges) */}
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]' />
          {/* Linear gradient for ensuring text at top/bottom is readable */}
          <div className='absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80' />
        </div>
      )}

      {/* Full Width No Background */}
      <div className='relative w-full max-w-7xl mx-auto px-4 transition-transform duration-700 ease-out hover:scale-[1.01]'>
        <div className='flex justify-center mb-3'>
          <KhmerOrnament
            variant='crest'
            className='animate-float-slow text-[#D4AF37]'
          />
        </div>

        <p className='text-[10px] uppercase tracking-[0.3em] font-semibold text-[#D4AF37] mb-6 drop-shadow-md'>
          {lang === 'kh' ? 'ថ្ងៃមង្គលជ័យ' : 'WE ARE GETTING MARRIED'}
        </p>

        {/* Names */}
        <div className='my-8 space-y-2'>
          <h1 className='text-5xl md:text-7xl font-bold text-white font-cursive leading-tight drop-shadow-2xl'>
            {wedding.groom_name} & {wedding.bride_name}
          </h1>
          <h2 className='font-khmer-moul text-xl md:text-3xl text-white/95 leading-relaxed drop-shadow-xl pt-2'>
            {wedding.groom_name_kh} & {wedding.bride_name_kh}
          </h2>
        </div>

        <KhmerOrnament variant='divider' className='opacity-90' />

        {/* Date & Location Badges */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 text-xs md:text-sm text-white'>
          <div className='flex items-center gap-2 px-5 py-3 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/50 transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37] hover:-translate-y-0.5'>
            <Calendar className='w-4 h-4 text-[#D4AF37]' />
            <span className='font-medium tracking-wide'>
              {lang === 'kh'
                ? formatKhmerDate(wedding.wedding_date)
                : new Date(wedding.wedding_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
            </span>
          </div>
          <div className='flex items-center gap-2 px-5 py-3 rounded-full bg-black/40 backdrop-blur-md border border-[#D4AF37]/50 max-w-xs truncate transition-all duration-300 hover:shadow-lg hover:border-[#D4AF37] hover:-translate-y-0.5'>
            <MapPin className='w-4 h-4 text-[#D4AF37] flex-shrink-0' />
            <span className='truncate tracking-wide'>{wedding.venue}</span>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60 flex flex-col items-center gap-1'>
        <span className='text-[10px] uppercase tracking-widest text-[#D4AF37] font-semibold'>
          {lang === 'kh' ? 'អូសចុះក្រោម' : 'Scroll'}
        </span>
        <ChevronDown className='w-5 h-5 text-[#D4AF37]' />
      </div>
    </section>
  );
};
