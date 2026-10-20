'use client';

import React from 'react';
import {  ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WeddingMapProps {
  lat?: number;
  lng?: number;
  className?: string;
  venueLabel?: string;
}

export default function WeddingMap({
  lat = 10.55561752462688,
  lng = 104.46824504916088,
  className,
  venueLabel = 'គេហដ្ឋានខាងស្រី',
}: WeddingMapProps) {

  // OpenStreetMap Bounding Box around Kampong Trach center
  // Optimal bounding box for street-level view (~zoom 15-16)
  const minLon = (lng - 0.012).toFixed(5);
  const minLat = (lat - 0.008).toFixed(5);
  const maxLon = (lng + 0.012).toFixed(5);
  const maxLat = (lat + 0.008).toFixed(5);

  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${minLon}%2C${minLat}%2C${maxLon}%2C${maxLat}&layer=mapnik&marker=${lat}%2C${lng}`;
  const osmDirectUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=16/${lat}/${lng}`;

  return (
    <div
      className={cn(
        'relative w-full h-80 xs:h-90 sm:h-105 md:h-115 overflow-hidden bg-[#FAF6EE] select-none rounded-xl sm:rounded-2xl',
        className,
      )}
    >

      {/* OpenStreetMap Iframe: Using absolute inset-0 guarantees 100% full height & width on all mobile browsers */}
      <iframe
        src={osmEmbedUrl}
        style={{ border: 0, width: '100%', height: '100%' }}
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
        title='Wedding Venue Map - OpenStreetMap'
        className='absolute inset-0 w-full h-full z-10 transition-opacity duration-500'
      />

      {/* Floating Venue Marker Badge */}
      <div className='absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-20 pointer-events-none max-w-[calc(100%-85px)]'>
        <div className='inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-md text-slate-800 text-[11px] sm:text-xs font-semibold truncate'>
          <span className='relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 shrink-0'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B0000] opacity-75' />
            <span className='relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#8B0000]' />
          </span>
          <span className='font-bold text-[#8B0000] truncate'>{venueLabel}</span>
        </div>
      </div>

      {/* OSM Attribution & External Link Pill */}
      <div className='absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 z-20'>
        <a
          href={osmDirectUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white/90 backdrop-blur-xs text-[10px] text-slate-600 hover:text-[#8B0000] border border-slate-200/80 shadow-xs transition-colors'
        >
          <span>© OpenStreetMap</span>
          <ExternalLink className='w-2.5 h-2.5' />
        </a>
      </div>
    </div>
  );
}
