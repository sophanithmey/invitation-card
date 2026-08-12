'use client';

import React, { useEffect } from 'react';
import { ThemeSettings } from '@/domain/entities/theme';

interface ThemeProviderProps {
  theme: ThemeSettings;
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', theme.primary_color || '#7A1624');
    root.style.setProperty(
      '--secondary-color',
      theme.secondary_color || '#D4AF37',
    );
    root.style.setProperty('--accent-color', theme.accent_color || '#C59B27');
    root.style.setProperty('--bg-color', theme.background_color || '#FFF9EF');
    root.style.setProperty('--card-bg', theme.card_bg_color || '#FFFFFF');
    root.style.setProperty(
      '--text-primary',
      theme.text_primary_color || '#2C1810',
    );
  }, [theme]);

  const getFontFamilyClass = (font: string) => {
    switch (font) {
      case 'Moul':
        return 'font-khmer-moul';
      case 'Kantumruuy Pro':
        return 'font-khmer-kantumruuy';
      case 'Battambang':
        return 'font-khmer-battambang';
      default:
        return 'font-khmer-noto';
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${getFontFamilyClass(theme.font_family)}`}
      style={{
        backgroundColor: theme.background_color || '#FFF9EF',
        color: theme.text_primary_color || '#2C1810',
      }}
    >
      {children}
    </div>
  );
};
