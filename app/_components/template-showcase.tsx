import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface TemplateShowcaseItem {
  slug: string;
  names: string;
  style: string;
  desc: string;
  color: string;
  textColor: string;
}

export const TEMPLATES: TemplateShowcaseItem[] = [
  {
    slug: 'serey-mongkul',
    names: 'សិរី & មង្គល',
    style: 'Khmer Luxury',
    desc: 'A rich burgundy and gold aesthetic for the most majestic celebrations.',
    color: 'from-[#7A1624] to-[#4A0D15]',
    textColor: 'text-[#D4AF37]',
  },
  {
    slug: 'dara-sophea',
    names: 'ដារ៉ា & សុភា',
    style: 'Khmer Classic',
    desc: 'Timeless ivory and subtle gold elements, perfect for a traditional feel.',
    color: 'from-[#FDFBF7] to-[#EAE3D9]',
    textColor: 'text-[#8B0000]',
  },
  {
    slug: 'kanha-vichea',
    names: 'វិជ្ជា & កញ្ញា',
    style: 'Khmer Modern',
    desc: 'Sleek emerald tones with glowing accents for the contemporary couple.',
    color: 'from-[#080F0C] to-[#040806]',
    textColor: 'text-emerald-400',
  },
  {
    slug: 'cheata-piseth',
    names: 'ពិសិដ្ឋ & ជាតា',
    style: 'Khmer Floral',
    desc: 'Soft rose and champagne hues that bring a delicate, romantic touch.',
    color: 'from-[#FFF8F5] to-[#FDEBE7]',
    textColor: 'text-[#E8B4B8]',
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
];

export function TemplateShowcase() {
  return (
    <section className='py-24 px-4'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16 flex flex-col items-center justify-center pt-8'>
          <div className='text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-6'>
            Collections
          </div>
          <h2 className='font-khmer-moul text-3xl md:text-5xl text-[#7A1624]'>
            ស្វែងយល់ពីម៉ូតរបស់យើង
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {TEMPLATES.map((template) => {
            const isLight =
              template.slug === 'dara-sophea' ||
              template.slug === 'cheata-piseth';
            const textPrimary = isLight ? 'text-[#2C1810]' : 'text-white';
            const textSecondary = isLight ? 'text-gray-600' : 'text-white/80';
            const badgeBg = isLight
              ? 'bg-[#7A1624]/10 border-[#7A1624]/20 text-[#7A1624]'
              : 'bg-white/20 border-white/20 text-white/90';

            return (
              <Link
                key={template.slug}
                href={`/wedding/${template.slug}`}
                className='group relative h-105 rounded-3xl overflow-hidden flex flex-col justify-end p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2'
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
                      className={`font-khmer-moul text-3xl ${textPrimary} mb-3 drop-shadow-sm group-hover:scale-105 transform origin-left transition-transform duration-500`}
                    >
                      {template.names}
                    </h3>
                    <p
                      className={`${textSecondary} max-w-sm mb-8 leading-relaxed`}
                    >
                      {template.desc}
                    </p>

                    <div
                      className={`flex items-center gap-2 ${template.textColor} font-bold`}
                    >
                      <span className='group-hover:mr-2 transition-all duration-300'>
                        Preview Design
                      </span>
                      <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
