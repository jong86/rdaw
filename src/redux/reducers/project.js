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

    case 'CHANGE_PLAYHEAD_POSITION': {
      return {
        ...state,
        playheadPosition: state.playheadPosition + action.amount,
      }
    }


    default: {
      return { ...state }
    }
  }
}
