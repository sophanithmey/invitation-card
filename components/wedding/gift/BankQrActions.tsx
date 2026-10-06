'use client';

import React from 'react';
import { Copy, Check, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

export interface BankQrActionsProps {
  copied: boolean;
  sharedToast: boolean;
  onCopy: () => void;
  onShare: () => void;
}

export function BankQrActions({
  copied,
  sharedToast,
  onCopy,
  onShare,
}: BankQrActionsProps) {
  const { language } = useLanguage();

  return (
    <div className='space-y-3 pt-2'>
      <button
        onClick={onCopy}
        className='w-full py-3.5 px-5 bg-linear-to-r from-[#8B0000] via-[#A81B26] to-[#5A0000] hover:from-[#730000] hover:to-[#400000] text-[#FFF5C0] font-bold text-sm sm:text-base rounded-2xl shadow-[0_6px_20px_rgba(139,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(139,0,0,0.4)] transition-all duration-300 hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-2 leading-normal'
        style={{
          fontFamily:
            language === 'kh' ? "'Moulpali', cursive, serif" : undefined,
        }}
      >
        {copied ? (
          <>
            <Check className='w-4 h-4 text-emerald-300' />
            <span>
              {language === 'kh'
                ? 'បានចម្លងលេខគណនីជោគជ័យ!'
                : 'Account Number Copied!'}
            </span>
          </>
        ) : (
          <>
            <Copy className='w-4 h-4 text-[#D4AF37]' />
            <span>
              {language === 'kh' ? 'ចម្លងលេខគណនីធនាគារ' : 'Copy Account Number'}
            </span>
          </>
        )}
      </button>

      <button
        onClick={onShare}
        className='w-full py-3.5 px-5 bg-white hover:bg-[#FFF9EE] border-2 border-[#D4AF37]/70 hover:border-[#D4AF37] text-[#7A1624] font-semibold text-sm sm:text-base rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-2 leading-normal'
        style={{
          fontFamily:
            language === 'kh' ? "'Moulpali', cursive, serif" : undefined,
        }}
      >
        <Share2 className='w-4 h-4 text-[#C98C08]' />
        <span>
          {language === 'kh' ? 'ចែករំលែកព័ត៌មានបង់ប្រាក់' : 'Share Payment Details'}
        </span>
      </button>

      <AnimatePresence>
        {sharedToast && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className='p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs font-semibold flex items-center justify-center gap-2 shadow-sm'
          >
            <Check className='w-4 h-4 text-emerald-600' />
            <span>
              {language === 'kh'
                ? 'ព័ត៌មានធនាគារត្រូវបានចម្លងទៅកាន់ក្ដារតម្បៀតខ្ទាស់!'
                : 'Bank details copied to clipboard!'}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
