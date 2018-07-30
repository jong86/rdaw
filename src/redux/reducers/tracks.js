// @flow
import initialState from '../initialState';
import type { note } from '../../defs/defs.js.flow';
import { insertNoteFramesToTimeline } from './reducerUtils/tracksUtil';

export default (state: Object = initialState.tracks, action: Object): Object => {
  switch (action.type) {
    case 'CREATE_NOTE':
      let { trackIndex, duration, startsAt, midiNum }: note = action.options;

      console.log('trackIndex, duration, startsAt', trackIndex, duration, startsAt);

      const noteOptions = {
        duration,
        startsAt,
        midiNum,
      }

      const newTimeline = insertNoteFramesToTimeline(
        state.list[trackIndex].timeline,
        noteOptions
      );

      console.log('newTimeline', newTimeline);



      return {
        ...state,
      }

    default:
      return state
  }
}
