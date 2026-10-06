'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../LanguageContext';
import { Map as MapIcon, ExternalLink, Navigation } from 'lucide-react';

export interface LocationActionsProps {
  googleMapsSearchUrl: string;
  googleMapsDirectionsUrl: string;
}

export function LocationActions({
  googleMapsSearchUrl,
  googleMapsDirectionsUrl,
}: LocationActionsProps) {
  const { t, language } = useLanguage();
  const isKh = language === 'kh';

  return (
    <>
      <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 pt-1 sm:pt-2'>
        <Button
          size='lg'
          onClick={() => window.open(googleMapsSearchUrl, '_blank')}
          className='w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-linear-to-r from-[#8B0000] via-[#9B0A0A] to-[#8B0000] hover:from-[#A00E0E] hover:to-[#8B0000] text-white shadow-md hover:shadow-lg transition-all duration-300 font-semibold cursor-pointer flex items-center justify-center gap-2 group text-sm'
          style={{
            fontFamily: isKh ? "'Kantumruuy Pro', sans-serif" : undefined,
          }}
        >
          <MapIcon className='w-4 h-4 text-[#FFF2B2] group-hover:scale-110 transition-transform' />
          <span>{t.location.button}</span>
          <ExternalLink className='w-3.5 h-3.5 text-[#FFF2B2]/80 ml-0.5' />
        </Button>

        <Button
          variant='outline'
          size='lg'
          onClick={() => window.open(googleMapsDirectionsUrl, '_blank')}
          className='w-full sm:w-auto px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border-[#8B0000]/40 text-[#8B0000] hover:bg-[#8B0000]/10 bg-white/80 shadow-xs transition-all duration-300 font-semibold cursor-pointer flex items-center justify-center gap-2 group text-sm'
          style={{
            fontFamily: isKh ? "'Kantumruuy Pro', sans-serif" : undefined,
          }}
        >
          <Navigation className='w-4 h-4 text-[#8B0000] group-hover:scale-110 transition-transform' />
          <span>{t.location.directionsButton}</span>
        </Button>
      </div>

      <p className='text-center text-[11px] sm:text-xs text-slate-500 font-khmer-kantumruuy pt-1'>
        {isKh
          ? '💡 ផែនទីបង្ហាញទីតាំងដោយ OpenStreetMap • លោកអ្នកអាចចុច «បើកក្នុង Google Maps» ដើម្បីទទួលបានការណែនាំផ្លូវផ្ទាល់តាម GPS'
          : "💡 Map powered by OpenStreetMap • Tap 'Open in Google Maps' for live turn-by-turn GPS navigation"}
      </p>
    </>
  );
}
