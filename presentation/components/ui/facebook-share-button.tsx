'use client';

import React, { useEffect, useState } from 'react';
import {
  FacebookShareButton as ReactShareFacebookButton,
  canNativeShare,
  shareNative,
} from 'react-share';
import { Facebook } from 'lucide-react';
import { useLanguage } from '@/presentation/context/language-context';

export interface FacebookShareButtonProps {
  url?: string;
  quote?: string;
  hashtag?: string;
  title?: string;
  className?: string;
}

export const FacebookShareButton: React.FC<FacebookShareButtonProps> = ({
  url,
  quote,
  hashtag,
  title,
  className,
}) => {
  const { lang } = useLanguage();
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [shareUrl, setShareUrl] = useState<string>(url || '');
  const [isMobile, setIsMobile] = useState(false);
  const [supportsNativeShare, setSupportsNativeShare] = useState(false);

  useEffect(() => {
    // 1. Determine site URL for sharing
    const determineUrl = () => {
      if (url) return url;
      if (typeof window === 'undefined') return '';

      const current = window.location.href;
      const publicBase =
        process.env.NEXT_PUBLIC_SITE_URL ||
        (process.env.NEXT_PUBLIC_VERCEL_URL
          ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
          : '');

      // If running on localhost and a public site URL is configured, use the public domain
      // so Facebook scraper can fetch OpenGraph image and metadata
      if (
        publicBase &&
        (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
      ) {
        try {
          const parsedPublic = new URL(publicBase);
          const parsedCurrent = new URL(current);
          parsedCurrent.protocol = parsedPublic.protocol;
          parsedCurrent.host = parsedPublic.host;
          return parsedCurrent.toString();
        } catch {
          return current;
        }
      }
      return current;
    };

    setShareUrl(determineUrl());

    // 2. Check mobile environment
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    const isTouch = typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1;
    const isSmall = typeof window !== 'undefined' && window.innerWidth <= 768;
    const mobileDetected = mobileRegex.test(userAgent) || (isTouch && isSmall);
    setIsMobile(mobileDetected);

    // 3. Check native share support on mobile
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        setSupportsNativeShare(canNativeShare({ url: window.location.href }));
      } catch {
        setSupportsNativeShare(false);
      }
    }
  }, [url]);

  const effectiveUrl =
    shareUrl || (typeof window !== 'undefined' ? window.location.href : 'https://localhost');

  const shareTitle =
    title ||
    quote ||
    (typeof document !== 'undefined' ? document.title : 'Wedding Invitation');

  const isLocalhost =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') &&
    !process.env.NEXT_PUBLIC_SITE_URL &&
    !process.env.NEXT_PUBLIC_VERCEL_URL;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleShare = async (e?: React.MouseEvent) => {
    if (isLocalhost) {
      showToast(
        lang === 'kh'
          ? 'ចែករំលែកលើ Facebook (localhost មិនបង្ហាញរូបភាពទេ)'
          : 'Sharing to Facebook (localhost cannot preview card)',
      );
    } else {
      showToast(lang === 'kh' ? 'ចែករំលែកលើ Facebook' : 'Sharing to Facebook');
    }

    // On mobile devices with Web Share API:
    // Open native OS share sheet (lets users share directly to installed Facebook App)
    if (isMobile && supportsNativeShare) {
      if (e) {
        e.preventDefault();
      }
      try {
        await shareNative({
          url: effectiveUrl,
          title: shareTitle,
          text: shareTitle,
        });
        return;
      } catch {
        // Fallback to Facebook web sharer if user cancelled or error occurred
      }
    }

    // On PC or mobile fallback without native share:
    // Open Facebook sharer dialog with quote pre-filled
    const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      effectiveUrl,
    )}${hashtag ? `&hashtag=${encodeURIComponent(hashtag)}` : ''}${
      shareTitle ? `&quote=${encodeURIComponent(shareTitle)}` : ''
    }`;

    if (isMobile) {
      window.open(fbUrl, '_blank');
    } else {
      const width = 620;
      const height = 580;
      const left = Math.max(0, (window.screen.width - width) / 2);
      const top = Math.max(0, (window.screen.height - height) / 2);
      const popup = window.open(
        fbUrl,
        'fb-share-dialog',
        `width=${width},height=${height},top=${top},left=${left},toolbar=0,location=0,menubar=0,status=0`,
      );
      if (!popup) {
        window.open(fbUrl, '_blank');
      }
    }
  };

  const labelText = lang === 'kh' ? 'ចែករំលែកទៅកាន់ Facebook' : 'Share to Facebook';

  return (
    <div className={className || 'fixed bottom-24 right-6 z-40 flex items-center'}>
      {toastMessage && (
        <span className='absolute right-14 whitespace-nowrap px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md text-[#FFF2B2] text-xs font-medium border border-[#D4AF37]/50 shadow-lg pointer-events-none'>
          {toastMessage}
        </span>
      )}
      <ReactShareFacebookButton
        url={effectiveUrl}
        hashtag={hashtag}
        openInNewTab={isMobile}
        resetButtonStyle={false}
        openShareDialogOnClick={false}
        onClick={handleShare}
        aria-label={labelText}
        htmlTitle={labelText}
        className='group relative w-12 h-12 rounded-full bg-(--primary-color,#7A1624) text-(--secondary-color,#D4AF37) border-2 border-(--secondary-color,#D4AF37) shadow-[0_4px_15px_rgba(0,0,0,0.25)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-[0_6px_20px_rgba(212,175,55,0.4)]'
      >
        <Facebook className='w-5 h-5 fill-current text-(--secondary-color,#D4AF37) transition-transform duration-300 group-hover:scale-110' />
      </ReactShareFacebookButton>
    </div>
  );
};
