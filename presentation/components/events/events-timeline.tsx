'use client';

import React from 'react';
import { Clock, MapPin, Sparkles } from 'lucide-react';
import { WeddingEvent } from '@/domain/entities/event';
import { useLanguage } from '@/presentation/context/language-context';
import { KhmerOrnament } from '../ornaments/khmer-ornament';
import { AddToCalendar } from './add-to-calendar';

interface EventsTimelineProps {
  events: WeddingEvent[];
}

export const EventsTimeline: React.FC<EventsTimelineProps> = ({ events }) => {
  const { lang } = useLanguage();
  if (!events || events.length === 0) return null;

  return (
    <section className="py-16 px-4 max-w-4xl mx-auto text-center relative">
      <h2 className="font-khmer-moul text-2xl md:text-3xl text-[#8B0000] mb-2 drop-shadow-sm">
        {lang === 'kh' ? 'តារាងកម្មវិធី' : 'Wedding Timeline'}
      </h2>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold mb-6">
        {lang === 'kh' ? 'កម្មវិធីសិរីមង្គល' : 'Wedding Schedule & Events'}
      </p>
      <KhmerOrnament variant="divider" />

      {/* Vertical Timeline Path */}
      <div className="absolute left-1/2 top-48 bottom-10 w-0.5 bg-linear-to-b from-[#D4AF37]/50 via-[#D4AF37]/20 to-transparent -translate-x-1/2 hidden md:block" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 my-12 text-left relative z-10">
        {events.map((event, idx) => (
          <div
            key={event.id || idx}
            className={`group p-8 rounded-3xl glass-panel transition-all duration-700 ease-out hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] hover:-translate-y-2 ${
              idx % 2 === 0 ? 'md:mt-0 md:mb-12' : 'md:mt-12 md:mb-0'
            }`}
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#8B0000] to-[#5A0000] text-[#D4AF37] flex items-center justify-center flex-shrink-0 border border-[#D4AF37]/40 shadow-lg transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-khmer-moul text-lg md:text-xl text-[#8B0000] drop-shadow-sm">
                  {event.event_name_kh || event.event_name}
                </h3>
                <span className="text-[10px] text-[#D4AF37] font-semibold uppercase tracking-wider">
                  {event.event_name}
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs md:text-sm text-[var(--text-primary)] font-khmer-kantumruuy pt-4 border-t border-[#D4AF37]/15">
              <div className="flex items-center gap-2 font-semibold">
                <Clock className="w-4 h-4 text-[#8B0000]" />
                <span>{event.start_time}{event.end_time ? ` - ${event.end_time}` : ''}</span>
              </div>
              {event.venue && (
                <div className="flex items-start gap-2 opacity-90">
                  <MapPin className="w-4 h-4 text-[#8B0000] mt-0.5 flex-shrink-0" />
                  <span>{event.venue}</span>
                </div>
              )}
              {event.description && (
                <p className="opacity-70 italic pt-1 text-xs">{event.description}</p>
              )}
              {event.date && event.start_time && (
                <AddToCalendar
                  title={event.event_name_kh || event.event_name}
                  startDate={`${event.date}T${event.start_time.replace(/ AM| PM/i, '')}:00.000Z`}
                  location={event.venue}
                  description={event.description}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
