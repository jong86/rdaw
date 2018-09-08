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

export function getLongestTrackInfo(tracks: Array<Object>): Object {
  const i = getIndexOfLongestSubArray(tracks.map(track => track.timeline))
  const longestTrack = tracks[i]

  let timelineFinish = 0
  if (longestTrack.timeline.length > 0) {
    timelineFinish = longestTrack.timeline.length + longestTrack.timeline.slice(-1)[0][0].duration
  }

  return {
    track: longestTrack,
    index: i,
    timelineFinish: timelineFinish,
  }
}