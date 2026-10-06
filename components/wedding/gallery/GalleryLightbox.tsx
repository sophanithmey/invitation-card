"use client";

import React from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { GalleryItem } from "@/domain/entities/gallery";

export interface GalleryLightboxProps {
  isOpen: boolean;
  currentIndex: number | null;
  items: GalleryItem[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  isOpen,
  currentIndex,
  items,
  onClose,
  onPrev,
  onNext,
}: GalleryLightboxProps) {
  const { language } = useLanguage();

  if (!isOpen || currentIndex === null) return null;
  const currentItem = items[currentIndex];
  if (!currentItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-110 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 select-none"
        role="dialog"
        aria-modal="true"
        aria-label="Image Preview"
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:bg-white/40 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:bg-white/40 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/25 active:bg-white/40 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <motion.div
          key={currentIndex}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl max-h-[85vh] w-auto h-auto flex flex-col items-center justify-center"
        >
          <img
            src={currentItem.image_url}
            alt={currentItem.caption || `Photo ${currentIndex + 1}`}
            className="max-h-[72vh] sm:max-h-[78vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-xl sm:rounded-2xl border-2 border-[#D4AF37]/50 shadow-2xl"
          />

          <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-full px-3 text-center">
            <span className="text-[#FFF2B2] text-xs sm:text-sm font-semibold tracking-widest px-3 py-0.5 rounded-full bg-white/10 border border-[#D4AF37]/40 shadow-sm">
              {currentIndex + 1} / {items.length}
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
    </AnimatePresence>
  );
}
