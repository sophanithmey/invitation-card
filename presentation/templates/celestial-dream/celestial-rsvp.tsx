'use client';

import React, { useState } from 'react';
import { RSVPItem } from '@/domain/entities/rsvp';
import { WishItem } from '@/domain/entities/wish';
import { CelestialCopy } from './celestial-copy';

interface CelestialRSVPProps {
  onRSVPSubmit: (rsvp: Omit<RSVPItem, 'id' | 'created_at'>) => Promise<void>;
  onWishSubmit: (wish: Omit<WishItem, 'id' | 'created_at'>) => Promise<void>;
  copy: CelestialCopy;
  isKh: boolean;
}

export const CelestialRSVP: React.FC<CelestialRSVPProps> = ({
  onRSVPSubmit,
  onWishSubmit,
  copy,
  isKh,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestsCount, setGuestsCount] = useState(1);
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleReturnToCompass = () => {
    const el = document.getElementById('cd-compass');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSubmitting(true);
    try {
      await onRSVPSubmit({
        guest_name: name,
        guest_count: guestsCount,
        attendance: attending === 'yes' ? 'attending' : 'regret',
        message,
      });

      if (message.trim()) await onWishSubmit({ name, message });
      setSubmitted(true);
    } catch {
      // Graceful fallback
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id='cd-rsvp'
      aria-label='RSVP'
      className='relative w-full bg-[#F2E9D9] px-4 py-16 sm:py-24 text-[#1A2445]'
    >
      <div className='mx-auto flex w-full max-w-xl flex-col gap-8'>
        <header className='text-center'>
          <p
            className={`mb-2 text-[0.65rem] uppercase text-[#C9A45C] ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.34em]'
            }`}
          >
            {copy.rsvpKicker}
          </p>
          <h2
            className={`text-[clamp(1.6rem,7vw,2.4rem)] leading-[1.15] text-[#1A2445] ${
              isKh ? 'font-khmer-moul' : 'cd-font-display tracking-[0.04em]'
            }`}
          >
            {copy.rsvpTitle}
          </h2>

          <div className='flex items-center justify-center gap-3 py-2' aria-hidden='true'>
            <span className='block h-px w-14 bg-linear-to-r from-transparent to-[#1A2445]/30' />
            <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
              <path
                d='M8 0.5 L9.4 6.6 L15.5 8 L9.4 9.4 L8 15.5 L6.6 9.4 L0.5 8 L6.6 6.6 Z'
                fill='#1A2445'
                opacity='0.6'
              />
            </svg>
            <span className='block h-px w-14 bg-linear-to-l from-transparent to-[#1A2445]/30' />
          </div>

          <p
            className={`mx-auto max-w-prose text-sm text-[#1A2445]/75 ${
              isKh ? 'font-khmer' : 'cd-font-serif'
            }`}
          >
            {copy.rsvpSubtitle}
          </p>
        </header>

        {submitted ? (
          <div className='rounded-3xl border border-[#C9A45C]/50 bg-white/70 p-8 text-center shadow-md'>
            <span className='text-2xl text-[#C9A45C]'>✦</span>
            <h3 className='mt-2 font-semibold text-lg text-[#1A2445]'>
              {isKh ? 'សូមអរគុណ!' : 'Thank you!'}
            </h3>
            <p className='mt-1 text-sm text-[#1A2445]/80'>
              {isKh
                ? 'ការឆ្លើយតបរបស់អ្នកត្រូវបានកត់ត្រាទុកដោយជោគជ័យ។'
                : 'Your RSVP response has been received with delight.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='flex flex-col gap-4 rounded-3xl border border-[#1A2445]/15 bg-white/60 p-6 shadow-sm backdrop-blur-sm'>
            <div>
              <label className='mb-1 block text-xs font-medium text-[#1A2445]'>
                {isKh ? 'ឈ្មោះភ្ញៀវកិត្តិយស (Full Name)' : 'Full Name'} *
              </label>
              <input
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isKh ? 'សូមបញ្ចូលឈ្មោះ...' : 'Your name'}
                className='w-full rounded-xl border border-[#1A2445]/20 bg-white px-3.5 py-2.5 text-sm text-[#1A2445] focus:border-[#C9A45C] focus:outline-none'
              />
            </div>

            <div>
              <label className='mb-1 block text-xs font-medium text-[#1A2445]'>
                {isKh ? 'លេខទូរស័ព្ទ (Phone)' : 'Phone Number'}
              </label>
              <input
                type='tel'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder='012 345 678'
                className='w-full rounded-xl border border-[#1A2445]/20 bg-white px-3.5 py-2.5 text-sm text-[#1A2445] focus:border-[#C9A45C] focus:outline-none'
              />
            </div>

            <div className='flex gap-4 pt-1'>
              <label className='flex cursor-pointer items-center gap-2 text-xs text-[#1A2445]'>
                <input type='radio' name='attending' value='yes' checked={attending === 'yes'} onChange={() => setAttending('yes')} className='accent-[#C9A45C]' />
                <span>{isKh ? 'ចូលរួម (Attending)' : 'Joyfully Accept'}</span>
              </label>
              <label className='flex cursor-pointer items-center gap-2 text-xs text-[#1A2445]'>
                <input type='radio' name='attending' value='no' checked={attending === 'no'} onChange={() => setAttending('no')} className='accent-[#C9A45C]' />
                <span>{isKh ? 'មិនអាចចូលរួម (Decline)' : 'Regretfully Decline'}</span>
              </label>
            </div>

            <div>
              <label className='mb-1 block text-xs font-medium text-[#1A2445]'>
                {isKh ? 'ពរជ័យ ឬសារជូនពរ (Wishes & Blessing)' : 'Wedding Blessing / Message'}
              </label>
              <textarea
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={isKh ? 'សរសេរសារជូនពរ...' : 'Send your warmest wishes...'}
                className='w-full rounded-xl border border-[#1A2445]/20 bg-white px-3.5 py-2 text-sm text-[#1A2445] focus:border-[#C9A45C] focus:outline-none'
              />
            </div>

            <button
              type='submit'
              disabled={submitting}
              className='mt-2 cursor-pointer rounded-full bg-linear-to-r from-[#C9A45C] to-[#E4C787] py-3 text-xs uppercase font-medium text-[#1A1405] shadow-[0_0_20px_rgba(201,164,92,0.35)] transition-all hover:scale-[1.01] focus:outline-none'
            >
              {submitting ? '...' : copy.rsvpButton}
            </button>
          </form>
        )}

        <div className='flex justify-center pt-2'>
          <button
            type='button'
            onClick={handleReturnToCompass}
            className={`flex items-center gap-2 text-[0.65rem] uppercase text-[#1A2445]/60 transition-colors hover:text-[#1A2445] ${
              isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.3em]'
            }`}
          >
            <span aria-hidden='true'>✦</span>
            <span>{copy.returnToCompass}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
