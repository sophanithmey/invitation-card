'use client';

import React from 'react';
import { Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { FiligreeCorners } from './FiligreeCorners';

export function GratitudeCard() {
  const { t, language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='group relative bg-linear-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF5EC] rounded-3xl p-8 sm:p-10 border-2 border-[#EBC070]/60 shadow-[0_15px_40px_rgba(201,140,8,0.12)] hover:shadow-[0_22px_55px_rgba(201,140,8,0.2)] hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-between overflow-hidden text-center'
    >
      <FiligreeCorners />

      <div>
        {/* Floating Gift Icon Badge */}
        <div className='w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-br from-[#FFF8E7] via-[#FCEEC8] to-[#F7DF9B] border-2 border-[#D4AF37] shadow-[0_8px_25px_rgba(212,175,55,0.3)] flex items-center justify-center text-[#8B0000] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
          <Gift className='w-9 h-9 text-[#8B0000]' />
        </div>

        {/* Thank You Title in Moulpali & Moul */}
        <h3
          className={`font-khmer-moul text-2xl sm:text-3xl text-[#7A1624] mb-3 ${
            language === 'kh' ? 'tracking-normal' : 'tracking-wide'
          }`}
          style={{
            fontFamily:
              language === 'kh'
                ? "'Moulpali', 'Moul', cursive, serif"
                : 'Playfair Display, serif',
          }}
        >
          {t.gift.thanks}
        </h3>

        <p
          className={`text-sm font-semibold uppercase text-[#C98C08] mb-6 ${
            language === 'kh'
              ? 'font-khmer-kantumruuy tracking-normal'
              : 'tracking-[0.15em]'
          }`}
        >
          {t.gift.thanksSubtitle}
        </p>

        {/* Heartfelt Blessing Note Box */}
        <div className='bg-white/80 backdrop-blur-sm p-6 sm:p-7 rounded-2xl border border-[#EBC070]/40 shadow-sm space-y-4 my-6'>
          <p
            className={`text-xs sm:text-sm text-[#4A351C] leading-relaxed ${
              language === 'kh' ? 'font-khmer not-italic' : 'italic'
            } text-justify`}
          >
            {language === 'kh'
              ? 'យើងខ្ញុំទាំងពីរនាក់ ព្រមទាំងគ្រួសារសងខាង សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅបំផុតចំពោះ ញាតិមិត្តជិតឆ្ងាយ និងភ្ញៀវកិត្តិយសទាំងអស់ ដែលបានអញ្ជើញចូលរួម និងជូនពរជ័យក្នុងពិធីមង្គលការរបស់យើងខ្ញុំ។ រាល់កាយវិការ និងពរជ័យដ៏ល្អប្រពៃនេះ គឺជាអនុស្សាវរីយ៍ដ៏មានតម្លៃបំផុតក្នុងជីវិតយើងខ្ញុំ។ សូមជូនពរលោកអ្នកជួបតែសេចក្តីសុខ និងសំណាងល្អជានិច្ចនិរន្តរ៍!'
              : '"Your presence and warm blessings are the greatest gifts of all for our wedding. If you wish to honor us with a gift of love, your generous contribution is deeply appreciated."'}
          </p>
        </div>
      </div>

      {/* Couple Signature at Bottom */}
      <div className='pt-6 border-t border-[#EBC070]/40 mt-4'>
        <p
          className={`text-[11px] uppercase text-[#C98C08] font-bold mb-1 ${
            language === 'kh'
              ? 'font-khmer tracking-normal'
              : 'tracking-[0.25em]'
          }`}
        >
          {language === 'kh'
            ? 'ដោយក្តីស្រឡាញ់'
            : 'With Love & Sincere Gratitude'}
        </p>
        <p className='font-khmer-moul text-xl sm:text-2xl text-[#7A1624]'>
          {language === 'kh' ? 'សុភាព & ច័ន្ទវដ្តី' : 'Sopheap & Chanvadey'}
        </p>
      </div>
    </motion.div>
  );
}
