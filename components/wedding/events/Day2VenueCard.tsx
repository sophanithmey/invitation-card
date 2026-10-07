'use client';

import React from 'react';
import { MapPin, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export function Day2VenueCard() {
  const { t, language } = useLanguage();
  const isKh = language === 'kh';

  return (
    <div className='relative z-10 mt-8 pt-6 border-t border-[#D4AF37]/30'>
      <div className='bg-linear-to-br from-[#8B0000] via-[#780000] to-[#5C0000] text-white rounded-2xl p-4 sm:p-6 shadow-md border border-[#D4AF37]/40 relative overflow-hidden'>
        <div className='absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none' />

        <div className='relative z-10 flex items-start gap-3.5 sm:gap-4'>
          <div className='w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-[#FFF2B2]/60 flex items-center justify-center text-[#FFF2B2] shrink-0 mt-0.5 shadow-xs'>
            <MapPin className='w-5 h-5 text-[#FFF2B2]' />
          </div>
          <div className='flex-1'>
            <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-[#FFF2B2] text-[11px] font-semibold mb-1.5'>
              <Sparkles className='w-3 h-3 text-[#FFF2B2]' />
              <span>{t.events.day2.location.title}</span>
            </div>
            <h4
              className={`text-base sm:text-lg font-bold text-white ${
                isKh
                  ? 'font-khmer-moul text-base leading-[1.6] tracking-normal'
                  : ''
              }`}
              style={{
                fontFamily: isKh
                  ? "'Moulpali', 'Moul', cursive, serif"
                  : undefined,
              }}
            >
              {t.events.day2.location.name}
            </h4>
            <p
              className={`text-xs sm:text-sm text-white/85 mt-1 leading-relaxed ${
                isKh ? 'font-khmer-kantumruuy leading-[1.7]' : ''
              }`}
              style={{
                fontFamily: isKh
                  ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                  : undefined,
              }}
            >
              {t.events.day2.location.detail}
            </p>
          </div>
        </div>

        <div className='relative z-10 mt-4 pt-3.5 border-t border-white/15 text-center'>
          <p
            className={`text-xs sm:text-sm italic text-[#FFF2B2] font-medium ${
              isKh ? 'font-khmer-kantumruuy leading-relaxed' : ''
            }`}
            style={{
              fontFamily: isKh
                ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                : undefined,
            }}
          >
            {t.events.day2.quote}
          </p>
        </div>
      </div>
    </div>
  );
}
