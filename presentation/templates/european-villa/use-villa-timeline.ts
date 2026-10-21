'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type ScenePhase = 'in' | 'out';

interface TimelineState {
  scene: number;
  phase: ScenePhase;
  loop: number;
}

export interface VillaTimeline extends TimelineState {
  isPlaying: boolean;
  runKey: number;
  togglePlay: () => void;
  replay: () => void;
}

const EXIT_DURATION_MS = 800;
const MAX_FRAME_DELTA_MS = 100;
const INITIAL_STATE: TimelineState = { scene: 0, phase: 'in', loop: 0 };

/**
 * Drives a looping, pausable sequence of scenes like a short video.
 * Only re-renders when the scene or its phase changes.
 */
export function useVillaTimeline(sceneDurationsMs: readonly number[]): VillaTimeline {
  const [state, setState] = useState<TimelineState>(INITIAL_STATE);
  const [isPlaying, setIsPlaying] = useState(true);
  const [runKey, setRunKey] = useState(0);
  const elapsedRef = useRef(0);
  const stateRef = useRef<TimelineState>(INITIAL_STATE);

  useEffect(() => {
    if (!isPlaying) return;
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = Math.min(now - last, MAX_FRAME_DELTA_MS);
      last = now;
      elapsedRef.current += delta;

      const current = stateRef.current;
      const duration = sceneDurationsMs[current.scene];
      let next = current;

      if (elapsedRef.current >= duration) {
        elapsedRef.current = 0;
        const isLast = current.scene === sceneDurationsMs.length - 1;
        next = {
          scene: isLast ? 0 : current.scene + 1,
          phase: 'in',
          loop: isLast ? current.loop + 1 : current.loop,
        };
      } else if (current.phase === 'in' && elapsedRef.current >= duration - EXIT_DURATION_MS) {
        next = { ...current, phase: 'out' };
      }

      if (next !== current) {
        stateRef.current = next;
        setState(next);
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isPlaying, sceneDurationsMs, runKey]);

  const togglePlay = useCallback(() => setIsPlaying((playing) => !playing), []);

  const replay = useCallback(() => {
    elapsedRef.current = 0;
    stateRef.current = INITIAL_STATE;
    setState(INITIAL_STATE);
    setRunKey((key) => key + 1);
    setIsPlaying(true);
  }, []);

  return { ...state, isPlaying, runKey, togglePlay, replay };
}
