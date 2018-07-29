// @flow

export function countFrom(a: number, b: number): Array<number> {
  const array = [];

  for (let i = a; i < b; i++) {
    array.push(i);
  }

  return array;
}