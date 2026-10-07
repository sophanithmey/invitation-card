import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Safely copy text to clipboard with modern API and reliable fallback
 * Prevents "Document is not focused" unhandled rejection errors
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === "undefined") return false;

  // 1. Try modern navigator.clipboard API
  if (navigator?.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fall through to textarea fallback
    }
  }

  // 2. Fallback: temporary hidden textarea with execCommand
  try {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.setAttribute("readonly", "");
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    textArea.style.top = "0";
    textArea.style.opacity = "0";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand("copy");
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.warn("copyToClipboard fallback failed:", err);
    return false;
  }
}

export const KHMER_DIGITS = ["០", "១", "២", "៣", "៤", "៥", "៦", "៧", "៨", "៩"] as const;

/**
 * Converts any string or number containing Arabic digits (0-9) to Khmer digits (០-៩)
 */
export function toKhmerDigits(value: number | string): string {
  return String(value).replace(/\d/g, (digit) => KHMER_DIGITS[parseInt(digit, 10)] ?? digit);
}
