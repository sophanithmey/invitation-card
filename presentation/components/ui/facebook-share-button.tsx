'use client';

import React, { useState } from 'react';
import { Facebook } from 'lucide-react';
import { useLanguage } from '@/presentation/context/language-context';

export const FacebookShareButton: React.FC = () => {
  const { lang } = useLanguage();
  const [toast, setToast] = useState(false);

  const handleShareFacebook = () => {
    if (typeof window === 'undefined') return;
    const url = window.location.href;
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

    // Open Facebook share dialog in a centered popup window
    const width = 620;
    const height = 580;
    const left = Math.max(0, (window.screen.width - width) / 2);
    const top = Math.max(0, (window.screen.height - height) / 2);

    window.open(
      fbUrl,
      'facebook-share-dialog',
      `width=${width},height=${height},top=${top},left=${left},toolbar=0,location=0,menubar=0,status=0`
    );

    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };

  return (
    <div className='fixed bottom-24 right-6 z-40 flex items-center'>
      {toast && (
        <span className='absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-[#FFF2B2] text-xs font-medium border border-[#D4AF37]/50 shadow-lg pointer-events-none'>
          {lang === 'kh' ? 'ចែករំលែកលើ Facebook' : 'Sharing to Facebook'}
        </span>
      )}
      <button
        type='button'
        onClick={handleShareFacebook}
        aria-label='Share invitation to Facebook'
        title={lang === 'kh' ? 'ចែករំលែកទៅកាន់ Facebook' : 'Share to Facebook'}
        className='group relative w-12 h-12 rounded-full bg-(--primary-color,#7A1624) text-(--secondary-color,#D4AF37) border-2 border-(--secondary-color,#D4AF37) shadow-[0_4px_15px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_6px_20px_rgba(212,175,55,0.4)]'
      >
        <Facebook className='w-5 h-5 fill-current text-(--secondary-color,#D4AF37) transition-transform duration-300 group-hover:scale-110' />
      </button>
    </div>
  );
};
