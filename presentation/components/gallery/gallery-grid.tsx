'use client';

import React from 'react';
import { GalleryItem } from '@/domain/entities/gallery';
import { KhmerOrnament } from '../ornaments/khmer-ornament';

interface GalleryGridProps {
  gallery: GalleryItem[];
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ gallery }) => {

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto text-center">
      <h2 className="font-khmer-moul text-2xl md:text-3xl text-[var(--primary-color,#7A1624)] mb-2">
        អាល់ប៊ុមរូបថត
      </h2>
      <p className="text-sm text-amber-800 font-khmer-kantumruuy mb-6">Wedding Photo Gallery</p>

      <KhmerOrnament variant="divider" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-8">
        {gallery.map((item, idx) => (
          <div
            key={item.id || idx}
            className="group relative aspect-square rounded-2xl overflow-hidden border-2 border-[var(--secondary-color,#D4AF37)] shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={item.image_url}
              alt={item.caption || `Gallery ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
