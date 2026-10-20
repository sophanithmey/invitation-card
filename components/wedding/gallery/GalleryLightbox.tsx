'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { GalleryItem } from '@/domain/entities/gallery';

export interface GalleryLightboxProps {
  isOpen: boolean;
  currentIndex: number | null;
  items: GalleryItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Preload all gallery images in background when lightbox opens
  useEffect(() => {
    if (!isOpen || !items.length) return;
    items.forEach((item) => {
      if (item.image_url) {
        const img = new Image();
        img.src = item.image_url;
      }
    });
  }, [isOpen, items]);

  // Reset loading state whenever current index changes
  useEffect(() => {
    setIsLoading(true);
  }, [currentIndex]);

  // Handle keyboard navigation (Escape to close, arrows to browse)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || currentIndex === null) return null;
  const currentItem = items[currentIndex];
  if (!currentItem) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) onNext();
    else if (diff < -50) onPrev();
    setTouchStartX(null);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className='fixed inset-0 z-110 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none'
        role='dialog'
        aria-modal='true'
        aria-label='Image Preview'
      >
        <button
          type='button'
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className='absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:bg-white/40 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg'
          aria-label='Close Preview'
        >
          <X className='w-5 h-5 sm:w-6 sm:h-6' />
        </button>

        <button
          type='button'
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className='absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:bg-white/40 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg'
          aria-label='Previous image'
        >
          <ChevronLeft className='w-6 h-6' />
        </button>

        <button
          type='button'
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className='absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:bg-white/40 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg'
          aria-label='Next image'
        >
          <ChevronRight className='w-6 h-6' />
        </button>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className='relative max-w-4xl max-h-[85vh] w-auto h-auto flex flex-col items-center justify-center'
        >
          <div className='relative flex items-center justify-center min-w-[260px] min-h-[260px] sm:min-w-[400px] sm:min-h-[400px]'>
            {isLoading && (
              <div className='absolute inset-0 flex flex-col items-center justify-center gap-2.5 z-10'>
                <div className='w-9 h-9 rounded-full border-2 border-[#D4AF37]/30 border-t-[#D4AF37] animate-spin' />
                <span className='text-[11px] text-[#FFF2B2] font-medium font-khmer'>
                  {language === 'kh' ? 'កំពុងផ្ទុក...' : 'Loading...'}
                </span>
              </div>
            )}

            <img
              src={currentItem.image_url}
              alt={currentItem.caption || `Photo ${currentIndex + 1}`}
              onLoad={() => setIsLoading(false)}
              className={`max-h-[72vh] sm:max-h-[78vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-xl sm:rounded-2xl border-2 border-[#D4AF37]/50 shadow-2xl transition-all duration-400 ease-out ${
                isLoading
                  ? 'opacity-0 scale-96 blur-xs'
                  : 'opacity-100 scale-100 blur-none'
              }`}
            />
          </div>

          <div className='mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-full px-3 text-center'>
            <span className='text-[#FFF2B2] text-xs sm:text-sm font-semibold tracking-widest px-3 py-0.5 rounded-full bg-white/10 border border-[#D4AF37]/40 shadow-sm'>
              {currentIndex + 1} / {items.length}
            </span>
            {currentItem.caption && (
              <p
                className={`text-white/95 text-xs sm:text-sm md:text-base font-medium drop-shadow-md ${
                  language === 'kh'
                    ? 'font-khmer-kantumruuy leading-relaxed'
                    : 'font-serif tracking-wide'
                }`}
                style={{
                  fontFamily:
                    language === 'kh'
                      ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                      : undefined,
                }}
              >
                {currentItem.caption}
              </p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
