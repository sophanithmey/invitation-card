'use client';

import React from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { KbachCrest, KbachWing } from './etheap-ornaments';

interface EtheapFooterProps {
  wedding: Wedding;
}

export const EtheapFooter: React.FC<EtheapFooterProps> = ({ wedding }) => {
  return (
    <footer className="relative px-4 py-6 text-center font-khmer-kantumruuy">
      <div className="max-w-md mx-auto bg-[#FFFCF7] rounded-3xl border border-[#EBC070]/60 p-6 shadow-[0_6px_25px_rgba(201,140,8,0.08)] space-y-3">
        <KbachCrest className="w-12 h-14 text-[#C98C08]" />

        {wedding.hashtag && (
          <p className="font-sans font-bold text-base sm:text-lg text-[#C98C08] tracking-wide">
            {wedding.hashtag}
          </p>
        )}

        <div className="space-y-0.5">
          <h3 className="font-khmer-moul text-sm sm:text-base text-[#7A1624]">
            {wedding.groom_name_kh} & {wedding.bride_name_kh}
          </h3>
          <p className="font-serif italic text-xs text-[#84623A]">
            {wedding.groom_name} & {wedding.bride_name}
          </p>
        </div>

        <KbachWing className="w-24 h-4 text-[#C98C08]/70" />

        <p className="text-xs text-[#4A351C]/80 leading-relaxed max-w-xs mx-auto">
          សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះវត្តមានដ៏ថ្លៃថ្លារបស់ឯកឧត្តម លោកជំទាវ លោក លោកស្រី អ្នកនាង កញ្ញា និងប្រិយមិត្តទាំងអស់។
        </p>

        <div className="pt-2 border-t border-[#EBC070]/30 text-[10px] text-[#84623A]/60">
          Khmer E-Theap Golden Ivory Edition
        </div>
      </div>
    </footer>
  );
};
