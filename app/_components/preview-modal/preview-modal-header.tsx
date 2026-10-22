'use client';

import React from 'react';
import Link from 'next/link';
import {
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  X,
  Sparkles,
  Flame,
} from 'lucide-react';
import { PreviewDevice, TemplatePreviewItem } from './preview-types';

interface PreviewModalHeaderProps {
  template: TemplatePreviewItem;
  device: PreviewDevice;
  onDeviceChange: (device: PreviewDevice) => void;
  onClose: () => void;
}

const DEVICES: Array<{ id: PreviewDevice; label: string; icon: React.ElementType }> = [
  { id: 'pc', label: 'PC', icon: Monitor },
  { id: 'tablet', label: 'Tablet', icon: Tablet },
  { id: 'phone', label: 'Phone', icon: Smartphone },
];

export const PreviewModalHeader: React.FC<PreviewModalHeaderProps> = ({
  template,
  device,
  onDeviceChange,
  onClose,
}) => {
  return (
    <header className='h-16 shrink-0 bg-[#0F1424]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 flex items-center justify-between gap-3 z-30 select-none'>
      {/* Left: Template Details */}
      <div className='flex items-center gap-3 min-w-0'>
        <button
          type='button'
          onClick={onClose}
          aria-label='Close preview'
          className='p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer sm:hidden'
        >
          <X className='w-5 h-5' />
        </button>

        <div className='flex flex-col min-w-0'>
          <div className='flex items-center gap-2'>
            <span className='font-khmer text-sm sm:text-base font-bold text-white truncate'>
              {template.names}
            </span>
            {template.isMostUsed && (
              <span className='inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/45 text-[#F5DE98] text-[10px] font-semibold whitespace-nowrap shrink-0'>
                <Flame className='w-3 h-3 fill-[#D4AF37] text-[#D4AF37]' />
                <span className='font-khmer'>ពេញនិយមបំផុត</span>
              </span>
            )}
            <span className='hidden xs:inline-block px-2 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-semibold uppercase tracking-wider'>
              {template.style}
            </span>
          </div>
          <span className='text-[10px] text-gray-400 font-mono hidden sm:inline'>
            /wedding/{template.slug}
          </span>
        </div>
      </div>

      {/* Center: Device Switcher (PC, Tablet, Phone) */}
      <nav
        aria-label='Device Preview Selector'
        className='flex items-center bg-[#1A2238] p-1 rounded-full border border-white/10 shadow-inner'
      >
        {DEVICES.map(({ id, label, icon: Icon }) => {
          const isActive = device === id;
          return (
            <button
              key={id}
              type='button'
              onClick={() => onDeviceChange(id)}
              className={`flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-linear-to-r from-[#D4AF37] to-[#F3E5AB] text-[#1A1405] shadow-sm'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className='w-3.5 h-3.5 shrink-0' />
              <span>{label}</span>
            </button>
          );
        })}
      </nav>

      {/* Right: Actions */}
      <div className='flex items-center gap-2 sm:gap-3 shrink-0'>
        <a
          href={`/wedding/${template.slug}`}
          target='_blank'
          rel='noopener noreferrer'
          title='Open in new tab'
          className='hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs text-white/80 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors'
        >
          <span>បើកក្នុង Tab ថ្មី</span>
          <ExternalLink className='w-3 h-3' />
        </a>

        <Link
          href={`/admin/builder?template=${template.slug}`}
          className='inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-linear-to-r from-[#7A1624] to-[#5A0F1A] text-[#D4AF37] font-semibold text-xs border border-[#D4AF37]/40 shadow-sm hover:brightness-110 transition-all'
        >
          <Sparkles className='w-3 h-3 shrink-0' />
          <span className='hidden xs:inline'>ប្រើប្រាស់ម៉ូតនេះ</span>
          <span className='xs:hidden'>ប្រើប្រាស់</span>
        </Link>

        <button
          type='button'
          onClick={onClose}
          aria-label='Close preview'
          className='hidden sm:flex p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer'
        >
          <X className='w-5 h-5' />
        </button>
      </div>
    </header>
  );
};
