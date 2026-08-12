import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Heart,
  Map,
  Calendar,
  Image as ImageIcon,
  Send,
} from 'lucide-react';
import { KhmerOrnament } from '@/presentation/components/ornaments/khmer-ornament';

export default function PlatformHomePage() {
  const templates = [
    {
      slug: 'serey-mongkul',
      names: 'សិរី & មង្គល',
      style: 'Khmer Luxury',
      desc: 'A rich burgundy and gold aesthetic for the most majestic celebrations.',
      color: 'from-[#7A1624] to-[#4A0D15]',
      textColor: 'text-[#D4AF37]',
    },
    {
      slug: 'dara-sophea',
      names: 'ដារ៉ា & សុភា',
      style: 'Khmer Classic',
      desc: 'Timeless ivory and subtle gold elements, perfect for a traditional feel.',
      color: 'from-[#FDFBF7] to-[#EAE3D9]',
      textColor: 'text-[#8B0000]',
    },
    {
      slug: 'kanha-vichea',
      names: 'វិជ្ជា & កញ្ញា',
      style: 'Khmer Modern',
      desc: 'Sleek emerald tones with glowing accents for the contemporary couple.',
      color: 'from-[#080F0C] to-[#040806]',
      textColor: 'text-emerald-400',
    },
    {
      slug: 'cheata-piseth',
      names: 'ពិសិដ្ឋ & ជាតា',
      style: 'Khmer Floral',
      desc: 'Soft rose and champagne hues that bring a delicate, romantic touch.',
      color: 'from-[#FFF8F5] to-[#FDEBE7]',
      textColor: 'text-[#E8B4B8]',
    },
  ];

  return (
    <main className='min-h-screen bg-[#FDFBF7] text-[#2C1810] font-khmer-kantumruuy selection:bg-[#D4AF37]/30'>
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden'>
        {/* Background elements */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#FFF9EF] to-transparent -z-10' />
        <div className='absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] max-w-[800px] rounded-full bg-[#D4AF37]/10 blur-[120px] -z-10' />
        <div className='absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] rounded-full bg-[#7A1624]/5 blur-[100px] -z-10' />

        <div className='max-w-5xl mx-auto text-center space-y-8 relative z-10'>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-[#D4AF37]/30 shadow-sm text-[#7A1624] text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in-up'>
            <Sparkles className='w-4 h-4 text-[#D4AF37]' />
            <span>Premium Digital Invitations</span>
          </div>

          <h1
            className='font-khmer-moul text-4xl md:text-6xl lg:text-7xl text-[#7A1624] leading-tight md:leading-tight animate-fade-in-up'
            style={{ animationDelay: '100ms' }}
          >
            សំបុត្រអញ្ជើញ
            <br className='hidden md:block' />
            ដ៏ល្អឥតខ្ចោះរបស់អ្នក
          </h1>

          <p
            className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up'
            style={{ animationDelay: '200ms' }}
          >
            Craft stunning, personalized digital wedding invitations that leave
            a lasting impression. Elegant designs, interactive features, and
            seamless RSVP management for your special day.
          </p>

          <div
            className='flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 animate-fade-in-up'
            style={{ animationDelay: '300ms' }}
          >
            <Link
              href='/'
              className='w-full sm:w-auto px-8 py-4 bg-linear-to-r from-[#7A1624] to-[#5A0F1A] text-[#D4AF37] font-bold text-lg rounded-full shadow-[0_8px_30px_rgba(122,22,36,0.3)] hover:shadow-[0_8px_40px_rgba(122,22,36,0.5)] hover:-translate-y-1 transition-all flex items-center justify-center gap-2'
            >
              <span>បង្កើតសំបុត្ររបស់អ្នក</span>
              <ArrowRight className='w-5 h-5' />
            </Link>

            <a
              href='https://t.me/disissophanith'
              target='_blank'
              rel='noopener noreferrer'
              className='w-full sm:w-auto px-8 py-4 bg-white text-[#7A1624] border-2 border-[#7A1624]/20 font-bold text-lg rounded-full shadow-sm hover:border-[#7A1624]/50 hover:-translate-y-1 transition-all flex items-center justify-center gap-2'
            >
              <Send className='w-5 h-5' />
              <span>ទាក់ទងតាម Telegram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className='w-full flex justify-center py-12'>
        <KhmerOrnament
          variant='lotus'
          className='text-[#D4AF37] opacity-60 scale-125'
        />
      </div>

      {/* Features Section */}
      <section className='py-20 px-4 bg-white/50'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='font-khmer-moul text-3xl md:text-4xl text-[#7A1624] mb-4'>
              អ្វីដែលអ្នកនឹងទទួលបាន
            </h2>
            <p className='text-gray-600'>
              Premium features designed for the modern couple
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                icon: Heart,
                title: 'Beautiful Themes',
                desc: 'Choose from exclusively crafted Khmer designs.',
              },
              {
                icon: Calendar,
                title: 'Smart Itinerary',
                desc: 'Interactive timelines with Add-to-Calendar integration.',
              },
              {
                icon: Map,
                title: 'Interactive Maps',
                desc: 'Direct your guests seamlessly with embedded maps.',
              },
              {
                icon: ImageIcon,
                title: 'Photo Galleries',
                desc: 'Showcase your love story with beautiful masonry grids.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className='p-8 rounded-3xl bg-white border border-[#D4AF37]/20 shadow-xl shadow-[#D4AF37]/5 hover:-translate-y-2 transition-transform duration-300'
              >
                <div className='w-14 h-14 rounded-2xl bg-[#FFF9EF] flex items-center justify-center mb-6 border border-[#D4AF37]/30'>
                  <feature.icon className='w-7 h-7 text-[#7A1624]' />
                </div>
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 leading-relaxed'>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className='py-24 px-4'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-16 flex flex-col items-center justify-center pt-8'>
            <div className='text-[#D4AF37] font-bold tracking-widest uppercase text-sm mb-6'>
              Collections
            </div>
            <h2 className='font-khmer-moul text-3xl md:text-5xl text-[#7A1624]'>
              ស្វែងយល់ពីម៉ូតរបស់យើង
            </h2>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {templates.map((template) => {
              // Adjust text colors based on background brightness
              const isLight =
                template.slug === 'dara-sophea' ||
                template.slug === 'cheata-piseth';
              const textPrimary = isLight ? 'text-[#2C1810]' : 'text-white';
              const textSecondary = isLight ? 'text-gray-600' : 'text-white/80';
              const badgeBg = isLight
                ? 'bg-[#7A1624]/10 border-[#7A1624]/20 text-[#7A1624]'
                : 'bg-white/20 border-white/20 text-white/90';

              return (
                <Link
                  key={template.slug}
                  href={`/wedding/${template.slug}`}
                  className='group relative h-105 rounded-3xl overflow-hidden flex flex-col justify-end p-8 shadow-2xl transition-all duration-500 hover:-translate-y-2'
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${template.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Subtle texture overlay */}
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none" />

                  <div className='relative z-10 flex flex-col h-full justify-between'>
                    <div className='flex justify-end'>
                      <div
                        className={`inline-block px-4 py-1.5 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-wider border ${badgeBg}`}
                      >
                        {template.style}
                      </div>
                    </div>

                    <div>
                      <h3
                        className={`font-khmer-moul text-3xl ${textPrimary} mb-3 drop-shadow-sm group-hover:scale-105 transform origin-left transition-transform duration-500`}
                      >
                        {template.names}
                      </h3>
                      <p
                        className={`${textSecondary} max-w-sm mb-8 leading-relaxed`}
                      >
                        {template.desc}
                      </p>

                      <div
                        className={`flex items-center gap-2 ${template.textColor} font-bold`}
                      >
                        <span className='group-hover:mr-2 transition-all duration-300'>
                          Preview Design
                        </span>
                        <ArrowRight className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-4 text-center border-t border-[#D4AF37]/20'>
        <KhmerOrnament
          variant='lotus'
          className='mx-auto mb-6 text-[#D4AF37]/50'
        />
        <p className='text-gray-500 font-medium'>
          © 2026 Soursdey Digital Weddings. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
