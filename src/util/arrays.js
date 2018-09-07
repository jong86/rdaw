// @flow

export function arrayFrom(a: number, b: number): Array<number> {
  const array: Array = [];

  for (let i: number = a; i < b; i++) {
    array.push(i);
  }

  return array;
}

export function getIndexOfLongestSubArray(array: Array<Array>): number {
  let longestFound: number = 0;

  array.forEach((subArray, i) => {
    if (i > 0 && subArray.length > array[longestFound].length) {
      longestFound = i
    }
  })

  return longestFound
}