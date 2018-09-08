// @flow

export function arrayFrom(a: number, b: number): Array<number> {
  const array: Array<number> = [];

  for (let i: number = a; i < b; i++) {
    array.push(i);
  }

  return array;
}

export function getIndexOfLongestSubArray(array: Array<Array<any>>): number {
  let longestIndex: number = 0;

  for (let i: number = 1; i < array.length; i++) {
    if (i > 0 && array[i].length > array[longestIndex].length) {
      longestIndex = i
    }
  }

  return longestIndex
}

export function getLengthOfLongestSubArray(array: Array<Array<any>>): number {
  let longestLengthFound: number = array[0].length;

  for (let i: number = 1; i < array.length; i++) {
    if (array[i].length > longestLengthFound) {
      longestLengthFound = array[i].length
    }
  }

  return longestLengthFound
}