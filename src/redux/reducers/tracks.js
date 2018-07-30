// @flow
import initialState from '../initialState';
import type { note } from '../../defs/defs.js.flow';
import NoteMaker from './reducerUtils/NoteMaker';

export default (state: Object = initialState.tracks, action: Object): Object => {
  switch (action.type) {
    case 'CREATE_NOTE':
      let { trackIndex, duration, startsAt, midiNum }: note = action.options;

      const noteOptions = {
        duration,
        startsAt,
        midiNum,
      }

      const noteMaker = new NoteMaker(
        state.list[trackIndex].timeline,
        noteOptions
      );

      console.log('timelineModifier.getNewTimeline();', noteMaker.getNewTimeline());

      return {
        ...state,
      }

    default:
      return state
  }
}
