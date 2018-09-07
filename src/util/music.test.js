import {
  getTimePerBar,
  getTimePerTimelineDivision,
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
