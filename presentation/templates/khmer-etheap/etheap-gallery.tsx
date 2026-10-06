'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, X } from 'lucide-react';
import { GalleryItem } from '@/domain/entities/gallery';

interface EtheapGalleryProps {
  gallery: GalleryItem[];
}

export const EtheapGallery: React.FC<EtheapGalleryProps> = ({ gallery }) => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className='relative px-4 py-4 text-center'>
      <div className='max-w-md mx-auto bg-[#FFFCF7] rounded-3xl border border-[#EBC070]/60 p-6 sm:p-7 shadow-[0_6px_25px_rgba(201,140,8,0.08)] space-y-4'>
        <div className='space-y-1'>
          <div className='inline-flex items-center gap-2 text-[#C98C08]'>
            <Camera className='w-4 h-4' />
            <span className='text-[11px] font-semibold tracking-[0.2em] uppercase'>
              Pre-Wedding Gallery
            </span>
          </div>
          <h2 className='font-khmer-moul text-sm sm:text-base text-[#7A1624]'>
            កម្រងរូបភាពអនុស្សាវរីយ៍
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-2 gap-2.5'>
          {gallery.map((item, idx) => (
            <div
              key={item.id || idx}
              onClick={() => setActivePhoto(item.image_url)}
              className='relative aspect-3/4 rounded-2xl overflow-hidden border border-[#EBC070]/50 shadow-xs cursor-pointer group transition-all duration-300 hover:scale-[1.03]'
            >
              <Image
                src={item.image_url}
                alt={item.caption || `Photo ${idx + 1}`}
                fill
                className='object-cover group-hover:opacity-95 transition-opacity'
                sizes='(max-width: 640px) 160px, 200px'
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2'>
                {item.caption && (
                  <p className='text-[10px] text-white font-khmer-kantumruuy line-clamp-1'>
                    {item.caption}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className='fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-xs animate-fade-in'
        >
          <button
            onClick={() => setActivePhoto(null)}
            className='absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-white/10 rounded-full cursor-pointer'
            aria-label='Close'
          >
            <X className='w-6 h-6' />
          </button>
          <div className='relative max-w-xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden'>
            <Image
              src={activePhoto}
              alt='Expanded preview'
              fill
              className='object-contain'
              sizes='90vw'
            />
          </div>
        </div>
      )}
    </section>
  );
};
