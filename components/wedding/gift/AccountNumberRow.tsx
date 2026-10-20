'use client';

import React from 'react';
import { Copy, Check } from 'lucide-react';

export interface AccountNumberRowProps {
  label: string;
  badge?: string;
  badgeColor?: string;
  accountNumber: string;
  copied: boolean;
  onCopy: () => void;
  copyText?: string;
  copiedText?: string;
}

export const AccountNumberRow: React.FC<AccountNumberRowProps> = ({
  label,
  badge,
  badgeColor = 'bg-amber-100 text-amber-800',
  accountNumber,
  copied,
  onCopy,
  copyText = 'Copy',
  copiedText = 'Copied!',
}) => {
  return (
    <div className='pt-3 border-t border-[#EBC070]/30 flex flex-col sm:flex-row items-center justify-between gap-3'>
      <div className='text-left w-full sm:w-auto'>
        <div className='flex items-center gap-1.5 mb-0.5'>
          <span className='text-[10px] uppercase tracking-normal font-khmer text-[#8F6608] font-bold block'>
            {label}
          </span>
          {badge && (
            <span
              className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold leading-none ${badgeColor}`}
            >
              {badge}
            </span>
          )}
        </div>
        <span className='font-mono text-xl sm:text-2xl font-bold text-[#1E293B] tracking-wider block'>
          {accountNumber}
        </span>
      </div>

      <button
        type='button'
        onClick={onCopy}
        className='w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#FFFDF9] hover:bg-[#FCEEC8] border border-[#D4AF37]/60 text-[#7A1624] font-semibold text-xs transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer shrink-0'
        title='Copy Account Number'
      >
        {copied ? (
          <>
            <Check className='w-4 h-4 text-emerald-600' />
            <span className='text-emerald-700 font-bold'>{copiedText}</span>
          </>
        ) : (
          <>
            <Copy className='w-4 h-4 text-[#C98C08]' />
            <span>{copyText}</span>
          </>
        )}
      </button>
    </div>
  );
};
