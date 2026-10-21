'use client';

import React, { useEffect, useState } from 'react';

interface SparkleSpec {
  left: number;
  bottom: number;
  size: number;
  duration: number;
  delay: number;
  sway: number;
}

const SPARKLES: SparkleSpec[] = [
  { left: 16, bottom: 12, size: 1.2, duration: 8.5, delay: 0.2, sway: 4 },
  { left: 24, bottom: 20, size: 0.9, duration: 10.2, delay: 2.1, sway: -5 },
  { left: 38, bottom: 15, size: 1.4, duration: 9.0, delay: 4.3, sway: 6 },
  { left: 52, bottom: 25, size: 1.1, duration: 11.0, delay: 1.5, sway: -4 },
  { left: 66, bottom: 18, size: 1.5, duration: 8.8, delay: 3.4, sway: 5 },
  { left: 78, bottom: 22, size: 1.0, duration: 10.5, delay: 5.2, sway: -6 },
  { left: 88, bottom: 14, size: 1.3, duration: 9.6, delay: 2.8, sway: 4 },
  { left: 45, bottom: 10, size: 1.6, duration: 7.9, delay: 6.1, sway: -3 },
];

export const TraditionalSparkles: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden' aria-hidden='true'>
      {SPARKLES.map((s, idx) => (
        <span
          key={idx}
          className='traditional-sparkle absolute'
          style={
            {
              left: `${s.left}%`,
              bottom: `${s.bottom}%`,
              width: `${s.size}cqw`,
              height: `${s.size}cqw`,
              '--rise-dur': `${s.duration}s`,
              '--rise-delay': `-${s.delay}s`,
              '--rise-sway': `${s.sway}cqw`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
