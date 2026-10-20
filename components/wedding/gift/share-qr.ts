'use client';

import { generateQrCardBlob, QrCardData } from './qr-card-generator';

export interface ShareQrOptions extends QrCardData {
  onFallbackDownload?: () => void;
}

/**
 * Shares the designed QR gift card via native Web Share API (PNG File),
 * or triggers fallback download when file sharing is unsupported.
 */
export async function shareQrImage({
  svgElement,
  accountName = 'wedding',
  bankName,
  accountNumber,
  secondaryAccountNumber,
  coupleNames,
  iconUrl,
  language,
  onFallbackDownload,
}: ShareQrOptions): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  const cleanName = (accountName || 'wedding')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-');
  const title = `${accountName || 'Wedding'} KHQR`;

  try {
    let file: File | null = null;

    // 1. Generate designed commemorative gift card PNG
    const cardBlob = await generateQrCardBlob({
      svgElement,
      accountName,
      bankName,
      accountNumber,
      secondaryAccountNumber,
      coupleNames,
      iconUrl,
      language,
    });

    if (cardBlob) {
      file = new File([cardBlob], `${cleanName}-qr-card.png`, {
        type: 'image/png',
      });
    }

    // 2. Fallback to raw SVG File if card generation fails
    if (!file) {
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], {
        type: 'image/svg+xml;charset=utf-8',
      });
      file = new File([svgBlob], `${cleanName}-qr.svg`, {
        type: 'image/svg+xml',
      });
    }

    // 3. Native File Sharing
    if (
      file &&
      navigator?.canShare &&
      navigator.canShare({ files: [file] }) &&
      navigator.share
    ) {
      await navigator.share({
        files: [file],
        title,
      });
      return true;
    }
  } catch (err: unknown) {
    if ((err as Error)?.name === 'AbortError') {
      return false; // User dismissed share sheet
    }
  }

  // 4. Fallback: Trigger download if Web Share API files is not supported
  if (onFallbackDownload) {
    onFallbackDownload();
  }
  return false;
}
