import { formatKhmerDate, toKhmerDigits } from './format-khmer-date';

export type DateLocale = 'kh' | 'en';

export interface WeddingDateParts {
  weekday: string;
  date: string;
  time: string;
}

const WEDDING_TIME_ZONE = 'Asia/Phnom_Penh';

const KHMER_WEEKDAYS: Record<string, string> = {
  Sun: 'ថ្ងៃអាទិត្យ',
  Mon: 'ថ្ងៃច័ន្ទ',
  Tue: 'ថ្ងៃអង្គារ',
  Wed: 'ថ្ងៃពុធ',
  Thu: 'ថ្ងៃព្រហស្បតិ៍',
  Fri: 'ថ្ងៃសុក្រ',
  Sat: 'ថ្ងៃសៅរ៍',
};

function getPart(parts: Intl.DateTimeFormatPart[], type: Intl.DateTimeFormatPartTypes): string {
  return parts.find((part) => part.type === type)?.value ?? '';
}

export function formatWeddingDateParts(isoDate: string, locale: DateLocale): WeddingDateParts {
  const date = new Date(isoDate);
  if (isNaN(date.getTime())) return { weekday: '', date: isoDate, time: '' };

  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: WEDDING_TIME_ZONE,
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).formatToParts(date);

  const weekdayShort = getPart(parts, 'weekday');
  const hour = getPart(parts, 'hour');
  const minute = getPart(parts, 'minute');
  const period = getPart(parts, 'dayPeriod').toUpperCase();

  if (locale === 'kh') {
    const khPeriod = period === 'AM' ? 'ព្រឹក' : 'ល្ងាច';
    return {
      weekday: KHMER_WEEKDAYS[weekdayShort] ?? '',
      date: formatKhmerDate(isoDate),
      time: `ម៉ោង ${toKhmerDigits(`${hour}:${minute}`)} ${khPeriod}`,
    };
  }

  const weekdayLong = new Intl.DateTimeFormat('en-GB', {
    timeZone: WEDDING_TIME_ZONE,
    weekday: 'long',
  }).format(date);

  return {
    weekday: weekdayLong,
    date: `${getPart(parts, 'day')} ${getPart(parts, 'month')} ${getPart(parts, 'year')}`,
    time: `${hour}:${minute} ${period}`,
  };
}
