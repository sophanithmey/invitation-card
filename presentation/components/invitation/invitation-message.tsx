'use client';

import React from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { KhmerOrnament } from '../ornaments/khmer-ornament';

interface InvitationMessageProps {
  wedding: Wedding;
}

export const InvitationMessageSection: React.FC<InvitationMessageProps> = ({ wedding }) => {
  return (
    <section className="py-12 px-4 max-w-3xl mx-auto text-center">
      <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-[var(--bg-color,#FFF9EF)] to-[var(--card-bg,#FFFFFF)] border-2 border-[var(--secondary-color,#D4AF37)] shadow-xl relative">
        <h2 className="font-khmer-moul text-2xl text-[var(--primary-color,#7A1624)] mb-4">
          សារលិខិតអញ្ជើញ
        </h2>

        <KhmerOrnament variant="lotus" />

        <p className="font-khmer-kantumruuy text-base md:text-lg leading-relaxed text-gray-800 my-6 whitespace-pre-line">
          {wedding.invitation_message}
        </p>

        <KhmerOrnament variant="divider" />
      </div>
    </section>
  );
};
