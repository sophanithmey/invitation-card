'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Compass,
  Sparkles,
  Map as MapIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Dynamically import OpenStreetMap component to prevent SSR hydration mismatches
const WeddingMap = dynamic(() => import('@/components/WeddingMap'), {
  ssr: false,
  loading: () => (
    <div className='h-full w-full bg-[#FAF6EE] animate-pulse min-h-380 sm:min-h-115 flex flex-col items-center justify-center gap-3'>
      <div className='w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center'>
        <MapPin className='w-6 h-6 text-[#8B0000] animate-bounce' />
      </div>
      <p className='text-xs font-semibold text-slate-500'>កំពុងផ្ទុកផែនទី...</p>
    </div>
  ),
});

function CornerFiligree({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        'w-6 h-6 sm:w-7 sm:h-7 text-[#D4AF37] pointer-events-none',
        className,
      )}
      aria-hidden='true'
    >
      <path
        d='M2 38 V10 C2 5.58 5.58 2 10 2 H38'
        stroke='currentColor'
        strokeWidth='1.6'
        strokeLinecap='round'
      />
      <path
        d='M6 34 V12 C6 8.68 8.68 6 12 6 H34'
        stroke='currentColor'
        strokeWidth='0.9'
        strokeOpacity='0.45'
        strokeLinecap='round'
      />
      <circle cx='11' cy='11' r='2' fill='currentColor' />
    </svg>
  );
}

export default function LocationSection() {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const isKh = language === 'kh';

  // Kampong Trach, Kampot Coordinates
  const lat = 10.55561752462688;
  const lng = 104.46824504916088;

  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  const handleCopyAddress = async () => {
    const textToCopy = `${t.location.venueName}, ${t.location.address}`;
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
        return;
      }
    } catch (err) {
      console.warn('Clipboard API writeText failed, using fallback:', err);
    }

    // Resilient fallback using textarea
    try {
      const textarea = document.createElement('textarea');
      textarea.value = textToCopy;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Fallback copy failed:', e);
    }
  };

  return (
    <section className='py-16 sm:py-24 px-3 sm:px-6 relative bg-[#FDFBF7] overflow-hidden'>
      {/* Background Soft Ambient Glows */}
      <div className='absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#8B0000]/5 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-4xl mx-auto relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-8 sm:mb-12'
        >
          <div className='w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 flex items-center justify-center mx-auto mb-3 shadow-xs'>
            <Compass className='w-6 h-6 text-[#D4AF37]' />
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold text-[#8B0000] mb-2 sm:mb-3 ${
              isKh
                ? 'font-khmer-moul leading-[1.65]'
                : 'font-playfair tracking-wide'
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', cursive, serif"
                : 'Playfair Display, serif',
            }}
          >
            {t.location.title}
          </h2>
          <p
            className={`text-slate-600 text-sm sm:text-base max-w-md mx-auto ${
              isKh ? 'font-khmer-kantumruuy leading-relaxed' : 'italic'
            }`}
            style={{
              fontFamily: isKh
                ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                : undefined,
            }}
          >
            {t.location.subtitle}
          </p>
        </motion.div>

        {/* Master Royal Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='relative rounded-2xl sm:rounded-3xl bg-linear-to-b from-white via-[#FFFDF9] to-[#FAF6EE] p-4 sm:p-7 md:p-8 border-2 border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(212,175,55,0.12)] overflow-hidden'
        >
          {/* Traditional Corner Filigrees */}
          <div className='absolute top-2 left-2 opacity-60'>
            <CornerFiligree />
          </div>
          <div className='absolute top-2 right-2 opacity-60 rotate-90'>
            <CornerFiligree />
          </div>
          <div className='absolute bottom-2 left-2 opacity-60 -rotate-90'>
            <CornerFiligree />
          </div>
          <div className='absolute bottom-2 right-2 opacity-60 rotate-180'>
            <CornerFiligree />
          </div>

          {/* Inner Dashed Border */}
          <div className='absolute inset-2 sm:inset-3 border border-dashed border-[#D4AF37]/25 rounded-xl pointer-events-none' />

          {/* Content Container */}
          <div className='relative z-10 space-y-6'>
            {/* Venue Details Banner */}
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
                        fontFamily: isKh
                          ? "'Moulpali', cursive, serif"
                          : undefined,
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

                {/* Quick Copy Address Button */}
                <button
                  type='button'
                  onClick={handleCopyAddress}
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

            {/* OpenStreetMap Interactive Frame */}
            <div className='w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-[#D4AF37]/45 bg-[#FAF6EE] relative'>
              <WeddingMap
                lat={lat}
                lng={lng}
                venueLabel={t.location.venueName}
                className='w-full h-[320px] xs:h-[360px] sm:h-[420px] md:h-[460px]'
              />
            </div>

            {/* Navigation & Map Action Buttons */}
            <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 pt-1 sm:pt-2'>
              {/* Primary: Open in Google Maps */}
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

              {/* Secondary: Get Directions in Google Maps */}
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

            {/* Helpful Hint */}
            <p className='text-center text-[11px] sm:text-xs text-slate-500 font-khmer-kantumruuy pt-1'>
              {isKh
                ? '💡 ផែនទីបង្ហាញទីតាំងដោយ OpenStreetMap • លោកអ្នកអាចចុច «បើកក្នុង Google Maps» ដើម្បីទទួលបានការណែនាំផ្លូវផ្ទាល់តាម GPS'
                : "💡 Map powered by OpenStreetMap • Tap 'Open in Google Maps' for live turn-by-turn GPS navigation"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
