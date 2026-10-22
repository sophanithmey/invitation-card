'use client';

import React from 'react';
import Image from 'next/image';
import { GiftInfo } from '@/domain/entities/details';
import { CelestialCopy } from './celestial-copy';

interface CelestialGiftProps {
  giftInfo?: GiftInfo;
  giftEnabled?: boolean;
  copy: CelestialCopy;
  isKh: boolean;
}

export const CelestialGift: React.FC<CelestialGiftProps> = ({
  giftInfo,
  giftEnabled = true,
  copy,
  isKh,
}) => {
  if (!giftEnabled || !giftInfo?.account_number) return null;

  return (
    <section
      id='cd-gift'
      aria-label='Gift Registry'
      className='relative w-full bg-linear-to-b from-[#0F1833] to-[#18254A] px-4 py-16 text-center'
    >
      <div className='mx-auto flex w-full max-w-md flex-col items-center gap-6'>
        <p
          className={`text-[0.65rem] uppercase text-[#C9A45C] ${
            isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.34em]'
          }`}
        >
          {copy.giftKicker}
        </p>

        <h2
          className={`text-[clamp(1.5rem,6vw,2.2rem)] text-[#F8F7F3] ${
            isKh ? 'font-khmer-moul' : 'cd-font-display tracking-[0.04em]'
          }`}
        >
          {copy.giftTitle}
        </h2>

        <p
          className={`text-sm text-[#F2E9D9]/80 ${
            isKh ? 'font-khmer' : 'cd-font-serif'
          }`}
        >
          {copy.giftNote}
        </p>

        <div className='w-full rounded-3xl border border-[#C9A45C]/40 bg-[#18254A]/40 p-6 shadow-lg backdrop-blur-sm'>
          {giftInfo.qr_code_url && (
            <div className='relative mx-auto mb-4 aspect-square w-44 overflow-hidden rounded-2xl border border-[#C9A45C]/30 bg-white p-2'>
              <Image
                src={giftInfo.qr_code_url}
                alt='QR Code'
                fill
                sizes='176px'
                className='object-contain p-1'
              />
            </div>
          )}
          <h3 className='text-base font-semibold text-[#F8F7F3]'>
            {giftInfo.bank_name || 'Bank Transfer'}
          </h3>
          <p className='mt-1 text-sm font-medium text-[#C9A45C]'>
            {giftInfo.account_name}
          </p>
          <p className='mt-1 font-mono text-xs text-[#F2E9D9]/85'>
            {giftInfo.account_number}
          </p>
        </div>
      </div>
    </section>
  );
};
