'use client';

import React from 'react';
import { Shirt } from 'lucide-react';
import { useLanguage } from '@/presentation/context/language-context';
import { KhmerOrnament } from '../ornaments/khmer-ornament';

interface DressCodeSectionProps {
  dressCode?: string;
}

export const DressCodeSection: React.FC<DressCodeSectionProps> = ({ dressCode }) => {
  const { lang } = useLanguage();
  if (!dressCode) return null;

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto text-center relative">
      <div className="glass-panel rounded-[2rem] p-8 md:p-12 relative overflow-hidden transition-all duration-700 hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)] group">
        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#8B0000] to-[#5A0000] flex items-center justify-center border border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(139,0,0,0.3)] transition-transform duration-700 group-hover:scale-110 -group-hover:rotate-6">
          <Shirt className="w-6 h-6 text-[#D4AF37]" />
        </div>

        <h2 className="font-khmer-moul text-xl md:text-2xl text-[#8B0000] mb-2 drop-shadow-sm">
          {lang === 'kh' ? 'ការស្លៀកពាក់' : 'Dress Code Theme'}
        </h2>
        
        <KhmerOrnament variant="divider" className="opacity-70 mb-8" />

        <p className="text-sm md:text-base text-[var(--text-primary)] font-khmer-kantumruuy font-medium leading-relaxed max-w-lg mx-auto drop-shadow-sm">
          {dressCode}
        </p>

        {/* Decorative Color Swatches */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="w-6 h-6 rounded-full bg-[#8B0000] border-2 border-white/50 shadow-md transform hover:scale-110 transition-transform"></div>
          <div className="w-6 h-6 rounded-full bg-[#D4AF37] border-2 border-white/50 shadow-md transform hover:scale-110 transition-transform"></div>
          <div className="w-6 h-6 rounded-full bg-[#FDFBF7] border-2 border-[#D4AF37]/50 shadow-md transform hover:scale-110 transition-transform"></div>
        </div>
      </div>
    </section>
  );
};
