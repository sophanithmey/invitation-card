'use client';

import React from 'react';
import Image from 'next/image';
import { GalleryItem } from '@/domain/entities/gallery';
import { CelestialCopy } from './celestial-copy';

interface CelestialStoryGalleryProps {
  story?: string;
  gallery?: GalleryItem[];
  couplePhotos: {
    cover: string;
    groom: string;
    bride: string;
  };
  copy: CelestialCopy;
  isKh: boolean;
}

export const CelestialStoryGallery: React.FC<CelestialStoryGalleryProps> = ({
  story,
  gallery = [],
  couplePhotos,
  copy,
  isKh,
}) => {
  const handleReturnToCompass = () => {
    const el = document.getElementById('cd-compass');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const galleryImages = gallery.length > 0
    ? gallery.map((g) => g.image_url)
    : [
        couplePhotos.cover || '/templates/celestial-dream/cd-hall.webp',
        couplePhotos.groom || '/templates/celestial-dream/cd-castle.webp',
        couplePhotos.bride || '/templates/celestial-dream/cd-scene-zoom.png',
        '/templates/celestial-dream/cd-arch.webp',
      ];

  const storyParagraphs = story
    ? story.split('\n\n').filter((p) => p.trim().length > 0)
    : [
        'Under a sky adorned with countless twinkling stars, our paths intertwined for the first time.',
        'We discovered that the most breathtaking place in the world is anywhere, as long as we are together.',
        'A heartfelt promise made under the starlight, with love that shines brighter with every passing day.',
      ];

  return (
    <div className='w-full'>
      {/* Our Story Section */}
      <section
        id='cd-story'
        aria-label='Our Story'
        className='relative w-full bg-linear-to-b from-[#0F1833] to-[#18254A] px-4 py-16 sm:py-24'
      >
        <div className='mx-auto flex w-full max-w-2xl flex-col gap-8'>
          <header className='text-center'>
            <p
              className={`mb-2 text-[0.65rem] uppercase text-[#C9A45C] ${
                isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.34em]'
              }`}
            >
              {copy.storyKicker}
            </p>
            <h2
              className={`text-[clamp(1.6rem,7vw,2.4rem)] leading-[1.15] text-[#F8F7F3] ${
                isKh ? 'font-khmer-moul' : 'cd-font-display tracking-[0.04em]'
              }`}
            >
              {copy.storyTitle}
            </h2>

            <div className='flex items-center justify-center gap-3 py-3' aria-hidden='true'>
              <span className='block h-px w-14 bg-linear-to-r from-transparent to-[#C9A45C]' />
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M8 0.5 L9.4 6.6 L15.5 8 L9.4 9.4 L8 15.5 L6.6 9.4 L0.5 8 L6.6 6.6 Z'
                  fill='#C9A45C'
                />
              </svg>
              <span className='block h-px w-14 bg-linear-to-l from-transparent to-[#C9A45C]' />
            </div>
          </header>

          <div className='flex flex-col gap-10'>
            {storyParagraphs.map((para, idx) => (
              <article
                key={idx}
                className='flex flex-col items-center gap-4 text-center'
              >
                {/* Pill Arched Photo Frame */}
                <div className='relative h-44 w-32 overflow-hidden rounded-[999px] border border-[#C9A45C]/40 bg-[#18254A]/50 shadow-[0_0_20px_rgba(201,164,92,0.15)]'>
                  <Image
                    src={galleryImages[idx % galleryImages.length]}
                    alt=''
                    fill
                    sizes='128px'
                    className='object-cover'
                  />
                </div>

                <p
                  className={`max-w-md text-[clamp(0.92rem,3.8vw,1.05rem)] leading-relaxed text-[#F2E9D9]/80 ${
                    isKh ? 'font-khmer' : 'cd-font-serif'
                  }`}
                >
                  {para}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id='cd-gallery'
        aria-label='Gallery'
        className='relative w-full bg-[#F2E9D9] px-4 py-16 sm:py-24 text-[#1A2445]'
      >
        <div className='mx-auto flex w-full max-w-2xl flex-col gap-8'>
          <header className='text-center'>
            <p
              className={`mb-2 text-[0.65rem] uppercase text-[#C9A45C] ${
                isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.34em]'
              }`}
            >
              {copy.galleryKicker}
            </p>
            <h2
              className={`text-[clamp(1.6rem,7vw,2.4rem)] leading-[1.15] text-[#1A2445] ${
                isKh ? 'font-khmer-moul' : 'cd-font-display tracking-[0.04em]'
              }`}
            >
              {copy.galleryTitle}
            </h2>

            <div className='flex items-center justify-center gap-3 py-2' aria-hidden='true'>
              <span className='block h-px w-14 bg-linear-to-r from-transparent to-[#1A2445]/30' />
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M8 0.5 L9.4 6.6 L15.5 8 L9.4 9.4 L8 15.5 L6.6 9.4 L0.5 8 L6.6 6.6 Z'
                  fill='#1A2445'
                  opacity='0.6'
                />
              </svg>
              <span className='block h-px w-14 bg-linear-to-l from-transparent to-[#1A2445]/30' />
            </div>
          </header>

          <div className='grid grid-cols-2 gap-3 sm:gap-4'>
            {galleryImages.map((src, i) => (
              <figure
                key={i}
                className='relative aspect-3/4 overflow-hidden rounded-2xl border border-[#1A2445]/15 bg-[#1A2445]/5 shadow-sm'
              >
                <Image
                  src={src}
                  alt={`Memory ${i + 1}`}
                  fill
                  sizes='(max-width: 640px) 50vw, 320px'
                  className='object-cover transition-transform duration-500 hover:scale-105'
                />
              </figure>
            ))}
          </div>

          <div className='flex justify-center pt-4'>
            <button
              type='button'
              onClick={handleReturnToCompass}
              className={`flex items-center gap-2 text-[0.65rem] uppercase text-[#1A2445]/60 transition-colors hover:text-[#1A2445] ${
                isKh ? 'font-khmer' : 'cd-font-sans tracking-[0.3em]'
              }`}
            >
              <span aria-hidden='true'>✦</span>
              <span>{copy.returnToCompass}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
