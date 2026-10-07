'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { copyToClipboard } from '@/lib/utils';
import { GratitudeCard } from './gift/GratitudeCard';
import { BankQrCard } from './gift/BankQrCard';

export interface GiftSectionProps {
  bankName?: string;
  accountName?: string;
  accountNumber?: string;
  qrCodeUrl?: string;
}

export default function GiftSection({
  bankName,
  accountName,
  accountNumber = '000 111 222',
  qrCodeUrl,
}: GiftSectionProps) {
  const { t, language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);

  const displayBank = bankName || t.gift.bank || 'ធនាគារ ABA';
  const displayAccountName =
    accountName || (language === 'kh' ? 'ចាន់ សុខា' : 'Chan Sokha');
  const displayAccountNumber = accountNumber || '000 111 222';
  const displayQrCode =
    qrCodeUrl ||
    `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=ABA_PAY_${encodeURIComponent(
      displayAccountName,
    )}_${displayAccountNumber.replace(/\s+/g, '')}&color=003B5C`;

  const handleCopy = async () => {
    await copyToClipboard(displayAccountNumber.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = async () => {
    const shareText = `${displayBank}\n${
      language === 'kh' ? 'ឈ្មោះគណនី' : 'Account Name'
    }: ${displayAccountName}\n${
      language === 'kh' ? 'លេខគណនី' : 'Account Number'
    }: ${displayAccountNumber}`;

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: `Wedding Gift - ${displayAccountName}`,
          text: shareText,
        });
        return;
      } catch {
        // Fallback to copy if user cancelled or not supported
      }
    }

    await copyToClipboard(shareText);
    setSharedToast(true);
    setTimeout(() => setSharedToast(false), 3000);
  };

  const handleDownloadQr = () => {
    window.open(displayQrCode, '_blank');
  };

  return (
    <section className='py-24 px-4 relative overflow-hidden bg-[#FDFBF7]'>
      <div className='absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-1/3 right-1/4 translate-y-1/2 w-96 h-96 bg-[#8B0000]/6 rounded-full blur-3xl pointer-events-none' />

      <div className='absolute inset-0 opacity-5 pointer-events-none'>
        <img
          src='/khmer-texture.png'
          className='w-full h-full object-cover'
          alt='texture'
        />
      </div>

      <div className='max-w-5xl mx-auto relative z-10 text-center'>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-xs text-[#7A1624] text-xs font-semibold uppercase mb-4 ${
            language === 'kh' ? 'tracking-normal font-khmer-kantumruuy' : 'tracking-[0.25em]'
          }`}
        >
          <Sparkles className='w-3.5 h-3.5 text-[#D4AF37]' />
          <span>
            {language === 'kh'
              ? 'ចំណងដៃ និង ការជូនពរ'
              : 'Wedding Gift & Blessings'}
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className={`font-bold text-[#7A1624] mb-4 drop-shadow-xs ${
            language === 'kh' ? 'font-khmer-moul text-2xl sm:text-3xl tracking-normal' : 'font-serif text-3xl sm:text-4xl tracking-wide'
          }`}
          style={{
            fontFamily:
              language === 'kh'
                ? "'Moulpali', 'Moul', cursive, serif"
                : 'Playfair Display, serif',
          }}
        >
          {t.gift.title}
        </motion.h2>

        <div className='flex items-center justify-center gap-3 mb-8 opacity-80'>
          <div className='h-px w-16 sm:w-28 bg-linear-to-r from-transparent to-[#D4AF37]' />
          <svg
            className='w-6 h-6 text-[#D4AF37]'
            viewBox='0 0 100 100'
            fill='none'
          >
            <rect
              x='50'
              y='15'
              width='49.5'
              height='49.5'
              transform='rotate(45 50 15)'
              stroke='currentColor'
              strokeWidth='2.5'
            />
            <circle cx='50' cy='50' r='9' fill='currentColor' />
          </svg>
          <div className='h-px w-16 sm:w-28 bg-linear-to-l from-transparent to-[#D4AF37]' />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light mb-14 ${
            language === 'kh' ? 'font-khmer-kantumruuy' : ''
          }`}
          style={{
            fontFamily:
              language === 'kh'
                ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                : undefined,
          }}
        >
          {t.gift.desc}
        </motion.p>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch'>
          <GratitudeCard />
          <BankQrCard
            displayBank={displayBank}
            displayAccountName={displayAccountName}
            displayAccountNumber={displayAccountNumber}
            displayQrCode={displayQrCode}
            copied={copied}
            sharedToast={sharedToast}
            onCopy={handleCopy}
            onShare={handleShare}
            onDownloadQr={handleDownloadQr}
          />
        </div>
      </div>
    </section>
  );
}
