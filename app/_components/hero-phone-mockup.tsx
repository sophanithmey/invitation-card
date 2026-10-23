'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Music, CheckCircle2 } from 'lucide-react';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';

export function HeroPhoneMockup() {
  return (
    <div className='relative flex justify-center w-full max-w-sm sm:max-w-none'>
      {/* Ambient gold glow under phone */}
      <div className='absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-2xl md:blur-3xl scale-90 pointer-events-none' />

      {/* Floating Badge 1: Audio */}
      <div className='absolute -left-3 sm:left-2 top-10 z-20 flex items-center gap-2 rounded-2xl border border-[#D4AF37]/30 bg-white/95 px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-lg backdrop-blur-md animate-bounce [animation-duration:4s] will-change-transform pointer-events-none sm:pointer-events-auto'>
        <span className='flex h-7 w-7 items-center justify-center rounded-full bg-[#7A1624] text-[#D4AF37]'>
          <Music className='h-3.5 w-3.5' />
        </span>
        <div className='text-left'>
          <p className='text-[10px] font-bold text-[#7A1624]'>Music Playing</p>
          <p className='text-[9px] text-gray-500 font-khmer'>ភ្លេងមង្គលការពិរោះរណ្តំ</p>
        </div>
      </div>

      {/* Floating Badge 2: Google Maps */}
      <div className='absolute -right-3 sm:right-2 bottom-20 z-20 flex items-center gap-2 rounded-2xl border border-[#D4AF37]/30 bg-white/95 px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-lg backdrop-blur-md animate-bounce [animation-duration:5s] will-change-transform pointer-events-none sm:pointer-events-auto'>
        <span className='flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37] text-[#7A1624]'>
          <MapPin className='h-3.5 w-3.5' />
        </span>
        <div className='text-left'>
          <p className='text-[10px] font-bold text-[#7A1624]'>1-Tap Navigation</p>
          <p className='text-[9px] text-gray-500 font-khmer'>ផែនទី Google Maps</p>
        </div>
      </div>

      {/* Floating Badge 3: RSVP */}
      <div className='absolute -left-2 sm:left-4 bottom-8 z-20 flex items-center gap-2 rounded-2xl border border-[#D4AF37]/30 bg-white/95 px-3 py-1.5 sm:px-3.5 sm:py-2 shadow-lg backdrop-blur-md pointer-events-none sm:pointer-events-auto'>
        <span className='flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white'>
          <CheckCircle2 className='h-3.5 w-3.5' />
        </span>
        <div className='text-left'>
          <p className='text-[10px] font-bold text-emerald-800'>RSVP Confirmed</p>
          <p className='text-[9px] text-gray-500 font-khmer'>បានបញ្ជាក់ការចូលរួម</p>
        </div>
      </div>

      {/* Phone Bezel */}
      <div className='relative w-[265px] sm:w-[290px] aspect-9/19 rounded-[40px] sm:rounded-[44px] border-6 sm:border-8 border-[#1e1b18] bg-[#0F1833] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/20 transform-gpu'>
        {/* Dynamic Island Notch */}
        <div className='absolute top-3 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4.5 sm:h-5 bg-[#1e1b18] rounded-full z-30' />

        {/* Phone Content: Celestial Card Preview */}
        <div className='relative h-full w-full flex flex-col items-center justify-between p-4 sm:p-5 pt-11 sm:pt-12 text-center text-[#F8F7F3] overflow-hidden'>
          <Image
            src='/templates/celestial-dream/cd-scene-open-thumb.jpg'
            alt='Wedding invite preview'
            fill
            priority
            sizes='(max-width: 640px) 265px, 290px'
            className='object-cover opacity-80'
          />
          <div className='absolute inset-0 bg-linear-to-b from-[#0F1833]/70 via-transparent to-[#0F1833]/90' />

          <div className='relative z-10 space-y-1.5'>
            <p className='text-[9px] uppercase tracking-widest text-[#C9A45C] font-semibold'>
              Wedding Invitation
            </p>
            <KhmerOrnament
              variant='crest'
              className='h-5 w-5 sm:h-6 sm:w-6 text-[#C9A45C] mx-auto'
            />
          </div>

          <div className='relative z-10 space-y-1.5 my-auto'>
            <h3 className='font-khmer text-xl sm:text-2xl font-bold text-[#F8F7F3] drop-shadow-md'>
              ម៉ាកូ &amp; អានណា
            </h3>
            <p className='text-[10px] uppercase tracking-wider text-[#C9A45C] font-mono'>
              14 June 2026
            </p>
            <p className='text-[10px] text-white/80 font-khmer'>
              វិមានតារារាត្រី (Villa Rossella)
            </p>
          </div>

          <div className='relative z-10 w-full pb-2'>
            <Link
              href='/wedding/celestial-dream'
              className='w-full py-2 sm:py-2.5 rounded-full bg-linear-to-r from-[#C9A45C] to-[#E4C787] text-[#1A1405] text-[11px] font-bold shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer group'
            >
              <span>បើកមើលសំបុត្រ (Open)</span>
              <ArrowRight className='w-3 h-3 group-hover:translate-x-0.5 transition-transform' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
