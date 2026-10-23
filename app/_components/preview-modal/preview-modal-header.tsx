'use client';

import React from 'react';
import {
  Monitor,
  Smartphone,
  Maximize2,
  ExternalLink,
  X,
  Send,
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
  { id: 'full', label: 'Full Modal', icon: Maximize2 },
  { id: 'phone', label: 'Phone', icon: Smartphone },
  { id: 'pc', label: 'PC', icon: Monitor },
];

export const PreviewModalHeader: React.FC<PreviewModalHeaderProps> = ({
  template,
  device,
  onDeviceChange,
  onClose,
}) => {
  return (
    <header className='h-16 shrink-0 bg-[#0F1424]/95 backdrop-blur-md border-b border-white/10 px-3 sm:px-6 flex items-center justify-between gap-3 z-30 select-none'>
      {/* Left: Template Details & Close on Mobile */}
      <div className='flex items-center gap-2 sm:gap-3 min-w-0'>
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
              <span className='inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/45 text-[#F5DE98] text-[10px] font-semibold whitespace-nowrap shrink-0'>
                <Flame className='w-3 h-3 fill-[#D4AF37] text-[#D4AF37]' />
                <span className='font-khmer hidden xs:inline'>ពេញនិយមបំផុត</span>
              </span>
            )}
            <span className='hidden md:inline-block px-2 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-semibold uppercase'>
              {template.style}
            </span>
          </div>
          <span className='text-[10px] text-gray-400 font-mono hidden lg:inline'>
            /wedding/{template.slug}
          </span>
        </div>
      </div>

      {/* Center: Device Switcher (Full Modal, Phone, PC) */}
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
              className={`flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                isActive
                  ? 'bg-linear-to-r from-[#D4AF37] to-[#F3E5AB] text-[#1A1405] shadow-sm'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className='w-3.5 h-3.5 shrink-0' />
              <span className='hidden sm:inline'>{label}</span>
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

        <a
          href='https://t.me/disissophanith'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-linear-to-r from-[#7A1624] to-[#5A0F1A] text-[#D4AF37] font-semibold text-xs border border-[#D4AF37]/40 shadow-sm hover:brightness-110 transition-all cursor-pointer'
        >
          <Send className='w-3 h-3 shrink-0' />
          <span className='hidden xs:inline'>ទាក់ទងកក់ម៉ូតនេះ</span>
          <span className='xs:hidden'>កក់ម៉ូតនេះ</span>
        </a>

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
