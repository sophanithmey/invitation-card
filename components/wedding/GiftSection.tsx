'use client';

import React, { useState } from 'react';
import {
  Gift,
  QrCode,
  Share2,
  Copy,
  Check,
  Download,
  Sparkles,
  Heart,
  CreditCard,
} from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { copyToClipboard } from '@/lib/utils';

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
      } catch (err) {
        // Fallback to copy if user cancelled or not supported
      }
    }

    await copyToClipboard(shareText);
    setSharedToast(true);
    setTimeout(() => setSharedToast(false), 3000);
  };

  const handleDownloadQr = () => {
    // Open QR in new tab for direct download/save
    window.open(displayQrCode, '_blank');
  };

  return (
    <section className='py-24 px-4 relative overflow-hidden bg-[#FDFBF7]'>
      {/* Ambient background glows */}
      <div className='absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-1/3 right-1/4 translate-y-1/2 w-96 h-96 bg-[#8B0000]/6 rounded-full blur-3xl pointer-events-none' />

      {/* Subtle traditional texture */}
      <div className='absolute inset-0 opacity-5 pointer-events-none'>
        <img
          src='/khmer-texture.png'
          className='w-full h-full object-cover'
          alt='texture'
        />
      </div>

      <div className='max-w-5xl mx-auto relative z-10 text-center'>
        {/* Section Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-xs text-[#7A1624] text-xs font-semibold tracking-[0.25em] uppercase mb-4'
        >
          <Sparkles className='w-3.5 h-3.5 text-[#D4AF37]' />
          <span>
            {language === 'kh'
              ? 'ចំណងដៃ និង ការជូនពរ'
              : 'Wedding Gift & Blessings'}
          </span>
        </motion.div>

        {/* Section Heading in Moulpali */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className='font-khmer-moul text-3xl sm:text-5xl text-[#7A1624] mb-4 tracking-wide drop-shadow-xs'
          style={{
            fontFamily:
              language === 'kh'
                ? "'Moulpali', cursive, serif"
                : 'Playfair Display, serif',
          }}
        >
          {t.gift.title}
        </motion.h2>

        {/* Traditional Ornamental Divider */}
        <div className='flex items-center justify-center gap-3 mb-8 opacity-80'>
          <div className='h-px w-16 sm:w-28 bg-gradient-to-r from-transparent to-[#D4AF37]' />
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
          <div className='h-px w-16 sm:w-28 bg-gradient-to-l from-transparent to-[#D4AF37]' />
        </div>

        {/* Subtitle / Intro Message */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className='text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-light mb-14'
        >
          {t.gift.desc}
        </motion.p>

        {/* Two Luxury Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch'>
          {/* ============================================================ */}
          {/* CARD 1: GRATITUDE & BLESSING CARD (LEFT)                     */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='group relative bg-linear-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF5EC] rounded-3xl p-8 sm:p-10 border-2 border-[#EBC070]/60 shadow-[0_15px_40px_rgba(201,140,8,0.12)] hover:shadow-[0_22px_55px_rgba(201,140,8,0.2)] hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-between overflow-hidden text-center'
          >
            {/* Traditional Corner Filigree */}
            <div className='absolute top-3 left-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity'>
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#D4AF37]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <circle cx='10' cy='10' r='2.5' fill='currentColor' />
              </svg>
            </div>
            <div className='absolute top-3 right-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity rotate-90'>
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#D4AF37]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <circle cx='10' cy='10' r='2.5' fill='currentColor' />
              </svg>
            </div>
            <div className='absolute bottom-3 left-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity -rotate-90'>
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#D4AF37]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <circle cx='10' cy='10' r='2.5' fill='currentColor' />
              </svg>
            </div>
            <div className='absolute bottom-3 right-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity rotate-180'>
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#D4AF37]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <circle cx='10' cy='10' r='2.5' fill='currentColor' />
              </svg>
            </div>

            <div>
              {/* Floating Gift Icon Badge */}
              <div className='w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-br from-[#FFF8E7] via-[#FCEEC8] to-[#F7DF9B] border-2 border-[#D4AF37] shadow-[0_8px_25px_rgba(212,175,55,0.3)] flex items-center justify-center text-[#8B0000] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
                <Gift className='w-9 h-9 text-[#8B0000]' />
              </div>

              {/* Thank You Title in Moulpali */}
              <h3
                className='font-khmer-moul text-2xl sm:text-3xl text-[#7A1624] mb-3 tracking-wide'
                style={{
                  fontFamily:
                    language === 'kh'
                      ? "'Moulpali', cursive, serif"
                      : 'Playfair Display, serif',
                }}
              >
                {t.gift.thanks}
              </h3>

              <p className='text-sm font-semibold uppercase tracking-[0.15em] text-[#C98C08] mb-6'>
                {t.gift.thanksSubtitle}
              </p>

              {/* Heartfelt Blessing Note Box */}
              <div className='bg-white/80 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-[#EBC070]/40 shadow-xs space-y-4 my-6'>
                <p className='text-xs sm:text-sm text-[#4A351C] italic leading-relaxed'>
                  {language === 'kh'
                    ? '«វត្តមានដ៏ឧត្តុង្គឧត្តម និងការប្រសិទ្ធពរជ័យរបស់លោកអ្នក គឺជាកាដូដ៏ពិសិដ្ឋបំផុតសម្រាប់ថ្ងៃមង្គលការរបស់យើងខ្ញុំ។ ប្រសិនបើលោកអ្នកមានបំណងចូលរួមចំណងដៃជាសក្ខីភាពនៃក្តីស្រឡាញ់ យើងខ្ញុំសូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅបំផុត។»'
                    : '"Your presence and warm blessings are the greatest gifts of all for our wedding. If you wish to honor us with a gift of love, your generous contribution is deeply appreciated."'}
                </p>
              </div>
            </div>

            {/* Couple Signature at Bottom */}
            <div className='pt-6 border-t border-[#EBC070]/40 mt-4'>
              <p className='text-[11px] uppercase tracking-[0.25em] text-[#C98C08] font-bold mb-1'>
                {language === 'kh'
                  ? 'ដោយក្តីស្រឡាញ់ និងការគោរពដឹងគុណ'
                  : 'With Love & Sincere Gratitude'}
              </p>
              <p
                className='text-xl sm:text-2xl text-[#7A1624]'
                style={{
                  fontFamily:
                    language === 'kh'
                      ? "'Moulpali', cursive, serif"
                      : 'Great Vibes, cursive',
                }}
              >
                {language === 'kh' ? 'សុខា & ទេវី' : 'Sokha & Devi'}
              </p>
            </div>
          </motion.div>

          {/* ============================================================ */}
          {/* CARD 2: LUXURY KHQR & BANK CARD (RIGHT)                      */}
          {/* ============================================================ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='group relative bg-linear-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF5EC] rounded-3xl p-8 sm:p-10 border-2 border-[#EBC070]/60 shadow-[0_15px_40px_rgba(201,140,8,0.12)] hover:shadow-[0_22px_55px_rgba(201,140,8,0.2)] hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-between overflow-hidden'
          >
            {/* Traditional Corner Filigree */}
            <div className='absolute top-3 left-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity'>
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#D4AF37]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <circle cx='10' cy='10' r='2.5' fill='currentColor' />
              </svg>
            </div>
            <div className='absolute top-3 right-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity rotate-90'>
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#D4AF37]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <circle cx='10' cy='10' r='2.5' fill='currentColor' />
              </svg>
            </div>
            <div className='absolute bottom-3 left-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity -rotate-90'>
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#D4AF37]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <circle cx='10' cy='10' r='2.5' fill='currentColor' />
              </svg>
            </div>
            <div className='absolute bottom-3 right-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity rotate-180'>
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#D4AF37]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='2'
                />
                <circle cx='10' cy='10' r='2.5' fill='currentColor' />
              </svg>
            </div>

            <div>
              {/* KHQR / Bank Brand Bar */}
              <div className='flex items-center justify-between px-5 py-3 rounded-2xl bg-gradient-to-r from-[#003B5C] via-[#004B75] to-[#002D47] text-white shadow-md mb-6'>
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

              {/* QR Code Presentation Box */}
              <div className='relative w-56 h-56 sm:w-60 sm:h-60 mx-auto bg-white p-3.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border-2 border-[#D4AF37]/50 mb-5 group/qr'>
                {/* Gold corner brackets on QR */}
                <div className='absolute inset-1.5 border border-[#EBC070]/40 rounded-xl pointer-events-none' />

                <div className='w-full h-full relative rounded-lg overflow-hidden flex items-center justify-center bg-white'>
                  <img
                    src={displayQrCode}
                    alt='ABA KHQR Code'
                    className='w-full h-full object-contain p-1 rounded-md'
                  />

                  {/* Interactive Download/Save Hover Overlay */}
                  <div className='absolute inset-0 bg-black/60 opacity-0 group-hover/qr:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-xs rounded-lg text-white'>
                    <button
                      onClick={handleDownloadQr}
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

              {/* QR Scan Helper Label */}
              <p className='text-xs text-[#8F6608] font-medium tracking-wide mb-6'>
                {language === 'kh'
                  ? 'ស្កេនជាមួយគ្រប់កម្មវិធីធនាគារ (Bakong / KHQR)'
                  : 'Scan with any Mobile Banking App (KHQR)'}
              </p>

              {/* Account Details Box */}
              <div className='bg-white/90 rounded-2xl p-5 border border-[#EBC070]/50 shadow-inner space-y-3 mb-6'>
                <div>
                  <span className='text-[10px] uppercase tracking-[0.2em] text-[#8F6608] font-bold block mb-1'>
                    {language === 'kh'
                      ? 'ឈ្មោះគណនី (Account Name)'
                      : 'Account Name'}
                  </span>
                  <p
                    className='text-lg sm:text-xl font-bold text-[#7A1624] tracking-wide'
                    style={{
                      fontFamily:
                        language === 'kh'
                          ? "'Moulpali', cursive, serif"
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

                  {/* Copy Account Micro-Action */}
                  <button
                    onClick={handleCopy}
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

            {/* Action Buttons: Full-width and beautifully spaced (NO MORE OVERFLOW!) */}
            <div className='space-y-3 pt-2'>
              {/* Primary Action Button: Copy Number */}
              <button
                onClick={handleCopy}
                className='w-full py-3.5 px-5 bg-linear-to-r from-[#8B0000] via-[#A81B26] to-[#5A0000] hover:from-[#730000] hover:to-[#400000] text-[#FFF5C0] font-bold text-sm sm:text-base rounded-2xl shadow-[0_6px_20px_rgba(139,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(139,0,0,0.4)] transition-all duration-300 hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-2 leading-normal'
                style={{
                  fontFamily:
                    language === 'kh'
                      ? "'Moulpali', cursive, serif"
                      : undefined,
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
                      {language === 'kh'
                        ? 'ចម្លងលេខគណនីធនាគារ'
                        : 'Copy Account Number'}
                    </span>
                  </>
                )}
              </button>

              {/* Secondary Action Button: Share Payment Details */}
              <button
                onClick={handleShare}
                className='w-full py-3.5 px-5 bg-white hover:bg-[#FFF9EE] border-2 border-[#D4AF37]/70 hover:border-[#D4AF37] text-[#7A1624] font-semibold text-sm sm:text-base rounded-2xl shadow-xs hover:shadow-md transition-all duration-300 hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-2 leading-normal'
                style={{
                  fontFamily:
                    language === 'kh'
                      ? "'Moulpali', cursive, serif"
                      : undefined,
                }}
              >
                <Share2 className='w-4 h-4 text-[#C98C08]' />
                <span>
                  {language === 'kh'
                    ? 'ចែករំលែកព័ត៌មានបង់ប្រាក់'
                    : 'Share Payment Details'}
                </span>
              </button>

              {/* Toast Feedback Notification */}
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
