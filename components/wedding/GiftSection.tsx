'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageContext';
import { copyToClipboard } from '@/lib/utils';
import { GratitudeCard } from './gift/GratitudeCard';
import { BankQrCard } from './gift/BankQrCard';
import { GiftHeader } from './gift/GiftHeader';
import { shareQrImage } from './gift/share-qr';
import { generateQrCardBlob, downloadBlob } from './gift/qr-card-generator';

export interface GiftSectionProps {
  /** Bank institution name */
  bankName?: string;
  /** Account holder name */
  accountName?: string;
  /** Primary account number (USD) */
  accountNumber?: string;
  /** Secondary account number (KHR) */
  secondaryAccountNumber?: string;
  /** KHQR payload or QR image URL */
  qrCodeUrl?: string;
  /** QR center icon URL (e.g. /vadey/couple.svg) */
  qrIconUrl?: string;
}

export default function GiftSection({
  bankName,
  accountName,
  accountNumber,
  secondaryAccountNumber,
  qrCodeUrl,
  qrIconUrl = '/vadey/couple.svg',
}: GiftSectionProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);

  const displayBank = bankName;
  const displayAccountName = accountName;
  const displayAccountNumber = accountNumber || '';
  const displaySecondaryAccountNumber = secondaryAccountNumber || '600 566 363';
  const displayQrCode = qrCodeUrl;
  const displayQrIcon = qrIconUrl || '/vadey/couple.svg';

  const handleCopy = async (targetNum?: string) => {
    const numToCopy = targetNum || displayAccountNumber;
    await copyToClipboard(numToCopy.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = async () => {
    const svg = document.querySelector(
      '#wedding-qr-code, #wedding-qr-container svg, .group\\/qr svg',
    ) as SVGSVGElement | null;

    if (svg) {
      const shared = await shareQrImage({
        svgElement: svg,
        accountName: displayAccountName,
        bankName: displayBank,
        accountNumber: displayAccountNumber,
        secondaryAccountNumber: displaySecondaryAccountNumber,
        coupleNames:
          language === 'kh' ? 'សុភាព & ច័ន្ទវដ្តី' : 'Sopheap & Chanvadey',
        iconUrl: displayQrIcon,
        language,
        onFallbackDownload: handleDownloadQr,
      });
      if (shared) {
        setSharedToast(true);
        setTimeout(() => setSharedToast(false), 3000);
      }
      return;
    }

    handleDownloadQr();
  };

  const handleDownloadQr = async () => {
    const svg = document.querySelector(
      '#wedding-qr-code, #wedding-qr-container svg, .group\\/qr svg',
    ) as SVGSVGElement | null;

    if (!svg) {
      if (displayQrCode) window.open(displayQrCode, '_blank');
      return;
    }

    const cleanName = (displayAccountName || 'wedding')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-');

    const blob = await generateQrCardBlob({
      svgElement: svg,
      accountName: displayAccountName,
      bankName: displayBank,
      accountNumber: displayAccountNumber,
      secondaryAccountNumber: displaySecondaryAccountNumber,
      coupleNames:
        language === 'kh' ? 'សុភាព & ច័ន្ទវដ្តី' : 'Sopheap & Chanvadey',
      iconUrl: displayQrIcon,
      language,
    });

    if (blob) {
      downloadBlob(blob, `${cleanName}-qr-card.png`);
      return;
    }

    const svgBlob = new Blob([new XMLSerializer().serializeToString(svg)], {
      type: 'image/svg+xml;charset=utf-8',
    });
    downloadBlob(svgBlob, `${cleanName}-qr.svg`);
  };

  return (
    <section className='py-24 px-4 relative overflow-hidden bg-[#FDFBF7]'>
      <div className='absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl pointer-events-none' />
      <div className='absolute bottom-1/3 right-1/4 translate-y-1/2 w-96 h-96 bg-[#8B0000]/6 rounded-full blur-3xl pointer-events-none' />

      <div className='absolute inset-0 opacity-5 pointer-events-none'>
        <img
          src='/khmer-texture.png'
          className='w-full h-full object-cover'
          alt='texture'
        />
      </div>

      <div className='max-w-5xl mx-auto relative z-10 text-center'>
        <GiftHeader />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch'>
          <GratitudeCard />
          <BankQrCard
            displayBank={displayBank ?? ''}
            displayAccountName={displayAccountName ?? ''}
            displayAccountNumber={displayAccountNumber ?? ''}
            secondaryAccountNumber={displaySecondaryAccountNumber}
            displayQrCode={displayQrCode ?? ''}
            qrIconUrl={displayQrIcon}
            copied={copied}
            sharedToast={sharedToast}
            onCopy={handleCopy}
            onShare={handleShare}
            onDownloadQr={handleDownloadQr}
          />
        </div>
      </div>
    </section>
  );
}
