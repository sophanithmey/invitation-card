'use client';

import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { Wedding } from '@/domain/entities/wedding';
import { useLanguage } from '@/presentation/context/language-context';
import { KhmerOrnament } from '../ornaments/khmer-ornament';

interface VenueSectionProps {
  wedding: Wedding;
}

export const VenueSection: React.FC<VenueSectionProps> = ({ wedding }) => {
  const { t, lang } = useLanguage();
  return (
    <section className='py-16 px-4 max-w-4xl mx-auto text-center'>
      <h2 className='font-khmer-moul text-2xl md:text-3xl text-[var(--primary-color,#8B0000)] mb-2 drop-shadow-sm'>
        {lang === 'kh' ? 'ទីតាំងប្រារព្ធពិធី' : t('venue')}
      </h2>
      <p className='text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-6'>
        Wedding Venue & Location
      </p>
      <KhmerOrnament variant='divider' />

      <div className='glass-panel rounded-4xl p-8 md:p-10 shadow-lg text-left mt-10 transition-all duration-700 hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] group relative overflow-hidden'>
        {/* Subtle Map BG Hint */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>

        <div className='flex flex-col md:flex-row gap-8 items-stretch relative z-10'>
          <div className='flex-1 space-y-5 font-khmer-kantumruuy flex flex-col justify-center'>
            <div className='flex items-start gap-4'>
              <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#8B0000] to-[#5A0000] flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-500 group-hover:scale-110'>
                <MapPin className='w-5 h-5 text-[#D4AF37]' />
              </div>
              <div className='mt-1'>
                <h3 className='font-khmer-moul text-xl text-[#8B0000] drop-shadow-sm'>
                  {wedding.venue}
                </h3>
                <p className='text-sm opacity-80 mt-1.5 leading-relaxed'>
                  {wedding.venue_address}
                </p>
              </div>
            </div>

            {wedding.map_location && (
              <div className='pt-4'>
                <a
                  href={wedding.map_location}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center gap-2 py-3 px-8 bg-linear-to-r from-[#8B0000] to-[#5A0000] text-[#D4AF37] font-khmer-moul text-sm rounded-full shadow-[0_4px_20px_rgba(139,0,0,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(139,0,0,0.4)] active:scale-95 cursor-pointer'
                >
                  <Navigation className='w-4 h-4' />
                  <span>{lang === 'kh' ? 'មើលទិសដៅលើ Google Maps' : 'View on Google Maps'}</span>
                  <ExternalLink className='w-3.5 h-3.5 ml-1 opacity-70' />
                </a>
              </div>
            )}
          </div>

          <div className='flex-1 min-h-75 w-full rounded-xl overflow-hidden border-2 border-[#D4AF37]/30 shadow-inner'>
            <iframe
              title='map'
              width='100%'
              height='100%'
              style={{ border: 0 }}
              loading='lazy'
              allowFullScreen
              referrerPolicy='no-referrer-when-downgrade'
              src={
                wedding.map_embed_url ||
                `https://maps.google.com/maps?q=${
                  wedding.map_location?.includes('q=')
                    ? new URL(wedding.map_location).searchParams.get('q')
                    : encodeURIComponent(wedding.venue)
                }&t=&z=15&ie=UTF8&output=embed`
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
