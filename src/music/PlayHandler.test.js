import PlayHandler from './PlayHandler';

describe('PlayHandler class', () => {
  beforeAll(() => {
    timeline = new NoteMaker(timeline, note).getNewTimeline()
  })

  describe('startPlaying method', () => {
    test('creates correct amount of noteFrames in timeline array', () => {
      expect(timeline.length).toEqual(note.startsAt + note.duration);
    })
  })

  describe('stopPlaying method', () => {

  })

  describe('scheduleNotes method', () => {

  })
})

