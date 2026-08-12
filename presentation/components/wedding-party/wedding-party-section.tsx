import React from 'react';
import { WeddingPartyMember } from '@/domain/entities/wedding-party';
import { useLanguage } from '@/presentation/context/language-context';
import clsx from 'clsx';
import Image from 'next/image';

interface WeddingPartyProps {
  party: WeddingPartyMember[];
}

export const WeddingPartySection: React.FC<WeddingPartyProps> = ({ party }) => {
  const { t, lang } = useLanguage();

  if (!party || party.length === 0) return null;

  return (
    <section className="py-16 px-4 md:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-khmer-moul mb-4 drop-shadow-md">
            {t('wedding_party')}
          </h2>
          <div className="w-24 h-1 bg-[var(--accent-color,#C59B27)] mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {party.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center group perspective-1000"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-[var(--secondary-color,#D4AF37)] shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2">
                <Image
                  src={member.photo_url}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 128px, 160px"
                />
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold font-khmer-kantumruuy text-center mb-1 transition-colors group-hover:text-[var(--accent-color,#C59B27)]">
                {lang === 'kh' && member.name_kh ? member.name_kh : member.name}
              </h3>
              
              <p className="text-sm font-medium text-current/70 text-center uppercase tracking-wider">
                {lang === 'kh' && member.role_kh ? member.role_kh : member.role}
              </p>
              
              {member.relation && (
                <p className="text-xs text-current/50 text-center mt-1 italic">
                  {member.relation}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
