'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CelestialIntroVideoProps {
  skipLabel: string;
  onFinished?: () => void;
}

export const CelestialIntroVideo: React.FC<CelestialIntroVideoProps> = ({
  skipLabel,
  onFinished,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleDismiss = () => {
    setIsFading(true);
    setTimeout(() => {
      setIsOpen(false);
      onFinished?.();
    }, 900);
  };

  useEffect(() => {
    // Skip video overlay in preview or opened mode so template renders instantly
    if (
      typeof window !== 'undefined' &&
      (new URLSearchParams(window.location.search).has('preview') ||
        new URLSearchParams(window.location.search).has('skip'))
    ) {
      setIsOpen(false);
      onFinished?.();
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    // Fast safety fallback: auto-dismiss after 2s if playback is delayed/buffering
    const fallbackTimer = setTimeout(() => {
      handleDismiss();
    }, 2000);

    video.play().catch(() => {
      // Autoplay blocked by browser policy: dismiss cleanly
      handleDismiss();
    });

    const handleEnded = () => {
      clearTimeout(fallbackTimer);
      handleDismiss();
    };

    const handleError = () => {
      clearTimeout(fallbackTimer);
      handleDismiss();
    };

    video.addEventListener('ended', handleEnded);
    video.addEventListener('error', handleError);
    return () => {
      clearTimeout(fallbackTimer);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('error', handleError);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label='Celestial introduction video'
      onClick={handleDismiss}
      className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#050818] cursor-pointer transition-opacity duration-700 ease-out ${
        isFading ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      style={{ touchAction: 'none', overscrollBehavior: 'contain' }}
    >
      <div className='relative min-h-screen w-full max-w-md sm:aspect-9/16'>
        <video
          ref={videoRef}
          src='/templates/celestial-dream/celestial-dream-cover.mp4'
          poster='/templates/celestial-dream/cd-hall.webp'
          muted
          autoPlay
          playsInline
          className='min-h-screen w-full object-contain bg-[#050818]'
        />

        {/* Ambient radial halo behind video */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0'
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(255, 248, 236, 0.08) 0%, rgba(5, 8, 24, 0.6) 70%)',
          }}
        />
      </div>

      <button
        type='button'
        onClick={handleDismiss}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/40 bg-black/40 px-6 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all hover:border-[#C9A45C] hover:bg-white/10 hover:text-[#C9A45C] focus:outline-none focus:ring-2 focus:ring-[#C9A45C]'
      >
        {skipLabel}
      </button>
    </div>
  );
};
