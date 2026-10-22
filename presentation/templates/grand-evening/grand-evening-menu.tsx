'use client';

import React from 'react';
import { GrandEvening } from './grand-evening';

interface GrandEveningMenuProps {
  copy: GrandEvening;
  isKh?: boolean;
}

export const GrandEveningMenu: React.FC<GrandEveningMenuProps> = ({
  copy,
  isKh = false,
}) => {
  const courses = [
    {
      title: copy.menu.primoTitle,
      desc: copy.menu.primoDesc,
      icon: (
        <svg width='30' height='30' viewBox='0 0 32 32'>
          <g fill='none' stroke='#C9A14A' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M5 22h22M7 22c0-5 4-9 9-9s9 4 9 9M16 10v3' />
            <circle cx='16' cy='9' r='1' />
          </g>
        </svg>
      ),
    },
    {
      title: copy.menu.secondoTitle,
      desc: copy.menu.secondoDesc,
      icon: (
        <svg width='30' height='30' viewBox='0 0 32 32'>
          <g fill='none' stroke='#C9A14A' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round'>
            <ellipse cx='16' cy='16' rx='11' ry='5' />
            <path d='M10 16c1.5-1.5 4-1.5 6 0s4.5 1.5 6 0' />
            <circle cx='12' cy='15' r='0.6' />
          </g>
        </svg>
      ),
    },
    {
      title: copy.menu.dessertTitle,
      desc: copy.menu.dessertDesc,
      icon: (
        <svg width='30' height='30' viewBox='0 0 32 32'>
          <g fill='none' stroke='#C9A14A' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M6 26h20l-2-12H8L6 26zM10 14V9M22 14V9M16 14V7' />
            <path d='M8 18h16' />
          </g>
        </svg>
      ),
    },
    {
      title: copy.menu.wineTitle,
      desc: copy.menu.wineDesc,
      icon: (
        <svg width='30' height='30' viewBox='0 0 32 32'>
          <g fill='none' stroke='#C9A14A' strokeWidth='1.3' strokeLinecap='round' strokeLinejoin='round'>
            <path d='M11 5h10l-1 8a4 4 0 0 1-8 0L11 5zM16 17v8M12 25h8' />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section
      id='menu'
      className='relative bg-[#F2EBDD] py-20 sm:py-28 px-6 text-center select-none'
    >
      <div className='max-w-md mx-auto flex flex-col items-center'>
        {/* Top Diamond */}
        <span className='w-1.5 h-1.5 bg-[#C9A14A] rotate-45 mb-4' />

        {/* Section Heading */}
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-medium text-[#0B0807] uppercase ${
            isKh ? 'font-khmer normal-case' : 'font-cormorant tracking-[0.04em]'
          }`}
        >
          {copy.menu.title}
        </h2>

        {/* Subtitle */}
        <p
          className={`text-xs uppercase text-[#B8923E] mt-3 max-w-xs ${
            isKh ? 'font-khmer normal-case' : 'font-inter tracking-[0.2em]'
          }`}
        >
          {copy.menu.subtitle}
        </p>

        {/* Divider */}
        <div className='flex items-center justify-center gap-2.5 my-6'>
          <div className='w-14 h-px bg-[#C9A14A]/70' />
          <span className='w-1.5 h-1.5 bg-[#C9A14A] rotate-45' />
          <div className='w-14 h-px bg-[#C9A14A]/70' />
        </div>

        {/* Courses Stack */}
        <div className='flex flex-col items-center w-full'>
          {courses.map((course, idx) => (
            <React.Fragment key={course.title}>
              <div className='py-6 w-full flex flex-col items-center'>
                <div className='mb-2.5'>{course.icon}</div>

                <h3
                  className={`text-xs sm:text-sm font-semibold text-[#0B0807] uppercase ${
                    isKh ? 'font-khmer' : 'font-inter tracking-[0.2em]'
                  }`}
                >
                  {course.title}
                </h3>

                <p
                  className={`text-sm sm:text-base text-[#7A6F5C] mt-2 max-w-xs leading-relaxed ${
                    isKh ? 'font-khmer' : 'font-cormorant italic'
                  }`}
                >
                  {course.desc}
                </p>
              </div>

              {idx < courses.length - 1 && (
                <div className='w-16 h-px bg-[#C9A14A]/50' />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom Diamond */}
        <span className='w-1.5 h-1.5 bg-[#C9A14A] rotate-45 mt-8' />
      </div>
    </section>
  );
};
