'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircleCode } from 'lucide-react';
import { HeroPhoneMockup } from './hero-phone-mockup';

export function HeroSection() {
  return (
    <section className='relative pt-32 pb-16 md:pt-44 md:pb-24 px-4 overflow-hidden'>
      {/* Background ambient lighting orbs - Optimized for mobile GPU */}
      <div className='absolute inset-0 bg-linear-to-b from-[#FFF9EF] via-[#FDFBF7] to-[#FDFBF7] -z-10 pointer-events-none' />
      <div className='absolute top-[-15%] left-[-10%] w-[65vw] h-[65vw] max-w-4xl rounded-full bg-[#D4AF37]/12 blur-[50px] md:blur-[120px] -z-10 pointer-events-none' />
      <div className='absolute top-[30%] right-[-10%] w-[55vw] h-[55vw] max-w-2xl rounded-full bg-[#7A1624]/6 blur-[45px] md:blur-[110px] -z-10 pointer-events-none' />

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

            <p className='text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-khmer'>
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

          {/* Right Column: Decomposed Phone Mockup */}
          <div className='lg:col-span-5 flex justify-center'>
            <HeroPhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
