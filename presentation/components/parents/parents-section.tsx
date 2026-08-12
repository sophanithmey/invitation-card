'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { Wedding } from '@/domain/entities/wedding';
import { useLanguage } from '@/presentation/context/language-context';
import { KhmerOrnament } from '../ornaments/khmer-ornament';

interface ParentsSectionProps {
  wedding: Wedding;
}

export const ParentsSection: React.FC<ParentsSectionProps> = ({ wedding }) => {
  const { parents } = wedding;
  const { lang } = useLanguage();
  if (!parents) return null;

  return (
    <section className="py-14 px-4 max-w-4xl mx-auto text-center">
      <div className="glass-panel rounded-[2rem] p-8 md:p-12 relative overflow-hidden transition-all duration-700 hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)]">
        <KhmerOrnament variant="corner" className="absolute top-3 left-3 text-[#D4AF37] opacity-40" />
        <KhmerOrnament variant="corner" className="absolute top-3 right-3 rotate-90 text-[#D4AF37] opacity-40" />
        <KhmerOrnament variant="corner" className="absolute bottom-3 left-3 -rotate-90 text-[#D4AF37] opacity-40" />
        <KhmerOrnament variant="corner" className="absolute bottom-3 right-3 rotate-180 text-[#D4AF37] opacity-40" />

        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#8B0000]/10 flex items-center justify-center border border-[#D4AF37]/30 animate-pulse-glow">
          <Heart className="w-6 h-6 fill-[#8B0000] text-[#8B0000] opacity-80" />
        </div>

        <h2 className="font-khmer-moul text-xl md:text-2xl text-[#8B0000] mb-2 drop-shadow-sm">
          {lang === 'kh' ? 'អបអរសាទរសេចក្តីស្រឡាញ់របស់យើង' : 'Celebrate Our Love'}
        </h2>
        <p className="text-xs md:text-sm italic opacity-80 font-khmer-kantumruuy mb-8 max-w-xl mx-auto leading-relaxed">
          {lang === 'kh'
            ? '"សេចក្តីស្រឡាញ់មិនមែនគ្រាន់តែជាការសម្លឹងមើលគ្នាទៅវិញទៅមកនោះទេ ប៉ុន្តែវាគឺជាការសម្លឹងមើលទៅក្នុងទិសដៅតែមួយ។"'
            : '"Love is not just looking at each other, it\'s looking in the same direction."'}
        </p>

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-6">
          {lang === 'kh' ? 'រួមជាមួយក្រុមគ្រួសាររបស់យើងទាំងសងខាង' : 'Together with our families'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 text-left relative z-10">
          <div className="p-6 rounded-2xl glass-panel transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-lg hover:-translate-y-1">
            <h3 className="font-khmer-moul text-[11px] text-[#8B0000] uppercase tracking-wider mb-2 opacity-90">
              {lang === 'kh' ? 'មាតាបិតាខាងកូនប្រុស' : "Groom's Parents"}
            </h3>
            <p className="font-khmer-kantumruuy text-base md:text-lg font-semibold drop-shadow-sm">
              {parents.groom_father}
            </p>
            <p className="font-khmer-kantumruuy text-base md:text-lg font-semibold drop-shadow-sm">
              {parents.groom_mother}
            </p>
          </div>
          <div className="p-6 rounded-2xl glass-panel transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-lg hover:-translate-y-1">
            <h3 className="font-khmer-moul text-[11px] text-[#8B0000] uppercase tracking-wider mb-2 opacity-90">
              {lang === 'kh' ? 'មាតាបិតាខាងកូនស្រី' : "Bride's Parents"}
            </h3> 
            <p className="font-khmer-kantumruuy text-base md:text-lg font-semibold drop-shadow-sm">
              {parents.bride_father}
            </p>
            <p className="font-khmer-kantumruuy text-base md:text-lg font-semibold drop-shadow-sm">
              {parents.bride_mother}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
