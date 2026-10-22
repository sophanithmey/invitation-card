'use client';

import React from 'react';
import Image from 'next/image';
import { RSVPItem } from '@/domain/entities/rsvp';
import { WishItem } from '@/domain/entities/wish';
import { GrandEvening } from './grand-evening';
import { GrandEveningRSVPForm } from './grand-evening-rsvp-form';

interface GrandEveningRSVPProps {
  onRSVPSubmit?: (rsvp: Omit<RSVPItem, 'id' | 'created_at'>) => Promise<void>;
  onWishSubmit?: (wish: Omit<WishItem, 'id' | 'created_at'>) => Promise<void>;
  copy: GrandEvening;
  isKh?: boolean;
}

export const GrandEveningRSVP: React.FC<GrandEveningRSVPProps> = ({
  onRSVPSubmit = async () => {},
  onWishSubmit = async () => {},
  copy,
  isKh = false,
}) => {
  return (
    <section
      id='rsvp'
      className='relative bg-[#0B0807] text-[#F2EBDD] overflow-hidden select-none'
    >
      {/* Background Candles Image */}
      <div className='absolute inset-0'>
        <Image
          src='/templates/grand-evening/rsvp-candles.jpg'
          alt='Candlelight evening ambiance'
          fill
          className='object-cover opacity-60'
        />
        <div className='absolute inset-0 bg-linear-to-b from-[#0B0807]/70 via-[#0B0807]/80 to-[#0B0807]' />
      </div>

      <div className='relative z-10 max-w-lg mx-auto px-6 py-20 sm:py-28 flex flex-col'>
        {/* Section Tracker */}
        <div
          className={`flex items-center justify-between text-[10px] text-[#D9C7A3] uppercase mb-8 ${
            isKh ? 'font-khmer' : 'font-inter tracking-[0.3em]'
          }`}
        >
          <span>09</span>
          <span>{copy.nav.rsvp}</span>
        </div>

        {/* Header Block */}
        <div className='text-center mb-8'>
          <h2
            className={`text-4xl sm:text-5xl font-medium text-[#F2EBDD] uppercase leading-tight ${
              isKh ? 'font-khmer normal-case' : 'font-cormorant tracking-[0.04em]'
            }`}
          >
            {isKh ? (
              copy.rsvp.title
            ) : (
              <>
                RESERVE
                <br />
                YOUR SEAT
              </>
            )}
          </h2>

          <p
            className={`text-xs sm:text-sm text-[#D9C7A3] mt-4 uppercase ${
              isKh ? 'font-khmer normal-case' : 'font-inter tracking-[0.25em]'
            }`}
          >
            {copy.rsvp.replyBy}
          </p>
        </div>

        {/* RSVP Form Sub-component */}
        <GrandEveningRSVPForm
          onRSVPSubmit={onRSVPSubmit}
          onWishSubmit={onWishSubmit}
          copy={copy}
          isKh={isKh}
        />
      </div>
    </section>
  );
};
