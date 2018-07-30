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

function deleteNoteFrameIfSameExistsAtFrame(timeline, frame) {
  // if (timeline[frame].)
}

function insertAndOverwriteNoteFrameAtFrame(midiNum, frame, noteFrameType, initiatorId) {
  createNoteFrameArrayAtFrameIfNone(timeline, frame);
  deleteNoteFrameIfSameExistsAtFrame(timeline, frame);
  const noteFrame = createNoteFrame(noteFrameType, midiNum, initiatorId);
  timeline[frame].push(noteFrame);
}

function insertNoteFramesToTimeline(timeline, noteOptions) {
  const {
    duration,
    startsAt,
    midiNum,
  } = noteOptions;

  insertAndOverwriteNoteFrameAtFrame(midiNum, startsAt, 'INITIATOR');

  for (let i = startsAt + 1; i < duration; i++) {
    insertAndOverwriteNoteFrameAtFrame(midiNum, i, 'CONTINUATION', initiator.id);
  }

  return timeline;
}

export class TimelineModifier {
  constructor(timeline, noteOptions) {
    this.timeline = timeline;
    this.noteOptions = noteOptions;
  }
}