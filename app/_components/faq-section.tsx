'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'តើភ្ញៀវអាចបើកមើលបានលើទូរស័ព្ទដៃគ្រប់ប្រភេទទេ?',
      a: 'បាទ/ចាស! សំបុត្រឌីជីថលដំណើរការបានយ៉ាងរលូនលើទូរស័ព្ទ iPhone, Android, iPad និងកុំព្យូទ័រ ដោយគ្រាន់តែចុចលើ Link មិនបាច់ដំឡើងកម្មវិធី (App) អ្វីបន្ថែមឡើយ',
    },
    {
      q: 'តើអាចកែប្រែព័ត៌មាន ឬរូបថតក្រោយពេលផ្ញើរួចបានទេ?',
      a: 'បានយ៉ាងងាយស្រួល! រាល់ការកែប្រែកាលបរិច្ឆេទ ទីតាំង ឬរូបថត នឹងធ្វើបច្ចុប្បន្នភាពភ្លាមៗនៅលើ Link ដែលបានផ្ញើទៅភ្ញៀវ ដោយមិនចាំបាច់ផ្ញើសារឡើងវិញទេ',
    },
    {
      q: 'តើគាំទ្រទាំងភាសាខ្មែរ និងអង់គ្លេស (Bilingual) ដែរឬទេ?',
      a: 'ពិតជាគាំទ្រ! សំបុត្រទាំងអស់ត្រូវបានរៀបចំឡើងយ៉ាងផ្ចិតផ្ចង់ មានប៊ូតុងប្តូរភាសា (Switch Language) ខ្មែរ និងអង់គ្លេស ហើយរក្សាជើងអក្សរ និងស្រៈបានត្រឹមត្រូវ ១០០%',
    },
    {
      q: 'តើត្រូវផ្ញើសំបុត្រទៅកាន់ភ្ញៀវតាមរបៀបណា?',
      a: 'លោកអ្នកគ្រាន់តែ Copy Link ឬ Save រូបភាព QR Code រួចផ្ញើតាម Telegram, Facebook Messenger, Instagram ឬ SMS ទៅកាន់ភ្ញៀវម្នាក់ៗ ឬជាក្រុមបានយ៉ាងរហ័ស',
    },
    {
      q: 'តើប្រព័ន្ធកត់ត្រាវត្តមានភ្ញៀវ (RSVP) ដំណើរការយ៉ាងដូចម្តេច?',
      a: 'នៅពេលភ្ញៀវចុច «បញ្ជាក់ការចូលរួម» ព័ត៌មានឈ្មោះ ចំនួនភ្ញៀវ និងសារជូនពរ នឹងត្រូវបានកត់ត្រាទុកយ៉ាងច្បាស់លាស់ ជួយឱ្យលោកអ្នកងាយស្រួលរាប់ចំនួនតុ និងកន្លែងអង្គុយ',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id='faq' className='py-20 px-4 bg-white/70 relative'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-14'>
          <p className='text-xs uppercase font-semibold text-[#D4AF37] tracking-widest mb-3'>
            Got Questions
          </p>
          <h2 className='font-khmer text-3xl sm:text-4xl text-[#7A1624]'>
            សំណួរដែលសួរញឹកញាប់
          </h2>
          <div className='flex justify-center mt-4'>
            <KhmerOrnament variant='divider' className='w-28 text-[#D4AF37]' />
          </div>
        </div>

        {/* Accordion */}
        <div className='flex flex-col gap-4'>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className='rounded-2xl border border-[#D4AF37]/25 bg-white shadow-sm transition-all'
              >
                <button
                  type='button'
                  onClick={() => toggle(idx)}
                  className='flex w-full items-center justify-between p-5 text-left font-khmer text-base font-bold text-[#2C1810] hover:text-[#7A1624] transition-colors'
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#7A1624] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#D4AF37]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className='px-5 pb-5 text-sm leading-relaxed text-gray-600 font-khmer border-t border-gray-100 pt-3'>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
