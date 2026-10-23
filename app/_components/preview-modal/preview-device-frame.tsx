'use client';

import React, { useState, useEffect } from 'react';
import { Lock, Loader2 } from 'lucide-react';
import { PreviewDevice } from './preview-types';

interface PreviewDeviceFrameProps {
  device: PreviewDevice;
  slug: string;
  templateName: string;
}

export const PreviewDeviceFrame: React.FC<PreviewDeviceFrameProps> = ({
  device,
  slug,
  templateName,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeSrc = `/wedding/${slug}?preview=1`;

  // Reset loading state and ensure fallback timeout when slug or device changes
  useEffect(() => {
    setIsLoading(true);
    const safetyTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(safetyTimer);
  }, [slug, device]);

  return (
    <div className='relative flex items-center justify-center transition-all duration-300 ease-out w-full h-full'>
      {/* Loading Spinner */}
      {isLoading && (
        <div className='absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-[#0B0F19]/80 text-[#D4AF37] backdrop-blur-sm pointer-events-none transition-opacity duration-300'>
          <Loader2 className='w-8 h-8 animate-spin' />
          <span className='font-khmer text-xs text-white/80'>
            កំពុងដំណើរការគំរូសំបុត្រ...
          </span>
        </div>
      )}

      {/* Full Modal Edge-to-Edge Viewport */}
      {device === 'full' && (
        <div className='w-full h-full relative bg-black overflow-hidden flex-1'>
          <iframe
            src={iframeSrc}
            title={`${templateName} - Full Screen Preview`}
            loading='eager'
            allow='autoplay; fullscreen; encrypted-media'
            onLoad={() => setIsLoading(false)}
            className='w-full h-full border-0 bg-white'
          />
        </div>
      )}

      {/* PC Viewport */}
      {device === 'pc' && (
        <div className='w-full max-w-[1240px] h-[82vh] min-h-[580px] rounded-2xl border border-white/15 bg-[#141824] shadow-[0_30px_90px_rgba(0,0,0,0.7)] flex flex-col overflow-hidden ring-1 ring-white/10'>
          {/* Browser Window Chrome */}
          <div className='h-10 bg-[#1A2234] border-b border-white/10 px-4 flex items-center gap-3 shrink-0'>
            <div className='flex items-center gap-1.5'>
              <span className='w-3 h-3 rounded-full bg-[#ff5f56] inline-block' />
              <span className='w-3 h-3 rounded-full bg-[#ffbd2e] inline-block' />
              <span className='w-3 h-3 rounded-full bg-[#27c93f] inline-block' />
            </div>

            <div className='flex-1 max-w-md mx-auto bg-[#0F1424] text-[11px] text-gray-300 font-mono px-3.5 py-1 rounded-full border border-white/10 truncate flex items-center justify-center gap-1.5'>
              <Lock className='w-3 h-3 text-[#D4AF37]' />
              <span className='truncate'>https://soursdey.com/wedding/{slug}</span>
            </div>
          </div>

          {/* Canvas */}
          <div className='flex-1 relative bg-black overflow-hidden'>
            <iframe
              src={iframeSrc}
              title={`${templateName} - PC Preview`}
              loading='eager'
              allow='autoplay; fullscreen; encrypted-media'
              onLoad={() => setIsLoading(false)}
              className='w-full h-full border-0 bg-white'
            />
          </div>
        </div>
      )}

      {/* Phone Viewport */}
      {device === 'phone' && (
        <div className='relative w-full sm:max-w-[390px] h-full sm:h-[820px] sm:max-h-[82vh] rounded-none sm:rounded-[44px] border-0 sm:border-8 border-[#181B22] bg-[#181B22] shadow-[0_30px_90px_rgba(0,0,0,0.8)] overflow-hidden ring-0 sm:ring-1 ring-white/15 flex flex-col'>
          {/* Dynamic Island Notch (desktop frame only) */}
          <div className='hidden sm:flex absolute top-2.5 left-1/2 -translate-x-1/2 w-24 sm:w-28 h-5 bg-[#0a0a0f] rounded-full z-20 border border-white/5 items-center justify-end px-2'>
            <span className='w-2.5 h-2.5 rounded-full bg-[#18254A] border border-white/20' />
          </div>

          <div className='relative flex-1 w-full h-full rounded-none sm:rounded-[36px] overflow-hidden bg-black'>
            <iframe
              src={iframeSrc}
              title={`${templateName} - Phone Preview`}
              loading='eager'
              allow='autoplay; fullscreen; encrypted-media'
              onLoad={() => setIsLoading(false)}
              className='w-full h-full border-0 bg-white'
            />
          </div>
        </div>
      )}
    </div>
  );
};
