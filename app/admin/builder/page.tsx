'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowLeft, Save, Sparkles } from 'lucide-react';
import { Wedding } from '@/domain/entities/wedding';
import { weddingRepository } from '@/data/repositories/local-wedding-repository';
import { saveWedding, generateSlug } from '@/use-cases/save-wedding';
import { BuilderForm } from './builder-form';
import { PreviewPane } from './preview-pane';

function BuilderContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editId = searchParams.get('id');

  const [formData, setFormData] = useState<Partial<Wedding>>({
    groom_name_kh: 'ម៉ុងគុល',
    bride_name_kh: 'សិរី',
    groom_name: 'Mongkul',
    bride_name: 'Serey',
    slug: 'serey-mongkul',
    wedding_date: new Date('2026-11-28T08:00:00.000Z').toISOString(),
    venue: 'សណ្ឋាគារ ហ៊ីមលីយ ប្រ៊ីលាន (Himalaya Grand Ballroom)',
    template_id: 'khmer-luxury',
    theme: {
      primary_color: '#7A1624',
      secondary_color: '#D4AF37',
      accent_color: '#C59B27',
      background_color: '#FFF9EF',
      font_family: 'Moul',
      ornament_style: 'luxury-gold',
    },
  });

  useEffect(() => {
    if (editId) {
      weddingRepository.getAll().then((list) => {
        const found = list.find((w) => w.id === editId);
        if (found) setFormData(found);
      });
    }
  }, [editId]);

  const handleChange = (updated: Partial<Wedding>) => {
    setFormData((prev) => {
      const next = { ...prev, ...updated };
      if ((updated.bride_name || updated.groom_name) && !editId) {
        next.slug = generateSlug(next.bride_name || 'bride', next.groom_name || 'groom');
      }
      return next;
    });
  };

  const handleSave = async () => {
    const saved = await saveWedding(weddingRepository, formData);
    alert(`សំបុត្រមង្គលការត្រូវបានរក្សាទុកដោយជោគជ័យ!\nURL: /wedding/${saved.slug}`);
    router.push(`/wedding/${saved.slug}`);
  };

  return (
    <main className="min-h-screen bg-[#FFF9EF] p-4 md:p-6 font-khmer-kantumruuy">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Top Header Controls */}
        <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-amber-300 shadow-md">
          <Link href="/admin" className="flex items-center gap-2 text-xs font-semibold text-amber-900 hover:text-[#7A1624]">
            <ArrowLeft className="w-4 h-4" />
            <span>ត្រឡប់ទៅប្រព័ន្ធគ្រប់គ្រង</span>
          </Link>

          <h1 className="font-khmer-moul text-base text-[#7A1624] hidden sm:block">
            {editId ? 'កែប្រែសំបុត្រមង្គលការ' : 'បង្កើតសំបុត្រមង្គលការថ្មី (Wedding Studio)'}
          </h1>

          <button
            onClick={handleSave}
            className="py-2.5 px-5 bg-[#7A1624] text-[#D4AF37] font-khmer-moul text-xs rounded-xl border border-[#D4AF37] shadow flex items-center gap-2 hover:opacity-90 transition cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>រក្សាទុក & ចេញផ្សាយ</span>
          </button>
        </div>

        {/* Split Screen Editor & Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 space-y-4">
            <BuilderForm
              formData={formData}
              onChange={handleChange}
              onAddEvent={() => {}}
              onUpdateEvent={() => {}}
              onRemoveEvent={() => {}}
            />
          </div>

          <div className="lg:col-span-7 sticky top-6">
            <PreviewPane formData={formData} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function BuilderPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading Studio...</div>}>
      <BuilderContent />
    </Suspense>
  );
}
