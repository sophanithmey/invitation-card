'use client';

import React, { useMemo } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  color: string;
  glow: string;
  delay: string;
  duration: string;
  opacity: number;
}

interface StarfieldProps {
  density?: 'low' | 'normal' | 'high';
  className?: string;
}

export const CelestialStarfield: React.FC<StarfieldProps> = ({
  density = 'normal',
  className = '',
}) => {
  const count = density === 'low' ? 24 : density === 'high' ? 60 : 38;

  const stars = useMemo<Star[]>(() => {
    const list: Star[] = [];
    const colors = ['#C9A45C', '#F8F7F3', '#FFDE8C', '#8FD6FF'];

    for (let i = 0; i < count; i++) {
      // Deterministic layout with nice spread
      const topVal = ((i * 37.3 + 13) % 96).toFixed(1);
      const leftVal = ((i * 61.7 + 7) % 98).toFixed(1);
      const size = (i % 5 === 0 ? 3.5 : i % 3 === 0 ? 2.5 : 1.5);
      const color = colors[i % colors.length];
      const glow = color === '#C9A45C' || color === '#FFDE8C'
        ? '0 0 8px rgba(255, 214, 126, 0.85)'
        : '0 0 6px rgba(248, 247, 243, 0.7)';
      const delay = `${((i * 0.4) % 4.5).toFixed(2)}s`;
      const duration = `${(2.4 + ((i * 0.7) % 2.6)).toFixed(2)}s`;
      const opacity = 0.35 + ((i % 5) * 0.13);

      list.push({
        id: i,
        top: `${topVal}%`,
        left: `${leftVal}%`,
        size,
        color,
        glow,
        delay,
        duration,
        opacity,
      });
    }
    return list;
  }, [count]);

  return (
    <div
      aria-hidden='true'
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Deep celestial nebular aura */}
      <div
        className='absolute inset-0'
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 30%, rgba(143, 214, 255, 0.05) 0%, transparent 75%)',
        }}
      />
      {stars.map((star) => (
        <span
          key={star.id}
          className='cd-animate-twinkle absolute rounded-full'
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: star.glow,
            animationDelay: star.delay,
            animationDuration: star.duration,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
};
