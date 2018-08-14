// @flow
import initialState from '../initialState';
import type { note } from '../../defs/defs.js.flow';
import NoteMaker from './reducerUtils/NoteMaker';

export default (state: Object = initialState.tracks, action: Object): Object => {
  switch (action.type) {
    case 'CREATE_NOTE': {
      const {
        trackIndex,
      } = action.options;

      const timelineCopy = state[trackIndex].timeline.slice()

      const noteMaker: Object = new NoteMaker(
        timelineCopy,
        action.options,
      );

      state[trackIndex] = {
        ...state[trackIndex],
        timeline: noteMaker.getNewTimeline(),
      };

      return state;
    }

    case 'DELETE_NOTE': {
      const { initiatorId, trackId }  = action.options;

      // Delete note here

      return state;
    }


    default: {
      return state;
    }
  }
}
