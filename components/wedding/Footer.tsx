"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { motion } from "framer-motion";
import { Copy, Check, Heart } from "lucide-react";

export default function Footer() {
  const { t, language } = useLanguage();
  const [copiedTag, setCopiedTag] = useState<string | null>(null);
  const isKh = language === "kh";

  const primaryHashtag = t.footer.hashtag || "#SopheapChanvadey";
  const secondaryHashtag = "#SopheapAndChanvadey2026";

  const handleCopy = async (tag: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(tag);
        setCopiedTag(tag);
        setTimeout(() => setCopiedTag(null), 2500);
        return;
      }
    } catch (err) {
      console.warn("Clipboard API writeText failed, using fallback:", err);
    }

    try {
      const textarea = document.createElement("textarea");
      textarea.value = tag;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopiedTag(tag);
      setTimeout(() => setCopiedTag(null), 2500);
    } catch (e) {
      console.error("Fallback copy failed:", e);
    }
  };

  return (
    <footer className="relative bg-linear-to-b from-[#8B0000] via-[#750000] to-[#500000] text-white py-16 sm:py-20 text-center overflow-hidden px-4">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-xl mx-auto flex flex-col items-center"
      >
        {/* Heart Emblem */}
        <div className="w-10 h-10 rounded-full bg-white/10 border border-[#D4AF37]/40 flex items-center justify-center mb-4 shadow-sm">
          <Heart className="w-4 h-4 text-[#FFF2B2] fill-[#FFF2B2]/60" />
        </div>

        {/* Couple Names */}
        <motion.h2
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className={`font-bold mb-3 sm:mb-4 text-white drop-shadow-md ${
            isKh
              ? "font-khmer-moul text-3xl sm:text-4xl leading-[1.65] tracking-normal"
              : "font-cursive text-4xl sm:text-6xl"
          }`}
          style={{
            fontFamily: isKh
              ? "'Moulpali', 'Moul', cursive, serif"
              : "'Great Vibes', cursive",
          }}
        >
          {isKh ? "សុភាព & ច័ន្ទវដ្តី" : "Sopheap & Chanvadey"}
        </motion.h2>

        {/* Thank you message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className={`text-white/85 text-xs sm:text-sm max-w-md mx-auto leading-relaxed ${
            isKh ? "font-khmer-kantumruuy" : "italic tracking-wider"
          }`}
          style={{
            fontFamily: isKh
              ? "'Kantumruuy Pro', 'Noto Sans Khmer', sans-serif"
              : undefined,
          }}
        >
          {t.footer.thanks}
        </motion.p>

        {/* Wedding Hashtags (Equal Size & Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          {/* Primary Hashtag */}
          <button
            type="button"
            onClick={() => handleCopy(primaryHashtag)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-[#D4AF37]/50 text-[#FFF2B2] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer shadow-sm group"
          >
            <span>{primaryHashtag}</span>
            {copiedTag === primaryHashtag ? (
              <span className="inline-flex items-center gap-1 text-[#FFF2B2] text-[11px] bg-black/30 px-2 py-0.5 rounded-full border border-[#D4AF37]/40">
                <Check className="w-3 h-3 text-[#FFF2B2]" />
                <span>{t.footer.copiedToast}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-white/70 group-hover:text-white text-[11px] opacity-70 group-hover:opacity-100 transition-opacity">
                <Copy className="w-3 h-3" />
              </span>
            )}
          </button>

          {/* Secondary Hashtag */}
          <button
            type="button"
            onClick={() => handleCopy(secondaryHashtag)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-[#D4AF37]/50 text-[#FFF2B2] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer shadow-sm group"
          >
            <span>{secondaryHashtag}</span>
            {copiedTag === secondaryHashtag ? (
              <span className="inline-flex items-center gap-1 text-[#FFF2B2] text-[11px] bg-black/30 px-2 py-0.5 rounded-full border border-[#D4AF37]/40">
                <Check className="w-3 h-3 text-[#FFF2B2]" />
                <span>{t.footer.copiedToast}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-white/70 group-hover:text-white text-[11px] opacity-70 group-hover:opacity-100 transition-opacity">
                <Copy className="w-3 h-3" />
              </span>
            )}
          </button>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "120px" }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 1 }}
          className="h-px bg-linear-to-r from-transparent via-[#D4AF37]/60 to-transparent mx-auto mt-8 mb-4"
        />

        {/* Copyright */}
        <p className="text-white/50 text-[11px] sm:text-xs">
          © {new Date().getFullYear()} Sopheap & Chanvadey • All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
}
