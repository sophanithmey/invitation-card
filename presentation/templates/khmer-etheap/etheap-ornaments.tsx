'use client';

import React from 'react';

interface OrnamentProps {
  className?: string;
  color?: string;
}

// Four-Petal Phka Chan Rosette (ផ្កាចន្ទន៍)
export const KbachRosette: React.FC<OrnamentProps> = ({
  className = 'w-6 h-6',
  color = '#C98C08',
}) => (
  <svg className={`shrink-0 ${className}`} viewBox='0 0 100 100' fill='none'>
    <circle cx='50' cy='50' r='14' stroke={color} strokeWidth='4' fill='none' />
    <circle cx='50' cy='50' r='7' fill={color} />
    {/* 4 Pointed Khmer Petals in diamond orientation */}
    <path d='M50 8 C43 25, 40 32, 50 36 C60 32, 57 25, 50 8 Z' fill={color} />
    <path d='M50 92 C43 75, 40 68, 50 64 C60 68, 57 75, 50 92 Z' fill={color} />
    <path d='M8 50 C25 43, 32 40, 36 50 C32 60, 25 57, 8 50 Z' fill={color} />
    <path d='M92 50 C75 43, 68 40, 64 50 C68 60, 75 57, 92 50 Z' fill={color} />
    {/* 4 Corner Sub-Petals */}
    <path
      d='M22 22 C32 30, 36 36, 40 34 C36 40, 30 32, 22 22 Z'
      fill={color}
      opacity='0.85'
    />
    <path
      d='M78 22 C68 30, 64 36, 60 34 C64 40, 70 32, 78 22 Z'
      fill={color}
      opacity='0.85'
    />
    <path
      d='M22 78 C32 70, 36 64, 40 66 C36 60, 30 68, 22 78 Z'
      fill={color}
      opacity='0.85'
    />
    <path
      d='M78 78 C68 70, 64 64, 60 66 C64 60, 70 68, 78 78 Z'
      fill={color}
      opacity='0.85'
    />
  </svg>
);

// Symmetrical Winged Divider Emblem (ក្បាច់ស្លាប / កូនក្រូច)
export const KbachWing: React.FC<OrnamentProps> = ({
  className = 'w-32 h-6',
  color = '#C98C08',
}) => (
  <svg className={`mx-auto ${className}`} viewBox='0 0 200 40' fill='none'>
    {/* Center Drop & Rosette */}
    <path d='M100 2 L106 14 L100 28 L94 14 Z' fill={color} />
    <path
      d='M100 28 C96 35, 93 38, 100 40 C107 38, 104 35, 100 28 Z'
      fill={color}
    />
    {/* Left Wing Scrolls */}
    <path
      d='M92 14 C78 12, 60 5, 42 12 C30 17, 18 16, 5 24 C18 22, 32 23, 44 19 C60 14, 76 22, 90 22 Z'
      fill={color}
    />
    <path
      d='M68 8 C55 3, 38 7, 28 15 C38 13, 52 11, 68 18 Z'
      fill={color}
      opacity='0.9'
    />
    {/* Right Wing Scrolls */}
    <path
      d='M108 14 C122 12, 140 5, 158 12 C170 17, 182 16, 195 24 C182 22, 168 23, 156 19 C140 14, 124 22, 110 22 Z'
      fill={color}
    />
    <path
      d='M132 8 C145 3, 162 7, 172 15 C162 13, 148 11, 132 18 Z'
      fill={color}
      opacity='0.9'
    />
  </svg>
);

