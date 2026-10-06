"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { GalleryItem } from "@/domain/entities/gallery";

interface PreWeddingGalleryProps {
  gallery?: GalleryItem[];
}

const DEFAULT_GALLERY: GalleryItem[] = [
  {
    id: "g-1",
    image_url: "/khmer-couple.png",
    caption: "ពិធីសំពះផ្ទឹម • Traditional Ceremony",
    sort_order: 1,
  },
  {
    id: "g-2",
    image_url:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
    caption: "Pre-wedding Photoshoot • ថតរូបត្រៀមអាពាហ៍ពិពាហ៍",
    sort_order: 2,
  },
  {
    id: "g-3",
    image_url:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    caption: "Sweet Moments • វេលាដ៏ផ្អែមល្ហែម",
    sort_order: 3,
  },
  {
    id: "g-4",
    image_url:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
    caption: "Timeless Romance • សេចក្តីស្រឡាញ់អមតៈ",
    sort_order: 4,
  },
  {
    id: "g-5",
    image_url:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
    caption: "Walking Together • ដំណើរជីវិតរួមគ្នា",
    sort_order: 5,
  },
  {
    id: "g-6",
    image_url:
      "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop",
    caption: "Forever & Always • ស្រឡាញ់ជារៀងរហូត",
    sort_order: 6,
  },
];

export default function PreWeddingGallery({ gallery }: PreWeddingGalleryProps) {
  const { t, language } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const items = useMemo(() => {
    if (gallery && gallery.length > 0) {
      return [...gallery].sort((a, b) => a.sort_order - b.sort_order);
    }
    return DEFAULT_GALLERY;
  }, [gallery]);

  const currentItem = selectedImageIndex !== null ? items[selectedImageIndex] : null;

  const showPrev = useCallback(() => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return (prev - 1 + items.length) % items.length;
    });
  }, [items.length]);

  const showNext = useCallback(() => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return null;
      return (prev + 1) % items.length;
    });
  }, [items.length]);

  const closeLightbox = useCallback(() => {
    setSelectedImageIndex(null);
  }, []);

  // Lock body scroll when preview is open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, closeLightbox, showPrev, showNext]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 sm:py-20 px-4 bg-[#FDFBF7] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#D4AF37]/10 mb-4 border border-[#D4AF37]/30 shadow-sm">
            <Camera className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-bold text-[#8B0000] mb-3 ${
              language === "kh" ? "font-khmer-moul leading-[1.65]" : "font-playfair tracking-wide"
            }`}
            style={{
              fontFamily:
                language === "kh"
                  ? "'Moulpali', cursive, serif"
                  : "Playfair Display, serif",
            }}
          >
            {t.gallery.title}
          </h2>
          <p
            className={`text-slate-600 italic text-sm sm:text-base max-w-md mx-auto ${
              language === "kh" ? "font-khmer-kantumruuy leading-relaxed" : ""
            }`}
            style={{
              fontFamily:
                language === "kh"
                  ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                  : undefined,
            }}
          >
            {t.gallery.subtitle}
          </p>
        </motion.div>

        {/* Gallery Grid: 2 columns on mobile, 3 columns on tablet/desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-1 sm:px-4"
        >
          {items.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              variants={itemVariants}
              onClick={() => setSelectedImageIndex(idx)}
              className="group relative aspect-[3/4] sm:aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-[#D4AF37]/35 hover:border-[#D4AF37] bg-slate-900"
            >
              <img
                src={item.image_url}
                alt={item.caption || `Photo ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-75 sm:opacity-50 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top-Right Preview Indicator */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/90 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <Maximize2 className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>

              {/* Bottom Caption & Tap Hint */}
              <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3.5 flex flex-col justify-end text-left">
                <p
                  className={`text-white text-xs sm:text-sm font-medium line-clamp-2 drop-shadow-md ${
                    language === "kh"
                      ? "font-khmer-kantumruuy leading-tight"
                      : "font-serif tracking-wide"
                  }`}
                  style={{
                    fontFamily:
                      language === "kh"
                        ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                        : undefined,
                  }}
                >
                  {item.caption || `Photo ${idx + 1}`}
                </p>
                <span className="text-[10px] text-[#FFF2B2] font-sans uppercase tracking-widest mt-0.5 sm:mt-1 flex items-center gap-1 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" />
                  <span>{language === "kh" ? "ចុចមើលរូបភាព" : "Tap to preview"}</span>
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Image Preview Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-110 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none"
            role="dialog"
            aria-modal="true"
            aria-label="Image Preview"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:bg-white/40 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:bg-white/40 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:bg-white/40 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Preview Container */}
            <motion.div
              key={selectedImageIndex}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-auto h-auto flex flex-col items-center justify-center"
            >
              <img
                src={currentItem.image_url}
                alt={currentItem.caption || `Photo ${selectedImageIndex + 1}`}
                className="max-h-[72vh] sm:max-h-[78vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-xl sm:rounded-2xl border-2 border-[#D4AF37]/50 shadow-2xl"
              />

              {/* Bottom Caption & Counter */}
              <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-full px-3 text-center">
                <span className="text-[#FFF2B2] text-xs sm:text-sm font-semibold tracking-widest px-3 py-0.5 rounded-full bg-white/10 border border-[#D4AF37]/40 shadow-sm">
                  {selectedImageIndex + 1} / {items.length}
                </span>
                {currentItem.caption && (
                  <p
                    className={`text-white/95 text-xs sm:text-sm md:text-base font-medium drop-shadow-md ${
                      language === "kh"
                        ? "font-khmer-kantumruuy leading-relaxed"
                        : "font-serif tracking-wide"
                    }`}
                    style={{
                      fontFamily:
                        language === "kh"
                          ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
                          : undefined,
                    }}
                  >
                    {currentItem.caption}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
