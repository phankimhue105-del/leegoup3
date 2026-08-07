/**
 * Audio Manager Interfaces
 */

export type SoundEffectType =
  | 'click'
  | 'correct'
  | 'incorrect'
  | 'star'
  | 'fanfare'
  | 'record_start'
  | 'record_stop';

export interface AudioPlaybackState {
  isPlaying: boolean;
  currentSrc: string | null;
  playbackRate: number;
  duration: number;
  currentTime: number;
}
