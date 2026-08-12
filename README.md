# Khmer Digital Weddings | Premium Invitations

A modern, highly customizable platform for creating stunning digital Cambodian wedding invitations. Built for commercial use, this application provides an elegant guest experience combined with a powerful admin dashboard for couples to manage their special day.

## 🌟 Features

- **Premium Themes**: Four distinct, beautifully crafted templates (Khmer Luxury, Khmer Classic, Khmer Modern, Khmer Floral).
- **Interactive UI**: Engaging glassmorphism designs, micro-animations, and a responsive layout for mobile and desktop.
- **Bilingual Support**: Built-in Language Switcher seamlessly toggling between English and Khmer.
- **Smart Itinerary**: An interactive events timeline complete with an "Add to Calendar" functionality.
- **Interactive Maps**: Embedded Google Maps integrations for clear venue directions.
- **Guest Engagement**: RSVP submission, well-wishes board, and a dedicated Photo Upload section.
- **Wedding Party**: Elegantly showcase bridesmaids and groomsmen.
- **Audio Experience**: Integrated background music player with toggle controls.
- **Admin Dashboard**: Secure, password-protected portal to manage invitations, templates, and view guest RSVPs.

## 💻 Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Architecture**: Clean Architecture (Domain, Data, Presentation, Use-Cases)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the platform.

## 📁 Architecture Overview

This project strictly adheres to **Clean Architecture** principles to separate concerns and improve maintainability:

- **`domain/`**: Enterprise logic, including TypeScript interfaces and core entities (Wedding, RSVP, Wish, WeddingPartyMember).
- **`data/`**: Data layer implementations, including mock repositories and seed data.
- **`use-cases/`**: Application business logic, acting as the orchestrator between presentation and data (e.g., submitting RSVPs, determining visible sections).
- **`presentation/`**: The UI layer, housing React components, Contexts, Templates, and the Next.js `app/` router pages.

## 🛡 Admin Access

The Admin dashboard is protected by a login screen. 
- **URL**: `/admin`
- **Default Password**: `admin123` (Note: Update this before deploying to production)

## 📄 License

Proprietary Software. Created for commercial use. All rights reserved.
