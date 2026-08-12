'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/presentation/context/language-context';
import { KhmerOrnament } from '../ornaments/khmer-ornament';

interface LoveStorySectionProps {
  story?: string;
}

export const LoveStorySection: React.FC<LoveStorySectionProps> = ({ story }) => {
  const { lang } = useLanguage();
  if (!story) return null;

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto text-center relative">
      <div className="glass-panel rounded-[2rem] p-8 md:p-12 relative overflow-hidden transition-all duration-700 hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)] group">
        <KhmerOrnament variant="corner" className="absolute top-3 left-3 text-[#D4AF37] opacity-40" />
        <KhmerOrnament variant="corner" className="absolute top-3 right-3 rotate-90 text-[#D4AF37] opacity-40" />
        <KhmerOrnament variant="corner" className="absolute bottom-3 left-3 -rotate-90 text-[#D4AF37] opacity-40" />
        <KhmerOrnament variant="corner" className="absolute bottom-3 right-3 rotate-180 text-[#D4AF37] opacity-40" />

        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br from-[#8B0000] to-[#5A0000] flex items-center justify-center border border-[#D4AF37]/50 shadow-[0_4px_20px_rgba(139,0,0,0.3)] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
          <Heart className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
        </div>

        <h2 className="font-khmer-moul text-2xl md:text-3xl text-[#8B0000] mb-2 drop-shadow-sm">
          {lang === 'kh' ? 'ប្រវត្តិស្នេហា' : 'Our Love Story'}
        </h2>
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-6">
          {lang === 'kh' ? 'ដំណើរជីវិតរបស់យើង' : 'The journey of us'}
        </p>
        
        <KhmerOrnament variant="divider" className="opacity-70 mb-8" />

        <div className="prose prose-sm md:prose-base mx-auto text-[var(--text-primary)] font-khmer-kantumruuy leading-loose opacity-90 relative z-10">
          {story.split('\n').map((paragraph, index) => (
            <p key={index} className="mb-4 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
