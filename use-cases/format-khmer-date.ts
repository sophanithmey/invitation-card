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

    const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];

    const dayNum = d.getDate();
    const dayStr = String(dayNum)
      .padStart(2, '0')
      .split('')
      .map((ch) => khmerDigits[parseInt(ch, 10)] || ch)
      .join('');

    const monthStr = khmerMonths[d.getMonth()] || '';

    const yearStr = String(d.getFullYear())
      .split('')
      .map((ch) => khmerDigits[parseInt(ch, 10)] || ch)
      .join('');

    return `ថ្ងៃទី ${dayStr} ខែ ${monthStr} ឆ្នាំ ${yearStr}`;
  } catch {
    return dateStr;
  }
}
