'use client';

import React from 'react';
import { Tag, ShieldCheck, Clock, Headphones } from 'lucide-react';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';
import { PricingCard, PricingPlan } from './pricing-card';

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'silver',
    name: 'Silver Package',
    nameKh: 'កញ្ចប់មូលដ្ឋាន',
    tagline: 'ស័ក្តិសមសម្រាប់ពិធីមង្គលការបែបសាមញ្ញ និងកក់ក្តៅជាមួយមនុស្សជាទីស្រឡាញ់',
    price: 50,
    popular: false,
    features: [
      'ជ្រើសរើសម៉ូតសំបុត្រប្រណីត ១ ម៉ូត',
      'ផែនទី Google Maps នាំផ្លូវ (GPS 1-Tap)',
      'កាលវិភាគកម្មវិធីមង្គលការពេញលេញ',
      'កម្រងរូបថត Pre-wedding រហូតដល់ 12 សន្លឹក',
      'រយៈពេលរក្សាទុក និងដំណើរការ 6 ខែ',
      'សេវាកម្មបញ្ចូលទិន្នន័យ និងរៀបចំជូនរួចរាល់',
    ],
    ctaText: 'ទាក់ទងកក់កញ្ចប់នេះ ($50)',
    ctaHref: 'https://t.me/disissophanith',
  },
  {
    id: 'gold',
    name: 'Gold Package',
    nameKh: 'កញ្ចប់ពិសេស',
    tagline: 'កញ្ចប់ពេញនិយមបំផុត ជាមួយមុខងារឆ្លាតវៃ RSVP និងឈ្មោះភ្ញៀវផ្ទាល់ខ្លួន',
    price: 80,
    popular: true,
    badge: 'ពេញនិយមបំផុត',
    features: [
      'មុខងារទាំងអស់ក្នុងកញ្ចប់មូលដ្ឋាន',
      'សំបុត្រមានឈ្មោះភ្ញៀវផ្ទាល់ខ្លួន (Personalized Links)',
      'ប្រព័ន្ធកត់ត្រាវត្តមានភ្ញៀវឆ្លាតវៃ (Realtime RSVP)',
      'Bakong KHQR / ABA សម្រាប់ជូនចំណងដៃពីចម្ងាយ',
      'បទភ្លេងកំដរពិរោះរណ្តំ (Background Music)',
      'រូបថត Pre-wedding រហូតដល់ 30 សន្លឹក',
      'គាំទ្រ ២ ភាសា (ខ្មែរ & អង់គ្លេស Bilingual)',
      'រយៈពេលរក្សាទុក និងដំណើរការ ១ ឆ្នាំពេញ',
    ],
    ctaText: 'ទាក់ទងកក់កញ្ចប់ពិសេស ($80)',
    ctaHref: 'https://t.me/disissophanith',
  },
  {
    id: 'diamond',
    name: 'Diamond VIP',
    nameKh: 'កញ្ចប់ប្រណីត VIP',
    tagline: 'សម្រាប់គូស្នេហ៍ដែលចង់បានភាពល្អឥតខ្ចោះ កម្រិតភាពយន្ត និងឈ្មោះគេហទំព័រផ្ទាល់ខ្លួន',
    popular: false,
    features: [
      'មុខងារទាំងអស់ក្នុងកញ្ចប់ពិសេស',
      'ឈ្មោះគេហទំព័រផ្ទាល់ខ្លួន (Custom Domain / Link)',
      'ចលនា 3D Cinematic Reveal កម្រិតខ្ពស់',
      'មិនកំណត់ចំនួនរូបថត & វីដេអូ HD (Unlimited)',
      'ឌីហ្សាញផ្លាក QR Code Standee សម្រាប់ដាក់មុខរោង',
      'កែសម្រួលទិន្នន័យមិនកំណត់ និងជំនួយ 24/7',
      'រក្សាទុកអនុស្សាវរីយ៍ជារៀងរហូត (Lifetime Link)',
    ],
    ctaText: 'ទាក់ទងប្រឹក្សា និងសាកសួរតម្លៃ VIP',
    ctaHref: 'https://t.me/disissophanith',
  },
];

const TRUST_GUARANTEES = [
  {
    icon: Clock,
    text: 'បង្កើត និងរៀបចំជូនរួចរាល់ក្នុងរយៈពេលខ្លី',
  },
  {
    icon: ShieldCheck,
    text: 'ទូទាត់ប្រាក់ដោយសុវត្ថិភាពតាម Bakong / ABA',
  },
  {
    icon: Headphones,
    text: 'ក្រុមការងារប្រឹក្សាយោបល់ និងជួយសម្រួល ២៤/៧',
  },
];

export function PricingSection() {
  return (
    <section id='pricing' className='py-20 md:py-28 px-4 bg-[#FDFBF7] relative overflow-hidden'>
      <div className='max-w-6xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-14 md:mb-16 flex flex-col items-center justify-center'>
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#7A1624] text-xs font-bold uppercase mb-4 shadow-xs'>
            <Tag className='w-3.5 h-3.5 text-[#D4AF37]' />
            <span>Pricing Plans</span>
          </div>

          <h2 className='font-khmer text-3xl sm:text-4xl md:text-5xl text-[#7A1624] leading-tight'>
            កញ្ចប់តម្លៃសេវាកម្មសមរម្យ
          </h2>

          <p className='text-sm sm:text-base text-gray-600 font-khmer mt-3 max-w-xl mx-auto leading-relaxed'>
            ទូទាត់តែម្ដងគត់ គ្មានការគិតថ្លៃប្រចាំខែ ឬកម្រៃលាក់កំបាំងឡើយ ជ្រើសរើសកញ្ចប់ដែលស័ក្តិសមបំផុតសម្រាប់ថ្ងៃពិសេសរបស់អ្នក
          </p>

          <div className='flex justify-center mt-5'>
            <KhmerOrnament variant='divider' className='w-28 text-[#D4AF37]' />
          </div>
        </div>

        {/* 3 Packages Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch pt-2'>
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>

        {/* Value Trust Strip - Mobile Friendly Cards */}
        <div className='mt-12 md:mt-16 pt-8 border-t border-[#D4AF37]/25 max-w-5xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4'>
            {TRUST_GUARANTEES.map((item, idx) => (
              <div
                key={idx}
                className='flex items-center gap-3.5 px-4 py-3 sm:py-3.5 rounded-2xl bg-white/75 backdrop-blur-xs border border-[#D4AF37]/25 shadow-xs transition-all duration-200 hover:bg-white hover:border-[#D4AF37]/50 hover:shadow-sm'
              >
                <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#7A1624]/8 border border-[#7A1624]/12 flex items-center justify-center shrink-0 text-[#7A1624] shadow-2xs'>
                  <item.icon className='w-4 h-4 sm:w-4.5 sm:h-4.5' />
                </div>
                <span className='text-xs sm:text-[13px] text-[#2C1810] font-khmer font-medium leading-snug'>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
