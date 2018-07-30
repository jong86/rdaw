var shortid = require('shortid');

function createNoteFrame(type, midiNum, initiatorId) {
  const noteFrame = {
    midiNum,
    type,
  }

  if (type === 'INITIATOR'){
    noteFrame.id = shortid.generate()
  } else {
    noteFrame.initiatorId = type === 'INITIATOR' ? null : initiatorId
  }

  return noteFrame;
}

function createNoteFrameArrayAtFrameIfNone(timeline, frame) {
  // Ensures the note-frame array exists at that frame
  if (!Array.isArray(timeline[frame])) {
    timeline[frame] = [];
  }
}

export function insertNoteFramesToTimeline(timeline, noteOptions) {
  const {
    duration,
    startsAt,
    midiNum,
  } = noteOptions;

  createNoteFrameArrayAtFrameIfNone(timeline, startsAt);
  const initiator = createNoteFrame('INITIATOR', midiNum);
  timeline[startsAt].push(initiator);

  for (let i = startsAt + 1; i < duration; i++) {
    createNoteFrameArrayAtFrameIfNone(timeline, i);
    const noteFrame = createNoteFrame('CONTINUATION', midiNum, initiator.id);
    timeline[i].push(noteFrame);
  }

  // Need a STOPPER note ?

  // return noteFrameArray;
  return timeline;
}
