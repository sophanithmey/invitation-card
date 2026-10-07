'use client';

import React, { useState } from 'react';
import { PhoneCall, Phone, Copy, Check, PhoneIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { CornerFiligree } from './events/CornerFiligree';
import { cn, copyToClipboard } from '@/lib/utils';

export interface ContactSectionProps {
  phone1?: string;
  phone2?: string;
  phone3?: string;
}

export default function ContactSection({
  phone1,
  phone2,
  phone3,
}: ContactSectionProps) {
  const { language } = useLanguage();
  const isKh = language === 'kh';
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const phones = [phone1, phone2, phone3].filter(Boolean) as string[];

  if (phones.length === 0) return null;

  const handleCopy = async (
    e: React.MouseEvent,
    phone: string,
    idx: number,
  ) => {
    e.preventDefault();
    e.stopPropagation();
    await copyToClipboard(phone.replace(/\s+/g, ''));
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section className='py-16 sm:py-24 px-3 sm:px-6 relative bg-[#FDFBF7] overflow-hidden'>
      {/* Background ambient lighting */}
      <div className='absolute top-1/3 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#8B0000]/5 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-4xl mx-auto relative z-10'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-8 sm:mb-12'
        >
          <div className='w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 flex items-center justify-center mx-auto mb-3 shadow-xs'>
            <PhoneCall className='w-6 h-6 text-[#D4AF37]' />
          </div>

          <h2
            className={cn(
              'font-bold text-[#8B0000] mb-2 sm:mb-3',
              isKh
                ? 'font-khmer-moul text-2xl sm:text-3xl leading-[1.65] tracking-normal'
                : 'text-3xl sm:text-4xl font-playfair tracking-wide',
            )}
            style={{
              fontFamily: isKh
                ? "'Moulpali', 'Moul', cursive, serif"
                : 'Playfair Display, serif',
            }}
          >
            {isKh ? 'ទំនាក់ទំនង' : 'Contact Information'}
          </h2>

          {/* Traditional Khmer Divider */}
          <div className='flex items-center justify-center gap-3 mb-4 opacity-80'>
            <div className='h-px w-16 sm:w-28 bg-linear-to-r from-transparent to-[#D4AF37]' />
            <svg
              className='w-5 h-5 text-[#D4AF37]'
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

          <p
            className={cn(
              'text-slate-600 text-sm sm:text-base max-w-md mx-auto',
              isKh ? 'font-khmer-kantumruuy leading-relaxed' : 'italic',
            )}
            style={{
              fontFamily: isKh
                ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                : undefined,
            }}
          >
            {isKh
              ? 'ព័ត៌មានបន្ថែម សូមទំនាក់ទំនងមកកាន់ម្ចាស់កម្មវិធី'
              : 'For inquiries or further details, please reach out directly'}
          </p>
        </motion.div>

        {/* Single Elegant Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className='relative max-w-xl mx-auto rounded-2xl sm:rounded-3xl bg-linear-to-b from-white via-[#FFFDF9] to-[#FAF6EE] p-6 sm:p-9 border-2 border-[#EBC070]/60 shadow-[0_15px_40px_rgba(201,140,8,0.12)] hover:shadow-[0_20px_50px_rgba(201,140,8,0.18)] transition-shadow duration-500 overflow-hidden'
        >
          {/* Filigree Decorative Corners */}
          <div className='absolute top-2 left-2 opacity-60'>
            <CornerFiligree />
          </div>
          <div className='absolute top-2 right-2 opacity-60 rotate-90'>
            <CornerFiligree />
          </div>
          <div className='absolute bottom-2 left-2 opacity-60 -rotate-90'>
            <CornerFiligree />
          </div>
          <div className='absolute bottom-2 right-2 opacity-60 rotate-180'>
            <CornerFiligree />
          </div>

          {/* Inner Dashed Border */}
          <div className='absolute inset-2 sm:inset-3 border border-dashed border-[#D4AF37]/25 rounded-xl sm:rounded-2xl pointer-events-none' />

          <div className='relative z-10'>
            {/* Header Badge */}
            <div className='flex items-center justify-between px-5 py-3 rounded-2xl bg-linear-to-r from-[#7A1624] via-[#8B0000] to-[#5C0F1A] text-white shadow-md mb-6 sm:mb-8'>
              <div className='flex items-center gap-2.5'>
                <div className='w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center border border-white/20'>
                  <Phone className='w-4 h-4 text-[#EBC070]' />
                </div>
                <span
                  className={cn(
                    'font-bold text-sm sm:text-base',
                    isKh
                      ? 'font-khmer-moul tracking-normal'
                      : 'font-serif tracking-wider',
                  )}
                  style={{
                    fontFamily: isKh
                      ? "'Moulpali', 'Moul', cursive, serif"
                      : 'Playfair Display, serif',
                  }}
                >
                  {isKh ? 'ម្ចាស់កម្មវិធី' : 'Host Contact Numbers'}
                </span>
              </div>
              <div className='flex items-center gap-1 px-3 py-1 rounded-full bg-white/15 border border-white/25 text-[11px] font-bold text-[#FFF5C0]'>
                <PhoneIcon className='w-3 h-3 text-[#EBC070]' />
                <span>
                  {phones.length} {isKh ? 'ខ្សែ' : 'Lines'}
                </span>
              </div>
            </div>

            {/* Phone Items List */}
            <div className='space-y-3 sm:space-y-4'>
              {phones.map((phone, idx) => {
                const isCopied = copiedIndex === idx;
                const cleanPhone = phone.replace(/\s+/g, '');

                return (
                  <div
                    key={idx}
                    className='group relative flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:px-5 sm:py-4 rounded-2xl bg-white/95 hover:bg-white border border-[#EBC070]/50 hover:border-[#D4AF37] shadow-xs hover:shadow-md transition-all duration-300'
                  >
                    <a
                      href={`tel:${cleanPhone}`}
                      className='flex items-center gap-3.5 flex-1 min-w-0'
                    >
                      <div className='w-10 h-10 rounded-xl bg-[#FAF5EC] group-hover:bg-[#8B0000] text-[#8B0000] group-hover:text-white flex items-center justify-center border border-[#EBC070]/40 transition-colors duration-300 shrink-0'>
                        <PhoneCall className='w-5 h-5' />
                      </div>
                      <div className='truncate'>
                        <span className='text-xs uppercase text-[#8F6608] font-bold block mb-0.5 font-khmer-kantumruuy'>
                          {isKh ? `ខ្សែទី ${idx + 1}` : `Line ${idx + 1}`}
                        </span>
                        <span className='font-mono text-lg sm:text-xl font-bold text-[#7A1624] tracking-wider group-hover:text-[#8B0000] transition-colors'>
                          {phone}
                        </span>
                      </div>
                    </a>

                    <div className='flex items-center gap-2 self-end sm:self-center shrink-0'>
                      <button
                        type='button'
                        onClick={(e) => handleCopy(e, phone, idx)}
                        className='px-3 py-2 rounded-xl bg-[#FFFDF9] hover:bg-[#FCEEC8] border border-[#D4AF37]/50 text-[#7A1624] font-semibold text-xs transition-all duration-200 hover:scale-105 active:scale-95 shadow-xs flex items-center gap-1.5 cursor-pointer'
                        title={isKh ? 'ចម្លងលេខ' : 'Copy number'}
                      >
                        {isCopied ? (
                          <>
                            <Check className='w-3.5 h-3.5 text-emerald-600' />
                            <span className='text-emerald-700 font-bold'>
                              {isKh ? 'ចម្លងរួច!' : 'Copied!'}
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className='w-3.5 h-3.5 text-[#C98C08]' />
                            <span
                              className={isKh ? 'font-khmer-kantumruuy' : ''}
                            >
                              {isKh ? 'ចម្លង' : 'Copy'}
                            </span>
                          </>
                        )}
                      </button>

                      <a
                        href={`tel:${cleanPhone}`}
                        className='px-4 py-2 rounded-xl bg-linear-to-r from-[#8B0000] to-[#A00E0E] hover:from-[#7A1624] hover:to-[#8B0000] text-white font-bold text-xs shadow-xs hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-1.5'
                      >
                        <Phone className='w-3.5 h-3.5' />
                        <span className={isKh ? 'font-khmer-kantumruuy' : ''}>
                          {isKh ? 'ខល' : 'Call'}
                        </span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Friendly hint footer */}
            <p className='text-center text-xs text-[#8F6608] mt-6 font-khmer-kantumruuy opacity-90'>
              {isKh
                ? 'ចុចលើលេខទូរស័ព្ទ ឬប៊ូតុង «ខល» ដើម្បីធ្វើការហៅទូរស័ព្ទផ្ទាល់'
                : "Tap on the number or 'Call' button to place a direct phone call"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
