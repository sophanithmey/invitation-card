import React from 'react';
import { Camera } from 'lucide-react';
import { useLanguage } from '@/presentation/context/language-context';

interface PhotoUploadSectionProps {
  uploadUrl: string;
}

export const PhotoUploadSection: React.FC<PhotoUploadSectionProps> = ({ uploadUrl }) => {
  const { t } = useLanguage();

  if (!uploadUrl) return null;

  return (
    <section className="py-16 px-4 md:px-8 relative bg-[var(--primary-color,#7A1624)] text-[var(--secondary-color,#D4AF37)] my-12 rounded-3xl mx-4 overflow-hidden shadow-2xl">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="w-20 h-20 bg-[var(--secondary-color,#D4AF37)] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-black/20">
          <Camera className="w-10 h-10 text-[var(--primary-color,#7A1624)]" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold font-khmer-moul mb-4 text-white drop-shadow-md">
          {t('capture_moments')}
        </h2>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90 font-khmer-kantumruuy">
          {t('upload_photos') || 'Help us capture the love! Upload the photos and videos you take tonight so we can cherish them forever.'}
        </p>
        
        <a 
          href={uploadUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--primary-color,#7A1624)] rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
        >
          <Camera className="w-5 h-5" />
          <span>Upload Here</span>
        </a>
      </div>
    </section>
  );
};
