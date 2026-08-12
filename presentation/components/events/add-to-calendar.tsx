'use client';

import React from 'react';
import { CalendarPlus } from 'lucide-react';
import { useLanguage } from '@/presentation/context/language-context';

interface AddToCalendarProps {
  title: string;
  startDate: string; // ISO String
  description?: string;
  location?: string;
}

export const AddToCalendar: React.FC<AddToCalendarProps> = ({ title, startDate, description, location }) => {
  const { t } = useLanguage();

  const handleGoogleCalendar = () => {
    try {
      const start = new Date(startDate);
      // Create an end date 2 hours later
      const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
      
      const formatTime = (date: Date) => {
        return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
      };

      const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: title,
        dates: `${formatTime(start)}/${formatTime(end)}`,
        details: description || '',
        location: location || '',
      });

      const url = `https://calendar.google.com/calendar/render?${params.toString()}`;
      window.open(url, '_blank');
    } catch (e) {
      console.error('Invalid date string provided for calendar generation', e);
    }
  };

  return (
    <button
      onClick={handleGoogleCalendar}
      className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all text-sm font-medium"
    >
      <CalendarPlus className="w-4 h-4" />
      <span>{t('add_to_calendar')}</span>
    </button>
  );
};
