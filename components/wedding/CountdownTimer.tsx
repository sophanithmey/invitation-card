'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { toKhmerDigits } from '@/lib/utils';

const TimeUnit = ({
  value,
  label,
  isKh = false,
}: {
  value: number;
  label: string;
  isKh?: boolean;
}) => {
  const formattedValue = isKh
    ? toKhmerDigits(String(value).padStart(2, '0'))
    : value.toString().padStart(2, '0');

  return (
    <div className='flex flex-col items-center'>
      <div className='relative group'>
        {/* Background Glow Effect */}
        <div className='absolute -inset-4 bg-linear-to-b from-[#D4AF37]/10 to-transparent rounded-4xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

        <div className='relative w-20 h-24 md:w-28 md:h-32 bg-white/10 backdrop-blur-2xl rounded-[1.25rem] border border-white/30 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden'>
          {/* Animated Number */}
          <AnimatePresence mode='popLayout'>
            <motion.span
              key={formattedValue}
              initial={{ y: 20, opacity: 0, filter: 'blur(8px)' }}
              animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
              exit={{ y: -20, opacity: 0, filter: 'blur(8px)' }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                duration: 0.5,
              }}
              className={`text-4xl md:text-5xl font-bold text-[#8B0000] ${
                isKh
                  ? 'font-khmer-kantumruuy tracking-normal'
                  : 'font-playfair tracking-tighter'
              }`}
              style={{
                fontFamily: isKh
                  ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                  : undefined,
              }}
            >
              {formattedValue}
            </motion.span>
          </AnimatePresence>

          {/* Glass Reflection Overlay */}
          <div className='absolute inset-0 bg-linear-to-br from-white/20 via-transparent to-transparent pointer-events-none' />
          <div className='absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/40 to-transparent' />
        </div>
      </div>

      {/* Label with subtle animation */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='text-[#D4AF37] uppercase text-[10px] md:text-[11px] font-black mt-4 drop-shadow-sm font-khmer-kantumruuy'
        style={{ letterSpacing: 'normal' }}
      >
        {label}
      </motion.span>
    </div>
  );
};

export default function CountdownTimer() {
  const { t, language } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-11-12T07:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative z-20 pt-2 pb-12 sm:pb-16 px-4'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className='max-w-4xl mx-auto'
      >
        <div className='relative overflow-hidden rounded-[2.5rem] bg-white/40 backdrop-blur-3xl border border-[#D4AF37]/35 shadow-[0_25px_50px_-15px_rgba(212,175,55,0.12)] p-8 md:p-12'>
          {/* Traditional Corner Filigree */}
          {[
            'top-3 left-3',
            'top-3 right-3 rotate-90',
            'bottom-3 left-3 -rotate-90',
            'bottom-3 right-3 rotate-180',
          ].map((pos, idx) => (
            <div
              key={idx}
              className={`absolute ${pos} w-8 h-8 pointer-events-none opacity-50`}
            >
              <svg
                viewBox='0 0 40 40'
                fill='none'
                className='w-full h-full text-[#D4AF37]'
              >
                <path
                  d='M2 38 V10 A8 8 0 0 1 10 2 H38'
                  stroke='currentColor'
                  strokeWidth='1.8'
                  strokeLinecap='round'
                />
                <circle cx='10' cy='10' r='2' fill='currentColor' />
              </svg>
            </div>
          ))}

          {/* Decorative Background Elements */}
          <div className='absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#D4AF37]/50 to-transparent' />
          <div className='absolute -top-32 -left-32 w-80 h-80 bg-[#D4AF37]/10 blur-[120px] rounded-full' />
          <div className='absolute -bottom-32 -right-32 w-80 h-80 bg-[#8B0000]/10 blur-[120px] rounded-full' />

          {/* Subtle Floating Hearts or Sparkles could go here */}

          <div className='relative z-10 flex flex-col items-center'>
            {/* Elegant Header */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className='flex items-center gap-4 md:gap-6 mb-10'
            >
              <div className='hidden md:block h-px w-16 bg-linear-to-r from-transparent to-[#D4AF37]/50' />
              <div className='flex flex-col items-center gap-1'>
                <span
                  className={`text-[#D4AF37] text-[9px] md:text-[10px] font-bold uppercase mb-1 ${
                    language === 'kh'
                      ? 'font-khmer-moul tracking-normal'
                      : 'tracking-[0.4em]'
                  }`}
                >
                  {language === 'kh'
                    ? 'រាប់ថយក្រោយឆ្ពោះទៅកាន់ថ្ងៃសិរីមង្គល'
                    : 'Save The Date'}
                </span>
                <h3
                  className={`text-[#8B0000] text-xl md:text-3xl text-center px-4 ${
                    language === 'kh'
                      ? 'font-khmer-moul tracking-normal'
                      : 'font-playfair italic tracking-wider'
                  }`}
                  style={{
                    fontFamily:
                      language === 'kh'
                        ? "'Moulpali', 'Moul', cursive, serif"
                        : 'Playfair Display, serif',
                  }}
                >
                  {t.countdown.date}
                </h3>
              </div>
              <div className='hidden md:block h-px w-16 bg-linear-to-l from-transparent to-[#D4AF37]/50' />
            </motion.div>

            {/* Timer Grid */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10'>
              <TimeUnit
                value={timeLeft.days}
                label={t.countdown.days}
                isKh={language === 'kh'}
              />
              <TimeUnit
                value={timeLeft.hours}
                label={t.countdown.hours}
                isKh={language === 'kh'}
              />
              <TimeUnit
                value={timeLeft.minutes}
                label={t.countdown.minutes}
                isKh={language === 'kh'}
              />
              <TimeUnit
                value={timeLeft.seconds}
                label={t.countdown.seconds}
                isKh={language === 'kh'}
              />
            </div>

            {/* Bottom Accent */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '80px' }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className='h-px bg-[#D4AF37]/30 mt-10'
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
