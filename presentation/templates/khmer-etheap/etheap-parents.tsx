'use client';

import React from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { KbachWing, KbachCorner } from './etheap-ornaments';

interface EtheapParentsProps {
  wedding: Wedding;
}

export const EtheapParents: React.FC<EtheapParentsProps> = ({ wedding }) => {
  const { parents } = wedding;

  return (
    <section className='relative px-4 py-4 text-center'>
      <div className='max-w-md mx-auto bg-[#FFFCF7] rounded-3xl border border-[#EBC070]/60 p-6 sm:p-7 shadow-[0_6px_25px_rgba(201,140,8,0.08)] space-y-4 relative overflow-hidden'>
        {/* Subtle decorative corners */}
        <KbachCorner className="absolute top-2 left-2 w-7 h-7 text-[#EBC070]/50" />
        <KbachCorner className="absolute top-2 right-2 w-7 h-7 text-[#EBC070]/50" flip />

        {/* Khmer Traditional Greeting Notice */}
        <div className='space-y-2 relative z-10'>
          <KbachWing className="w-28 h-5 text-[#C98C08]" />

          <h2 className='font-khmer-moul text-sm sm:text-base text-[#7A1624]'>
            សេចក្តីគោរពអញ្ជើញ
          </h2>

          <p className='font-khmer-kantumruuy text-xs sm:text-[13px] text-[#4A351C] leading-relaxed text-justify sm:text-center px-1'>
            {wedding.invitation_message ||
              'យើងខ្ញុំមានកិត្តិយសសូមគោរពអញ្ជើញ សម្ដេច ទ្រង់ ឯកឧត្ដម លោកអ្នកឧកញ៉ា អ្នកឧកញ៉ា ឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និងប្រិយមិត្ត អញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យ សិរីសួស្ដី ជ័យមង្គលក្នុងពិធីសិរីមង្គលអាពាហ៍ពិពាហ៍កូនប្រុស កូនស្រីរបស់យើងខ្ញុំ។'}
          </p>
        </div>

        {/* Dual Parents Plaques */}
        <div className='grid grid-cols-2 gap-3 pt-2 relative z-10'>
          {/* Groom Parents */}
          <div className='bg-[#FAF4E6]/80 rounded-2xl p-4 border border-[#EBC070]/50 text-center space-y-1.5 shadow-xs relative overflow-hidden'>
            <KbachCorner className="absolute -top-1 -left-1 w-5 h-5 text-[#EBC070]/40" />
            <span className='inline-block font-khmer-moul text-xs text-[#C98C08] pb-1 border-b border-[#EBC070]/50'>
              មាតាបិតាខាងប្រុស
            </span>
            <p className='font-khmer-kantumruuy font-bold text-xs sm:text-sm text-[#7A1624]'>
              {parents.groom_father}
            </p>
            <p className='font-khmer-kantumruuy font-bold text-xs sm:text-sm text-[#7A1624]'>
              {parents.groom_mother}
            </p>
          </div>

          {/* Bride Parents */}
          <div className='bg-[#FAF4E6]/80 rounded-2xl p-4 border border-[#EBC070]/50 text-center space-y-1.5 shadow-xs relative overflow-hidden'>
            <KbachCorner className="absolute -top-1 -right-1 w-5 h-5 text-[#EBC070]/40" flip />
            <span className='inline-block font-khmer-moul text-xs text-[#C98C08] pb-1 border-b border-[#EBC070]/50'>
              មាតាបិតាខាងស្រី
            </span>
            <p className='font-khmer-kantumruuy font-bold text-xs sm:text-sm text-[#7A1624]'>
              {parents.bride_father}
            </p>
            <p className='font-khmer-kantumruuy font-bold text-xs sm:text-sm text-[#7A1624]'>
              {parents.bride_mother}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
