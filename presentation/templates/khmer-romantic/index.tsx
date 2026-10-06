"use client";

import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Wedding } from "@/domain/entities/wedding";
import { VisibleSections } from "@/use-cases/get-visible-sections";
import { RSVPItem } from "@/domain/entities/rsvp";
import { WishItem } from "@/domain/entities/wish";

// Import Components
import WelcomeOverlay from "@/components/wedding/WelcomeOverlay";
import NavBar from "@/components/wedding/NavBar";
import HeroSection from "@/components/wedding/HeroSection";
import KhmerTraditionalDivider from "@/components/wedding/KhmerTraditionalDivider";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import IntroductionSection from "@/components/wedding/IntroductionSection";
import LoveStorySection from "@/components/wedding/LoveStorySection";
import PreWeddingGallery from "@/components/wedding/PreWeddingGallery";
import EventsSection from "@/components/wedding/EventsSection";
// import WeddingPartySection from "@/components/wedding/WeddingPartySection";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import LocationSection from "@/components/wedding/LocationSection";
import GiftSection from "@/components/wedding/GiftSection";
import Footer from "@/components/wedding/Footer";
import { AudioPlayer } from "@/presentation/components/audio/audio-player";
import {
  LanguageProvider,
  useLanguage,
} from "@/components/wedding/LanguageContext";

export interface TemplateProps {
  wedding?: Wedding;
  sections?: VisibleSections;
  onRSVPSubmit?: (rsvp: Omit<RSVPItem, "id" | "created_at">) => Promise<void>;
  onWishSubmit?: (wish: Omit<WishItem, "id" | "created_at">) => Promise<void>;
}

export default function WeddingInvitationPage(props?: TemplateProps) {
  return (
    <LanguageProvider>
      <WeddingInvitationContent {...props} />
    </LanguageProvider>
  );
}

export const KhmerRomanticTemplate: React.FC<TemplateProps> = (props) => {
  return (
    <LanguageProvider>
      <WeddingInvitationContent {...props} />
    </LanguageProvider>
  );
};

export function WeddingInvitationContent(props?: TemplateProps) {
  const { wedding } = props || {};
  const { t, language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Guest Personalization State
  const [guestName, setGuestName] = useState<string | null>(null);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showOverlay]);

  useEffect(() => {
    // Check for "to" parameter in URL
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) {
      setGuestName(decodeURIComponent(to));
      setShowOverlay(true);
    }

    // Simulate a brief loading to ensure fonts/styles are ready and prevent flash
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleOpenInvitation = () => {
    setShowOverlay(false);
    // Auto-play audio on interaction
    setAudioPlaying(true);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-[#FDFBF7] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <Heart className="w-12 h-12 text-[#8B0000]" />
          <p className="text-[#D4AF37] font-serif tracking-widest uppercase text-sm">
            {t.common.loading}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-[#FDFBF7] ${
        language === "kh" ? "font-khmer leading-relaxed" : "font-serif"
      } selection:bg-[#D4AF37]/30 overflow-x-hidden`}
    >
      <WelcomeOverlay
        guestName={guestName}
        showOverlay={showOverlay}
        onOpen={handleOpenInvitation}
      />

      <NavBar scrolled={scrolled} />

      <HeroSection />

      <KhmerTraditionalDivider />

      <CountdownTimer />

      <IntroductionSection />

      <LoveStorySection />

      <PreWeddingGallery gallery={wedding?.gallery} />

      <EventsSection />

      {/* <WeddingPartySection /> */}

      <DressCodeSection />

      <LocationSection />

      <GiftSection
        bankName={wedding?.gift_info?.bank_name}
        accountName={wedding?.gift_info?.account_name}
        accountNumber={wedding?.gift_info?.account_number}
        qrCodeUrl={wedding?.gift_info?.qr_code_url}
      />

      <Footer />

      <AudioPlayer autoPlay={audioPlaying} />

      {/* Google Fonts: Moulpali for Khmer language */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Moulpali&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Moulpali&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Suwannaphum:wght@100;300;400;700;900&display=swap");

        .font-khmer {
          line-height: 1.85;
          letter-spacing: 0.02em;
        }

        .font-khmer,
        .font-khmer *:not(.font-cursive):not([style*="Great Vibes"]) {
          font-family: "Moulpali", "Suwannaphum", cursive, serif;
        }

        .font-khmer p,
        .font-khmer li,
        .font-khmer blockquote {
          line-height: 1.9 !important;
        }

        .font-khmer h1:not([style*="Great Vibes"]),
        .font-khmer h2:not([style*="Great Vibes"]),
        .font-khmer h3:not([style*="Great Vibes"]),
        .font-khmer h4:not([style*="Great Vibes"]),
        .font-khmer .title,
        .font-khmer .font-serif,
        .font-khmer .font-playfair,
        .font-khmer .font-khmer-moul,
        .font-khmer-moul {
          font-family: "Moulpali", "Moul", cursive, serif !important;
          line-height: 1.7 !important;
          padding-top: 0.15em;
          padding-bottom: 0.15em;
          letter-spacing: 0.025em;
        }

        .font-khmer button,
        .font-khmer a {
          line-height: 1.6 !important;
        }

        .font-khmer .font-cursive,
        .font-khmer [style*="Great Vibes"] {
          font-family: "Great Vibes", cursive !important;
        }

        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
