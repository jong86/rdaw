import {
  getTimePerBar,
  getTimePerTimelineDivision,
  getTrackWithLongestTimeline,
} from './music'

describe('getTimePerBar function', () => {
  it('returns correct time (in seconds) per bar for a given bpm', () => {
    const time = getTimePerBar(120)
    expect(time).toEqual(2)
  })
})

describe('getTimePerTimelineDivision function', () => {
  it('returns correct time (in seconds) per timeline division for a given bpm', () => {
    const time = getTimePerTimelineDivision(120)
    expect(time).toEqual(2/4096)
  })
})

describe('getTrackWithLongestTimeline function', () => {
  it('returns object with longest track and it\'s index', () => {
    const tracks = [
      {
        timeline: Array(10).fill([])
      },
      {
        timeline: Array(20).fill([])
      },
      {
        timeline: Array(30).fill([])
      },
      {
        timeline: Array(10).fill([])
      },
    ]

    const { track, index } = getTrackWithLongestTimeline(tracks)
    expect(track.timeline.length).toEqual(30)
    expect(index).toEqual(2)
  })
})
