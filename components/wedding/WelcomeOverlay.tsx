'use client';

import { useMemo } from 'react';
import { Sparkles, Calendar, MailOpen, Music, Heart } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { cn } from '@/lib/utils';

interface WelcomeOverlayProps {
  guestName: string | null;
  showOverlay: boolean;
  onOpen: () => void;
}

// Traditional Khmer Corner Filigree SVG
function KhmerCornerOrnament({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn(
        'w-7 h-7 sm:w-9 sm:h-9 text-[#D4AF37] pointer-events-none',
        className,
      )}
      aria-hidden='true'
    >
      <path
        d='M2 42 V12 C2 6.477 6.477 2 12 2 H42'
        stroke='currentColor'
        strokeWidth='1.8'
        strokeLinecap='round'
      />
      <path
        d='M6 38 V14 C6 9.582 9.582 6 14 6 H38'
        stroke='currentColor'
        strokeWidth='1'
        strokeOpacity='0.5'
        strokeLinecap='round'
      />
      <path
        d='M12 26 C12 18.268 18.268 12 26 12'
        stroke='currentColor'
        strokeWidth='1'
        strokeOpacity='0.4'
      />
      <circle cx='13' cy='13' r='2.2' fill='currentColor' />
      <circle cx='2' cy='42' r='1.5' fill='currentColor' />
      <circle cx='42' cy='2' r='1.5' fill='currentColor' />
    </svg>
  );
}

