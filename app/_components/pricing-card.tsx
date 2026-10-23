'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Sparkles, Send, ArrowRight } from 'lucide-react';

export interface PricingPlan {
  id: string;
  name: string;
  nameKh: string;
  tagline: string;
  price?: number;
  popular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

interface PricingCardProps {
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  const isPopular = plan.popular;
  const isExternal = plan.ctaHref.startsWith('http');

  const buttonClasses = `w-full py-3.5 px-6 rounded-full font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
    isPopular
      ? 'bg-linear-to-r from-[#7A1624] to-[#5A0F1A] text-[#D4AF37] shadow-[0_8px_25px_rgba(122,22,36,0.3)] hover:shadow-[0_12px_32px_rgba(122,22,36,0.45)] hover:scale-[1.02] active:scale-95'
      : 'bg-white border-2 border-[#7A1624]/25 text-[#7A1624] hover:border-[#7A1624] hover:bg-[#7A1624]/5 active:scale-95'
  }`;

  return (
    <div
      className={`relative rounded-3xl flex flex-col justify-between p-7 sm:p-8 transition-all duration-300 ${
        isPopular
          ? 'bg-linear-to-b from-[#FFFDF9] via-[#FFFBF2] to-[#FFF6E5] border-2 border-[#D4AF37] shadow-[0_16px_40px_rgba(212,175,55,0.22)] lg:-translate-y-2'
          : 'bg-white border border-[#D4AF37]/30 shadow-md shadow-[#D4AF37]/5 hover:-translate-y-1'
      }`}
    >
      {/* Top Floating Badge for Popular Plan - Sleek and perfectly aligned */}
      {isPopular && (
        <div className='absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-[#7A1624] via-[#8B1E2F] to-[#5A0F1A] border border-[#D4AF37]/60 shadow-[0_4px_16px_rgba(122,22,36,0.35)] whitespace-nowrap z-10'>
          <Sparkles className='w-3.5 h-3.5 text-[#D4AF37] fill-[#D4AF37] shrink-0' />
          <span className='font-khmer text-xs font-bold text-[#FFF6D8] leading-none'>
            {plan.badge || 'ពេញនិយមបំផុត'}
          </span>
          <span className='text-[9px] font-bold tracking-wider uppercase text-[#D4AF37] bg-black/35 px-2 py-0.5 rounded-full leading-none'>
            POPULAR
          </span>
        </div>
      )}

      {/* Plan Header */}
      <div>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='font-khmer text-2xl font-bold text-[#7A1624]'>
              {plan.nameKh}
            </h3>
            <p className='text-xs font-semibold text-gray-500 uppercase tracking-wider mt-0.5'>
              {plan.name}
            </p>
          </div>
        </div>

        <p className='text-xs text-gray-600 font-khmer mt-3 leading-relaxed min-h-[36px]'>
          {plan.tagline}
        </p>

        {/* Pricing Display */}
        <div className='my-6 pt-4 border-t border-[#D4AF37]/20 flex items-baseline gap-1.5 min-h-[58px]'>
          {plan.price !== undefined ? (
            <div className='flex items-baseline gap-1.5'>
              <span
                className={`text-4xl sm:text-5xl font-extrabold ${
                  isPopular ? 'text-[#7A1624]' : 'text-[#2C1810]'
                }`}
              >
                ${plan.price}
              </span>
              <span className='text-xs text-gray-500 font-khmer'>
                / ទូទាត់តែម្ដងគត់
              </span>
            </div>
          ) : (
            <div className='flex flex-col'>
              <span className='font-khmer text-2xl sm:text-3xl font-bold text-[#7A1624] leading-tight'>
                ទាក់ទងតម្លៃ
              </span>
              <span className='text-xs text-gray-500 font-khmer mt-0.5'>
                Contact for Price • តាមតម្រូវការជាក់ស្តែង
              </span>
            </div>
          )}
        </div>

        {/* Features List */}
        <div className='space-y-3 pt-2'>
          <p className='text-xs font-bold text-[#7A1624] uppercase tracking-wider'>
            មុខងាររួមបញ្ចូល ៖
          </p>
          <ul className='space-y-2.5'>
            {plan.features.map((feature, idx) => (
              <li key={idx} className='flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-khmer'>
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                    isPopular
                      ? 'bg-[#7A1624] text-[#D4AF37]'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  <Check className='w-3 h-3 stroke-[3]' />
                </span>
                <span className='leading-snug'>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Button */}
      <div className='mt-8 pt-4 border-t border-gray-100'>
        {isExternal ? (
          <a
            href={plan.ctaHref}
            target='_blank'
            rel='noopener noreferrer'
            className={buttonClasses}
          >
            <Send className='w-4 h-4' />
            <span>{plan.ctaText}</span>
          </a>
        ) : (
          <Link href={plan.ctaHref} className={buttonClasses}>
            <span>{plan.ctaText}</span>
            <ArrowRight className='w-4 h-4' />
          </Link>
        )}
      </div>
    </div>
  );
}
