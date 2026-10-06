"use client";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "./LanguageContext";
import { useLanguage as useGlobalLanguage } from "@/presentation/context/language-context";
import { motion } from "framer-motion";

interface NavBarProps {
  scrolled: boolean;
}

export default function NavBar({ scrolled }: NavBarProps) {
  const { language, setLanguage } = useLanguage();
  const globalLang = useGlobalLanguage();

  // Keep template language and global language in sync
  useEffect(() => {
    if (globalLang?.lang && globalLang.lang !== language) {
      setLanguage(globalLang.lang);
    }
  }, [globalLang?.lang, language, setLanguage]);

  const handleSelectLanguage = (newLang: "en" | "kh") => {
    setLanguage(newLang);
    if (globalLang?.setLang) {
      globalLang.setLang(newLang);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-between items-center px-6 py-4",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-[#D4AF37]/20"
          : "bg-transparent"
      )}
    >
      <div
        className="text-2xl font-bold text-[#8B0000] drop-shadow-sm"
        style={{ fontFamily: "Great Vibes, cursive" }}
      >
        S & D
      </div>

      {/* Luxury Animated Language Switcher */}
      <div
        className={cn(
          "relative flex items-center p-1 rounded-full border transition-all duration-500 shadow-sm",
          scrolled
            ? "bg-white/80 border-[#D4AF37]/40 shadow-inner"
            : "bg-black/20 border-[#D4AF37]/50 backdrop-blur-md shadow-lg"
        )}
      >
        <div className="relative flex items-center gap-1">
          {/* Sliding Pill Indicator */}
          <motion.div
            className={cn(
              "absolute h-full rounded-full shadow-md",
              scrolled
                ? "bg-gradient-to-r from-[#8B0000] to-[#5A0000]"
                : "bg-gradient-to-r from-[#D4AF37] to-[#B89228]"
            )}
            initial={false}
            animate={{
              x: language === "en" ? 0 : 44,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            style={{ width: "44px", height: "32px" }}
          />

          {/* EN Button */}
          <button
            type="button"
            onClick={() => handleSelectLanguage("en")}
            aria-label="Switch to English"
            className={cn(
              "relative z-10 w-11 h-8 text-[11px] font-bold tracking-widest transition-colors duration-300 flex items-center justify-center rounded-full cursor-pointer",
              language === "en"
                ? scrolled
                  ? "text-white"
                  : "text-[#2C1810]"
                : scrolled
                ? "text-[#8B0000]/60 hover:text-[#8B0000]"
                : "text-white/80 hover:text-white"
            )}
          >
            EN
          </button>

          {/* KH Button */}
          <button
            type="button"
            onClick={() => handleSelectLanguage("kh")}
            aria-label="Switch to Khmer"
            className={cn(
              "relative z-10 w-11 h-8 text-[11px] font-bold tracking-widest transition-colors duration-300 flex items-center justify-center rounded-full cursor-pointer",
              language === "kh"
                ? scrolled
                  ? "text-white"
                  : "text-[#2C1810]"
                : scrolled
                ? "text-[#8B0000]/60 hover:text-[#8B0000]"
                : "text-white/80 hover:text-white"
            )}
          >
            ខ្មែរ
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
