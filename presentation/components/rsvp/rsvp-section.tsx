'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { RSVPItem } from '@/domain/entities/rsvp';
import { useLanguage } from '@/presentation/context/language-context';
import { KhmerOrnament } from '../ornaments/khmer-ornament';

interface RSVPSectionProps {
  slug: string;
  enabled: boolean;
  onRSVPSubmit: (rsvp: Omit<RSVPItem, 'id' | 'created_at'>) => Promise<void>;
  existingRSVPs?: RSVPItem[];
}

export const RSVPSection: React.FC<RSVPSectionProps> = ({ slug, enabled, onRSVPSubmit, existingRSVPs = [] }) => {
  const { lang } = useLanguage();
  const [name, setName] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  const [attending, setAttending] = useState<boolean | null>(null);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!enabled) return null;

  const handleSubmit = async (e: React.FormEvent) => {
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
    <section className="py-16 px-4 max-w-2xl mx-auto text-center" id="rsvp">
      <h2 className="font-khmer-moul text-2xl md:text-3xl text-[#8B0000] mb-2 drop-shadow-sm">
        {lang === 'kh' ? 'ការបញ្ជាក់ការចូលរួម' : 'RSVP'}
      </h2>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-6">
        {lang === 'kh' ? 'សូមបញ្ជាក់ការចូលរួមរបស់អ្នក' : 'Confirm Your Attendance'}
      </p>
      <KhmerOrnament variant="divider" />

      <div className="glass-panel rounded-[2rem] p-8 md:p-10 shadow-[0_8px_40px_rgba(0,0,0,0.06)] text-left mt-8 relative overflow-hidden transition-all duration-700 hover:shadow-[0_12px_50px_rgba(212,175,55,0.15)]">
        {submitted ? (
          <div className="py-12 text-center space-y-5 font-khmer-kantumruuy">
            <CheckCircle2 className="w-20 h-20 mx-auto text-[#D4AF37] animate-pulse-glow rounded-full bg-[#D4AF37]/10 p-2" />
            <h3 className="font-khmer-moul text-2xl text-[#8B0000]">
              {lang === 'kh' ? 'សូមអរគុណ!' : 'Thank You!'}
            </h3>
            <p className="text-[var(--text-primary)] opacity-80 max-w-sm mx-auto leading-relaxed">
              {lang === 'kh'
                ? 'យើងខ្ញុំបានទទួលការបញ្ជាក់របស់អ្នករួចរាល់ហើយ។ រង់ចាំជួបគ្នានៅថ្ងៃកម្មវិធី!'
                : 'Your RSVP has been successfully received. We look forward to celebrating with you!'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 font-khmer-kantumruuy relative z-10">
            <div>
              <label className="block text-sm font-semibold text-[#8B0000] mb-2 uppercase tracking-wide">
                {lang === 'kh' ? 'ឈ្មោះរបស់អ្នក / Guest Name' : 'Guest Name'} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-3.5 rounded-xl border border-[#D4AF37]/40 bg-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
                placeholder={lang === 'kh' ? 'បញ្ចូលឈ្មោះរបស់អ្នក...' : 'Enter your full name...'}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setAttending(true)}
                className={`py-4 rounded-xl border-2 transition-all duration-300 font-semibold cursor-pointer shadow-sm flex flex-col items-center gap-2 ${
                  attending === true
                    ? 'border-[#D4AF37] bg-gradient-to-br from-[#8B0000] to-[#5A0000] text-[#D4AF37] shadow-md scale-[1.02]'
                    : 'border-[#D4AF37]/30 bg-white/50 text-slate-600 hover:border-[#D4AF37]/60'
                }`}
              >
                <span className="font-khmer-moul text-base">{lang === 'kh' ? 'ចូលរួម' : 'Accept'}</span>
                <span className="text-[10px] uppercase tracking-widest opacity-80">With Joy</span>
              </button>
              
              <button
                type="button"
                onClick={() => setAttending(false)}
                className={`py-4 rounded-xl border-2 transition-all duration-300 font-semibold cursor-pointer shadow-sm flex flex-col items-center gap-2 ${
                  attending === false
                    ? 'border-slate-300 bg-slate-800 text-white shadow-md scale-[1.02]'
                    : 'border-[#D4AF37]/30 bg-white/50 text-slate-600 hover:border-slate-400'
                }`}
              >
                <span className="font-khmer-moul text-base">{lang === 'kh' ? 'មិនអាចចូលរួម' : 'Decline'}</span>
                <span className="text-[10px] uppercase tracking-widest opacity-80">With Regret</span>
              </button>
            </div>

            {attending && (
              <div className="animate-fade-in-up">
                <label className="block text-sm font-semibold text-[#8B0000] mb-2 uppercase tracking-wide">
                  {lang === 'kh' ? 'ចំនួនអ្នកចូលរួម / Number of Guests' : 'Number of Guests'}
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full px-5 py-3.5 rounded-xl border border-[#D4AF37]/40 bg-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all cursor-pointer"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num} {lang === 'kh' ? 'នាក់' : num === 1 ? 'Person' : 'People'}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-[#8B0000] mb-2 uppercase tracking-wide">
                {lang === 'kh' ? 'សារជូនពរ (ជម្រើស) / Message' : 'Leave a Message (Optional)'}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full px-5 py-3.5 rounded-xl border border-[#D4AF37]/40 bg-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
                placeholder={lang === 'kh' ? 'សរសេរសារជូនពរ...' : 'Write your wishes...'}
              />
            </div>

            <button
              type="submit"
              disabled={loading || attending === null || !name.trim()}
              className="w-full py-4 bg-gradient-to-r from-[#8B0000] to-[#5A0000] hover:shadow-[0_8px_30px_rgba(139,0,0,0.4)] text-[#D4AF37] font-khmer-moul text-lg rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Send className="w-5 h-5" />
              <span>{loading ? (lang === 'kh' ? 'កំពុងបញ្ជូន...' : 'Sending...') : (lang === 'kh' ? 'បញ្ជូនការបញ្ជាក់' : 'Send RSVP')}</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
