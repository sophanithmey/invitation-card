'use client';

import React, { useState, useRef, useEffect } from 'react';

interface GrandEveningIntroVideoProps {
  skipLabel: string;
  isKh?: boolean;
}

export const GrandEveningIntroVideo: React.FC<GrandEveningIntroVideoProps> = ({
  skipLabel,
  isKh = false,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDismiss = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 1800);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.play().catch(() => {
      // Autoplay with sound might fail; muted is safe
    });

    const handleEnded = () => {
      handleDismiss();
    };

    video.addEventListener('ended', handleEnded);
    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label='Introduction video'
      className={`fixed inset-0 z-100 flex items-center justify-center overflow-hidden bg-[#0B0807] transition-opacity duration-1800 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ touchAction: 'none', overscrollBehavior: 'contain' }}
    >
      <div className='relative w-full h-full aspect-9/16 max-w-lg flex items-center justify-center'>
        <video
          ref={videoRef}
          src='/templates/grand-evening/grand-evening-cover.mp4'
          muted
          autoPlay
          playsInline
          className='h-full w-full object-contain bg-[#0B0807]'
        />
      </div>

      {/* Ambient Radial Spotlight */}
      <div
        aria-hidden='true'
        className='absolute inset-0 pointer-events-none'
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,248,236,0.12) 0%, rgba(11,8,7,0.85) 70%)',
        }}
      />

      {/* Skip Button */}
      <button
        type='button'
        onClick={handleDismiss}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full text-[11px] uppercase text-white/90 border border-white/30 hover:border-white/60 hover:bg-white/10 backdrop-blur-md transition-all active:scale-95 cursor-pointer z-10 ${
          isKh ? 'font-khmer' : 'font-inter tracking-[0.25em]'
        }`}
      >
        {skipLabel}
      </button>
    </aside>
  );
};
