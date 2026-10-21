const KHMER_DIGITS = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

export function toKhmerDigits(value: string | number): string {
  return String(value).replace(/\d/g, (digit) => KHMER_DIGITS[Number(digit)]);
}

export function formatKhmerDate(dateStr: string): string {
  if (!dateStr) return '';
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;

    const khmerMonths = [
      'មករា',
      'កុម្ភៈ',
      'មីនា',
      'មេសា',
      'ឧសភា',
      'មិថុនា',
      'កក្កដា',
      'សីហា',
      'កញ្ញា',
      'តុលា',
      'វិច្ឆិកា',
      'ធ្នូ',
    ];

    const dayStr = toKhmerDigits(String(d.getDate()).padStart(2, '0'));
    const monthStr = khmerMonths[d.getMonth()] || '';
    const yearStr = toKhmerDigits(d.getFullYear());

    return `ថ្ងៃទី ${dayStr} ខែ ${monthStr} ឆ្នាំ ${yearStr}`;
  } catch {
    return dateStr;
  }
}
