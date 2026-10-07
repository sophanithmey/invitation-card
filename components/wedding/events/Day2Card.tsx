'use client';

import React from 'react';
import { Calendar, Clock, Sparkles, Sun, Moon, Music } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { CornerFiligree } from './CornerFiligree';
import { Day2VenueCard } from './Day2VenueCard';

export interface Day2CardProps {
  activeDay: 'day1' | 'day2' | 'all';
  containerVariants: Variants;
  itemVariants: Variants;
}

export function Day2Card({
  activeDay,
  containerVariants,
  itemVariants,
}: Day2CardProps) {
  const { t, language } = useLanguage();
  const isKh = language === 'kh';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='space-y-6'
    >
      {activeDay === 'all' && (
        <div className='text-center pt-2'>
          <div className='h-px max-w-xs mx-auto bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent mb-6' />
        </div>
      )}

      <div className='relative max-w-3xl mx-auto rounded-2xl sm:rounded-3xl bg-linear-to-b from-white via-[#FFFDF9] to-[#FAF6EE] p-5 sm:p-8 md:p-10 border-2 border-[#D4AF37]/50 shadow-[0_15px_40px_rgba(212,175,55,0.12)] overflow-hidden'>
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

        <div className='absolute inset-3 border border-dashed border-[#D4AF37]/25 rounded-xl pointer-events-none' />

        <div className='relative z-10 text-center mb-8 pb-4 border-b border-[#D4AF37]/25'>
          <div className='inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#8B0000]/10 border border-[#8B0000]/30 text-[#8B0000] text-xs font-semibold mb-2'>
            <Sparkles className='w-3.5 h-3.5 text-[#D4AF37]' />
            <span
              className={
                isKh
                  ? 'font-khmer-moul text-xs tracking-normal'
                  : 'uppercase tracking-widest text-[11px]'
              }
            >
              {t.events.day2.badge}
            </span>
          </div>
          <h3
            className={`text-2xl sm:text-3xl font-bold text-[#8B0000] mb-1.5 ${
              isKh
                ? 'font-khmer-moul leading-[1.6] tracking-normal'
                : 'font-playfair tracking-wide'
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', 'Moul', cursive, serif"
                : 'Playfair Display, serif',
            }}
          >
            {t.events.day2.title}
          </h3>
          <div className='inline-flex items-center gap-2 text-[#9E6D08] text-xs sm:text-sm font-medium'>
            <Calendar className='w-3.5 h-3.5 text-[#D4AF37]' />
            <span
              className={
                isKh ? 'font-khmer-kantumruuy font-semibold' : 'font-serif'
              }
            >
              {t.events.day2.date}
            </span>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='relative z-10 space-y-6 sm:space-y-7 pl-3 sm:pl-6'
        >
          <div className='absolute left-6.5 sm:left-9.5 top-3 bottom-3 w-0.5 bg-linear-to-b from-[#D4AF37]/60 via-[#D4AF37]/30 to-[#D4AF37]/10' />

          {/* Morning Ceremony Phase Header */}
          <div className='relative flex items-center gap-3 pt-1 pb-1'>
            <div className='inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#8B0000] text-xs sm:text-sm font-bold shadow-xs'>
              <Sun className='w-4 h-4 text-[#D4AF37]' />
              <span
                className={
                  isKh
                    ? 'font-khmer-moul text-xs sm:text-sm tracking-normal'
                    : 'uppercase tracking-wider font-semibold'
                }
              >
                {t.events.day2.morningTitle}
              </span>
              <span className='text-[#8B0000]/70 text-xs hidden sm:inline'>
                • {t.events.day2.morningSubtitle}
              </span>
            </div>
          </div>

          {t.events.day2.morningItems.map((item, idx) => (
            <motion.div
              key={`morning-${idx}`}
              variants={itemVariants}
              className='relative flex items-start gap-4 sm:gap-6 group'
            >
              <div className='w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-[#D4AF37] shadow-sm flex items-center justify-center shrink-0 z-10 group-hover:scale-110 transition-transform'>
                <div className='w-2.5 h-2.5 rounded-full bg-[#8B0000]' />
              </div>

              <div className='flex-1 pb-1'>
                <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8B0000] text-xs font-bold mb-1'>
                  <Clock className='w-3 h-3 text-[#D4AF37]' />
                  <span>{item.time}</span>
                </div>
                <h4
                  className={`text-base sm:text-lg font-bold text-slate-800 ${
                    isKh
                      ? 'font-khmer-moul text-base leading-[1.6] tracking-normal'
                      : ''
                  }`}
                  style={{
                    fontFamily: isKh
                      ? "'Moulpali', 'Moul', cursive, serif"
                      : undefined,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-slate-600 text-xs sm:text-sm mt-0.5 leading-relaxed ${
                    isKh ? 'font-khmer-kantumruuy leading-[1.7]' : ''
                  }`}
                  style={{
                    fontFamily: isKh
                      ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                      : undefined,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Evening Reception Phase Header */}
          <div className='relative flex items-center gap-3 pt-4 pb-1'>
            <div className='inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-linear-to-r from-[#8B0000]/15 to-[#8B0000]/5 border border-[#8B0000]/30 text-[#8B0000] text-xs sm:text-sm font-bold shadow-xs'>
              <Moon className='w-4 h-4 text-[#8B0000]' />
              <span
                className={
                  isKh
                    ? 'font-khmer-moul text-xs sm:text-sm tracking-normal'
                    : 'uppercase tracking-wider font-semibold'
                }
              >
                {t.events.day2.eveningTitle}
              </span>
              <span className='text-[#8B0000]/70 text-xs hidden sm:inline'>
                • {t.events.day2.eveningSubtitle}
              </span>
            </div>
          </div>

          {t.events.day2.eveningItems.map((item, idx) => (
            <motion.div
              key={`evening-${idx}`}
              variants={itemVariants}
              className='relative flex items-start gap-4 sm:gap-6 group'
            >
              <div className='w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-linear-to-br from-[#8B0000] to-[#600000] border-2 border-[#D4AF37] shadow-md flex items-center justify-center shrink-0 z-10 group-hover:scale-110 transition-transform'>
                <Music className='w-3.5 h-3.5 text-[#FFF2B2]' />
              </div>

              <div className='flex-1 p-3.5 sm:p-5 rounded-2xl bg-linear-to-br from-white via-[#FFF9EE] to-[#FAF3E3] border-2 border-[#D4AF37]/50 shadow-sm'>
                <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#8B0000] text-[#FFF2B2] text-xs font-bold mb-1.5 shadow-xs'>
                  <Clock className='w-3 h-3 text-[#FFF2B2]' />
                  <span>{item.time}</span>
                </div>
                <h4
                  className={`text-base sm:text-lg font-bold text-[#8B0000] ${
                    isKh
                      ? 'font-khmer-moul text-base leading-[1.6] tracking-normal'
                      : ''
                  }`}
                  style={{
                    fontFamily: isKh
                      ? "'Moulpali', 'Moul', cursive, serif"
                      : undefined,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className={`text-slate-700 text-xs sm:text-sm mt-1 leading-relaxed font-medium ${
                    isKh ? 'font-khmer-kantumruuy leading-[1.7]' : ''
                  }`}
                  style={{
                    fontFamily: isKh
                      ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                      : undefined,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <Day2VenueCard />
      </div>
    </motion.div>
  );
}
