const uuid = require('uuid4');

export function createNoteFrame(type, midiNum, initiatorId) {
  return {
    id: uuid(),
    midiNum,
    type,
    initiatorId: type === 'INITIATOR' ? null : initiatorId,
  }
}

export function createNoteFrameArray(midiNum, duration) {
  const noteFrameArray = [];

  const initiator = createNoteFrame('INITIATOR', midiNum);

  noteFrameArray.push(initiator);

  for (let i = 1; i < duration; i++) {
    noteFrameArray.push(createNoteFrame('CONTINUATION', midiNum, initiator.id));
  }

  return noteFrameArray;
}
