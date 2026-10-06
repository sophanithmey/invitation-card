'use client';

import React, { useState } from 'react';
import { CheckCircle2, UserCheck, Send } from 'lucide-react';
import { RSVPItem } from '@/domain/entities/rsvp';

interface EtheapRsvpProps {
  slug: string;
  enabled: boolean;
  onRSVPSubmit: (rsvp: Omit<RSVPItem, 'id' | 'created_at'>) => Promise<void>;
  existingRSVPs?: RSVPItem[];
}

export const EtheapRsvp: React.FC<EtheapRsvpProps> = ({
  enabled,
  onRSVPSubmit,
}) => {
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [attending, setAttending] = useState<boolean | null>(null);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!enabled) return null;

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    if (attending === null || !name.trim()) return;

    setLoading(true);
    try {
      await onRSVPSubmit({
        guest_name: name.trim(),
        attendance: attending ? 'attending' : 'regret',
        guest_count: attending ? guestCount : 0,
        message: message.trim() || undefined,
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to submit RSVP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='relative px-4 py-4 text-center' id='rsvp'>
      <div className='max-w-md mx-auto bg-[#FFFCF7] rounded-3xl border border-[#EBC070]/60 p-6 sm:p-7 shadow-[0_6px_25px_rgba(201,140,8,0.08)] space-y-4 text-left'>
        <div className='text-center space-y-1'>
          <div className='inline-flex items-center gap-2 text-[#C98C08]'>
            <UserCheck className='w-4 h-4' />
            <span className='text-[11px] font-semibold tracking-[0.2em] uppercase'>
              RSVP Confirmation
            </span>
          </div>
          <h2 className='font-khmer-moul text-sm sm:text-base text-[#7A1624]'>
            ការបញ្ជាក់វត្តមាន
          </h2>
          <p className='font-khmer-kantumruuy text-xs text-[#84623A]'>
            សូមជួយបញ្ជាក់វត្តមានរបស់លោកអ្នកដើម្បីភាពងាយស្រួលក្នុងការរៀបចំ
          </p>
        </div>

        {submitted ? (
          <div className='py-6 text-center space-y-2 bg-[#FAF4E6]/60 rounded-2xl border border-[#EBC070]/50 p-4'>
            <CheckCircle2 className='w-10 h-10 mx-auto text-emerald-600 animate-pulse' />
            <h3 className='font-khmer-moul text-sm text-[#7A1624]'>
              សូមអរគុណសម្រាប់ការបញ្ជាក់វត្តមាន!
            </h3>
            <p className='font-khmer-kantumruuy text-xs text-[#84623A]'>
              យើងខ្ញុំទន្ទឹងរង់ចាំជួបលោកអ្នកក្នុងថ្ងៃដ៏វិសេសនេះ។
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className='space-y-3 font-khmer-kantumruuy'
          >
            <div>
              <label className='block text-xs font-semibold text-[#84623A] mb-1'>
                ឈ្មោះរបស់អ្នក (Guest Name){' '}
                <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='បញ្ចូលឈ្មោះរបស់អ្នក...'
                className='w-full px-3.5 py-2.5 bg-[#FAF4E6]/60 border border-[#EBC070]/70 rounded-xl text-xs sm:text-sm text-[#4A351C] focus:outline-none focus:ring-2 focus:ring-[#C98C08] focus:bg-white'
              />
            </div>

            <div className='grid grid-cols-2 gap-2.5'>
              <button
                type='button'
                onClick={() => setAttending(true)}
                className={`py-2.5 px-2 rounded-xl border font-semibold text-xs transition-all cursor-pointer ${
                  attending === true
                    ? 'border-[#C98C08] bg-linear-to-r from-[#C98C08] to-[#EBC070] text-white shadow-xs'
                    : 'border-[#EBC070]/60 bg-[#FAF4E6]/40 text-[#4A351C] hover:bg-[#FAF4E6]'
                }`}
              >
                ចូលរួម (Accept)
              </button>
              <button
                type='button'
                onClick={() => setAttending(false)}
                className={`py-2.5 px-2 rounded-xl border font-semibold text-xs transition-all cursor-pointer ${
                  attending === false
                    ? 'border-stone-400 bg-stone-700 text-white shadow-xs'
                    : 'border-[#EBC070]/60 bg-[#FAF4E6]/40 text-[#4A351C] hover:bg-[#FAF4E6]'
                }`}
              >
                មិនអាចចូលរួម (Decline)
              </button>
            </div>

            {attending && (
              <div>
                <label className='block text-xs font-semibold text-[#84623A] mb-1'>
                  ចំនួនអ្នកចូលរួម (Number of Guests)
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className='w-full px-3.5 py-2.5 bg-[#FAF4E6]/60 border border-[#EBC070]/70 rounded-xl text-xs sm:text-sm text-[#4A351C] cursor-pointer'
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} នាក់ ({n} {n === 1 ? 'Guest' : 'Guests'})
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button
              type='submit'
              disabled={loading || attending === null}
              className='w-full py-3 bg-linear-to-r from-[#C98C08] to-[#EBC070] text-white font-khmer-kantumruuy font-bold text-xs rounded-xl shadow-md transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1.5'
            >
              <Send className='w-3.5 h-3.5' />
              <span>
                {loading ? 'កំពុងបញ្ជូន...' : 'បញ្ជាក់វត្តមាន (Submit RSVP)'}
              </span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
