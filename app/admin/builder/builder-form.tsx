'use client';

import React from 'react';
import { Wedding } from '@/domain/entities/wedding';
import { WeddingEvent } from '@/domain/entities/event';

interface BuilderFormProps {
  formData: Partial<Wedding>;
  onChange: (updated: Partial<Wedding>) => void;
  onAddEvent: () => void;
  onUpdateEvent: (index: number, event: WeddingEvent) => void;
  onRemoveEvent: (index: number) => void;
}

export const BuilderForm: React.FC<BuilderFormProps> = ({
  formData,
  onChange,
  onAddEvent,
  onUpdateEvent,
  onRemoveEvent,
}) => {
  return (
    <div className="space-y-6 text-xs md:text-sm font-khmer-kantumruuy">
      {/* Bride & Groom Section */}
      <div className="bg-white p-5 rounded-2xl border border-amber-300 space-y-3">
        <h3 className="font-khmer-moul text-sm text-[#7A1624]">១. ព័ត៌មានសាម៉ីខ្លួន (Couple Info)</h3>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-700 mb-1">ឈ្មោះកូនកំលោះ (Khmer Groom)</label>
            <input
              type="text"
              value={formData.groom_name_kh || ''}
              onChange={(e) => onChange({ groom_name_kh: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-amber-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">ឈ្មោះកូនក្រមុំ (Khmer Bride)</label>
            <input
              type="text"
              value={formData.bride_name_kh || ''}
              onChange={(e) => onChange({ bride_name_kh: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-amber-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-gray-700 mb-1">English Groom</label>
            <input
              type="text"
              value={formData.groom_name || ''}
              onChange={(e) => onChange({ groom_name: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-amber-200"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">English Bride</label>
            <input
              type="text"
              value={formData.bride_name || ''}
              onChange={(e) => onChange({ bride_name: e.target.value })}
              className="w-full p-2.5 rounded-lg border border-amber-200"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Slug URL (/wedding/your-slug)</label>
          <input
            type="text"
            value={formData.slug || ''}
            onChange={(e) => onChange({ slug: e.target.value })}
            placeholder="e.g. serey-mongkul"
            className="w-full p-2.5 rounded-lg border border-amber-300 font-mono text-xs"
          />
        </div>
      </div>

      {/* Date & Venue */}
      <div className="bg-white p-5 rounded-2xl border border-amber-300 space-y-3">
        <h3 className="font-khmer-moul text-sm text-[#7A1624]">២. កាលបរិច្ឆេទ & ទីតាំង (Date & Venue)</h3>
        <div>
          <label className="block text-gray-700 mb-1">កាលបរិច្ឆេទ (Wedding Date & Time)</label>
          <input
            type="datetime-local"
            value={formData.wedding_date ? formData.wedding_date.substring(0, 16) : ''}
            onChange={(e) => onChange({ wedding_date: new Date(e.target.value).toISOString() })}
            className="w-full p-2.5 rounded-lg border border-amber-200"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">ឈ្មោះទីតាំង (Venue Name)</label>
          <input
            type="text"
            value={formData.venue || ''}
            onChange={(e) => onChange({ venue: e.target.value })}
            className="w-full p-2.5 rounded-lg border border-amber-200"
          />
        </div>
      </div>

      {/* Template & Color Theme Picker */}
      <div className="bg-white p-5 rounded-2xl border border-amber-300 space-y-3">
        <h3 className="font-khmer-moul text-sm text-[#7A1624]">៣. ជ្រើសរើសម៉ូត (Template & Colors)</h3>
        <div>
          <label className="block text-gray-700 mb-1">ទម្រង់ម៉ូតសំបុត្រ (Template Style)</label>
          <select
            value={formData.template_id || 'khmer-luxury'}
            onChange={(e) => onChange({ template_id: e.target.value as any })}
            className="w-full p-2.5 rounded-lg border border-amber-200 font-semibold"
          >
            <option value="khmer-luxury">👑 Khmer Luxury (Deep Burgundy & Gold)</option>
            <option value="khmer-etheap">⚜️ Khmer E-Theap (Golden Ivory Elegance)</option>
            <option value="khmer-classic">🏛 Khmer Classic (Ivory & Golden Lotus Frame)</option>
            <option value="khmer-modern">✨ Khmer Modern (Dark Emerald Glassmorphism)</option>
            <option value="khmer-floral">🌸 Khmer Floral (Rose Gold & Garland)</option>
          </select>
        </div>
      </div>
    </div>
  );
};
