// @flow
import context from '../audioContext'

export default class {
  masterGain: Object;

  constructor(): void {
    this.masterGain = context.createGain();
    this.masterGain.connect(context.destination);
  }

  // has all the fx that return 'this' to make them chainable
}