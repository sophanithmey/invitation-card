import React from 'react';
import { Film, Pause, Play, RotateCcw, ScrollText } from 'lucide-react';
import { VillaCopy } from './villa-copy';

export type VillaViewMode = 'auto' | 'scroll';

interface VillaControlsProps {
  copy: VillaCopy;
  sceneDurationsMs: readonly number[];
  scene: number;
  loop: number;
  runKey: number;
  isPlaying: boolean;
  mode: VillaViewMode;
  onTogglePlay: () => void;
  onReplay: () => void;
  onToggleMode: () => void;
}

const BUTTON_CLASS =
  'grid size-8 place-items-center rounded-full bg-white/40 text-[#4f7fa3] shadow-xs backdrop-blur-md ring-1 ring-white/60 transition hover:bg-white/70 hover:text-[#2f5f84] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b8863b]';

const MODE_BTN_CLASS =
  'flex items-center gap-1.5 rounded-full bg-white/45 px-2.5 py-1 text-xs font-semibold text-[#4f7fa3] shadow-xs backdrop-blur-md ring-1 ring-white/60 transition hover:bg-white/75 hover:text-[#2f5f84] active:scale-95';

export const VillaControls: React.FC<VillaControlsProps> = ({
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
          <span key={index} className='h-0.75 flex-1 overflow-hidden rounded-full bg-white/45'>
            {index === scene ? (
              <span
                key={`${runKey}-${loop}-${scene}`}
                className='villa-progress block h-full w-full rounded-full bg-white'
                style={{ '--scene-duration': `${duration}ms` } as React.CSSProperties}
              />
            ) : (
              <span
                className='block h-full w-full origin-left rounded-full bg-white'
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
            id='villa-toggle-play'
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
            id='villa-replay'
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
        id='villa-toggle-mode'
        onClick={onToggleMode}
        aria-label={mode === 'auto' ? copy.scrollMode : copy.autoMode}
        title={mode === 'auto' ? copy.scrollMode : copy.autoMode}
        className={MODE_BTN_CLASS}
      >
        {mode === 'auto' ? (
          <>
            <ScrollText className='size-3.5' />
            <span>{copy.scrollMode}</span>
          </>
        ) : (
          <>
            <Film className='size-3.5' />
            <span>{copy.autoMode}</span>
          </>
        )}
      </button>
    </div>
  </>
);
