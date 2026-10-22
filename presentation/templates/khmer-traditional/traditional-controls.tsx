import React from 'react';
import { Film, Pause, Play, RotateCcw, ScrollText } from 'lucide-react';
import { TraditionalCopy } from './traditional-copy';

export type TraditionalViewMode = 'auto' | 'scroll';

interface TraditionalControlsProps {
  copy: TraditionalCopy;
  sceneDurationsMs: readonly number[];
  scene: number;
  loop: number;
  runKey: number;
  isPlaying: boolean;
  mode: TraditionalViewMode;
  onTogglePlay: () => void;
  onReplay: () => void;
  onToggleMode: () => void;
}

const BUTTON_CLASS =
  'grid size-8 place-items-center rounded-full bg-black/40 text-[#fef2b8] shadow-sm backdrop-blur-md ring-1 ring-[#d4af37]/60 transition hover:bg-black/65 hover:text-white active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d4af37]';

const MODE_BTN_CLASS =
  'flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-xs font-semibold text-[#fef2b8] shadow-sm backdrop-blur-md ring-1 ring-[#d4af37]/60 transition hover:bg-black/70 hover:text-white active:scale-95';

export const TraditionalControls: React.FC<TraditionalControlsProps> = ({
  copy,
  sceneDurationsMs,
  scene,
  loop,
  runKey,
  isPlaying,
  mode,
  onTogglePlay,
  onReplay,
  onToggleMode,
}) => (
  <>
    {mode === 'auto' && (
      <div
        className='absolute inset-x-[4%] top-[1.4%] z-20 flex gap-1.5'
        role='progressbar'
        aria-label={copy.sceneLabel}
        aria-valuemin={1}
        aria-valuemax={sceneDurationsMs.length}
        aria-valuenow={scene + 1}
      >
        {sceneDurationsMs.map((duration, index) => (
          <span key={index} className='h-0.75 flex-1 overflow-hidden rounded-full bg-white/30'>
            {index === scene ? (
              <span
                key={`${runKey}-${loop}-${scene}`}
                className='traditional-progress block h-full w-full rounded-full bg-gradient-to-r from-[#cf9b3a] via-[#fff5cc] to-[#cf9b3a]'
                style={{ '--scene-dur': `${duration}ms` } as React.CSSProperties}
              />
            ) : (
              <span
                className='block h-full w-full origin-left rounded-full bg-[#fef2b8]'
                style={{ transform: `scaleX(${index < scene ? 1 : 0})` }}
              />
            )}
          </span>
        ))}
      </div>
    )}

    <div className='absolute left-[4%] top-[3.2%] z-20 flex items-center gap-1.5'>
      {mode === 'auto' && (
        <>
          <button
            type='button'
            id='traditional-toggle-play'
            onClick={onTogglePlay}
            aria-pressed={!isPlaying}
            aria-label={isPlaying ? copy.pause : copy.play}
            title={isPlaying ? copy.pause : copy.play}
            className={BUTTON_CLASS}
          >
            {isPlaying ? <Pause className='size-3.5' /> : <Play className='size-3.5 translate-x-px' />}
          </button>
          <button
            type='button'
            id='traditional-replay'
            onClick={onReplay}
            aria-label={copy.replay}
            title={copy.replay}
            className={BUTTON_CLASS}
          >
            <RotateCcw className='size-3.5' />
          </button>
        </>
      )}

      <button
        type='button'
        id='traditional-toggle-mode'
        onClick={onToggleMode}
        aria-label={mode === 'auto' ? copy.scrollMode : copy.autoMode}
        title={mode === 'auto' ? copy.scrollMode : copy.autoMode}
        className={MODE_BTN_CLASS}
      >
        {mode === 'auto' ? (
          <>
            <ScrollText className='size-3.5 text-[#fef2b8]' />
            <span>{copy.scrollMode}</span>
          </>
        ) : (
          <>
            <Film className='size-3.5 text-[#fef2b8]' />
            <span>{copy.autoMode}</span>
          </>
        )}
      </button>
    </div>
  </>
);
