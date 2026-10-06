'use client';

import React, { useState } from 'react';
import { Gift, Copy, Check } from 'lucide-react';
import { GiftInfo } from '@/domain/entities/details';
import { useLanguage } from '@/presentation/context/language-context';
import { KhmerOrnament } from '../ornaments/khmer-ornament';
import { copyToClipboard } from '@/lib/utils';

interface GiftSectionProps {
  giftInfo?: GiftInfo;
  enabled: boolean;
}

export const GiftSection: React.FC<GiftSectionProps> = ({ giftInfo, enabled }) => {
  const [copied, setCopied] = useState(false);
  const { lang } = useLanguage();

  if (!enabled || !giftInfo) return null;

  const handleCopy = async () => {
    if (giftInfo.account_number) {
      await copyToClipboard(
        `${giftInfo.bank_name} - ${giftInfo.account_name}: ${giftInfo.account_number}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto text-center font-khmer-kantumruuy relative">
      <h2 className="font-khmer-moul text-2xl md:text-3xl text-[#8B0000] mb-2 drop-shadow-sm">
        {lang === 'kh' ? 'ចំណងដៃអាពាហ៍ពិពាហ៍' : 'Gift of Love'}
      </h2>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-6">
        {lang === 'kh' ? 'ចំពោះទឹកចិត្ត និងសប្បុរសធម៌របស់អ្នក' : 'For your kindness and generosity'}
      </p>
      <KhmerOrnament variant="divider" />

      <div className="glass-panel rounded-[2rem] p-8 md:p-10 shadow-xl relative max-w-lg mx-auto mt-10 transition-all duration-700 hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] group">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#D4AF37] flex items-center justify-center shadow-[0_4px_20px_rgba(139,0,0,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
          <Gift className="w-7 h-7" />
        </div>

        <p className="text-xs md:text-sm opacity-80 italic leading-relaxed mb-8">
          {lang === 'kh'
            ? '"វត្តមានរបស់លោកអ្នកក្នុងពិធីមង្គលការរបស់យើងខ្ញុំ គឺជាកាដូដ៏ធំបំផុត។ ប៉ុន្តែប្រសិនបើលោកអ្នកចង់ផ្តល់ជាចំណងដៃ យើងខ្ញុំសូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅបំផុត។"'
            : '"Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, a monetary contribution would be greatly appreciated."'}
        </p>

        {/* QR Code */}
        {giftInfo.qr_code_url && (
          <div className="w-48 h-48 mx-auto my-6 p-3 glass-panel rounded-2xl shadow-inner flex items-center justify-center transition-transform duration-500 hover:scale-105">
            <img
              src={giftInfo.qr_code_url}
              alt="Bank QR Code"
              className="w-full h-full object-contain rounded-xl"
            />
          </div>
        )}

        <div className="glass-panel p-5 rounded-2xl mt-6 text-left font-khmer-kantumruuy space-y-1 relative overflow-hidden">
          {/* Subtle Bank Highlight */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/3"></div>
          
          <div className="relative z-10">
            <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest">{giftInfo.bank_name}</p>
            <p className="font-khmer-moul text-lg text-[#8B0000] drop-shadow-sm mt-1">
              {giftInfo.account_name}
            </p>
            <div className="flex items-center justify-between text-sm md:text-base font-semibold pt-4 mt-2 border-t border-[#D4AF37]/20">
              <span className="tracking-wider drop-shadow-sm">{giftInfo.account_number}</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs py-2 px-5 bg-gradient-to-r from-[#8B0000] to-[#5A0000] text-[#D4AF37] rounded-full shadow-lg transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_4px_15px_rgba(139,0,0,0.4)] active:scale-95 cursor-pointer font-medium"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>
                  {copied
                    ? lang === 'kh' ? 'បានចម្លង!' : 'Copied!'
                    : lang === 'kh' ? 'ចម្លងលេខ' : 'Copy'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
