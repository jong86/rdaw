// @flow
import initialState from '../initialState';
import type { note } from '../../defs/defs.js.flow';
import NoteMaker from './reducerUtils/NoteMaker';

export default (state: Object = initialState.tracks, action: Object): Object => {
  switch (action.type) {
    case 'CREATE_NOTE':
      let { trackIndex }: note = action.options;

      const noteMaker: Object = new NoteMaker(
        state.list[trackIndex].timeline,
        action.options,
      );

      state.list[trackIndex] = {
        ...state.list[trackIndex],
        timeline: noteMaker.getNewTimeline(),
      };

      return state;

    default:
      return state;
  }
}
