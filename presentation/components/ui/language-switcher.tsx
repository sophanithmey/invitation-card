'use client';

import React from 'react';
import { useLanguage } from '@/presentation/context/language-context';
import clsx from 'clsx';

export const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="fixed top-6 right-6 z-50 flex bg-black/20 backdrop-blur-md rounded-full p-1 border border-[#D4AF37]/30 shadow-lg">
      <button
        onClick={() => setLang('kh')}
        className={clsx(
          'px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300',
          lang === 'kh'
            ? 'bg-[#D4AF37]/20 text-[#D4AF37] shadow-sm'
            : 'text-[#D4AF37]/60 hover:text-[#D4AF37]'
        )}
      >
        ខ្មែរ
      </button>
      <button
        onClick={() => setLang('en')}
        className={clsx(
          'px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300',
          lang === 'en'
            ? 'bg-[#D4AF37]/20 text-[#D4AF37] shadow-sm'
            : 'text-[#D4AF37]/60 hover:text-[#D4AF37]'
        )}
      >
        EN
      </button>
    </div>
  );
};
