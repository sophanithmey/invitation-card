'use client';

import React, { useState } from 'react';
import { WishItem } from '@/domain/entities/wish';
import { useLanguage } from '@/presentation/context/language-context';
import { Send, MessageSquareHeart } from 'lucide-react';
import { KhmerOrnament } from '../ornaments/khmer-ornament';

interface WishesSectionProps {
  wishes?: WishItem[];
  onWishSubmit: (wish: Omit<WishItem, 'id' | 'created_at'>) => Promise<void>;
}

export const WishesSection: React.FC<WishesSectionProps> = ({ wishes = [], onWishSubmit }) => {
  const { lang } = useLanguage();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    
    setIsSubmitting(true);
    try {
      await onWishSubmit({ name, message });
      setSuccess(true);
      setName('');
      setMessage('');
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 px-4 max-w-4xl mx-auto w-full">
      <div className="text-center mb-10">
        <MessageSquareHeart className="w-10 h-10 mx-auto text-[var(--primary-color,#8B0000)] mb-4 opacity-80" />
        <h2 className="text-3xl md:text-4xl font-khmer-moul text-[var(--primary-color,#8B0000)] mb-4 drop-shadow-sm">
          {lang === 'kh' ? 'សៀវភៅជូនពរ' : 'Guestbook'}
        </h2>
        <KhmerOrnament variant="divider" className="mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Column */}
        <div className="glass-panel p-6 rounded-2xl border border-[var(--primary-color,#8B0000)]/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)] h-fit relative overflow-hidden">
          {/* Subtle decor */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#D4AF37]/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <h3 className="text-xl font-semibold text-[var(--primary-color,#8B0000)] mb-6">
            {lang === 'kh' ? 'សរសេរសារជូនពរ' : 'Leave a Message'}
          </h3>
          
          {success ? (
            <div className="p-6 bg-green-50/80 text-green-700 rounded-xl text-center border border-green-200 animate-fade-in flex flex-col items-center justify-center min-h-[250px]">
              <MessageSquareHeart className="w-12 h-12 mb-3 text-green-500 opacity-80 animate-pulse" />
              <p className="font-medium text-lg">{lang === 'kh' ? 'សូមអរគុណសម្រាប់សារជូនពរ!' : 'Thank you for your warm wishes!'}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  {lang === 'kh' ? 'ឈ្មោះរបស់អ្នក' : 'Your Name'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/70 border border-slate-300/60 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all placeholder:text-slate-400"
                  placeholder={lang === 'kh' ? 'បញ្ចូលឈ្មោះ...' : 'Enter your name...'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  {lang === 'kh' ? 'សារជូនពរ' : 'Message'}
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white/70 border border-slate-300/60 rounded-xl focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400"
                  placeholder={lang === 'kh' ? 'សរសេរសារជូនពរ...' : 'Write your wishes...'}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-[var(--primary-color,#8B0000)] to-[#6A0000] hover:scale-[1.02] active:scale-95 text-white rounded-xl font-medium shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:pointer-events-none"
              >
                <Send className="w-4 h-4" />
                {isSubmitting 
                  ? (lang === 'kh' ? 'កំពុងបញ្ជូន...' : 'Sending...') 
                  : (lang === 'kh' ? 'បញ្ជូនសារ' : 'Send Message')}
              </button>
            </form>
          )}
        </div>

        {/* Wishes List Column */}
        <div className="space-y-4 max-h-[480px] overflow-y-auto pr-3 custom-scrollbar">
          {wishes.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 py-16 text-center border-2 border-dashed border-[#D4AF37]/30 rounded-2xl bg-white/30">
              <MessageSquareHeart className="w-10 h-10 mb-3 opacity-40" />
              <p className="font-medium">{lang === 'kh' ? 'មិនទាន់មានសារជូនពរនៅឡើយទេ' : 'Be the first to leave a message!'}</p>
            </div>
          ) : (
            wishes.map((wish, i) => (
              <div 
                key={wish.id} 
                className="bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-[#D4AF37]/20 animate-fade-in-up"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <p className="text-slate-600 text-sm leading-relaxed italic mb-4">"{wish.message}"</p>
                <div className="flex justify-between items-center border-t border-slate-100 pt-3">
                  <span className="font-semibold text-[var(--primary-color,#8B0000)] text-sm">{wish.name}</span>
                  <span className="text-[11px] font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded-md">
                    {new Date(wish.created_at).toLocaleDateString(lang === 'kh' ? 'km-KH' : 'en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
