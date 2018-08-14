// @flow
import initialState from '../initialState';
import type { note } from '../../defs/defs.js.flow';
import NoteMaker from './reducerUtils/NoteMaker';

export default (state: Object = initialState.tracks, action: Object): Object => {
  let trackIndex, initiatorId;

  switch (action.type) {
    case 'CREATE_NOTE':
      trackIndex = action.options.trackIndex;

      const noteMaker: Object = new NoteMaker(
        state.list[trackIndex].timeline,
        action.options,
      );

      state.list[trackIndex] = {
        ...state.list[trackIndex],
        timeline: noteMaker.getNewTimeline(),
      };

      return state;

    case 'DELETE_NOTE':
      trackIndex = action.options.trackIndex;
      trackIndex = action.options.initiatorId;

      // Delete note here

      return state;


    default:
      return state;
  }
}
