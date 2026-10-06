'use client';

import React from 'react';
import { MapPin, Sparkles, Check, Copy } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export interface VenueBannerProps {
  copied: boolean;
  onCopyAddress: () => void;
}

export function VenueBanner({ copied, onCopyAddress }: VenueBannerProps) {
  const { t, language } = useLanguage();
  const isKh = language === 'kh';

  return (
    <div className='bg-linear-to-br from-[#8B0000] via-[#7D0000] to-[#5C0000] text-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-[#D4AF37]/40 relative overflow-hidden'>
      <div className='absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none' />

      <div className='relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
        <div className='flex items-start gap-3.5'>
          <div className='w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/15 border border-[#FFF2B2]/60 flex items-center justify-center text-[#FFF2B2] shrink-0 mt-0.5 shadow-xs'>
            <MapPin className='w-5 h-5 text-[#FFF2B2]' />
          </div>
          <div>
            <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-[#FFF2B2] text-[11px] font-semibold mb-1'>
              <Sparkles className='w-3 h-3 text-[#FFF2B2]' />
              <span>{t.location.venueTag}</span>
            </div>
            <h3
              className={`text-base sm:text-xl font-bold text-white ${
                isKh ? 'font-khmer-moul leading-[1.6]' : ''
              }`}
              style={{
                fontFamily: isKh ? "'Moulpali', cursive, serif" : undefined,
              }}
            >
              {t.location.venueName}
            </h3>
            <p
              className={`text-xs sm:text-sm text-white/85 mt-1 leading-relaxed max-w-xl ${
                isKh ? 'font-khmer-kantumruuy leading-[1.7]' : ''
              }`}
              style={{
                fontFamily: isKh
                  ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                  : undefined,
              }}
            >
              {t.location.address}
            </p>
          </div>
        </div>

        <button
          type='button'
          onClick={onCopyAddress}
          className='w-full sm:w-auto justify-center shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/15 hover:bg-white/25 active:scale-95 text-white text-xs font-medium border border-white/25 transition-all cursor-pointer'
        >
          {copied ? (
            <>
              <Check className='w-3.5 h-3.5 text-[#FFF2B2]' />
              <span className='text-[#FFF2B2] font-semibold'>
                {t.location.copiedToast}
              </span>
            </>
          ) : (
            <>
              <Copy className='w-3.5 h-3.5' />
              <span>{t.location.copyButton}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
