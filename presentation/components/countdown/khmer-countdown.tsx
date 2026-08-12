'use client';

import React, { useState, useEffect } from 'react';

interface KhmerCountdownProps {
  targetDateStr: string;
}

export const KhmerCountdown: React.FC<KhmerCountdownProps> = ({ targetDateStr }) => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setMounted(true);
    const calculateTime = () => {
      const difference = +new Date(targetDateStr) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDateStr]);

  const toKhmerNum = (num: number) => {
    const d = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
    return String(num).padStart(2, '0').split('').map((c) => (isNaN(parseInt(c, 10)) ? c : d[parseInt(c, 10)])).join('');
  };

  const units = [
    { key: 'days', val: timeLeft.days, label: 'ថ្ងៃ', en: 'Days' },
    { key: 'hours', val: timeLeft.hours, label: 'ម៉ោង', en: 'Hours' },
    { key: 'minutes', val: timeLeft.minutes, label: 'នាទី', en: 'Mins' },
    { key: 'seconds', val: timeLeft.seconds, label: 'វិនាទី', en: 'Secs' },
  ];

  return (
    <section className="py-14 px-4 max-w-3xl mx-auto text-center">
      <div className="p-8 rounded-3xl bg-gradient-to-br from-[#8B0000] to-[#5A0012] text-[#D4AF37] border border-[#D4AF37]/40 shadow-[0_8px_50px_rgba(139,0,0,0.2)] relative overflow-hidden">
        {/* Ambient shimmer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5 pointer-events-none" />

        <h2 className="font-khmer-moul text-xl md:text-2xl text-amber-200 mb-1 relative">
          រាប់ថយក្រោយឆ្ពោះទៅកាន់ថ្ងៃសិរីមង្គល
        </h2>
        <p className="text-[10px] uppercase tracking-[0.2em] text-amber-300/70 font-semibold mb-8 relative">
          Countdown to the Big Day
        </p>

        <div className="grid grid-cols-4 gap-3 md:gap-5 relative">
          {units.map((u) => (
            <div key={u.key} className="p-3 md:p-5 rounded-2xl bg-black/25 border border-[#D4AF37]/30 backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/60 hover:bg-black/35">
              <span className="font-khmer-moul text-2xl md:text-4xl text-amber-200 block tabular-nums" suppressHydrationWarning>
                {mounted ? toKhmerNum(u.val) : '០០'}
              </span>
              <span className="text-[10px] font-khmer-kantumruuy text-amber-100/70 mt-1.5 block">{u.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
