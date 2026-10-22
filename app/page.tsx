import React from 'react';
import { Navbar } from './_components/navbar';
import { HeroSection } from './_components/hero-section';
import { HowItWorksSection } from './_components/how-it-works-section';
import { TemplateShowcase } from './_components/template-showcase';
import { BentoFeatures } from './_components/bento-features';
import { FAQSection } from './_components/faq-section';
import { CtaBanner } from './_components/cta-banner';
import { PlatformFooter } from './_components/platform-footer';

export default function PlatformHomePage() {
  return (
    <main className='min-h-screen bg-[#FDFBF7] text-[#2C1810] font-khmer selection:bg-[#D4AF37]/30 overflow-x-hidden'>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <TemplateShowcase />
      <BentoFeatures />
      <FAQSection />
      <CtaBanner />
      <PlatformFooter />
    </main>
  );
}
