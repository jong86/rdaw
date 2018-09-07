// @flow
import audioContext from '../music/audioContext';
import { getIndexOfLongestSubArray } from './arrays';

export function getTimePerBar(bpm: number): number {
  return 1 / (bpm / 240)
}

export function getTimePerTimelineDivision(bpm: number): number {
  return getTimePerBar(bpm) / 4096
}

export function currentTime(): number {
  return audioContext.currentTime
}

export function getLengthOfLongestTrackTimeline(tracks: Array<Object>): number {
  return getLengthOfLongestSubArray(tracks.map(track => track.timeline))
}