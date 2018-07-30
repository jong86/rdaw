// @flow
import initialState from '../initialState';
import type { note } from '../../defs/defs.js.flow';

export default (state: Object = initialState.tracks, action: Object): Object => {
  switch (action.type) {
    case 'CREATE_NOTE':
      // let { trackIndex, duration, startsAt }: note = action;

  console.log('action.options', action.options);

      // 1. Get index of track from tracks.list


      // 2. Create array of note objects to insert (One Initiator, many Continuations)


      // 3. Insert these note objects in subsequent positions in the timeline array



      return {
        ...state,
      }

    default:
      return state
  }
}
