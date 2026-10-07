'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Compass } from 'lucide-react';
import { CornerFiligree } from './events/CornerFiligree';
import { VenueBanner } from './location/VenueBanner';
import { LocationActions } from './location/LocationActions';

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

export default function LocationSection() {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const isKh = language === 'kh';

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
    } catch {
      // Fallback below
    }

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
      <div className='absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#8B0000]/5 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-4xl mx-auto relative z-10'>
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
            className={`font-bold text-[#8B0000] mb-2 sm:mb-3 ${
              isKh
                ? 'font-khmer-moul text-2xl sm:text-3xl leading-[1.65] tracking-normal'
                : 'text-3xl sm:text-4xl font-playfair tracking-wide'
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', 'Moul', cursive, serif"
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

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='relative rounded-2xl sm:rounded-3xl bg-linear-to-b from-white via-[#FFFDF9] to-[#FAF6EE] p-4 sm:p-7 md:p-8 border-2 border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(212,175,55,0.12)] overflow-hidden'
        >
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

          <div className='absolute inset-2 sm:inset-3 border border-dashed border-[#D4AF37]/25 rounded-xl pointer-events-none' />

          <div className='relative z-10 space-y-6'>
            <VenueBanner copied={copied} onCopyAddress={handleCopyAddress} />

            <div className='w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-md border-2 border-[#D4AF37]/45 bg-[#FAF6EE] relative'>
              <WeddingMap
                lat={lat}
                lng={lng}
                venueLabel={t.location.venueName}
                className='w-full h-80 xs:h-90 sm:h-105 md:h-115'
              />
            </div>

            <LocationActions
              googleMapsSearchUrl={googleMapsSearchUrl}
              googleMapsDirectionsUrl={googleMapsDirectionsUrl}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
