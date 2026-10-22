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

export const Reveal: React.FC<RevealProps> = ({ delay, variant = 'rise', className, children }) => (
  <div className={clsx(`villa-${variant}`, className)} style={{ animationDelay: `${delay}s` }}>
    {children}
  </div>
);

interface GoldTextProps {
  as?: 'span' | 'p' | 'h2';
  className?: string;
  children: React.ReactNode;
}

export const GoldText: React.FC<GoldTextProps> = ({ as: Tag = 'span', className, children }) => (
  <Tag className={clsx('traditional-gold inline-block px-[0.2em] py-[0.05em]', className)}>
    {children}
  </Tag>
);

interface CaptionProps {
  lang: Language;
  className?: string;
  children: React.ReactNode;
}

export const TraditionalCaption: React.FC<CaptionProps> = ({ lang, className, children }) => (
  <p
    className={clsx(
      'text-[#f7e6b5] [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]',
      lang === 'en'
        ? 'font-serif-display uppercase tracking-[0.12em] text-[min(3.4cqw,1.9cqh)]'
        : 'font-khmer-kantumruuy text-[min(3.5cqw,2cqh)] font-medium',
      className,
    )}
  >
    {children}
  </p>
);

export const TraditionalDivider: React.FC = () => (
  <div className='flex w-[42cqw] items-center gap-[2cqw]' aria-hidden='true'>
    <span className='h-px flex-1 bg-linear-to-r from-transparent to-[#d4af37]' />
    <span className='size-[1.8cqw] rotate-45 border border-[#d4af37] bg-[#7a1624]' />
    <span className='h-px flex-1 bg-linear-to-l from-transparent to-[#d4af37]' />
  </div>
);

interface FrameBadgeProps {
  label: string;
  lang: Language;
}

/** Ornate traditional royal frame badge matching the "ភ្ញៀវកិត្តិយស" element from reference */
export const TraditionalFrameBadge: React.FC<FrameBadgeProps> = ({ label, lang }) => (
  <div className='relative inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#fff9ea] via-white to-[#fff9ea] px-7 py-2.5 shadow-[0_6px_25px_rgba(0,0,0,0.5),inset_0_0_10px_rgba(212,175,55,0.35)] ring-2 ring-[#d4af37] ring-offset-2 ring-offset-[#590e17]'>
    <span
      className={
        lang === 'kh'
          ? 'font-khmer-moul text-[min(4.2cqw,2.4cqh)] text-[#801826] drop-shadow-sm'
          : 'font-serif-display text-[min(3.8cqw,2.2cqh)] font-bold text-[#801826] drop-shadow-sm'
      }
    >
      {label}
    </span>
  </div>
);
