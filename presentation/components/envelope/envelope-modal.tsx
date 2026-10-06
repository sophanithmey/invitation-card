'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles } from 'lucide-react';
import { Wedding } from '@/domain/entities/wedding';
import { useLanguage } from '@/presentation/context/language-context';
import { formatKhmerDate } from '@/use-cases/format-khmer-date';

interface EnvelopeModalProps {
  wedding: Wedding;
  onOpen: () => void;
}

export const EnvelopeModal: React.FC<EnvelopeModalProps> = ({
  wedding,
  onOpen,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [guestName, setGuestName] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    setIsClient(true);

    const isAlreadyOpened =
      sessionStorage.getItem(`envelope_opened_${wedding.slug}`) === 'true';
    if (isAlreadyOpened) {
      setIsOpen(true);
      onOpen();
    }

    // Read the visitor name from the URL params safely on the client
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to') || params.get('guest');
    if (to) setGuestName(to);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenInvitation = () => {
    setIsOpening(true);
    sessionStorage.setItem(`envelope_opened_${wedding.slug}`, 'true');

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#8B0000', '#FDFBF7', '#C59B27'],
      });
    } catch {
      // fallback
    }

    setTimeout(() => {
      setIsOpen(true);
      onOpen();
    }, 900);
  };

  if (!isClient) {
    return (
      <div
        className='fixed inset-0 z-50 pointer-events-none'
        style={{ backgroundColor: '#FDFBF7' }}
      />
    );
  }

  if (isOpen) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-700 ${
        isOpening
          ? 'opacity-0 scale-95 pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      style={{ backgroundColor: '#FDFBF7' }}
    >
      {/* Double Golden Border Frame background */}
      <div className='absolute inset-4 sm:inset-8 border border-[#D4AF37]/30 rounded-3xl pointer-events-none' />
      <div className='absolute inset-6 sm:inset-10 border border-[#D4AF37]/10 rounded-2xl pointer-events-none' />

      {/* Main Content Container - Card Style */}
      <div className='max-w-md w-full bg-white rounded-t-[4rem] rounded-b-2xl shadow-2xl p-8 relative z-10 mx-4 border border-[#D4AF37]/30 transform transition-all duration-700'>
        {/* Seal/Badge overlapping the top border */}
        <div className='absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-[#8B0000] to-[#5A0000] rounded-full flex items-center justify-center shadow-lg border-4 border-white animate-float-slow'>
          <Heart className='w-8 h-8 text-[#D4AF37] fill-[#D4AF37]' />
        </div>

        <div className='mt-8 text-center space-y-6'>
          {guestName && (
            <div className='mb-6 pb-6 border-b border-[#D4AF37]/20 animate-fade-in'>
              <p className='text-[10px] text-[#D4AF37] uppercase tracking-[0.2em] font-semibold mb-3'>
                {lang === 'kh'
                  ? 'សូមគោរពអញ្ជើញភ្ញៀវកិត្តិយស'
                  : 'Specially Invited Guest'}
              </p>
              <h3 className='font-khmer-moul text-2xl text-[#8B0000] drop-shadow-sm'>
                {guestName}
              </h3>
            </div>
          )}

          <p className='text-slate-500 uppercase tracking-[0.2em] text-xs sm:text-sm font-medium'>
            {lang === 'kh'
              ? 'សូមគោរពអញ្ជើញ ចូលរួមក្នុងពិធីមង្គលការរបស់យើងខ្ញុំ'
              : 'We are pleased to invite you'}
          </p>

          {/* Personalized Couple Names in Deep Crimson Great Vibes / Khmer Moul */}
          <div className='py-2'>
            <h1 className='text-4xl sm:text-5xl font-bold text-[#8B0000] py-2 font-cursive tracking-wide'>
              {wedding.groom_name} & {wedding.bride_name}
            </h1>
            <h2 className='text-lg sm:text-xl font-khmer-moul text-[#8B0000]/90'>
              ({wedding.groom_name_kh} & {wedding.bride_name_kh})
            </h2>
          </div>

          <div className='pb-4 border-t border-[#D4AF37]/10 pt-4 mt-2'>
            <p className='text-[#8B0000] font-semibold text-base sm:text-lg font-khmer-kantumruuy tracking-wide drop-shadow-sm'>
              {lang === 'kh'
                ? formatKhmerDate(wedding.wedding_date)
                : new Date(wedding.wedding_date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
            </p>
          </div>

          <button
            type='button'
            onClick={handleOpenInvitation}
            disabled={isOpening}
            className='w-full py-4 px-8 bg-gradient-to-r from-[#8B0000] to-[#5A0000] hover:from-[#6b0000] hover:to-[#3A0000] text-[#D4AF37] font-khmer-moul text-sm sm:text-base rounded-full shadow-[0_4px_20px_rgba(139,0,0,0.3)] inline-flex justify-center items-center gap-2 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer'
          >
            <Sparkles className='w-5 h-5 text-[#D4AF37]' />
            <span>
              {lang === 'kh' ? 'បើកសំបុត្រអញ្ជើញ' : 'Open Invitation'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
