'use client';

import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import ReactPlayer from 'react-player';

const YOUTUBE_URL =
  'https://www.youtube.com/embed/Mn_qLC7_ueA?si=7Tbhr7z-78IOHsN7';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false); // <--- Must start false to avoid autoplay error

  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className='absolute w-0 h-0 overflow-hidden opacity-0 pointer-events-none'>
        <ReactPlayer
          src={YOUTUBE_URL}
          playing={isPlaying}
          loop={true}
          volume={1}
          width='0'
          height='0'
          config={{
            youtube: { iv_load_policy: 1 },
          }}
        />
      </div>

      <div className='fixed bottom-6 right-6 z-40'>
        <button
          type='button'
          onClick={toggleAudio}
          aria-label='Toggle background music'
          className='w-12 h-12 rounded-full bg-(--primary-color,#7A1624) text-(--secondary-color,#D4AF37) border-2 border-(--secondary-color,#D4AF37) shadow-[0_4px_15px_rgba(0,0,0,0.2)] flex items-center justify-center cursor-pointer transition-transform hover:scale-110 active:scale-95'
        >
          {isPlaying ? (
            <Volume2 className='w-6 h-6 animate-pulse' />
          ) : (
            <VolumeX className='w-6 h-6 opacity-75' />
          )}
        </button>
      </div>
    </>
  );
};
