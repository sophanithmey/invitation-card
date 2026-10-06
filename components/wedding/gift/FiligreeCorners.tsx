import React from 'react';

export function FiligreeCorners() {
  return (
    <>
      <div className='absolute top-3 left-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity'>
        <svg viewBox='0 0 40 40' fill='none' className='w-full h-full text-[#D4AF37]'>
          <path d='M2 38 V10 A8 8 0 0 1 10 2 H38' stroke='currentColor' strokeWidth='2' />
          <circle cx='10' cy='10' r='2.5' fill='currentColor' />
        </svg>
      </div>
      <div className='absolute top-3 right-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity rotate-90'>
        <svg viewBox='0 0 40 40' fill='none' className='w-full h-full text-[#D4AF37]'>
          <path d='M2 38 V10 A8 8 0 0 1 10 2 H38' stroke='currentColor' strokeWidth='2' />
          <circle cx='10' cy='10' r='2.5' fill='currentColor' />
        </svg>
      </div>
      <div className='absolute bottom-3 left-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity -rotate-90'>
        <svg viewBox='0 0 40 40' fill='none' className='w-full h-full text-[#D4AF37]'>
          <path d='M2 38 V10 A8 8 0 0 1 10 2 H38' stroke='currentColor' strokeWidth='2' />
          <circle cx='10' cy='10' r='2.5' fill='currentColor' />
        </svg>
      </div>
      <div className='absolute bottom-3 right-3 w-10 h-10 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity rotate-180'>
        <svg viewBox='0 0 40 40' fill='none' className='w-full h-full text-[#D4AF37]'>
          <path d='M2 38 V10 A8 8 0 0 1 10 2 H38' stroke='currentColor' strokeWidth='2' />
          <circle cx='10' cy='10' r='2.5' fill='currentColor' />
        </svg>
      </div>
    </>
  );
}
