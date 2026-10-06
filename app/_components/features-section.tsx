import React from 'react';
import { Heart, Calendar, Map, Image as ImageIcon } from 'lucide-react';

export const FEATURES = [
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
];

export function FeaturesSection() {
  return (
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
          {FEATURES.map((feature, i) => (
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
  );
}
