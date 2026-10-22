'use client';

import React, { useState } from 'react';
import { RSVPItem } from '@/domain/entities/rsvp';
import { WishItem } from '@/domain/entities/wish';
import { GrandEvening } from './grand-evening';

interface GrandEveningRSVPFormProps {
  onRSVPSubmit: (rsvp: Omit<RSVPItem, 'id' | 'created_at'>) => Promise<void>;
  onWishSubmit: (wish: Omit<WishItem, 'id' | 'created_at'>) => Promise<void>;
  copy: GrandEvening;
  isKh?: boolean;
}

export const GrandEveningRSVPForm: React.FC<GrandEveningRSVPFormProps> = ({
  onRSVPSubmit,
  onWishSubmit,
  copy,
  isKh = false,
}) => {
  const [guestName, setGuestName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestCount, setGuestCount] = useState(1);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;

    setIsSubmitting(true);
    try {
      await onRSVPSubmit({
        guest_name: guestName.trim(),
        guest_count: attending === 'yes' ? guestCount : 0,
        attendance: attending === 'yes' ? 'attending' : 'regret',
        message: message.trim() || undefined,
      });

      if (message.trim()) {
        await onWishSubmit({
          name: guestName.trim(),
          message: message.trim(),
        });
      }

      setIsSubmitted(true);
    } catch {
      // Graceful error handling
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className='p-8 rounded-xl border border-[#C9A14A]/40 bg-[#0B0807]/80 backdrop-blur-md text-center animate-fade-in'>
        <div className='w-12 h-12 mx-auto mb-4 border border-[#C9A14A] rounded-full flex items-center justify-center text-[#C9A14A] text-xl'>
          ✓
        </div>
        <h3
          className={`text-xl font-medium text-[#F2EBDD] ${
            isKh ? 'font-khmer' : 'font-cormorant'
          }`}
        >
          {copy.rsvp.successTitle}
        </h3>
        <p
          className={`text-xs text-[#D9C7A3] mt-2 ${
            isKh ? 'font-khmer' : 'font-inter'
          }`}
        >
          {copy.rsvp.successDesc}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='p-6 sm:p-8 rounded-xl border border-[#C9A14A]/30 bg-[#0B0807]/75 backdrop-blur-md flex flex-col gap-4 text-left shadow-2xl'
    >
      <div>
        <label
          className={`block text-[11px] uppercase text-[#D9C7A3] mb-1.5 ${
            isKh ? 'font-khmer' : 'font-inter tracking-[0.2em]'
          }`}
        >
          {copy.rsvp.nameLabel}
        </label>
        <input
          type='text'
          required
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder={copy.rsvp.namePlaceholder}
          className='w-full px-4 py-3 rounded-md bg-[#181412] border border-[#C9A14A]/30 text-[#F2EBDD] text-sm focus:outline-hidden focus:border-[#C9A14A]'
        />
      </div>

      <div>
        <label
          className={`block text-[11px] uppercase text-[#D9C7A3] mb-2 ${
            isKh ? 'font-khmer' : 'font-inter tracking-[0.2em]'
          }`}
        >
          {copy.rsvp.attendLabel}
        </label>
        <div className='grid grid-cols-2 gap-3'>
          <button
            type='button'
            onClick={() => setAttending('yes')}
            className={`py-2.5 px-3 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
              attending === 'yes'
                ? 'border-[#C9A14A] bg-[#C9A14A] text-[#0B0807]'
                : 'border-[#C9A14A]/30 bg-[#181412] text-[#F2EBDD]'
            }`}
          >
            {copy.rsvp.yesOption}
          </button>
          <button
            type='button'
            onClick={() => setAttending('no')}
            className={`py-2.5 px-3 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
              attending === 'no'
                ? 'border-[#C9A14A] bg-[#C9A14A] text-[#0B0807]'
                : 'border-[#C9A14A]/30 bg-[#181412] text-[#F2EBDD]'
            }`}
          >
            {copy.rsvp.noOption}
          </button>
        </div>
      </div>

      {attending === 'yes' && (
        <div>
          <label
            className={`block text-[11px] uppercase text-[#D9C7A3] mb-1.5 ${
              isKh ? 'font-khmer' : 'font-inter tracking-[0.2em]'
            }`}
          >
            {copy.rsvp.guestCountLabel}
          </label>
          <input
            type='number'
            min={1}
            max={5}
            value={guestCount}
            onChange={(e) => setGuestCount(Number(e.target.value))}
            className='w-full px-4 py-2.5 rounded-md bg-[#181412] border border-[#C9A14A]/30 text-[#F2EBDD] text-sm focus:outline-hidden focus:border-[#C9A14A]'
          />
        </div>
      )}

      <div>
        <label
          className={`block text-[11px] uppercase text-[#D9C7A3] mb-1.5 ${
            isKh ? 'font-khmer' : 'font-inter tracking-[0.2em]'
          }`}
        >
          {copy.rsvp.wishesLabel}
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={copy.rsvp.wishesPlaceholder}
          className='w-full px-4 py-2.5 rounded-md bg-[#181412] border border-[#C9A14A]/30 text-[#F2EBDD] text-sm focus:outline-hidden focus:border-[#C9A14A]'
        />
      </div>

      <button
        type='submit'
        disabled={isSubmitting}
        className={`mt-3 py-3.5 bg-[#C9A14A] text-[#0B0807] font-semibold uppercase text-xs rounded-md shadow-lg transition-transform active:scale-98 hover:bg-[#D9C7A3] cursor-pointer disabled:opacity-50 ${
          isKh ? 'font-khmer' : 'font-inter tracking-[0.25em]'
        }`}
      >
        {isSubmitting ? copy.rsvp.submitting : copy.rsvp.submit}
      </button>
    </form>
  );
};
