'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { QrCode, Copy, Check } from 'lucide-react';
import { GiftInfo } from '@/domain/entities/details';
import { copyToClipboard } from '@/lib/utils';

interface EtheapBankQrProps {
  giftInfo?: GiftInfo;
  enabled?: boolean;
}

export const EtheapBankQr: React.FC<EtheapBankQrProps> = ({
  giftInfo,
  enabled = true,
}) => {
  const [copied, setCopied] = useState(false);

  if (!enabled || !giftInfo) return null;

  const handleCopy = async () => {
    if (giftInfo.account_number) {
      await copyToClipboard(
        giftInfo.account_number.replace(/\s+/g, ''),
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section className='relative px-4 py-4 text-center'>
      <div className='max-w-md mx-auto bg-[#FFFCF7] rounded-3xl border border-[#EBC070]/60 p-6 sm:p-7 shadow-[0_6px_25px_rgba(201,140,8,0.08)] space-y-4'>
        <div className='space-y-1'>
          <div className='inline-flex items-center gap-2 text-[#C98C08]'>
            <QrCode className='w-4 h-4' />
            <span className='text-[11px] font-semibold tracking-[0.2em] uppercase'>
              Wedding Gift & Blessings
            </span>
          </div>
          <h2 className='font-khmer-moul text-sm sm:text-base text-[#7A1624]'>
            ចំណងដៃអាពាហ៍ពិពាហ៍
          </h2>
          <p className='font-khmer-kantumruuy text-xs text-[#84623A]'>
            លោកអ្នកអាចចូលរួមចំណងដៃតាមរយៈការស្កេន QR Code ខាងក្រោម
          </p>
        </div>

        {/* QR Code Container */}
        <div className='bg-[#FAF4E6]/90 rounded-2xl p-5 border border-[#EBC070]/50 max-w-70 mx-auto space-y-3 shadow-xs'>
          {giftInfo.qr_code_url && (
            <div className='relative w-44 h-44 mx-auto rounded-xl overflow-hidden bg-white p-2 border-2 border-[#EBC070] shadow-sm'>
              <Image
                src={giftInfo.qr_code_url}
                alt='Bank QR Code'
                fill
                className='object-contain p-2'
                sizes='180px'
              />
            </div>
          )}

          <div className='space-y-1'>
            <span className='inline-block font-mono font-bold text-xs text-[#C98C08] tracking-wider uppercase'>
              {giftInfo.bank_name || 'ABA Bank'}
            </span>
            <p className='font-mono font-semibold text-xs text-[#7A1624]'>
              {giftInfo.account_name}
            </p>
            <p className='font-mono text-sm font-bold text-[#4A351C] tracking-wider'>
              {giftInfo.account_number}
            </p>
          </div>

          {giftInfo.account_number && (
            <button
              onClick={handleCopy}
              className='w-full py-2 px-3 bg-white hover:bg-[#FAF4E6] text-[#7A1624] border border-[#EBC070] rounded-lg font-khmer-kantumruuy text-xs font-semibold inline-flex items-center justify-center gap-1.5 shadow-2xs transition-all cursor-pointer'
            >
              {copied ? (
                <>
                  <Check className='w-3.5 h-3.5 text-emerald-600' />
                  <span className='text-emerald-700'>បានចម្លងលេខគណនី</span>
                </>
              ) : (
                <>
                  <Copy className='w-3.5 h-3.5 text-[#C98C08]' />
                  <span>ចម្លងលេខគណនី (Copy)</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
