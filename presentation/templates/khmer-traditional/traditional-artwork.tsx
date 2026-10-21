import React from 'react';
import Image from 'next/image';
import { TRADITIONAL_ASSETS } from './traditional-copy';
import { TraditionalSparkles } from './traditional-sparkles';

interface TraditionalArtworkProps {
  scene: number;
  mode: 'auto' | 'scroll';
}

export const TraditionalArtwork: React.FC<TraditionalArtworkProps> = ({ scene, mode }) => {
  const showArch = mode === 'scroll' ? false : scene === 0;

  return (
    <div className='pointer-events-none absolute inset-0 overflow-hidden' aria-hidden='true'>
      {/* Altar Stage Background */}
      <div className='traditional-kenburns absolute inset-0 origin-center'>
        <Image
          src={TRADITIONAL_ASSETS.altar}
          alt=''
          fill
          priority
          sizes='(min-width: 640px) 620px, 100vw'
          className='object-cover object-center'
        />
      </div>

      {/* Crimson Archway Overlay for Scene 0 */}
      <div
        className='traditional-kenburns absolute inset-0 origin-center transition-opacity duration-1000'
        style={{ opacity: showArch ? 1 : 0 }}
      >
        <Image
          src={TRADITIONAL_ASSETS.arch}
          alt=''
          fill
          priority
          sizes='(min-width: 640px) 620px, 100vw'
          className='object-cover object-center'
        />
      </div>

      {/* Royal Atmospheric Vignette */}
      <div className='absolute inset-0 bg-radial from-transparent via-black/20 to-black/55' />

      {/* Subtle Top & Bottom Warm Gradients */}
      <div className='absolute inset-x-0 top-0 h-[22%] bg-linear-to-b from-black/60 to-transparent' />
      <div className='absolute inset-x-0 bottom-0 h-[26%] bg-linear-to-t from-black/75 to-transparent' />

      <TraditionalSparkles />
    </div>
  );
};
