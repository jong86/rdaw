// @flow
import initialState from '../initialState';
import type { note } from '../../defs/defs.js.flow';
import { createNoteFrameArray } from './reducerUtils/tracksUtil';

export default (state: Object = initialState.tracks, action: Object): Object => {
  switch (action.type) {
    case 'CREATE_NOTE':
      let { trackIndex, duration, startsAt, midiNum }: note = action.options;

      console.log('trackIndex, duration, startsAt', trackIndex, duration, startsAt);


      // 1. Create array of note objects to insert (One Initiator, many Continuations)
      const noteFrameArray = createNoteFrameArray(24, 4096);
      console.log('noteFrameArray', noteFrameArray);

      // 2. Insert these note objects in subsequent positions in the timeline array



      return {
        ...state,
      }

    default:
      return state
  }
}
