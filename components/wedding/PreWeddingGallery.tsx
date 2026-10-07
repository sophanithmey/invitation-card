'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Camera, Maximize2, Sparkles } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion, Variants } from 'framer-motion';
import { GalleryItem } from '@/domain/entities/gallery';
import { DEFAULT_GALLERY } from './gallery/gallery-constants';
import { GalleryLightbox } from './gallery/GalleryLightbox';

interface PreWeddingGalleryProps {
  gallery?: GalleryItem[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function PreWeddingGallery({ gallery }: PreWeddingGalleryProps) {
  const { t, language } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null,
  );

  const items = useMemo(() => {
    if (gallery && gallery.length > 0) {
      return [...gallery].sort((a, b) => a.sort_order - b.sort_order);
    }
    return DEFAULT_GALLERY;
  }, [gallery]);

  const showPrev = useCallback(() => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + items.length) % items.length;
    });
  }, [items.length]);

  const showNext = useCallback(() => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % items.length;
    });
  }, [items.length]);

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, closeLightbox, showPrev, showNext]);

  return (
    <section className='py-16 sm:py-20 px-4 bg-[#FDFBF7] overflow-hidden'>
      <div className='max-w-6xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-10 sm:mb-14'
        >
          <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D4AF37]/10 mb-4 border border-[#D4AF37]/30 shadow-sm'>
            <Camera className='w-6 h-6 text-[#D4AF37]' />
          </div>
          <h2
            className={`font-bold text-[#8B0000] mb-3 ${
              language === 'kh'
                ? 'font-khmer-moul text-2xl sm:text-3xl leading-[1.65] tracking-normal'
                : 'text-3xl sm:text-4xl font-playfair tracking-wide'
            }`}
            style={{
              fontFamily:
                language === 'kh'
                  ? "'Moulpali', 'Moul', cursive, serif"
                  : 'Playfair Display, serif',
            }}
          >
            {t.gallery.title}
          </h2>
          <p
            className={`text-slate-600 text-sm sm:text-base max-w-md mx-auto ${
              language === 'kh'
                ? 'font-khmer-kantumruuy leading-relaxed'
                : 'italic'
            }`}
            style={{
              fontFamily:
                language === 'kh'
                  ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                  : undefined,
            }}
          >
            {t.gallery.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-1 sm:px-4'
        >
          {items.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              variants={itemVariants}
              onClick={() => setSelectedImageIndex(idx)}
              className='group relative aspect-3/4 sm:aspect-4/5 md:aspect-3/4 overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-[#D4AF37]/35 hover:border-[#D4AF37] bg-slate-900'
            >
              <img
                src={item.image_url}
                alt={item.caption || `Photo ${idx + 1}`}
                className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108'
                loading='lazy'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-75 sm:opacity-50 group-hover:opacity-90 transition-opacity duration-300' />
              <div className='absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110'>
                <Maximize2 className='w-3 h-3 sm:w-4 sm:h-4' />
              </div>
              <div className='absolute inset-x-0 bottom-0 p-2 sm:p-3.5 flex flex-col justify-end text-left'>
                <p
                  className={`text-white text-xs sm:text-sm font-medium line-clamp-2 drop-shadow-md ${
                    language === 'kh'
                      ? 'font-khmer-kantumruuy leading-tight'
                      : 'font-serif tracking-wide'
                  }`}
                  style={{
                    fontFamily:
                      language === 'kh'
                        ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                        : undefined,
                  }}
                >
                  {item.caption || `Photo ${idx + 1}`}
                </p>
                <span className='text-[10px] text-[#FFF2B2] font-sans uppercase tracking-widest mt-0.5 sm:mt-1 flex items-center gap-1 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300'>
                  <Sparkles className='w-2.5 h-2.5 text-[#D4AF37]' />
                  <span>
                    {language === 'kh' ? 'ចុចមើលរូបភាព' : 'Tap to preview'}
                  </span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <GalleryLightbox
        isOpen={selectedImageIndex !== null}
        currentIndex={selectedImageIndex}
        items={items}
        onClose={closeLightbox}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
}
