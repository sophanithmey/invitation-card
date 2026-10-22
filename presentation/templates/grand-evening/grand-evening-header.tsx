'use client';

import React, { useState } from 'react';
import { GrandEvening } from './grand-evening';

interface GrandEveningHeaderProps {
  activeSection: string;
  copy: GrandEvening;
  isKh?: boolean;
}

const SECTION_IDS = [
  { id: 'hero', num: '01', key: 'hero' },
  { id: 'invitation', num: '02', key: 'invitation' },
  { id: 'countdown', num: '03', key: 'countdown' },
  { id: 'venue', num: '04', key: 'venue' },
  { id: 'program', num: '05', key: 'program' },
  { id: 'dress-code', num: '06', key: 'dressCode' },
  { id: 'menu', num: '07', key: 'menu' },
  { id: 'travel', num: '08', key: 'travel' },
  { id: 'rsvp', num: '09', key: 'rsvp' },
  { id: 'finale', num: '10', key: 'finale' },
] as const;

export const GrandEveningHeader: React.FC<GrandEveningHeaderProps> = ({
  activeSection,
  copy,
  isKh = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentSec =
    SECTION_IDS.find((s) => s.id === activeSection) || SECTION_IDS[0];
  const currentTitle = copy.nav[currentSec.key as keyof typeof copy.nav];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Sticky Top Header Bar */}
      <header className='sticky top-0 z-40 grid grid-cols-[auto_1fr_auto] items-center px-4 sm:px-6 py-3.5 gap-3 bg-[#0B0807]/90 backdrop-blur-md border-b border-[#C9A14A]/20 text-[#F2EBDD] select-none'>
        <div className='flex items-center gap-2.5'>
          <span className='font-inter text-[11px] font-semibold text-[#C9A14A] tracking-[0.2em]'>
            {currentSec.num}
          </span>
          <span
            className={`text-[11px] text-[#F2EBDD]/90 line-clamp-1 ${
              isKh ? 'font-khmer' : 'font-inter tracking-[0.25em]'
            }`}
          >
            {currentTitle}
          </span>
        </div>

        <div />

        <button
          type='button'
          onClick={() => setIsOpen(true)}
          aria-label='Open menu'
          className='p-1 text-[#C9A14A] hover:text-[#F2EBDD] transition-colors cursor-pointer'
        >
          <svg width='22' height='22' viewBox='0 0 24 24'>
            <g stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'>
              <path d='M4 7h16M4 12h16M4 17h16' />
            </g>
          </svg>
        </button>
      </header>

      {/* Backdrop Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden='true'
        className={`fixed inset-0 z-40 bg-[#0B0807]/80 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Slide-out Navigation Drawer */}
      <aside
        aria-hidden={!isOpen}
        aria-label='Navigation Drawer'
        className={`fixed top-0 right-0 bottom-0 z-50 w-[min(86vw,340px)] bg-[#0B0807] text-[#F2EBDD] border-l border-[#C9A14A]/25 flex flex-col transition-transform duration-300 ease-out shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header with Monogram */}
        <div className='flex items-center justify-between px-6 py-4 border-b border-[#C9A14A]/20'>
          <div className='w-11 h-11 border border-[#C9A14A] rounded-full flex items-center justify-center font-cormorant text-[#C9A14A] text-base'>
            <span>A</span>
            <span className='mx-1 opacity-50'>/</span>
            <span>M</span>
          </div>

          <button
            type='button'
            onClick={() => setIsOpen(false)}
            aria-label='Close menu'
            className='p-1.5 text-[#C9A14A] hover:text-[#F2EBDD] transition-colors cursor-pointer'
          >
            <svg width='20' height='20' viewBox='0 0 24 24'>
              <g stroke='currentColor' strokeWidth='1.5' strokeLinecap='round'>
                <path d='M5 5l14 14M19 5L5 19' />
              </g>
            </svg>
          </button>
        </div>

        {/* Menu Nav Links */}
        <nav className='flex-1 overflow-y-auto px-6 py-3 flex flex-col'>
          {SECTION_IDS.map((item) => {
            const label = copy.nav[item.key as keyof typeof copy.nav];
            const isActive = activeSection === item.id;

            return (
              <button
                key={item.id}
                type='button'
                onClick={() => handleNavClick(item.id)}
                className={`text-left border-b border-[#C9A14A]/10 py-3 flex items-baseline gap-3 transition-colors cursor-pointer ${
                  isActive ? 'text-[#C9A14A]' : 'text-[#F2EBDD] hover:text-[#C9A14A]'
                }`}
              >
                <span className='font-inter text-[10px] text-[#C9A14A] tracking-[0.2em] w-6 shrink-0'>
                  {item.num}
                </span>
                <span
                  className={`text-[17px] ${
                    isKh ? 'font-khmer' : 'font-cormorant'
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}

          {/* RSVP Button CTA */}
          <button
            type='button'
            onClick={() => handleNavClick('rsvp')}
            className={`mt-6 mb-4 py-3 bg-[#C9A14A] text-[#0B0807] font-semibold text-center uppercase text-[11px] transition-transform active:scale-95 hover:bg-[#D9C7A3] cursor-pointer ${
              isKh ? 'font-khmer' : 'font-inter tracking-[0.25em]'
            }`}
          >
            {copy.nav.rsvpNow}
          </button>
        </nav>
      </aside>
    </>
  );
};
