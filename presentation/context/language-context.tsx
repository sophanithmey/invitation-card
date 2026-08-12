'use client';

import React, { createContext, useContext, useState } from 'react';

export type Language = 'kh' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    hero_title: 'We Are Getting Married',
    rsvp: 'RSVP',
    our_story: 'Our Love Story',
    venue: 'Venue & Map',
    events: 'Events Timeline',
    countdown: 'Countdown to the Big Day',
    wishes: 'Wishes',
    gallery: 'Gallery',
    gift: 'Gift Registry',
    wedding_party: 'Wedding Party',
    capture_moments: 'Capture the Moments',
    upload_photos: 'Upload Your Photos',
    add_to_calendar: 'Add to Calendar',
    days: 'Days',
    hours: 'Hrs',
    minutes: 'Min',
    seconds: 'Sec',
    groom: 'Groom',
    bride: 'Bride',
  },
  kh: {
    hero_title: 'យើងខ្ញុំរៀបអាពាហ៍ពិពាហ៍',
    rsvp: 'ចុះឈ្មោះចូលរួម',
    our_story: 'រឿងរ៉ាវស្នេហារបស់យើង',
    venue: 'ទីតាំង & ផែនទី',
    events: 'កម្មវិធីមង្គលការ',
    countdown: 'រង់ចាំថ្ងៃពិសេស',
    wishes: 'សារជូនពរ',
    gallery: 'វិចិត្រសាលរូបភាព',
    gift: 'ចំណងដៃ',
    wedding_party: 'អ្នកកំដរ',
    capture_moments: 'ផ្តិតយករូបភាពអនុស្សាវរីយ៍',
    upload_photos: 'បញ្ចូលរូបភាពទីនេះ',
    add_to_calendar: 'បញ្ចូលទៅប្រតិទិន',
    days: 'ថ្ងៃ',
    hours: 'ម៉ោង',
    minutes: 'នាទី',
    seconds: 'វិនាទី',
    groom: 'កូនកំលោះ',
    bride: 'កូនក្រមុំ',
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'kh',
  setLang: () => {},
  toggleLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('kh');

  const toggleLang = () => {
    setLang((prev) => (prev === 'kh' ? 'en' : 'kh'));
  };

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
