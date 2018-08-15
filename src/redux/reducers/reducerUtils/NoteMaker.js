const shortid = require('shortid');

class NoteMaker {
  /*
    Definitions:
    'noteFrames' are the smallest elements
    'frames' have multiple 'noteFrames'
    'timeline' has multiple 'frames'
    => A collection of connected noteFrames across multiple subsequent frames,
    are what make up notes
  */

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

    this._insertAndOverwriteNoteFrameAtFrame(startsAt, 'INITIATOR');

    for (let i = startsAt + 1; i < (startsAt + duration); i++) {
      this._insertAndOverwriteNoteFrameAtFrame(i, 'CONTINUATION');
    }

    return this.timeline;
  }

  _insertAndOverwriteNoteFrameAtFrame(frame, noteFrameType) {
    this._createNoteFrameArrayAtFrameIfNone(frame);
    this._deleteNoteFrameIfSameExistsAtFrame(frame);
    const noteFrame = this._createNoteFrame(noteFrameType);
    this.timeline[frame].push(noteFrame);
  }

  _createNoteFrameArrayAtFrameIfNone(frame) {
    // Ensures the note-frame array exists at that frame
    if (!Array.isArray(this.timeline[frame])) {
      this.timeline[frame] = [];
    }
  }

  _deleteNoteFrameIfSameExistsAtFrame(frame) {
    // Deletes same notes if overwritten (only one note of midiNum and position allowed)
    this.timeline[frame].forEach((noteFrame, index) => {
      if (noteFrame.midiNote === this.noteOptions.midiNote) {
        this.timeline[frame].splice(index, 1);
      }
    })
  }

  _createNoteFrame(type) {
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