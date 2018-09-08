import {
  getTimePerBar,
  getTimePerTimelineDivision,
  getLongestTrackInfo,
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

describe('getLongestTrackInfo function', () => {
  it('returns proper "longest track info"', () => {
    const note = { duration: 5 }

    const tracks = [
      {
        timeline: Array(10).fill(Array(1).fill(note))
      },
      {
        timeline: Array(20).fill(Array(1).fill(note))
      },
      {
        timeline: Array(30).fill(Array(1).fill(note))
      },
      {
        timeline: Array(10).fill(Array(1).fill(note))
      },
    ]

    const { track, index, timelineFinish } = getLongestTrackInfo(tracks)
    expect(track).toBe(tracks[2])
    expect(index).toEqual(2)
    expect(timelineFinish).toEqual(35)
  })
})
