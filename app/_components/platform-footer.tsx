import React from 'react';
import Link from 'next/link';
import { Send } from 'lucide-react';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';

export function PlatformFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-[#D4AF37]/25 bg-white/40 pt-16 pb-12 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#D4AF37]/20'>
          {/* Brand Info */}
          <div className='md:col-span-6 space-y-4 text-center md:text-left'>
            <div className='inline-flex items-center gap-2.5'>
              <div className='flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-[#7A1624] to-[#4A0D15] shadow-sm'>
                <KhmerOrnament variant='crest' className='h-5 w-5 text-[#D4AF37]' />
              </div>
              <span className='font-khmer text-xl font-bold text-[#7A1624]'>
                សួស្តី <span className='text-[#D4AF37]'>.</span>
              </span>
            </div>
            <p className='text-sm text-gray-600 max-w-md font-khmer leading-relaxed'>
              វេទិកាបង្កើតសំបុត្រអាពាហ៍ពិពាហ៍ឌីជីថលបែបទំនើប ស្រស់ស្អាត ប្រណីត និងងាយស្រួលចែករំលែកទៅកាន់មនុស្សជាទីស្រឡាញ់
            </p>
          </div>

          {/* Quick Links */}
          <div className='md:col-span-3 space-y-3 text-center md:text-left'>
            <p className='text-xs font-bold uppercase tracking-wider text-[#7A1624]'>
              Quick Links
            </p>
            <ul className='space-y-2 text-sm text-gray-600 font-khmer'>
              <li>
                <a href='#templates' className='hover:text-[#7A1624] transition-colors'>
                  ម៉ូតសំបុត្រទាំងអស់ (Templates)
                </a>
              </li>
              <li>
                <a href='#features' className='hover:text-[#7A1624] transition-colors'>
                  មុខងារពិសេស (Features)
                </a>
              </li>
              <li>
                <Link href='/admin/builder' className='hover:text-[#7A1624] transition-colors'>
                  ប្រព័ន្ធបង្កើតសំបុត្រ (Builder)
                </Link>
              </li>
              <li>
                <a href='#faq' className='hover:text-[#7A1624] transition-colors'>
                  សំណួរញឹកញាប់ (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className='md:col-span-3 space-y-3 text-center md:text-left'>
            <p className='text-xs font-bold uppercase tracking-wider text-[#7A1624]'>
              Contact &amp; Support
            </p>
            <p className='text-sm text-gray-600 font-khmer'>
              ត្រូវការជំនួយ ឬចង់បានសេវាកម្មរចនាពិសេស?
            </p>
            <a
              href='https://t.me/disissophanith'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-full border border-[#7A1624]/20 bg-white px-4 py-2 text-xs font-semibold text-[#7A1624] shadow-sm hover:border-[#7A1624]/50'
            >
              <Send className='h-3.5 w-3.5' />
              <span>Telegram: @disissophanith</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium'>
          <p>© {currentYear} Soursdey Digital Weddings. All rights reserved.</p>
          <p className='font-khmer'>រចនាឡើងដោយក្តីស្រឡាញ់សម្រាប់គូស្វាមីភរិយាខ្មែរ ❤️</p>
        </div>
      </div>
    </footer>
  );
}
