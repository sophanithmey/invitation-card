'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, ExternalLink, Edit, Trash2, Sparkles } from 'lucide-react';
import { Wedding } from '@/domain/entities/wedding';
import { weddingRepository } from '@/data/repositories/local-wedding-repository';
import { formatKhmerDate } from '@/use-cases/format-khmer-date';

export default function AdminDashboardPage() {
  const [weddings, setWeddings] = useState<Wedding[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await weddingRepository.getAll();
      setWeddings(data);
      setLoading(false);
    };
    load();
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm('តើអ្នកពិតជាចង់លុបសំបុត្រមង្គលការនេះមែនទេ?')) {
      await weddingRepository.delete(id);
      setWeddings(weddings.filter((w) => w.id !== id));
    }
  };

  return (
    <main className="min-h-screen bg-[#FFF9EF] p-4 md:p-8 font-khmer-kantumruuy">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border-2 border-[#D4AF37] shadow-lg">
          <div>
            <div className="flex items-center gap-2 text-[#7A1624]">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
              <h1 className="font-khmer-moul text-xl md:text-2xl">
                ប្រព័ន្ធគ្រប់គ្រងសំបុត្រអាពាហ៍ពិពាហ៍ (Admin Platform)
              </h1>
            </div>
            <p className="text-xs text-gray-600 mt-1">
              បង្កើត និងគ្រប់គ្រងសំបុត្រមង្គលការឌីជីថលបែបខ្មែរបុរាណ និងសម័យ
            </p>
          </div>

          <Link
            href="/admin/builder"
            className="py-3 px-6 bg-[#7A1624] text-[#D4AF37] font-khmer-moul text-sm rounded-xl border border-[#D4AF37] shadow-md flex items-center gap-2 hover:opacity-90 transition cursor-pointer"
          >
            <Plus className="w-5 h-5" />
            <span>បង្កើតសំបុត្រថ្មី</span>
          </Link>
        </div>

        {/* Wedding List Cards Grid */}
        {loading ? (
          <div className="text-center py-12 text-gray-500">កំពុងទាញយកទិន្នន័យ...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {weddings.map((w) => (
              <div
                key={w.id}
                className="bg-white rounded-2xl border-2 border-[#D4AF37]/60 p-6 shadow-md hover:shadow-xl transition space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full border border-[#D4AF37] overflow-hidden">
                      <img src={w.cover_photo} alt={w.slug} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h2 className="font-khmer-moul text-lg text-[#7A1624]">
                        {w.groom_name_kh} & {w.bride_name_kh}
                      </h2>
                      <span className="text-xs text-amber-800 font-medium">/wedding/{w.slug}</span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-300 uppercase">
                    {w.template_id}
                  </span>
                </div>

                <div className="text-xs text-gray-600 space-y-1">
                  <p>🗓 កាលបរិច្ឆេទ: {formatKhmerDate(w.wedding_date)}</p>
                  <p>📍 ទីតាំង: {w.venue}</p>
                  <p>💌 ការឆ្លើយតប RSVP: {w.rsvps?.length || 0} នាក់</p>
                </div>

                <div className="pt-3 border-t flex items-center justify-between gap-2 text-xs font-semibold">
                  <Link
                    href={`/wedding/${w.slug}`}
                    target="_blank"
                    className="flex items-center gap-1 py-2 px-4 bg-amber-50 text-[#7A1624] rounded-lg border border-amber-300 hover:bg-amber-100 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>បើកមើលសំបុត្រ</span>
                  </Link>

                  <div className="flex gap-2">
                    <Link
                      href={`/admin/builder?id=${w.id}`}
                      className="p-2 text-amber-800 hover:bg-amber-100 rounded-lg border border-amber-300"
                      title="កែប្រែ"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => handleDelete(w.id)}
                      className="p-2 text-rose-700 hover:bg-rose-100 rounded-lg border border-rose-300 cursor-pointer"
                      title="លុប"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
