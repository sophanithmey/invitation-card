import React from 'react';
import Link from 'next/link';
import { ArrowRight, Contact, Send } from 'lucide-react';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';

export function CtaBanner() {
  return (
    <section className='py-20 px-4'>
      <div className='max-w-5xl mx-auto rounded-3xl bg-linear-to-r from-[#7A1624] via-[#5A0F1A] to-[#4A0D15] p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-[#7A1624]/20 border border-[#D4AF37]/35'>
        {/* Ambient gold glow */}
        <div className='absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#D4AF37]/20 blur-3xl pointer-events-none' />
        <div className='absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none' />

        <div className='relative z-10 max-w-2xl mx-auto space-y-6'>
          <KhmerOrnament
            variant='crest'
            className='h-10 w-10 text-[#D4AF37] mx-auto'
          />

          <h2 className='font-khmer text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white drop-shadow-sm'>
            ត្រៀមខ្លួនសម្រាប់ថ្ងៃពិសេស
            <span className='block text-[#D4AF37] mt-1'>របស់អ្នកហើយឬនៅ?</span>
          </h2>

          <p className='text-sm sm:text-base text-white/85 leading-relaxed font-khmer'>
            ចាប់ផ្តើមបង្កើតសំបុត្រឌីជីថលដ៏ប្រណីតរបស់អ្នកថ្ងៃនេះ
            ឬប្រឹក្សាយោបល់លម្អិតជាមួយក្រុមការងារយើងខ្ញុំតាមរយៈ Telegram
          </p>

          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 pt-4'>
            <Link
              href='/admin/builder'
              className='w-full sm:w-auto px-8 py-4 bg-linear-to-r from-[#D4AF37] to-[#F3E5AB] text-[#1A1405] font-bold text-base rounded-full shadow-[0_8px_30px_rgba(212,175,55,0.4)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2'
            >
              <Contact className='w-4 h-4 text-[#7A1624]' />
              <span>ចាប់ផ្តើមបង្កើតឥឡូវនេះ</span>
              <ArrowRight className='w-4 h-4' />
            </Link>

            <a
              href='https://t.me/disissophanith'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-base rounded-full backdrop-blur-sm transition-all flex items-center justify-center gap-2'
            >
              <Send className='w-4 h-4 text-[#D4AF37]' />
              <span>ប្រឹក្សាតាម Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
