'use client';

import React from 'react';
import { CreditCard, Download, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { FiligreeCorners } from './FiligreeCorners';
import { BankQrActions } from './BankQrActions';

export interface BankQrCardProps {
  displayBank: string;
  displayAccountName: string;
  displayAccountNumber: string;
  displayQrCode: string;
  copied: boolean;
  sharedToast: boolean;
  onCopy: () => void;
  onShare: () => void;
  onDownloadQr: () => void;
}

export function BankQrCard({
  displayBank,
  displayAccountName,
  displayAccountNumber,
  displayQrCode,
  copied,
  sharedToast,
  onCopy,
  onShare,
  onDownloadQr,
}: BankQrCardProps) {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='group relative bg-linear-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF5EC] rounded-3xl p-8 sm:p-10 border-2 border-[#EBC070]/60 shadow-[0_15px_40px_rgba(201,140,8,0.12)] hover:shadow-[0_22px_55px_rgba(201,140,8,0.2)] hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-between overflow-hidden'
    >
      <FiligreeCorners />

      <div>
        <div className='flex items-center justify-between px-5 py-3 rounded-2xl bg-linear-to-r from-[#003B5C] via-[#004B75] to-[#002D47] text-white shadow-md mb-6'>
          <div className='flex items-center gap-2.5'>
            <div className='w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center border border-white/20'>
              <CreditCard className='w-4 h-4 text-[#D4AF37]' />
            </div>
            <span className='font-bold tracking-wider text-sm sm:text-base'>
              {displayBank}
            </span>
          </div>
          <div className='px-3 py-1 rounded-full bg-white/15 border border-white/25 text-[11px] font-mono font-bold tracking-widest text-[#FFF5C0] uppercase'>
            KHQR Pay
          </div>
        </div>

        <div className='relative w-56 h-56 sm:w-60 sm:h-60 mx-auto bg-white p-3.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 border-[#D4AF37]/50 mb-5 group/qr'>
          <div className='absolute inset-1.5 border border-[#EBC070]/40 rounded-xl pointer-events-none' />

          <div className='w-full h-full relative rounded-lg overflow-hidden flex items-center justify-center bg-white'>
            <img
              src={displayQrCode}
              alt='ABA KHQR Code'
              className='w-full h-full object-contain p-1 rounded-md'
            />

            <div className='absolute inset-0 bg-black/60 opacity-0 group-hover/qr:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-xs rounded-lg text-white'>
              <button
                onClick={onDownloadQr}
                className='px-4 py-2 bg-linear-to-r from-[#C98C08] to-[#EBC070] hover:from-[#A87406] hover:to-[#D4AF37] text-white rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95 cursor-pointer'
              >
                <Download className='w-3.5 h-3.5' />
                <span>{language === 'kh' ? 'ទាញយក QR' : 'Save QR'}</span>
              </button>
              <span className='text-[10px] text-white/80'>
                {language === 'kh'
                  ? 'ចុចដើម្បីបើករូបភាព'
                  : 'Click to view image'}
              </span>
            </div>
          </div>
        </div>

        <p className='text-xs text-[#8F6608] font-medium tracking-wide mb-6'>
          {language === 'kh'
            ? 'ស្កេនជាមួយគ្រប់កម្មវិធីធនាគារ (Bakong / KHQR)'
            : 'Scan with any Mobile Banking App (KHQR)'}
        </p>

        <div className='bg-white/90 rounded-2xl p-5 border border-[#EBC070]/50 shadow-inner space-y-3 mb-6'>
          <div>
            <span
              className={`text-[10px] uppercase text-[#8F6608] font-bold block mb-1 ${language === 'kh' ? 'tracking-normal font-khmer-kantumruuy' : 'tracking-[0.2em]'}`}
            >
              {language === 'kh' ? 'ឈ្មោះគណនី (Account Name)' : 'Account Name'}
            </span>
            <p
              className={`text-lg sm:text-xl font-bold text-[#7A1624] ${language === 'kh' ? 'tracking-normal' : 'tracking-wide'}`}
              style={{
                fontFamily:
                  language === 'kh'
                    ? "'Moulpali', 'Moul', cursive, serif"
                    : 'Playfair Display, serif',
              }}
            >
              {displayAccountName}
            </p>
          </div>

          <div className='pt-3 border-t border-[#EBC070]/30 flex flex-col sm:flex-row items-center justify-between gap-3'>
            <div className='text-left w-full sm:w-auto'>
              <span className='text-[10px] uppercase tracking-[0.2em] text-[#8F6608] font-bold block'>
                {language === 'kh'
                  ? 'លេខគណនី (Account Number)'
                  : 'Account Number'}
              </span>
              <span className='font-mono text-xl sm:text-2xl font-bold text-[#1E293B] tracking-wider block mt-0.5'>
                {displayAccountNumber}
              </span>
            </div>

            <button
              onClick={onCopy}
              className='w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#FFFDF9] hover:bg-[#FCEEC8] border border-[#D4AF37]/60 text-[#7A1624] font-semibold text-xs transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xs flex items-center justify-center gap-1.5 cursor-pointer shrink-0'
              title='Copy Account Number'
            >
              {copied ? (
                <>
                  <Check className='w-4 h-4 text-emerald-600' />
                  <span className='text-emerald-700 font-bold'>
                    {language === 'kh' ? 'បានចម្លង!' : 'Copied!'}
                  </span>
                </>
              ) : (
                <>
                  <Copy className='w-4 h-4 text-[#C98C08]' />
                  <span>{language === 'kh' ? 'ចម្លងលេខ' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <BankQrActions
        copied={copied}
        sharedToast={sharedToast}
        onCopy={onCopy}
        onShare={onShare}
      />
    </motion.div>
  );
}
