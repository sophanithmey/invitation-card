'use client';

import React from 'react';
import { MapPin, Navigation, Map } from 'lucide-react';
import { Wedding } from '@/domain/entities/wedding';

interface EtheapVenueProps {
  wedding: Wedding;
}

export const EtheapVenue: React.FC<EtheapVenueProps> = ({ wedding }) => {
  return (
    <section className='relative px-4 py-4 text-center'>
      <div className='max-w-md mx-auto bg-[#FFFCF7] rounded-3xl border border-[#EBC070]/60 p-6 sm:p-7 shadow-[0_6px_25px_rgba(201,140,8,0.08)] space-y-4'>
        <div className='space-y-1'>
          <div className='inline-flex items-center gap-2 text-[#C98C08]'>
            <Map className='w-4 h-4' />
            <span className='text-[11px] font-semibold tracking-[0.2em] uppercase'>
              Venue & Location
            </span>
          </div>
          <h2 className='font-khmer-moul text-sm sm:text-base text-[#7A1624]'>
            ទីតាំងប្រារព្ធពិធី
          </h2>
        </div>

        {/* Venue Information Card */}
        <div className='bg-[#FAF4E6]/80 rounded-2xl p-4 border border-[#EBC070]/40 text-center space-y-2'>
          <div className='w-10 h-10 mx-auto rounded-full bg-[#EBC070]/20 flex items-center justify-center text-[#C98C08]'>
            <MapPin className='w-5 h-5' />
          </div>

          <h3 className='font-khmer-moul text-xs sm:text-sm text-[#7A1624]'>
            {wedding.venue}
          </h3>

          <p className='font-khmer-kantumruuy text-xs text-[#4A351C]/90 leading-relaxed'>
            {wedding.venue_address}
          </p>

          {/* Direct Map Action Button */}
          {wedding.map_location && (
            <div className='pt-2'>
              <a
                href={wedding.map_location}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-linear-to-r from-[#C98C08] to-[#EBC070] hover:from-[#A87406] hover:to-[#D4AF37] text-white font-khmer-kantumruuy font-bold text-xs rounded-full shadow-md transition-all duration-300 hover:scale-105 active:scale-95'
              >
                <Navigation className='w-3.5 h-3.5' />
                <span>មើលទីតាំងលើ Google Maps</span>
              </a>
            </div>
          )}
        </div>

        {/* Optional Embed Map */}
        {wedding.map_embed_url && (
          <div className='rounded-2xl overflow-hidden border border-[#EBC070]/40 shadow-xs h-52 w-full'>
            <iframe
              src={wedding.map_embed_url}
              width='100%'
              height='100%'
              style={{ border: 0 }}
              allowFullScreen={false}
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Venue Google Map'
            />
          </div>
        )}
      </div>
    </section>
  );
};
