"use client";

import React from "react";

export function KhmerRomanticStyles() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Moulpali&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Great+Vibes&family=Moulpali&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Suwannaphum:wght@100;300;400;700;900&display=swap");

        .font-khmer {
          line-height: 1.85;
        }

        .font-khmer,
        .font-khmer *:not(.font-cursive):not([style*="Great Vibes"]) {
          font-family: "Moulpali", "Suwannaphum", cursive, serif;
        }

        .font-khmer p,
        .font-khmer li,
        .font-khmer blockquote {
          line-height: 1.9 !important;
        }

        .font-khmer h1:not([style*="Great Vibes"]),
        .font-khmer h2:not([style*="Great Vibes"]),
        .font-khmer h3:not([style*="Great Vibes"]),
        .font-khmer h4:not([style*="Great Vibes"]),
        .font-khmer .title,
        .font-khmer .font-serif,
        .font-khmer .font-playfair,
        .font-khmer .font-khmer-moul,
        .font-khmer-moul {
          font-family: "Moulpali", "Moul", cursive, serif !important;
          line-height: 1.7 !important;
          padding-top: 0.15em;
          padding-bottom: 0.15em;
          letter-spacing: normal;
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
