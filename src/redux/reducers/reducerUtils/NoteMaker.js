// @flow
import shortid from 'shortid';
import type { note } from '../../../defs/defs.js.flow';

class NoteMaker {
  /*
    Definitions:
    'noteFrames' are the smallest elements
    'frames' have multiple 'noteFrames'
    'timeline' has multiple 'frames'
    => A collection of connected noteFrames across multiple subsequent frames,
    are what make up notes
  */

  timeline: Array<Array<Object>>;
  noteOptions: Object;
  initiatorId: string;

  constructor(timeline: Array<Array<Object>>, noteOptions: Object): void {
    this.timeline = timeline;
    this.noteOptions = noteOptions;
    this.initiatorId = shortid.generate();
  }

  getNewTimeline(): Array<Array<Object>> {
    const {
      duration,
      startsAt,
      midiNum,
    } = this.noteOptions;

    this._insertAndOverwriteNoteFrameAtFrame(startsAt, 'INITIATOR');

    for (let i: number = startsAt + 1; i < (startsAt + duration); i++) {
      this._insertAndOverwriteNoteFrameAtFrame(i, 'CONTINUATION');
    }

    return this.timeline;
  }

  _insertAndOverwriteNoteFrameAtFrame(frame: number, noteFrameType: string): void {
    this._createNoteFrameArrayAtFrameIfNone(frame);
    this._deleteNoteFrameIfSameExistsAtFrame(frame);
    this.timeline[frame].push(this._createNoteFrame(noteFrameType));
  }

  _createNoteFrameArrayAtFrameIfNone(frame: number): void {
    // Ensures the note-frame array exists at that frame
    if (!Array.isArray(this.timeline[frame])) {
      this.timeline[frame] = [];
    }
  }

  _deleteNoteFrameIfSameExistsAtFrame(frame: number): void {
    // Deletes same notes if overwritten (only one note of midiNum and position allowed)
    this.timeline[frame].forEach((noteFrame, index) => {
      if (noteFrame.midiNum === this.noteOptions.midiNum) {
        this.timeline[frame].splice(index, 1);
      }
    })
  }

  _createNoteFrame(type: string): Object {
    const noteFrame: {
      id: ?string,
      initiatorId: ?string,
      type: string,
      midiNum: number,
    } = {
      id: null,
      initiatorId: null,
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