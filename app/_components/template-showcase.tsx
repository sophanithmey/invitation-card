'use client';

import React, { useState } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { TemplatePreviewModal } from './preview-modal/template-preview-modal';
import { TemplatePreviewItem } from './preview-modal/preview-types';

export const TEMPLATES: TemplatePreviewItem[] = [
  {
    slug: 'serey-mongkul',
    names: 'សិរី & មង្គល',
    style: 'Khmer Luxury',
    desc: 'A rich burgundy and gold aesthetic for the most majestic celebrations.',
    color: 'from-[#7A1624] to-[#4A0D15]',
    textColor: 'text-[#D4AF37]',
  },
  {
    slug: 'celestial-dream',
    names: 'ម៉ាកូ & អានណា',
    style: 'Celestial Dream',
    desc: 'An enchanting starlight navy and gold invitation with an interactive astrolabe compass.',
    color: 'from-[#0F1833] to-[#18254A]',
    textColor: 'text-[#C9A45C]',
  },
  {
    slug: 'sopheap-chanvadey',
    names: 'សុភាព & ច័ន្ទវដ្តី',
    style: 'Khmer Romantic',
    desc: 'សិរីសួស្តីថ្ងៃមង្គលជ័យរបស់យើងខ្ញុំ សុភាព និង ច័ន្ទវដ្តី',
    color: 'from-[#8B0000] to-[#4A0000]',
    textColor: 'text-[#D4AF37]',
  },
  {
    slug: 'chhaiya-thearoth',
    names: 'ឆាយា & ថារ័ត្ន',
    style: 'Khmer Minimal',
    desc: 'Soft rose and champagne hues that bring a delicate, romantic touch.',
    color: 'from-[#D2FFF9] to-[#E8F9FA]',
    textColor: 'text-[#032F2D]',
  },
  {
    slug: 'virak-keomony',
    names: 'វីរៈ & គឹមមួយ',
    style: 'Khmer Traditional',
    desc: 'Royal crimson velvet with Angkorian golden arches and palace lanterns.',
    color: 'from-[#660C18] to-[#2E050B]',
    textColor: 'text-[#E5C158]',
  },
  {
    slug: 'rithy-sreypov',
    names: 'ឫទ្ធី & ស្រីពៅ',
    style: 'European Villa',
    desc: 'A watercolor villa garden save the date that plays like a short film.',
    color: 'from-[#DFEAF3] to-[#F6E7DC]',
    textColor: 'text-[#B8863B]',
  },
];

export function TemplateShowcase() {
  const [previewTemplate, setPreviewTemplate] =
    useState<TemplatePreviewItem | null>(null);

  return (
    <section id='templates' className='py-24 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16 flex flex-col items-center justify-center pt-8'>
          <div className='text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-6'>
            Collections
          </div>
          <h2 className='font-khmer text-3xl md:text-5xl text-[#7A1624]'>
            ស្វែងយល់ពីម៉ូតរបស់យើង
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {TEMPLATES.map((template) => {
            const isLight =
              template.slug === 'rithy-sreypov' ||
              template.slug === 'chhaiya-thearoth';
            const textPrimary = isLight ? 'text-[#2C1810]' : 'text-white';
            const textSecondary = isLight ? 'text-gray-600' : 'text-white/80';
            const badgeBg = isLight
              ? 'bg-[#7A1624]/10 border-[#7A1624]/20 text-[#7A1624]'
              : 'bg-white/20 border-white/20 text-white/90';

            return (
              <div
                key={template.slug}
                onClick={() => setPreviewTemplate(template)}
                className='group relative h-[420px] rounded-3xl overflow-hidden flex flex-col justify-end p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer'
              >
                <div
                  className={`absolute inset-0 bg-linear-to-br ${template.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none" />

                <div className='relative z-10 flex flex-col h-full justify-between'>
                  <div className='flex justify-end'>
                    <div
                      className={`inline-block px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-wider border ${badgeBg}`}
                    >
                      {template.style}
                    </div>
                  </div>

                  <div>
                    <h3
                      className={`font-khmer text-4xl ${textPrimary} mb-3 drop-shadow-sm group-hover:scale-105 transform origin-left transition-transform duration-500`}
                    >
                      {template.names}
                    </h3>
                    <p
                      className={`${textSecondary} max-w-sm mb-8 leading-relaxed`}
                    >
                      {template.desc}
                    </p>

                    <button
                      type='button'
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewTemplate(template);
                      }}
                      className={`flex items-center gap-2 ${template.textColor} font-bold text-left cursor-pointer group/btn`}
                    >
                      <Eye className='w-4 h-4 text-inherit shrink-0' />
                      <span className='group-hover/btn:mr-2 transition-all duration-300'>
                        Preview Design
                      </span>
                      <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300' />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-screen Device Preview Modal */}
      <TemplatePreviewModal
        template={previewTemplate}
        onClose={() => setPreviewTemplate(null)}
      />
    </section>
  );
}
