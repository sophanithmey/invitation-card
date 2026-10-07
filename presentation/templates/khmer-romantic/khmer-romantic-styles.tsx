"use client";

import React from "react";

export function KhmerRomanticStyles() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Kantumruuy+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Moul&family=Moulpali&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Kantumruuy+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Moul&family=Moulpali&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap");

        /* Khmer Language Base: Kantumruuy Pro for descriptions and body content */
        .font-khmer {
          font-family: "Kantumruuy Pro", "Noto Sans Khmer", sans-serif;
          line-height: 1.85;
        }

        /* Enforce ligature preservation for Khmer typography */
        .font-khmer,
        .font-khmer * {
          letter-spacing: normal !important;
        }

        /* Description, paragraph, list, and quote styling in Khmer */
        .font-khmer p,
        .font-khmer li,
        .font-khmer blockquote,
        .font-khmer span:not(.font-khmer-moul):not(.font-khmer-moulpali):not(.font-cursive):not([style*="Moul"]):not([style*="Great Vibes"]),
        .font-khmer .description,
        .font-khmer .desc,
        .font-khmer [class*="desc"],
        .font-khmer [class*="subtitle"],
        .font-khmer .font-khmer-kantumruuy,
        .font-khmer-kantumruuy {
          font-family: "Kantumruuy Pro", "Noto Sans Khmer", sans-serif !important;
          line-height: 1.85 !important;
        }

        /* Title and heading typography in Khmer: Moulpali, Moul */
        .font-khmer h1:not(.font-cursive):not([style*="Great Vibes"]),
        .font-khmer h2:not(.font-cursive):not([style*="Great Vibes"]),
        .font-khmer h3:not(.font-cursive):not([style*="Great Vibes"]),
        .font-khmer h4:not(.font-cursive):not([style*="Great Vibes"]),
        .font-khmer h5:not(.font-cursive):not([style*="Great Vibes"]),
        .font-khmer h6:not(.font-cursive):not([style*="Great Vibes"]),
        .font-khmer .title,
        .font-khmer [class*="title"],
        .font-khmer .font-serif,
        .font-khmer .font-playfair,
        .font-khmer .font-khmer-moul,
        .font-khmer .font-khmer-moulpali,
        .font-khmer-moul,
        .font-khmer-moulpali {
          font-family: "Moulpali", "Moul", cursive, serif !important;
          line-height: 1.7 !important;
          padding-top: 0.15em;
          padding-bottom: 0.15em;
        }

        .font-khmer button,
        .font-khmer a {
          line-height: 1.6 !important;
        }

        .font-khmer .font-cursive,
        .font-khmer [style*="Great Vibes"] {
          font-family: "Great Vibes", cursive !important;
        }

        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}
