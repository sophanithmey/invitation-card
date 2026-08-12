'use client';

import React, { useState, useEffect } from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { weddingRepository } from '@/data/repositories/local-wedding-repository';
import { getVisibleSections } from '@/use-cases/get-visible-sections';
import { submitRSVP } from '@/use-cases/submit-rsvp';
import { submitWish } from '@/use-cases/submit-wish';
import { ThemeProvider } from '@/presentation/theme/theme-provider';
import { LanguageProvider } from '@/presentation/context/language-context';
import { EnvelopeModal } from '@/presentation/components/envelope/envelope-modal';
import { AudioPlayer } from '@/presentation/components/audio/audio-player';
import { WeddingTemplateDispatcher } from '@/presentation/templates/template-dispatcher';
import { RSVPItem } from '@/domain/entities/rsvp';
import { WishItem } from '@/domain/entities/wish';

interface ClientPageProps {
  initialWedding: Wedding;
  slug: string;
}

export const WeddingClientPage: React.FC<ClientPageProps> = ({ initialWedding, slug }) => {
  const [wedding, setWedding] = useState<Wedding>(initialWedding);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadLatest = async () => {
      const latest = await weddingRepository.getBySlug(slug);
      if (latest) {
        setWedding(latest);
      }
    };
    loadLatest();
  }, [slug]);

  const handleRSVPSubmit = async (rsvpData: Omit<RSVPItem, 'id' | 'created_at'>) => {
    const newRSVP = await submitRSVP(weddingRepository, slug, rsvpData);
    if (newRSVP) {
      setWedding((prev) => ({
        ...prev,
        rsvps: [newRSVP, ...(prev.rsvps || [])],
      }));
    }
  };

  const handleWishSubmit = async (wishData: Omit<WishItem, 'id' | 'created_at'>) => {
    const newWish = await submitWish(weddingRepository, slug, wishData);
    if (newWish) {
      setWedding((prev) => ({
        ...prev,
        wishes: [newWish, ...(prev.wishes || [])],
      }));
    }
  };

  const sections = getVisibleSections(wedding);

  return (
    <LanguageProvider>
      <ThemeProvider theme={wedding.theme}>
        <EnvelopeModal wedding={wedding} onOpen={() => setIsOpen(true)} />
        <WeddingTemplateDispatcher 
          wedding={wedding} 
          sections={sections} 
          onRSVPSubmit={handleRSVPSubmit}
          onWishSubmit={handleWishSubmit}
        />
        {isOpen && <AudioPlayer />}
      </ThemeProvider>
    </LanguageProvider>
  );
};
