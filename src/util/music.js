// @flow
import audioContext from '../music/audioContext';

export function getTimePerBar(bpm: number): number {
  return 1 / (bpm / 240)
}

export function currentTime(): number {
  return audioContext.currentTime;
}