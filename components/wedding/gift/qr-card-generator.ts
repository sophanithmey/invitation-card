'use client';

import { loadSvgImage, loadImage, downloadBlob } from './qr-card-helpers';
export { downloadBlob } from './qr-card-helpers';

export interface QrCardData {
  svgElement: SVGSVGElement;
  accountName?: string;
  bankName?: string;
  accountNumber?: string;
  secondaryAccountNumber?: string;
  coupleNames?: string;
  iconUrl?: string;
  language?: string;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

/**
 * Generates an elegant, high-resolution commemorative QR Gift Card Blob (PNG).
 * Contains Header, Couple Names, KHQR QR code box, Account Details (USD & KHR), and Gratitude.
 */
export async function generateQrCardBlob(data: QrCardData): Promise<Blob | null> {
  if (typeof window === 'undefined') return null;

  try {
    const qrImg = await loadSvgImage(data.svgElement);
    const canvas = document.createElement('canvas');
    const width = 800;
    const height = 1120;
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Outer Background
    const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
    bgGradient.addColorStop(0, '#FFFDF9');
    bgGradient.addColorStop(1, '#FAF5EB');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, width, height);

    // Luxury Gold Borders
    drawRoundedRect(ctx, 24, 24, width - 48, height - 48, 28);
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 3;
    ctx.stroke();

    drawRoundedRect(ctx, 38, 38, width - 76, height - 76, 20);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Header: Tagline & Couple Names
    ctx.textAlign = 'center';
    ctx.font = 'bold 16px "Kantumruuy Pro", "Noto Sans Khmer", sans-serif';
    ctx.fillStyle = '#C98C08';
    ctx.fillText('✦ ចំណងដៃអាពាហ៍ពិពាហ៍ • WEDDING GIFT ✦', width / 2, 85);

    ctx.font = 'bold 36px "Kantumruuy Pro", "Noto Sans Khmer", serif';
    ctx.fillStyle = '#7A1624';
    ctx.fillText(data.coupleNames || 'សុភាព & ច័ន្ទវដ្តី', width / 2, 140);

    ctx.font = '500 15px "Playfair Display", serif';
    ctx.fillStyle = '#8F6608';
    ctx.fillText('Scan with any Mobile Banking App (KHQR)', width / 2, 175);

    // Gold Divider
    ctx.beginPath();
    ctx.moveTo(width / 2 - 120, 195);
    ctx.lineTo(width / 2 + 120, 195);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // QR Box Container
    const qrBoxSize = 440;
    const qrBoxX = (width - qrBoxSize) / 2;
    const qrBoxY = 225;

    ctx.save();
    ctx.shadowColor = 'rgba(122, 22, 36, 0.08)';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetY = 6;
    drawRoundedRect(ctx, qrBoxX, qrBoxY, qrBoxSize, qrBoxSize, 22);
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.restore();

    drawRoundedRect(ctx, qrBoxX, qrBoxY, qrBoxSize, qrBoxSize, 22);
    ctx.strokeStyle = '#EBC070';
    ctx.lineWidth = 2;
    ctx.stroke();

    const qrImageSize = 370;
    const qrImageX = (width - qrImageSize) / 2;
    const qrImageY = qrBoxY + (qrBoxSize - qrImageSize) / 2;
    ctx.drawImage(qrImg, qrImageX, qrImageY, qrImageSize, qrImageSize);

    // Center QR Icon
    const iconSrc =
      data.iconUrl ||
      data.svgElement.querySelector('image')?.getAttribute('href') ||
      data.svgElement.querySelector('image')?.getAttribute('xlink:href') ||
      '/vadey/couple.svg';

    if (iconSrc) {
      const iconImg = await loadImage(iconSrc);
      if (iconImg) {
        const iconSize = 72;
        const iconX = (width - iconSize) / 2;
        const iconY = qrImageY + (qrImageSize - iconSize) / 2;
        const pad = 4;
        drawRoundedRect(ctx, iconX - pad, iconY - pad, iconSize + pad * 2, iconSize + pad * 2, 12);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();
        ctx.strokeStyle = '#D4AF37';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.drawImage(iconImg, iconX, iconY, iconSize, iconSize);
      }
    }

    // Bank Badge
    const badgeText = data.bankName || 'ABA Bank';
    ctx.font = 'bold 15px "Kantumruuy Pro", sans-serif';
    const badgeWidth = Math.max(160, ctx.measureText(badgeText).width + 36);
    drawRoundedRect(ctx, (width - badgeWidth) / 2, 705, badgeWidth, 34, 17);
    ctx.fillStyle = 'rgba(212, 175, 55, 0.15)';
    ctx.fill();
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.fillStyle = '#8B0000';
    ctx.fillText(badgeText, width / 2, 727);

    // Account Name
    ctx.font = 'bold 30px "Kantumruuy Pro", "Noto Sans Khmer", sans-serif';
    ctx.fillStyle = '#7A1624';
    ctx.fillText(data.accountName || 'CHANVADEY TIN', width / 2, 785);

    // Account Numbers (USD & KHR)
    if (data.accountNumber && data.secondaryAccountNumber) {
      ctx.font = 'bold 20px monospace';
      ctx.fillStyle = '#4A351C';
      ctx.fillText(`USD: ${data.accountNumber}  •  KHR: ${data.secondaryAccountNumber}`, width / 2, 825);
    } else if (data.accountNumber) {
      ctx.font = 'bold 24px monospace';
      ctx.fillStyle = '#4A351C';
      ctx.fillText(data.accountNumber, width / 2, 825);
    }

    ctx.font = '500 15px "Kantumruuy Pro", "Noto Sans Khmer", sans-serif';
    ctx.fillStyle = '#8F6608';
    ctx.fillText('ស្កេនជាមួយគ្រប់កម្មវិធីធនាគារ (Bakong / KHQR)', width / 2, 868);

    // Bottom Gratitude Note
    ctx.beginPath();
    ctx.moveTo(width / 2 - 160, 915);
    ctx.lineTo(width / 2 + 160, 915);
    ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.font = 'italic 15px "Kantumruuy Pro", "Noto Sans Khmer", sans-serif';
    ctx.fillStyle = '#5A3E1B';
    ctx.fillText('«សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅបំផុត ចំពោះវត្តមាន និងពរជ័យ!»', width / 2, 955);

    ctx.font = '13px "Playfair Display", serif';
    ctx.fillStyle = 'rgba(143, 102, 8, 0.7)';
    ctx.fillText('With Love & Sincere Gratitude', width / 2, 985);

    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), 'image/png');
    });
  } catch (err) {
    console.error('Failed to generate designed QR card blob', err);
    return null;
  }
}
