'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import clsx from 'clsx';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={clsx(
        'fixed bottom-24 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg',
        'bg-[var(--primary-color,#7A1624)] text-[var(--secondary-color,#D4AF37)] border-2 border-[var(--secondary-color,#D4AF37)] hover:scale-110 active:scale-95',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      )}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};
