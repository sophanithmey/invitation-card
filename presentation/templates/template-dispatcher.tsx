'use client';

import React from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { VisibleSections } from '@/use-cases/get-visible-sections';
import { KhmerLuxuryTemplate } from './khmer-luxury';
import { KhmerEtheapTemplate } from './khmer-etheap';
import { KhmerRomanticTemplate } from './khmer-romantic';
import { EuropeanVillaTemplate } from './european-villa';
import { KhmerTraditionalTemplate } from './khmer-traditional';
import { CelestialDreamTemplate } from './celestial-dream';
import { RSVPItem } from '@/domain/entities/rsvp';
import { WishItem } from '@/domain/entities/wish';
import { LanguageProvider } from '@/presentation/context/language-context';
import { LanguageSwitcher } from '@/presentation/components/ui/language-switcher';
import { ScrollToTop } from '../components/ui/scroll-to-top';
// import { FacebookShareButton } from '../components/ui/facebook-share-button';

interface DispatcherProps {
  wedding: Wedding;
  sections: VisibleSections;
  onRSVPSubmit: (rsvp: Omit<RSVPItem, 'id' | 'created_at'>) => Promise<void>;
  onWishSubmit: (wish: Omit<WishItem, 'id' | 'created_at'>) => Promise<void>;
}

export const WeddingTemplateDispatcher: React.FC<DispatcherProps> = (props) => {
  const { template_id } = props.wedding;

  const renderTemplate = () => {
    switch (template_id) {
      case 'khmer-etheap':
        return <KhmerEtheapTemplate {...props} />;
      case 'khmer-romantic':
        return <KhmerRomanticTemplate {...props} />;
      case 'european-villa':
        return <EuropeanVillaTemplate wedding={props.wedding} />;
      case 'khmer-traditional':
        return <KhmerTraditionalTemplate wedding={props.wedding} />;
      case 'celestial-dream':
        return <CelestialDreamTemplate {...props} />;
      case 'khmer-luxury':
      default:
        return <KhmerLuxuryTemplate {...props} />;
    }
  };

  return (
    <LanguageProvider>
      {template_id !== 'khmer-romantic' && <LanguageSwitcher />}
      <ScrollToTop />
      {/* <FacebookShareButton /> */}
      {renderTemplate()}
    </LanguageProvider>
  );
};