export default function WelcomeOverlay({
  guestName,
  showOverlay,
  onOpen,
}: WelcomeOverlayProps) {
  const { t, language } = useLanguage();

  // Detect whether the guest name contains Khmer characters
  const isKhmerGuest = useMemo(() => {
    if (!guestName) return language === 'kh';
    return /[\u1780-\u17FF]/.test(guestName) || language === 'kh';
  }, [guestName, language]);

  return (
    <AnimatePresence>
      {showOverlay && guestName && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className='fixed inset-0 z-100 bg-[#FAF7F2]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto kbac-bg-pattern'
          role='dialog'
          aria-modal='true'
          aria-label='Wedding Invitation Welcome'
        >
          {/* Subtle Ambient Golden Glows */}
          <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-br from-[#D4AF37]/15 to-[#8B0000]/10 blur-3xl pointer-events-none' />

          {/* Invitation Card Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className='relative w-full max-w-lg my-auto bg-linear-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF5EC] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border-2 border-[#D4AF37]/60 shadow-[0_20px_50px_rgba(139,0,0,0.12),0_4px_20px_rgba(212,175,55,0.15)] text-center overflow-hidden'
          >
            {/* Traditional Khmer Corner Filigrees */}
            <div className='absolute top-2.5 left-2.5 opacity-70 hover:opacity-100 transition-opacity'>
              <KhmerCornerOrnament />
            </div>
            <div className='absolute top-2.5 right-2.5 opacity-70 hover:opacity-100 transition-opacity rotate-90'>
              <KhmerCornerOrnament />
            </div>
            <div className='absolute bottom-2.5 left-2.5 opacity-70 hover:opacity-100 transition-opacity -rotate-90'>
              <KhmerCornerOrnament />
            </div>
            <div className='absolute bottom-2.5 right-2.5 opacity-70 hover:opacity-100 transition-opacity rotate-180'>
              <KhmerCornerOrnament />
            </div>

            {/* Inner Etched Gold Border */}
            <div className='absolute inset-3 sm:inset-4.5 border border-[#D4AF37]/30 rounded-xl sm:rounded-2xl pointer-events-none' />

            {/* Card Content */}
            <div className='relative z-10 space-y-4 sm:space-y-5'>
              {/* Royal Seal / Emblem */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 240,
                  damping: 20,
                  delay: 0.2,
                }}
                className='relative w-16 h-16 sm:w-20 sm:h-20 mx-auto flex items-center justify-center'
              >
                {/* Gentle Pulsing Ring */}
                <div className='absolute inset-0 rounded-full bg-[#D4AF37]/20 animate-ping opacity-60' />
                {/* Golden Medallion Background */}
                <div className='relative w-full h-full rounded-full border-2 border-[#D4AF37] shadow-[0_4px_16px_rgba(212,175,55,0.35)] bg-gradient-to-br from-[#FFF8E7] via-[#FDF1D3] to-[#F5DEAC] flex items-center justify-center'>
                  <div className='w-[84%] h-[84%] rounded-full border border-dashed border-[#D4AF37]/70 flex items-center justify-center bg-white/40'>
                    <Heart className='w-6 h-6 sm:w-8 sm:h-8 text-[#8B0000] fill-[#8B0000]/15' />
                  </div>
                </div>
              </motion.div>

              {/* Invitation Top Header / Greeting */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className='inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#8B0000]'>
                  <Sparkles className='w-3.5 h-3.5 text-[#D4AF37] shrink-0' />
                  <span
                    className={`text-xs sm:text-sm font-semibold tracking-wider ${
                      language === 'kh'
                        ? 'font-khmer-moul leading-[1.6]'
                        : 'uppercase tracking-[0.2em]'
                    }`}
                    style={{
                      fontFamily:
                        language === 'kh'
                          ? "'Moulpali', cursive, serif"
                          : undefined,
                    }}
                  >
                    {t.welcome.invite}
                  </span>
                  <Sparkles className='w-3.5 h-3.5 text-[#D4AF37] shrink-0' />
                </div>
              </motion.div>

              {/* Honored Guest Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.55, duration: 0.6 }}
                className='relative py-3 sm:py-4 px-3 sm:px-5 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#FFFDF9]/80 via-white to-[#FFFDF9]/80 border border-[#D4AF37]/25 shadow-[inset_0_1px_4px_rgba(212,175,55,0.08)]'
              >
                <p
                  className={`text-slate-500 text-xs sm:text-sm mb-1 ${
                    language === 'kh'
                      ? 'font-khmer-kantumruuy leading-relaxed'
                      : 'uppercase tracking-widest text-[11px]'
                  }`}
                  style={{
                    fontFamily:
                      language === 'kh'
                        ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                        : undefined,
                  }}
                >
                  {language === 'kh' ? 'សូមគោរពអញ្ជើញ' : 'Cordially Invited'}
                </p>

                {/* Guest Name */}
                <h1
                  className={`font-bold text-[#8B0000] wrap-break text-balance px-1 transition-all duration-300 drop-shadow-[0_1px_2px_rgba(139,0,0,0.1)] ${
                    isKhmerGuest
                      ? 'font-khmer-moul text-2xl sm:text-3xl md:text-4xl py-1 sm:py-2 leading-[1.65]'
                      : 'font-cursive text-4xl sm:text-5xl md:text-6xl py-2 leading-tight'
                  }`}
                  style={{
                    fontFamily: isKhmerGuest
                      ? "'Moulpali', cursive, serif"
                      : "'Great Vibes', cursive",
                  }}
                >
                  {guestName}
                </h1>
              </motion.div>

              {/* Celebration Subtitle & Couple Info */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className='space-y-2'
              >
                <p
                  className={`text-slate-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed ${
                    language === 'kh'
                      ? 'font-khmer-kantumruuy leading-[1.8]'
                      : 'tracking-wide'
                  }`}
                  style={{
                    fontFamily:
                      language === 'kh'
                        ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                        : undefined,
                  }}
                >
                  {t.welcome.celebration}
                </p>

                {/* Couple Names */}
                <div className='flex items-center justify-center gap-2.5 sm:gap-3 py-0.5'>
                  <span className='h-px w-6 sm:w-10 bg-gradient-to-r from-transparent to-[#D4AF37]/60' />
                  <span
                    className={`text-base sm:text-lg font-bold text-[#8B0000] ${
                      language === 'kh'
                        ? 'font-khmer-moul leading-[1.6]'
                        : 'font-serif italic'
                    }`}
                    style={{
                      fontFamily:
                        language === 'kh'
                          ? "'Moulpali', cursive, serif"
                          : "'Playfair Display', serif",
                    }}
                  >
                    {language === 'kh' ? 'សុភាព & ច័ន្ទវដ្តី' : 'Sopheap & Chanvadey'}
                  </span>
                  <span className='h-px w-6 sm:w-10 bg-linear-to-l from-transparent to-[#D4AF37]/60' />
                </div>

                {/* Wedding Date Badge */}
                <div className='inline-flex items-center gap-2 text-[#9E6D08] bg-[#D4AF37]/10 px-3.5 py-1 rounded-full border border-[#D4AF37]/30 text-xs sm:text-sm'>
                  <Calendar className='w-3.5 h-3.5 text-[#D4AF37] shrink-0' />
                  <span
                    className={
                      language === 'kh'
                        ? 'font-khmer-moul text-xs sm:text-sm leading-[1.6]'
                        : 'font-serif tracking-wider'
                    }
                    style={{
                      fontFamily:
                        language === 'kh'
                          ? "'Moulpali', cursive, serif"
                          : undefined,
                    }}
                  >
                    {t.welcome.date}
                  </span>
                </div>
              </motion.div>

              {/* Action Button: Open Invitation */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className='pt-2 sm:pt-4 space-y-2.5'
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type='button'
                  onClick={onOpen}
                  className={`group relative overflow-hidden inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-3.5 rounded-full text-white text-base sm:text-lg font-semibold shadow-[0_10px_25px_rgba(139,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(139,0,0,0.45)] transition-all duration-300 cursor-pointer bg-gradient-to-r from-[#8B0000] via-[#A51212] to-[#8B0000] border-2 border-[#E5C158]/80`}
                  style={{
                    fontFamily:
                      language === 'kh'
                        ? "'Moulpali', cursive, serif"
                        : undefined,
                  }}
                >
                  {/* Subtle Light Shimmer */}
                  <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none' />

                  <MailOpen className='w-5 h-5 text-[#FFF5C0] group-hover:scale-110 transition-transform duration-300 shrink-0' />
                  <span
                    className={
                      language === 'kh'
                        ? 'font-khmer-moul tracking-wide leading-[1.6]'
                        : 'tracking-wider'
                    }
                  >
                    {t.welcome.open}
                  </span>
                  <Sparkles className='w-4 h-4 text-[#FFF5C0] animate-pulse shrink-0' />
                </motion.button>

                {/* Audio Notice */}
                <p
                  className={`text-slate-400 text-[11px] sm:text-xs flex items-center justify-center gap-1.5 ${
                    language === 'kh'
                      ? 'font-khmer-kantumruuy leading-relaxed'
                      : ''
                  }`}
                  style={{
                    fontFamily:
                      language === 'kh'
                        ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                        : undefined,
                  }}
                >
                  <Music className='w-3 h-3 text-[#D4AF37]' />
                  <span>
                    {language === 'kh'
                      ? 'ចុចដើម្បីបើកសំបុត្រ និងចាក់ភ្លេងមង្គល'
                      : 'Tap to open and play wedding music'}
                  </span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
