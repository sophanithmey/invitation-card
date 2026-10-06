'use client';

import React, { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from './LanguageContext';
import { KhmerCornerOrnament } from './welcome/KhmerCornerOrnament';
import { GuestInvitationCard } from './welcome/GuestInvitationCard';
import { WelcomeOpenButton } from './welcome/WelcomeOpenButton';

interface WelcomeOverlayProps {
  guestName: string | null;
  showOverlay: boolean;
  onOpen: () => void;
  storageKey?: string;
  guestPrefix?: string | null;
}

export default function WelcomeOverlay({
  guestName,
  showOverlay,
  onOpen,
  storageKey,
  guestPrefix,
}: WelcomeOverlayProps) {
  const { language } = useLanguage();
  const [isDismissed, setIsDismissed] = React.useState(false);

  const persistenceKey = useMemo(
    () => storageKey || (guestName ? `welcome_overlay_closed_${guestName}` : null),
    [storageKey, guestName],
  );

  React.useEffect(() => {
    if (!persistenceKey) return;
    try {
      const closed =
        sessionStorage.getItem(persistenceKey) === 'true' ||
        localStorage.getItem(persistenceKey) === 'true';
      if (closed) {
        setIsDismissed(true);
      }
    } catch {
      // Storage access blocked or restricted
    }
  }, [persistenceKey]);

  const handleOpen = () => {
    setIsDismissed(true);
    if (persistenceKey) {
      try {
        sessionStorage.setItem(persistenceKey, 'true');
        localStorage.setItem(persistenceKey, 'true');
      } catch {
        // Storage access blocked or restricted
      }
    }
    onOpen();
  };

  const isKhmerGuest = useMemo(() => {
    if (!guestName) return language === 'kh';
    return /[\u1780-\u17FF]/.test(guestName) || language === 'kh';
  }, [guestName, language]);

  return (
    <AnimatePresence>
      {showOverlay && !isDismissed && guestName && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className='fixed inset-0 z-100 bg-[#FAF7F2]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto kbac-bg-pattern'
          role='dialog'
          aria-modal='true'
          aria-label='Wedding Invitation Welcome'
        >
          <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-linear-to-br from-[#D4AF37]/15 to-[#8B0000]/10 blur-3xl pointer-events-none' />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className='relative w-full max-w-lg my-auto bg-linear-to-b from-[#FFFFFF] via-[#FFFDF9] to-[#FAF5EC] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border-2 border-[#D4AF37]/60 shadow-[0_20px_50px_rgba(139,0,0,0.12),0_4px_20px_rgba(212,175,55,0.15)] text-center overflow-hidden'
          >
            <div className='absolute top-2.5 left-2.5 opacity-70 hover:opacity-100 transition-opacity'>
              <KhmerCornerOrnament />
            </div>
            <div className='absolute top-2.5 right-2.5 opacity-70 hover:opacity-100 transition-opacity rotate-90'>
              <KhmerCornerOrnament />
            </div>
            <div className='absolute bottom-2.5 left-2.5 opacity-70 hover:opacity-100 transition-opacity -rotate-90'>
              <KhmerCornerOrnament />
            </div>
            <div className='absolute bottom-2.5 right-2.5 opacity-70 hover:opacity-100 transition-opacity rotate-180'>
              <KhmerCornerOrnament />
            </div>

            <div className='absolute inset-3 sm:inset-4.5 border border-[#D4AF37]/30 rounded-xl sm:rounded-2xl pointer-events-none' />

            <div className='relative z-10 space-y-4 sm:space-y-5'>
              <GuestInvitationCard
                guestName={guestName}
                isKhmerGuest={isKhmerGuest}
                prefix={guestPrefix}
              />
              <WelcomeOpenButton onOpen={handleOpen} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
