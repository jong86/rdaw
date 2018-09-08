// @flow
import initialState from '../initialState';
import { store } from '../store';
import {
  getTimePerTimelineDivision,
  getLongestTrackInfo,
} from '../../util/music';

export function startPlayheadAnimation(project: Object, tracks: Object): void {
  if (project.isLooping) {
    const { barWidth, bpm } = project
    setLoopingPlayheadAnimation(bpm, barWidth, tracks)
  } else {
    setContinuousPlayheadAnimation()
  }
}

function setLoopingPlayheadAnimation(bpm: number, barWidth: number, tracks: Object): void {
  const pixelsPerTimelineDivision = barWidth / 4096

  // Get starting playhead position (just use 0 for now) to use for 'from'
  const timelineStart: number = 0 * barWidth;

  // Get length of longest track, and the last item's duration to use for 'to'
  const { index: i, timelineFinish } = getLongestTrackInfo(tracks)

  // Get bpm, and using the length calculate animation duration
  const duration: number = (timelineFinish - timelineStart) * getTimePerTimelineDivision(bpm) * 1000

  store.dispatch({
    type: 'UPDATE_PLAYHEAD_ANIMATION',
    from: timelineStart * pixelsPerTimelineDivision,
    to: timelineFinish * pixelsPerTimelineDivision,
    duration: duration, // in ms
  })
}

function setContinuousPlayheadAnimation() {

}

export function stopPlayheadAnimation(): void {
  store.dispatch({
    type: 'UPDATE_PLAYHEAD_ANIMATION',
    from: 0,
    to: 0,
    duration: 0,
  })
}

export function setIsPlaying(isPlaying: boolean): void {
  store.dispatch({
    type: 'SET_IS_PLAYING',
    isPlaying: isPlaying
  })
}

export default (state: Object = initialState.project, action: Object): Object => {
  switch (action.type) {
    case 'SET_IS_PLAYING': {
      return {
        ...state,
        isPlaying: action.isPlaying,
      }
    }

    case 'UPDATE_PLAYHEAD_ANIMATION': {
      return {
        ...state,
        playheadAnimation: {
          from: action.from,
          to: action.to,
          duration: action.duration,
        },
      }
    }

    case 'SET_IS_RECORDING_ARMED': {
      return {
        ...state,
        isRecordingArmed: action.isRecordingArmed,
      }
    }


    default: {
      return { ...state }
    }
  }
}
