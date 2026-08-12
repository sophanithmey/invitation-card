'use client';

import React from 'react';
import { useScrollReveal } from '@/presentation/hooks/use-scroll-reveal';

interface RevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const RevealSection: React.FC<RevealSectionProps> = ({ children, className = '', delay }) => {
  const { ref, isVisible } = useScrollReveal(0.12);

  return (
    <div
      ref={ref}
      className={`reveal-section ${isVisible ? 'revealed' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};
