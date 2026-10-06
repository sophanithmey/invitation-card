import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Send } from 'lucide-react';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';
import { FeaturesSection } from './_components/features-section';
import { TemplateShowcase } from './_components/template-showcase';

export default function PlatformHomePage() {
  return (
    <main className='min-h-screen bg-[#FDFBF7] text-[#2C1810] font-khmer-kantumruuy selection:bg-[#D4AF37]/30'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-b from-[#FFF9EF] to-transparent -z-10' />
        <div className='absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] max-w-200 rounded-full bg-[#D4AF37]/10 blur-[120px] -z-10' />
        <div className='absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-150 rounded-full bg-[#7A1624]/5 blur-[100px] -z-10' />

        <div className='max-w-5xl mx-auto text-center space-y-8 relative z-10'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[#D4AF37]/30 shadow-sm text-[#7A1624] text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in-up'>
            <Sparkles className='w-4 h-4 text-[#D4AF37]' />
            <span>Premium Digital Invitations</span>
          </div>

          <h1
            className='font-khmer-moul text-4xl md:text-6xl lg:text-7xl text-[#7A1624] leading-tight md:leading-tight animate-fade-in-up'
            style={{ animationDelay: '100ms' }}
          >
            សំបុត្រអញ្ជើញ
            <br className='hidden md:block' />
            ដ៏ល្អឥតខ្ចោះរបស់អ្នក
          </h1>

          <p
            className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up'
            style={{ animationDelay: '200ms' }}
          >
            Craft stunning, personalized digital wedding invitations that leave
            a lasting impression. Elegant designs, interactive features, and
            seamless RSVP management for your special day.
          </p>

          <div
            className='flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 animate-fade-in-up'
            style={{ animationDelay: '300ms' }}
          >
            <Link
              href='/'
              className='w-full sm:w-auto px-8 py-4 bg-linear-to-r from-[#7A1624] to-[#5A0F1A] text-[#D4AF37] font-bold text-lg rounded-full shadow-[0_8px_30px_rgba(122,22,36,0.3)] hover:shadow-[0_8px_40px_rgba(122,22,36,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2'
            >
              <span>បង្កើតសំបុត្ររបស់អ្នក</span>
              <ArrowRight className='w-5 h-5' />
            </Link>

            <a
              href='https://t.me/disissophanith'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto px-8 py-4 bg-white text-[#7A1624] border-2 border-[#7A1624]/20 font-bold text-lg rounded-full shadow-sm hover:border-[#7A1624]/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2'
            >
              <Send className='w-5 h-5' />
              <span>ទាក់ទងតាម Telegram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className='w-full flex justify-center py-12'>
        <KhmerOrnament
          variant='lotus'
          className='text-[#D4AF37] opacity-60 scale-125'
        />
      </div>

      <FeaturesSection />

      <TemplateShowcase />

      {/* Footer */}
      <footer className='py-4 text-center border-t border-[#D4AF37]/20'>
        <KhmerOrnament
          variant='lotus'
          className='mx-auto mb-6 text-[#D4AF37]/50'
        />
        <p className='text-gray-500 font-medium'>
          {`© ${new Date().getFullYear()} Soursdey Digital Weddings. All rights reserved.`}
        </p>
      </footer>
    </main>
  );
}
