import {
  getTimePerBar,
  getTimePerTimelineDivision,
  getLengthOfLongestTimeline,
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

describe('getLengthOfLongestTimeline function', () => {
  it('returns correct length (in timeline array indices) of longest timeline', () => {
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

    const length = getLengthOfLongestTimeline(tracks)
    expect(length).toEqual(30)
  })
})
