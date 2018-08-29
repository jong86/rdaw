// @flow
import initialState from '../initialState';

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
