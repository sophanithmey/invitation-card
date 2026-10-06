'use client';

import React, { useState } from 'react';
import { MessageSquareHeart, Send, CheckCircle2 } from 'lucide-react';
import { WishItem } from '@/domain/entities/wish';

interface EtheapWishesProps {
  wishes?: WishItem[];
  onWishSubmit: (wish: Omit<WishItem, 'id' | 'created_at'>) => Promise<void>;
}

export const EtheapWishes: React.FC<EtheapWishesProps> = ({
  wishes = [],
  onWishSubmit,
}) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      await onWishSubmit({ name: name.trim(), message: message.trim() });
      setSubmitted(true);
      setName('');
      setMessage('');
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      console.error('Failed to submit wish:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='relative px-4 py-4 text-center'>
      <div className='max-w-md mx-auto bg-[#FFFCF7] rounded-3xl border border-[#EBC070]/60 p-6 sm:p-7 shadow-[0_6px_25px_rgba(201,140,8,0.08)] space-y-5'>
        {/* Header */}
        <div className='space-y-1'>
          <div className='inline-flex items-center gap-2 text-[#C98C08]'>
            <MessageSquareHeart className='w-4 h-4' />
            <span className='text-[11px] font-semibold tracking-[0.2em] uppercase'>
              Wishes & Blessings
            </span>
          </div>
          <h2 className='font-khmer-moul text-sm sm:text-base text-[#7A1624]'>
            ពាក្យជូនពរសម្រាប់គូស្វាមីភរិយា
          </h2>
          <p className='font-khmer-kantumruuy text-xs text-[#84623A]'>
            សូមផ្ញើសារជូនពរដ៏មានអត្ថន័យដល់កូនកំលោះ និងកូនក្រមុំ
          </p>
        </div>

        {/* Wishing Form */}
        <form onSubmit={handleSubmit} className='text-left space-y-3'>
          <div>
            <label className='block text-xs font-semibold text-[#84623A] mb-1'>
              ឈ្មោះរបស់អ្នក (Your Name) <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='បញ្ចូលឈ្មោះរបស់អ្នក...'
              className='w-full px-3.5 py-2.5 bg-[#FAF4E6]/60 border border-[#EBC070]/70 rounded-xl text-xs sm:text-sm text-[#4A351C] placeholder:text-[#84623A]/50 focus:outline-none focus:ring-2 focus:ring-[#C98C08] focus:bg-white transition-all'
            />
          </div>

          <div>
            <label className='block text-xs font-semibold text-[#84623A] mb-1'>
              សារជូនពរ (Wishing Message) <span className='text-red-500'>*</span>
            </label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder='សរសេរសារជូនពររបស់អ្នកនៅទីនេះ...'
              className='w-full px-3.5 py-2.5 bg-[#FAF4E6]/60 border border-[#EBC070]/70 rounded-xl text-xs sm:text-sm text-[#4A351C] placeholder:text-[#84623A]/50 focus:outline-none focus:ring-2 focus:ring-[#C98C08] focus:bg-white transition-all resize-none'
            />
          </div>

          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full py-3 px-4 bg-linear-to-r from-[#C98C08] to-[#EBC070] hover:from-[#A87406] hover:to-[#D4AF37] text-white font-khmer-kantumruuy font-bold text-xs sm:text-sm rounded-xl shadow-md inline-flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-60 cursor-pointer'
          >
            {isSubmitting ? (
              <span>កំពុងបញ្ជូន...</span>
            ) : submitted ? (
              <>
                <CheckCircle2 className='w-4 h-4 text-white' />
                <span>បានបញ្ជូនដោយជោគជ័យ!</span>
              </>
            ) : (
              <>
                <Send className='w-3.5 h-3.5' />
                <span>បញ្ជូនសារជូនពរ (Send Wishes)</span>
              </>
            )}
          </button>
        </form>

        {/* Stream of Wishes */}
        <div className='pt-2 border-t border-[#EBC070]/30 space-y-2.5 text-left max-h-60 overflow-y-auto pr-1'>
          {wishes.length === 0 ? (
            <div className='py-6 text-center text-xs text-[#84623A]/70 font-khmer-kantumruuy bg-[#FAF4E6]/40 rounded-2xl border border-dashed border-[#EBC070]/40'>
              <MessageSquareHeart className='w-6 h-6 mx-auto text-[#C98C08]/50 mb-1' />
              <span>មិនទាន់មានសារជូនពរនៅឡើយទេ។ សូមធ្វើជាអ្នកជូនពរដំបូងគេ!</span>
            </div>
          ) : (
            wishes.map((item) => (
              <div
                key={item.id}
                className='bg-[#FAF4E6]/70 p-3 rounded-xl border border-[#EBC070]/40 space-y-1'
              >
                <div className='flex items-center justify-between text-[11px]'>
                  <span className='font-bold text-[#7A1624]'>{item.name}</span>
                  <span className='text-[10px] text-[#84623A]/70 font-mono'>
                    {new Date(item.created_at).toLocaleDateString('km-KH', {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
                <p className='font-khmer-kantumruuy text-xs text-[#4A351C] italic'>
                  &ldquo;{item.message}&rdquo;
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
