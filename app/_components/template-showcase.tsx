'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AlbumIcon, ArrowLeft, ArrowRight } from 'lucide-react';
import { TemplatePreviewModal } from './preview-modal/template-preview-modal';
import { TemplatePreviewItem } from './preview-modal/preview-types';
import { TEMPLATES } from './template-showcase-data';
import { TemplateCoverflowCard } from './template-coverflow-card';

export { TEMPLATES };

export function TemplateShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previewTemplate, setPreviewTemplate] =
    useState<TemplatePreviewItem | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = TEMPLATES.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentTemplate = TEMPLATES[activeIndex];

  return (
    <section id='templates' className='py-20 md:py-28 px-4 overflow-hidden relative'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-10 md:mb-14 flex flex-col items-center justify-center'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#7A1624] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs'>
            <AlbumIcon className='w-3.5 h-3.5 text-[#D4AF37]' />
            <span>Collections</span>
          </div>

          <h2 className='font-khmer text-3xl sm:text-4xl md:text-5xl text-[#7A1624] leading-tight'>
            ស្វែងយល់ពីម៉ូតរបស់យើង
          </h2>

          <p className='text-sm sm:text-base text-gray-600 font-khmer mt-3 max-w-lg mx-auto'>
            រំកិលមើលគំរូសំបុត្រមង្គលការ 3D Coverflow ដ៏ប្រណីត និងជ្រើសរើសម៉ូតដែលអ្នកពេញចិត្ត
          </p>
        </div>

        {/* 3D Coverflow Perspective Stage */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ perspective: '1100px', transformStyle: 'preserve-3d' }}
          className='relative w-full h-[510px] sm:h-[570px] flex items-center justify-center my-4 overflow-visible'
        >
          {TEMPLATES.map((template, index) => {
            let offset = (index - activeIndex) % total;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            return (
              <TemplateCoverflowCard
                key={template.slug}
                template={template}
                offset={offset}
                isActive={index === activeIndex}
                onSelect={() => setActiveIndex(index)}
                onPreview={() => setPreviewTemplate(template)}
              />
            );
          })}
        </div>

        {/* Bottom Navigation Controls: Previous / Dots / Next */}
        <div className='flex items-center justify-center gap-6 mt-8 sm:mt-12 select-none'>
          {/* Previous Arrow Button */}
          <button
            type='button'
            onClick={handlePrev}
            aria-label='Previous Template'
            className='w-12 h-12 rounded-full border border-gray-200/80 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center text-stone-800 hover:text-[#7A1624] hover:border-[#D4AF37]/50 hover:scale-105 active:scale-95 transition-all cursor-pointer'
          >
            <ArrowLeft className='w-5 h-5' />
          </button>

          {/* Pagination Indicators */}
          <div className='flex items-center gap-2'>
            {TEMPLATES.map((tpl, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={tpl.slug}
                  type='button'
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Go to template ${i + 1}`}
                  className={`transition-all duration-400 cursor-pointer ${
                    isActive
                      ? 'w-7 sm:w-8 h-2.5 rounded-full bg-stone-900 shadow-xs'
                      : 'w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-stone-300 hover:bg-stone-400'
                  }`}
                />
              );
            })}
          </div>

          {/* Next Arrow Button */}
          <button
            type='button'
            onClick={handleNext}
            aria-label='Next Template'
            className='w-12 h-12 rounded-full border border-gray-200/80 bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center text-stone-800 hover:text-[#7A1624] hover:border-[#D4AF37]/50 hover:scale-105 active:scale-95 transition-all cursor-pointer'
          >
            <ArrowRight className='w-5 h-5' />
          </button>
        </div>

        {/* Active Template Quick Info Badge */}
        <div className='text-center mt-6'>
          <p className='text-xs text-gray-500 font-khmer'>
            {currentTemplate.names} • {currentTemplate.style}
          </p>
        </div>
      </div>

      {/* Full-screen Device Preview Modal */}
      <TemplatePreviewModal
        template={previewTemplate}
        onClose={() => setPreviewTemplate(null)}
      />
    </section>
  );
}
