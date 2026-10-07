"use client";

import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Wedding } from "@/domain/entities/wedding";
import { VisibleSections } from "@/use-cases/get-visible-sections";
import { RSVPItem } from "@/domain/entities/rsvp";
import { WishItem } from "@/domain/entities/wish";

import WelcomeOverlay from "@/components/wedding/WelcomeOverlay";
import NavBar from "@/components/wedding/NavBar";
import HeroSection from "@/components/wedding/HeroSection";
import KhmerTraditionalDivider from "@/components/wedding/KhmerTraditionalDivider";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import IntroductionSection from "@/components/wedding/IntroductionSection";
import LoveStorySection from "@/components/wedding/LoveStorySection";
import PreWeddingGallery from "@/components/wedding/PreWeddingGallery";
import EventsSection from "@/components/wedding/EventsSection";
import DressCodeSection from "@/components/wedding/DressCodeSection";
import LocationSection from "@/components/wedding/LocationSection";
import ContactSection from "@/components/wedding/ContactSection";
import GiftSection from "@/components/wedding/GiftSection";
import Footer from "@/components/wedding/Footer";
import { AudioPlayer } from "@/presentation/components/audio/audio-player";
import {
  LanguageProvider,
  useLanguage,
} from "@/components/wedding/LanguageContext";
import { KhmerRomanticStyles } from "./khmer-romantic-styles";

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

  const [guestName, setGuestName] = useState<string | null>(null);
  const [guestPrefix, setGuestPrefix] = useState<string | null>(null);
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
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    const prefix = params.get("prefix") || params.get("title");
    if (prefix) {
      setGuestPrefix(decodeURIComponent(prefix));
    }
    if (to) {
      setGuestName(decodeURIComponent(to));
      const storageKey = `welcome_overlay_closed_${wedding?.slug || "khmer-romantic"}_${to}`;
      try {
        const isClosed =
          sessionStorage.getItem(storageKey) === "true" ||
          localStorage.getItem(storageKey) === "true";
        if (!isClosed) {
          setShowOverlay(true);
        }
      } catch {
        setShowOverlay(true);
      }
    }

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
  }, [wedding?.slug]);

  const handleOpenInvitation = () => {
    setShowOverlay(false);
    const params = new URLSearchParams(window.location.search);
    const to = params.get("to");
    if (to) {
      const storageKey = `welcome_overlay_closed_${wedding?.slug || "khmer-romantic"}_${to}`;
      try {
        sessionStorage.setItem(storageKey, "true");
        localStorage.setItem(storageKey, "true");
      } catch {
        // Storage access blocked or restricted
      }
    }
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-[#FDFBF7] flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <Heart className="w-12 h-12 text-[#8B0000]" />
          <p
            className={`text-[#D4AF37] text-sm ${
              language === "kh"
                ? "font-khmer-kantumruuy"
                : "font-serif tracking-widest uppercase"
            }`}
          >
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
        storageKey={guestName ? `welcome_overlay_closed_${wedding?.slug || "khmer-romantic"}_${guestName}` : undefined}
        guestPrefix={guestPrefix}
      />

      <NavBar scrolled={scrolled} />
      <HeroSection />
      <KhmerTraditionalDivider />
      <CountdownTimer />
      <IntroductionSection />
      <LoveStorySection />
      <PreWeddingGallery gallery={wedding?.gallery} />
      <EventsSection />
      <DressCodeSection />
      <LocationSection />
      <ContactSection 
        phone1={wedding?.contact_info?.phone1}
        phone2={wedding?.contact_info?.phone2}
        phone3={wedding?.contact_info?.phone3}
      />
      <GiftSection
        bankName={wedding?.gift_info?.bank_name}
        accountName={wedding?.gift_info?.account_name}
        accountNumber={wedding?.gift_info?.account_number}
        qrCodeUrl={wedding?.gift_info?.qr_code_url}
      />
      <Footer />
      <AudioPlayer autoPlay={false} />
      <KhmerRomanticStyles />
    </div>
  );
}
