// @flow
import initialState from '../initialState';
import { store } from '../store';

export function updatePlayheadAnimation(barNum: number, barWidth: number, duration: number): void {
  store.dispatch({
    type: 'UPDATE_PLAYHEAD_ANIMATION',
    from: barNum * barWidth,
    to: (barNum * barWidth) + barWidth,
    duration: duration * 1000,
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


    default: {
      return { ...state }
    }
  }
}
