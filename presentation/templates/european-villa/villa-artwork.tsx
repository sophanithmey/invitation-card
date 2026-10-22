import React from 'react';
import Image from 'next/image';
import { VILLA_ASSETS } from './villa-copy';
import { VillaPetals } from './villa-petals';

const FLOWER_MASK =
  'linear-gradient(to right, #000 0%, #000 22%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.35) 55%, #000 78%, #000 100%)';

/** Layered watercolor artwork: camera move, swaying foliage, flowers and petals. */
export const VillaArtwork: React.FC = () => (
  <div
    className='pointer-events-none absolute inset-0 overflow-hidden'
    aria-hidden='true'
  >
    <div className='villa-kenburns absolute inset-0 origin-[60%_70%]'>
      <Image
        src={VILLA_ASSETS.scene}
        alt=''
        fill
        priority
        sizes='(min-width: 640px) 620px, 100vw'
        className='object-cover object-bottom'
      />
    </div>

    <div className='villa-sun absolute top-[-12%] right-[-18%] h-[45%] w-[85%] rounded-full bg-[radial-gradient(circle,rgba(255,250,235,0.9)_0%,rgba(255,246,220,0.35)_40%,transparent_70%)]' />

    <div className='villa-enter-left absolute inset-y-0 left-[-36%] w-full'>
      <div className='villa-sway-left relative h-full w-full'>
        <Image
          src={VILLA_ASSETS.foliageLeft}
          alt=''
          fill
          sizes='(min-width: 640px) 620px, 100vw'
          className='object-cover object-left'
        />
      </div>
    </div>

    <div className='villa-enter-right absolute inset-y-0 right-[-38%] w-full'>
      <div className='villa-sway-right relative h-full w-full'>
        <Image
          src={VILLA_ASSETS.foliageRight}
          alt=''
          fill
          sizes='(min-width: 640px) 620px, 100vw'
          className='object-cover object-right'
        />
      </div>
    </div>

    <div className='villa-enter-bottom absolute bottom-[-9%] left-[-8%] w-[116%]'>
      <div
        className='villa-sway-bottom relative aspect-[1264/848] w-full'
        style={{ maskImage: FLOWER_MASK, WebkitMaskImage: FLOWER_MASK }}
      >
        <Image
          src={VILLA_ASSETS.flowersFront}
          alt=''
          fill
          sizes='(min-width: 640px) 720px, 116vw'
          className='object-contain object-bottom'
        />
      </div>
    </div>

    <VillaPetals />
    <div className='villa-intro-veil pointer-events-none absolute inset-0 bg-[#f6f9fb]' />
  </div>
);
