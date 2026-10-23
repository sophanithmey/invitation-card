import React from 'react';
import { Palette, Sparkles, Share2 } from 'lucide-react';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';

export function HowItWorksSection() {
  const steps = [
    {
      num: '០១',
      icon: Palette,
      title: 'ជ្រើសរើសម៉ូត (Choose Style)',
      desc: 'ជ្រើសរើសពីបណ្តុំម៉ូតប្រណីតៗ បែបប្រពៃណីខ្មែរ វីឡាបែបអឺរ៉ុប ឬរាត្រីតារា Celestial Dream តាមចំណង់ចំណូលចិត្តរបស់អ្នក',
    },
    {
      num: '០២',
      icon: Sparkles,
      title: 'បញ្ចូលព័ត៌មាន (Personalize)',
      desc: 'បញ្ចូលឈ្មោះគូស្នេហ៍ កាលបរិច្ឆេទ ទីតាំង ផែនទី Google Maps កម្រងរូបថត និងគណនីទទួលចំណងដៃ ABA/Bakong យ៉ាងងាយស្រួល',
    },
    {
      num: '០៣',
      icon: Share2,
      title: 'ចែករំលែក & តាមដាន (Share & Track)',
      desc: 'ផ្ញើ Link សំបុត្រទៅកាន់ភ្ញៀវតាម Telegram, Messenger ឬ QR Code ហើយតាមដានវត្តមានភ្ញៀវ (RSVP) ក្នុងពេលជាក់ស្តែង',
    },
  ];

  return (
    <section id='how-it-works' className='py-20 px-4 bg-white/60 relative overflow-hidden'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='text-xs uppercase font-semibold text-[#D4AF37] tracking-widest mb-3'>
            Easy 3-Step Process
          </p>
          <h2 className='font-khmer text-3xl sm:text-4xl text-[#7A1624]'>
            របៀបដំណើរការងាយៗ ៣ ជំហាន
          </h2>
          <div className='flex justify-center mt-4'>
            <KhmerOrnament variant='divider' className='w-28 text-[#D4AF37]' />
          </div>
        </div>

        {/* 3 Step Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative'>
          {steps.map((s, idx) => (
            <div
              key={idx}
              className='relative rounded-3xl border border-[#D4AF37]/25 bg-white p-8 shadow-lg shadow-[#D4AF37]/5 transition-all duration-300 hover:-translate-y-1.5'
            >
              {/* Step Number Watermark */}
              <span className='absolute top-6 right-6 font-mono text-3xl font-extrabold text-[#7A1624]/10 select-none'>
                {s.num}
              </span>

              <div className='mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#7A1624] to-[#5A0F1A] text-[#D4AF37] shadow-md'>
                <s.icon className='h-7 w-7' />
              </div>

              <h3 className='font-khmer text-xl font-bold text-[#2C1810] mb-3'>
                {s.title}
              </h3>

              <p className='text-sm text-gray-600 leading-relaxed font-khmer'>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
