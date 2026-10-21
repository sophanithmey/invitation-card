import React from 'react';
import clsx from 'clsx';
import { Language } from '@/presentation/context/language-context';

type RevealVariant = 'rise' | 'write' | 'pop';

interface RevealProps {
  delay: number;
  variant?: RevealVariant;
  className?: string;
  children: React.ReactNode;
}

/** Entrance wrapper; kept separate from GoldText so both animations can run. */
export const Reveal: React.FC<RevealProps> = ({ delay, variant = 'rise', className, children }) => (
  <div className={clsx(`villa-${variant}`, className)} style={{ animationDelay: `${delay}s` }}>
    {children}
  </div>
);

interface GoldTextProps {
  as?: 'span' | 'p';
  className?: string;
  children: React.ReactNode;
}

/** Gold-foil gradient text. Padding keeps script swashes inside the clipped background. */
export const GoldText: React.FC<GoldTextProps> = ({ as: Tag = 'span', className, children }) => (
  <Tag className={clsx('villa-gold inline-block px-[0.3em] py-[0.08em]', className)}>{children}</Tag>
);

interface CaptionProps {
  lang: Language;
  className?: string;
  children: React.ReactNode;
}

/** Muted-blue caption. Letter-spacing is applied to Latin caps only, never to Khmer. */
export const VillaCaption: React.FC<CaptionProps> = ({ lang, className, children }) => (
  <p
    className={clsx(
      'text-[#4f7fa3] [text-shadow:0_1px_0_rgba(255,255,255,0.6)]',
      lang === 'en'
        ? 'font-serif-display uppercase tracking-[0.14em] text-[min(3.6cqw,2cqh)]'
        : 'font-khmer-kantumruuy text-[min(3.7cqw,2.1cqh)]',
      className,
    )}
  >
    {children}
  </p>
);

export const GoldDivider: React.FC = () => (
  <div className='flex w-[38cqw] items-center gap-[2cqw]' aria-hidden='true'>
    <span className='h-px flex-1 bg-linear-to-r from-transparent to-[#c8984b]' />
    <span className='size-[1.6cqw] rotate-45 border border-[#c8984b]' />
    <span className='h-px flex-1 bg-linear-to-l from-transparent to-[#c8984b]' />
  </div>
);
