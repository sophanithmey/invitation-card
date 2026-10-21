'use client';

import React, { useEffect, useState } from 'react';

interface PetalSpec {
  left: number;
  size: number;
  duration: number;
  delay: number;
  sway: number;
}

const PETALS: PetalSpec[] = [
  { left: 12, size: 2.1, duration: 11, delay: 0.5, sway: 8 },
  { left: 28, size: 1.8, duration: 14, delay: 2.5, sway: -6 },
  { left: 45, size: 2.4, duration: 12, delay: 5.2, sway: 10 },
  { left: 62, size: 1.9, duration: 16, delay: 1.8, sway: -7 },
  { left: 78, size: 2.2, duration: 13, delay: 4.1, sway: 9 },
  { left: 88, size: 1.7, duration: 15, delay: 6.4, sway: -8 },
  { left: 20, size: 2.3, duration: 12, delay: 7.6, sway: -9 },
  { left: 35, size: 1.9, duration: 14, delay: 9.2, sway: 7 },
  { left: 52, size: 2.5, duration: 11, delay: 3.3, sway: -11 },
  { left: 70, size: 1.8, duration: 13, delay: 8.5, sway: 6 },
  { left: 84, size: 2.0, duration: 15, delay: 10.1, sway: -7 },
  { left: 94, size: 1.6, duration: 12, delay: 11.5, sway: 8 },
];

export const VillaPetals: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden' aria-hidden='true'>
      {PETALS.map((petal, index) => (
        <span
          key={index}
          className='villa-petal absolute top-0'
          style={
            {
              left: `${petal.left}%`,
              width: `${petal.size}cqw`,
              height: `${(petal.size * 0.8).toFixed(2)}cqw`,
              '--fall-duration': `${petal.duration}s`,
              '--fall-delay': `-${petal.delay}s`,
              '--fall-sway': `${petal.sway}cqw`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