// Majestic Royal Flame Pediment Crest (ក្បាច់ក្បាល / ត្រីសូល៍)
export const KbachCrest: React.FC<OrnamentProps> = ({
  className = 'w-16 h-20',
  color = '#C98C08',
}) => (
  <svg className={`mx-auto ${className}`} viewBox='0 0 120 150' fill='none'>
    {/* Center Spires / Flame Tip */}
    <path d='M60 2 C54 22, 45 38, 50 62 C55 45, 60 30, 60 2 Z' fill={color} />
    <path d='M60 2 C66 22, 75 38, 70 62 C65 45, 60 30, 60 2 Z' fill={color} />
    {/* Left Upward Flames */}
    <path d='M52 28 C40 38, 32 54, 38 78 C42 62, 50 48, 56 40 Z' fill={color} />
    <path
      d='M40 52 C26 62, 20 80, 26 104 C32 88, 38 74, 46 64 Z'
      fill={color}
    />
    <path
      d='M30 84 C18 94, 15 110, 24 130 C30 114, 35 102, 40 94 Z'
      fill={color}
    />
    {/* Right Upward Flames */}
    <path d='M68 28 C80 38, 88 54, 82 78 C78 62, 70 48, 64 40 Z' fill={color} />
    <path
      d='M80 52 C94 62, 100 80, 94 104 C88 88, 82 74, 74 64 Z'
      fill={color}
    />
    <path
      d='M90 84 C102 94, 105 110, 96 130 C90 114, 85 102, 80 94 Z'
      fill={color}
    />
    {/* Base Lotus Rosette */}
    <circle
      cx='60'
      cy='115'
      r='16'
      stroke={color}
      strokeWidth='4'
      fill='#FFFDF9'
    />
    <circle cx='60' cy='115' r='9' fill={color} />
    <path d='M60 135 C50 144, 70 144, 60 135 Z' fill={color} />
  </svg>
);

// Intricate Horizontal Frieze Border Ribbon (របារក្បាច់ភ្ញីទេស)
export const KbachFrieze: React.FC<OrnamentProps> = ({
  className = 'w-full h-7',
  color = '#C98C08',
}) => (
  <svg
    className={`w-full ${className}`}
    viewBox='0 0 600 32'
    preserveAspectRatio='none'
    fill='none'
  >
    <rect width='600' height='2' fill={color} opacity='0.4' />
    <rect y='30' width='600' height='2' fill={color} opacity='0.4' />
    {/* Repeating Spiral & Lotus Flame Motif */}
    {[0, 100, 200, 300, 400, 500].map((x) => (
      <g key={x} transform={`translate(${x}, 0)`}>
        {/* Center lotus blossom */}
        <path
          d='M50 4 C44 12, 42 20, 50 28 C58 20, 56 12, 50 4 Z'
          fill={color}
        />
        <circle cx='50' cy='16' r='3.5' fill='#FFFDF9' />
        {/* Left spiral scroll */}
        <path
          d='M44 14 C36 8, 24 6, 16 13 C8 20, 14 28, 24 25 C32 22, 28 14, 22 16'
          stroke={color}
          strokeWidth='2.5'
          strokeLinecap='round'
          fill='none'
        />
        {/* Right spiral scroll */}
        <path
          d='M56 14 C64 8, 76 6, 84 13 C92 20, 86 28, 76 25 C68 22, 72 14, 78 16'
          stroke={color}
          strokeWidth='2.5'
          strokeLinecap='round'
          fill='none'
        />
        <circle cx='2' cy='16' r='2.5' fill={color} />
      </g>
    ))}
  </svg>
);

// Corner Kbach Scroll (ក្បាច់ជ្រុង)
export const KbachCorner: React.FC<OrnamentProps & { flip?: boolean }> = ({
  className = 'w-8 h-8',
  color = '#C98C08',
  flip = false,
}) => (
  <svg
    className={`${className} ${flip ? 'scale-x-[-1]' : ''}`}
    viewBox='0 0 60 60'
    fill='none'
  >
    <path
      d='M4 4 H56 C40 6, 26 14, 18 26 C12 36, 6 48, 4 56 Z'
      fill={color}
      opacity='0.25'
    />
    <path
      d='M6 6 C18 10, 34 8, 46 4 C32 16, 22 28, 16 46 C12 34, 10 18, 6 6 Z'
      fill={color}
    />
    <path
      d='M20 20 C28 24, 30 32, 24 38 C18 42, 12 36, 16 28 C18 24, 22 24, 24 28'
      stroke={color}
      strokeWidth='2'
      fill='none'
    />
  </svg>
);
