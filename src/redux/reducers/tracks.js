// @flow
import initialState from '../initialState';
import type { note } from '../../defs/defs.js.flow';
import shortid from 'shortid';

function newNote(duration, midiNum) {
  return {
    id: shortid.generate(),
    duration: duration,
    midiNum: midiNum,
  }
}

export default (state: Array<Object> = initialState.tracks, action: Object): Array<Object> => {
  switch (action.type) {
    case 'CREATE_NOTE': {
      const {
        trackIndex,
        startsAt,
        duration,
        midiNum,
      } = action.options;

      const timeline = state[trackIndex].timeline.slice()

      if (!Array.isArray(timeline[startsAt])) {
        timeline[startsAt] = [];
      }

      timeline[startsAt] = timeline[startsAt].concat([newNote(duration, midiNum)])

      state[trackIndex].timeline = timeline

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
