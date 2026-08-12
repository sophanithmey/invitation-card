import React from 'react';

interface KhmerOrnamentProps {
  className?: string;
  color?: string;
  variant?: 'divider' | 'corner' | 'rosette' | 'crest' | 'lotus';
}

export const KhmerOrnament: React.FC<KhmerOrnamentProps> = ({
  className = '',
  color = 'var(--secondary-color, #D4AF37)',
  variant = 'divider',
}) => {
  if (variant === 'corner') {
    return (
      <svg className={`w-10 h-10 ${className}`} viewBox="0 0 100 100" fill="none">
        <path
          d="M0 0 H100 C70 0, 40 10, 30 30 C10 40, 0 70, 0 100 V0 Z M15 15 H60 C45 15, 25 25, 15 60 V15 Z"
          fill={color}
          opacity="0.85"
        />
        <path d="M35 35 C45 25, 75 20, 85 5" stroke={color} strokeWidth="3" fill="none" />
        <circle cx="25" cy="25" r="4" fill={color} />
      </svg>
    );
  }

  if (variant === 'rosette') {
    return (
      <svg className={`w-16 h-16 ${className}`} viewBox="0 0 100 100" fill="none">
        <rect x="50" y="5" width="63.6" height="63.6" transform="rotate(45 50 5)" stroke={color} strokeWidth="3" fill="none" />
        <rect x="50" y="15" width="49.5" height="49.5" transform="rotate(45 50 15)" stroke={color} strokeWidth="1.5" fill="none" />
        <circle cx="50" cy="50" r="18" stroke={color} strokeWidth="2.5" fill="none" />
        <circle cx="50" cy="50" r="10" stroke={color} strokeWidth="1.5" fill="none" />
        <circle cx="50" cy="50" r="4" fill={color} />
        {/* Petals */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <path
            key={deg}
            d="M50 50 L50 20 C54 28, 54 36, 50 42 Z"
            fill={color}
            transform={`rotate(${deg} 50 50)`}
            opacity="0.8"
          />
        ))}
      </svg>
    );
  }

  if (variant === 'crest') {
    return (
      <svg className={`w-14 h-16 ${className}`} viewBox="0 0 100 120" fill="none">
        <path
          d="M50 5 C65 30, 95 45, 95 75 C95 100, 75 115, 50 115 C25 115, 5 100, 5 75 C5 45, 35 30, 50 5 Z"
          stroke={color}
          strokeWidth="3.5"
          fill="none"
        />
        <path
          d="M50 25 C60 42, 80 55, 80 75 C80 92, 65 102, 50 102 C35 102, 20 92, 20 75 C20 55, 40 42, 50 25 Z"
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <path d="M50 42 C55 55, 65 65, 50 85 C35 65, 45 55, 50 42 Z" fill={color} opacity="0.9" />
      </svg>
    );
  }

  // Default Divider
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[var(--secondary-color,#D4AF37)] to-[var(--secondary-color,#D4AF37)]" />
      <svg className="w-8 h-8 animate-pulse text-[var(--secondary-color,#D4AF37)]" viewBox="0 0 100 100" fill="none">
        <rect x="50" y="15" width="49.5" height="49.5" transform="rotate(45 50 15)" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="8" fill="currentColor" />
      </svg>
      <div className="h-[1px] w-20 bg-gradient-to-l from-transparent via-[var(--secondary-color,#D4AF37)] to-[var(--secondary-color,#D4AF37)]" />
    </div>
  );
};
