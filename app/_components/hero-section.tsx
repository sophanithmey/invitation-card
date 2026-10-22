'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  MapPin,
  Music,
  CheckCircle2,
  MessageCircleCode,
} from 'lucide-react';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';

export function HeroSection() {
  return (
    <section className='relative pt-32 pb-16 md:pt-44 md:pb-24 px-4 overflow-hidden'>
      {/* Background ambient lighting orbs */}
      <div className='absolute inset-0 bg-linear-to-b from-[#FFF9EF] via-[#FDFBF7] to-[#FDFBF7] -z-10' />
      <div className='absolute top-[-15%] left-[-10%] w-[65vw] h-[65vw] max-w-4xl rounded-full bg-[#D4AF37]/12 blur-[130px] -z-10' />
      <div className='absolute top-[30%] right-[-10%] w-[55vw] h-[55vw] max-w-2xl rounded-full bg-[#7A1624]/6 blur-[120px] -z-10' />

      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center'>
          {/* Left Column: Value Prop */}
          <div className='lg:col-span-7 text-center lg:text-left space-y-7'>
            <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#D4AF37]/35 shadow-sm text-[#7A1624] text-xs font-semibold uppercase'>
              <MessageCircleCode className='w-3.5 h-3.5 text-[#D4AF37]' />
              <span>Next-Gen Digital Wedding Platform</span>
            </div>

            <h1 className='font-khmer text-4xl sm:text-5xl md:text-6xl text-[#7A1624] leading-tight drop-shadow-sm'>
              សំបុត្រអញ្ជើញឌីជីថល
              <span className='block text-3xl sm:text-4xl md:text-5xl text-[#2C1810] font-normal mt-1'>
                ដ៏ល្អឥតខ្ចោះសម្រាប់ថ្ងៃមង្គល
              </span>
            </h1>

            <p className='text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed'>
              បង្កើនភាពថ្លៃថ្នូរ និងភាពងាយស្រួល ជាមួយលិខិតអញ្ជើញបែបទំនើប
              មានបទភ្លេងកំដរ ផែនទី Google Maps និងប្រព័ន្ធកត់ត្រាការចូលរួម
              (RSVP) ឆ្លាតវៃ
            </p>

            {/* CTAs */}
            <div className='flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-2'>
              <Link
                href='/admin/builder'
                className='w-full sm:w-auto px-8 py-3.5 bg-linear-to-r from-[#7A1624] to-[#5A0F1A] text-[#D4AF37] font-bold text-base rounded-full shadow-[0_8px_30px_rgba(122,22,36,0.25)] hover:shadow-[0_12px_40px_rgba(122,22,36,0.4)] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2'
              >
                <span>ចាប់ផ្តើមបង្កើតសំបុត្រ</span>
                <ArrowRight className='w-4 h-4' />
              </Link>

              <a
                href='#templates'
                className='w-full sm:w-auto px-7 py-3.5 bg-white text-[#7A1624] border border-[#7A1624]/20 font-bold text-base rounded-full shadow-sm hover:border-[#7A1624]/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2'
              >
                <span>មើលម៉ូតទាំងអស់</span>
              </a>
            </div>

            {/* Metrics Strip */}
            <div className='grid grid-cols-3 gap-4 pt-6 border-t border-[#D4AF37]/20 max-w-lg mx-auto lg:mx-0'>
              <div>
                <p className='text-2xl sm:text-3xl font-extrabold text-[#7A1624]'>
                  100+
                </p>
                <p className='text-xs text-gray-500 mt-0.5 font-khmer'>
                  គូស្វាមីភរិយា
                </p>
              </div>
              <div>
                <p className='text-2xl sm:text-3xl font-extrabold text-[#7A1624]'>
                  10,000+
                </p>
                <p className='text-xs text-gray-500 mt-0.5 font-khmer'>
                  សំបុត្របានផ្ញើ
                </p>
              </div>
              <div>
                <p className='text-2xl sm:text-3xl font-extrabold text-[#7A1624]'>
                  100%
                </p>
                <p className='text-xs text-gray-500 mt-0.5 font-khmer'>
                  ទូរស័ព្ទគាំទ្រ
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Realistic iPhone Device Mockup */}
          <div className='lg:col-span-5 flex justify-center relative'>
            {/* Ambient gold glow under phone */}
            <div className='absolute inset-0 bg-[#D4AF37]/20 rounded-full blur-3xl scale-90' />

            {/* Floating Badge 1: Audio */}
            <div className='absolute -left-4 sm:left-2 top-10 z-20 flex items-center gap-2 rounded-2xl border border-[#D4AF37]/30 bg-white/90 px-3.5 py-2 shadow-lg backdrop-blur-md animate-bounce [animation-duration:4s]'>
              <span className='flex h-7 w-7 items-center justify-center rounded-full bg-[#7A1624] text-[#D4AF37]'>
                <Music className='h-3.5 w-3.5' />
              </span>
              <div className='text-left'>
                <p className='text-[10px] font-bold text-[#7A1624]'>
                  Music Playing
                </p>
                <p className='text-[9px] text-gray-500'>
                  ភ្លេងមង្គលការពិរោះរណ្តំ
                </p>
              </div>
            </div>

            {/* Floating Badge 2: Google Maps */}
            <div className='absolute -right-4 sm:right-2 bottom-20 z-20 flex items-center gap-2 rounded-2xl border border-[#D4AF37]/30 bg-white/90 px-3.5 py-2 shadow-lg backdrop-blur-md animate-bounce [animation-duration:5s]'>
              <span className='flex h-7 w-7 items-center justify-center rounded-full bg-[#D4AF37] text-[#7A1624]'>
                <MapPin className='h-3.5 w-3.5' />
              </span>
              <div className='text-left'>
                <p className='text-[10px] font-bold text-[#7A1624]'>
                  1-Tap Navigation
                </p>
                <p className='text-[9px] text-gray-500'>ផែនទី Google Maps</p>
              </div>
            </div>

            {/* Floating Badge 3: RSVP */}
            <div className='absolute -left-3 sm:left-4 bottom-8 z-20 flex items-center gap-2 rounded-2xl border border-[#D4AF37]/30 bg-white/90 px-3.5 py-2 shadow-lg backdrop-blur-md'>
              <span className='flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white'>
                <CheckCircle2 className='h-3.5 w-3.5' />
              </span>
              <div className='text-left'>
                <p className='text-[10px] font-bold text-emerald-800'>
                  RSVP Confirmed
                </p>
                <p className='text-[9px] text-gray-500'>បានបញ្ជាក់ការចូលរួម</p>
              </div>
            </div>

            {/* Phone Bezel */}
            <div className='relative w-67.5 sm:w-72.5 aspect-9/19 rounded-[44px] border-8 border-[#1e1b18] bg-[#0F1833] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/20'>
              {/* Dynamic Island Notch */}
              <div className='absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1e1b18] rounded-full z-30' />

              {/* Phone Content: Celestial Card Preview */}
              <div className='relative h-full w-full flex flex-col items-center justify-between p-5 pt-12 text-center text-[#F8F7F3] overflow-hidden'>
                <Image
                  src='/templates/celestial-dream/cd-scene-open.png'
                  alt='Wedding invite preview'
                  fill
                  sizes='290px'
                  className='object-cover opacity-80'
                />
                <div className='absolute inset-0 bg-linear-to-b from-[#0F1833]/70 via-transparent to-[#0F1833]/90' />

                <div className='relative z-10 space-y-1.5'>
                  <p className='text-[9px] uppercase tracking-widest text-[#C9A45C] font-semibold'>
                    Wedding Invitation
                  </p>
                  <KhmerOrnament
                    variant='crest'
                    className='h-6 w-6 text-[#C9A45C] mx-auto'
                  />
                </div>

                <div className='relative z-10 space-y-2 my-auto'>
                  <h3 className='font-khmer text-2xl font-bold text-[#F8F7F3] drop-shadow-md'>
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
                    className='w-full py-2.5 rounded-full bg-linear-to-r from-[#C9A45C] to-[#E4C787] text-[#1A1405] text-[11px] font-bold shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer group'
                  >
                    <span>បើកមើលសំបុត្រ (Open)</span>
                    <ArrowRight className='w-3 h-3 group-hover:translate-x-0.5 transition-transform' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
