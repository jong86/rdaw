import NoteMaker from './NoteMaker';

describe('NoteMaker class', () => {
  const note = {
    duration: 1024,
    startsAt: 2048,
    midiNum: 26,
  }

  let timeline = [];

  beforeAll(() => {
    timeline = new NoteMaker(timeline, note).getNewTimeline()
  })

  test('creates correct amount of noteFrames in timeline array', () => {
    expect(timeline.length).toEqual(3072);
  })

  test('note begins at correct index', () => {
    expect(timeline[2048][0].type).toEqual('INITIATOR');
  })

  test('remaining note frames have type CONTINUATION', () => {
    const filteredTimeline = timeline.filter(subArray => {
      const filterSubArray = subArray.filter(noteFrame => noteFrame.type === 'CONTINUATION')
      if (filterSubArray.length > 0) {
        return true
      }
    })
    expect(filteredTimeline.length).toEqual(1024 - 1);
  })

  test('multiple notes of different midiNums can exist at the same time (polyphonic)', () => {
    const note2 = {
      duration: note.duration,
      startsAt: note.startsAt,
      midiNum: note.midiNum + 1,
    }

    const timeline2 = new NoteMaker(timeline, note2).getNewTimeline()

    expect(timeline2[note2.startsAt].length).toEqual(2)
    expect(timeline2[note2.startsAt + note2.duration - 1].length).toEqual(2)
  })
})

