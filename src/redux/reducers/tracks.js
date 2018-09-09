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
      } = action.options

      const stateCopy = state.slice()
      const timeline = stateCopy[trackIndex].timeline.slice()

      if (!Array.isArray(timeline[startsAt])) {
        timeline[startsAt] = []
      }

      timeline[startsAt] = timeline[startsAt].concat([newNote(duration, midiNum)])

      stateCopy[trackIndex].timeline = timeline

      return stateCopy
    }

    case 'DELETE_NOTE': {
      const {
        trackIndex,
        timelineIndex,
        id
      } = action.options

      const stateCopy = state.slice()
      let timeline = stateCopy[trackIndex].timeline.slice()

      const indexInFrame = timeline[timelineIndex].findIndex(item => item.id === id)

      timeline[timelineIndex].splice(indexInFrame, 1)

      if (Array.isArray(timeline[timelineIndex]) && timeline[timelineIndex].length === 0) {
        timeline[timelineIndex] = null
      }

      stateCopy[trackIndex].timeline = timeline

      return stateCopy
    }


    default: {
      return state
    }
  }
}
