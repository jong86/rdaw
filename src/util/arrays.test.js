import {
  arrayFrom,
  getIndexOfLongestSubArray,
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
