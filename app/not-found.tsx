'use client';

import React from 'react';
import Link from 'next/link';
import { HeartOff, Home, Sparkles } from 'lucide-react';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#FFF9EF] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white border-2 border-[#D4AF37] rounded-3xl p-8 text-center shadow-2xl relative">
        <KhmerOrnament variant="corner" className="absolute top-2 left-2 text-[#D4AF37]" />
        <KhmerOrnament variant="corner" className="absolute top-2 right-2 rotate-90 text-[#D4AF37]" />
        <KhmerOrnament variant="corner" className="absolute bottom-2 left-2 -rotate-90 text-[#D4AF37]" />
        <KhmerOrnament variant="corner" className="absolute bottom-2 right-2 rotate-180 text-[#D4AF37]" />

        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#7A1624] text-[#D4AF37] flex items-center justify-center border-2 border-[#D4AF37]">
          <HeartOff className="w-8 h-8" />
        </div>

        <h1 className="font-khmer-moul text-xl text-[#7A1624] mb-3 leading-relaxed">
          សំបុត្រអញ្ជើញមិនត្រូវបានរកឃើញ
        </h1>

        <p className="font-khmer-kantumruuy text-sm text-gray-700 mb-6">
          The wedding invitation you're looking for could not be found. Please check the URL or return home.
        </p>

        <KhmerOrnament variant="divider" />

        <div className="flex flex-col gap-3 mt-6 font-khmer-kantumruuy">
          <Link
            href="/"
            className="w-full py-3 px-4 bg-[#7A1624] text-[#D4AF37] font-khmer-moul text-sm rounded-xl border border-[#D4AF37] shadow-lg flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            <Home className="w-4 h-4" />
            <span>ត្រឡប់ទៅទំព័រដើម (Back to Home)</span>
          </Link>

          <Link
            href="/admin"
            className="w-full py-3 px-4 bg-[var(--bg-color,#FFF9EF)] text-[#7A1624] font-semibold text-xs rounded-xl border border-[#D4AF37] flex items-center justify-center gap-2 hover:bg-amber-100 transition"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>បង្កើតសំបុត្រថ្មីក្នុង Admin Studio</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
