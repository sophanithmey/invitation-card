export interface BilingualLabel {
  kh: string;
  en: string;
}

/** Splits seed labels written as "ខ្មែរ (English)" into their two languages. */
export function splitBilingualLabel(label: string): BilingualLabel {
  const match = label.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (!match) return { kh: label, en: label };
  return { kh: match[1].trim(), en: match[2].trim() };
}
