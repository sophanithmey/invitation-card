'use client';

import React, { useState, useEffect } from 'react';
import { PreviewDevice, TemplatePreviewItem } from './preview-types';
import { PreviewModalHeader } from './preview-modal-header';
import { PreviewDeviceFrame } from './preview-device-frame';

interface TemplatePreviewModalProps {
  template: TemplatePreviewItem | null;
  onClose: () => void;
}

export const TemplatePreviewModal: React.FC<TemplatePreviewModalProps> = ({
  template,
  onClose,
}) => {
  const [device, setDevice] = useState<PreviewDevice>('phone');

  // Prevent background scrolling and support ESC key
  useEffect(() => {
    if (!template) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [template, onClose]);

  if (!template) return null;

  return (
    <div
      role='dialog'
      aria-modal='true'
      aria-label={`${template.names} Preview`}
      className='fixed inset-0 z-50 flex flex-col bg-[#070A12] text-white animate-fade-in'
    >
      {/* Ambient background decoration */}
      <div className='absolute inset-0 pointer-events-none overflow-hidden opacity-40'>
        <div className='absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#7A1624]/20 blur-[140px]' />
        <div className='absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#D4AF37]/15 blur-[140px]' />
        <div className='absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10' />
      </div>

      {/* Top Header Controls Bar */}
      <PreviewModalHeader
        template={template}
        device={device}
        onDeviceChange={setDevice}
        onClose={onClose}
      />

      {/* Main Canvas Scroll Area */}
      <main className='relative flex-1 overflow-y-auto px-4 py-6 sm:py-8 flex items-center justify-center'>
        <PreviewDeviceFrame
          device={device}
          slug={template.slug}
          templateName={template.names}
        />
      </main>
    </div>
  );
};
