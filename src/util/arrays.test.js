import {
  arrayFrom,
  getIndexOfLongestSubArray,
  getLengthOfLongestSubArray
} from './arrays';

describe('getIndexOfLongestSubArray function', () => {
  let array = []
  array[0] = [0, 0, 0]
  array[1] = [0, 0, 0, 0]
  array[2] = [0, 0, 0, 0]

  it('returns index of the longest sub-array (if there is a tie, the first one of that length)', () => {
    const index = getIndexOfLongestSubArray(array);
    expect(index).toEqual(1)
  })
})

describe('getLengthOfLongestSubArray function', () => {
  let array = []
  array[0] = [0, 0, 0]
  array[1] = [0, 0, 0, 0]
  array[2] = [0, 0, 0, 0]

  it('returns length of the longest sub-array (if there is a tie, the first one of that length)', () => {
    const index = getLengthOfLongestSubArray(array);
    expect(index).toEqual(4)
  })
})
