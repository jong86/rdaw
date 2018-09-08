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

export function getTrackWithLongestTimeline(tracks: Array<Object>): Object {
  const index = getIndexOfLongestSubArray(tracks.map(track => track.timeline))
  return {
    track: tracks[index],
    index: index,
  }
}