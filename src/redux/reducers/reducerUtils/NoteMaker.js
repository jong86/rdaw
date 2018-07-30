var shortid = require('shortid');

class NoteMaker {
  constructor(timeline, noteOptions) {
    this.timeline = timeline;
    this.noteOptions = noteOptions;
    this.initiatorId = shortid.generate();
  }

  getNewTimeline() {
    const {
      duration,
      startsAt,
      midiNum,
    } = this.noteOptions;

    this.insertAndOverwriteNoteFrameAtFrame(startsAt, 'INITIATOR');

    for (let i = startsAt + 1; i < duration; i++) {
      this.insertAndOverwriteNoteFrameAtFrame(i, 'CONTINUATION');
    }

    return this.timeline;
  }

  insertAndOverwriteNoteFrameAtFrame(frame, noteFrameType) {
    this.createNoteFrameArrayAtFrameIfNone(frame);
    this.deleteNoteFrameIfSameExistsAtFrame(frame);
    const noteFrame = this.createNoteFrame(noteFrameType);
    this.timeline[frame].push(noteFrame);
  }

  deleteNoteFrameIfSameExistsAtFrame(frame) {
    // if (timeline[frame].)
  }

  createNoteFrameArrayAtFrameIfNone(frame) {
    // Ensures the note-frame array exists at that frame
    if (!Array.isArray(this.timeline[frame])) {
      this.timeline[frame] = [];
    }
  }

  createNoteFrame(type) {
    const noteFrame = {
      type: type,
      midiNum: this.noteOptions.midiNum,
    };

    if (type === 'INITIATOR'){
      noteFrame.id = this.initiatorId;
    } else {
      noteFrame.initiatorId = type === 'INITIATOR' ? null : this.initiatorId
    }

    return noteFrame;
  }
}

export default NoteMaker;