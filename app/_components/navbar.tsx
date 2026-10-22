'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Send, Menu, X } from 'lucide-react';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3.5 transition-all'>
      <div className='mx-auto max-w-6xl rounded-2xl border border-[#D4AF37]/25 bg-[#FFF9EF]/80 px-4 sm:px-6 py-2.5 shadow-[0_8px_30px_rgba(122,22,36,0.06)] backdrop-blur-md'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='group flex items-center gap-2.5'>
            <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#7A1624] to-[#4A0D15] shadow-md transition-transform group-hover:scale-105'>
              <KhmerOrnament
                variant='crest'
                className='h-6 w-6 text-[#D4AF37]'
              />
            </div>
            <div className='flex flex-col'>
              <span className='font-khmer text-xl font-bold leading-tight text-[#7A1624]'>
                សួស្តី <span className='text-[#D4AF37]'>.</span>
              </span>
              <span className='text-[10px] uppercase font-semibold text-gray-500 tracking-wider'>
                Digital Weddings
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className='hidden md:flex items-center gap-7 text-sm font-medium text-[#2C1810]/80'>
            <a
              href='#templates'
              className='transition-colors hover:text-[#7A1624]'
            >
              ម៉ូតសំបុត្រ
            </a>
            <a
              href='#features'
              className='transition-colors hover:text-[#7A1624]'
            >
              មុខងារពិសេស
            </a>
            <a
              href='#how-it-works'
              className='transition-colors hover:text-[#7A1624]'
            >
              របៀបប្រើប្រាស់
            </a>
            <a href='#faq' className='transition-colors hover:text-[#7A1624]'>
              សំណួរញឹកញាប់
            </a>
          </nav>

          {/* Action CTAs */}
          <div className='hidden sm:flex items-center gap-3'>
            <a
              href='https://t.me/disissophanith'
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1.5 rounded-full border border-[#7A1624]/20 bg-white/70 px-4 py-2 text-xs font-semibold text-[#7A1624] transition-all hover:border-[#7A1624]/50 hover:bg-white'
            >
              <Send className='h-3.5 w-3.5' />
              <span>Telegram</span>
            </a>

            <Link
              href='/admin/builder'
              className='flex items-center gap-1.5 rounded-full bg-linear-to-r from-[#7A1624] to-[#5A0F1A] px-4 py-2 text-xs font-semibold text-[#D4AF37] shadow-[0_4px_16px_rgba(122,22,36,0.25)] transition-all hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(122,22,36,0.35)]'
            >
              <span>បង្កើតសំបុត្រ (Builder)</span>
              <ArrowRight className='h-3.5 w-3.5' />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type='button'
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label='Toggle menu'
            className='p-1.5 text-[#7A1624] md:hidden'
          >
            {mobileMenuOpen ? (
              <X className='h-6 w-6' />
            ) : (
              <Menu className='h-6 w-6' />
            )}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className='mt-3 flex flex-col gap-3 border-t border-[#D4AF37]/20 pt-3 pb-2 md:hidden'>
            <a
              href='#templates'
              onClick={() => setMobileMenuOpen(false)}
              className='px-2 py-1.5 text-sm font-medium text-[#2C1810]'
            >
              ម៉ូតសំបុត្រ
            </a>
            <a
              href='#features'
              onClick={() => setMobileMenuOpen(false)}
              className='px-2 py-1.5 text-sm font-medium text-[#2C1810]'
            >
              មុខងារពិសេស
            </a>
            <a
              href='#how-it-works'
              onClick={() => setMobileMenuOpen(false)}
              className='px-2 py-1.5 text-sm font-medium text-[#2C1810]'
            >
              របៀបប្រើប្រាស់
            </a>
            <a
              href='#faq'
              onClick={() => setMobileMenuOpen(false)}
              className='px-2 py-1.5 text-sm font-medium text-[#2C1810]'
            >
              សំណួរញឹកញាប់
            </a>
            <div className='flex flex-col gap-2 pt-2'>
              <Link
                href='/admin/builder'
                onClick={() => setMobileMenuOpen(false)}
                className='flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#7A1624] to-[#5A0F1A] py-2.5 text-xs font-semibold text-[#D4AF37]'
              >
                <span>បង្កើតសំបុត្រ</span>
                <ArrowRight className='h-3.5 w-3.5' />
              </Link>
              <a
                href='https://t.me/disissophanith'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center justify-center gap-2 rounded-full border border-[#7A1624]/20 bg-white py-2.5 text-xs font-semibold text-[#7A1624]'
              >
                <Send className='h-3.5 w-3.5' />
                <span>ទាក់ទងតាម Telegram</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
