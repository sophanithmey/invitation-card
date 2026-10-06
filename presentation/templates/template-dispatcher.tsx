'use client';

import React from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { VisibleSections } from '@/use-cases/get-visible-sections';
import { KhmerLuxuryTemplate } from './khmer-luxury';
import { KhmerClassicTemplate } from './khmer-classic';
import { KhmerModernTemplate } from './khmer-modern';
import { KhmerFloralTemplate } from './khmer-floral';
import { KhmerEtheapTemplate } from './khmer-etheap';
import { RSVPItem } from '@/domain/entities/rsvp';
import { WishItem } from '@/domain/entities/wish';
import { LanguageProvider } from '@/presentation/context/language-context';
import { LanguageSwitcher } from '@/presentation/components/ui/language-switcher';
import { ScrollToTop } from '../components/ui/scroll-to-top';

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
      case 'khmer-classic':
        return <KhmerClassicTemplate {...props} />;
      case 'khmer-modern':
        return <KhmerModernTemplate {...props} />;
      case 'khmer-floral':
        return <KhmerFloralTemplate {...props} />;
      case 'khmer-etheap':
        return <KhmerEtheapTemplate {...props} />;
      case 'khmer-luxury':
      default:
        return <KhmerLuxuryTemplate {...props} />;
    }
  };

  return (
    <LanguageProvider>
      <LanguageSwitcher />
       <ScrollToTop />
      {renderTemplate()}
    </LanguageProvider>
  );
};
