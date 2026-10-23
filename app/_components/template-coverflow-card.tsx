'use client';

import React from 'react';
import Image from 'next/image';
import { Eye, Flame, ArrowRight } from 'lucide-react';
import { TemplatePreviewItem } from './preview-modal/preview-types';

interface TemplateCoverflowCardProps {
  template: TemplatePreviewItem;
  offset: number;
  isActive: boolean;
  isMobile?: boolean;
  onSelect: () => void;
  onPreview: () => void;
}

export const TemplateCoverflowCard: React.FC<TemplateCoverflowCardProps> = ({
  template,
  offset,
  isActive,
  isMobile = false,
  onSelect,
  onPreview,
}) => {
  const isHidden = isMobile ? Math.abs(offset) > 1 : Math.abs(offset) > 2;

  const getTransform = () => {
    if (isMobile) {
      if (offset === 0) return 'translateX(0px) scale(1) rotateY(0deg) translateZ(0px)';
      if (offset === -1) return 'translateX(-100px) scale(0.88) rotateY(16deg) translateZ(-30px)';
      if (offset === 1) return 'translateX(100px) scale(0.88) rotateY(-16deg) translateZ(-30px)';
      return `translateX(${offset > 0 ? 150 : -150}px) scale(0.6) translateZ(-80px)`;
    }
    if (offset === 0) return 'translateX(0px) scale(1) rotateY(0deg) translateZ(0px)';
    if (offset === -1) return 'translateX(-185px) scale(0.85) rotateY(25deg) translateZ(-50px)';
    if (offset === 1) return 'translateX(185px) scale(0.85) rotateY(-25deg) translateZ(-50px)';
    if (offset === -2) return 'translateX(-330px) scale(0.72) rotateY(38deg) translateZ(-110px)';
    if (offset === 2) return 'translateX(330px) scale(0.72) rotateY(-38deg) translateZ(-110px)';
    return `translateX(${offset > 0 ? 440 : -440}px) scale(0.6) rotateY(${offset > 0 ? -45 : 45}deg) translateZ(-160px)`;
  };

  const getZIndex = () => {
    if (offset === 0) return 30;
    if (Math.abs(offset) === 1) return 20;
    if (Math.abs(offset) === 2) return 10;
    return 0;
  };

  const getOpacity = () => {
    if (isMobile) {
      if (offset === 0) return 1;
      if (Math.abs(offset) === 1) return 0.75;
      return 0;
    }
    if (offset === 0) return 1;
    if (Math.abs(offset) === 1) return 0.85;
    if (Math.abs(offset) === 2) return 0.55;
    return 0;
  };

  return (
    <div
      onClick={isActive ? onPreview : onSelect}
      style={{
        transform: getTransform(),
        zIndex: getZIndex(),
        opacity: getOpacity(),
        pointerEvents: isHidden ? 'none' : 'auto',
        display: isHidden && isMobile ? 'none' : 'block',
      }}
      className={`absolute top-0 left-1/2 -ml-[130px] sm:-ml-40 md:-ml-42.5 w-[260px] sm:w-[320px] md:w-85 h-[450px] sm:h-135 rounded-4xl overflow-hidden select-none cursor-pointer will-change-transform transform-gpu [backface-visibility:hidden] [transform-style:preserve-3d] transition-[transform,opacity] duration-500 ease-out ${
        isActive
          ? 'shadow-[0_25px_60px_-12px_rgba(0,0,0,0.7),0_0_0_1px_rgba(212,175,55,0.4)] ring-2 ring-[#D4AF37]/60'
          : 'shadow-[0_15px_35px_-8px_rgba(0,0,0,0.5)] border border-white/10'
      }`}
    >
      {/* Background Image / Art */}
      {template.coverPhoto ? (
        <Image
          src={template.coverPhoto}
          alt={template.names}
          fill
          loading='lazy'
          sizes='(max-width: 640px) 260px, 340px'
          className='object-cover'
        />
      ) : (
        <div className={`absolute inset-0 bg-linear-to-br ${template.color}`} />
      )}

      {/* Dramatic Vignette & Subtle Gradient Overlay (zero external texture lag) */}
      <div className='absolute inset-0 bg-linear-to-b from-black/85 via-black/35 to-black/95' />
      <div className='absolute inset-0 bg-radial-[at_top] from-white/10 via-transparent to-black/40 pointer-events-none' />

      {/* Card Content Layer */}
      <div className='relative z-10 flex flex-col justify-between h-full p-6 sm:p-7 text-white text-center'>
        {/* Top Header Row */}
        <div className='flex items-center justify-between text-left'>
          <span className='text-[10px] font-mono tracking-widest text-white/70 uppercase'>
            {template.style}
          </span>

          {template.badgeLabel && (
            <span
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase shadow-md ${
                template.isMostUsed
                  ? 'bg-linear-to-r from-amber-400 to-amber-500 text-stone-950 font-extrabold'
                  : 'bg-white/20 text-white border border-white/20 backdrop-blur-md'
              }`}
            >
              {template.isMostUsed && <Flame className='w-3 h-3 fill-current' />}
              <span>{template.badgeLabel}</span>
            </span>
          )}
        </div>

        {/* Center: Wedding Invitation Hero Typography */}
        <div className='my-auto space-y-2.5'>
          <p className='text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-serif font-semibold'>
            Wedding Invitation
          </p>

          <h3 className='font-khmer text-2xl sm:text-4xl font-bold text-white drop-shadow-md leading-tight'>
            {template.names}
          </h3>
        </div>

        {/* Bottom Details & Call to Action */}
        <div className='space-y-3 pt-2 border-t border-white/10'>
          <div>
            <h4 className='font-khmer text-lg sm:text-xl font-bold text-[#F8F7F3]'>
              {template.style}
            </h4>
            {template.subtitle && (
              <p className='text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase'>
                {template.subtitle}
              </p>
            )}
          </div>

          {/* Action Button on Active Center Card */}
          {isActive && (
            <button
              type='button'
              onClick={(e) => {
                e.stopPropagation();
                onPreview();
              }}
              className='w-full py-2.5 px-4 rounded-full bg-linear-to-r from-[#D4AF37] to-[#F3E5AB] text-[#1A1405] text-xs font-bold shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer'
            >
              <Eye className='w-3.5 h-3.5 shrink-0' />
              <span>មើលគំរូសំបុត្រ (Preview)</span>
              <ArrowRight className='w-3.5 h-3.5 shrink-0' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
