'use client';

import { Calendar, ArrowDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { t, language } = useLanguage();
  const isKh = language === 'kh';

  const handleAddToCalendar = () => {
    const title = 'Vadey and Sopheap Wedding';
    const note = 'Vadey and Sopheap Wedding';
    const location =
      'គេហដ្ឋានខាងស្រី ភូមិកំពង់ត្រាចទី១ ឃុំកំពង់ត្រាចខាងកើត​ ស្រុកកំពង់ត្រាច ខេត្តកំពត';
    const startDate = '20261125T070000';
    const endDate = '20261125T220000';

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Soursdey Digital Weddings//Wedding Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:wedding-vadey-sopheap-20261125@invitation',
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${note}`,
      `LOCATION:${location}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], {
      type: 'text/calendar;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'vadey-and-sopheap-wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <header className='relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-32'>
      {/* Background Image with Parallax-like feel */}
      <div className='absolute inset-0 z-0'>
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          src='/vadey/5.JPG'
          alt='Couple'
          className='w-full h-full object-cover object-center sm:object-[center_calc(50%+100px)]'
        />
        {/* Refined gradient overlay for clear contrast without darkening the whole photo */}
        <div className='absolute inset-0 bg-linear-to-b from-black/50 via-black/25 to-[#FDFBF7]' />
      </div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        className='relative z-10 text-center px-4 max-w-2xl mx-auto flex flex-col items-center'
      >
        {/* Getting Married Badge / Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className='inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-[#D4AF37]/50 text-[#FFF2B2] mb-3 sm:mb-4 shadow-sm'
        >
          <span
            className={`text-xs sm:text-sm font-semibold ${
              isKh
                ? 'font-khmer-moul tracking-normal'
                : 'uppercase tracking-widest text-xs'
            }`}
            style={{
              fontFamily: isKh
                ? "'Moulpali', 'Moul', cursive, serif"
                : undefined,
            }}
          >
            {t.hero.gettingMarried}
          </span>
        </motion.div>

        {/* Couple Names Heading - Mobile-proportioned & High-contrast */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className={`font-bold text-white mb-4 sm:mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] text-center ${
            isKh
              ? 'text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-[1.65] tracking-normal'
              : 'font-cursive text-4xl xs:text-5xl sm:text-7xl md:text-8xl leading-tight'
          }`}
        >
          {isKh ? (
            <span className='inline-flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3.5'>
              <span className='font-khmer-moul'>សុភាព</span>
              <span className='text-[#FFF2B2] text-xl xs:text-2xl sm:text-3xl font-light opacity-95'>
                &
              </span>
              <span className='font-khmer-moul'>ច័ន្ទវដ្តី</span>
            </span>
          ) : (
            <span className='font-cursive'>Sopheap & Chanvadey</span>
          )}
        </motion.h1>

        {/* Date Badge - Clickable to Add to Phone Calendar */}
        <motion.button
          type='button'
          onClick={handleAddToCalendar}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className='inline-flex items-center gap-2.5 sm:gap-3 text-white/95 backdrop-blur-md bg-black/35 hover:bg-black/55 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full border border-white/25 hover:border-[#D4AF37]/60 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group'
          title={
            isKh
              ? 'ចុចដើម្បីបញ្ចូលទៅប្រតិទិនទូរស័ព្ទ'
              : 'Click to add to phone calendar'
          }
          aria-label={
            isKh ? 'បញ្ចូលទៅប្រតិទិនទូរស័ព្ទ' : 'Add to Phone Calendar'
          }
        >
          <Calendar className='w-4 h-4 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform' />
          <span
            className={`text-xs sm:text-sm font-semibold text-[#FFFDF9] ${
              isKh
                ? 'font-khmer-moul tracking-normal'
                : 'tracking-widest uppercase'
            }`}
          >
            {t.hero.date}
          </span>
        </motion.button>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className='absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-white/80'
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className='w-5 h-5 sm:w-6 sm:h-6 drop-shadow-md' />
        </motion.div>
      </motion.div>
    </header>
  );
}
