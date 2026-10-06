'use client';

import React from 'react';
import { CalendarClock, MapPin } from 'lucide-react';
import { WeddingEvent } from '@/domain/entities/event';

interface EtheapAgendaProps {
  events: WeddingEvent[];
}

export const EtheapAgenda: React.FC<EtheapAgendaProps> = ({ events }) => {
  return (
    <section className="relative px-4 py-4 text-center">
      <div className="max-w-md mx-auto bg-[#FFFCF7] rounded-3xl border border-[#EBC070]/60 p-6 sm:p-7 shadow-[0_6px_25px_rgba(201,140,8,0.08)] space-y-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-[#C98C08]">
            <CalendarClock className="w-4 h-4" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase">
              Schedule & Agenda
            </span>
          </div>
          <h2 className="font-khmer-moul text-sm sm:text-base text-[#7A1624]">
            របៀបវារៈនៃកម្មវិធី
          </h2>
        </div>

        {/* Event Timeline Cards */}
        <div className="space-y-3 text-left">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-[#FAF4E6]/80 rounded-2xl p-4 border border-[#EBC070]/50 space-y-2.5 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-block px-3 py-1 bg-[#C98C08] text-[#FFFCF7] font-mono font-bold text-xs rounded-full shadow-xs">
                  {event.start_time} {event.end_time ? `- ${event.end_time}` : ''}
                </span>
                <span className="text-[11px] font-medium text-[#84623A]">
                  {new Date(event.date).toLocaleDateString('km-KH', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>

              <div>
                <h3 className="font-khmer-moul text-xs sm:text-sm text-[#7A1624]">
                  {event.event_name_kh || event.event_name}
                </h3>
                {event.event_name && event.event_name !== event.event_name_kh && (
                  <p className="text-[11px] text-[#84623A] font-serif italic">
                    {event.event_name}
                  </p>
                )}
              </div>

              {event.description && (
                <p className="font-khmer-kantumruuy text-xs text-[#4A351C]/90 leading-relaxed">
                  {event.description}
                </p>
              )}

              <div className="pt-2 border-t border-[#EBC070]/30 flex items-center justify-between text-xs text-[#84623A]">
                <div className="flex items-center gap-1.5 line-clamp-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C98C08] shrink-0" />
                  <span className="font-khmer-kantumruuy truncate">
                    {event.venue} {event.address ? `(${event.address})` : ''}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
