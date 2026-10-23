import React from 'react';
import { UserCheck, QrCode, MapPin, Music2, Type, CheckCircle, CompassIcon } from 'lucide-react';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';

export function BentoFeatures() {
  return (
    <section id='features' className='py-20 px-4 bg-[#FDFBF7] relative'>
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='text-xs uppercase font-semibold text-[#D4AF37] tracking-widest mb-3'>
            Complete Wedding Experience
          </p>
          <h2 className='font-khmer text-3xl sm:text-4xl text-[#7A1624]'>
            មុខងារពិសេសៗសម្រាប់ថ្ងៃមង្គល
          </h2>
          <p className='text-gray-600 mt-2 max-w-xl mx-auto'>
            រចនាឡើងដើម្បីផ្តល់ភាពងាយស្រួលទាំងម្ចាស់ដើមការ និងភ្ញៀវកិត្តិយស
          </p>
          <div className='flex justify-center mt-4'>
            <KhmerOrnament variant='divider' className='w-28 text-[#D4AF37]' />
          </div>
        </div>

        {/* Bento Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {/* Card 1: Large Featured Card - Personalized Guest Links */}
          <div className='lg:col-span-2 rounded-3xl border border-[#D4AF37]/30 bg-linear-to-br from-white via-white to-[#FFF9EF] p-8 shadow-lg shadow-[#D4AF37]/5 flex flex-col justify-between relative overflow-hidden'>
            <div className='space-y-4 max-w-lg'>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#7A1624] text-[#D4AF37]'>
                <UserCheck className='h-6 w-6' />
              </div>
              <h3 className='font-khmer text-2xl font-bold text-[#2C1810]'>
                សំបុត្រមានឈ្មោះភ្ញៀវផ្ទាល់ខ្លួន (Personalized Links)
              </h3>
              <p className='text-sm text-gray-600 leading-relaxed font-khmer'>
                បង្កើត Link ពិសេសសម្រាប់ភ្ញៀវម្នាក់ៗ ពេលបើកមកនឹងឃើញឈ្មោះរបស់គាត់ផ្ទាល់
                ដូចជា <i>«លិខិតអញ្ជើញសម្រាប់ លោកជំទាវ សុខ ម៉ាលី»</i> បង្ហាញពីការគោរព និងយកចិត្តទុកដាក់ខ្ពស់បំផុត
              </p>
            </div>

            {/* Simulated Guest Pill */}
            <div className='mt-6 rounded-2xl border border-[#D4AF37]/40 bg-white/80 p-4 shadow-sm flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <span className='flex h-8 w-8 items-center justify-center rounded-full bg-[#7A1624]/10 text-[#7A1624]'>
                  <CheckCircle className='h-4 w-4' />
                </span>
                <div>
                  <p className='text-xs font-bold text-[#7A1624]'>https://yourwedding.com?to=ឯកឧត្តម+ចាន់+សុផល</p>
                  <p className='text-[11px] text-gray-500'>ឈ្មោះបង្ហាញលើក្របសំបុត្រ និងក្នុងកាតអញ្ជើញ</p>
                </div>
              </div>
              <span className='hidden sm:inline-block text-[10px] uppercase font-bold text-[#D4AF37] bg-[#7A1624] px-2.5 py-1 rounded-full'>
                Auto
              </span>
            </div>
          </div>

          {/* Card 2: ABA / Bakong QR */}
          <div className='rounded-3xl border border-[#D4AF37]/30 bg-white p-7 shadow-lg shadow-[#D4AF37]/5 flex flex-col justify-between'>
            <div className='space-y-3'>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D4AF37]/20 text-[#7A1624]'>
                <QrCode className='h-6 w-6' />
              </div>
              <h3 className='font-khmer text-xl font-bold text-[#2C1810]'>
                ចំណងដៃតាម KHQR (Gift)
              </h3>
              <p className='text-sm text-gray-600 leading-relaxed font-khmer'>
                បញ្ចូលរូបភាព Bakong KHQR និងលេខគណនីធនាគារ ABA ងាយស្រួលឱ្យភ្ញៀវជូនចំណងដៃពីចម្ងាយដោយសុវត្ថិភាព
              </p>
            </div>
            <div className='mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500'>
              <span className='h-2 w-2 rounded-full bg-emerald-500' />
              <span>គាំទ្រគ្រប់ធនាគារនៅកម្ពុជា</span>
            </div>
          </div>

          {/* Card 3: Realtime RSVP */}
          <div className='rounded-3xl border border-[#D4AF37]/30 bg-white p-7 shadow-lg shadow-[#D4AF37]/5 flex flex-col justify-between'>
            <div className='space-y-3'>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700'>
                <UserCheck className='h-6 w-6' />
              </div>
              <h3 className='font-khmer text-xl font-bold text-[#2C1810]'>
                បញ្ជាក់វត្តមាន (RSVP)
              </h3>
              <p className='text-sm text-gray-600 leading-relaxed font-khmer'>
                ភ្ញៀវអាចបញ្ជាក់ការចូលរួម ចំនួនមនុស្ស និងសរសេរសារជូនពរបានភ្លាមៗ ជួយឱ្យម្ចាស់ពិធីរៀបចំតុអាហារបានត្រឹមត្រូវ
              </p>
            </div>
            <div className='mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500'>
              <span className='h-2 w-2 rounded-full bg-[#7A1624]' />
              <span>តាមដានទិន្នន័យជាក់ស្តែង</span>
            </div>
          </div>

          {/* Card 4: Google Maps & Calendar */}
          <div className='rounded-3xl border border-[#D4AF37]/30 bg-white p-7 shadow-lg shadow-[#D4AF37]/5 flex flex-col justify-between'>
            <div className='space-y-3'>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700'>
                <MapPin className='h-6 w-6' />
              </div>
              <h3 className='font-khmer text-xl font-bold text-[#2C1810]'>
                ផែនទី Google Maps
              </h3>
              <p className='text-sm text-gray-600 leading-relaxed font-khmer'>
                ភ្ជាប់ទីតាំងពិធីទៅកាន់ Google Maps ដោយផ្ទាល់ ចុចតែ ១ ដងអាចនាំផ្លូវ (GPS) ទៅដល់មណ្ឌលពិធីបានយ៉ាងងាយ
              </p>
            </div>
            <div className='mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500'>
              <CompassIcon className='h-4 w-4 text-[#D4AF37]' />
              <span>ទីតាំងច្បាស់សុក្រិត</span>
            </div>
          </div>

          {/* Card 5: Audio & Typography */}
          <div className='rounded-3xl border border-[#D4AF37]/30 bg-white p-7 shadow-lg shadow-[#D4AF37]/5 flex flex-col justify-between'>
            <div className='space-y-3'>
              <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700'>
                <Music2 className='h-6 w-6' />
              </div>
              <h3 className='font-khmer text-xl font-bold text-[#2C1810]'>
                ភ្លេងមង្គលការ &amp; អក្សរខ្មែរ
              </h3>
              <p className='text-sm text-gray-600 leading-relaxed font-khmer'>
                មានបទភ្លេងកំដរពិរោះរណ្តំ និងរក្សាទម្រង់អក្សរខ្មែរ ជើងអក្សរ និងស្រៈបានត្រឹមត្រូវ ១០០% លើទូរស័ព្ទគ្រប់ប្រភេទ
              </p>
            </div>
            <div className='mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500'>
              <Type className='h-4 w-4 text-[#7A1624]' />
              <span>ពុម្ពអក្សរខ្មែរស្អាតឥតខ្ចោះ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
