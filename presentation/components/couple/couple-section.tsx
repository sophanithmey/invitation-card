'use client';

import React from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { KhmerOrnament } from '../ornaments/khmer-ornament';

interface CoupleSectionProps {
  wedding: Wedding;
}

export const CoupleSection: React.FC<CoupleSectionProps> = ({ wedding }) => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center">
      <h2 className="font-khmer-moul text-2xl md:text-3xl text-[var(--primary-color,#8B0000)] mb-2 drop-shadow-sm">
        កូនកំលោះ & កូនក្រមុំ
      </h2>
      <p className="text-sm text-amber-800/70 font-khmer-kantumruuy mb-6 uppercase tracking-wider">Groom & Bride</p>
      <KhmerOrnament variant="divider" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {/* Groom Card */}
        <div className="group p-8 rounded-3xl glass-panel transition-all duration-700 ease-out hover:shadow-[0_12px_40px_rgba(212,175,55,0.2)] hover:-translate-y-2">
          <div className="w-44 h-44 mx-auto rounded-full p-1.5 border border-[var(--secondary-color,#D4AF37)]/60 overflow-hidden shadow-lg mb-6 perspective-1000 relative">
            <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-1000"></div>
            <img
              src={wedding.groom_photo}
              alt={wedding.groom_name}
              className="w-full h-full object-cover rounded-full transition-transform duration-[1000ms] ease-out group-hover:scale-110"
            />
          </div>
          <h3 className="font-khmer-moul text-xl md:text-2xl text-[var(--primary-color,#8B0000)] mb-1.5">
            {wedding.groom_name_kh}
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-700/80 font-semibold">
            {wedding.groom_name}
          </p>
        </div>

        {/* Bride Card */}
        <div className="group p-8 rounded-3xl glass-panel transition-all duration-700 ease-out hover:shadow-[0_12px_40px_rgba(212,175,55,0.2)] hover:-translate-y-2">
          <div className="w-44 h-44 mx-auto rounded-full p-1.5 border border-[var(--secondary-color,#D4AF37)]/60 overflow-hidden shadow-lg mb-6 perspective-1000 relative">
            <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-1000"></div>
            <img
              src={wedding.bride_photo}
              alt={wedding.bride_name}
              className="w-full h-full object-cover rounded-full transition-transform duration-[1000ms] ease-out group-hover:scale-110"
            />
          </div>
          <h3 className="font-khmer-moul text-xl md:text-2xl text-[var(--primary-color,#8B0000)] mb-1.5">
            {wedding.bride_name_kh}
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-700/80 font-semibold">
            {wedding.bride_name}
          </p>
        </div>
      </div>
    </section>
  );
};
