// @flow
import initialState from '../initialState';

export default (state: Object = initialState.project, action: Object): Object => {
  switch (action.type) {
    case 'SET_IS_PLAYING':
      return {
        ...state,
        isPlaying: action.isPlaying
      }

    default:
      return { ...state }
  }
}
